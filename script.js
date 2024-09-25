const firstBasket = document.querySelector('.basket-1 span');
const secondBasket = document.querySelector('.basket-2 span');
const rightArrow=document.querySelector('.right-arrow');
const leftArrow=document.querySelector('.left-arrow');
let totalApples = 10;



let secondBasketCount=0;
let firstBasketCount=totalApples-secondBasketCount;

firstBasket.innerHTML=firstBasketCount;
secondBasket.innerHTML=secondBasketCount;

rightArrow.addEventListener('click',()=>{
    if(firstBasketCount>0){
 firstBasketCount--;
 firstBasket.innerHTML=firstBasketCount;
 secondBasketCount++;
 secondBasket.innerHTML=secondBasketCount;
    }
}

)
leftArrow.addEventListener('click',()=>{
    if(secondBasketCount>0){
 firstBasketCount++;
 firstBasket.innerHTML=firstBasketCount;
 secondBasketCount--;
 secondBasket.innerHTML=secondBasketCount;
    }
})