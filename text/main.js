function main() {
    $('.hidden').slideDown(1000);
    $('.first').delay(1000);
    $('.first').fadeIn(1500);
    $('.second').delay(4500);
    $('.second').fadeIn(500);
    $('.send').delay(5200);
    $('.send').fadeIn(1500);
    $('.send').on('click', function(){
        $('.send').fadeOut(100);
        $('.third').fadeIn(500);
        $('.fourth').delay(1000);
        $('.fourth').fadeIn(500);
        $('.send').delay(2000);
        $('.send').fadeIn(1000);
            $('.send').on('click',function(){
                $('.fifth').fadeIn(500);
                $('.sixth').delay(2000);
                $('.sixth').fadeIn(500);
                    $('.send').on('click', function(){
                        $('.seven').fadeIn(500);
                        $('.projects').delay(1500);
                        $('.projects').fadeIn(500);
                            $('.send').on('click', function(){
                                $('.photo').fadeIn(500);
                                $('.reply').delay(2000);
                                $('.reply').fadeIn(500);
                                    $('.send').on('click',function(){
                                        $('.send').delay(0);
                                        $('.send').fadeOut(2000);
                                        $('.ninth').fadeIn(500);
                                        $('.last').delay(2000);
                                        $('.last').fadeIn(500);
                                       
                                        
                                        

                                        
                                        $('.hidden').delay(10000);
                                        $('.hidden').fadeOut(5000);
                                        $('.bye').delay(15000);
                                        $('.bye').fadeIn(1000);
                                    
                                        
    
                                    })
                            })
                    })
            })
         })



}

$('document').ready(main);