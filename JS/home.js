document.querySelector(`#AddMoneyBTN`).addEventListener(`click`, function () {
    const menuList = document.querySelectorAll(`.BTNMenu`);
    for (menu of menuList) {
        menu.classList.add(`hidden`);
    }
    const addMoneyMenu = document.querySelector(`#AddMoney`);
    addMoneyMenu.classList.remove(`hidden`);
})

document.querySelector(`#CashOutBTN`).addEventListener(`click`, function () {
    const menuList = document.querySelectorAll(`.BTNMenu`);
    for (menu of menuList) {
        menu.classList.add(`hidden`);
    }
    const cashOutMenu = document.querySelector(`#CashOut`);
    cashOutMenu.classList.remove(`hidden`);
})

document.querySelector(`#TransferMoneyBTN`).addEventListener(`click`, function () {
    const menuList = document.querySelectorAll(`.BTNMenu`);
    for (menu of menuList) {
        menu.classList.add(`hidden`);
    }
    const transferMoneyMenu = document.querySelector(`#TransferMoney`);
    transferMoneyMenu.classList.remove(`hidden`);
})

document.querySelector(`#GetBonusBTN`).addEventListener(`click`, function () {
    const menuList = document.querySelectorAll(`.BTNMenu`);
    for (menu of menuList) {
        menu.classList.add(`hidden`);
    }
    const getBonusMenu = document.querySelector(`#GetBonus`);
    getBonusMenu.classList.remove(`hidden`);
})

document.querySelector(`#PayBillBTN`).addEventListener(`click`, function () {
    const menuList = document.querySelectorAll(`.BTNMenu`);
    for (menu of menuList) {
        menu.classList.add(`hidden`);
    }
    const payBillMenu = document.querySelector(`#PayBill`);
    payBillMenu.classList.remove(`hidden`);
})

document.querySelector(`#TransactionBTN`).addEventListener(`click`, function () {
    const menuList = document.querySelectorAll(`.BTNMenu`);
    for (menu of menuList) {
        menu.classList.add(`hidden`);
    }
})