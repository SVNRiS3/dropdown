export default class Dropdown {
  defaultStyle = {};

  constructor(dropdownButton) {
    this.dropdownButton = dropdownButton;
    this.itemList = dropdownButton.nextElementSibling;
  }

  init() {
    this.dropdownButton.addEventListener("click", () => {
      this.itemList.classList.toggle("hidden");
    });
  }
}
