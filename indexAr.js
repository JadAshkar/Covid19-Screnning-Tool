myStorage = window.localStorage;
myStorage.clear()
var fr= document.getElementById('fr')
var en = document.getElementById('en')

fr.addEventListener('click',function(event){
    location.href = 'indexFr.html'
})

en.addEventListener('click',function(event){
    location.href = 'indexEn.html'
})

function takeTest(){
    location.href = 'questionsAr.html';
}