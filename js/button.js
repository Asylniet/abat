class Button extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const link = this.getAttribute("href");
    const white = this.getAttribute("white");
    this.innerHTML = `
    <a href="${link}" class="button flex ${!white ? "" : "white"}">
    <span class="fs-200">Подробнее</span>
  </a>
          `;
  }
}

customElements.define("button-component", Button);
