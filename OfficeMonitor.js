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

const menu_btn = document.querySelector('#menu');
const submenu = document.querySelector('.submenu')
menu_btn.addEventListener('click', function(){
    
    if (submenu.style.display === 'flex') {
        submenu.style.display = 'none';
    } else {
        submenu.style.display = 'flex';
    }})