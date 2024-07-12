let profit = document.getElementById('profit');
let form = document.getElementById('calculate');
let result = document.getElementById('result');
let username = document.getElementById('username');
let formuser = document.getElementById('formuser');

form.addEventListener('submit', function (event) {
    let option = profit.value;
    let calculateprofit = option / 24;
    result.innerHTML = calculateprofit + 'HM';
    event.preventDefault();
});

formuser.addEventListener('submit', function (event) {
    let enteredUsername = username.value; // گرفتن مقدار ورودی

    if (enteredUsername === 'بهار نبهانی') {
        alert('Your Money Will Be Sent To Your Wallet On The Date 20 August');
    } else if (enteredUsername === 'هادی نبهانی') {
        alert('Your Money Will Be Sent To Your Wallet On The Date 28 August');
    } else if (enteredUsername === 'رویا نبهانی') {
        alert('Your Money Will Be Sent To Your Wallet On The Date 30 August');
    } else if (enteredUsername === 'Reza Nabhani') {
        alert('Your Money Has Been Sent To Nobitex Wallet');
    } else {
        alert('Username not recognized');
    }
    console.log(enteredUsername); // چاپ مقدار ورودی برای بررسی
    event.preventDefault();
});
