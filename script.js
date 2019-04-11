var psword=document.getElementById('password');
var pswordConfirm=document.getElementById('confirmPassword');
pswordConfirm.addEventListener('keyup',checkConfirmation);
function checkConfirmation(){
    if (psword.value == pswordConfirm.value) {
        pswordConfirm.style.borderColor="green";
    }else{
        pswordConfirm.style.borderColor="red";
    }
}
