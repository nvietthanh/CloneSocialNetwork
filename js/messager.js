
let Users = [
    {data : '11', name : 'Lê Khánh Bảo Tuấn', avatar : './image/friend5.png', online : 'Đang hoạt động'},
    {data : '4', name : 'Trần Tuấn Minh', avatar : './image/friend2.png', online : 'Đang hoạt động'},
    {data : '5', name : 'Nguyễn Viết Thanh', avatar : './image/anhdd.jpg', online : 'Hoạt động 1 giờ trước'},
    {data : '2', name : 'Tô Trung Kiên', avatar : './image/logo.svg.webp', online : 'Hoạt động 1 phút trước'},
    {data : '1', name : 'Trần Quỳnh Như', avatar : './image/friend1.jpg', online : 'Đang hoạt động'},
    {data : '3', name : 'Cao Thanh Minh', avatar : './image/avatar.jpg', online : 'Hoạt động 10 phút trước'},
    {data : '6', name : 'Lê Thị Thanh', avatar : './image/logo.png', online : 'Đang hoạt động'},
    {data : '7', name : 'Phạm Văn Tuấn', avatar : './image/avatar.webp', online : 'Hoạt động 1 phút trước'},
    {data : '9', name : 'Ngô Văn Tiến', avatar : './image/friend4.png', online : 'Đang hoạt động'},
    {data : '12', name : 'Lê Anh Thu', avatar : './image/friend3.png', online : 'Đang hoạt động'},
    {data : '10', name : 'Cao Mạnh Tú', avatar : './image/friend6.png', online : 'Đang hoạt động'},
    {data : '13', name : 'Nguyễn Thị Vân Anh', avatar : './image/friend7.png', online : 'Đang hoạt động'}

]

let contentMesseger = [
    {data : '3', content : [
        {id: 'left', time: new Date('Thu Aug 18 2022 12:40:33 GMT+0700 (Giờ Đông Dương)'), status: 'doc', msg: 'Chào bạn'},
        {id: 'left', time: new Date('Thu Aug 18 2022 12:41:33 GMT+0700 (Giờ Đông Dương)'), status: 'doc', msg: 'Mình tên là Minh rất vui làm quen với bạn'},
        {id: 'right', time: new Date('Thu Aug 18 2022 12:49:33 GMT+0700 (Giờ Đông Dương)'), status: 'doc', msg: 'Chào bạn mình là Thanh, có vấn đề gì không bạn?'},
        {id: 'left', time: new Date('Thu Aug 18 2022 12:50:33 GMT+0700 (Giờ Đông Dương)'), status: 'nhan', msg: 'Mình thấy bạn có hỗ trợ lấy lại Facebook đúng không vậy?'},
        {id: 'left', time: new Date('Thu Aug 18 2022 12:50:33 GMT+0700 (Giờ Đông Dương)'), status: 'nhan', msg: 'Bạn có thể giúp mình được không?'}

    ]},
    {data : '4', content : [
        {id: 'left', time: new Date('Thu Aug 18 2022 7:11:33 GMT+0700 (Giờ Đông Dương)'), status: 'doc', msg: 'Chào bạn mình tên là Thanh rất vui làm quen với bạn'},
        {id: 'left', time: new Date('Thu Aug 18 2022 7:12:33 GMT+0700 (Giờ Đông Dương)'), status: 'doc', msg: 'Bạn ở đâu vậy?'},
        {id: 'right', time: new Date('Thu Aug 18 2022 7:18:33 GMT+0700 (Giờ Đông Dương)'), status: 'nhan', msg: 'Chào bạn mình tên là Thanh, mình ở ngoại thành Hà Nội'},
        {id: 'right', time: new Date('Thu Aug 18 2022 7:19:3 GMT+0700 (Giờ Đông Dương)'), status: 'nhan', msg: 'Nói chính xác là mình ở Chương Mỹ Hà Nội'}
    ]},
    {data : '7', content : [
        {id: 'left', time: new Date('Thu Aug 18 2022 1:00:33 GMT+0700 (Giờ Đông Dương)'), status: 'nhan', msg: 'Chào bạn'},
        {id: 'left', time: new Date('Thu Aug 18 2022 1:01:33 GMT+0700 (Giờ Đông Dương)'), status: 'nhan', msg: 'Mình là Tuấn từ công ty APS Center'}

    ]},
    {data : '5', content : [
        {id: 'right', time: new Date('Tue Aug 16 2022 11:40:33 GMT+0700 (Giờ Đông Dương)'), status: 'nhan', msg: 'Chào bạn mình tên là Thanh rất vui làm quen với bạn'},
        {id: 'right', time: new Date('Tue Aug 16 2022 11:41:33 GMT+0700 (Giờ Đông Dương)'), status: 'nhan', msg: 'Không biết bạn có người yêu chưa vậy'}
    ]},
    {data : '6', content : [
        {id: 'right', time: new Date('Tue Aug 15 2022 11:40:33 GMT+0700 (Giờ Đông Dương)'), status: 'nhan', msg: 'Chào bạn mình tên là Thanh rất vui làm quen với bạn'},
        {id: 'right', time: new Date('Tue Aug 15 2022 11:41:33 GMT+0700 (Giờ Đông Dương)'), status: 'nhan', msg: 'Không biết bạn có người yêu chưa vậy'}
    ]},
    {data : '1', content : [
        {id: 'right', time: new Date('Tue Aug 11 2022 11:40:33 GMT+0700 (Giờ Đông Dương)'), status: 'nhan', msg: 'Chào bạn mình tên là Thanh rất vui làm quen với bạn'},
        {id: 'right', time: new Date('Tue Aug 11 2022 13:41:33 GMT+0700 (Giờ Đông Dương)'), status: 'nhan', msg: 'Không biết bạn có người yêu chưa vậy'}
    ]},
    {data : '9', content : [
        {id: 'right', time: new Date('Tue Aug 7 2022 11:40:33 GMT+0700 (Giờ Đông Dương)'), status: 'nhan', msg: 'Chào bạn mình tên là Thanh rất vui làm quen với bạn'},
        {id: 'right', time: new Date('Tue Aug 7 2022 11:41:33 GMT+0700 (Giờ Đông Dương)'), status: 'nhan', msg: 'Không biết bạn có người yêu chưa vậy'}
    ]},
    {data : '2', content : [
        {id: 'right', time: new Date('Tue Aug 1 2022 11:40:33 GMT+0700 (Giờ Đông Dương)'), status: 'nhan', msg: 'Chào bạn mình tên là Thanh rất vui làm quen với bạn'},
        {id: 'right', time: new Date('Tue Aug 1 2022 13:41:33 GMT+0700 (Giờ Đông Dương)'), status: 'nhan', msg: 'Bạn thật tuyệt vời'}
    ]}


    ,
    {data : '3', content : [
        {id: 'left', time: new Date('Thu Aug 18 2022 12:40:33 GMT+0700 (Giờ Đông Dương)'), status: 'doc', msg: 'Chào bạn'},
        {id: 'left', time: new Date('Thu Aug 18 2022 12:41:33 GMT+0700 (Giờ Đông Dương)'), status: 'doc', msg: 'Mình tên là Minh rất vui làm quen với bạn'},
        {id: 'right', time: new Date('Thu Aug 18 2022 12:49:33 GMT+0700 (Giờ Đông Dương)'), status: 'doc', msg: 'Chào bạn mình là Thanh, có vấn đề gì không bạn?'},
        {id: 'left', time: new Date('Thu Aug 18 2022 12:50:33 GMT+0700 (Giờ Đông Dương)'), status: 'nhan', msg: 'Mình thấy bạn có hỗ trợ lấy lại Facebook đúng không vậy?'},
        {id: 'left', time: new Date('Thu Aug 18 2022 12:50:33 GMT+0700 (Giờ Đông Dương)'), status: 'nhan', msg: 'Bạn có thể giúp mình được không?'}

    ]},
    {data : '4', content : [
        {id: 'left', time: new Date('Thu Aug 18 2022 7:11:33 GMT+0700 (Giờ Đông Dương)'), status: 'doc', msg: 'Chào bạn mình tên là Thanh rất vui làm quen với bạn'},
        {id: 'left', time: new Date('Thu Aug 18 2022 7:12:33 GMT+0700 (Giờ Đông Dương)'), status: 'doc', msg: 'Bạn ở đâu vậy?'},
        {id: 'right', time: new Date('Thu Aug 18 2022 7:18:33 GMT+0700 (Giờ Đông Dương)'), status: 'nhan', msg: 'Chào bạn mình tên là Thanh, mình ở ngoại thành Hà Nội'},
        {id: 'right', time: new Date('Thu Aug 18 2022 7:19:3 GMT+0700 (Giờ Đông Dương)'), status: 'nhan', msg: 'Nói chính xác là mình ở Chương Mỹ Hà Nội'}
    ]},
    {data : '7', content : [
        {id: 'left', time: new Date('Thu Aug 18 2022 1:00:33 GMT+0700 (Giờ Đông Dương)'), status: 'nhan', msg: 'Chào bạn'},
        {id: 'left', time: new Date('Thu Aug 18 2022 1:01:33 GMT+0700 (Giờ Đông Dương)'), status: 'nhan', msg: 'Mình là Tuấn từ công ty APS Center'}

    ]},
    {data : '5', content : [
        {id: 'right', time: new Date('Tue Aug 16 2022 11:40:33 GMT+0700 (Giờ Đông Dương)'), status: 'nhan', msg: 'Chào bạn mình tên là Thanh rất vui làm quen với bạn'},
        {id: 'right', time: new Date('Tue Aug 16 2022 11:41:33 GMT+0700 (Giờ Đông Dương)'), status: 'nhan', msg: 'Không biết bạn có người yêu chưa vậy'}
    ]},
    {data : '6', content : [
        {id: 'right', time: new Date('Tue Aug 15 2022 11:40:33 GMT+0700 (Giờ Đông Dương)'), status: 'nhan', msg: 'Chào bạn mình tên là Thanh rất vui làm quen với bạn'},
        {id: 'right', time: new Date('Tue Aug 15 2022 11:41:33 GMT+0700 (Giờ Đông Dương)'), status: 'nhan', msg: 'Không biết bạn có người yêu chưa vậy'}
    ]},
    {data : '1', content : [
        {id: 'right', time: new Date('Tue Aug 11 2022 11:40:33 GMT+0700 (Giờ Đông Dương)'), status: 'nhan', msg: 'Chào bạn mình tên là Thanh rất vui làm quen với bạn'},
        {id: 'right', time: new Date('Tue Aug 11 2022 13:41:33 GMT+0700 (Giờ Đông Dương)'), status: 'nhan', msg: 'Không biết bạn có người yêu chưa vậy'}
    ]},
    {data : '9', content : [
        {id: 'right', time: new Date('Tue Aug 7 2022 11:40:33 GMT+0700 (Giờ Đông Dương)'), status: 'nhan', msg: 'Chào bạn mình tên là Thanh rất vui làm quen với bạn'},
        {id: 'right', time: new Date('Tue Aug 7 2022 11:41:33 GMT+0700 (Giờ Đông Dương)'), status: 'nhan', msg: 'Không biết bạn có người yêu chưa vậy'}
    ]},
    {data : '2', content : [
        {id: 'right', time: new Date('Tue Aug 1 2022 11:40:33 GMT+0700 (Giờ Đông Dương)'), status: 'nhan', msg: 'Chào bạn mình tên là Thanh rất vui làm quen với bạn'},
        {id: 'right', time: new Date('Tue Aug 1 2022 13:41:33 GMT+0700 (Giờ Đông Dương)'), status: 'nhan', msg: 'Bạn thật tuyệt vời'}
    ]}

    ,
    {data : '3', content : [
        {id: 'left', time: new Date('Thu Aug 18 2022 12:40:33 GMT+0700 (Giờ Đông Dương)'), status: 'doc', msg: 'Chào bạn'},
        {id: 'left', time: new Date('Thu Aug 18 2022 12:41:33 GMT+0700 (Giờ Đông Dương)'), status: 'doc', msg: 'Mình tên là Minh rất vui làm quen với bạn'},
        {id: 'right', time: new Date('Thu Aug 18 2022 12:49:33 GMT+0700 (Giờ Đông Dương)'), status: 'doc', msg: 'Chào bạn mình là Thanh, có vấn đề gì không bạn?'},
        {id: 'left', time: new Date('Thu Aug 18 2022 12:50:33 GMT+0700 (Giờ Đông Dương)'), status: 'nhan', msg: 'Mình thấy bạn có hỗ trợ lấy lại Facebook đúng không vậy?'},
        {id: 'left', time: new Date('Thu Aug 18 2022 12:50:33 GMT+0700 (Giờ Đông Dương)'), status: 'nhan', msg: 'Bạn có thể giúp mình được không?'}

    ]},
    {data : '4', content : [
        {id: 'left', time: new Date('Thu Aug 18 2022 7:11:33 GMT+0700 (Giờ Đông Dương)'), status: 'doc', msg: 'Chào bạn mình tên là Thanh rất vui làm quen với bạn'},
        {id: 'left', time: new Date('Thu Aug 18 2022 7:12:33 GMT+0700 (Giờ Đông Dương)'), status: 'doc', msg: 'Bạn ở đâu vậy?'},
        {id: 'right', time: new Date('Thu Aug 18 2022 7:18:33 GMT+0700 (Giờ Đông Dương)'), status: 'nhan', msg: 'Chào bạn mình tên là Thanh, mình ở ngoại thành Hà Nội'},
        {id: 'right', time: new Date('Thu Aug 18 2022 7:19:3 GMT+0700 (Giờ Đông Dương)'), status: 'nhan', msg: 'Nói chính xác là mình ở Chương Mỹ Hà Nội'}
    ]},
    {data : '7', content : [
        {id: 'left', time: new Date('Thu Aug 18 2022 1:00:33 GMT+0700 (Giờ Đông Dương)'), status: 'nhan', msg: 'Chào bạn'},
        {id: 'left', time: new Date('Thu Aug 18 2022 1:01:33 GMT+0700 (Giờ Đông Dương)'), status: 'nhan', msg: 'Mình là Tuấn từ công ty APS Center'}

    ]},
    {data : '5', content : [
        {id: 'right', time: new Date('Tue Aug 16 2022 11:40:33 GMT+0700 (Giờ Đông Dương)'), status: 'nhan', msg: 'Chào bạn mình tên là Thanh rất vui làm quen với bạn'},
        {id: 'right', time: new Date('Tue Aug 16 2022 11:41:33 GMT+0700 (Giờ Đông Dương)'), status: 'nhan', msg: 'Không biết bạn có người yêu chưa vậy'}
    ]},
    {data : '6', content : [
        {id: 'right', time: new Date('Tue Aug 15 2022 11:40:33 GMT+0700 (Giờ Đông Dương)'), status: 'nhan', msg: 'Chào bạn mình tên là Thanh rất vui làm quen với bạn'},
        {id: 'right', time: new Date('Tue Aug 15 2022 11:41:33 GMT+0700 (Giờ Đông Dương)'), status: 'nhan', msg: 'Không biết bạn có người yêu chưa vậy'}
    ]},
    {data : '1', content : [
        {id: 'right', time: new Date('Tue Aug 11 2022 11:40:33 GMT+0700 (Giờ Đông Dương)'), status: 'nhan', msg: 'Chào bạn mình tên là Thanh rất vui làm quen với bạn'},
        {id: 'right', time: new Date('Tue Aug 11 2022 13:41:33 GMT+0700 (Giờ Đông Dương)'), status: 'nhan', msg: 'Không biết bạn có người yêu chưa vậy'}
    ]},
    {data : '9', content : [
        {id: 'right', time: new Date('Tue Aug 7 2022 11:40:33 GMT+0700 (Giờ Đông Dương)'), status: 'nhan', msg: 'Chào bạn mình tên là Thanh rất vui làm quen với bạn'},
        {id: 'right', time: new Date('Tue Aug 7 2022 11:41:33 GMT+0700 (Giờ Đông Dương)'), status: 'nhan', msg: 'Không biết bạn có người yêu chưa vậy'}
    ]},
    {data : '2', content : [
        {id: 'right', time: new Date('Tue Aug 1 2022 11:40:33 GMT+0700 (Giờ Đông Dương)'), status: 'nhan', msg: 'Chào bạn mình tên là Thanh rất vui làm quen với bạn'},
        {id: 'right', time: new Date('Tue Aug 1 2022 13:41:33 GMT+0700 (Giờ Đông Dương)'), status: 'nhan', msg: 'Bạn thật tuyệt vời'}
    ]}

]

chatMessegerWait = [
    {data : '2', name : 'Tô Trung Kiên', avatar : './image/logo.svg.webp', online : 'Hoạt động 1 phút trước'},
    {data : '6', name : 'Lê Thị Thanh', avatar : './image/logo.png', online : 'Đang hoạt động'},
    {data : '5', name : 'Nguyễn Viết Thanh', avatar : './image/anhdd.jpg', online : 'Hoạt động 1 giờ trước'},
    {data : '7', name : 'Phạm Văn Tuấn', avatar : './image/avatar.webp', online : 'Hoạt động 1 phút trước'},
    {data : '9', name : 'Ngô Văn Tiến', avatar : './image/friend4.png', online : 'Đang hoạt động'},
    {data : '12', name : 'Lê Anh Thu', avatar : './image/friend3.png', online : 'Đang hoạt động'},
    {data : '10', name : 'Cao Mạnh Tú', avatar : './image/friend6.png', online : 'Đang hoạt động'},
    {data : '13', name : 'Nguyễn Thị Vân Anh', avatar : './image/friend7.png', online : 'Đang hoạt động'}
]


// hàm loại bỏ dấu
function removeVietnameseTones(str) {
        str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g,"a"); 
        str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g,"e"); 
        str = str.replace(/ì|í|ị|ỉ|ĩ/g,"i"); 
        str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g,"o"); 
        str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g,"u"); 
        str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g,"y"); 
        str = str.replace(/đ/g,"d");
        str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, "A");
        str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, "E");
        str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, "I");
        str = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, "O");
        str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, "U");
        str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, "Y");
        str = str.replace(/Đ/g, "D");
        // Some system encode vietnamese combining accent as individual utf-8 characters
        // Một vài bộ encode coi các dấu mũ, dấu chữ như một kí tự riêng biệt nên thêm hai dòng này
        str = str.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, ""); // ̀ ́ ̃ ̉ ̣  huyền, sắc, ngã, hỏi, nặng
        str = str.replace(/\u02C6|\u0306|\u031B/g, ""); // ˆ ̆ ̛  Â, Ê, Ă, Ơ, Ư
        // Remove extra spaces
        // Bỏ các khoảng trắng liền nhau
        str = str.replace(/ + /g," ");
        str = str.trim();
        // Remove punctuations
        // Bỏ dấu câu, kí tự đặc biệt
        str = str.replace(/!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'|\"|\&|\#|\[|\]|~|\$|_|`|-|{|}|\||\\/g," ");
        return str;
}

// tìm kiếm trong 1 list
function findChatMesseger(chatList, messegerItem){
    for(let chatItem of chatList){
        if(chatItem.id == messegerItem.id){
            return chatItem
        }
    }
}

function createChatWait(myInfo, chatUser){
    let chatUserList = document.querySelectorAll('.chat-user-item')
    let findChatMessegerWait = chatMessegerWait.find((item)=>{
        return item.data == myInfo.data
    })
    if(!findChatMessegerWait){
        chatMessegerWait.push(myInfo)
    }

    // kiểm tra xem tồn tại chat ẩn đi không user
    let findChatHidden = chatUser.querySelector('.chat-user-item-hidden')
    if(findChatHidden){
        if(chatUserList.length >= 5){
            chatUser.removeChild(chatUserList[0])
            let chatUserHidden = document.createElement('li')
            chatUserHidden.classList.add('chat-user-item-hidden')
            chatUserHidden.innerHTML = `
                <div class="chat-user-infor">
                    <img src="${chatMessegerWait[chatMessegerWait.length - 6].avatar}" alt="" class="chat-user-item-image">
                    <i class="fa-solid fa-xmark chat-remove"></i>
                </div>
                <div class="chat-user-amount-hidden">+<span>${chatMessegerWait.length - 5}</span></div>
                <div class="chat-user-hidden">
                    <ul class="chat-user-list">
                    </ul>
                </div>`
            let chatUserHiddenList = chatUserHidden.querySelector('.chat-user-list')
            for(let i = chatMessegerWait.length - 6; i >= 0; --i){
                chatUserHiddenList.innerHTML +=`<li class="chat-user-hidden-item" id="${chatMessegerWait[i].data}">
                    <span>${chatMessegerWait[i].name}</span>
                    <button class="chat-user-hidden-close">
                        <i class="fa-solid fa-xmark"></i>
                    </button>
                </li>`
            }
            chatUser.replaceChild(chatUserHidden, findChatHidden)
        }
    }
    else{
        if(chatUserList.length >= 6){
            chatUser.removeChild(chatUserList[0])
            let chatUserHidden = document.createElement('li')
            chatUserHidden.classList.add('chat-user-item-hidden')
            chatUserHidden.innerHTML = `
                <div class="chat-user-infor">
                    <img src="${chatMessegerWait[chatMessegerWait.length - 6].avatar}" alt="" class="chat-user-item-image">
                    <i class="fa-solid fa-xmark chat-remove"></i>
                </div>
                <div class="chat-user-amount-hidden">+<span>${chatMessegerWait.length - 5}</span></div>
                <div class="chat-user-hidden">
                    <ul class="chat-user-list">
                    </ul>
                </div>`
            let chatUserHiddenList = chatUserHidden.querySelector('.chat-user-list')
            for(let i = chatMessegerWait.length - 6; i >= 0; --i){
                chatUserHiddenList.innerHTML +=`<li class="chat-user-hidden-item" id="${chatMessegerWait[i].data}">
                    <span>${chatMessegerWait[i].name}</span>
                    <button class="chat-user-hidden-close">
                        <i class="fa-solid fa-xmark"></i>
                    </button>
                </li>`
            }
            chatUser.replaceChild(chatUserHidden, chatUserList[1])
        }
    }
    console.log(1, chatMessegerWait)
    let chatUserItem = document.createElement('li')
    chatUserItem.classList.add('chat-user-item')
    chatUserItem.id = myInfo.data
    if(myInfo.online === 'Đang hoạt động'){
        chatUserItem.classList.add('user-online')
    }
    let itemMesseger = contentMesseger.find((item)=>{
        return item.data == myInfo.data
    })
    chatUserItem.innerHTML =  `
        <div class="chat-user-infor">
            <img src="${myInfo.avatar}" alt="" class="chat-user-item-image">
            <i class="fa-solid fa-xmark chat-remove"></i>
        </div>`
    if(itemMesseger){
        if(itemMesseger.content[itemMesseger.content.length - 1].id == 'left'){
            chatUserItem.innerHTML += `
                <div class="chat-user-lastmsg">
                    <div class="chat-user-name">${myInfo.name}</div>
                    <span>${itemMesseger.content[itemMesseger.content.length - 1].msg}</span>
                </div>`
        }
        else{
            chatUserItem.innerHTML += `
                <div class="chat-user-lastmsg">
                    <div class="chat-user-name">${myInfo.name}</div>
                    <span>Bạn: ${itemMesseger.content[itemMesseger.content.length - 1].msg}</span>
                </div>`
        }
        let amount = 0
        if(itemMesseger){
            for(let item of itemMesseger.content){
                if(item.id == 'left' && item.status == 'nhan'){
                    amount += 1
                }
            }
        }
        if(amount != 0){
            chatUserItem.innerHTML += `<div class="chat-user-amount">${amount}</div>`
        }
    }
    else{
        chatUserItem.innerHTML += `
                <div class="chat-user-lastmsg">
                    <div class="chat-user-name">${myInfo.name}</div>
                </div>`
    }
    chatUser.appendChild(chatUserItem)
}

// hàm gửi tin nhắn
function sendMessager(chatItem, chatInput){
    let chatDisable = chatItem.querySelector('.chat-footer-wrap')
    let iconDisable = chatItem.querySelector('.fa-heart.chat-footer-icon')
    let enterDisable = chatItem.querySelector('.fa-paper-plane.chat-footer-icon')
    let enterMessage = chatItem.querySelector('.chat-container')
    let myInfo = Users.find(function (user) {
        return user.data == chatItem.id
    })

    let newMsg = { id : 'right', time : new Date, msg : chatInput.value}
    let findData = contentMesseger.find(function (item) {
        return item.data == myInfo.data
    })
 
    if(findData){
        let msgAfter = findData.content
        if(msgAfter[msgAfter.length - 1].id == 'left'){
            if((newMsg.time - msgAfter[msgAfter.length - 1].time) >= 3000){
                enterMessage.innerHTML = `<div class="chat-user-time">${newMsg.time.getHours()}:${newMsg.time.getMinutes()}</div>` + enterMessage.innerHTML
            }
            let message = enterMessage.querySelector('.chat-user-right')
            // message.removeChild(message.querySelector('.chat-user-right-image'))
            enterMessage.innerHTML = `
            <div class="chat-user-right">
                <ul class="chat-user-msg">
                    <li class="chat-user-right-content">${chatInput.value}</li>
                </ul>
                <img src="${myInfo.avatar}" alt="" class="chat-user-right-image">
            </div>` + enterMessage.innerHTML
        }
        else{
            if((newMsg.time - msgAfter[msgAfter.length - 1].time) >= 3000){
                enterMessage.innerHTML = `<div class="chat-user-time">${newMsg.time.getHours()}:${newMsg.time.getMinutes()}</div>` + enterMessage.innerHTML
                enterMessage.innerHTML = `
                    <div class="chat-user-right">
                        <ul class="chat-user-msg">
                            <li class="chat-user-right-content">${chatInput.value}</li>
                        </ul>
                        <img src="${myInfo.avatar}" alt="" class="chat-user-right-image">
                    </div>` + enterMessage.innerHTML
            }
            else{
                let message = enterMessage.querySelector('.chat-user-msg')
                message.innerHTML = message.innerHTML + `<li class="chat-user-right-content">${chatInput.value}</li>`
            }
        }
        findData.content.push(newMsg)
    }
    else{
        enterMessage.innerHTML = `
        <div class="chat-user-right">
            <ul class="chat-user-msg">
                <li class="chat-user-right-content">${chatInput.value}</li>
            </ul>
            <img src="${myInfo.avatar}" alt="" class="chat-user-right-image">
        </div>` + enterMessage.innerHTML
        contentMesseger.push({data : myInfo.data, content : [newMsg]})
    }
    enterDisable.classList.add('chat-icon-disable')
    iconDisable.classList.remove('chat-icon-disable')
    chatDisable.classList.remove('chat-icon-disable')
    chatInput.value = ''
    loadMesseger()
}

// hàm tạo tin nhắn mới
function createNewChat(){
    let chatList = document.querySelector('.chat-list')
    let chatItemList = document.querySelectorAll('.chat-item')
    let chatUser = document.querySelector('.chat-list-user')

    let findCreate = document.querySelector('.chat-item-search')
    if(findCreate){
        chatList.removeChild(findCreate)
    }
    else{
        if((window.innerWidth < 1100 && chatItemList.length == 1) || (window.innerWidth < 1533 && chatItemList.length == 2) || (window.innerWidth >= 1533 && chatItemList.length == 3)){
            chatList.removeChild(chatItemList[0])
            let chatUserList = document.querySelectorAll('.chat-user-item')
            let myInfo = Users.find(function (user) {
                return user.data == chatItemList[0].id
            })
    
            // kiểm tra xem số lượng ô chat bên phải đầy chưa
            if(chatUserList.length == 6){ /// đầy thì xoá 1 ô chat
                chatUser.removeChild(chatUserList[0])
            }
            createChatWait(myInfo, chatUser)
        }
        let chatCreateItem = document.createElement('li')
        chatCreateItem.classList.add('chat-item','chat-item-search')
        chatCreateItem.innerHTML = `
            <div class="chat-close">
                <span class="chat-close-content">Tin nhắn mới</span>
                <i class="fa-solid fa-xmark chat-menu-item"></i>
            </div>
            <div class="chat-search">
                <span class="chat-search-content">
                    Đến:
                </span>
                <input type="text" class="chat-search-input" >
            </div>
            <div class="chat-search-menu">
                <div class="chat-menu-one">Gợi ý</div>
            </div>
            <div class="chat-search-container">
                <ul class="chat-search-list">
                </ul>
            </div>`
        chatList.appendChild(chatCreateItem)
    
        let chatCreate = document.querySelector('.chat-item-search')
        chatItemList = document.querySelectorAll('.chat-item')
        for(let item of chatItemList){
            item.classList.remove('chat-checked')
        }
        chatCreate.classList.add('chat-checked')
        chatCreate.querySelector('.chat-search-input').focus()
    }

}

//
//
// khi muốn thêm hiệu ứng chưa đọc tin nhắn ở messager thêm messager-status-recevice
//
//

function createChat(myInfo, chatList){
    let userList = document.querySelector('.chat-list-user')
    let chatUserList = document.querySelectorAll('.chat-user-item')
    let findItem = chatMessegerWait.find((item)=>{
        return item.data == myInfo.data
    })
    if(findItem){
        let checkUserList = null
        for(let item of chatUserList){
            if(item.id == myInfo.data){
                checkUserList = item
            }
        }

        // kiểm tra sự tồn tại của hộp chat muốn mở ở góc phải màn hình
        if(!checkUserList){ //không tồn tại thì xoá và thêm hộp chat bị đẩy ra
            let findChatHidden = userList.querySelector('.chat-user-item-hidden')
            if(chatMessegerWait.length == 7){
                chatMessegerWait = chatMessegerWait.filter((item)=>{
                    return item.data != findItem.data
                })
                console.log(2, chatMessegerWait)
                let chatUserItem = document.createElement('li')
                chatUserItem.classList.add('chat-user-item')
                chatUserItem.id = chatMessegerWait[0].data
                if(chatMessegerWait[0].online === 'Đang hoạt động'){
                    chatUserItem.classList.add('user-online')
                }
                let itemMesseger = contentMesseger.find((item)=>{
                    return item.data == chatMessegerWait[0].data
                })
                chatUserItem.innerHTML =  `
                    <div class="chat-user-infor">
                        <img src="${chatMessegerWait[0].avatar}" alt="" class="chat-user-item-image">
                        <i class="fa-solid fa-xmark chat-remove"></i>
                    </div>`
                if(itemMesseger){
                    if(itemMesseger.content[itemMesseger.content.length - 1].id == 'left'){
                        chatUserItem.innerHTML += `
                            <div class="chat-user-lastmsg">
                                <div class="chat-user-name">${chatMessegerWait[0].name}</div>
                                <span>${itemMesseger.content[itemMesseger.content.length - 1].msg}</span>
                            </div>`
                    }
                    else{
                        chatUserItem.innerHTML += `
                            <div class="chat-user-lastmsg">
                                <div class="chat-user-name">${chatMessegerWait[0].name}</div>
                                <span>Bạn: ${itemMesseger.content[itemMesseger.content.length - 1].msg}</span>
                            </div>`
                    }
                    let amount = 0
                    if(itemMesseger){
                        for(let item of itemMesseger.content){
                            if(item.id == 'left' && item.status == 'nhan'){
                                amount += 1
                            }
                        }
                    }
                    if(amount != 0){
                        chatUserItem.innerHTML += `<div class="chat-user-amount">${amount}</div>`
                    }
                }
                else{
                    chatUserItem.innerHTML += `
                            <div class="chat-user-lastmsg">
                                <div class="chat-user-name">${chatMessegerWait[0].name}</div>
                            </div>`
                }
                userList.replaceChild(chatUserItem, findChatHidden)
            }
            else{
                if(chatMessegerWait[chatMessegerWait.length - 6].data == myInfo.data){
                    chatMessegerWait = chatMessegerWait.filter((item)=>{
                        return item.data != findItem.data
                    })
                    console.log(2, chatMessegerWait)

                    let findChatHidden = userList.querySelector('.chat-user-item-hidden')
                    chatMessegerWait = chatMessegerWait.filter((item)=>{
                        return item.data != findItem.data
                    })
                    console.log(2, chatMessegerWait)

                    let chatUserHidden = document.createElement('li')
                    chatUserHidden.classList.add('chat-user-item-hidden')
                    chatUserHidden.innerHTML = `
                        <div class="chat-user-infor">
                            <img src="${chatMessegerWait[chatMessegerWait.length - 6].avatar}" alt="" class="chat-user-item-image">
                            <i class="fa-solid fa-xmark chat-remove"></i>
                        </div>
                        <div class="chat-user-amount-hidden">+<span>${chatMessegerWait.length - 5}</span></div>
                        <div class="chat-user-hidden">
                            <ul class="chat-user-list">
                            </ul>
                        </div>`
                    let chatUserHiddenList = chatUserHidden.querySelector('.chat-user-list')
                    for(let i = chatMessegerWait.length - 6; i >= 0; --i){
                        chatUserHiddenList.innerHTML +=`<li class="chat-user-hidden-item" id="${chatMessegerWait[i].data}">
                            <span>${chatMessegerWait[i].name}</span>
                            <button class="chat-user-hidden-close">
                                        <i class="fa-solid fa-xmark"></i>
                            </button>
                        </li>`
                    }
                    userList.replaceChild(chatUserHidden, findChatHidden)
                }
                else{
                    chatMessegerWait = chatMessegerWait.filter((item)=>{
                        return item.data != findItem.data
                    })
                    console.log(2, chatMessegerWait)
                    let chatUserHidden = findChatHidden.querySelector('.chat-user-list')
                    let chatUserAmountHidden = findChatHidden.querySelector('.chat-user-amount-hidden')
                    let chatUserHiddenList = findChatHidden.querySelectorAll('.chat-user-hidden-item')
                    chatUserAmountHidden.innerHTML = `+<span>${chatMessegerWait.length - 5}</span>`
                    for(let item of chatUserHiddenList){
                        if(item.id == myInfo.data){
                            chatUserHidden.removeChild(item)
                            break
                        }
                    }

                }

            }
        }
        else{
            // kiểm tra xem có phải trường hợp số lượng hộp chat đầy không
            if(chatMessegerWait.length >= 7){
                let findChatHidden = userList.querySelector('.chat-user-item-hidden')
                if(chatMessegerWait.length == 7){
                    userList.removeChild(checkUserList)
                    userList.removeChild(findChatHidden)
                    chatUserList = document.querySelectorAll('.chat-user-item')
                    for(let i=0; i < chatMessegerWait.length - 5; ++i){
                        let chatUserItem = document.createElement('li')
                        chatUserItem.classList.add('chat-user-item')
                        chatUserItem.id = chatMessegerWait[i].data
                        if(chatMessegerWait[i].online === 'Đang hoạt động'){
                            chatUserItem.classList.add('user-online')
                        }
                        let itemMesseger = contentMesseger.find((item)=>{
                            return item.data == chatMessegerWait[i].data
                        })
                        chatUserItem.innerHTML =  `
                            <div class="chat-user-infor">
                                <img src="${chatMessegerWait[i].avatar}" alt="" class="chat-user-item-image">
                                <i class="fa-solid fa-xmark chat-remove"></i>
                            </div>`
                        if(itemMesseger){
                            if(itemMesseger.content[itemMesseger.content.length - 1].id == 'left'){
                                chatUserItem.innerHTML += `
                                    <div class="chat-user-lastmsg">
                                        <div class="chat-user-name">${chatMessegerWait[i].name}</div>
                                        <span>${itemMesseger.content[itemMesseger.content.length - 1].msg}</span>
                                    </div>`
                            }
                            else{
                                chatUserItem.innerHTML += `
                                    <div class="chat-user-lastmsg">
                                        <div class="chat-user-name">${chatMessegerWait[i].name}</div>
                                        <span>Bạn: ${itemMesseger.content[itemMesseger.content.length - 1].msg}</span>
                                    </div>`
                            }
                            let amount = 0
                            if(itemMesseger){
                                for(let item of itemMesseger.content){
                                    if(item.id == 'left' && item.status == 'nhan'){
                                        amount += 1
                                    }
                                }
                            }
                            if(amount != 0){
                                chatUserItem.innerHTML += `<div class="chat-user-amount">${amount}</div>`
                            }
                        }
                        else{
                            chatUserItem.innerHTML += `
                                    <div class="chat-user-lastmsg">
                                        <div class="chat-user-name">${chatMessegerWait[i].name}</div>
                                    </div>`
                        }
                        userList.insertBefore(chatUserItem, chatUserList[0])
                    }
                    chatMessegerWait = chatMessegerWait.filter((item)=>{
                        return item.data != findItem.data
                    })
                    console.log(2, chatMessegerWait)
                }
                else{
                    chatMessegerWait = chatMessegerWait.filter((item)=>{
                        return item.data != findItem.data
                    })
                    console.log(2, chatMessegerWait)
                    userList.removeChild(checkUserList)
                    chatUserList = document.querySelectorAll('.chat-user-item')
                    let chatUserItem = document.createElement('li')
                    chatUserItem.classList.add('chat-user-item')
                    chatUserItem.id = chatMessegerWait[chatMessegerWait.length - 5].data
                    if(chatMessegerWait[chatMessegerWait.length - 5].online === 'Đang hoạt động'){
                        chatUserItem.classList.add('user-online')
                    }
                    chatUserItem.innerHTML =  `
                        <div class="chat-user-infor">
                            <img src="${chatMessegerWait[chatMessegerWait.length - 5].avatar}" alt="" class="chat-user-item-image">
                            <i class="fa-solid fa-xmark chat-remove"></i>
                        </div>`
                    let itemMesseger = contentMesseger.find((item)=>{
                        return item.data == chatMessegerWait[chatMessegerWait.length - 5].data
                    })
                    if(itemMesseger){
                        if(itemMesseger.content[itemMesseger.content.length - 1].id == 'left'){
                            chatUserItem.innerHTML += `
                                <div class="chat-user-lastmsg">
                                    <div class="chat-user-name">${chatMessegerWait[chatMessegerWait.length - 5].name}</div>
                                    <span>${itemMesseger.content[itemMesseger.content.length - 1].msg}</span>
                                </div>`
                        }
                        else{
                            chatUserItem.innerHTML += `
                                <div class="chat-user-lastmsg">
                                    <div class="chat-user-name">${chatMessegerWait[chatMessegerWait.length - 5].name}</div>
                                    <span>Bạn: ${itemMesseger.content[itemMesseger.content.length - 1].msg}</span>
                                </div>`
                        }
                        let amount = 0
                        if(itemMesseger){
                            for(let item of itemMesseger.content){
                                if(item.id == 'left' && item.status == 'nhan'){
                                    amount += 1
                                }
                            }
                        }
                        if(amount != 0){
                            chatUserItem.innerHTML += `<div class="chat-user-amount">${amount}</div>`
                        }
                    }
                    else{
                        chatUserItem.innerHTML += `
                                <div class="chat-user-lastmsg">
                                    <div class="chat-user-name">${chatMessegerWait[chatMessegerWait.length - 5].name}</div>
                                </div>`
                    }
                    userList.insertBefore(chatUserItem, chatUserList[0])


                    findChatHidden.querySelector('.chat-user-infor').innerHTML = `
                        <img src="${chatMessegerWait[chatMessegerWait.length - 6].avatar}" alt="" class="chat-user-item-image">
                        <i class="fa-solid fa-xmark chat-remove"></i>`
                    findChatHidden.querySelector('.chat-user-amount-hidden').innerHTML = `+<span>${chatMessegerWait.length - 5}`
                    let chatUserHiddenList = findChatHidden.querySelector('.chat-user-list')
                    let chatUserHiddenItem = chatUserHiddenList.querySelectorAll('.chat-user-hidden-item')
                    chatUserHiddenList.removeChild(chatUserHiddenItem[0])
                }
            }
            else{
                userList.removeChild(checkUserList)
                chatMessegerWait = chatMessegerWait.filter((item)=>{
                    return item.data != findItem.data
                })
                console.log(2, chatMessegerWait)
            }

        }
    }
    
    let chatItem = document.createElement('li')
    chatItem.classList.add('chat-item')
    chatItem.id = myInfo.data
    chatItem.innerHTML =`
        <div class="chat-header">
            <div class="chat-infor">
                <div class="chat-img">
                    <img src="${myInfo.avatar}" alt="">
                </div>
                <div class="chat-infor-wrap">
                    <div class="chat-infor-name">${myInfo.name}</div>
                    <div class="chat-infor-status">${myInfo.online}</div>
                </div>
                <i class="fa-solid fa-chevron-down"></i>
            </div>
            <div class="chat-menu">
                <i class="fa-solid fa-phone chat-menu-item"></i>
                <i class="fa-solid fa-video chat-menu-item"></i>
                <i class="fa-solid fa-minus chat-menu-item"></i>
                <i class="fa-solid fa-xmark chat-menu-item"></i>
            </div>
        </div>
        <div class="chat-container">
            <div class="chat-container-head">
                <img src="${myInfo.avatar}" alt="" class="chat-img">
                <div class="chat-container-name">${myInfo.name}</div>
                <div class="chat-container-friend">Các bạn là bạn bè trên Facebook</div>
            </div>
        </div>
        <div class="chat-footer">
            <i class="fa-solid fa-circle-plus chat-footer-icon"></i>
            <div class="chat-footer-wrap">
                <i class="fa-solid fa-images chat-footer-icon"></i>
                <i class="fa-solid fa-note-sticky chat-footer-icon"></i>
                <i class="fa-solid fa-gift chat-footer-icon"></i>
            </div>
            <input type="" placeholder="Aa" class="chat-input">
            <i class="fa-solid fa-heart chat-footer-icon"></i>
            <i class="fa-solid fa-paper-plane chat-footer-icon chat-icon-disable"></i>
        </div>`
    if(myInfo.online == 'Đang hoạt động'){
        chatItem.querySelector('.chat-img').classList.add('user-online')
    }
    let msg = contentMesseger.find(item => {
        return item.data == myInfo.data
    })
    if(msg){
        let chatContainer = chatItem.querySelector('.chat-container')
        for(let i=0 ; i<msg.content.length ; ++i){
            if(i == 0){
                chatContainer.innerHTML = `<div class="chat-user-time">${msg.content[i].time.getHours()}:${msg.content[i].time.getMinutes()}</div>` + chatContainer.innerHTML
                if(msg.content[i].id == 'left'){
                    chatContainer.innerHTML = `<div class="chat-user-left">
                        <img src="${myInfo.avatar}" alt="" class="chat-user-left-image">
                        <ul class="chat-user-msg">
                            <li class="chat-user-left-content">${msg.content[i].msg}</li>
                        </ul>
                    </div>` + chatContainer.innerHTML
                }
                else{
                    chatContainer.innerHTML = `<div class="chat-user-right">
                        <ul class="chat-user-msg">
                            <li class="chat-user-right-content">${msg.content[i].msg}</li>
                        </ul>
                        <img src="${myInfo.avatar}" alt="" class="chat-user-right-image">
                    </div>` + chatContainer.innerHTML
                }
            }
            else{
                if(msg.content[i].time - msg.content[i-1].time > 300000){
                    chatContainer.innerHTML = `<div class="chat-user-time">${msg.content[i].time.getHours()}:${msg.content[i].time.getMinutes()}</div>` + chatContainer.innerHTML
                    if(msg.content[i].id == 'left'){
                        chatContainer.innerHTML = `<div class="chat-user-left">
                            <img src="${myInfo.avatar}" alt="" class="chat-user-left-image">
                            <ul class="chat-user-msg">
                                <li class="chat-user-left-content">${msg.content[i].msg}</li>
                            </ul>
                        </div>` + chatContainer.innerHTML
                    }
                    else{
                        chatContainer.innerHTML = `<div class="chat-user-right">
                            <ul class="chat-user-msg">
                                <li class="chat-user-right-content">${msg.content[i].msg}</li>
                            </ul>
                            <img src="${myInfo.avatar}" alt="" class="chat-user-right-image">
                        </div>` + chatContainer.innerHTML
                    }
                }
                else{
                    if(msg.content[i].id == msg.content[i-1].id){
                        let message = chatContainer.querySelector('.chat-user-msg')
                        message.innerHTML = message.innerHTML + `<li class="chat-user-${msg.content[i].id}-content">${msg.content[i].msg}</li>`
                    }
                    else{
                        if(msg.content[i].id == 'left'){
                            chatContainer.innerHTML = `<div class="chat-user-left">
                                <img src="${myInfo.avatar}" alt="" class="chat-user-left-image">
                                <ul class="chat-user-msg">
                                    <li class="chat-user-left-content">${msg.content[i].msg}</li>
                                </ul>
                            </div>` + chatContainer.innerHTML
                        }
                        else{
                            chatContainer.innerHTML = `<div class="chat-user-right">
                                <ul class="chat-user-msg">
                                    <li class="chat-user-right-content">${msg.content[i].msg}</li>
                                </ul>
                                <img src="${myInfo.avatar}" alt="" class="chat-user-right-image">
                            </div>` + chatContainer.innerHTML
                        }
                    }
                }
            }
        }
    }
    chatList.appendChild(chatItem)
}

// hàm mở hộp chat
function openChat(chatItemOpen){
    let chatList = document.querySelector('.chat-list')
    let chatItemList = document.querySelectorAll('.chat-item')
    let userList = document.querySelector('.chat-list-user')
    let chatUserList = document.querySelectorAll('.chat-user-item')

    let findChat = findChatMesseger(chatItemList, chatItemOpen)
    // kiểm tra xem tồn tại hộp chat ở trên màn hình hay chưa
    if(findChat){
        if(window.innerWidth >= 1100 && window.innerWidth < 1533){
            if(chatItemList.length == 2){
                if(chatItemList[1].id != findChat.id){
                    let chatItem = chatItemList[0]
                    chatList.removeChild(chatItem)
                    chatList.appendChild(chatItem)
                }
            }
        }
        else if(window.innerWidth >= 1533){
            if(chatItemList.length == 3){
                if(chatItemList[2].id !=  findChat.id){
                    let chatItem = findChatMesseger(chatItemList, findChat)
                    chatList.removeChild(chatItem)
                    chatList.appendChild(chatItem)
                }
            }
            else if(chatItemList.length == 2){
                if(chatItemList[1].id !=  findChat.id){
                    let chatItem = findChatMesseger(chatItemList, findChat)
                    chatList.removeChild(chatItem)
                    chatList.appendChild(chatItem)
                }
            }
        }
    }
    else{
        let myInfo = Users.find(function (user) {
            return user.data == chatItemOpen.id
        })
        if((window.innerWidth < 1100 && chatItemList.length == 1) || (window.innerWidth < 1533 && chatItemList.length == 2) || (window.innerWidth >= 1533 && chatItemList.length == 3)){
            if(!chatItemList[0].classList.contains('chat-item-search')){
                let myInfo1 = Users.find(function (user) {
                    return user.data == chatItemList[0].id
                })
                createChatWait(myInfo1, userList, chatUserList)
            }
            chatList.removeChild(chatItemList[0])
        }
        createChat(myInfo, chatList)
        
    }
    // tìm nội dung cuối cùng của cuộc trò chuyện để đánh dấu đã đọc
    let itemMesseger = contentMesseger.find((item) =>{
        return item.data == chatItemOpen.id
    })
    if(itemMesseger){
        for(let item of itemMesseger.content){
            if(item.id == 'left' && item.status == 'nhan'){
                item.status = 'doc'
            }
        }
    }
    for(let item of chatItemList){
        if(item.id == chatItemOpen.id){
            item.classList.remove('messager-status-recevice')
            break
        }
    }
    chatItemList = document.querySelectorAll('.chat-item')
    let chatInput = chatItemList[chatItemList.length - 1].querySelector('.chat-input')
    for(let j=0; j<chatItemList.length ; ++j){
        chatItemList[j].classList.remove('chat-checked')
    }
    chatItemList[chatItemList.length - 1].classList.add('chat-checked')
    chatInput.focus()
}

// load danh sách tin nhăn
function loadMesseger(){
    contentMesseger.sort(function(item1, item2){
        return item2.content[item2.content.length - 1].time - item1.content[item1.content.length - 1].time
    })
    let messegerList = document.querySelector('.messager-list')
    messegerList.textContent = ``
    contentMesseger.forEach(item => {
        let myInfo = Users.find(function (user) {
            return user.data == item.data
        })
        let messegerItem = document.createElement('li')
        messegerItem.classList.add('messager-list-item')
        if(item.content[item.content.length - 1].id == 'left' && item.content[item.content.length - 1].status == 'nhan'){
            messegerItem.classList.add('messager-status-recevice')
        }
        messegerItem.id = myInfo.data
        messegerItem.innerHTML = `
            <div class="messager-item-wrap">
                <div class="messager-item-image">
                    <img src="${myInfo.avatar}" alt="">
                </div>
                <div class="messager-item-content">
                    <div class="messager-item-name">
                        ${myInfo.name}
                    </div>
                    <div class="messager-item-msg">
                    </div>
                </div>
            </div>
            <button class="messager-item-extend">
                <i class="fa-solid fa-ellipsis"></i>
            </button>`
        if(myInfo.online == 'Đang hoạt động'){
            messegerItem.querySelector('.messager-item-image').classList.add('user-online')
        }
        let messegerContent = messegerItem.querySelector('.messager-item-msg')
        let time = ((new Date) - item.content[item.content.length - 1].time) / 60000
        let unit = 'phút'
        if(time < 1){
            time = 1
        }
        else{
            if(time > 60){
                time = time / 60
                unit = 'giờ'
                if(time > 24){
                    time = time / 24
                    unit = 'ngày'
                    if(time > 30){
                        time = time / 30
                        unit = 'tháng'
                        if(time > 12){
                            time = time / 12
                            unit = 'năm'
                        }
                    }
                }
            }
        }
        time = time.toFixed()
        if(item.content[item.content.length - 1].id == 'right'){
            messegerContent.innerHTML = `<span class="messager-msg-content">Bạn : ${item.content[item.content.length - 1].msg}</span>
                <span class="messager-msg-time"> · ${time} ${unit}</span>`
        }
        else{
            messegerContent.innerHTML = `<span class="messager-msg-content">${item.content[item.content.length - 1].msg}</span>
            <span class="messager-msg-time"> · ${time} ${unit}</span>`
        }
        messegerList.appendChild(messegerItem)
    })
}




// xử lý mở danh sách tin nhắn
const messager = {
    render : function(){
       loadMesseger()
    },
    handleEvents : function(){
        // mở danh sách cuộc trò chuyện
        let messengerClick = document.querySelector('.profile-item-message')
        messengerClick.addEventListener('click', function(){
            loadMesseger()
            let messengerOn = document.querySelector('.messager')
            messengerOn.classList.toggle('message-disable')
            messengerClick.classList.toggle('profile-checked')
        
            let messagerSearchWrap = document.querySelector('.messager-search-wrap')
            let messagerSearch = document.querySelector('.messager-search')
            let btnSearchBack = document.querySelector('.messager-search-back')
            let messagerHeader = document.querySelector('.messager-header')
            messagerSearchWrap.style.marginLeft = '20px'
            messagerInput.classList.remove('messager-focus')
            messagerSearchInput.value = ``
            messagerSearch.classList.remove('messager-search-checked')
            btnSearchBack.classList.remove('messager-search-checked')
            messagerHeader.style.maxHeight = 'calc(100% - 43px)'
            messagerHeader.style.overflowY = 'scroll'
            let messagerSearchList = document.querySelector('.messager-search-list')
            messagerSearchList.innerHTML = ''
        
        
            let messagerSetting = document.querySelector('.messager-setting-container')
            if(messagerSetting.classList.contains('messager-setting-container-checked')){
                messagerSetting.classList.toggle('messager-setting-container-checked')        
            }
        })

        // đóng danh sách cuộc trò chuyện
        let header = document.querySelector('.header')
        let container = document.querySelector('.container')
        header.addEventListener('click', function(e){
            // đóng cuộc trò chuyện
            if(!e.target.classList.contains('fa-comment-dots')){
                let messengerOn = document.querySelector('.messager')
                if(!messengerOn.classList.contains('message-disable')){
                    messengerOn.classList.toggle('message-disable')
                    messengerClick.classList.toggle('profile-checked')
                }
            }
        })
        container.addEventListener('click', function(e){
            // đóng cuộc trò chuyện
            let messengerOn = document.querySelector('.messager')
            if(!messengerOn.classList.contains('message-disable')){
                messengerOn.classList.toggle('message-disable')
                messengerClick.classList.toggle('profile-checked')
            }
        })

        // mở setting trong messenger và chức năng của cả cuộc trò chuyện
        let messagerMenuSetting = document.querySelector('.messager-menu-setting')
        messagerMenuSetting.onclick = function(){
            let messagerSetting = document.querySelector('.messager-setting-container')
            messagerSetting.classList.toggle('messager-setting-container-checked')
            var rect = messagerMenuSetting.getBoundingClientRect()
            messagerSetting.style.top = rect.bottom - 36 + 'px'
                
            let settingVolumeCall = document.querySelector('.messager-setting-volume-call')
            settingVolumeCall.onclick = function(){
                settingVolumeCall.classList.toggle('setting-volume-call-checked')
            }

            let settingVolumeMsg = document.querySelector('.messager-setting-volume-msg')
            settingVolumeMsg.onclick = function(){
                settingVolumeMsg.classList.toggle('setting-volume-msg-checked')
            }

            let settingBall = document.querySelector('.messager-setting-ball')
            settingBall.onclick = function(){
                settingBall.classList.toggle('setting-ball-checked')
            }
        }

        
        // đóng setting trong messenger
        document.querySelector('.app').addEventListener('click', function(e){
            // đóng setting cho từng tin nhắn
            let messagerSetting = document.querySelector('.messager-setting-container')
            if(!e.target.closest('.messager-menu-setting') && !e.target.closest('.messager-setting-container')){
                if(messagerSetting.classList.contains('messager-setting-container-checked')){
                    messagerSetting.classList.toggle('messager-setting-container-checked')        
                }
            }
        })
        let messagerHeader = document.querySelector('.messager-header')
        messagerHeader.addEventListener("scroll", function(){
            let messagerSetting = document.querySelector('.messager-setting-container')
            var rect = messagerMenuSetting.getBoundingClientRect()
            messagerSetting.style.top = rect.bottom - 36 + 'px'
            if(messagerSetting.classList.contains('messager-setting-container-checked') && rect.top <= 10){
                messagerSetting.classList.toggle('messager-setting-container-checked')        
            }    
        })

        // mở xem tất cả tin nhắn trong messager
        document.querySelector('.messager-footer').onclick =
            document.querySelector('.messager-menu-message').onclick = function(e){
            window.open('./profile.html', '_blank', 'width=1284,height=729','location=0')
        }

        // mở tạo phòng họp mới
        document.querySelector('.messager-menu-meeting').onclick = function(){
            window.open('./profile.html', '_blank', 'width=1284,height=729','location=0')
        }

        // mở tạo tin nhắn mới trong messenger
        let menuCreate = document.querySelector('.messager-menu-create')
        menuCreate.onclick = function(){
            createNewChat()
            let messengerOn = document.querySelector('.messager')
            messengerOn.classList.toggle('message-disable')
            messengerClick.classList.toggle('profile-checked')
        }

        // mở hộp chat, setting cho từng đối tượng messager
        // xoá setting cho đối tượng nếu vượt quá khung messager
        let messagerList = document.querySelector('.messager-list')
        messagerList.onclick = function(e){
            let messagerItem = e.target.closest('.messager-list-item')
            if(!e.target.closest('.messager-item-extend') && !e.target.closest('.messager-item-setting')){
                if(messagerItem.classList.contains('messager-list-item')){
                    let messengerOn = document.querySelector('.messager')
                    openChat(messagerItem)
                    messengerOn.classList.toggle('message-disable')
                    messengerClick.classList.toggle('profile-checked')
                }
            }
            else{
                // mở setting cho từng đối tượng
                let extendHidden = e.target.closest('.messager-item-extend')
                if(e.target.closest('.messager-item-extend')){
                    let messagerSetting = document.querySelector('.messager-item-setting')
                    var rect = extendHidden.getBoundingClientRect()
                    if(messagerSetting){
                        messagerSetting.remove()
                        if(extendHidden.classList.contains('messager-setting-checked')){
                            extendHidden.classList.remove('messager-setting-checked')
                        }
                        else{
                            document.querySelector('.messager-setting-checked').classList.remove('messager-setting-checked')
                            extendHidden.classList.add('messager-setting-checked')
                            let element = document.createElement('div')
                            element.classList.add('messager-item-setting')
                            element.innerHTML = `
                                <button class="messager-setting-check">
                                    <i class="fa-solid fa-check"></i>
                                    <div class="messager-setting-content">
                                        Đánh dầu là chưa đọc
                                    </div>
                                </button>
                                <button class="messager-setting-message">
                                    <i class="fa-solid fa-message"></i>
                                    <div class="messager-setting-content">
                                        Mở cuộc trò chuyện
                                    </div>
                                </button>
                                <button class="messager-setting-bell">
                                    <i class="fa-solid fa-bell"></i>
                                    <div class="messager-setting-content">
                                        Tắt thông báo
                                    </div>
                                </button>
                    
                                <button class="messager-setting-user">
                                    <i class="fa-solid fa-user"></i>
                                    <div class="messager-setting-content">
                                        Xem trang cá nhân
                                    </div>
                                </button>
                                <button class="messager-setting-call">
                                    <i class="fa-solid fa-phone"></i>
                                    <div class="messager-setting-content">
                                        Gọi thoại
                                    </div>
                                </button>
                                <button class="messager-setting-video">
                                    <i class="fa-solid fa-video"></i>
                                    <div class="messager-setting-content">
                                        Chat video
                                    </div>
                                </button>
                    
                                <button class="messager-setting-save">
                                    <i class="fa-solid fa-rectangle-xmark"></i>
                                    <div class="messager-setting-content">
                                        Lưu trữ đoạn chat
                                    </div>
                                </button>
                                <button class="messager-setting-delete">
                                    <i class="fa-solid fa-trash-can"></i>
                                    <div class="messager-setting-content">
                                        Xoá đoạn chat
                                    </div>
                                </button>`
                            if(messagerItem.classList.contains('messager-status-recevice')){
                                element.querySelector('.messager-setting-check .messager-setting-content').textContent = 'Đánh dấu là đã đọc'
                            }                     
                            messagerItem.appendChild(element)
                            if(e.clientY < 390){
                                element.classList.add('messager-item-settint-top')
                                element.style.top = rect.bottom + 16 + 'px'
                            }
                            else{
                                element.classList.add('messager-item-settint-bottom')
                                element.style.bottom = `calc(100% + 16px - ${rect.top}px)`
                            }
                        }
                    }
                    else{
                        extendHidden.classList.add('messager-setting-checked')
                        let element = document.createElement('div')
                        element.classList.add('messager-item-setting')
                        element.innerHTML = `
                            <button class="messager-setting-check">
                                <i class="fa-solid fa-check"></i>
                                <div class="messager-setting-content">
                                    Đánh dầu là chưa đọc
                                </div>
                            </button>
                            <button class="messager-setting-message">
                                <i class="fa-solid fa-message"></i>
                                <div class="messager-setting-content">
                                    Mở cuộc trò chuyện
                                </div>
                            </button>
                            <button class="messager-setting-bell">
                                <i class="fa-solid fa-bell"></i>
                                <div class="messager-setting-content">
                                    Tắt thông báo
                                </div>
                            </button>
                
                            <button class="messager-setting-user">
                                <i class="fa-solid fa-user"></i>
                                <div class="messager-setting-content">
                                    Xem trang cá nhân
                                </div>
                            </button>
                            <button class="messager-setting-call">
                                <i class="fa-solid fa-phone"></i>
                                <div class="messager-setting-content">
                                    Gọi thoại
                                </div>
                            </button>
                            <button class="messager-setting-video">
                                <i class="fa-solid fa-video"></i>
                                <div class="messager-setting-content">
                                    Chat video
                                </div>
                            </button>
                
                            <button class="messager-setting-save">
                                <i class="fa-solid fa-rectangle-xmark"></i>
                                <div class="messager-setting-content">
                                    Lưu trữ đoạn chat
                                </div>
                            </button>
                            <button class="messager-setting-delete">
                                <i class="fa-solid fa-trash-can"></i>
                                <div class="messager-setting-content">
                                    Xoá đoạn chat
                                </div>
                            </button>`
                        if(messagerItem.classList.contains('messager-status-recevice')){
                            element.querySelector('.messager-setting-check .messager-setting-content').textContent = 'Đánh dấu là đã đọc'
                        }
                        messagerItem.appendChild(element)
                        if(e.clientY < 390){
                            element.classList.add('messager-item-settint-top')
                            element.style.top = rect.bottom + 16 + 'px'
                        }
                        else{
                            element.classList.add('messager-item-settint-bottom')
                            element.style.bottom = `calc(100% + 16px - ${rect.top}px)`
                        }
                    }
                }

                // xoá setting cho đối tượng nếu vượt quá khung messager
                messagerHeader.onscroll = function(){
                    let messagerItemSetting = document.querySelector('.messager-item-setting')
                    if(messagerItemSetting){
                        let rect = extendHidden.getBoundingClientRect()
                        // kiểm tra xem nó có vượt khung của messager không nếu vượt thì xoá nó đi
                        if(messagerItemSetting.classList.contains('messager-item-settint-top')){
                            messagerItemSetting.style.top = rect.bottom + 16 + 'px'
                            if(rect.top <= 10 || rect.bottom >= 670){
                                messagerItemSetting.remove()
                                extendHidden.classList.remove('messager-setting-checked')
                            }
                        }
                        else{
                            messagerItemSetting.style.bottom = `calc(100% + 16px - ${rect.top}px)`
                            if(rect.top <= 110 || rect.bottom >= 1080){
                                messagerItemSetting.remove()
                                extendHidden.classList.remove('messager-setting-checked')
                            }
                        }
                    }
                }

                // chọn settting cho từng đối tượng messager
                let messagerItemSetting = document.querySelector('.messager-item-setting')
                if(messagerItemSetting){
                    messagerItemSetting.onclick = function(e){
                        let settingSelect = e.target.closest('button')
                        if(settingSelect){
                            // đánh dấu là chưa đọc
                            if(settingSelect.className == 'messager-setting-check'){
                                let find = contentMesseger.find((item)=>{
                                    return item.data == messagerItem.id
                                })
                                let chatList = document.querySelectorAll('.chat-item')
                                let chatUserList = document.querySelectorAll('.chat-user-item')

                                if(!messagerItem.classList.contains('messager-status-recevice')){
                                    find.content[find.content.length - 1].status = 'nhan'

                                    for(let item of chatList){
                                        if(item.id == messagerItem.id){
                                            item.classList.add('messager-status-recevice')
                                            break
                                        }
                                    }
                                    messagerItem.classList.add('messager-status-recevice')

                                    for(let item of chatUserList){
                                        if(item.id == messagerItem.id){
                                            item.innerHTML += `<div class="chat-user-amount">1</div>`
                                        }
                                    }
                                }
                                else{
                                    find.content[find.content.length - 1].status = 'doc'

                                    for(let item of chatList){
                                        if(item.id == messagerItem.id){
                                            item.classList.remove('messager-status-recevice')
                                            break
                                        }
                                    }
                                    messagerItem.classList.remove('messager-status-recevice')

                                    for(let item of chatUserList){
                                        if(item.id == messagerItem.id){
                                            item.querySelector('.chat-user-amount').remove()
                                        }
                                    }
                                }
                            }
                            // tắt thông báo tin nhắn
                            else if(settingSelect.className == 'messager-setting-bell'){
                                let settingBell = document.querySelector('.setting-disable-bell')
                                let modal = document.querySelector('.modal')
                                let modalLayout = document.querySelector('.modal-layout')
                                let settingClose = settingBell.querySelector('.btn-close')
                                let settingCancel = settingBell.querySelector('.btn-cancel')
                                let settingCofirm = settingBell.querySelector('.btn-confirm')
            
                                // hiển thị form xác nhận
                                settingBell.classList.toggle('setting-open-checked')
                                modal.classList.toggle('modal-checked')
                                // tắt form
                                modalLayout.onclick = settingClose.onclick = settingCancel.onclick = function(){
                                    settingBell.classList.toggle('setting-open-checked')
                                    modal.classList.toggle('modal-checked')
                                }
                                settingCofirm.onclick = function(){
                                    settingBell.classList.toggle('setting-open-checked')
                                    modal.classList.toggle('modal-checked')
                                    let radioBell = document.getElementsByName('bell')
                                    for(let item of radioBell){
                                        if(item.checked == true){
                                            alert(item.value)
                                        }
                                    }
                                    let messengerOn = document.querySelector('.messager')
                                    messengerOn.classList.toggle('message-disable')
                                    messengerClick.classList.toggle('profile-checked')
                                }
                            }
                            // mở cuộc trò chuyện
                            else if(settingSelect.className == 'messager-setting-message'){
                                alert('Mở cuộc trò chuyện')
                            }
                            // xoá tin nhắn
                            else if(settingSelect.className == 'messager-setting-delete'){
                                let settingDelete = document.querySelector('.setting-delete')
                                let modal = document.querySelector('.modal')
                                let modalLayout = document.querySelector('.modal-layout')
                                let settingClose = settingDelete.querySelector('.btn-close')
                                let settingCancel = settingDelete.querySelector('.btn-cancel')
                                let settingCofirm = settingDelete.querySelector('.btn-confirm')
                                // hiển thị form xác nhận
                                settingDelete.classList.toggle('setting-open-checked')
                                // appContainer.classList.toggle('app-container-hidden')
                                modal.classList.toggle('modal-checked')
                                // tắt form
                                modalLayout.onclick = settingClose.onclick = settingCancel.onclick = function(){
                                    settingDelete.classList.toggle('setting-open-checked')
                                    // appContainer.classList.toggle('app-container-hidden')
                                    modal.classList.toggle('modal-checked')
                                }
                                settingCofirm.onclick = function(){
                                    settingDelete.classList.toggle('setting-open-checked')
                                    // appContainer.classList.toggle('app-container-hidden')
                                    modal.classList.toggle('modal-checked')
                                    let contentMessegerNew = contentMesseger.filter(function(value){
                                        return value.data != messagerItem.id;
                                    })
                                    contentMesseger = contentMessegerNew
            
                                    let chatListItem = document.querySelectorAll('.chat-item')
                                    let chatItem = findChatMesseger(chatListItem, messagerItem)
                                    if(chatItem){
                                        let chatUserList = document.querySelectorAll('.chat-user-item')
                                        let chatUser = document.querySelector('.chat-list-user')
                                        let chatList = document.querySelector('.chat-list')
                
                                        let myInfo = Users.find(function (user) {
                                            return user.data == chatUserList[chatUserList.length - 1].id
                                        })
                                        chatUser.removeChild(chatUserList[chatUserList.length - 1])
                                        createChat(myInfo, chatList)
                                        chatList.removeChild(chatItem)
                                    }
                                    loadMesseger()
                                    let messengerOn = document.querySelector('.messager')
                                    messengerOn.classList.toggle('message-disable')
                                    messengerClick.classList.toggle('profile-checked')
                                }
                            }
                            // xem trang cá nhân
                            else if(settingSelect.className == 'messager-setting-user'){
                                alert('Xem trang cá nhân')
                            }
                            // thực hiện cuộc gọi
                            else if(settingSelect.className == 'messager-setting-call'){
                                window.open('./profile.html', '_blank', 'width=1284,height=729','location=0')
                            }
                            // thực hiện cuộc gọi video
                            else if(settingSelect.className == 'messager-setting-video'){
                                window.open('./profile.html', '_blank', 'width=1284,height=729','location=0')
                            }
                            // lưu trữ đoạn chat
                            else{
                                alert('Lưu trữ đoạn chat')
                            }
                            messagerItemSetting.remove()
                            document.querySelector('.messager-setting-checked').classList.remove('messager-setting-checked')
                        }
                    }
                }
                
            }
        }


        // let messagerList = document.querySelector('.messager-list')
        // messagerList.onclick = function(e){
        //     let messagerItem = e.target.closest('.messager-list-item')
        //     if(!e.target.closest('.messager-item-extend') && !e.target.closest('.messager-item-setting')){
        //         if(messagerItem.classList.contains('messager-list-item')){
        //             let messengerOn = document.querySelector('.messager')
        //             openChat(messagerItem)
        //             messengerOn.classList.toggle('message-disable')
        //             messengerClick.classList.toggle('profile-checked')
        //         }
        //     }
        //     else{
        //         // mở setting cho từng đối tượng
        //         let extendHidden = e.target.closest('.messager-item-extend')
        //         if(e.target.closest('.messager-item-extend')){
        //             let messagerSetting = document.querySelector('.messager-item-setting')
        //             var rect = extendHidden.getBoundingClientRect()
        //             if(messagerSetting){
        //                 messagerList.removeChild(messagerSetting)
        //                 if(extendHidden.classList.contains('messager-setting-checked')){
        //                     extendHidden.classList.remove('messager-setting-checked')
        //                 }
        //                 else{
        //                     messagerList.querySelector('.messager-setting-checked').classList.remove('messager-setting-checked')
        //                     extendHidden.classList.add('messager-setting-checked')
        //                     let element = document.createElement('div')
        //                     element.classList.add('messager-item-setting')
        //                     element.innerHTML = `
        //                         <button class="messager-setting-check">
        //                             <i class="fa-solid fa-check"></i>
        //                             <div class="messager-setting-content">
        //                                 Đánh dầu là chưa đọc
        //                             </div>
        //                         </button>
        //                         <button class="messager-setting-message">
        //                             <i class="fa-solid fa-message"></i>
        //                             <div class="messager-setting-content">
        //                                 Mở cuộc trò chuyện
        //                             </div>
        //                         </button>
        //                         <button class="messager-setting-bell">
        //                             <i class="fa-solid fa-bell"></i>
        //                             <div class="messager-setting-content">
        //                                 Tắt thông báo
        //                             </div>
        //                         </button>
                    
        //                         <button class="messager-setting-user">
        //                             <i class="fa-solid fa-user"></i>
        //                             <div class="messager-setting-content">
        //                                 Xem trang cá nhân
        //                             </div>
        //                         </button>
        //                         <button class="messager-setting-call">
        //                             <i class="fa-solid fa-phone"></i>
        //                             <div class="messager-setting-content">
        //                                 Gọi thoại
        //                             </div>
        //                         </button>
        //                         <button class="messager-setting-video">
        //                             <i class="fa-solid fa-video"></i>
        //                             <div class="messager-setting-content">
        //                                 Chat video
        //                             </div>
        //                         </button>
                    
        //                         <button class="messager-setting-save">
        //                             <i class="fa-solid fa-rectangle-xmark"></i>
        //                             <div class="messager-setting-content">
        //                                 Lưu trữ đoạn chat
        //                             </div>
        //                         </button>
        //                         <button class="messager-setting-delete">
        //                             <i class="fa-solid fa-trash-can"></i>
        //                             <div class="messager-setting-content">
        //                                 Xoá đoạn chat
        //                             </div>
        //                         </button>`
        //                     if(messagerItem.classList.contains('messager-status-recevice')){
        //                         element.querySelector('.messager-setting-check .messager-setting-content').textContent = 'Đánh dấu là đã đọc'
        //                     }                     
        //                     messagerList.appendChild(element)
        //                     if(e.clientY < 390){
        //                         element.classList.add('messager-item-settint-top')
        //                         element.style.top = rect.bottom + 16 + 'px'
        //                     }
        //                     else{
        //                         element.classList.add('messager-item-settint-bottom')
        //                         element.style.bottom = `calc(100% + 16px - ${rect.top}px)`
        //                     }
        //                 }
        //             }
        //             else{
        //                 extendHidden.classList.add('messager-setting-checked')
        //                 let element = document.createElement('div')
        //                 element.classList.add('messager-item-setting')
        //                 element.innerHTML = `
        //                     <button class="messager-setting-check">
        //                         <i class="fa-solid fa-check"></i>
        //                         <div class="messager-setting-content">
        //                             Đánh dầu là chưa đọc
        //                         </div>
        //                     </button>
        //                     <button class="messager-setting-message">
        //                         <i class="fa-solid fa-message"></i>
        //                         <div class="messager-setting-content">
        //                             Mở cuộc trò chuyện
        //                         </div>
        //                     </button>
        //                     <button class="messager-setting-bell">
        //                         <i class="fa-solid fa-bell"></i>
        //                         <div class="messager-setting-content">
        //                             Tắt thông báo
        //                         </div>
        //                     </button>
                
        //                     <button class="messager-setting-user">
        //                         <i class="fa-solid fa-user"></i>
        //                         <div class="messager-setting-content">
        //                             Xem trang cá nhân
        //                         </div>
        //                     </button>
        //                     <button class="messager-setting-call">
        //                         <i class="fa-solid fa-phone"></i>
        //                         <div class="messager-setting-content">
        //                             Gọi thoại
        //                         </div>
        //                     </button>
        //                     <button class="messager-setting-video">
        //                         <i class="fa-solid fa-video"></i>
        //                         <div class="messager-setting-content">
        //                             Chat video
        //                         </div>
        //                     </button>
                
        //                     <button class="messager-setting-save">
        //                         <i class="fa-solid fa-rectangle-xmark"></i>
        //                         <div class="messager-setting-content">
        //                             Lưu trữ đoạn chat
        //                         </div>
        //                     </button>
        //                     <button class="messager-setting-delete">
        //                         <i class="fa-solid fa-trash-can"></i>
        //                         <div class="messager-setting-content">
        //                             Xoá đoạn chat
        //                         </div>
        //                     </button>`
        //                 if(messagerItem.classList.contains('messager-status-recevice')){
        //                     element.querySelector('.messager-setting-check .messager-setting-content').textContent = 'Đánh dấu là đã đọc'
        //                 }
        //                 messagerList.appendChild(element)
        //                 if(e.clientY < 390){
        //                     element.classList.add('messager-item-settint-top')
        //                     element.style.top = rect.bottom + 16 + 'px'
        //                 }
        //                 else{
        //                     element.classList.add('messager-item-settint-bottom')
        //                     element.style.bottom = `calc(100% + 16px - ${rect.top}px)`
        //                 }
        //             }
        //         }

        //         // xoá settign cho đối tượng nếu vượt quá khung messager
        //         messagerHeader.onscroll = function(){
        //             let messagerItemSetting = document.querySelector('.messager-item-setting')
        //             if(messagerItemSetting){
        //                 let rect = extendHidden.getBoundingClientRect()
        //                 // kiểm tra xem nó có vượt khung của messager không nếu vượt thì xoá nó đi
        //                 if(rect.top <= 10 || rect.bottom >= 750){
        //                     messagerItemSetting.remove()
        //                     extendHidden.classList.remove('messager-setting-checked')
        //                 }

        //                 if(messagerItemSetting.classList.contains('messager-item-settint-top')){
        //                     messagerItemSetting.style.top = rect.bottom + 16 + 'px'
        //                 }
        //                 else{
        //                     messagerItemSetting.style.bottom = `calc(100% + 16px - ${rect.top}px)`
        //                 }
        //             }
        //         }

        //         // chọn settting cho từng đối tượng messager
        //         let messagerItemSetting = document.querySelector('.messager-item-setting')
        //         if(messagerItemSetting){
        //             messagerItemSetting.onclick = function(e){
        //                 let settingSelect = e.target.closest('button')
        //                 if(settingSelect){
        //                     // đánh dấu là chưa đọc
        //                     if(settingSelect.className == 'messager-setting-check'){
        //                         let find = contentMesseger.find((item)=>{
        //                             return item.data == messagerItem.id
        //                         })
        //                         let chatList = document.querySelectorAll('.chat-item')
        //                         let chatUserList = document.querySelectorAll('.chat-user-item')

        //                         if(!messagerItem.classList.contains('messager-status-recevice')){
        //                             find.content[find.content.length - 1].status = 'nhan'

        //                             for(let item of chatList){
        //                                 if(item.id == messagerItem.id){
        //                                     item.classList.add('messager-status-recevice')
        //                                     break
        //                                 }
        //                             }
        //                             messagerItem.classList.add('messager-status-recevice')

        //                             for(let item of chatUserList){
        //                                 if(item.id == messagerItem.id){
        //                                     item.innerHTML += `<div class="chat-user-amount">1</div>`
        //                                 }
        //                             }
        //                         }
        //                         else{
        //                             find.content[find.content.length - 1].status = 'doc'

        //                             for(let item of chatList){
        //                                 if(item.id == messagerItem.id){
        //                                     item.classList.remove('messager-status-recevice')
        //                                     break
        //                                 }
        //                             }
        //                             messagerItem.classList.remove('messager-status-recevice')

        //                             for(let item of chatUserList){
        //                                 if(item.id == messagerItem.id){
        //                                     item.querySelector('.chat-user-amount').remove()
        //                                 }
        //                             }
        //                         }
        //                     }
        //                     // tắt thông báo tin nhắn
        //                     else if(settingSelect.className == 'messager-setting-bell'){
        //                         let settingBell = document.querySelector('.setting-disable-bell')
        //                         let modal = document.querySelector('.modal')
        //                         let modalLayout = document.querySelector('.modal-layout')
        //                         let settingClose = settingBell.querySelector('.btn-close')
        //                         let settingCancel = settingBell.querySelector('.btn-cancel')
        //                         let settingCofirm = settingBell.querySelector('.btn-confirm')
            
        //                         // hiển thị form xác nhận
        //                         settingBell.classList.toggle('setting-open-checked')
        //                         modal.classList.toggle('modal-checked')
        //                         // tắt form
        //                         modalLayout.onclick = settingClose.onclick = settingCancel.onclick = function(){
        //                             settingBell.classList.toggle('setting-open-checked')
        //                             modal.classList.toggle('modal-checked')
        //                         }
        //                         settingCofirm.onclick = function(){
        //                             settingBell.classList.toggle('setting-open-checked')
        //                             modal.classList.toggle('modal-checked')
        //                             let radioBell = document.getElementsByName('bell')
        //                             for(let item of radioBell){
        //                                 if(item.checked == true){
        //                                     alert(item.value)
        //                                 }
        //                             }
        //                             let messengerOn = document.querySelector('.messager')
        //                             messengerOn.classList.toggle('message-disable')
        //                             messengerClick.classList.toggle('profile-checked')
        //                         }
        //                     }
        //                     // mở cuộc trò chuyện
        //                     else if(settingSelect.className == 'messager-setting-message'){
        //                         alert('Mở cuộc trò chuyện')
        //                     }
        //                     // xoá tin nhắn
        //                     else if(settingSelect.className == 'messager-setting-delete'){
        //                         let settingDelete = document.querySelector('.setting-delete')
        //                         let modal = document.querySelector('.modal')
        //                         let modalLayout = document.querySelector('.modal-layout')
        //                         let settingClose = settingDelete.querySelector('.btn-close')
        //                         let settingCancel = settingDelete.querySelector('.btn-cancel')
        //                         let settingCofirm = settingDelete.querySelector('.btn-confirm')
        //                         // hiển thị form xác nhận
        //                         settingDelete.classList.toggle('setting-open-checked')
        //                         // appContainer.classList.toggle('app-container-hidden')
        //                         modal.classList.toggle('modal-checked')
        //                         // tắt form
        //                         modalLayout.onclick = settingClose.onclick = settingCancel.onclick = function(){
        //                             settingDelete.classList.toggle('setting-open-checked')
        //                             // appContainer.classList.toggle('app-container-hidden')
        //                             modal.classList.toggle('modal-checked')
        //                         }
        //                         settingCofirm.onclick = function(){
        //                             settingDelete.classList.toggle('setting-open-checked')
        //                             // appContainer.classList.toggle('app-container-hidden')
        //                             modal.classList.toggle('modal-checked')
        //                             let contentMessegerNew = contentMesseger.filter(function(value){
        //                                 return value.data != messagerItem.id;
        //                             })
        //                             contentMesseger = contentMessegerNew
            
        //                             let chatListItem = document.querySelectorAll('.chat-item')
        //                             let chatItem = findChatMesseger(chatListItem, messagerItem)
        //                             if(chatItem){
        //                                 let chatUserList = document.querySelectorAll('.chat-user-item')
        //                                 let chatUser = document.querySelector('.chat-list-user')
        //                                 let chatList = document.querySelector('.chat-list')
                
        //                                 let myInfo = Users.find(function (user) {
        //                                     return user.data == chatUserList[chatUserList.length - 1].id
        //                                 })
        //                                 chatUser.removeChild(chatUserList[chatUserList.length - 1])
        //                                 createChat(myInfo, chatList)
        //                                 chatList.removeChild(chatItem)
        //                             }
        //                             loadMesseger()
        //                             let messengerOn = document.querySelector('.messager')
        //                             messengerOn.classList.toggle('message-disable')
        //                             messengerClick.classList.toggle('profile-checked')
        //                         }
        //                     }
        //                     // xem trang cá nhân
        //                     else if(settingSelect.className == 'messager-setting-user'){
        //                         alert('Xem trang cá nhân')
        //                     }
        //                     // thực hiện cuộc gọi
        //                     else if(settingSelect.className == 'messager-setting-call'){
        //                         window.open('./profile.html', '_blank', 'width=1284,height=729','location=0')
        //                     }
        //                     // thực hiện cuộc gọi video
        //                     else if(settingSelect.className == 'messager-setting-video'){
        //                         window.open('./profile.html', '_blank', 'width=1284,height=729','location=0')
        //                     }
        //                     // lưu trữ đoạn chat
        //                     else{
        //                         alert('Lưu trữ đoạn chat')
        //                     }
        //                     messagerItemSetting.remove()
        //                     extendHidden.classList.remove('messager-setting-checked')
        //                 }
        //             }
        //         }
                
        //     }
        // }
        
        
        // mở tìm tin nhắn ở messager
        let messagerInput = document.querySelector('.messager-input')
        messagerInput.onclick = function(){
            let messagerSearchWrap = document.querySelector('.messager-search-wrap')
            let messagerSearch = document.querySelector('.messager-search')
            let btnSearchBack = document.querySelector('.messager-search-back')
            let messagerSearchInput = document.querySelector('.messager-search-input')
            let messagerSearchList = document.querySelector('.messager-search-list')
            
            messagerSearchWrap.style.marginLeft = '8px'
            messagerInput.classList.add('messager-focus')
            messagerSearch.classList.add('messager-search-checked')
            btnSearchBack.classList.add('messager-search-checked')
            messagerSearchInput.focus()
            messagerSearchList.innerHTML = ''
        }

        // tìm kiếm tin nhắn ở messager
        let messagerSearchInput = document.querySelector('.messager-search-input')
        messagerSearchInput.onkeyup = function(){
            let messagerSearchList = document.querySelector('.messager-search-list')
            let contentSearch = removeVietnameseTones(messagerSearchInput.value).toLowerCase()
            messagerSearchList.innerHTML = ''
            let doneTasks = Users.filter(function (user) {
                userName = removeVietnameseTones(user.name).toLowerCase()

                if(userName.indexOf(contentSearch) != -1 && contentSearch.length!= 0){
                    return user
                }
            });
            doneTasks.forEach(item => {
                let messagerSearchItem = document.createElement('li')
                messagerSearchItem.classList.add('messager-search-item')
                messagerSearchItem.id = item.data
                messagerSearchItem.innerHTML = `
                    <img src="${item.avatar}" alt="" class="messager-search-image">
                    <div class="messager-search-name">${item.name}</div>`
                messagerSearchList.appendChild(messagerSearchItem)
            });
            doneTasks.forEach(item => {
                let messagerSearchItem = document.createElement('li')
                messagerSearchItem.classList.add('messager-search-item')
                messagerSearchItem.id = item.data
                messagerSearchItem.innerHTML = `
                    <img src="${item.avatar}" alt="" class="messager-search-image">
                    <div class="messager-search-name">${item.name}</div>`
                messagerSearchList.appendChild(messagerSearchItem)
            });
            doneTasks.forEach(item => {
                let messagerSearchItem = document.createElement('li')
                messagerSearchItem.classList.add('messager-search-item')
                messagerSearchItem.id = item.data
                messagerSearchItem.innerHTML = `
                    <img src="${item.avatar}" alt="" class="messager-search-image">
                    <div class="messager-search-name">${item.name}</div>`
                messagerSearchList.appendChild(messagerSearchItem)
            });
        }

        // đóng tìm tin nhắn ở messager
        let messagerSearchBack = document.querySelector('.messager-search-back')
        let messangerWrap = document.querySelector('.messanger-wrap')
        messagerSearchBack.onclick = messangerWrap.onclick = function(){
            let messagerSearchWrap = document.querySelector('.messager-search-wrap')
            let messagerSearch = document.querySelector('.messager-search')
            let btnSearchBack = document.querySelector('.messager-search-back')

            messagerSearchWrap.style.marginLeft = '20px'
            messagerInput.classList.remove('messager-focus')
            messagerSearchInput.value = ``
            messagerSearch.classList.remove('messager-search-checked')
            btnSearchBack.classList.remove('messager-search-checked')
        }

        // bỏ focus khỏi search-input
        let messagerSearch = document.querySelector('.messager-search')
        messagerSearch.onclick = function(){
            let messagerInput = document.querySelector('.messager-input')
            messagerInput.classList.remove('messager-focus')
        }

        // mở tin nhắn trong search messager
        let messagerSearchList = document.querySelector('.messager-search-list')
        messagerSearchList.onclick = function(e){
            let messagerSearchItem = e.target.closest('.messager-search-item')
            if(messagerSearchItem){
                openChat(messagerSearchItem)
                let messengerOn = document.querySelector('.messager')
                messengerOn.classList.toggle('message-disable')
                messengerClick.classList.toggle('profile-checked')
            }
        }

        //tìm kiếm trong tin nhắn mới, mở tin nhắn trong tìm kiếm tin nhắn mới
        window.addEventListener('keypress', function(e){
            // tìm kiếm trong tin nhắn mới
            let chatCreateInput = document.querySelector('.chat-search-input')
            if(chatCreateInput){
                chatCreateInput.onkeyup = function(ev){
                    let userList = document.querySelector('.chat-search-list')
                    userList.innerHTML = null

                    if(ev.key != 'Enter'){
                        let contentSearch = removeVietnameseTones(e.target.value).toLowerCase()
                    
                        // tìm kiếm tài khoản trên bộ dữ liệu
                        let doneTasks = Users.filter(function (user) {
                            userName = removeVietnameseTones(user.name).toLowerCase()
                    
                            if(userName.indexOf(contentSearch) != -1 && contentSearch.length!= 0){
                                return user
                            }
                        });
                    
                        // hiển thị dữ liệu lên màn hình tìm kiếm
                        for(let item of doneTasks){
                            let user = document.createElement('li')
                            user.classList.add('chat-search-item')
                            user.id = item.data
                            user.innerHTML = `
                                <img src="${item.avatar}" alt="" class="chat-search-image">
                                <div class="chat-search-name">${item.name}</div>`
                            userList.appendChild(user)
                        }
                    }
                    else{
                        chatCreateInput.value = ''
                    }

                    let chatSearchList = document.querySelector('.chat-search-list')
                    chatSearchList.onclick = function(es){
                        let chatSerachItem = es.target.closest('.chat-search-item')
                        let chatItemSearch = document.querySelector('.chat-item-search')
                        let chatList = document.querySelector('.chat-list')
                        if(chatSerachItem){
                            chatList.removeChild(chatItemSearch)
                            openChat(chatSerachItem)
                        }
                    }
                }
            }
        })
    },
    start: function(){
        this.handleEvents()
        this.render()
    }
}
messager.start()


// xử lý hộp chat tin nhắn
const chat = {
    handleEvents: function(){
        // ẩn, đóng và focus vào thẻ input của cuộc trò chuyện
        let chatMessager = document.querySelector('.chat-messeger')
        chatMessager.addEventListener('click', function(e){
            let chatItem = e.target.closest('.chat-item')
            let chatList = document.querySelector('.chat-list')
            let chatUser = document.querySelector('.chat-list-user')
            let chatUserList = document.querySelectorAll('.chat-user-item')

            // ẩn cuộc trò chuyện
            if(e.target.classList.contains('fa-minus'))
            {
                let myInfo = Users.find(function (user) {
                    return user.data == chatItem.id;
                })
                createChatWait(myInfo, chatUser)
                chatList.removeChild(chatItem)
            }

            // đóng cuộc trò chuyện
            if(e.target.classList.contains('fa-xmark')){
                if(!e.target.closest('.chat-item-search') && !chatUserList.length == 0){
                    let myInfo = Users.find(function (user) {
                        return user.data == chatUserList[chatUserList.length - 1].id
                    })
                    createChat(myInfo, chatList)
                }
                chatList.removeChild(chatItem)
            }

            // focus và bỏ focus vào input của cuộc trò chuyện
            if(chatItem){
                // focus
                if(!chatItem.classList.contains('chat-checked')){
                    let chatItemList = document.querySelectorAll('.chat-item')
                    for(let j=0 ; j<chatItemList.length; ++j){
                        chatItemList[j].classList.remove('chat-checked')
                    }
                    chatItem.classList.add('chat-checked')
                    
                    if(!chatItem.classList.contains('chat-item-search')){
                        chatItem.querySelector('.chat-input').focus()
                    }
                }
            }
        })

        //bỏ focus khỏi ô chat
        let header = document.querySelector('.header')
        let container = document.querySelector('.container')
        header.addEventListener('click', function(e){
            //bỏ focus khỏi thẻ input của hộp chat
            let chatItemList = document.querySelectorAll('.chat-item')
            if(chatItemList){
                for(let item of chatItemList){
                    if(item.classList.contains('chat-checked')){
                        item.classList.remove('chat-checked')
                    }
                }
            }
        })
        container.addEventListener('click', function(e){
            //bỏ focus khỏi thẻ input của hộp chat
            let chatFriendItem = e.target.closest('.message-friend-item')
            let chatItemList = document.querySelectorAll('.chat-item')
            if(!chatFriendItem){
                if(chatItemList){
                    for(let item of chatItemList){
                        if(item.classList.contains('chat-checked')){
                            item.classList.remove('chat-checked')
                        }
                    }
                }
            }
            else{
                if(chatFriendItem.className != 'message-friend-item'){
                    if(chatItemList){
                        for(let item of chatItemList){
                            if(item.classList.contains('chat-checked')){
                                item.classList.remove('chat-checked')
                            }
                        }
                    }
                }
            }
        })

        // nhập tin nhắn, ấn icon gửi tin nhắn
        window.onkeyup = function(e){
            // thay đổi kích thước ô khi nhập tin nhắn
            let chatItem = e.target.closest('.chat-item')
            if(chatItem && !chatItem.classList.contains('chat-item-search')){
                let chatInput = chatItem.querySelector('.chat-input')
                let chatDisable = chatItem.querySelector('.chat-footer-wrap')
                let iconDisable = chatItem.querySelector('.fa-heart.chat-footer-icon')
                let enterDisable = chatItem.querySelector('.fa-paper-plane.chat-footer-icon')
                console.log(chatInput)
                if(chatInput.value.length != 0){
                    enterDisable.classList.remove('chat-icon-disable')
                    iconDisable.classList.add('chat-icon-disable')
                    chatDisable.classList.add('chat-icon-disable')
                }
                else{
                    enterDisable.classList.add('chat-icon-disable')
                    iconDisable.classList.remove('chat-icon-disable')
                    chatDisable.classList.remove('chat-icon-disable')
                }
                
                // ấn icon gửi tin nhắn
                let enterMessage = chatItem.querySelector('.fa-paper-plane.chat-footer-icon')
                enterMessage.onclick = function(){
                    sendMessager(chatItem, chatInput)
                }
            }
        }

        // bấm enter nhập tin nhắn
        window.addEventListener('keypress', function(e){
            // bấm enter nhập tin nhắn
            let chatItem = e.target.closest('.chat-item')
            if(chatItem && e.key == 'Enter'){
                let chatInput = chatItem.querySelector('.chat-input')
                if(!chatItem.classList.contains('chat-item-search') && chatInput.value.length != 0){
                    sendMessager(chatItem, chatInput)
                }
            }
        })
    },
    start: function(){
        this.handleEvents()
    }
}
chat.start()


// xử lý mở tin nhắn ở danh sách đang hoạt động
const userOnline = {
    render: function(){
        // hiển thị các tài khoản đang hoạt động
        let friendOnline = document.querySelector('.message-friend-list')
        if(friendOnline){
            // thêm các tài khoản đang hoạt động
            Users.forEach(user => {
                if(user.online == 'Đang hoạt động'){
                    let friend = document.createElement('li')
                friend.classList.add('message-friend-item')
                friend.id = user.data
                friend.innerHTML = `
                    <div class="message-friend-wrap">
                        <div class="message-friend-image user-online">
                            <img src="${user.avatar}" alt="">
                        </div>
                        <span class="message-friend-name">${user.name}</span>
                    </div>`
                friendOnline.appendChild(friend)
                }
            })
        }
    },
    handleEvents: function(){
        // mở chat ở danh sách đang hoạt động
        let userOnlineMesseger = document.querySelector('.message-friend-list')
        userOnlineMesseger.addEventListener( 'click', function(e){
            let chatUserOnline = e.target.closest('.message-friend-item')
            openChat(chatUserOnline)
        })
    },
    start: function(){
        this.handleEvents()
        this.render()
    }
}
userOnline.start()


// xử lý mở tin nhắn ở danh sách chờ
const chatUser = {
    render: function(){
        let chatUser = document.querySelector('.chat-list-user')
        chatUser.innerHTML = `
            <li class="chat-user-create">
                <i class="fa-solid fa-pen-to-square chat-user-item-icon"></i>
            </li>`
        chatMessegerWait.forEach(user => {
            createChatWait(user, chatUser)
        })
    },
    handleEvents: function(){
        // mở, đóng cuộc trò chuyện danh sách chờ ẩn bên phải và tạo tin nhắn mới
        let chatOpen = document.querySelector('.chat-open')
        chatOpen.addEventListener('click', function(e){
            let chatUserItem = e.target.closest('.chat-user-item')
            let chatList = document.querySelector('.chat-list')
            let chatItemList = document.querySelectorAll('.chat-item')
            let userList = document.querySelector('.chat-list-user')
            if(e.target.closest('.chat-user-infor') && !e.target.closest('.chat-remove')){
                let myInfo = Users.find(function (user) {
                    return user.data == chatUserItem.id
                })
                if((window.innerWidth < 1100 && chatItemList.length == 1) || (window.innerWidth < 1533 && chatItemList.length == 2) || (window.innerWidth >= 1533 && chatItemList.length == 3)){
                    chatList.removeChild(chatItemList[0])
                    createChat(myInfo, chatList)
                    // kiểm tra xem có ô chat tìm kiếm tin nhắn mới không
                    if(!chatItemList[0].classList.contains('chat-item-search')){
                        let myInfo1 = Users.find(function (user) {
                            return user.data == chatItemList[0].id;
                        });
                        createChatWait(myInfo1, userList)
                    }
                }
                else{
                    createChat(myInfo, chatList)
                }
                let itemMesseger = contentMesseger.find((item) =>{
                    return item.data == chatUserItem.id
                })
                if(itemMesseger){
                    for(let item of itemMesseger.content){
                        if(item.id == 'left' && item.status == 'nhan'){
                            item.status = 'doc'
                        }
                    }
                }
                chatItemList = document.querySelectorAll('.chat-item')
                let chatInput = chatItemList[chatItemList.length - 1].querySelector('.chat-input')
                for(let j=0; j<chatItemList.length ; ++j){
                    chatItemList[j].classList.remove('chat-checked')
                }
                chatItemList[chatItemList.length - 1].classList.add('chat-checked')
                chatInput.focus()
            }

            // xoá ô chat bên phải khỏi danh sách chờ bên phải
            if(e.target.closest('.chat-remove')){
                let myInfo = Users.find((item)=>{
                    return item.data == chatUserItem.id
                })

                if(chatMessegerWait.length >= 7){
                    let findChatHidden = userList.querySelector('.chat-user-item-hidden')
                    if(chatMessegerWait.length == 7){
                        userList.removeChild(chatUserItem)
                        userList.removeChild(findChatHidden)
                        chatUserList = document.querySelectorAll('.chat-user-item')
                        console.log(chatUserList)
                        for(let i=0; i < chatMessegerWait.length - 5; ++i){
                            let chatUserItem = document.createElement('li')
                            chatUserItem.classList.add('chat-user-item')
                            chatUserItem.id = chatMessegerWait[i].data
                            if(chatMessegerWait[i].online === 'Đang hoạt động'){
                                chatUserItem.classList.add('user-online')
                            }
                            let itemMesseger = contentMesseger.find((item)=>{
                                return item.data == chatMessegerWait[i].data
                            })
                            chatUserItem.innerHTML =  `
                                <div class="chat-user-infor">
                                    <img src="${chatMessegerWait[i].avatar}" alt="" class="chat-user-item-image">
                                    <i class="fa-solid fa-xmark chat-remove"></i>
                                </div>`
                            if(itemMesseger){
                                if(itemMesseger.content[itemMesseger.content.length - 1].id == 'left'){
                                    chatUserItem.innerHTML += `
                                        <div class="chat-user-lastmsg">
                                            <div class="chat-user-name">${chatMessegerWait[i].name}</div>
                                            <span>${itemMesseger.content[itemMesseger.content.length - 1].msg}</span>
                                        </div>`
                                }
                                else{
                                    chatUserItem.innerHTML += `
                                        <div class="chat-user-lastmsg">
                                            <div class="chat-user-name">${chatMessegerWait[i].name}</div>
                                            <span>Bạn: ${itemMesseger.content[itemMesseger.content.length - 1].msg}</span>
                                        </div>`
                                }
                                let amount = 0
                                if(itemMesseger){
                                    for(let item of itemMesseger.content){
                                        if(item.id == 'left' && item.status == 'nhan'){
                                            amount += 1
                                        }
                                    }
                                }
                                if(amount != 0){
                                    chatUserItem.innerHTML += `<div class="chat-user-amount">${amount}</div>`
                                }
                            }
                            else{
                                chatUserItem.innerHTML += `
                                        <div class="chat-user-lastmsg">
                                            <div class="chat-user-name">${chatMessegerWait[i].name}</div>
                                        </div>`
                            }
                            userList.insertBefore(chatUserItem, chatUserList[0])
                        }
                        chatMessegerWait = chatMessegerWait.filter((item)=>{
                            return item.data != chatUserItem.id
                        })
                        console.log(2, chatMessegerWait)
                    }
                    else{
                        chatMessegerWait = chatMessegerWait.filter((item)=>{
                            return item.data != chatUserItem.id
                        })
                        console.log(2, chatMessegerWait)
                        userList.removeChild(chatUserItem)
                        let chatUserList = document.querySelectorAll('.chat-user-item')
                        let chatUserCreate = document.createElement('li')
                        chatUserCreate.classList.add('chat-user-item')
                        chatUserCreate.id = chatMessegerWait[chatMessegerWait.length - 5].data
                        if(chatMessegerWait[chatMessegerWait.length - 5].online === 'Đang hoạt động'){
                            chatUserCreate.classList.add('user-online')
                        }
                        chatUserCreate.innerHTML =  `
                            <div class="chat-user-infor">
                                <img src="${chatMessegerWait[chatMessegerWait.length - 5].avatar}" alt="" class="chat-user-item-image">
                                <i class="fa-solid fa-xmark chat-remove"></i>
                            </div>`
                        let itemMesseger = contentMesseger.find((item)=>{
                            return item.data == chatMessegerWait[chatMessegerWait.length - 5].data
                        })
                        if(itemMesseger){
                            if(itemMesseger.content[itemMesseger.content.length - 1].id == 'left'){
                                chatUserCreate.innerHTML += `
                                    <div class="chat-user-lastmsg">
                                        <div class="chat-user-name">${chatMessegerWait[chatMessegerWait.length - 2].name}</div>
                                        <span>${itemMesseger.content[itemMesseger.content.length - 1].msg}</span>
                                    </div>`
                            }
                            else{
                                chatUserCreate.innerHTML += `
                                    <div class="chat-user-lastmsg">
                                        <div class="chat-user-name">${chatMessegerWait[chatMessegerWait.length - 2].name}</div>
                                        <span>Bạn: ${itemMesseger.content[itemMesseger.content.length - 1].msg}</span>
                                    </div>`
                            }
                            let amount = 0
                            if(itemMesseger){
                                for(let item of itemMesseger.content){
                                    if(item.id == 'left' && item.status == 'nhan'){
                                        amount += 1
                                    }
                                }
                            }
                            if(amount != 0){
                                chatUserCreate.innerHTML += `<div class="chat-user-amount">${amount}</div>`
                            }
                        }
                        else{
                            chatUserCreate.innerHTML += `
                                    <div class="chat-user-lastmsg">
                                        <div class="chat-user-name">${chatMessegerWait[chatMessegerWait.length - 2].name}</div>
                                    </div>`
                        }
                        userList.insertBefore(chatUserCreate, chatUserList[0])

                        let chatUserHidden = document.createElement('li')
                        chatUserHidden.classList.add('chat-user-item-hidden')
                        chatUserHidden.innerHTML = `
                            <div class="chat-user-infor">
                                <img src="${chatMessegerWait[chatMessegerWait.length - 6].avatar}" alt="" class="chat-user-item-image">
                                <i class="fa-solid fa-xmark chat-remove"></i>
                            </div>
                            <div class="chat-user-amount-hidden">+<span>${chatMessegerWait.length - 5}</span></div>
                            <div class="chat-user-hidden">
                                <ul class="chat-user-list">
                                </ul>
                            </div>`
                        let chatUserHiddenList = chatUserHidden.querySelector('.chat-user-list')
                        for(let i = chatMessegerWait.length - 6; i >= 0; --i){
                            chatUserHiddenList.innerHTML +=`<li class="chat-user-hidden-item" id="${chatMessegerWait[i].data}">
                                <span>${chatMessegerWait[i].name}</span>
                                <button class="chat-user-hidden-close">
                                    <i class="fa-solid fa-xmark"></i>
                                </button>
                            </li>`
                        }
                        userList.replaceChild(chatUserHidden, findChatHidden)
                    }
                }
                else{
                    userList.removeChild(chatUserItem)
                    chatMessegerWait = chatMessegerWait.filter((item)=>{
                        return item.data != chatUserItem.id
                    })
                    console.log(2, chatMessegerWait)
                }
            }

            // mở ô chat tìm kiếm tin nhắn mới lên màn hình
            if(e.target.closest('.chat-user-create')){
                createNewChat()
            }
        })

        // đóng tất cả ô chat đang mở hoặc xoá tất cả chat
        // mở chat trong thanh ẩn bên phải, cố định chat setting
        chatOpen.addEventListener('mouseover', function(){
            // load dữ liệu cho setting của chat
            let chatListSettingWrap = document.querySelector('.chat-user-list-setting-wrap')
            let chatItemList = document.querySelectorAll('.chat-item')
            let chatUserList = document.querySelectorAll('.chat-user-item')
            let chatUser = document.querySelector('.chat-list-user')
            if(chatItemList.length != 0 || chatUserList.length != 0){
                let chatUserSettingWrap = document.createElement('div')
                chatUserSettingWrap.classList.add('chat-user-list-setting-wrap')
                chatUserSettingWrap.innerHTML = `
                    <div class="chat-user-list-setting">
                        <i class="fa-solid fa-ellipsis"></i>
                    </div>
                    <div class="chat-user-setting"></div>`

                let chatUserSetting = chatUserSettingWrap.querySelector('.chat-user-setting')
                if(chatUserList.length != 0){
                    chatUserSetting.innerHTML = `
                        <button class="btn-setting-close-chat-item">
                            <i class="fa-regular fa-circle-xmark"></i>
                            <span>Đóng tất cả đoạn chat</span>
                        </button>`
                }
                if(chatItemList.length != 0){
                    chatUserSetting.innerHTML += `
                        <button class="btn-setting-close-chat-user">
                            <div class="btn-setting-close-minus">
                                <i class="fa-solid fa-minus"></i>
                            </div>
                            <span>Thu nhỏ đoạn chat đang mở</span>
                        </button>`
                }
                
                if(chatListSettingWrap){
                    if(chatListSettingWrap.innerHTML != chatUserSettingWrap.innerHTML){
                        chatOpen.removeChild(chatListSettingWrap)
                        chatOpen.insertBefore(chatUserSettingWrap, chatUser)
                    }
                }
                else{
                    chatOpen.insertBefore(chatUserSettingWrap, chatUser)
                }
            }
            else{
                if(chatListSettingWrap){
                    chatOpen.removeChild(chatListSettingWrap)
                }
            }
            
            // cố định chat setting của chat ẩn
            chatListSettingWrap = document.querySelector('.chat-user-list-setting-wrap')
            if(chatListSettingWrap){
                let chatListSetting = document.querySelector('.chat-user-list-setting')
                chatListSetting.onclick = function(){
                    chatListSettingWrap.classList.toggle('chat-user-setting-checked')
                }
            }

            // mở chat trong thanh ẩn
            let chatUserHidden = document.querySelector('.chat-user-hidden')
            if(chatUserHidden){
                chatUserHidden.onclick = function(e){
                    let chatUserHiddenItem = e.target.closest('.chat-user-hidden-item')
                    let chatUserHidden = document.querySelector('.chat-user-list')
                    let userList = document.querySelector('.chat-list-user')
                    if(e.target.closest('.chat-user-hidden-close')){
                        console.log(chatUserHiddenItem)
                        if(chatMessegerWait.length == 7){
                            let chatUserItemHidden = document.querySelector('.chat-user-item-hidden')
                            document.querySelector('.chat-list-user').removeChild(chatUserItemHidden)
                            chatMessegerWait = chatMessegerWait.filter((item)=>{
                                return item.data != chatUserHiddenItem.id
                            })
                            console.log(2, chatMessegerWait)
                            
                            let chatUserList = document.querySelectorAll('.chat-user-item')
                            let chatUserItem = document.createElement('li')
                            chatUserItem.classList.add('chat-user-item')
                            chatUserItem.id = chatMessegerWait[chatMessegerWait.length - 6].data
                            if(chatMessegerWait[chatMessegerWait.length - 6].online === 'Đang hoạt động'){
                                chatUserItem.classList.add('user-online')
                            }
                            chatUserItem.innerHTML =  `
                                <div class="chat-user-infor">
                                    <img src="${chatMessegerWait[chatMessegerWait.length - 6].avatar}" alt="" class="chat-user-item-image">
                                    <i class="fa-solid fa-xmark chat-remove"></i>
                                </div>`
                            let itemMesseger = contentMesseger.find((item)=>{
                                return item.data == chatMessegerWait[chatMessegerWait.length - 6].data
                            })
                            if(itemMesseger){
                                if(itemMesseger.content[itemMesseger.content.length - 1].id == 'left'){
                                    chatUserItem.innerHTML += `
                                        <div class="chat-user-lastmsg">
                                            <div class="chat-user-name">${chatMessegerWait[chatMessegerWait.length - 6].name}</div>
                                            <span>${itemMesseger.content[itemMesseger.content.length - 1].msg}</span>
                                        </div>`
                                }
                                else{
                                    chatUserItem.innerHTML += `
                                        <div class="chat-user-lastmsg">
                                            <div class="chat-user-name">${chatMessegerWait[chatMessegerWait.length - 6].name}</div>
                                            <span>Bạn: ${itemMesseger.content[itemMesseger.content.length - 1].msg}</span>
                                        </div>`
                                }
                                let amount = 0
                                if(itemMesseger){
                                    for(let item of itemMesseger.content){
                                        if(item.id == 'left' && item.status == 'nhan'){
                                            amount += 1
                                        }
                                    }
                                }
                                if(amount != 0){
                                    chatUserItem.innerHTML += `<div class="chat-user-amount">${amount}</div>`
                                }
                            }
                            else{
                                chatUserItem.innerHTML += `
                                        <div class="chat-user-lastmsg">
                                            <div class="chat-user-name">${chatMessegerWait[chatMessegerWait.length - 2].name}</div>
                                        </div>`
                            }
                            userList.insertBefore(chatUserItem, chatUserList[0])
                        }
                        else{
                            if(chatUserHiddenItem.id == chatMessegerWait[chatMessegerWait.length - 6].data){
                                let chatUserItemHidden = document.querySelector('.chat-user-item-hidden')
                                let chatUserInfor = chatUserItemHidden.querySelector('.chat-user-infor')
                                chatUserInfor.innerHTML = `
                                    <img src="${chatMessegerWait[chatMessegerWait.length - 7].avatar}" alt="" class="chat-user-item-image">
                                    <i class="fa-solid fa-xmark chat-remove"></i>`
                            }
                            let chatUserAmountHidden = document.querySelector('.chat-user-amount-hidden')
                            chatUserHidden.removeChild(chatUserHiddenItem)
                            chatMessegerWait = chatMessegerWait.filter((item)=>{
                                return item.data != chatUserHiddenItem.id
                            })
                            chatUserAmountHidden.innerHTML = `+<span>${chatMessegerWait.length - 5}</span>`
                            console.log(2, chatMessegerWait)
                        }
                    }
                    else{
                        openChat(chatUserHiddenItem)
                    }
                }
            }

            // đóng tất cả ô chat đang mở hoặc xoá tất cả chat
            let chatUserSetting = document.querySelector('.chat-user-setting')
            if(chatUserSetting){
                let settingCloseChatItem = chatUserSetting.querySelector('.btn-setting-close-chat-item')
                if(settingCloseChatItem){
                    settingCloseChatItem.onclick = function(){
                        let chatList = document.querySelector('.chat-list')
                        let chatUser = document.querySelector('.chat-list-user')
                        let findChatHidden = chatUser.querySelector('.chat-user-item-hidden')

                        for(let item of chatItemList){
                            chatList.remove(item)
                        }
                        for(let item of chatUserList){
                            chatUser.removeChild(item)
                        }
                        if(findChatHidden){
                            chatUser.removeChild(findChatHidden)
                        }
                        chatListSettingWrap.classList.toggle('chat-user-setting-checked')
                        chatMessegerWait = []
                        console.log(3, chatMessegerWait)
                    }
                }

                let settingCloseChatUser = chatUserSetting.querySelector('.btn-setting-close-chat-user')
                if(settingCloseChatUser){
                    settingCloseChatUser.onclick = function(){
                        let chatList = document.querySelector('.chat-list')
                        let chatUser = document.querySelector('.chat-list-user')
                        let chatItemList = document.querySelectorAll('.chat-item')
                        for(let element of chatItemList){
                            let myInfo = Users.find((item)=>{
                                return item.data == element.id
                            })
                            chatList.removeChild(element)
                            if(!element.classList.contains('chat-item-search')){
                                createChatWait(myInfo, chatUser)
                            }
                        }
                        chatListSettingWrap.classList.toggle('chat-user-setting-checked')
                    }
                }
            }

        })

        // bỏ cố định chat setting của chat ẩn
        let appContainer = document.querySelector('.app-container')
        appContainer.addEventListener('click', function(){
            let chatUserSettingChecked = document.querySelector('.chat-user-setting-checked')
            if(chatUserSettingChecked){
                let chatListSettingWrap = document.querySelector('.chat-user-list-setting-wrap')
                chatListSettingWrap.classList.toggle('chat-user-setting-checked')
            }
        })
    },
    start: function(){
        this.handleEvents()
        this.render()
    }
}
chatUser.start()


// thay đổi số lượng chat trên màn khi screen thay đổi kích thước
window.onresize = function(){
    let chatUserList = document.querySelectorAll('.chat-user-item')
    let chatUser = document.querySelector('.chat-list-user')
    let chatItem = document.querySelectorAll('.chat-item')
    if(window.innerWidth < 1100){
        if(chatItem.length == 2){
            let chatList = document.querySelector('.chat-list')
            chatList.removeChild(chatItem[0])
            if(!chatItem[0].classList.contains('chat-item-search')){
                let myInfo = Users.find(function (user) {
                    return user.data == chatItem[0].id;
                });
                createChatWait(myInfo, chatUser)
            }
        }
    }
    else if(window.innerWidth < 1533){
        if(chatItem.length == 3){
            let chatList = document.querySelector('.chat-list')
            chatList.removeChild(chatItem[0])
            // kiểm tra xem có phải là tìm kiếm tin nhắn mới không
            if(!chatItem[0].classList.contains('chat-item-search')){
                let myInfo = Users.find(function (user) {
                    return user.data == chatItem[0].id;
                });
                createChatWait(myInfo, chatUser)
            }
            
        }
    }
}
