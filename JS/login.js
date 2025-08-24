document
  .querySelector(`#login-button`)
  .addEventListener("click", function (event) {
    event.preventDefault();
    const invalid = document.querySelector(`p`);
    if (invalid) {
      document.querySelector(`form`).removeChild(invalid);
    }
    const pin = `2025`;
    let inputNumber = document.querySelector(`#Number`).value;
    let inputPin = document.querySelector(`#Pin`).value;
    if (inputNumber.length === 11 && inputPin === pin) {
      window.location.href = `home.html`;
    } else {
      let p = document.createElement(`p`);
      if (inputNumber.length !== 11) {
        p.innerText = `Invalid Number`;
      } else {
        p.innerText = `Invalid PIN`;
      }
      p.classList.add("text-[15px]", "text-red-500", "text-center", "mt-3");
      document.querySelector(`form`).appendChild(p);
      document.querySelector(`#Number`).value = ``;
      document.querySelector(`#Pin`).value = ``;
    }
  });