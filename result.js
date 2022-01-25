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


var case1="• Report Ministry Of Public Health on 1214 or 01594459. \
<br>• Home quarantine for at least 14 days. This includes: \
<br><br>- Staying at home for 14 days, and not going to work, school, other public places or social events \
<br>- Staying in a well-ventilated room with a window that can open, and should be separate from the rest of the room in the house \
<br>- Ask friends or family members to secure food or medicines and place them at the door of your house or room \
<br>- Wash hands thoroughly and frequently with soap and water for at least 20 seconds \
<br>- Not receiving visitors \
<br>- It is recommended that you have your own bathroom or toilet. If this is not available, the bathroom should be cleaned thoroughly after each use\no Never share cups, utensils, towels, or bed with anyone at home \
<br>- Put the garbage in a plastic bag and put it in another bag before throwing it"

var case2="You need to visit a nearby hospital to do Coronavirus testing \
<br>OR \
<br>Call Ministry Of Public Health on 1214 or 01594459"

var case3="Please contact your physician, adopt precautions as personal hygiene and avoid going out! "

var case4 = "Please commit to social distancing (stay at home and do not leave  except for necessary or urgent causes) in addition to personal hygiene measures. \
<br>Please repeat this questionnaire in case symptoms appear. "

var case5 = "*If you were not taking full precautions when you are in contact with patients:\
<br>• Inform your institution to take the appropriate measures\
<br>• Home quarantine for at least 14 days. This includes:\
<br>o Staying at home for 14 days, and not going to work, school, other public places or social events\
<br>o Staying in a well-ventilated room with a window that can open, and should be separate from the rest of the room in the house\
<br>o Ask friends or family members to secure food or medicines and place them at the door of your house or room\
<br>o Wash hands thoroughly and frequently with soap and water for at least 20 seconds\
<br>o Not receiving visitors\
<br>o It is recommended that you have your own bathroom or toilet. If this is not available, the bathroom should be cleaned thoroughly after each use\
<br>o Never share cups, utensils, towels, or bed with anyone at home\
<br>o Put the garbage in a plastic bag and put it in another bag before throwing it"

var case6 ="As a health care worker, if careful adherence to infection prevention measures is taken while in contact with patients suspected or confirmed to have the coronavirus, resume your daily living schedule."


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
    location.href = "indexEn.html"
})
