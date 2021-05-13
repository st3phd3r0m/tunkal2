$(function () {
    $("#categories_name").on('keyup', fillTextInput);
  });
  
function fillTextInput(){
    let id = this.id;
    $("#"+id.replace('name', 'slug')).val(this.value);
}