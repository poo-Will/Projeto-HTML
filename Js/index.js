function showPassword(){

    const eye = document.getElementById('eye');
    const eyeslash = document.getElementById('eye-slash');
    const fieldassword = document.getElementById('field-password');

    if(eye.style.display ==='none'){
        eye.style.display = 'block';
        eyeslash.style.display = 'none';
        fieldpassword.type = 'text';

    }  else{
        eye.style.display = 'none';
        eyeslash.style.display = 'block';
        fieldpassword.type = 'Password';

    }

}

document.getElementById('btn-login').addEventListener('click',function(e){
e.preventDefault();
alert('Logado');
})
