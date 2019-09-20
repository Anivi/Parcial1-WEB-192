

$(document).ready(function() {

     
     
            $(window).scroll(function(){
                    var windowHeight = $(window).scrollTop();
                    var windowWidth = $(window).scrollLeft();
                    var contenido2 = $("#contenido2").offset();
                    contenido2 = contenido2.top;
               //     contenido2 = contenido2.left;

     
                       

                        if(windowWidth >= contenido2 || windowHeight >= contenido2 ){
                            $('#contenido2').css({
                                background: 'rgb(255,'+ ($(window).scrollTop())/3 +','+($(window).scrollLeft())/3+')'
                            });
     
                        }

                           });
});

