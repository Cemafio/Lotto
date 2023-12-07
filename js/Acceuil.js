function fermer()
{
  window.close();
} 
function _get(elt)
{
  return document.getElementById(elt);
}
function mipoitra(){
  let aide=_get("aide");
  aide.style.display="block"
}
function manakatona(){
  let aide=_get("aide");
  let fer=_get("exita");

  aide.style.display="none"

}