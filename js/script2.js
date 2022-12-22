let idArea =document.getElementById('idArea')
let idMes =document.getElementById('idMes')
let pwArea =document.getElementById('pwArea')
let pwMes =document.getElementById('pwMes')
let pwArea2 =document.getElementById('pwArea2')
let pwMes2 =document.getElementById('pwMes2')
let name1 =document.getElementById('name')
let nameMes =document.getElementById('nameMes')
let phone =document.getElementById('phone')
let phMes =document.getElementById('phMes')
let email =document.getElementById('email')
let eMes =document.getElementById('eMes')
let born =document.getElementById('born')
let bMes =document.getElementById('bMes')
let gMes =document.getElementById('gMes')

let regid = /[a-zA-Z0-9]{4,}$/;
let regPw = /^.*(?=^.{8,16})(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&*]).*$/;
let regname = /^[a-zA-Zㄱ-ㅎㅏ-ㅣ가-힣]{1,20}$/;
let regphone =/(^01[016789]{1})([0-9]{3,4})[0-9]{4}$/g;
let regemail = /^[a-zA-Z0-9]([-_.]?\w+)*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/g;
let regborn =/([0-9]{8})$/g;

idArea.addEventListener('blur',function(){
    if(!regid.test(idArea.value)){
        idMes.style.color='#d2232a'
        idMes.innerHTML='아이디는 영대소문자, 숫자 포함 5글자 이상 가능'
        //idArea.focus();
    }else{
        idMes.style.color='blue'
        idMes.innerHTML='사용가능한 아이디 입니다.'
    }
});

pwArea.addEventListener('blur',function(){
    if(!regPw.test(pwArea.value)){
        pwMes.style.color='#d2232a'
        pwMes.innerHTML='비밀번호는 특수문자,문자,숫자 포함 8이상 16미만의 값만 사용가능'
        //pwArea.focus();

    }else{
        if((pwArea.value=='')&&(pwArea2.value=='')){
            pwMes2.innerHTML=''
        }else{
            pwMes.innerHTML=''
        }
    }
});

pwArea2.addEventListener('focus',function(){
    if(pwArea.value==''){
        pwMes.style.color='#d2232a'
        pwMes.innerHTML='비밀번호를 입력해 주세요.'
        //pwArea.focus();
    }
});

pwArea2.addEventListener('blur',function(){
    if(pwArea.value !=pwArea2.value){
        pwMes2.style.color='#d2232a'
        pwMes2.innerHTML='비밀번호가 일치하지 않습니다'
        return false
    }else{
        if((pwArea.value=='')&&(pwArea2.value=='')){
            pwArea.focus();
        }else{
            pwMes2.style.color='blue'
            pwMes2.innerHTML='비밀번호가 일치합니다.'
        }
    }     
});

name1.addEventListener('blur',function(){
    if(!regname.test(name1.value)){
        nameMes.style.color='#d2232a'
        nameMes.innerHTML='이름을 입력해주세요.'
    }else{
        nameMes.innerHTML=''
    }
});

phone.addEventListener('blur',function(){
    if(!regphone.test(phone.value)){
        phMes.style.color='#d2232a'
        phMes.innerHTML='번호를 입력해 주세요.'
        phone.value=''
    }else{
        phMes.innerHTML=''
    }
});

email.addEventListener('blur',function(){
    if(!regemail.test(email.value)){
        eMes.style.color='#d2232a'
        eMes.innerHTML='사용할 수 없는 이메일 입니다.'
        email.value=''
    }else{
        eMes.innerHTML=''
    }
});

born.addEventListener('blur',function(){
    if(!regborn.test(born.value)){
        bMes.style.color='#d2232a'
        bMes.innerHTML='8자리를 입력해 주세요.'
        born.value=''
    }else{
        bMes.innerHTML=''
    }
});

document.getElementById('submit').onclick=function(){
    if(idArea.value==""){
        alert('아이디를 입력하세요.');
        return false;
    }else{
         if(!regid.test(idArea.value)){                     
            alert('아이디는 대문자로 시작하는 영문,숫자 포함 5글자 이상만 가능');
            idArea.value=""
            return false;                      
         }else{
            if(pwArea.value==""){
                alert('비밀번호를 입력해 주세요.');
                return false; 
            }else{
                if(pwArea.value !=pwArea2.value){
                    alert('비밀번호가 일치하지 않습니다.');
                    return false; 
                }else{
                    if(name1.value==""){
                        alert('이름을 입력해 주세요.');
                        return false; 
                    }else{
                        if(phone.value==""){
                            alert('번화번호를 입력해 주세요.');
                            return false; 
                        }else{
                            if(email.value==""){
                                alert('이메일을 입력해 주세요.');
                                return false; 
                            }else{
                                if(born.value==""){
                                    alert('생년월일을 입력해 주세요.');
                                    return false; 
                                }else{}
                            }
                        }
                    }
                }
            }    
        }
    }
    if(document.querySelector('[name=gender]:checked')==null){
        gMes.style.color='red';
        gMes.innerHTML='성별을 체크해주세요.';
        document.getElementById('female').focus();
    }else{
        location.href ='index10.html'
    }
};


