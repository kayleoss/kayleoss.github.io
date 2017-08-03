function main() {
    $('.hidden').slideDown(1000);
    $('.first').delay(1000);
    $('.first').fadeIn(1500);
    $('.second').delay(4500);
    $('.second').fadeIn(500);
    $('.send').delay(5200);
    $('.send').fadeIn(1500);
    $('.send').on('click', function(){
        $('.third').fadeIn(500);
        $('.fourth').delay(1000);
        $('.fourth').fadeIn(500);
            $('.send').on('click',function(){
                $('.fifth').fadeIn(500);
                $('.sixth').delay(3000);
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
                                        $('.ninth').fadeIn(500);
                                        $('.last').delay(2500);
                                        $('.last').fadeIn(500);
                                        $('.send').delay(3500);
                                        $('.send').fadeOut(1000);
                                        
                                        

                                        
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