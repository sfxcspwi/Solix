import header from "bundle-text:/header.html"
import hero from "bundle-text:/hero.html"
import about from "bundle-text:/about.html"
import ingredients from "bundle-text:/ingredients.html"
import howitsmade from "bundle-text:/howitsmade.html"
import products from "bundle-text:/products.html"
import gallery from "bundle-text:/gallery.html"
import reviews from "bundle-text:/reviews.html"
import information from "bundle-text:/information.html"
import footer from "bundle-text:/footer.html"


function insertHtmlFragment(targetId, htmlContent) {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
        targetElement.innerHTML = htmlContent;
    } else {
        console.warn(`Елемент з ID "${targetId}" не знайдено.`);
    }
}


document.addEventListener('DOMContentLoaded', () => {
    insertHtmlFragment("header", header);
    insertHtmlFragment("hero", hero);
    insertHtmlFragment("about", about);
    insertHtmlFragment("ingredients", ingredients);
    insertHtmlFragment("howitsmade", howitsmade);
    insertHtmlFragment("products", products);
    insertHtmlFragment("gallery", gallery);
    insertHtmlFragment("reviews", reviews);
    insertHtmlFragment("information", information);
    insertHtmlFragment("footer", footer);
});