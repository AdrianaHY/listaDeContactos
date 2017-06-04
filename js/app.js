var contador = 0;

var agregarTarjeta = function(){

  //obtener elementos
  var $boton = $("#guardar");
  var $inputNombre = $("#first-name").val();
  var $inputTelefono = $("#tel").val();
  var $contenedorContactos = $("#contenedorContactos");
  var $spanContador= $("#spanContador");

  //agregar eventos
  $boton.click(crearTarjeta);

  function crearTarjeta(){
    //para crear elementos
    var $contenedorTarjeta = $("<div />").addClass("card");
    var $contenedorPersona = $("<div />").addClass("row card-content");
    var $contenedorIconoPersona = $("<div />").addClass("col s4");
    var $iconoPersona = $("<i>person_pin</i>").addClass("large material-icons");
    var $contenedorGeneralDatos = $("<div />").addClass("col s8");
    var $nombre = $("<p></p>)").addClass("card-title activator grey-text text-darken-4");
    var $contenedorTelefono = $("<div />").addClass("row");
    var $iconoTelefono = $("<i>call</i>").addClass("material-icons");
    var $telefono = $("<span></span>").text($inputTelefono);

    //agregar elementos
      //para los datos del telefono
    $contenedorTelefono.append($iconoTelefono);
    $telefono.text($inputTelefono);
    $nombre.text($inputNombre);
    $contenedorTelefono.append($telefono);

    //para el nombre
    $contenedorGeneralDatos.append($nombre);
    $contenedorGeneralDatos.append($contenedorTelefono);
    //para icono de persona
    $contenedorIconoPersona.append($iconoPersona);
    $contenedorPersona.append($contenedorIconoPersona);
    //para agregar todo a la tarjeta
    $contenedorTarjeta.append($contenedorPersona);
    $contenedorTarjeta.append($contenedorGeneralDatos);
    $contenedorContactos.append($contenedorTarjeta);
    $contenedorPersona.append($contenedorGeneralDatos);

    contador ++;
    $spanContador.text(contador);
    // console.log($inputNombre);
    // console.log($inputTelefono);

    // agregarDatos();
  };

  // function agregarDatos(){
  //   var $nombre = $("<p></p>)").addClass("card-title activator grey-text text-darken-4");
  //   var $telefono = $("<span></span>");
  //   $nombre.text($inputNombre.val());
  //   $telefono.text($inputTelefono.val());
  //   };


};
$(document).ready(agregarTarjeta);
