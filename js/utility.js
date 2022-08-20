function inputElementAdd(inputElementId, isIncrease) {
    const totalItemGet = document.getElementById(inputElementId);
    const totalItemString = totalItemGet.value;
    const totalItem = parseInt(totalItemString);
    let totalItems;
    if (isIncrease == true) {
        totalItems = totalItem + 1;
    } else {
        totalItems = totalItem - 1;
    }

    totalItemGet.value = totalItems;
    return totalItems;
}



function PriceElementAdd(phonePriceId, totalItems) {

    let totalItemPrice;
    if (phonePriceId === 'phone-price') {
        totalItemPrice = totalItems * 1219;
    }
    else {
        totalItemPrice = totalItems * 59;
    }
    // const totalItemPrice = totalItems * 1219;
    const totalPriceGet = document.getElementById(phonePriceId);
    totalPriceGet.innerText = totalItemPrice;
    return totalItemPrice;
}

function setElement(elementId, newValue) {
    const setElemtId = document.getElementById(elementId);
    setElemtId.value = newValue;
}

function totalPricecal(priceIdGet) {
    const totalPhonePriceGet = document.getElementById(priceIdGet);
    const totalPhonePriceGetString = totalPhonePriceGet.innerText;
    const newTotalPrice = parseFloat(totalPhonePriceGetString);
    return newTotalPrice;


}
function calculation() {
    const newTotalPhonePrice = totalPricecal('phone-price');
    const newTotalCasePrice = totalPricecal('case-price');
    const subTotal = newTotalPhonePrice + newTotalCasePrice;
    const newSubTotal = document.getElementById('total-balance');
    newSubTotal.innerText = subTotal;

    const tax = document.getElementById('total-tax');
    const totalTaxString = (subTotal * 0.1).toFixed(2);
    const totalTax = parseFloat(totalTaxString);
    tax.innerText = totalTax;

    const totalBalanceFinal = document.getElementById('total-balance-final');
    const totalGrand = subTotal + totalTax;
    totalBalanceFinal.innerText = totalGrand;
}