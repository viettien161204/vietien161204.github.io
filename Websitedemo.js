const support_btn = document.querySelector('#support-form')
const close_btn = document.querySelector('#close')
const click_support = document.querySelector('#click-support')


support_btn.addEventListener("click", function(){
    document.querySelector('.support-form').style.display="flex"
})
close_btn.addEventListener("click", function(){
    document.querySelector('.support-form').style.display="none"
    document.getElementById('respond').innerHTML=""
})
click_support.addEventListener("click", function(){
    document.getElementById('respond').innerHTML="Submitted support successfully!!!"
})
/* gio hang */
const cart_btn = document.querySelector('#cart-btn')
cart_btn.addEventListener('click', function(){
    document.querySelector('.cart').style.display="flex"
})
 
const close_cart= document.querySelector('#close-cart')
close_cart.addEventListener('click', function(){
    document.querySelector('.cart').style.display="none"
})  

/* chung bay san pham */
const see_more_btn = document.querySelector('#see-more');
const main_product = document.querySelector('.mainproduct');
see_more_btn.addEventListener('click', function() {
   if (main_product.style.display === 'flex') {
       main_product.style.display = 'none';
   } else {
       main_product.style.display = 'flex';
   }
});
 



const see_more2_btn = document.querySelector('#see-more2');
const main_product2 = document.querySelector('.mainproduct2');
see_more2_btn.addEventListener('click', function() {
   if (main_product2.style.display === 'flex') {
       main_product2.style.display = 'none';
   } else {
       main_product2.style.display = 'flex';
   }
});

const see_more3_btn = document.querySelector('#see-more3');
const main_product3 = document.querySelector('.mainproduct3');
see_more3_btn.addEventListener('click', function() {
   if (main_product3.style.display === 'flex') {
       main_product3.style.display = 'none';
   } else {
       main_product3.style.display = 'flex';
   }
});

const see_more4_btn = document.querySelector('#see-more4');
const main_product4 = document.querySelector('.mainproduct4');
see_more4_btn.addEventListener('click', function() {
   if (main_product4.style.display === 'flex') {
       main_product4.style.display = 'none';
   } else {
       main_product4.style.display = 'flex';
   }
});

const see_more5_btn = document.querySelector('#see-more5');
const main_product5 = document.querySelector('.mainproduct5');
see_more5_btn.addEventListener('click', function() {
   if (main_product5.style.display === 'flex') {
       main_product5.style.display = 'none';
   } else {
       main_product5.style.display = 'flex';
   }
});

const menu_btn = document.querySelector('#menu');
const submenu = document.querySelector('.submenu')
menu_btn.addEventListener('click', function(){
    
    if (submenu.style.display === 'flex') {
        submenu.style.display = 'none';
    } else {
        submenu.style.display = 'flex';
    }})

/* const learnmore_btn = document.querySelector('#learn-more')
learnmore_btn.addEventListener('click', function(){
    console.log('1')
    document.getElementById('.close-describe').innerHTML="123"
}) */






