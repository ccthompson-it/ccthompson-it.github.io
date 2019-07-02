function toggle_menu() {
    
    var e = document.getElementById('menu');
    
    e.classList.toggle('visible');
    
    toggle_logo();
    
}

function toggle_menu_off() {
    
    var e = document.getElementById('menu');
    
    e.classList.remove('visible');    
}
