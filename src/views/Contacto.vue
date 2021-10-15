<template>
<main>
   <form class="contact-form">
       <legend>CONTACTANOS</legend>
       <input type="text" name="name" placeholder="Nombre" title="Nombre sólo acepta letras y espacios en blanco" pattern="^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$" required>
       <input type="email" name="email" placeholder="Correo electronico" title="Correo incorrecto" pattern="^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$" required>
       <input type="text" name="sudject" placeholder="Asunto" title="El asunto es requerido" required>
        <textarea name="comments" cols="50" rows="5" placeholder="Mensaje" data-pattern="^.{1,255}$" required></textarea>
       <input type="submit" value="ENVIAR">
       <div class="contact-form-loader-none"> <img src="assets/ball-triangle.svg" alt="Cargando"></div>
       <div class="contact-form-response">
           <p>Los datos han sido enviados </p>
       </div>
   </form>
</main>
</template>

<style scoped lang='scss'>
main{
 
    padding-top: 12rem;
    width: 100%;
    margin-top: 200px;
    display:flex;
    flex-direction:row;
    flex-wrap: rap;
    justify-content: space-between;
    
    flex-grow: 1;
    padding-top: 1rem;
}

.contact-form{
         --form-ok-color:#4caf50;
         --form-error-color:#f44336;
         margin-left: auto;
         margin-right: auto;
         width: 60%;
     }
     .contact-form > *{
         padding: 0.5rem;
         margin: 1rem auto;
         display: block;
         width: 100%;
     }   

     .contact-form textarea{
         resize: none;

     }
     .contact-form legend,
     .contact-form-response{
         font-size: 1.5rem;
         font-weight: bold;
         text-align: center;

     }
     .contact-form input,
     .contact-form textarea{
         font-size: 1rem;
         font-family: Verdana;
     }
     .contact-form input[type="submit"]{
         width: 50%;
         font-weight: bold;
         cursor: pointer;
     }

     .contact-form [required]:valid{
         border: thin solid var(--form-ok-color);
     }

     .contact-form [required]:invalid{
        border: thin solid var(--form-error-color);
    }

    .contact-form-error {
        margin-top: -1rem;
        font-size: 80%;
        background-color:var(--form-error-color);
        color: #fff;
        transition: all 800ms ease;
    }

    .contact-form-error.is-active{
        display: block;
        animation: show-message 1s 1 normal 0s ease-out both;
    }
    .none {
        display: none;
    }

    @keyframes show-message{
        0%{
            visibility: hidden;
            opacity: 0;
        }
        100%{
            visibility: visible;
            opacity: 1;
        }
    }
    


    
</style>


