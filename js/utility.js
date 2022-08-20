function elementAdd(elemenetId) {
    const totalItemGet = document.getElementById(elemenetId);
    const totalItemString = totalItemGet.value;
    const totalItem = parseInt(totalItemString);
    return totalItem;
}
