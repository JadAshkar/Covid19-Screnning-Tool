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


var case10="الإتصال على الرّقم المخصص لوزارة الصحة 1214 أو 01594459<br><br>"
var case11="الرجاء الإلتزام بالحجر المنزلي لمدة لا تقل عن 14 يوما، والذي يتضمن <br><br>"
var case12="عدم الذهاب إلى العمل أو المدرسة أو الأماكن العامة الأخرى أو المناسبات الإجتماعية<br><br>"
var case13="البقاء في غرفة جيدة التهوئة فيها نافذة يمكن فتحها ، وأن تكون منفصلة عن باقي غرف القاطنين في المنزل<br><br>"
var case14="الطلب من الأصدقاء أو أفراد الأسرة تأمين الطعام أو الأدوية ووضعها عند باب منزلك أو غرفتك<br><br>"
var case15="غسل اليدين جيداً وبصورة متكررة بالماء والصابون لمدة ٢٠ ثانية على الأقل<br><br>"
var case16="عدم إستقبال الزوار بتاتا<br><br>"
var case17="من المفضل أن يكون لديك حمام أو مرحاض خاص بك ، في حال عدم توفر ذلك يجب تنظيف الحمام جيداً بعد كل استعمال<br><br>"
var case18="عدم مشاركة الأكواب أو أدوات الأكل أو المناشف أو السرير مع أي شخص في المنزل<br><br>"
var case19="وضع القمامة في كيس بلاستيك ثم وضعه في كيس آخر قبل رميه<br><br>"

var case20="عليك التوجه نحو أقرب مستشفى للقيام بفحص الكورونا <br>"
var case21="أو <br>"
var case22="الإتصال على الرقم المخصص لوزارة الصحة 1214 أو 01594459<br><br>"

var case3="الرجاء التواصل مع طبيبك الشخصي مع مراعاة معايير النظافة الشخصية. كما ويرجى تجنب الإختلاط مع الآخرين"

var case4 ="الرجاء الالتزام بالعزل الاجتماعي(عدم مغادرة المنزل إلا في حالة الضرورة القصوى)، الإهتمام بالنظافة الشخصية وإعادة الإختبار في حال ظهور أعراض مرضيّة جديدة"


var case50="كعامل في الحقل الطبيّ، إن كنت غير ملتزم بالتدابير الوقائية أثناء إتصالك بالمرضى<br><br>"
var case51="قم بإبلاغ المؤسسة التي تعمل فيها لأخذ الإحتياطات اللّازمة <br><br>"
var case5 = case50+case51+case11+case12+case13+case14+case15+case16+case17+case18+case19

var case6 = "كعامل في الحقل الطبي، إن كنت ملتزما بدقة بتدابير الوقاية من العدوى أثناء الإتصال بالمرضى المشتبه بإصابتهم بفيروس كورونا أو المؤكد أنهم مصابون، فاستأنف جدول حياتك اليومي"



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
            result.innerHTML = case10+case11+case12+case13+case14+case15+case16+case17+case18+case19
        }

    }
    else if(fever=="Yes"||cough=="Yes"||breath=="Yes"||throat=="Yes"){
        result.innerHTML = case20+case21+case22
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
                result.innerHTML = case20+case21+case22
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
                result.innerHTML = case20+case21+case22
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
    location.href = "index.html"
})
