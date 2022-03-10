// https://www.niemvuilaptrinh.com/article/Nhung-Hieu-Ung-Scroll-Cho-Trang-Web
//HIỆU ỨNG SCROLL
// var scrollHeader = document.querySelector('.container-header')
// if (scrollHeader.style.)

// CHUYỂN SLIDE
var selectImg = document.querySelectorAll('.slider--size-img')
var imgLength = selectImg.length
var backSlide = document.querySelector('.back-js')
var nextSlide = document.querySelector('.next-js')
let index = 0

nextSlide.addEventListener('click', function(e) {
    if (index < imgLength - 1) {
        index++
    } else {
        index = 0
    }
    document.querySelector('.slider__img').style.transform = `translateX(-${index*100}%)`
})
backSlide.addEventListener('click', function(e) {
    if (index > 0) {
        index--
    } else {
        index = imgLength - 1
    }
    document.querySelector('.slider__img').style.transform = `translateX(-${index*100}%)`
})

// MESSENGER
document.querySelector('.messenger__container').style.display = 'none'
document.querySelector('.messenger-circle').addEventListener('click', function(e) {

    if (document.querySelector('.messenger__container').style.display == 'none') {
        document.querySelector('.messenger__container').style.animation = 'growthBottomRight 0.2s ease'
        document.querySelector('.messenger__container').style.display = 'block'
    } else if (document.querySelector('.messenger__container').style.display == 'block') {
        document.querySelector('.messenger__container').style.animation = 'smallhBottomRight 2s ease'
        document.querySelector('.messenger__container').style.display = 'none'
    }
})

document.querySelector('.messenger__container-header-option-close').addEventListener('click', function(e) {
        document.querySelector('.messenger__container').style.animation = 'smallhBottomRight 2s ease'
        document.querySelector('.messenger__container').style.display = 'none'
    })
    // Code 
document.querySelector('.messenger__container-header-option-avt').style.display = 'none'
document.querySelector('.messenger__container-header-option-more').style.display = 'none'
document.querySelector('.messenger__container-header-option-user').addEventListener('click', function() {
    if (document.querySelector('.messenger__container-header-option-avt').style.display == 'none') {
        document.querySelector('.messenger__container-header-option-more').style.display = 'none'
        document.querySelector('.messenger__container-header-option-avt').style.display = 'block'
    } else {
        document.querySelector('.messenger__container-header-option-avt').style.display = 'none'
    }

})
document.querySelector('.messenger__container-header-option-select').addEventListener('click', function() {
    if (document.querySelector('.messenger__container-header-option-more').style.display == 'none') {
        document.querySelector('.messenger__container-header-option-avt').style.display = 'none'
        document.querySelector('.messenger__container-header-option-more').style.display = 'block'
    } else {
        document.querySelector('.messenger__container-header-option-more').style.display = 'none'
    }

})






// document.querySelector('.messenger__container-header-option-user').addEventListener('click', function() {
//         if (document.querySelector('.messenger__container-header-option-avt').style.display == 'none') {
//             document.querySelector('.messenger__container-header-option-avt').style.display = 'block'
//             console.log('đúng');
//         } else if (document.querySelector('.messenger__container-header-option-avt').style.display == 'block') {
//             document.querySelector('.messenger__container').addEventListener('click', function() {
//                 document.querySelector('.messenger__container-header-option-avt').style.display = 'none'
//                 console.log('sai');
//             })
//         }
//         console.log(document.querySelector('.messenger__container-header-option-avt').style.display);
//         // document.querySelector('.messenger__container-header-option-more').style.display = 'none'
//         // document.querySelector('.messenger__container-header-option-avt').style.display = 'block'
//     })
//     // document.querySelector('.messenger__container-header-option-select').addEventListener('click', function() {
//     //     document.querySelector('.messenger__container-header-option-avt').style.display = 'none'
//     //     document.querySelector('.messenger__container-header-option-more').style.display = 'block'

// // })