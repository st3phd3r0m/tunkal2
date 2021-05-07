$(function () {
    $("#posts_title").on('keyup', fillTextInput);
  });
  
function fillTextInput(){
    let id = this.id;
    $("#"+id.replace('title', 'slug')).val(this.value);
}