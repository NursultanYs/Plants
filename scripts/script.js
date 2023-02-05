'use strict';
const burger=document.querySelector('.hamburger'),
      nav=document.querySelector('.header__nav'),
      body=document.querySelector('body'),
      menuButtons=nav.querySelectorAll('a'),
      media=nav.querySelector('.media__burger');


    function openCloseBurger(){
        burger.classList.toggle('hamburger_active');
        nav.classList.toggle('active');
        body.classList.toggle('overflow');
    }
    burger.addEventListener('click',()=>{
        openCloseBurger();
        media.classList.toggle('hide');
    })
    
    menuButtons.forEach((e)=>{
        e.addEventListener('click',()=>{
           openCloseBurger();
        })
        if(!media.classList.contains('hide')){
            media.classList.add('hide');
        }
    })
    
    
    nav.addEventListener('click', event => {
        if (event.target === nav) {
           openCloseBurger();
        }
        if(!media.classList.contains('hide')){
            media.classList.add('hide');
        }
    })

    //service
    const serviceButtons=document.querySelectorAll('.menu__button'),
          cards=document.querySelectorAll('.card');



    function cardsAdd(cardone,cardtwo,cardthree,cardfour,cardfife){
        if(!cardtwo){
            cards[cardone].classList.add('blur');
        }else if(!cardthree){
            cards[cardone].classList.add('blur');
            cards[cardtwo].classList.add('blur');
        }
        else if(!cardfour){
            cards[cardone].classList.add('blur');
            cards[cardtwo].classList.add('blur');
            cards[cardthree].classList.add('blur');
        }else if(!cardfife){
            cards[cardone].classList.add('blur');
            cards[cardtwo].classList.add('blur');
            cards[cardthree].classList.add('blur');
            cards[cardfour].classList.add('blur');
        }
        else{
            cards[cardone].classList.add('blur');
            cards[cardtwo].classList.add('blur');
            cards[cardthree].classList.add('blur');
            cards[cardfour].classList.add('blur');
            cards[cardfife].classList.add('blur');
        }
    }
    function cardsRemove(cardone,cardtwo,cardthree,cardfour,cardfife){
        if(!cardtwo){
            cards[cardone].classList.remove('blur');
        }else if(!cardthree){
            cards[cardone].classList.remove('blur');
            cards[cardtwo].classList.remove('blur');
        }
        else if(!cardfour){
            cards[cardone].classList.remove('blur');
            cards[cardtwo].classList.remove('blur');
            cards[cardthree].classList.remove('blur');
        }else if(!cardfife){
            cards[cardone].classList.remove('blur');
            cards[cardtwo].classList.remove('blur');
            cards[cardthree].classList.remove('blur');
            cards[cardfour].classList.remove('blur');
        }
        else{
            cards[cardone].classList.remove('blur');
            cards[cardtwo].classList.remove('blur');
            cards[cardthree].classList.remove('blur');
            cards[cardfour].classList.remove('blur');
            cards[cardfife].classList.remove('blur');
        }
    }

    serviceButtons[0].addEventListener('click',()=>{
        if(serviceButtons[0].classList.contains('activebutton')){
            serviceButtons[0].classList.remove('activebutton');
            if(serviceButtons[1].classList.contains('activebutton') || serviceButtons[2].classList.contains('activebutton')){
                cardsAdd(0,4);
            }else{
                cards.forEach(card=>card.classList.remove('blur'));
            }
        }else if(!serviceButtons[1].classList.contains('activebutton') || !serviceButtons[2].classList.contains('activebutton')){
            if(serviceButtons[1].classList.contains('activebutton')){
                cardsAdd(1,3,5);
                cardsRemove(0,4);
            }else if(serviceButtons[2].classList.contains('activebutton')){
                cardsAdd(2);
                cardsRemove(0,4);
            }else{
                cardsAdd(1,2,3,5);
            }
            serviceButtons[0].classList.add('activebutton');
        }
    })
    serviceButtons[1].addEventListener('click',()=>{
        if(serviceButtons[1].classList.contains('activebutton')){
            serviceButtons[1].classList.remove('activebutton');
            if(serviceButtons[0].classList.contains('activebutton') || serviceButtons[2].classList.contains('activebutton')){
                cardsAdd(2);
            }else{
                cards.forEach(card=>card.classList.remove('blur'));
            }
        }else if(!serviceButtons[0].classList.contains('activebutton') || !serviceButtons[2].classList.contains('activebutton')){
            if(serviceButtons[0].classList.contains('activebutton')){
                cardsAdd(1,3,5);
                cardsRemove(2);
            }else if(serviceButtons[2].classList.contains('activebutton')){
                cardsAdd(0,4);
                cardsRemove(2);
            }else{
                cardsAdd(0,1,3,4,5);
            }
            serviceButtons[1].classList.add('activebutton');
        }
    })
    serviceButtons[2].addEventListener('click',()=>{
        if(serviceButtons[2].classList.contains('activebutton')){
            serviceButtons[2].classList.remove('activebutton');
            if(serviceButtons[0].classList.contains('activebutton') || serviceButtons[1].classList.contains('activebutton')){
                cardsAdd(1,3,5);
            }else{
                cards.forEach(card=>card.classList.remove('blur'));
            }
        }else if(!serviceButtons[0].classList.contains('activebutton') || !serviceButtons[1].classList.contains('activebutton')){
            if(serviceButtons[0].classList.contains('activebutton')){
                cardsAdd(2);
                cardsRemove(1,3,5);
            }else if(serviceButtons[1].classList.contains('activebutton')){
                cardsAdd(0,4);
                cardsRemove(1,3,5);
            }else{
                cardsAdd(0,2,4);
            }
            serviceButtons[2].classList.add('activebutton');
        }
    })

    //priceAccordeon

    const priceButtons=document.querySelectorAll('.price__accordeon-button'),
          priceContent=document.querySelectorAll('.prices__accordeon-content'),
          priceLinks=document.querySelectorAll('.price__link'),
          priceArrow=document.querySelectorAll('.arrow');
          
    
    function openCloseAccordeon(firstitem,seconditem,thirditem){
        if(priceButtons[firstitem].classList.contains('price__accordeon-button')){
            priceButtons[firstitem].classList.remove('price__accordeon-button');
            priceButtons[firstitem].classList.add('accordeon-active');
            priceContent[firstitem].style.maxHeight=priceContent[firstitem].scrollHeight+'px';
            priceContent[firstitem].style.maxWidth=164+'px';
            priceButtons[firstitem].style.marginBottom='28px';
            priceArrow[firstitem].classList.add('arrow__active');  
    
            if(priceButtons[seconditem].classList.contains('accordeon-active')){
            priceButtons[seconditem].classList.remove('accordeon-active');
            priceButtons[seconditem].classList.add('price__accordeon-button');
            priceContent[seconditem].style.maxWidth='0px';
            priceContent[seconditem].style.maxHeight='0px';
            priceArrow[seconditem].classList.remove('arrow__active');
            }else if(priceButtons[thirditem].classList.contains('accordeon-active')){
                priceButtons[thirditem].classList.remove('accordeon-active');
                priceButtons[thirditem].classList.add('price__accordeon-button');
                priceContent[thirditem].style.maxWidth='0px';
                priceContent[thirditem].style.maxHeight='0px';
                priceArrow[thirditem].classList.remove('arrow__active');
            }
         }
    }

    function closeAccordeon(firstitem){
        if(priceButtons[firstitem].classList.contains('accordeon-active')){
            priceButtons[firstitem].classList.remove('accordeon-active');
            priceButtons[firstitem].classList.add('price__accordeon-button');
            priceContent[firstitem].style.maxHeight='0px';
            priceContent[firstitem].style.maxWidth='0px';
            priceArrow[firstitem].classList.remove('arrow__active');  
        }else{
            if(firstitem===0){
                openCloseAccordeon(0,1,2);
            }else if(firstitem===1){
                openCloseAccordeon(1,0,2);
            }else{
                openCloseAccordeon(2,0,1);
            }
        }
    }

    priceButtons[0].addEventListener('click',(e)=>{
        if(e.target===priceLinks[0]){

        }else if(e.target===priceArrow[0]){
            closeAccordeon(0);
        }
        else{openCloseAccordeon(0,1,2)}
    });

    priceButtons[1].addEventListener('click',(e)=>{
        if(e.target===priceLinks[1]){

        }else if(e.target===priceArrow[1]){
            closeAccordeon(1);
        }
        else{openCloseAccordeon(1,0,2)}
    });
    
    priceButtons[2].addEventListener('click',(e)=>{
        if(e.target===priceLinks[2]){

        }else if(e.target===priceArrow[2]){
            closeAccordeon(2);
        }
        else{openCloseAccordeon(2,0,1)}
    });
   
console.log(priceLinks[0]);
    
// let a=str.replace(/\+\d{8})/,"****");
// let b=a.replace(/\w{4}:\s\w{1,}/,"hidden");
   
// Contact us

const cityBtn=document.querySelector('.city_button'),
      contactAcc=document.querySelector('.contact__accordeon'),
      city=document.querySelectorAll('.city'),
      contactArrow=document.querySelector('.contact_arrow'),
      activeCity=document.querySelector('.contact-city'),
      activePhone=document.querySelector('.contact-phone'),
      activeAdress=document.querySelector('.contact-adress'),
      contactInformation=document.querySelector('.contact__city__information'),
      callBtn=document.querySelector('.contact__call'),
      call=document.querySelector('.call'),
      contactUs=document.querySelector('.h2'),
      contactImg=document.querySelector('.contact__img');

cityBtn.addEventListener('click',()=>{
    contactArrow.classList.toggle('contact_arrow-active');
    cityBtn.classList.toggle('city_button-active');
    if(cityBtn.classList.contains('city_button-active')){
        contactAcc.style.maxHeight=contactAcc.scrollHeight+'px';
    }else{
        contactAcc.style.maxHeight=0;
    }
    contactUs.style.marginBottom='61px';
});
contactArrow.addEventListener('click',()=>{
    contactArrow.classList.toggle('contact_arrow-active');
    cityBtn.classList.toggle('city_button-active');
    if(cityBtn.classList.contains('city_button-active')){
        contactAcc.style.maxHeight=contactAcc.scrollHeight+'px';
    }else{
        contactAcc.style.maxHeight=0;
    }
    contactUs.style.marginBottom='61px';
})

city.forEach(cit=>{
    cit.addEventListener('click',(e)=>{
        contactArrow.classList.toggle('contact_arrow-active');
        cityBtn.classList.toggle('city_button-active');
        cityBtn.style.backgroundColor="#C1E698"
        contactAcc.style.maxHeight=0;
        cityBtn.textContent=e.target.textContent;
        cityBtn.style.boxShadow='0px 0px 0px';

        contactInformation.style.display='flex';
        activeCity.textContent=e.target.textContent;
        console.log(e.target.textContent);
        if(e.target.textContent==='Yonkers, NY'){
            activePhone.textContent='+1	914	678 0003';
            activeAdress.textContent='511 Warburton Ave';
        }else if(e.target.textContent==='Canandaigua, NY'){
            activePhone.textContent='+1	585	393 0001';
            activeAdress.textContent='151 Charlotte Street';
        }else if(e.target.textContent==='Sherrill, NY'){
            activePhone.textContent='+1	315	908 0004';
            activeAdress.textContent='14 WEST Noyes BLVD';
        }else{
            activePhone.textContent='+1	212	456 0002';
            activeAdress.textContent='9 East 91st Street';
        }
    }
    )
})

city.forEach(cit=>{
    cit.addEventListener('mousemove',(e)=>{
        e.target.parentNode.style.borderBottom='1px solid #717171';
    })
    cit.addEventListener('mouseout',(e)=>{
        e.target.parentNode.style.borderBottom='1px solid #D9D9D9';
    })
})

callBtn.addEventListener('click',()=>{
    callBtn.setAttribute('href', `tel: ${activePhone.textContent}`)
})


