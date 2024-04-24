import "./style.css";
import Dropdown from "./Dropdown";

const dropdownButton = document.querySelector(".dropdown-button");

const dropdown = new Dropdown(dropdownButton);

dropdown.init();
