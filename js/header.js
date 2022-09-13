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
          <div class="dropdown-menu fs-400 fw-medium">
              <div class="text-holder"></div>
              <img src="/assets/icons/arrow.svg" class="dropdown-arrow">
              <div class="options">
                <div class="option active">RU</div>
                <div class="option">KZ</div>
                <div class="option">EN</div>
              </div>
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
          <ul role="list" class="list-holder">
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

    const dropdown = document.querySelector(".dropdown-menu");
    const textHolder = document.querySelector(".text-holder");
    const options = document.querySelectorAll(".option");
    const arrowImg = document.querySelector(".dropdown-arrow");

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

      if(window.innerWidth <= 1125) {
        document.querySelector(".list-holder").appendChild(dropdown);
        arrowImg.setAttribute('src', '/assets/icons/arrow-white.svg')
      }

      textHolder.innerHTML = document.querySelector(".option.active").innerHTML;

      function openDropDown() {
        dropdown.classList.contains("open")
          ? dropdown.classList.remove("open")
          : dropdown.classList.add("open");
      }
      textHolder.addEventListener("click", () => {
        openDropDown();
      });
      arrowImg.addEventListener("click", () => {
        openDropDown();
      });

      options.forEach((el) => {
        el.addEventListener("click", () => {
          options.forEach((el1) => {
            el1.classList.remove("active");
          });
          el.classList.add("active");
          textHolder.innerHTML = el.innerHTML;
          openDropDown();
        });
      });
    });
  }
}

customElements.define("header-component", Header);
