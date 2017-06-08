/*var nextinput = 0;
  function AgregarCampos(){
  nextinput++;
  campo = '<li id="rut'+nextinput+'">Campo:<input type="text" size="20" id="campo' + nextinput + '"&nbsp; name="campo' + nextinput + '"&nbsp; /></li>';
  $("#campos").append(campo);
  }
*/
var allInputs = $( ":input" );
var formChildren = $( "form > *" );
$( "#messages" ).text( "Found " + allInputs.length + "  " +
  formChildren.length + " children." );
