// mở lịch sử tìm kiếm
var searchOpen = document.querySelector('.search-input-open')
searchOpen.onclick = function(e){
    var historySearch = document.querySelector('.search-history')
    if(historySearch.classList.contains('search-checked')){
        var logo = document.querySelector('.header-logo')
        var searchInputIcon = document.querySelector('.search-input-icon')
        var searchBack = document.querySelector('.search-input-back')

        logo.classList.add('search-checked')
        searchInputIcon.classList.add('search-checked')
        historySearch.classList.remove('search-checked')
        searchBack.classList.remove('search-checked')

        var searchInput = document.querySelector('.search-input')
        searchInput.focus()
        searchInput.classList.remove('hiden-on-pc')
    }
}

// đóng lích sử tìm kiếm
var container = document.querySelector('.container')
container.addEventListener('click', function(e){
    var historySearch = document.querySelector('.search-history')
    if(!historySearch.classList.contains('search-checked')){
        var logo = document.querySelector('.header-logo')
        var searchInputIcon = document.querySelector('.search-input-icon')
        var searchBack = document.querySelector('.search-input-back')
        logo.classList.remove('search-checked')
        searchInputIcon.classList.remove('search-checked')
        historySearch.classList.add('search-checked')
        searchBack.classList.add('search-checked')

        var searchInput = document.querySelector('.search-input')
        searchInput.classList.add('hiden-on-pc')
    }
})
var header = document.querySelector('.header')
header.addEventListener('click', function(e){
    if(!e.target.closest('.header-search')){
        var historySearch = document.querySelector('.search-history')
        if(!historySearch.classList.contains('search-checked')){
            var logo = document.querySelector('.header-logo')
            var searchInputIcon = document.querySelector('.search-input-icon')
            var searchBack = document.querySelector('.search-input-back')
            logo.classList.remove('search-checked')
            searchInputIcon.classList.remove('search-checked')
            historySearch.classList.add('search-checked')
            searchBack.classList.add('search-checked')

            var searchInput = document.querySelector('.search-input')
            searchInput.classList.add('hiden-on-pc')
        }
    }
})
document.querySelector('.search-input-back').onclick = function(){
    var logo = document.querySelector('.header-logo')
    var historySearch = document.querySelector('.search-history')
    var searchInputIcon = document.querySelector('.search-input-icon')
    var searchBack = document.querySelector('.search-input-back')
    logo.classList.remove('search-checked')
    searchInputIcon.classList.remove('search-checked')
    historySearch.classList.add('search-checked')
    searchBack.classList.add('search-checked')

    var searchInput = document.querySelector('.search-input')
    searchInput.classList.add('hiden-on-pc')
}
