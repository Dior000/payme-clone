const helpcontainer = document.getElementById("help-container")
const chatcontainer=document.getElementById('chat-container')
const xcircle=document.getElementById('bi-x-circle')
const chatname=document.getElementById('chat-name')
const chatnumber=document.getElementById('chat-number')
const chatmessage=document.getElementById('chat-message')
const chatdialog=document.getElementById('chat-dialog')



helpcontainer.addEventListener('click', ()=>{
 chatcontainer.style.display='block'
 console.log('clicked')
})
xcircle.addEventListener('click', ()=>{
    chatcontainer.style.display='none'
})

chatdialog.addEventListener('click', ()=>{
     if(chatname.value.length<2){
        alert('invalid name') 
    } else if(chatnumber.value.length<13){
        alert('invalid number')
    }else if(chatmessage.value.length<5){
        alert('Please enter your issue')
    }else{
        alert('Our operator will connect with you soon')
    }
    
    let dialog={
        
            name:chatname.value,
            telnumber:chatnumber.value,
            message:chatmessage.value
        
        
    } 
    console.log(dialog)
})
