<template>
<main>
    
  

                <iframe width="727" height="409" src="https://www.youtube.com/embed/k5rZk-qC0JM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            
          
                <div class="sub">
                        <h2>Senarautas serie web </h2>
                    </div>
            
                <div class="contenedor-serie">
                   
                        <div class="am">
                             <b-img src="https://picsum.photos/250/250/?image=54" fluid alt="Quienes Somos"></b-img>
                            <a href="#" id="un">Quienes somos</a>
                        </div>
                        <div class="am">
                            <input type="date" name="calen">
                            <a href="#" id="do">Calendario</a>
                        </div>
                        <div class="am">
                            <b-img src="https://picsum.photos/250/250/?image=54" fluid alt="Quienes Somos"></b-img>
                            <a href="#" id="tre">Tras bambalinas</a>
                        </div> 
                        <div class="am">  
                            <b-img src="https://picsum.photos/250/250/?image=54" fluid alt="Quienes Somos"></b-img>
                            <a href="#" id="cua">Foro</a>
                        </div>    
              </div>
                
                <div class="contenedor-sena">
                    <h1>SENARAUTAS</h1>
                     <b-img src="https://picsum.photos/250/250/?image=54" fluid alt="Quienes Somos"></b-img>
                     <b-img src="https://picsum.photos/250/250/?image=54" fluid alt="Quienes Somos"></b-img>
                     <b-img src="https://picsum.photos/250/250/?image=54" fluid alt="Quienes Somos"></b-img>
                     <b-img src="https://picsum.photos/250/250/?image=54" fluid alt="Quienes Somos"></b-img>
                
                </div>
            
 </main>
 
</template>

<script scr="components/footer.js">


</script>
<style scoped lang="scss">

main{
 
    padding-top: 8rem;
    width: 100%;
    margin-top: 200px;
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    background-image: url(/src/assets/fondocontacto1);
    flex-grow: 1;
    padding-top: 1rem;
}

.contenedor{
    /*position: relative;*/
    height: 500px;
    width: 100%;
}

iframe{
    width: 100%;
    height: 500px;
.sub{
    align-items: center;
}    

}
.contenedor-serie{
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    width: 100%;
}

.contenedor.sena{
    flex-direction: row;
    justify-content: space-between;


}
.am{
    direction: flex;
    flex-direction: row;
    align-items: center ;
}


</style>
