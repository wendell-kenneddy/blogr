import { MenuHandler } from "./MenuHandler.js";

const menuButton = document.getElementById("menu-button");
const menuElement = document.getElementById("menu");
const menuHandler = new MenuHandler(menuButton, menuElement);

menuHandler.start();
