// Variables globales
const inputName = document.querySelector('#name');
const inputEmail = document.querySelector('#email');
const caracteresEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
const alertEmail = document.querySelector('#alertEmail');
const alertName = document.querySelector('#alertName');
const btnForm = document.querySelector('#btnSubmit');
const form = document.querySelector('#formulario');
const inputFooter = document.querySelector('#searchPhoto');

btnForm.disabled = true;

// Event Listener
form.addEventListener('change', ()=>{
   validateInputs();
})

inputEmail.addEventListener('input', (e) => {
   // Validar la cantidad de caracteres del campo
   if (e.target.value.length > 8){  
    if(caracteresEmail.test(inputEmail.value)){
         // Reemplazar clases
            inputEmail.classList.add('is-valid');
            inputEmail.classList.remove('is-invalid');
      }else{
         // Reemplazar clases
         inputEmail.classList.toggle('is-invalid');
         inputEmail.classList.remove('is-valid');
         // Hacer visible el mensaje
         alertEmail.style.display = 'block';
         alertEmail.value = 'Ingrese un email válido';
      }
   }else{
      alertEmail.style.display = 'block';
      alertEmail.childNodes[1].textContent = 'Ingrese un email válido';

      // Borrar el mensaje de alerta en 3s
      setTimeout(()=>{
         alertEmail.style.display = 'none';
      },3000)
      // Agregar clase
      inputEmail.classList.add('is-invalid');
   }
})



inputName.addEventListener('input', (e) => {
   // Validar la cantidad de caracteres del campo
   if (e.target.value.length > 0){  
      // Reemplazar clases
      inputName.classList.add('is-valid');
      inputName.classList.remove('is-invalid');
   }else{
      // Hacer visible el mensaje de alerta
      alertName.style.display = 'block';
      alertName.childNodes[1].textContent = 'El campo nombre es obligatorio';

      // Borrar el msj despues de 3s
      setTimeout(()=>{
         alertName.style.display = 'none';
      },3000)

      // Reemplazar clases
      inputName.classList.add('is-invalid');
      inputName.classList.remove('is-valid');
   }
})


// Funciones

function validateInputs(){
   if(inputEmail.className.includes('is-valid') && inputName.className.includes('is-valid')){
      btnForm.disabled = false;
      btnForm.classList.remove('btn-disabled');
   }
}

// Simula el envio de los datos
function sendForm(){
   swal(
      'DATOS ENVIADOS!',
      'Se ha enviado la información correctamente, pronto nos contactaremos con usted.',
      'success'
    ).then(() => {
      form.submit();
    });
}

// VALIDATE SEARCH OF THE INPUT
function validateSearch(){
   if(inputFooter.value.length > 0){
      swal(
         'Busqueda completada!',
         'Se ha realizado la busqueda. \n Se han encontrado 0 resultados.',
         'success'
       )
       inputFooter.value = '';

   }else{
      swal(
         'Llene los campos!',
         'Debes llenar el campo de busqueda.',
         'info'
       )
   }
}