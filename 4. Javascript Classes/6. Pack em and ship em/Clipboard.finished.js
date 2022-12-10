/**
 * This class is used to copy and paste data to and from the clipboard.
 * @class Clipboard
 * @constructor - Create a new Clipboard object using an html attribute selector. When the copy
 * method is called, the innterText of the element will be copied to the clipboard.
 * @method copy - Copy a value to the clipboard
 */

class Clipboard {
  constructor(selector) {
    this.selector = selector;
  }

  copy() {
    const textToCopy = document.querySelector(this.selector).innerText;

    const myTemporaryInputElement = document.createElement("input");
    myTemporaryInputElement.type = "text";
    myTemporaryInputElement.value = textToCopy;
    myTemporaryInputElement.style.display = "none";

    document.body.appendChild(myTemporaryInputElement);

    myTemporaryInputElement.select();
    document.execCommand("Copy");

    document.body.removeChild(myTemporaryInputElement);
  }
}
