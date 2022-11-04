// chọn story, reels hoặc meeting
var homeTwoHeader = document.querySelector('.home-two-header')
homeTwoHeader.onclick = function(e){
    if(e.target.className != 'home-two-header'){
        document.querySelector('.home-two-header-checked').classList.remove('home-two-header-checked')
        document.querySelector('.home-two-checked').classList.remove('home-two-checked')
        
        if(!e.target.classList.contains('home-two-header-checked')){
            if(e.target.className == 'home-two-header-one'){
                e.target.classList.add('home-two-header-checked')
                var story = document.querySelector('.story')
                story.classList.add('home-two-checked')
            }
            else if(e.target.className == 'home-two-header-two'){
                e.target.classList.add('home-two-header-checked')
                var reels = document.querySelector('.reels')
                reels.classList.add('home-two-checked')
            }
            else{
                e.target.classList.add('home-two-header-checked')
                var meeting = document.querySelector('.meeting')
                meeting.classList.add('home-two-checked')
            }
        }
    }
}

// bấm tiến lùi story
var storyList = document.querySelector('.story-list')
var storyListItem = document.querySelectorAll('.story-item')
var storyPrev = document.querySelector('.story-prev')
var storyNext = document.querySelector('.story-next')
var indexStory = 0 // khởi tạo số lần lướt của story
var storyLenght = Math.floor(storyListItem.length / 5) // độ dài của story
if(storyListItem.length < 5){
    storyLenght = 0
    storyNext.style.display = 'none'
}
storyPrev.onclick = function(){
    if(indexStory == storyLenght){
        storyNext.style.display = 'block'
    }
    if(indexStory >= 1){
        --indexStory
        storyList.style.transform = `translateX(${-598*indexStory}px)`
    }
    if(indexStory == 0){
        storyPrev.style.display = 'none'
    }
}
storyNext.onclick = function(){
    if(indexStory == 0 && storyLenght != 0){
        storyPrev.style.display = 'block'
    }
    if(indexStory == storyLenght - 1){
        storyList.style.transform = `translateX(${-598*indexStory - 116*(storyListItem.length - Number(storyLenght)*5) - 102}px)`
        ++indexStory
    }
    else{
        if(indexStory < storyLenght - 1){
            ++indexStory
            storyList.style.transform = `translateX(${-598*indexStory}px)`
        }
    }
    if(indexStory == storyLenght && storyLenght != 0){
        storyNext.style.display = 'none'
    }
}

// bấm tiến lùi reels
var reelsList = document.querySelector('.reels-list')
var reelsListItem = document.querySelectorAll('.reels-item')
var reelsPrev = document.querySelector('.reels-prev')
var reelsNext = document.querySelector('.reels-next')
var indexReels = 0 // khởi tạo số lần lướt của reels
var reelsLenght = Math.floor(reelsListItem.length / 5)// độ dài của story
if(reelsListItem.length < 5){
    reelsLenght = 0
    reelsNext.style.display = 'none'
}
reelsPrev.onclick = function(){
    if(indexReels == reelsLenght){
        reelsNext.style.display = 'block'
    }
    if(indexReels >= 1){
        --indexReels
        reelsList.style.transform = `translateX(${-598*indexReels}px)`
    }
    if(indexReels == 0){
        reelsPrev.style.display = 'none'
    }
}
reelsNext.onclick = function(){
    if(indexReels == 0 && reelsLenght != 0){
        reelsPrev.style.display = 'block'
    }
    if(indexReels == reelsLenght - 1){
        reelsList.style.transform = `translateX(${-598*indexReels - 116*(reelsListItem.length - Number(reelsLenght)*5) - 102}px)`
        ++indexReels
    }
    else{
        if(indexReels < reelsLenght - 1){
            ++indexReels
            reelsList.style.transform = `translateX(${-598*indexReels}px)`
        }
    }
    if(indexReels == reelsLenght && reelsLenght != 0){
        reelsNext.style.display = 'none'
    }
}

// bấm tiến lùi meeting
var meetingList = document.querySelector('.meeting-list')
var meetingListItem = document.querySelectorAll('.meeting-item')
var meetingPrev = document.querySelector('.meeting-prev')
var meetingNext = document.querySelector('.meeting-next')
var indexMeeting = 0 // khởi tạo số lần lướt của meeting
var meetingLenght = Math.floor(meetingListItem.length / 4)// độ dài của story
if(meetingListItem.length < 4){
    meetingLenght = 0
    meetingNext.style.display = 'none'
}
meetingPrev.onclick = function(){
    if(indexMeeting == meetingLenght){
        meetingNext.style.display = 'block'
    }
    if(indexMeeting >= 1){
        --indexMeeting
        meetingList.style.transform = `translateX(${-598*indexMeeting}px)`
    }
    if(indexMeeting == 0){
        meetingPrev.style.display = 'none'
    }
}
meetingNext.onclick = function(){
    if(indexMeeting == 0 && meetingLenght != 0){
        meetingPrev.style.display = 'block'
    }
    if(indexMeeting == meetingLenght - 1){
        meetingList.style.transform = `translateX(${-598*indexMeeting - 168*(meetingListItem.length - (Number(meetingLenght) - 1)*3 - 4) - 128}px)`
        ++indexMeeting
    }
    else{
        if(indexMeeting < meetingLenght - 1){
            ++indexMeeting
            meetingList.style.transform = `translateX(${-598*indexMeeting}px)`
        }
    }
    if(indexMeeting == meetingLenght && meetingLenght != 0){
        meetingNext.style.display = 'none'
    }
}

