<template>
  <div id="app">
    <div id="nav" class="header">
     <div class="logo imagen">
        
          <b-navbar-brand href="#">
            <img
              src="../src/assets/Logo-de-SENA-sin-fondo-naranja.png"
              alt="logo sena"
            />
          </b-navbar-brand>
       
          <b-navbar-brand href="#">
            <img src="../src/assets/logo senarama.png" alt="logo senarama" />
          </b-navbar-brand>
       </div>  
      

      <ul class="menu media">
        <li><router-link to="/">INICIO</router-link></li>
        <li><router-link to="/proyectos">PROYECTOS</router-link></li>
        <li><router-link to="/senarautas">SENARAUTAS</router-link></li>
        <li><router-link to="/cartelera">CARTELERA</router-link></li>
        <li><router-link to="/contacto">CONTACTO</router-link></li>
      </ul>

      <ul class="redes media">
        <ul class="icono">
          <li>
            <b-navbar-brand href="#">
              <img src="../src/assets/iCONOS SENA f.png" alt="facebook" />
            </b-navbar-brand>
          </li>
          <li>
            <b-navbar-brand href="https://www.instagram.com/senarama_ecosistema_creativo/">
              <img src="../src/assets/iCONOS SENA I.png" alt="Instagram" />
            </b-navbar-brand>
          </li>
          <li>
            <b-navbar-brand href="https://twitter.com/SENAComunica">
              <img src="../src/assets/iCONOS SENA T.png" alt="Twitter" />
            </b-navbar-brand>
          </li>
          <li>
            <b-navbar-brand href="https://www.youtube.com/channel/UCt5y885UFplu2okY39TBwCg">
              <img src="../src/assets/iCONOS SENA Y.png" alt="Youtube" />
            </b-navbar-brand>
          </li>
        </ul>
        <ul class="init">
          <li>
            <router-link to="/registro">INICIO SESION | REGISTRO</router-link>
          </li>
        </ul>
      </ul>
    </div>
    <router-view/>
  </div>

</template>

<script scr="components/footer.js">


</script>


<style scoped lang="scss">
:root {
  --blanco: #fff;
  --negro: #000;
  --naranja: #fc7323;
  --verde: #238276;
  --verdeComplementario: #59b548;
  --beige: #fff7ef;
}
*,
*::after,
*::before {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
#app {
  font-family: Verdana;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
.imagen img {
  width: 100px;
}
.logo {
  width: 20%;
  max-width: 850px;
  margin: 0 auto;
  flex-shrink: 1;
  display: inline-block;

}
.header {
  padding: 1rem 1rem;
  display: inline-flex;
  min-width: 100%;
  position: fixed;
  left: 0;
  top: 0;
  align-items: center;
  background-color: #fff7ef;
}


.menu {
  justify-content: flex-start;
  flex-grow: 1;
  flex-wrap: wrap;
  color: #000;
}
.menu li {
  padding: 1rem;
  display: inline-block;
}
.menu ul li a {
 
  
  display: block;
  transition: all 0.4s linear;
}

.menu a {
  text-decoration: none;
  font-weight: 600;
}

ul {
  list-style: none;
}
a {
   color: #000000;
  
&.router-link-exact-active {
    color:  #fc7323;
  }
 
  
}

.redes li {
  list-style: none;
  display: inline-flex;
}
.redes img {
  width: 45px;
}

.redes{ 
    
    display: flex; 
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  
}
.icono img{
  padding: 1px;
}

.init li a{
  
    font-size: 12px;
    font-weight: 100;
    
}
</style>

<!--<style lang="scss">
:root{
    --blanco: #fff;
    --negro: #000;
    --naranja: #fc7323;
    --verde:  #238276;
    --verdeComplementario: #59b548;
    --beige: #fff7ef;
}
*,
*::after,
*::before{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}
#app {
  font-family: Verdana;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  text-align: center;

}

#nav {
  .logo{
    width: 20%;
    max-width: 850px;
    margin: 0 auto;
    flex-shrink: 1;
}
.redes li{
    
    list-style: none;
    display: inline-flex;
}

  padding: 1rem 1rem;
    display: inline-flex;
    min-width: 100%;
    position: fixed;
    left: 0;
    top: 0;
    align-items: center;

  .menu{
     justify-content: flex-start;
    flex-grow: 1;
    flex-wrap: wrap;
    color:  #000;

  }
  .menu ul li{
    padding: 1rem;
    display: inline-block;  
}

  .menu ul li a{
    color:var(--negro);
    display: block;
    transition: all 0.4s linear;
}
  .menu a{
    text-decoration: none;
    font-weight: 600;
  }

  ul {
    list-style: none;
}

  
 
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
-->
