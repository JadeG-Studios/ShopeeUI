// Register Modal
const registerBtn = document.querySelector('.js-register-btn');
const registermodal= document.querySelector('.js-modal-1')
const registermodalbody=document.querySelector('.js-auth-form-1')
const registerBack = document.querySelector('.js-btn-back-1')

function showregister(){
    registermodal.classList.add('open');
}
function hideregister(){
    registermodal.classList.remove('open');
}

registerBtn.addEventListener('click', showregister)
registerBack.addEventListener('click',hideregister)
registermodal.addEventListener('click',hideregister)
registermodalbody.addEventListener('click',function(main){
    main.stopPropagation()
})

// Login Modal 
const loginBtn = document.querySelector('.js-login-btn');
const loginmodal= document.querySelector('.js-modal-2');
const modalbody=document.querySelector('.js-auth-form-2');
const loginBack = document.querySelector('.js-btn-back-2')

function showLogin(){
    loginmodal.classList.add('open')
}
function hideLogin(){
    loginmodal.classList.remove('open')
}

loginBtn.addEventListener('click',showLogin)
loginBack.addEventListener('click',hideLogin)
loginmodal.addEventListener('click',hideLogin)
modalbody.addEventListener('click',function(event){
    event.stopPropagation()
})
