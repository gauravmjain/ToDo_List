
var checkboxes = document.querySelectorAll('input[type=checkbox]');

// add a change event listener to checkbox
for (var i = 0; i < checkboxes.length; i++) {
    let selected = true;
  checkboxes[i].addEventListener('change', function() {
    let container = document.getElementById(this.id);
   
    // console.log(container);
    if(selected){
        container.style.textDecoration = "line-through";
        container.style.opacity = "0.5";
        selected = false;
    }else{
        container.style.textDecoration = "none";
        container.style.opacity = "1";
        selected = true;

    }
  });
}
