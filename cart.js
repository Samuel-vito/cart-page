let tcolor=document.getElementById('tcolor'),
tcolorA=document.getElementById('tcolorA'),
tcolorB=document.getElementById('tcolorB'),
iconA=document.querySelector('.fa-credit-card'),
iconB=document.querySelector('.fa-buliding-columns'),
iconC=document.querySelector('.fa-wallet'),
cDetails=document.querySelector('.c-details');

function dFun(){
    tcolor.style.color="greenyellow";
    tcolorA.style.color="#444"; 
    tcolorB.style.color="#444";
    iconA.style.color="greenyellow";
    iconB.style.color="#aaa";
    iconC.style.color="#aaa";
    cDetails.style.dispaly="block";

}
function dFunA(){
    tcolor.style.color="#444";
    tcolorA.style.color="greenyellow"; 
    tcolorB.style.color="#444";
    iconA.style.color="#aaa";
    iconB.style.color="greenyellow";
    iconC.style.color="#aaa";
    cDetails.style.dispaly="none";

}
function dFunB(){
    tcolor.style.color="#444";
    tcolorA.style.color="#444"; 
    tcolorB.style.color="greenyellow";
    iconA.style.color="#aaa";
    iconB.style.color="#aaa";
    iconC.style.color="greenyellow";
    cDetails.style.dispaly="none";

}
alert("payment successful!")