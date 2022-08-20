document.getElementById('phone-plus').addEventListener('click', function () {
    const totalItems = inputElementAdd('phone-count', true);
    const totalPhonePrice = PriceElementAdd('phone-price', totalItems);
    calculation()

});

document.getElementById('phone-minus').addEventListener('click', function () {
    const totalItems = inputElementAdd('phone-count', false);
    const totalPhonePrice = PriceElementAdd('phone-price', totalItems);
    calculation()
})

document.getElementById('case-plus').addEventListener('click', function () {
    const totalItems = inputElementAdd('case-count', true);
    const totalCasePrice = PriceElementAdd('case-price', totalItems);
    calculation()
})

document.getElementById('case-minus').addEventListener('click', function () {
    const totalItems = inputElementAdd('case-count', false);
    const totalCasePrice = PriceElementAdd('case-price', totalItems);
    calculation()
})