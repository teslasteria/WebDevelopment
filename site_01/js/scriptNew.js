// get the element
const textElement = document.getElementById("takeText");

// check if the element exists
if (textElement) {
    console.log(textElement.textContent);

    // dublicate the text
    const newParagraph = document.createElement("p");
    newParagraph.textContent = textElement.textContent;
    textElement.insertAdjacentElement("afterend", newParagraph);
    console.log("Новый абзац успешно добавлен!");

} else {
    console.error('Элемент не найден! Проверьте id или загрузку DOM.');
}

