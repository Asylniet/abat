class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const path = this.getAttribute("path");
    this.innerHTML = `
      <header class="header-primary flex column">
      <div class="container">
        <div class="sub-header flex spb">
          <a href="#">
            <img src="/assets/images/logo.png" alt="Abat" class="logo" />
          </a>
          <div class="flex address">
            <img src="/assets/icons/place.svg" alt="Адресс" />
            <span
              >РК, Мангистауская область г. Актау 3Б микрорайон, БЦ «Хаким»
              здание 30, 2 этаж, офис 201</span
            >
          </div>
          <div class="flex contact">
            <img src="/assets/icons/call.svg" alt="Контакты" />
            <a href="tel:+7 771 100 55 77">+7 771 100 55 77</a>
          </div>
          <div class="hamburger">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
      <nav class="flex">
        <div class="container">
          <ul role="list">
            <a href="/" class="${path === "index" && "selected"}">О компании</a>
            <a href="/pages/services.html" class="${
              path === "services" && "selected"
            }">Услуги</a>
            <a href="/pages/staff.html" class="${
              path === "staff" && "selected"
            }">Команда</a>
            <a href="/pages/sertificate.html" class="${
              path === "sertificate" && "selected"
            }">Сертификаты</a>
            <a href="/pages/projects.html" class="${
              path === "projects" && "selected"
            }">Проекты</a>
            <a href="/pages/clients.html" class="${
              path === "clients" && "selected"
            }">Клиенты</a>
            <a href="/pages/contacts.html" class="${
                path === "contacts" && "selected"
              }">Контакты</a>
          </ul>
        </div>
      </nav>
    </header>
      `;
    const body = document.querySelector("body");
    const header = document.querySelector("header");
    const hamburger = document.querySelector(".hamburger");

    window.addEventListener("load", () => {
      hamburger.addEventListener("click", () => {
        if (header.classList.contains("opened")) {
          header.classList.remove("opened");
          body.classList.remove("non-scrollable");
        } else {
          header.classList.add("opened");
          body.classList.add("non-scrollable");
        }
      });
    });
  }
}

customElements.define("header-component", Header);
