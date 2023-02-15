const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const tabs = $$('.category-item__link')
tabs.forEach((tab) => {
    tab.onclick = function(){
        $('.category-item__link.active').classList.remove('active');
        this.classList.add('active')
    }
})

const buttons = $$('.home-filter__btn')
buttons.forEach((button) => {
    button.onclick = function(){
        $('.home-filter__btn.active').classList.remove('active');
        this.classList.add('active');
    }
})

const sortItems = $$('.header__sort-item')
sortItems.forEach((sortItem) => {
    sortItem.onclick = function(){
        $('.header__sort-item.active').classList.remove('active');
        this.classList.add('active');
    }
})