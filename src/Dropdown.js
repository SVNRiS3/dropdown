export default class Dropdown {
  defaultStyle = {};

  constructor(dropdownButtonsClassName) {
    this.dropdownButtons = document.querySelectorAll(dropdownButtonsClassName);
  }

  init() {
    this.dropdownButtons.forEach((dropdownButton) => {
      this.itemList = dropdownButton.nextElementSibling;
      dropdownButton.addEventListener("click", () => {
        this.itemList.classList.toggle("hidden");
      });
    });
  }
}
