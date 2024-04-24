export default class Dropdown {
  defaultStyle = {};

  constructor(dropdownButtonsClassName) {
    this.dropdownButtons = document.querySelectorAll(dropdownButtonsClassName);
  }

  init() {
    this.dropdownButtons.forEach((dropdownButton) => {
      const itemList = dropdownButton.nextElementSibling;
      dropdownButton.addEventListener("click", () => {
        itemList.classList.toggle("hidden");
      });
    });
  }
}
