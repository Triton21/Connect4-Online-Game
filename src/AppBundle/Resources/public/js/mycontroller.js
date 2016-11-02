controllerModule = (function () {
    
    
    
    
    
    init = function () {
        //startNode = document.getElementById("startcolor");
        trigger1 = document.getElementById("player");
        trigger1.addEventListener(
                "click",
                function (event) {
                    event.stopPropagation();
                    var data = event.target.getAttribute('data-action');
                    if (data === '2player') {
                        connectModule.init();
                    } else if (data === 'solo'){
                        computerModule.init();
                    }
                    
                }
        );
    };
    return {
        init: init,
    };
    
    
}());

controllerModule.init();