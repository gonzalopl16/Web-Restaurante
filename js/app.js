//Variables del DOM
const email = document.getElementById('exampleInputEmail1');
const password = document.getElementById('exampleInputPassword1');
const boton = document.getElementById('boton');

boton.addEventListener('click',(evt)=>{
    evt.preventDefault();
    if(email.value === 'root@root'){
        if(password.value === '12345'){
            window.location.href = "admin/administracion.html";
        }
    }
});