var jsonUsuario = [
    {
        id:1,
        login:"csil",
        nombre:"Carlos Silva",
        password:"carlos"
    },
    {
        id:2,
        login:"cmatus",
        nombre:"Claudio Matus",
        password:"claudio"
    }
]

    var login = "";
    var password = "";
    
    $("#btnIngresar").click(function(){ 
        login = $("#Log").val();
        password = $("#Psw").val(); 
        if(login != "" && password != ""){
            validar();
        }
     });
    
    function validar(){
    let retorno = false;
    for( let x = 0; x < jsonUsuario.length; x++){
        if(login == jsonUsuario[x].login){
            if(password == jsonUsuario[x].password){
            retorno = true;
        }
       }   
    }
    if(retorno){
         document.location.replace("formulario.html");
    }else{
        $("#Log").val();
        $("#Psw").val();
        alert("Usuario o password incorrecto");
        $("#log").focus();
    }           
   }