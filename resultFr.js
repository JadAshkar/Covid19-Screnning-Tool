myStorage = window.localStorage;

var traveling =myStorage.getItem('traveling')
var contactConfrimed =myStorage.getItem('contactConfrimed')
var contactSuspected =myStorage.getItem('contactSuspected')
var fever =myStorage.getItem('fever')
var cough =myStorage.getItem('cough')
var breath =myStorage.getItem('breath')
var throat =myStorage.getItem('throat')
var muscle =myStorage.getItem('muscle')
var diarrhea =myStorage.getItem('diarrhea')
var headache =myStorage.getItem('headache')
var tiered =myStorage.getItem('tiered')
var symptomsSuffering =myStorage.getItem('symptomsSuffering')
var age =myStorage.getItem('age')
var hypertension =myStorage.getItem('hypertension')
var diabetes =myStorage.getItem('diabetes')
var heartDisease =myStorage.getItem('heartDisease')
var kidneyDisease =myStorage.getItem('kidneyDisease')
var cancer =myStorage.getItem('cancer')
var chronicLung =myStorage.getItem('chronicLung')
var immunosuppression =myStorage.getItem('immunosuppression')
var steroids =myStorage.getItem('steroids')
var immunosuppressants =myStorage.getItem('immunosuppressants')
var obesity =myStorage.getItem('obesity')
var pregnant =myStorage.getItem('pregnant')
var medicalField =myStorage.getItem('medicalField')
var smoke =myStorage.getItem('smoke')
var precautions = myStorage.getItem('precautions')

var result = document.getElementById('resultCase')
var repeat = document.getElementById('repeat')


var case1="• Appelez le Ministère de la Santé Publique au 1214 ou 01594459\
<br>• Quarantaine à domicile pendant au moins 14 jours. Ceci comprend:\
<br><br>- Ne pas aller au travail, à l'école, dans d'autres lieux publics a des événements sociaux\
<br>- Rester dans une pièce bien ventilée avec une fenêtre qui peut s'ouvrir et séparée des autres chambres de la maison\
<br>- Demandez à des amis ou à des membres de votre famille de vous fournir de la nourriture ou des médicaments et de les placer à la porte de votre maison ou de votre chambre\
<br>- Se laver les mains soigneusement et fréquemment à l'eau et au savon pendant au moins 20 secondes\
<br>- Ne pas recevoir de visiteurs\
<br>- Il est recommandé d'avoir sa propre salle de bain ou toilettes. Si cela n'est pas disponible, la salle de bain doit être nettoyée à fond après chaque utilisation.\
<br>- Ne partagez jamais de tasses, d'ustensiles, de serviettes ou de lit avec quelqu'un à la maison\
<br>- Mettez les ordures dans un sac en plastique et mettez-les dans un autre sac avant de les jeter"


var case2="Vous devez aller à l’hôpital gouvernemental pour être examiné et testé pour le Coronavirus\
<br>Ou\
<br>Appelez le Ministère de la Santé Publique au 1214 ou 01594459"


var case3="Veuillez contacter votre médecin, adopter des précautions d'hygiène personnelle et éviter de sortir!"


var case4 = "Veuillez-vous engager à prendre des distances sociales.\
<br>Ne pas quitter la maison sauf en cas d'absolue nécessité (en plus des mesures d'hygiène personnelle ).\
<br>Veuillez répéter ce questionnaire au cas où les symptômes apparaissent."

var case5 = "En tant que vous faites partie du personnel de santé, si vous ne preniez pas toutes les précautions lorsque vous êtes en contact avec des patients :\
<br>● Informez votre institution de prendre les mesures appropriées\
<br>● Quarantaine à domicile pendant au moins 14 jours\
<br>o Ne pas aller au travail, à l'école, dans d'autres lieux publics a des événements sociaux\
<br>o Rester dans une pièce bien ventilée avec une fenêtre qui peut s'ouvrir et séparée des autres chambres de la maison\
<br>o Demandez à des amis ou à des membres de votre famille de vous fournir de la nourriture ou des médicaments et de les placer à la porte de votre maison ou de votre chambre\
<br>o Se laver les mains soigneusement et fréquemment à l'eau et au savon pendant au moins 20 secondes\
<br>o Ne pas recevoir de visiteurs\
<br>o Il est recommandé d'avoir sa propre salle de bain ou toilettes. Si cela n'est pas disponible, la salle de bain doit être nettoyée à fond après chaque utilisation.\
<br>o Ne partagez jamais de tasses, d'ustensiles, de serviettes ou de lit avec quelqu'un à la maison\
<br>o Mettez les ordures dans un sac en plastique et mettez-les dans un autre sac avant de les jeter"


var case6="En tant que vous faites partie du personnel de santé, si vous respectez prudemment les mesures de prévention des infections lorsque vous êtes en contact avec des patients soupçonné ou ayant le coronavirus, reprenez votre programme de vie quotidien. "

if(traveling=="Yes"||contactConfrimed=="Yes"||contactSuspected=="Yes"){
    if(fever=="No"&&cough=="No"&&breath=="No"&&fever=="No"&&throat=="No"&&muscle=="No"&&diarrhea=="No"&&headache=="No"&&tiered=="No"){
        if(medicalField=="Yes"){
            if(age=="Yes"||hypertension=="Yes"||diabetes=="Yes"||heartDisease=="Yes"||kidneyDisease=="Yes"||cancer=="Yes"||chronicLung=="Yes"||immunosuppression=="Yes"||steroids=="Yes"||immunosuppressants=="Yes"||obesity=="Yes"||pregnant=="Yes"||smoke=="Yes"){
                result.innerHTML = case3
            }
            else{
                if(precautions=="Yes"){
                    result.innerHTML = case6
                }else{
                    result.innerHTML = case5
                }
            }
        }
        else if(age=="Yes"||hypertension=="Yes"||diabetes=="Yes"||heartDisease=="Yes"||kidneyDisease=="Yes"||cancer=="Yes"||chronicLung=="Yes"||immunosuppression=="Yes"||steroids=="Yes"||immunosuppressants=="Yes"||obesity=="Yes"||pregnant=="Yes"||smoke=="Yes"){
            result.innerHTML = case3
        }
        else{
            result.innerHTML = case1
        }

    }
    else if(fever=="Yes"||cough=="Yes"||breath=="Yes"||throat=="Yes"){
        result.innerHTML = case2
    }
    else if(fever=="No"&&cough=="No"&&breath=="No"&&throat=="No"){
        var count = 0
        if(muscle=="Yes"){
            count++
        }
        if(diarrhea=="Yes"){
            count++
        }
        if(headache=="Yes"){
            count++
        }
        if(tiered=="Yes"){
            count++
        }
        
        if(count >=2){
            if(symptomsSuffering=="Yes"){
                result.innerHTML = case2
            }
            else{
                result.innerHTML = case3
            }
            
        }
        else{
            result.innerHTML = case3
        }
    }
}
else{
    if(fever=="Yes"||cough=="Yes"||breath=="Yes"||throat=="Yes"){
        if(muscle=="Yes"||diarrhea=="Yes"||headache=="Yes"||tiered=="Yes"){
            if(age=="Yes"||hypertension=="Yes"||diabetes=="Yes"||heartDisease=="Yes"||kidneyDisease=="Yes"||cancer=="Yes"||chronicLung=="Yes"||immunosuppression=="Yes"||steroids=="Yes"||immunosuppressants=="Yes"||obesity=="Yes"||pregnant=="Yes"||medicalField=="Yes"||smoke=="Yes"){
                result.innerHTML = case2
            }
            else{
                result.innerHTML = case3
            }
        }
        else{
            result.innerHTML = case3
        }    
    }
    else{
        var count = 0
        if(muscle=="Yes"){
            count++
        }
        if(diarrhea=="Yes"){
            count++
        }
        if(headache=="Yes"){
            count++
        }
        if(tiered=="Yes"){
            count++
        }
        if(count >=2){
            if(symptomsSuffering=="Yes"){
                result.innerHTML = case3
            }
            else{
                if(age=="Yes"||hypertension=="Yes"||diabetes=="Yes"||heartDisease=="Yes"||kidneyDisease=="Yes"||cancer=="Yes"||chronicLung=="Yes"||immunosuppression=="Yes"||steroids=="Yes"||immunosuppressants=="Yes"||obesity=="Yes"||pregnant=="Yes"||medicalField=="Yes"||smoke=="Yes"){
                    result.innerHTML = case3
                }
                else{
                    result.innerHTML = case4
                }
            }
        }
        else{
            result.innerHTML = case4
        }
    }
}

repeat.addEventListener('click',function(event){
    location.href = "indexFr.html"
})
