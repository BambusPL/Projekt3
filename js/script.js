//funkcja do pokazywania menu po scrollu//

$(document).ready(function(){
    
    'use strict';
    
    $(window).scroll(function(){
        'use strict';
        
        if($(window).scrollTop() < 80){
            
           $('.navbar').css ({
             'margin-top': '-100px',
               'opacity': '0'
               
           }); 
           
            $('.menu').css({
               'background-color': 'rgba(59,59,59, 0)' 
                
            });
            
        } else {
           $('.navbar').css ({
             'margin-top': '-0px',
               'opacity': '1'
               
           }); 
            
             $('.menu').css({
               'background-color': 'rgba(59,59,59, 0.7)',
                 'border-bottom': '1px solid #444'
                 
                
            });
            
            $('navbar-brand img').css({
                'height': '35px',
                'padding-top': '0px',
                
            });
            
            $('navbar-nav > li > a').css({
               'padding-top': '15px' 
                
            });
        }
    });
});


/*auto padding*/

$(document).ready(function() {
    
    'use strict';
    
    setInterval( function() {
        
        'use strict';
        
        var windowHeight = $(window).height();
        
        var containerHeight = $(".header-container").height();
        
        var padTop = windowHeight - containerHeight;
        
        $(".header-container").css({
            
            'padding-top': Math.round( padTop / 3) + 'px',
            'padding-bottom': Math.round( padTop / 3) + 'px'
            
        });
        
        
    }, 10)
    
    
});


/* odliczanko*/

jQuery(document).ready(function( $ ) {
$('.counter-num').counterUp({
delay: 10, // the delay time in ms
time: 1000 // the speed time in ms
});
});


