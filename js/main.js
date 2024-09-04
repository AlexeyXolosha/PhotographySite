//Бургер
const burger = document.getElementById('burger')
const nav = document.getElementById("nav")

burger.addEventListener("click", function(){
    nav.classList.toggle("nav--active")
    burger.classList.toggle("burger--active")
    document.body.classList.toggle("stop-scroll")
})

// Модальное окно
const btnModalCall = document.getElementById('call-modal')
const modal = document.getElementById('modal-call-form')

btnModalCall.addEventListener('click', function() {
    modal.classList.add("modal-parent--open")
})

modal.querySelector(".modal").addEventListener("click", function(event){
    event._isClick = true
})

modal.addEventListener("click", function(event) {
    if(event._isClick === true) return
    modal.classList.remove("modal-parent--open")
})

//Закрытие при нажатии кнопки ESC
window.addEventListener("keydown", function(event){
    if(event.key === "Escape"){
        modal.classList.remove("modal-parent--open")
    }
}) 

//Слайдер галерея
const swiper = new Swiper("#gallery", {
    loop: true,
    slidesPerView: 3,
    spaceBetween: 20,

    navigation: {
        prevEl: "#gallery-prev",
        nextEl: "#gallery-next"
    }
})
