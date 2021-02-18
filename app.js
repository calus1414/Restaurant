var userComments = [{
        name: "Thomas",
        message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore nulla omnissit ab voluptatem, et reiciendis recusandae"
    },
    {
        name: 'Gourmet78',
        message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto est temporedignissimos placeat esse, '
    },
    {
        name: 'Goupix95',
        message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto est temporedignissimos',
    }
]


var comments = document.querySelector('#comments')

function makeTab(tab) {
    let newDiv = document.createElement('div')
    newDiv.classList.add('comment')
    comments.appendChild(newDiv)
    let newH4 = document.createElement('h4')
    let newP = document.createElement('p')
    newDiv.appendChild(newH4)
    newDiv.appendChild(newP)

    newH4.innerHTML = tab.name;
    newP.innerHTML = tab.message


}

userComments.forEach(element => {
    makeTab(element)
})

var userName = document.querySelector('#user-name')
var userMessage = document.querySelector('#user-message')
var btn = document.querySelector('#btn')

var errorName = document.querySelector('#error-name')
var errorMessage = document.querySelector('#error-message')
var nameCheck;
var messageCheck;

function inputCheck() {
   
    if (userName.value.length < 2) {
        errorName.style.display = 'block';
        console.log('tas mere')
        nameCheck = false;
    } else {
        errorName.style.display = 'none';
        nameCheck = true;
    }
    if (userMessage.value.length <= 2) {
        errorMessage.style.display = 'block';
        messageCheck = false;
    } else {
        errorMessage.style.display = 'none';
        messageCheck = true;
    }
}

btn.addEventListener('click' , function(){
    
inputCheck()
if(nameCheck=== true && messageCheck === true){

 let userComment = { name: userName.value,message:userMessage.value,}
 userName.value='';
userMessage.value='';
userComments.push(userComment)
makeTab(userComment)
}

})