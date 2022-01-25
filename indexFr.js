myStorage = window.localStorage;
myStorage.clear()
var en= document.getElementById('en')
var ar = document.getElementById('ar')

en.addEventListener('click',function(event){
    location.href = 'indexEn.html'
})

ar.addEventListener('click',function(event){
    location.href = 'index.html'
})

function takeTest(){
    location.href = 'questionsFr.html';
}