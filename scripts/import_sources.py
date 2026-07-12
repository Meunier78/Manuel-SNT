from pathlib import Path
from urllib.parse import urljoin

import requests
from bs4 import BeautifulSoup


SOURCE_URL = (
    "https://lesmanuelslibres.region-academique-idf.fr/"
    "snt-seconde/Internet/Qu%20est%20ce%20qu%20Internet.html"
)

OUTPUT_FILE = Path(
    "docs/internet/ouverture-du-chapitre/"
    "qu-est-ce-qu-internet.md"
)


def remove_boilerplate(soup: BeautifulSoup) -> None:
    """Supprime les éléments inutiles provenant du site source."""

    for tag in soup.select(
        "script, style, noscript, nav, header, footer"
    ):
        tag.decompose()

    unwanted_texts = (
        "Manuels libres",
        "Voir dans Pearltrees",
        "Télécharger le manuel",
        "Sous réserve des droits",
    )

    for text_node in list(soup.find_all(string=True)):
        text = text_node.strip()

        if not text:
            continue

        if any(phrase.lower() in text.lower() for phrase in unwanted_texts):
            parent = text_node.find_parent(
                ["p", "div", "section", "aside", "figure"]
            )

            if parent:
                parent.decompose()

        elif text.lower().startswith("source :"):
            parent = text_node.find_parent(
                ["p", "div", "section"]
            )

            if parent:
                parent.decompose()


def make_urls_absolute(soup: BeautifulSoup) -> None:
    """Transforme les liens et images relatifs en URL absolues."""

    for tag in soup.find_all(href=True):
        tag["href"] = urljoin(SOURCE_URL, tag["href"])

        if tag.name == "a":
            tag["target"] = "_blank"
            tag["rel"] = "noopener"

    for tag in soup.find_all(src=True):
        tag["src"] = urljoin(SOURCE_URL, tag["src"])


def extract_content(html: str) -> tuple[str, str]:
    soup = BeautifulSoup(html, "html.parser")

    remove_boilerplate(soup)

    title_tag = soup.find("h1")

    if title_tag is None:
        raise RuntimeError("Aucun titre H1 trouvé dans la page source.")

    title = title_tag.get_text(" ", strip=True)

    # Recherche d’un conteneur comportant le titre et plusieurs paragraphes.
    container = title_tag

    while container.parent is not None:
        if len(container.find_all("p")) >= 3:
            break

        container = container.parent

    extracted = BeautifulSoup(str(container), "html.parser")

    remove_boilerplate(extracted)
    make_urls_absolute(extracted)

    # Le titre sera recréé proprement en Markdown.
    duplicate_title = extracted.find("h1")

    if duplicate_title:
        duplicate_title.decompose()

    # Suppression de l’intégration Pearltrees éventuelle.
    for iframe in extracted.find_all("iframe"):
        if "pearltrees.com" in iframe.get("src", ""):
            iframe.decompose()

    return title, extracted.decode_contents()


def main() -> None:
    response = requests.get(
        SOURCE_URL,
        timeout=30,
        headers={
            "User-Agent": (
                "Mozilla/5.0 Manuel-SNT educational importer"
            )
        },
    )

    response.raise_for_status()

    title, content = extract_content(response.text)

    markdown = f"""# {title}

<div class="imported-content">

{content}

</div>

<div class="source-note">

Source : [Les Manuels Libres]({SOURCE_URL})  
Licence : [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/deed.fr),
sous réserve des droits de propriété intellectuelle de tiers.

</div>
"""

    OUTPUT_FILE.parent.mkdir(parents=True, exist_ok=True)
    OUTPUT_FILE.write_text(markdown, encoding="utf-8")

    print(f"Page importée : {OUTPUT_FILE}")


if __name__ == "__main__":
    main()
