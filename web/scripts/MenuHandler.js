export class MenuHandler {
  #menuButton;
  #menuElement;
  #isActive = false;

  constructor(menuButton, menuElement) {
    this.#menuButton = menuButton;
    this.#menuElement = menuElement;
  }

  #open() {
    this.#menuElement.classList.add("active");
    this.#menuButton.name = "close-menu";
    this.#isActive = true;
  }

  #close() {
    this.#menuElement.classList.remove("active");
    this.#menuButton.name = "open-menu";
    this.#isActive = false;
  }

  #handleClick() {
    if (this.#isActive === true) {
      this.#close();
      return;
    }
    this.#open();
  }

  start() {
    this.#menuButton.addEventListener("click", () => {
      this.#handleClick();
    });
  }
}
