// BELOW I DECLARE MY VARIABLES AND THEIR VALUES //
// The reason why I do it is to give developer chance to change values quickly at the beginning of the code//

let monsterlevel = 1;
let cookies = 0;
let monster = 10;
let money = 0;
const button2cost = 10;
const button3cost = 20;
const HappyMonster = document.getElementById("HappyMonster");

// Below I create functions for sounds: //
function sound1() {
    HappyMonster.play();  // It has to be actually annoying Monster LOL. Every time eating cookies shouting to wake U up! //

};

// I TARGET AND DEFINE PARTS OF HTML BELOW: //
h4 = document.querySelector("h4");
p = document.getElementById("Money");


 // Below I declare variables for the buttons //
 const Plus1Cookie = document.getElementById("Plus1Cookie");
 const Plus2Cookie = document.getElementById("Plus2Cookie");
 const Plus3Cookie = document.getElementById("Plus3Cookie");
 
 const Boost = document.getElementById("Boost");

 const Restart = document.getElementById("Restart");


// BELOW I DECLARE ALL OF THE FUNCTIONS //
// Below I establish functions for LOCAL STORAGE's usage //
function StoreMonsterLevel () {
    localStorage.setItem("Monster Level", monsterlevel);
};

function storemoney () {
    localStorage.setItem("Money", money);
};

function storeit () {
    localStorage.setItem("Cookies", cookies);
};

// Below I make function for what has to be seen on the screen //
function show () {
    h4.innerHTML = cookies;   
};
function showmoney() {
    p.innerHTML = money;
};

//Functions for buttons below: //
function StartAgain() {
    cookies = 0;
    monsterlevel = 1;
    money = 0;
    StoreMonsterLevel();
    storeit();
    storemoney();
};
function plusOne() {
    cookies++;
    storeit(); 
    show();
    
    storemoney();
};
function plusTwo () {

    if (money >= button2cost) {
        cookies = cookies +++ 4;
        money = money - button2cost;
    }
    else {
        alert("Not enough money");
    };

    storeit();
    show();
    storemoney();
};
function plusThree() {

    if (money >= button3cost) {
        cookies = cookies +++ 20;
        money = money - button3cost;
    }
    else {
        alert("Not enough money");
    };
    storeit();
    show();
    storemoney();
};
function boostOne () {
    
    if (money >= 500) { 
        cookies = cookies +++ 250;
        money = money - 250;
     }
    else {
        alert("Not enough money");
    };
    storeit();
    show();
    
    storemoney();   
};

// Functions for TIMERS of COOKIE MONSTER eating cookies and COOKIE CLICKER adding cookies per seconds below and making LOCAL STORAGE remembering it //
setInterval(function() {
    cookies = cookies +++ 1;
    storeit();
    show();  
}, 2000);

setInterval(function() {
    monsterlevel = monsterlevel +++ 1;
    StoreMonsterLevel();
}, 40000);

setInterval(function(){
    if (cookies > 0) {
        money = money +++ 2.25;
        storemoney();
        showmoney();
    }
}, 2000);

setInterval(function() { // This function will set a COOKIE MONSTER who eat player's cookies every 3 minutes //
    cookies = cookies - (monster*monsterlevel);
    storeit();
    show();
    sound1();
    
}, 30000);


// BELOW I CODE ALL FUNCTIONALITY OF THE BUTTONS //

Plus1Cookie.addEventListener("click", plusOne);

Plus2Cookie.addEventListener("click", plusTwo);

Plus3Cookie.addEventListener("click", plusThree);

Boost.addEventListener("click", boostOne);

Restart.addEventListener("click", StartAgain);


// BELOW I CODE FUNCTIONS FOR GETTING VALUES FROM LOCAL STORAGE and invoce these functions//
function getit () {
    const localcookies = localStorage.getItem("Cookies");
    cookies = localcookies;
    show();
};

getit();

function GetMonsterLevel () {
    const localmonster = localStorage.getItem("Monster Level");
    monsterlevel = localmonster;
};

GetMonsterLevel();

function MoneyMoneyMoney () {
    const localmoney = localStorage.getItem("Money");
    money = localmoney;
    show();
};

MoneyMoneyMoney();
