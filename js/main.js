$(window).load(function(){
	$('#preloader').fadeOut('slow',function(){$(this).remove();});
});
(function(){

    var bodyMenu = document.body,
    openBtn = document.getElementById('open-button'),
    closeBtn = document.getElementById('close-button'),
    isOpen = false;

    function init() {
        initEvents();
        
    }
    function initEvents(){
        openBtn.addEventListener('click',toggleMenu);
        if(closeBtn){
            closeBtn.addEventListener('click',toggleMenu);
        }
    }
function toggleMenu(){
    if(isOpen){
        classie.remove(bodyMenu,'show-menu');
    }
    else{
        classie.add(bodyMenu,'show-menu');
    }
    isOpen = !isOpen;
}
init();

})();