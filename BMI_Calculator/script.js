var dialogBtn=document.querySelector('.btn');
var dialog=document.querySelector('.dialog');
var btnCal=document.querySelector('.btnCal');

var isOpen=false

const dialogToggle=()=>{
    if(isOpen){
        dialog.classList.remove('display');
        isOpen=false;
    }else{
        dialog.classList.add('display');
        isOpen=true
    }
}

const calculateBMI=()=>{
    const height=Number(document.getElementsByClassName('height')[0].value) / 100;
    const weight=Number(document.getElementsByClassName('weight')[0].value);
    const bmiValue=document.querySelector('.bmiValue');
    const dialogResult=document.querySelector('.res');
    const dialogIcon=document.getElementById('icon');
    
    const result=weight/(height*height);
    if(height=='' && weight==''){
        alert('Enter the value')
    }else{
        if(result < 18.5){
            dialogResult.innerHTML='Result: Underweight';
            dialogIcon.classList.add('fa-circle-xmark');
            dialogIcon.style.color='red'
    
        }else if(result >= 18.5 && result <=24.9){
            dialogResult.innerHTML='Result: Normal';
            dialogIcon.classList.add('fa-circle-check');        
            dialogIcon.style.color='green';
    
        }else if(result >= 25 && result <=29.9){
            dialogResult.innerHTML='Result: Overweight';
            dialogIcon.classList.add('fa-circle-exclamation');
            dialogIcon.style.color='orange'
    
        }else if(result >= 30){
            dialogResult.innerHTML='Result: Obesed';
            dialogIcon.classList.add('fa-circle-exclamation');
            dialogIcon.style.color='red'
        }
        bmiValue.innerHTML=`BMI Index:${result.toFixed(2)}`;
    }
    
    dialogToggle();
}
dialogBtn.addEventListener('click',dialogToggle);
btnCal.addEventListener('click',calculateBMI)