'use strict'

{
    $(function(){


        // $(window).resize(function (){
        //     let windowWidth = $(window).width();
        //     alert(windowWidth);
        // });


         
        

        $(window).scroll(function() {
            let scroll = $(this).scrollTop();
            const WIN_HEI = $(window).height();
            // const WORK_OFFSET = document.getElementsByClassName('work-container');
            // const WORK_OFFSET = $('.work-container').offset().top;
            


            $(".fadein").each(function(){

                let elePos = $(this).offset().top;

                if(scroll > elePos - WIN_HEI + 200){
                    $(this).children(".square").addClass('show');
                    //alert('aaaa');
                    $(this).children(".circle").addClass('show');
                    $(this).children(".circle").children(".work-circle-clip").addClass('show');
                    $(this).children(".work-circle-clip-title").addClass('show');
                    $(this).addClass('show');

                    
                }

            });

            $(".fadeins").each(function(){

                let elePos = $(this).offset().top;

                if(scroll > elePos - WIN_HEI + 200){
                    $(this).addClass('scrollin');
                   
                }

            });



        });

        let beforePos = 0;
        let scrollPos = 0;
        $(window).on('scroll',function(){
            scrollPos =  $(this).scrollTop();
            if(scrollPos >= beforePos && !$('header nav ul').hasClass('open')){
                $('header nav').addClass('hide');

            }else{
                $('header nav').removeClass('hide');
            }
            beforePos = scrollPos;
        });


        $('#open').click(function(){
            $('header nav ul').addClass('open');
        });

        $('#close').click(function(){
            $('header nav ul').removeClass('open');
        });



        $('#topbtn').click(function(){
            $('body,html').animate({scrollTop:0},500, "swing");
            return false;
            
        });





        });
















    // インジケーターの作成
    $(function() {
        const $boxes = $('.box');
        const boxes_cnt = $boxes.length;
        const $indicator = $('#indicator');
        let indeicatorHtml ='';

        for ( let i = 0; i < boxes_cnt; i++) {
            indeicatorHtml += '<a href="#" class="indicator' + (i + 1) + '"></a>';
        };

        $indicator.html(indeicatorHtml);
    });





    // boxに連番のクラス付与
    const $boxes = $('.box');
    $boxes.each(function (index,element) {
        $(element).addClass('box'+(index+1));
    });
    
        const $indicator = $('#indicator');
        let flag = 1;

    $indicator.on('click','a',function(e) {


        e.preventDefault();
        const offset = $('.box' + ($(this).index()+1)).offset().top;
        flag = 3;
        $('html,body').stop(true).animate({ scrollTop: offset}, 500, 'swing', function() {
            flag = 1;
        })
    });
   
    

    // スクロールの上下方向の判定
     const $window = $(window);

    let prev_pos = $window.scrollTop();　//初期値（画面をリロードしたときの位置）

    // $.throttle(1000/100
    $window.on('scroll',function() {


        const $boxes = $('.box');
        const boxes_cnt = $boxes.length;
        const $indicator = $('#indicator');
        let indeicatorHtml ='';

        let current_pos = $(this).scrollTop();　//現在の位置


         // インジケーターの点灯・消灯
    for (let i = 0;i < boxes_cnt; i++) {
        const prev_offset = $('.box' + (i + 1)).offset().top;

        if(current_pos >= prev_offset - 1) {
            $('#indicator a').removeClass('active');
            $('#indicator a.indicator' + (i + 1)).addClass('active');

        }
    }

        for(let i = 1;i < boxes_cnt; i++) {
            const prev_offset = $('.box' + i).offset().top;
            const next_offset = $('.box' + (i + 1)).offset().top;


            if((current_pos > prev_offset) && (current_pos < next_offset) && (flag === 1)) {


                if(current_pos > prev_pos) {
                    // 下方向
                    flag = 2;
        
                    $('html, body').stop(true).animate({ scrollTop: next_offset}, 500,'swing',function(){
                        flag = 1;
                });
                } else if ( current_pos < prev_pos ) {
                    // 上方向
                    flag = 2;
                    $('html, body').stop(true).animate({ scrollTop: prev_offset}, 500,'swing',function(){
                        flag = 1;
                });
                }

                prev_pos = current_pos;
        
            }
            }
        });







}