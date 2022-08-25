class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <footer class="flex">
      <div class="container flex spb start wrap">
        <div class="flex column start">
          <a href="#">О компании</a>
          <a href="#">Услуги</a>
          <a href="#">Команда</a>
          <a href="#">Сертификаты</a>
          <a href="#">Проекты</a>
          <a href="#">Клиенты</a>
          <a href="#">Контакты</a>
        </div>
        <div class="flex column start footer-address">
          <div class="fs-300">Адреса</div>
          <div class="flex address start">
            <img src="/assets/icons/place-white.svg" alt="Адрес" />
            <div class="fs-300">
              130000, Республика Казахстан, Мангистауская область г. Актау 3Б
              микрорайон, БЦ «Хаким» здание 30, 2 этаж, офис 201
            </div>
          </div>
        </div>
        <div class="flex column start">
          <div class="fs-300">Контакты</div>
          <a class="flex fs-300" href="mailto: info@abat-tesc.kz">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.6667 3.33301H3.33335C2.41669 3.33301 1.67502 4.08301 1.67502 4.99967L1.66669 14.9997C1.66669 15.9163 2.41669 16.6663 3.33335 16.6663H16.6667C17.5834 16.6663 18.3334 15.9163 18.3334 14.9997V4.99967C18.3334 4.08301 17.5834 3.33301 16.6667 3.33301ZM16.6667 6.66634L10 10.833L3.33335 6.66634V4.99967L10 9.16634L16.6667 4.99967V6.66634Z"
                fill="white"
              />
            </svg>
            <span> info@abat-tesc.kz </span>
          </a>
          <a class="flex tel fs-300" href="tel:+7 771 100 55 77">
            <svg
              width="35"
              height="35"
              viewBox="0 0 35 35"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M29.1813 22.4292C27.3875 22.4292 25.6521 22.1375 24.0333 21.6125C23.5229 21.4375 22.9542 21.5688 22.5604 21.9625L20.2708 24.8354C16.1438 22.8667 12.2792 19.1479 10.2229 14.875L13.0667 12.4542C13.4604 12.0458 13.5771 11.4771 13.4167 10.9667C12.8771 9.34792 12.6 7.6125 12.6 5.81875C12.6 5.03125 11.9438 4.375 11.1563 4.375H6.11042C5.32292 4.375 4.375 4.725 4.375 5.81875C4.375 19.3667 15.6479 30.625 29.1813 30.625C30.2167 30.625 30.625 29.7063 30.625 28.9042V23.8729C30.625 23.0854 29.9688 22.4292 29.1813 22.4292Z"
                fill="#FFFFFF"
              />
            </svg>
            <span> +7 771 100 55 77 </span>
          </a>
          <a class="flex tel fs-300" href="tel:+7 771 100 55 66">
            <svg
              width="35"
              height="35"
              viewBox="0 0 35 35"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M29.1813 22.4292C27.3875 22.4292 25.6521 22.1375 24.0333 21.6125C23.5229 21.4375 22.9542 21.5688 22.5604 21.9625L20.2708 24.8354C16.1438 22.8667 12.2792 19.1479 10.2229 14.875L13.0667 12.4542C13.4604 12.0458 13.5771 11.4771 13.4167 10.9667C12.8771 9.34792 12.6 7.6125 12.6 5.81875C12.6 5.03125 11.9438 4.375 11.1563 4.375H6.11042C5.32292 4.375 4.375 4.725 4.375 5.81875C4.375 19.3667 15.6479 30.625 29.1813 30.625C30.2167 30.625 30.625 29.7063 30.625 28.9042V23.8729C30.625 23.0854 29.9688 22.4292 29.1813 22.4292Z"
                fill="#FFFFFF"
              />
            </svg>
            <span> +7 771 100 55 66 </span>
          </a>
          <a href="/">
            <img src="/assets/images/logo-white.png" alt="Abat" class="logo" />
          </a>
        </div>
      </div>
    </footer>
        `;
  }
}

customElements.define("footer-component", Footer);
