var traveling = document.getElementsByName('traveling')
var contactConfrimed = document.getElementsByName("contactConfrimed")
var contactSuspected = document.getElementsByName("contactSuspected")
var fever = document.getElementsByName('fever')
var cough = document.getElementsByName('cough')
var breath = document.getElementsByName('breath')
var throat = document.getElementsByName('throat')
var muscle = document.getElementsByName('muscle')
var diarrhea = document.getElementsByName('diarrhea')
var headache = document.getElementsByName('headache')
var tiered = document.getElementsByName('tiered')
var symptomsSuffering = document.getElementsByName('symptomsSuffering')
var age = document.getElementsByName('age')
var hypertension = document.getElementsByName('hypertension')
var diabetes = document.getElementsByName('diabetes')
var heartDisease = document.getElementsByName('heartDisease')
var kidneyDisease = document.getElementsByName('kidneyDisease')
var cancer = document.getElementsByName('cancer')
var chronicLung = document.getElementsByName('chronicLung')
var immunosuppression = document.getElementsByName('immunosuppression')
var steroids = document.getElementsByName('steroids')
var immunosuppressants = document.getElementsByName('immunosuppressants')
var obesity = document.getElementsByName('obesity')
var pregnant = document.getElementsByName('pregnant')
var medicalField = document.getElementsByName('medicalField')
var smoke = document.getElementsByName('smoke')
var precautions = document.getElementsByName('precautions')
var zz = document.getElementById('zz')
var radiozz = document.getElementsByClassName('radiozz')
var spanzz = document.getElementsByClassName('spanzz')
myStorage = window.localStorage


function onMedicalField(){
    zz.style.display = "block"
    radiozz[0].style.display ="inline-block"
    radiozz[1].style.display ="inline-block"
    spanzz[0].style.display = "block"
    spanzz[1].style.display = "block"
}
function onNotMedicalField(){
    zz.style.display = "none"
    radiozz[0].style.display ="none"
    radiozz[1].style.display ="none"
    spanzz[0].style.display = "none"
    spanzz[1].style.display = "none"
}



$('#continue').click(function(){
    var currentSlide = $('.slide.active')
    var nextSlide = currentSlide.next();
    switch(currentSlide.index()){
        case 1:
            document.getElementById('msg').innerHTML = null;
            if(traveling[0].checked==false&&traveling[1].checked==false){
                var msg = 'You must select all fields!';
                document.getElementById('msg').innerHTML = msg;
                return false;
            }
            if(contactConfrimed[0].checked==false&&contactConfrimed[1].checked==false){
                var msg = 'You must select all fields!';
                document.getElementById('msg').innerHTML = msg;
                return false;
            }
            if(contactSuspected[0].checked==false&&contactSuspected[1].checked==false){
                var msg = 'You must select all fields!';
                document.getElementById('msg').innerHTML = msg;
                return false;
            }
        
            for (var i=0;i<traveling.length;i++){
                if(traveling[i].checked){    
                    myStorage.setItem('traveling',traveling[i].value)  
                    break;
                }
            }
            for (var i=0;i<contactConfrimed.length;i++){
                if(contactConfrimed[i].checked){    
                    myStorage.setItem('contactConfrimed',contactConfrimed[i].value)  
                    break;
                }
            }
            for (var i=0;i<contactSuspected.length;i++){
                if(contactSuspected[i].checked){    
                    myStorage.setItem('contactSuspected',contactSuspected[i].value)  
                    break;
                }
            }
            break;
        case 2:
            document.getElementById('msg').innerHTML = null;
            if(fever[0].checked==false&&fever[1].checked==false){
                var msg = 'You must select all fields!'
                document.getElementById('msg').innerHTML = msg;
                return false;
            }
            if(cough[0].checked==false&&cough[1].checked==false){
                var msg = 'You must select all fields!'
                document.getElementById('msg').innerHTML = msg;
                return false;
            }
            if(breath[0].checked==false&&breath[1].checked==false){
                var msg = 'You must select all fields!'
                document.getElementById('msg').innerHTML = msg;
                return false;
            }
            for (var i=0;i<fever.length;i++){
                if(fever[i].checked){    
                    myStorage.setItem('fever',fever[i].value)   
                    break;
                }
            }
        
            for (var i=0;i<cough.length;i++){
                if(cough[i].checked){    
                    myStorage.setItem('cough',cough[i].value)   
                    break;
                }
            }
        
            for (var i=0;i<breath.length;i++){
                if(breath[i].checked){    
                    myStorage.setItem('breath',breath[i].value)   
                    break;
                }
            }
            break;
        case 3:
            document.getElementById('msg').innerHTML = null;
            if(throat[0].checked==false&&throat[1].checked==false){
                var msg = 'You must select all fields!'
                document.getElementById('msg').innerHTML = msg;
                return false;
            }
        
            if(muscle[0].checked==false&&muscle[1].checked==false){
                var msg = 'You must select all fields!'
                document.getElementById('msg').innerHTML = msg;
                return false;
            }
        
            if(diarrhea[0].checked==false&&diarrhea[1].checked==false){
                var msg = 'You must select all fields!'
                document.getElementById('msg').innerHTML = msg;
                return false;
            }
            for (var i=0;i<throat.length;i++){
                if(throat[i].checked){    
                    myStorage.setItem('throat',throat[i].value)   
                    break
                }
            }
        
            for (var i=0;i<muscle.length;i++){
                if(muscle[i].checked){    
                    myStorage.setItem('muscle',muscle[i].value)   
                    break;
                }
            }
        
            for (var i=0;i<diarrhea.length;i++){
                if(diarrhea[i].checked){    
                    myStorage.setItem('diarrhea',diarrhea[i].value)   
                    break;
                }
            }
            break;
        case 4:
            document.getElementById('msg').innerHTML = null;
            if(headache[0].checked==false&&headache[1].checked==false){
                var msg = 'You must select all fields!'
                document.getElementById('msg').innerHTML = msg;
                return false;
            }
        
            if(tiered[0].checked==false&&tiered[1].checked==false){
                var msg = 'You must select all fields!'
                document.getElementById('msg').innerHTML = msg;
                return false;
            }
        
            if(symptomsSuffering[0].checked==false&&symptomsSuffering[1].checked==false){
                var msg = 'You must select all fields!'
                document.getElementById('msg').innerHTML = msg;
                return false;
            }
            for (var i=0;i<headache.length;i++){
                if(headache[i].checked){    
                    myStorage.setItem('headache',headache[i].value)   
                    break;
                }
            }
        
            for (var i=0;i<tiered.length;i++){
                if(tiered[i].checked){    
                    myStorage.setItem('tiered',tiered[i].value)   
                    break;
                }
            }
        
            for (var i=0;i<symptomsSuffering.length;i++){
                if(symptomsSuffering[i].checked){    
                    myStorage.setItem('symptomsSuffering',symptomsSuffering[i].value)   
                    break;
                }
            }
            break;
        case 5:
            document.getElementById('msg').innerHTML = null;
            if(age[0].checked==false&&age[1].checked==false){
                var msg = 'You must select all fields!'
                document.getElementById('msg').innerHTML = msg;
                return false;
            }
            if(hypertension[0].checked==false&&hypertension[1].checked==false){
                var msg = 'You must select all fields!'
                document.getElementById('msg').innerHTML = msg;
                return false;
            }
            if(diabetes[0].checked==false&&diabetes[1].checked==false){
                var msg = 'You must select all fields!'
                document.getElementById('msg').innerHTML = msg;
                return false;
            }
            for (var i=0;i<age.length;i++){
                if(age[i].checked){    
                    myStorage.setItem('age',age[i].value)   
                    break;
                }
            }
        
            for (var i=0;i<hypertension.length;i++){
                if(hypertension[i].checked){    
                    myStorage.setItem('hypertension',hypertension[i].value)   
                    break;
                }
            }
        
            for (var i=0;i<diabetes.length;i++){
                if(diabetes[i].checked){    
                    myStorage.setItem('diabetes',diabetes[i].value)   
                    break;
                }
            }
            break;
        case 6:
            document.getElementById('msg').innerHTML = null;
            if(heartDisease[0].checked==false&&heartDisease[1].checked==false){
                var msg = 'You must select all fields!'
                document.getElementById('msg').innerHTML = msg;
                return false;
            }
            if(kidneyDisease[0].checked==false&&kidneyDisease[1].checked==false){
                var msg = 'You must select all fields!'
                document.getElementById('msg').innerHTML = msg;
                return false;
            }
            if(cancer[0].checked==false&&cancer[1].checked==false){
                var msg = 'You must select all fields!'
                document.getElementById('msg').innerHTML = msg;
                return false;
            }
            for (var i=0;i<heartDisease.length;i++){
                if(heartDisease[i].checked){    
                    myStorage.setItem('heartDisease',heartDisease[i].value)   
                    break;
                }
            }
        
            for (var i=0;i<kidneyDisease.length;i++){
                if(kidneyDisease[i].checked){    
                    myStorage.setItem('kidneyDisease',kidneyDisease[i].value)   
                    break;
                }
            }
        
            for (var i=0;i<cancer.length;i++){
                if(cancer[i].checked){    
                    myStorage.setItem('cancer',cancer[i].value)   
                    break;
                }
            }
            break;
        case 7:
            document.getElementById('msg').innerHTML = null;
            if(chronicLung[0].checked==false&&chronicLung[1].checked==false){
                var msg = 'You must select all fields!'
                document.getElementById('msg').innerHTML = msg;
                return false;
            }
            if(immunosuppression[0].checked==false&&immunosuppression[1].checked==false){
                var msg = 'You must select all fields!'
                document.getElementById('msg').innerHTML = msg;
                return false;
            }
            if(steroids[0].checked==false&&steroids[1].checked==false){
                var msg = 'You must select all fields!'
                document.getElementById('msg').innerHTML = msg;
                return false;
            }
            for (var i=0;i<chronicLung.length;i++){
                if(chronicLung[i].checked){    
                    myStorage.setItem('chronicLung',chronicLung[i].value)   
                    break;
                }
            }
        
            for (var i=0;i<immunosuppression.length;i++){
                if(immunosuppression[i].checked){    
                    myStorage.setItem('immunosuppression',immunosuppression[i].value)   
                    break;
                }
            }
        
            for (var i=0;i<steroids.length;i++){
                if(steroids[i].checked){    
                    myStorage.setItem('steroids',steroids[i].value)   
                    break;
                }
            }
            break
        case 8:
            document.getElementById('msg').innerHTML = null;
            if(immunosuppressants[0].checked==false&&immunosuppressants[1].checked==false){
                var msg = 'You must select all fields!'
                document.getElementById('msg').innerHTML = msg;
                return false;
            }
            if(obesity[0].checked==false&&obesity[1].checked==false){
                var msg = 'You must select all fields!'
                document.getElementById('msg').innerHTML = msg;
                return false;
            }
            if(pregnant[0].checked==false&&pregnant[1].checked==false){
                var msg = 'You must select all fields!';
                document.getElementById('msg').innerHTML = msg;
                return false;
            }
            for (var i=0;i<immunosuppressants.length;i++){
                if(immunosuppressants[i].checked){    
                    myStorage.setItem('immunosuppressants',immunosuppressants[i].value)   
                    break;
                }
            }
        
            for (var i=0;i<obesity.length;i++){
                if(obesity[i].checked){    
                    myStorage.setItem('obesity',obesity[i].value)   
                    break;
                }
            }
        
            for (var i=0;i<pregnant.length;i++){
                if(pregnant[i].checked){    
                    myStorage.setItem('pregnant',pregnant[i].value)   
                    break;
                }
            }
            break;
        default:
            document.getElementById('msg').innerHTML = null;
            if(medicalField[0].checked==false&&medicalField[1].checked==false){
                var msg = 'You must select all fields!'
                document.getElementById('msg').innerHTML = msg;
                return false;
            }
            if(smoke[0].checked==false&&smoke[1].checked==false){
                var msg = 'You must select all fields!'
                document.getElementById('msg').innerHTML = msg;
                return false;
            }
            
            for (var i=0;i<medicalField.length;i++){
                if(medicalField[i].checked){    
                    myStorage.setItem('medicalField',medicalField[i].value)   
                    break;
                }
            }
        
            for (var i=0;i<smoke.length;i++){
                if(smoke[i].checked){    
                    myStorage.setItem('smoke',smoke[i].value)   
                    break;
                }
            }
            if(medicalField[0].checked==true){
                if(precautions[0].checked==false&&precautions[1].checked==false){
                    var msg = 'You must select all fields!'
                    document.getElementById('msg').innerHTML = msg;
                    return false;
                }
                for (var i=0;i<precautions.length;i++){
                    if(precautions[i].checked){    
                        myStorage.setItem('precautions',precautions[i].value)   
                        break;
                    }
                }
            }
            break;
    }
    currentSlide.fadeOut(300).removeClass('active')
    nextSlide.fadeIn(300).addClass('active')   
    if(currentSlide.index() == 9){
        location.href = 'result.html'
    }
})

$('#back').click(function(){
    var currentSlide = $('.slide.active')
    var prevSlide = currentSlide.prev()

    currentSlide.fadeOut(300).removeClass('active')
    prevSlide.fadeIn(300).addClass('active')

    if(currentSlide.index()==1){
        location.href = 'indexEn.html'
    }
})