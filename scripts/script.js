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


