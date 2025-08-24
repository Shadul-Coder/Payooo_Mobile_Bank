const transactions = [];

function menuHide(id) {
  const menuList = document.querySelectorAll(`.BTNMenu`);
  for (menu of menuList) {
    menu.classList.add(`hidden`);
  }
  const addMoneyMenu = document.querySelector(id);
  addMoneyMenu.classList.remove(`hidden`);
}

function selectTag(id) {
  const btnList = document.querySelectorAll(`.BTN`);
  for (btn of btnList) {
    btn.style.borderColor = "#0808081a";
    btn.style.backgroundColor = "white";
    btn.style.color = "black";
  }
  let button = document.querySelector(id);
  button.style.borderColor = "#0874f2";
  button.style.backgroundColor = "#0874f20d";
  button.style.color = "#0874f2";
}

document.querySelector(`#AddMoneyBTN`).addEventListener(`click`, function () {
  menuHide(`#AddMoney`);
  selectTag(`#AddMoneyBTN`);
});

document.querySelector(`#CashOutBTN`).addEventListener(`click`, function () {
  menuHide(`#CashOut`);
  selectTag(`#CashOutBTN`);
});

document
  .querySelector(`#TransferMoneyBTN`)
  .addEventListener(`click`, function () {
    menuHide(`#TransferMoney`);
    selectTag(`#TransferMoneyBTN`);
  });

document.querySelector(`#GetBonusBTN`).addEventListener(`click`, function () {
  menuHide(`#GetBonus`);
  selectTag(`#GetBonusBTN`);
});

document.querySelector(`#PayBillBTN`).addEventListener(`click`, function () {
  menuHide(`#PayBill`);
  selectTag(`#PayBillBTN`);
});

document
  .querySelector(`#TransactionBTN`)
  .addEventListener(`click`, function () {
    menuHide(`#Transaction`);
    selectTag(`#TransactionBTN`);
    const transactionMenu = document.querySelector(`#Transaction`);
    transactionMenu.innerHTML = `
    <div class="flex justify-between items-center">
      <h1 class="font-semibold ml-3 mb-3">Transaction History</h1>
      <p class="text-[13px] text-[#08080880] mr-3 mb-3">View All</p>
    </div>
    `;
    for (const history of transactions) {
      const box = document.createElement(`div`);
      box.innerHTML = `
      <div class="historyBox bg-white mb-3 px-5 py-3 rounded-2xl flex justify-between items-center">
        <div class="flex items-center gap-3">
          <div class="bg-[#f4f5f7] p-3 rounded-full">
            <img src="${history.imglink}" alt="">
          </div>
          <div>
            <h3 class="text-[13px]">${history.type}</h3>
            <p class="text-[13px]">${history.date}</p>
          </div>
        </div>
        <i class="fa-solid fa-ellipsis-vertical"></i>
      </div>
      `;
      transactionMenu.appendChild(box);
    }
  });

document.querySelector(`#LogOut`).addEventListener(`click`, function () {
  window.location.href = "index.html";
});

function removeInvalid(element, parent) {
  const invalid = document.querySelector(element);
  if (invalid) {
    document.querySelector(parent).removeChild(invalid);
  }
}

function getValue(element) {
  return document.querySelector(element).value;
}

function removeValue(element) {
  document.querySelector(element).value = ``;
}

function addInvalid(p, parent) {
  p.classList.add("text-[15px]", "text-red-500", "text-center", "mt-3");
  document.querySelector(parent).appendChild(p);
}

function getTime() {
  return new Date().toLocaleTimeString();
}

document
  .querySelector(`#AddMoneySubmit`)
  .addEventListener(`click`, function (event) {
    event.preventDefault();
    removeInvalid(`#AddMoney form p`, `#AddMoney form`);
    const bank = getValue(`#Bank`);
    const bankAccNum = getValue(`#BankAccNum`);
    const amount = parseInt(getValue(`#AddMoney #Amount`));
    const pin = parseInt(getValue(`#AddMoney #Pin`));
    if (
      bank !== `Select Bank` &&
      bankAccNum.length === 11 &&
      amount > 0 &&
      pin === 2025
    ) {
      const currentMoney = parseInt(document.querySelector(`#Money`).innerText);
      document.querySelector(`#Money`).innerText = currentMoney + amount;
      document.querySelector(`#Bank`).selectedIndex = 0;
      removeValue(`#BankAccNum`);
      removeValue(`#AddMoney #Amount`);
      removeValue(`#AddMoney #Pin`);
      const addmoney = {
        type: `Add Money`,
        date: getTime(),
        imglink: `Images/AddMoney.png`,
      };
      transactions.push(addmoney);
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
      addInvalid(p, `#AddMoney form`);
    }
  });

document
  .querySelector(`#CashOutSubmit`)
  .addEventListener(`click`, function (event) {
    event.preventDefault();
    removeInvalid(`#CashOut form p`, `#CashOut form`);
    const agentNum = getValue(`#AgentNum`);
    const amount = parseInt(getValue(`#CashOut #Amount`));
    const pin = parseInt(getValue(`#CashOut #Pin`));
    const currentMoney = parseInt(document.querySelector(`#Money`).innerText);
    if (
      agentNum.length === 11 &&
      amount > 0 &&
      amount <= currentMoney &&
      pin === 2025
    ) {
      document.querySelector(`#Money`).innerText = currentMoney - amount;
      removeValue(`#AgentNum`);
      removeValue(`#CashOut #Amount`);
      removeValue(`#CashOut #Pin`);
      const cashout = {
        type: `Cash Out`,
        date: getTime(),
        imglink: `Images/CashOut.png`,
      };
      transactions.push(cashout);
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
      addInvalid(p, `#CashOut form`);
    }
  });

document
  .querySelector(`#TransferSubmit`)
  .addEventListener(`click`, function (event) {
    event.preventDefault();
    removeInvalid(`#TransferMoney form p`, `#TransferMoney form`);
    const userNum = getValue(`#UserAccNum`);
    const amount = parseInt(getValue(`#TransferMoney #Amount`));
    const pin = parseInt(getValue(`#TransferMoney #Pin`));
    const currentMoney = parseInt(document.querySelector(`#Money`).innerText);
    if (
      userNum.length === 11 &&
      amount > 0 &&
      amount <= currentMoney &&
      pin === 2025
    ) {
      document.querySelector(`#Money`).innerText = currentMoney - amount;
      removeValue(`#UserAccNum`);
      removeValue(`#TransferMoney #Amount`);
      removeValue(`#TransferMoney #Pin`);
      const transfermoney = {
        type: `Transfer Money`,
        date: getTime(),
        imglink: `Images/TransferMoney.png`,
      };
      transactions.push(transfermoney);
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
      addInvalid(p, `#TransferMoney form`);
    }
  });

document
  .querySelector(`#GetBonusSubmit`)
  .addEventListener(`click`, function (event) {
    event.preventDefault();
    removeInvalid(`#GetBonus form p`, `#GetBonus form`);
    const coupon = getValue(`#Coupon`);
    if (coupon === `Payooo2025`) {
      const currentMoney = parseInt(document.querySelector(`#Money`).innerText);
      document.querySelector(`#Money`).innerText = currentMoney + 2025;
      removeValue(`#Coupon`);
      const gotcoupon = {
        type: `Coupon Bonus`,
        date: getTime(),
        imglink: `Images/GetBonus.png`,
      };
      transactions.push(gotcoupon);
      alert(`$2025 Bonus Received`);
    } else {
      let p = document.createElement(`p`);
      if (coupon !== `Payooo2025`) {
        p.innerText = `Invalid or Expired Coupon`;
      }
      addInvalid(p, `#GetBonus form`);
    }
  });

document
  .querySelector(`#PayBillSubmit`)
  .addEventListener(`click`, function (event) {
    event.preventDefault();
    removeInvalid(`#PayBill form p`, `#PayBill form`);
    const bill = getValue(`#Bill`);
    const billerAccNum = getValue(`#BillerAccNum`);
    const amount = parseInt(getValue(`#PayBill #Amount`));
    const pin = parseInt(getValue(`#PayBill #Pin`));
    const currentMoney = parseInt(document.querySelector(`#Money`).innerText);
    if (
      bill !== `Select Bill Type` &&
      billerAccNum.length === 11 &&
      amount > 0 &&
      amount <= currentMoney &&
      pin === 2025
    ) {
      document.querySelector(`#Money`).innerText = currentMoney - amount;
      document.querySelector(`#Bill`).selectedIndex = 0;
      removeValue(`#BillerAccNum`);
      removeValue(`#PayBill #Amount`);
      removeValue(`#PayBill #Pin`);
      const paybill = {
        type: `Pay Bill`,
        date: getTime(),
        imglink: `Images/PayBill.png`,
      };
      transactions.push(paybill);
      alert(`Bill Payed Successfully`);
    } else {
      let p = document.createElement(`p`);
      if (bill === `Select Bill Type`) {
        p.innerText = `Select Bill Type`;
      } else if (billerAccNum.length !== 11) {
        p.innerText = `Invalid Account Number`;
      } else if (isNaN(amount) || amount < 1) {
        p.innerText = `Invalid Amount`;
      } else if (pin !== 2025) {
        p.innerText = `Invalid PIN`;
      } else {
        p.innerText = `Insufficient Balance`;
      }
      addInvalid(p, `#PayBill form`);
    }
  });