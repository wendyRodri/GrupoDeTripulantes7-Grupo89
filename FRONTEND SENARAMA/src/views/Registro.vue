<template>
<main>
  <div class="home">
    <form>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Correo electronico</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Contraseña</label>
    <input type="password" class="form-control" id="exampleInputPassword1">
  </div>
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1">
    <label class="form-check-label" for="exampleCheck1">Aceptar terminos y condiciones</label>
  </div>
  <button type="submit" class="btn btn-primary">Entrar</button>
</form>
  </div>
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
    justify-content: center;
    background-image: url();
    
    flex-grow: 1;
    padding-top: 1rem;
}

</style>