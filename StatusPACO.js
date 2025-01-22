document.addEventListener("DOMContentLoaded",()=>{
    var datos  = [];
    var objeto = {};
    
    datos.push({
        "action1": "1",
        "action2": "0"
    })
    objeto.datos = datos;
    console.log(JSON.stringify(objeto));
});
        
