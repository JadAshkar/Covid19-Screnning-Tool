myStorage = window.localStorage;
myStorage.clear()
var fr= document.getElementById('fr')
var ar = document.getElementById('ar')

fr.addEventListener('click',function(event){
    location.href = 'indexFr.html'
})

ar.addEventListener('click',function(event){
    location.href = 'index.html'
})

function takeTest(){
    location.href = 'questions.html';
}