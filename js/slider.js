const arrImg = ['./img/Card.png','./img/Balls.png']

// Создает картинки
function createSlideImg () {
   for (let i = 0; i < arrImg.length; i++) {
      // console.log(arrImg[i])
         document.querySelector('.slider__line').innerHTML += `
         <a href=${i == 0 ? 'https://kiroo13.github.io/GameCardBuild/' : 'https://kiroo13.github.io/GameBallsBuild/'} target="_blank"><img class="slider-img" src=${arrImg[i]} alt=${i + 1}></a>
         `
   }
   createDote()
}
createSlideImg()

// Создает доты
function createDote () {
   for (let index = 0; index < arrImg.length; index++) {
          let dot = document.createElement('div')
              dot.classList.add('slider__dot')
              document.querySelector('.slider__nav').append(dot)
   }
   document.querySelectorAll('.slider__dot').forEach((el, ind) => {
      if (ind === 0) {
         el.classList.add('active-dote')
      }
   })
}

// Переменны для слайдера
const sliserItems = document.querySelectorAll('.slider-img')
const sliserLine = document.querySelector('.slider__line')
const sliserDote = document.querySelectorAll('.slider__dot')
const sliserBtnPrev = document.querySelector('.slider__btn-prev')
const sliserBtnNext = document.querySelector('.slider__btn-next')

// Основные логические переменные
let sliderCount = 0
let sliderWidth = null

// Адаптивность слайдера 
window.addEventListener('resize', showSlide)

// Переключение слайдера
sliserBtnPrev.addEventListener('click', prevSlide)
sliserBtnNext.addEventListener('click', nextSlide)

// Определяет размер линии и картинки в зависимости от экрана (адаптив)
function showSlide () {
   sliderWidth = document.querySelector('.slider').offsetWidth
   sliserLine.style.width = sliderWidth * sliserItems.length + 'px'
   sliserItems.forEach((el) => el.style.width = sliderWidth + 'px')

   rollSlide()
}

showSlide()

// Отвечает за перелистывание слайдера вперед
function nextSlide () {
   sliderCount++
   if (sliderCount >= sliserItems.length) { sliderCount = 0 }

   rollSlide()
   thisSlide(sliderCount)
}

// Отвечает за перелистывание слайдера назад
function prevSlide () {
   sliderCount--
   if (sliderCount < 0) {sliderCount = sliserItems.length - 1 }

   rollSlide()
   thisSlide(sliderCount)
}

// Сдвигает слайды
function rollSlide () {
   sliserLine.style.transform = `translateX(${-sliderCount * sliderWidth}px)`
}

// Показывает текуций слайд
function thisSlide (index) {
   sliserDote.forEach((dot) => dot.classList.remove('active-dote'))
   sliserDote[index].classList.add('active-dote')
}

// Отвечает за работу дотов
sliserDote.forEach((dot, index) => {
   dot.addEventListener('click', () => {
      sliderCount = index
      rollSlide()
      thisSlide(sliderCount)
   })
})


