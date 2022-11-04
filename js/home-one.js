
// mở rộng thêm chức năng
var navbarExtendClick = document.querySelector('.home-wrap-extend')
var navbarHiddenClick = document.querySelector('.home-wrap-hidden')
navbarExtendClick.addEventListener('click', function(){
    var listExtend = document.querySelectorAll('.home-one-disable')
    for(var i=0 ; i<listExtend.length ; i++){
        if(listExtend[i].classList.contains('home-one-disable')){
            listExtend[i].style.display = 'block'
            navbarExtendClick.style.display = 'none'
            navbarHiddenClick.style.display = 'block'
        }
    }
})
navbarHiddenClick.addEventListener('click', function(){
    var listExtend = document.querySelectorAll('.home-one-item')
    for(var i=0 ; i<listExtend.length ; i++){
        if(listExtend[i].classList.contains('home-one-disable')){
            listExtend[i].style.display = 'none'
            navbarExtendClick.style.display = 'block'
            navbarHiddenClick.style.display = 'none'
        }
    }
})

// mở rộng thêm group
var groupExtendClick = document.querySelector('.home-group-extend')
var groupHiddenClick = document.querySelector('.home-group-hidden')
groupExtendClick.addEventListener('click', function(){
    var groupExtendOn = document.querySelectorAll('.group-item')
    for(var i=0 ; i<groupExtendOn.length ; i++){
        if(groupExtendOn[i].classList.contains('group-disable')){
            groupExtendOn[i].style.display = 'block'
            groupExtendClick.style.display = 'none'
            groupHiddenClick.style.display = 'block'
        }
    }
})
groupHiddenClick.addEventListener('click', function(){
    var groupExtendOn = document.querySelectorAll('.group-item')
    for(var i=0 ; i<groupExtendOn.length ; i++){
        if(groupExtendOn[i].classList.contains('group-disable')){
            groupExtendOn[i].style.display = 'none'
            groupExtendClick.style.display = 'block'
            groupHiddenClick.style.display = 'none'
        }
    }
})
