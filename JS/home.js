document.querySelector(`#AddMoneyBTN`).addEventListener(`click`, function () {
  const menuList = document.querySelectorAll(`.BTNMenu`);
  for (menu of menuList) {
    menu.classList.add(`hidden`);
  }
  const addMoneyMenu = document.querySelector(`#AddMoney`);
  addMoneyMenu.classList.remove(`hidden`);
});

document.querySelector(`#CashOutBTN`).addEventListener(`click`, function () {
  const menuList = document.querySelectorAll(`.BTNMenu`);
  for (menu of menuList) {
    menu.classList.add(`hidden`);
  }
  const cashOutMenu = document.querySelector(`#CashOut`);
  cashOutMenu.classList.remove(`hidden`);
});

document
  .querySelector(`#TransferMoneyBTN`)
  .addEventListener(`click`, function () {
    const menuList = document.querySelectorAll(`.BTNMenu`);
    for (menu of menuList) {
      menu.classList.add(`hidden`);
    }
    const transferMoneyMenu = document.querySelector(`#TransferMoney`);
    transferMoneyMenu.classList.remove(`hidden`);
  });

document.querySelector(`#GetBonusBTN`).addEventListener(`click`, function () {
  const menuList = document.querySelectorAll(`.BTNMenu`);
  for (menu of menuList) {
    menu.classList.add(`hidden`);
  }
  const getBonusMenu = document.querySelector(`#GetBonus`);
  getBonusMenu.classList.remove(`hidden`);
});

document.querySelector(`#PayBillBTN`).addEventListener(`click`, function () {
  const menuList = document.querySelectorAll(`.BTNMenu`);
  for (menu of menuList) {
    menu.classList.add(`hidden`);
  }
  const payBillMenu = document.querySelector(`#PayBill`);
  payBillMenu.classList.remove(`hidden`);
});

document
  .querySelector(`#TransactionBTN`)
  .addEventListener(`click`, function () {
    const menuList = document.querySelectorAll(`.BTNMenu`);
    for (menu of menuList) {
      menu.classList.add(`hidden`);
    }
  });

document
  .querySelector(`#AddMoneySubmit`)
  .addEventListener(`click`, function (event) {
    event.preventDefault();
    const invalid = document.querySelector(`#AddMoney form p`);
    if (invalid) {
      document.querySelector(`#AddMoney form`).removeChild(invalid);
    }
    const bank =
      document.querySelector(`#Bank`).options[
        document.querySelector(`#Bank`).selectedIndex
      ].text;
    const bankAccNum = document.querySelector(`#BankAccNum`).value;
    const amount = parseInt(document.querySelector(`#AddMoney #Amount`).value);
    const pin = parseInt(document.querySelector(`#AddMoney #Pin`).value);
    if (
      bank !== `Select Bank` &&
      bankAccNum.length === 11 &&
      amount > 0 &&
      pin === 2025
    ) {
      const currentMoney = parseInt(document.querySelector(`#Money`).innerText);
      document.querySelector(`#Money`).innerText = currentMoney + amount;
      document.querySelector(`#Bank`).selectedIndex = 0;
      document.querySelector(`#BankAccNum`).value = ``;
      document.querySelector(`#AddMoney #Amount`).value = ``;
      document.querySelector(`#AddMoney #Pin`).value = ``;
      alert(`Amount Added`);
    } else {
      let p = document.createElement(`p`);
      if (bank === `Select Bank`) {
        p.innerText = `Select A Bank`;
      } else if (bankAccNum.length !== 11) {
        p.innerText = `Invalid Account Number`;
      } else if (isNaN(amount) || amount < 1) {
        p.innerText = `Invalid Amount`;
      } else {
        p.innerText = `Invalid PIN`;
      }
      p.classList.add("text-[15px]", "text-red-500", "text-center", "mt-3");
      document.querySelector(`#AddMoney form`).appendChild(p);
    }
  });

document
  .querySelector(`#CashOutSubmit`)
  .addEventListener(`click`, function (event) {
    event.preventDefault();
    const invalid = document.querySelector(`#CashOut form p`);
    if (invalid) {
      document.querySelector(`#CashOut form`).removeChild(invalid);
    }
    const agentNum = document.querySelector(`#AgentNum`).value;
    const amount = parseInt(document.querySelector(`#CashOut #Amount`).value);
    const pin = parseInt(document.querySelector(`#CashOut #Pin`).value);
    const currentMoney = parseInt(document.querySelector(`#Money`).innerText);
    if (
      agentNum.length === 11 &&
      amount > 0 &&
      amount <= currentMoney &&
      pin === 2025
    ) {
      document.querySelector(`#Money`).innerText = currentMoney - amount;
      document.querySelector(`#AgentNum`).value = ``;
      document.querySelector(`#CashOut #Amount`).value = ``;
      document.querySelector(`#CashOut #Pin`).value = ``;
      alert(`Amount Withdrawn`);
    } else {
      let p = document.createElement(`p`);
      if (agentNum.length !== 11) {
        p.innerText = `Invalid Agent Number`;
      } else if (isNaN(amount) || amount < 1) {
        p.innerText = `Invalid Amount`;
      } else if (pin !== 2025) {
        p.innerText = `Invalid PIN`;
      } else {
        p.innerText = `Insufficient Balance`;
      }
      p.classList.add("text-[15px]", "text-red-500", "text-center", "mt-3");
      document.querySelector(`#CashOut form`).appendChild(p);
    }
  });

document
  .querySelector(`#TransferSubmit`)
  .addEventListener(`click`, function (event) {
    event.preventDefault();
    const invalid = document.querySelector(`#TransferMoney form p`);
    if (invalid) {
      document.querySelector(`#TransferMoney form`).removeChild(invalid);
    }
    const userNum = document.querySelector(`#UserAccNum`).value;
    const amount = parseInt(
      document.querySelector(`#TransferMoney #Amount`).value
    );
    const pin = parseInt(document.querySelector(`#TransferMoney #Pin`).value);
    const currentMoney = parseInt(document.querySelector(`#Money`).innerText);
    if (
      userNum.length === 11 &&
      amount > 0 &&
      amount <= currentMoney &&
      pin === 2025
    ) {
      document.querySelector(`#Money`).innerText = currentMoney - amount;
      document.querySelector(`#UserAccNum`).value = ``;
      document.querySelector(`#TransferMoney #Amount`).value = ``;
      document.querySelector(`#TransferMoney #Pin`).value = ``;
      alert(`Amount Transfered`);
    } else {
      let p = document.createElement(`p`);
      if (userNum.length !== 11) {
        p.innerText = `Invalid User Number`;
      } else if (isNaN(amount) || amount < 1) {
        p.innerText = `Invalid Amount`;
      } else if (pin !== 2025) {
        p.innerText = `Invalid PIN`;
      } else {
        p.innerText = `Insufficient Balance`;
      }
      p.classList.add("text-[15px]", "text-red-500", "text-center", "mt-3");
      document.querySelector(`#TransferMoney form`).appendChild(p);
    }
  });