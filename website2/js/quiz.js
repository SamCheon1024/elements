$(function(){
            var aanswer = 0;
            var banswer = 0;
            var canswer = 0;
            var danswer = 0;
            var eanswer = 0;
            var indexquiz = Math.floor(Math.random() * 5);
                 
                if(indexquiz == 1){
                    $("#elements").show();
                    console.log(1);
                }
            
                else if(indexquiz == 0){
                    $("#elements").show();
                    console.log(0)
                }
                
                // else if(indexquiz == 2){
                //     $("#elements").show();
                //     console.log(2);
                // }
                
                else{
                    $("#elements").show();
                    console.log("else");
                }
               
            
            var height = $(window).height()/2;
                var qboxheight = height-300;
                var width = $(window).width()/2;
                var thumbwidth = $(".thumbnails").width()/2;
                
                
            $("#qbox").css({marginTop: qboxheight});
                // $(".thumbnails").css({position: "absolute", bottom:"20px", left: width-thumbwidth});
                
                $(window).resize(function(){
                    height = $(window).height()/2;
                    qboxheight = height-300;
                    width = $(window).width()/2;
                    thumbwidth = $(".thumbnails").width()/2;
                    
                    $("#qbox").css({marginTop: qboxheight});
               // $(".thumbnails").css({position: "absolute", bottom:"20px", left: width-thumbwidth});
                });
                
            console.log(height)
            $(".thumbnails").hide();
            
            $(".results").hide();
            
            
            
                var curslidenum = 0;
                
                //console.log(curslidenum);
                
                $(".anoqui").click(function(){
                    $(".allquizez").hide();
                    indexquiz = Math.floor(Math.random() * 3);
                    if(indexquiz == 0 && $(this).not(".onpants")){
                        $("#elements").show();
                    }
                    
                    else if(indexquiz == 1 && $(this).not(".oncreature")){
                        $("#elements").show();
                    }
                    
                    // else if(indexquiz == 2 && $(this).not(".onice")){
                    //     $("#elements").show();
                    // }
                    
                    
                    else{
                        $("#elements").show();
                        console.log("else");
                    }
                    
                    console.log(indexquiz)
                    
                      aanswer = 0;
                      banswer = 0;
                      canswer = 0;
                      danswer = 0;
                      eanswer = 0;


                       curslidenum = -1;
                       $(".quiz1").animate({marginTop:(curslidenum)}, 1000);


                       $(".results").hide();
                       //console.log("a answer:" + aanswer);

                        $(".answer").removeClass("notmyanswer").removeClass("myanswer")

                });
                
                // $(".redo").click(function(){
                //   aanswer = 0;
                //   banswer = 0;
                //   canswer = 0;
                //   danswer = 0;
                //   eanswer = 0;
                   
                   
                //    curslidenum = -1;
                //    $(".quiz1").animate({marginTop:(curslidenum)}, 1000);
                   
                //    setTimeout(location.reload, 1000);
                   
                //    $(".results").hide();
                //    //console.log("a answer:" + aanswer);
                   
                //     $(".answer").removeClass("notmyanswer").removeClass("myanswer")
                // });
                
                $(".button").click(function(){
                    curslidenum++;
                    
                    if(curslidenum > 11){
                        curslidenum = 0;
                    }
                    
                    
                    $(".answer").click(function(){
                       
                       if($(this).siblings(".myanswer").hasClass("a")){
                          aanswer--;
                       }
                       
                       else if($(this).siblings(".myanswer").hasClass("b")){
                          banswer--;
                       }
                       
                       else if($(this).siblings(".myanswer").hasClass("c")){
                          canswer--;
                       }
                       
                       else if($(this).siblings(".myanswer").hasClass("d")){
                          danswer--;
                       }

                       else if($(this).siblings(".myanswer").hasClass("e")){
                          eanswer--;
                       }
                       
                      $(this).addClass("myanswer").removeClass("notmyanswer").siblings().removeClass("myanswer").addClass("notmyanswer");
                        
                        
                    
                    });
                    
                    
                    
                    //console.log(curslidenum);

                    showslide();
                    
                    hiddenthumb();
                });//end of button
                
                var answerchange = function(){
                    
                };
                
                if(curslidenum > 11){
                    curslidenum == 0;
                }
                
                
                
                $(".thumbnails li a").click(function(){
                    curslidenum = $(this).parent().index();
                    //console.log(curslidenum);

                    showslide();
                    
                    //undoanswer();

                });//end of thumbnails
                
            
                
                var hiddenthumb = function(){
                    
                    if (curslidenum >= 1 && curslidenum < 11){
                        $(".thumbnails").show();
                        
                        //console.log("nahnah")
                    }
                    
                    else{
                        $(".thumbnails").hide();
                        
                        //console.log("heeey")
                    };
                    
                    
                };
                
                var showslide = function(){
         
                    $(".quiz1").animate({marginTop:(curslidenum * -620)}, 1000);

                    $(".thumbnails li a").removeClass("selected");
                    $(".thumbnails li a").eq(curslidenum).addClass("selected");

                };//end showslide
                
               $(".a").click(function(){
                  aanswer++;
                  console.log("a answer:" + aanswer);
               });
               
               $(".b").click(function(){
                  banswer++;
                  console.log("b answer:" + banswer);
               });
               
               $(".c").click(function(){
                  canswer++;
                  console.log("c answer:" + canswer);
               });
               
               $(".d").click(function(){
                  danswer++;
                  console.log("d answer:" + danswer);
               });

                $(".e").click(function(){
                  eanswer++;
                  console.log("e answer:" + eanswer);
               });
               
                $(".end").click(function(){
                    
                    resulting();
                    console.log("a answer:" + aanswer)
                    console.log("b answer:" + banswer)
                    console.log("c answer:" + canswer)
                    console.log("d answer:" + danswer)
                    console.log("e answer:" + eanswer)
                })
                
               var resulting = function(){
                              
                  if(aanswer>banswer&&aanswer>canswer&&aanswer>danswer&&aanswer>eanswer){
                     $(".aresults").show();
                     
                  }
                  
                  else if (banswer>aanswer&&banswer>canswer&&banswer>danswer&&banswer>eanswer){
                     $(".bresults").show();
                     
                  }
                  
                   else if (canswer>aanswer&&canswer>banswer&&canswer>danswer&&canswer>eanswer){
                     $(".cresults").show();
                     
                  }
                   
                   else if (danswer>aanswer&&danswer>canswer&&danswer>banswer&&danswer>eanswer){
                     $(".dresults").show();
                     
                  }

                  else if (eanswer>aanswer&&eanswer>canswer&&eanswer>banswer&&eanswer>danswer){
                     $(".eresults").show();
                     return;
                  }
                  
              };//end of resulting
               
               
               
               
            
         })//end of all