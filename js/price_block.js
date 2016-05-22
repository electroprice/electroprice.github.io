/* First JS code 
*****created by Valik V/VZhIK*****
2016
*/
function checkPrice1(){
        var a11 = document.getElementById('1.1').value;
        if (a11<0){
          alert ('Вы ввели неправильное число');
          return;
        }
        var a12 = document.getElementById('1.2').value;
         if (a12<0){
          alert ('Вы ввели неправильное число');
          return;
        }
        var a13 = document.getElementById('1.3').value;
         if (a13<0){
          alert ('Вы ввели неправильное число');
          return;
        }
        var a141 = document.getElementById('1.4.1').value;
         if (a141<0){
          alert ('Вы ввели неправильное число');
          return;
        }
        var a142 = document.getElementById('1.4.2').value;
         if (a142<0){
          alert ('Вы ввели неправильное число');
          return;
        }
          var a143 = document.getElementById('1.4.3').value;
           if (a143<0){
          alert ('Вы ввели неправильное число');
          return;
        }
            var a151 = document.getElementById('1.5.1').value;
             if (a151<0){
          alert ('Вы ввели неправильное число');
          return;
        }
              var a152 = document.getElementById('1.5.2').value;
               if (a152<0){
          alert ('Вы ввели неправильное число');
          return;
        }
              var a153 = document.getElementById('1.5.3').value;
               if (a153<0){
          alert ('Вы ввели неправильное число');
          return;
        }
          var s11 = (price11.getAttribute('cena') );
          var s12 = (price12.getAttribute('cena') );
          var s13 = (price13.getAttribute('cena') );
          var s141 = (price141.getAttribute('cena') );
          var s142 = (price142.getAttribute('cena') );
          var s143 = (price143.getAttribute('cena') );
          var s151 = (price151.getAttribute('cena') );
          var s152 = (price152.getAttribute('cena') );
          var s153 = (price153.getAttribute('cena') );


var c = (a11*s11) + (a12*s12) + (a13*s13) + (a141*s141) + (a142*s142) + (a143*s143) + (a151*s151) + (a152*s152) + (a153*s153);
 if (c <= 0) {
   document.getElementById("price").innerHTML = 'Стоимость работ: '+ c +' грн.' ;
   return c;
        }
       else if (c >= 0){
          document.getElementById("price").innerHTML = 'Стоимость работ: '+ c +' грн.' ;
          return c;
        }
        else {
          
    document.getElementById("price").innerHTML = 'Проверьте правильность ввода';
}
}



function checkPrice2(){
        var a211 = document.getElementById('2.1.1').value;
         if (a211<0){
          alert ('Вы ввели неправильное число');
          return;
        }
        var a212 = document.getElementById('2.1.2').value;
         if (a212<0){
          alert ('Вы ввели неправильное число');
          return;
        }
        var a213 = document.getElementById('2.1.3').value;
         if (a213<0){
          alert ('Вы ввели неправильное число');
          return;
        }
        var a221 = document.getElementById('2.2.1').value;
         if (a221<0){
          alert ('Вы ввели неправильное число');
          return;
        }
          var a222 = document.getElementById('2.2.2').value;
           if (a222<0){
          alert ('Вы ввели неправильное число');
          return;
        }
          var a223 = document.getElementById('2.2.3').value;
           if (a223<0){
          alert ('Вы ввели неправильное число');
          return;
        }
            var a231 = document.getElementById('2.3.1').value;
             if (a231<0){
          alert ('Вы ввели неправильное число');
          return;
        }
              var a232 = document.getElementById('2.3.2').value;
               if (a232<0){
          alert ('Вы ввели неправильное число');
          return;
        }
              var a233 = document.getElementById('2.3.3').value;
               if (a233<0){
          alert ('Вы ввели неправильное число');
          return;
        }
             var a241 = document.getElementById('2.4.1').value;
              if (a241<0){
          alert ('Вы ввели неправильное число');
          return;
        }
              var a242 = document.getElementById('2.4.2').value;
               if (a242<0){
          alert ('Вы ввели неправильное число');
          return;
        }
              var a243 = document.getElementById('2.4.3').value;
               if (a243<0){
          alert ('Вы ввели неправильное число');
          return;
        }
                var a25 = document.getElementById('2.5').value;
                 if (a25<0){
          alert ('Вы ввели неправильное число');
          return;
        }

          var s211 = (price211.getAttribute('cena') );
          var s212 = (price212.getAttribute('cena') );
          var s213 = (price213.getAttribute('cena') );
          var s221 = (price221.getAttribute('cena') );
          var s222 = (price222.getAttribute('cena') );
          var s223 = (price223.getAttribute('cena') );
          var s231 = (price231.getAttribute('cena') );
          var s232 = (price232.getAttribute('cena') );
          var s233 = (price233.getAttribute('cena') );
          var s241 = (price241.getAttribute('cena') );
          var s242 = (price242.getAttribute('cena') );
          var s243 = (price243.getAttribute('cena') );
          var s25 = (price25.getAttribute('cena') );
var d = (a211*s211) + (a212*s212) + (a213*s213) + (a221*s221) + (a222*s222) + (a223*s223) + (a231*s231) + (a232*s232) + (a233*s233) + (a241*s241) + (a242*s242) + (a243*s243) + (a25*s25);
      if (d <= 0) {
   document.getElementById("price2").innerHTML = 'Стоимость работ: '+ d +' грн.' ;
   return d;
        }
       else if (d >= 0){
          document.getElementById("price2").innerHTML = 'Стоимость работ: '+ d +' грн.' ;
          return d;
        }
        else {
          
    document.getElementById("price2").innerHTML = 'Проверьте правильность ввода';
}

}

function checkPrice3(){
        var a31 = document.getElementById('3.1').value;
           if (a31<0){
          alert ('Вы ввели неправильное число');
          return;
        }
        var a32 = document.getElementById('3.2').value;
           if (a32<0){
          alert ('Вы ввели неправильное число');
          return;
        }
        var a33 = document.getElementById('3.3').value;
           if (a33<0){
          alert ('Вы ввели неправильное число');
          return;
        }
        var a34 = document.getElementById('3.4').value;
           if (a34<0){
          alert ('Вы ввели неправильное число');
          return;
        }
          var a35 = document.getElementById('3.5').value;
             if (a35<0){
          alert ('Вы ввели неправильное число');
          return;
        }
          var a36 = document.getElementById('3.6').value;
             if (a36<0){
          alert ('Вы ввели неправильное число');
          return;
        }
            var a37 = document.getElementById('3.7').value;
               if (a37<0){
          alert ('Вы ввели неправильное число');
          return;
        }
              var a38 = document.getElementById('3.8').value;
                 if (a38<0){
          alert ('Вы ввели неправильное число');
          return;
        }
              var a39 = document.getElementById('3.9').value;
                 if (a39<0){
          alert ('Вы ввели неправильное число');
          return;
        }
             var a310 = document.getElementById('3.10').value;
                if (a310<0){
          alert ('Вы ввели неправильное число');
          return;
        }
              var a311 = document.getElementById('3.11').value;
                 if (a311<0){
          alert ('Вы ввели неправильное число');
          return;
        }

              
          var s31 = (price31.getAttribute('cena') );
          var s32 = (price32.getAttribute('cena') );
          var s33 = (price33.getAttribute('cena') );
          var s34 = (price34.getAttribute('cena') );
          var s35 = (price35.getAttribute('cena') );
          var s36 = (price36.getAttribute('cena') );
          var s37 = (price37.getAttribute('cena') );
          var s38 = (price38.getAttribute('cena') );
          var s39 = (price39.getAttribute('cena') );
          var s310 = (price310.getAttribute('cena') );
          var s311 = (price311.getAttribute('cena') );



    var e = (a31*s31) + (a32*s32) + (a33*s33) + (a34*s34) + (a35*s35) + (a36*s36) + (a37*s37) + (a38*s38) + (a39*s39) + (a310*s310) + (a311*s311) ;
      if (e <= 0) {
   document.getElementById("price3").innerHTML = 'Стоимость работ: '+ e +' грн.' ;
   return e;
        }
       else if (e >= 0){
          document.getElementById("price3").innerHTML = 'Стоимость работ: '+ e +' грн.' ;
          return e;
        }
        else {
          
    document.getElementById("price3").innerHTML = 'Проверьте правильность ввода';
}

}


function checkPrice4(){
        var a41 = document.getElementById('4.1').value;
           if (a41<0){
          alert ('Вы ввели неправильное число');
          return;
        }
        var a421 = document.getElementById('4.2.1').value;
           if (a421<0){
          alert ('Вы ввели неправильное число');
          return;
        }
        var a422 = document.getElementById('4.2.2').value;
           if (a422<0){
          alert ('Вы ввели неправильное число');
          return;
        }
        var a423 = document.getElementById('4.2.3').value;
           if (a423<0){
          alert ('Вы ввели неправильное число');
          return;
        }
          var a431 = document.getElementById('4.3.1').value;
             if (a431<0){
          alert ('Вы ввели неправильное число');
          return;
        }
          var a432 = document.getElementById('4.3.2').value;
             if (a432<0){
          alert ('Вы ввели неправильное число');
          return;
        }
            var a433 = document.getElementById('4.3.3').value;
               if (a433<0){
          alert ('Вы ввели неправильное число');
          return;
        }
              var a441 = document.getElementById('4.4.1').value;
                 if (a441<0){
          alert ('Вы ввели неправильное число');
          return;
        }
              var a442 = document.getElementById('4.4.2').value;
                 if (a442<0){
          alert ('Вы ввели неправильное число');
          return;
        }
             var a443 = document.getElementById('4.4.3').value;
                if (a443<0){
          alert ('Вы ввели неправильное число');
          return;
        }
              var a451 = document.getElementById('4.5.1').value;
                 if (a451<0){
          alert ('Вы ввели неправильное число');
          return;
        }
              var a452 = document.getElementById('4.5.2').value;
                 if (a452<0){
          alert ('Вы ввели неправильное число');
          return;
        }
             var a453 = document.getElementById('4.5.3').value;
                if (a453<0){
          alert ('Вы ввели неправильное число');
          return;
        }     var a461 = document.getElementById('4.6.1').value;
                 if (a461<0){
          alert ('Вы ввели неправильное число');
          return;
        }
              var a462 = document.getElementById('4.6.2').value;
                 if (a462<0){
          alert ('Вы ввели неправильное число');
          return;
        }
             var a463 = document.getElementById('4.6.3').value;
                if (a463<0){
          alert ('Вы ввели неправильное число');
          return;
        }
             var a471 = document.getElementById('4.7.1').value;
                 if (a471<0){
          alert ('Вы ввели неправильное число');
          return;
        }
              var a472 = document.getElementById('4.7.2').value;
                 if (a472<0){
          alert ('Вы ввели неправильное число');
          return;
        }
             var a473 = document.getElementById('4.7.3').value;
                if (a473<0){
          alert ('Вы ввели неправильное число');
          return;
        }

              
          var s41 = (price41.getAttribute('cena') );
          var s421 = (price421.getAttribute('cena') );
          var s422 = (price422.getAttribute('cena') );
          var s423 = (price423.getAttribute('cena') );
          var s431 = (price431.getAttribute('cena') );
          var s432 = (price432.getAttribute('cena') );
          var s433 = (price433.getAttribute('cena') );
          var s441 = (price441.getAttribute('cena') );
          var s442 = (price442.getAttribute('cena') );
          var s443 = (price443.getAttribute('cena') );
          var s451 = (price451.getAttribute('cena') );
          var s452 = (price452.getAttribute('cena') );
          var s453 = (price453.getAttribute('cena') ); 
          var s461 = (price461.getAttribute('cena') );
          var s462 = (price462.getAttribute('cena') );
          var s463 = (price463.getAttribute('cena') );
          var s471 = (price471.getAttribute('cena') );
          var s472 = (price472.getAttribute('cena') );
          var s473 = (price473.getAttribute('cena') );



    var f = (a41*s41) + (a421*s421) + (a422*s422) + (a423*s423) + (a431*s431) + (a432*s432) + (a433*s433) + (a441*s441) + (a442*s442) + (a443*s443) + (a451*s451) + (a452*s452) + (a453*s453) + (a461*s461) + (a462*s462) + (a463*s463) + (a471*s471) + (a472*s472) + (a473*s473);
      if (f <= 0) {
   document.getElementById("price4").innerHTML = 'Стоимость работ: '+ f +' грн.' ;
   return f;
        }
       else if (f >= 0){
          document.getElementById("price4").innerHTML = 'Стоимость работ: '+ f +' грн.' ;
          return f;
        }
        else {
          
    document.getElementById("price4").innerHTML = 'Проверьте правильность ввода';
}

}

function checkPrice5(){
        var a51 = document.getElementById('5.1').value;
           if (a51<0){
          alert ('Вы ввели неправильное число');
          return;
        }
        var a52 = document.getElementById('5.2').value;
           if (a52<0){
          alert ('Вы ввели неправильное число');
          return;
        }
        var a531 = document.getElementById('5.3.1').value;
           if (a531<0){
          alert ('Вы ввели неправильное число');
          return;
        }
        var a532 = document.getElementById('5.3.2').value;
           if (a532<0){
          alert ('Вы ввели неправильное число');
          return;
        }
          var a533 = document.getElementById('5.3.3').value;
             if (a533<0){
          alert ('Вы ввели неправильное число');
          return;
        }
          var a54 = document.getElementById('5.4').value;
             if (a54<0){
          alert ('Вы ввели неправильное число');
          return;
        }
            var a55 = document.getElementById('5.5').value;
               if (a55<0){
          alert ('Вы ввели неправильное число');
          return;
        }
              var a56 = document.getElementById('5.6').value;
                 if (a56<0){
          alert ('Вы ввели неправильное число');
          return;
        }
              var a57 = document.getElementById('5.7').value;
                 if (a57<0){
          alert ('Вы ввели неправильное число');
          return;
        }
             var a58 = document.getElementById('5.8').value;
                if (a58<0){
          alert ('Вы ввели неправильное число');
          return;
        }
              var a591 = document.getElementById('5.9.1').value;
                 if (a591<0){
          alert ('Вы ввели неправильное число');
          return;
        }
        
       var a592 = document.getElementById('5.9.2').value;
                 if (a592<0){
          alert ('Вы ввели неправильное число');
          return;
        }

              
          var s51 = (price51.getAttribute('cena') );
          var s52 = (price52.getAttribute('cena') );
          var s531 = (price531.getAttribute('cena') );
          var s532 = (price532.getAttribute('cena') );
          var s533 = (price533.getAttribute('cena') );
          var s54 = (price54.getAttribute('cena') );
          var s55 = (price55.getAttribute('cena') );
          var s56 = (price56.getAttribute('cena') );
          var s57 = (price57.getAttribute('cena') );
          var s58 = (price58.getAttribute('cena') );
          var s591 = (price591.getAttribute('cena') );
(price58.getAttribute('cena') );
          var s592 = (price592.getAttribute('cena') );


    var i = (a51*s51) + (a52*s52) + (a531*s531) + (a532*s532) + (a533*s533) + (a54*s54) + (a55*s55) + (a56*s56) + (a57*s57) + (a58*s58) + (a591*s591) + (a592*s592) ;
      if (i <= 0) {
   document.getElementById("price5").innerHTML = 'Стоимость работ: '+ i +' грн.' ;
   return i;
        }
       else if (i >= 0){
          document.getElementById("price5").innerHTML = 'Стоимость работ: '+ i +' грн.' ;
          return i;
        }
        else {
          
    document.getElementById("price5").innerHTML = 'Проверьте правильность ввода';
}

}

function checkPrice6(){

        var a62 = document.getElementById('6.2').value;
           if (a62<0){
          alert ('Вы ввели неправильное число');
          return;
        }
        var a63 = document.getElementById('6.3').value;
           if (a63<0){
          alert ('Вы ввели неправильное число');
          return;
        }
        var a64 = document.getElementById('6.4').value;
           if (a64<0){
          alert ('Вы ввели неправильное число');
          return;
        }
          var a65 = document.getElementById('6.5').value;
             if (a65<0){
          alert ('Вы ввели неправильное число');
          return;
        }
          var a66 = document.getElementById('6.6').value;
             if (a66<0){
          alert ('Вы ввели неправильное число');
          return;
        }
            var a67 = document.getElementById('6.7').value;
               if (a67<0){
          alert ('Вы ввели неправильное число');
          return;
        }
              var a68 = document.getElementById('6.8').value;
                 if (a68<0){
          alert ('Вы ввели неправильное число');
          return;
        }
              
          var s62 = (price62.getAttribute('cena') );
          var s63 = (price63.getAttribute('cena') );
          var s64 = (price64.getAttribute('cena') );
          var s65 = (price65.getAttribute('cena') );
          var s66 = (price66.getAttribute('cena') );
          var s67 = (price67.getAttribute('cena') );
          var s68 = (price68.getAttribute('cena') );


    var n = (a62*s62) + (a63*s63) + (a64*s64) + (a65*s65) + (a66*s66) + (a67*s67) + (a68*s68) ;
      if (n <= 0) {
   document.getElementById("price6").innerHTML = 'Стоимость работ: '+ n +' грн.' ;
   return n;
        }
       else if (n >= 0){
          document.getElementById("price6").innerHTML = 'Стоимость работ: '+ n +' грн.' ;
          return n;
        }
        else {
          
    document.getElementById("price6").innerHTML = 'Проверьте правильность ввода';
}

}

function checkPrice7(){
        var a71 = document.getElementById('7.1').value;
           if (a71<0){
          alert ('Вы ввели неправильное число');
          return;
        }
        var a72 = document.getElementById('7.2').value;
           if (a72<0){
          alert ('Вы ввели неправильное число');
          return;
        }
        var a73 = document.getElementById('7.3').value;
           if (a73<0){
          alert ('Вы ввели неправильное число');
          return;
        }
        var a74 = document.getElementById('7.4').value;
           if (a74<0){
          alert ('Вы ввели неправильное число');
          return;
        }
          var a75 = document.getElementById('7.5').value;
             if (a75<0){
          alert ('Вы ввели неправильное число');
          return;
        }
        
              
          var s71 = (price71.getAttribute('cena') );
          var s72 = (price72.getAttribute('cena') );
          var s73 = (price73.getAttribute('cena') );
          var s74 = (price74.getAttribute('cena') );
          var s75 = (price75.getAttribute('cena') );

    var m = (a71*s71) + (a72*s72) + (a73*s73) + (a74*s74) + (a75*s75) ;
      if (m <= 0) {
   document.getElementById("price7").innerHTML = 'Стоимость работ: '+ m +' грн.' ;
   return m;
        }
       else if (m >= 0){
          document.getElementById("price7").innerHTML = 'Стоимость работ: '+ m +' грн.' ;
          return m;
        }
        else {
          
    document.getElementById("price7").innerHTML = 'Проверьте правильность ввода';
}

}

function checkPrice8(){
        var a81 = document.getElementById('8.1').value;
           if (a81<0){
          alert ('Вы ввели неправильное число');
          return;
        }
        var a82 = document.getElementById('8.2').value;
           if (a82<0){
          alert ('Вы ввели неправильное число');
          return;
        }
        var a83 = document.getElementById('8.3').value;
           if (a83<0){
          alert ('Вы ввели неправильное число');
          return;
        }
        var a84 = document.getElementById('8.4').value;
           if (a84<0){
          alert ('Вы ввели неправильное число');
          return;
        }
          var a85 = document.getElementById('8.5').value;
             if (a85<0){
          alert ('Вы ввели неправильное число');
          return;
        }
          var a86 = document.getElementById('8.6').value;
             if (a86<0){
          alert ('Вы ввели неправильное число');
          return;
        }
            var a87 = document.getElementById('8.7').value;
               if (a87<0){
          alert ('Вы ввели неправильное число');
          return;
        }
              var a88 = document.getElementById('8.8').value;
                 if (a88<0){
          alert ('Вы ввели неправильное число');
          return;
        }
              var a89 = document.getElementById('8.9').value;
                 if (a89<0){
          alert ('Вы ввели неправильное число');
          return;
        }
             var a810 = document.getElementById('8.10').value;
                if (a810<0){
          alert ('Вы ввели неправильное число');
          return;
        }
              var a811 = document.getElementById('8.11').value;
                 if (a811<0){
          alert ('Вы ввели неправильное число');
          return;
        }

              var a812 = document.getElementById('8.12').value;
                 if (a812<0){
          alert ('Вы ввели неправильное число');
          return;
        }
             
          var s81 = (price81.getAttribute('cena') );
          var s82 = (price82.getAttribute('cena') );
          var s83 = (price83.getAttribute('cena') );
          var s84 = (price84.getAttribute('cena') );
          var s85 = (price85.getAttribute('cena') );
          var s86 = (price86.getAttribute('cena') );
          var s87 = (price87.getAttribute('cena') );
          var s88 = (price88.getAttribute('cena') );
          var s89 = (price89.getAttribute('cena') );
          var s810 = (price810.getAttribute('cena') );
          var s811 = (price811.getAttribute('cena') );
          var s812 = (price812.getAttribute('cena') );

    var l = (a81*s81) + (a82*s82) + (a83*s83) + (a84*s84) + (a85*s85) + (a86*s86) + (a87*s87) + (a88*s88) + (a89*s89) + (a810*s810) + (a811*s811) + (a812*s812);
      if (l <= 0) {
   document.getElementById("price8").innerHTML = 'Стоимость работ: '+ l +' грн.' ;
   return l;
        }
       else if (l >= 0){
          document.getElementById("price8").innerHTML = 'Стоимость работ: '+ l +' грн.' ;
          return l;
        }
        else {
          
    document.getElementById("price8").innerHTML = 'Проверьте правильность ввода';
}

}


function checkPrice9(){
        var a91 = document.getElementById('9.1').value;
           if (a91<0){
          alert ('Вы ввели неправильное число');
          return;
        }
        var a92 = document.getElementById('9.2').value;
           if (a92<0){
          alert ('Вы ввели неправильное число');
          return;
        }
        var a93 = document.getElementById('9.3').value;
           if (a93<0){
          alert ('Вы ввели неправильное число');
          return;
        }
        var a94 = document.getElementById('9.4').value;
           if (a94<0){
          alert ('Вы ввели неправильное число');
          return;
        }
          var a95 = document.getElementById('9.5').value;
             if (a95<0){
          alert ('Вы ввели неправильное число');
          return;
        }
          var a96 = document.getElementById('9.6').value;
             if (a96<0){
          alert ('Вы ввели неправильное число');
          return;
        }
            var a97 = document.getElementById('9.7').value;
               if (a97<0){
          alert ('Вы ввели неправильное число');
          return;
        }

              
          var s91 = (price91.getAttribute('cena') );
          var s92 = (price92.getAttribute('cena') );
          var s93 = (price93.getAttribute('cena') );
          var s94 = (price94.getAttribute('cena') );
          var s95 = (price95.getAttribute('cena') );
          var s96 = (price96.getAttribute('cena') );
          var s97 = (price97.getAttribute('cena') );


    var w = (a91*s91) + (a92*s92) + (a93*s93) + (a94*s94) + (a95*s95) + (a96*s96) + (a97*s97);
      if (w <= 0) {
   document.getElementById("price9").innerHTML = 'Стоимость работ: '+ w +' грн.' ;
   return w;
        }
       else if (w >= 0){
          document.getElementById("price9").innerHTML = 'Стоимость работ: '+ w +' грн.' ;
          return w;
        }
        else {
          
    document.getElementById("price9").innerHTML = 'Проверьте правильность ввода';
}

}

function checkPrice10(){
        var a1011 = document.getElementById('10.1.1').value;
           if (a1011<0){
          alert ('Вы ввели неправильное число');
          return;
        }
        var a1012 = document.getElementById('10.1.2').value;
           if (a1012<0){
          alert ('Вы ввели неправильное число');
          return;
        }
        var a1013 = document.getElementById('10.1.3').value;
           if (a1013<0){
          alert ('Вы ввели неправильное число');
          return;
        }
        var a1021 = document.getElementById('10.2.1').value;
           if (a1021<0){
          alert ('Вы ввели неправильное число');
          return;
        }
          var a1022 = document.getElementById('10.2.2').value;
             if (a1022<0){
          alert ('Вы ввели неправильное число');
          return;
        }
          var a1023 = document.getElementById('10.2.3').value;
             if (a1023<0){
          alert ('Вы ввели неправильное число');
          return;
        }
              
          var s1011 = (price1011.getAttribute('cena') );
          var s1012 = (price1012.getAttribute('cena') );
          var s1013 = (price1013.getAttribute('cena') );
          var s1021 = (price1021.getAttribute('cena') );
          var s1022 = (price1022.getAttribute('cena') );
          var s1023 = (price1023.getAttribute('cena') );


    var r = (a1011*s1011) + (a1012*s1012) + (a1013*s1013) + (a1021*s1021) + (a1022*s1022) + (a1023*s1023) ;
      if (r <= 0) {
   document.getElementById("price10").innerHTML = 'Стоимость работ: '+ r +' грн.' ;
   return r;
        }
       else if (r >= 0){
          document.getElementById("price10").innerHTML = 'Стоимость работ: '+ r +' грн.' ;
          return r;
        }
        else {
          
    document.getElementById("price10").innerHTML = 'Проверьте правильность ввода';
}

}

function checkPriceAll(){
var all = checkPrice1() + checkPrice2() + checkPrice3() + checkPrice4() + checkPrice5() + checkPrice6() + checkPrice7() + checkPrice8() + checkPrice9() + checkPrice10();
 document.getElementById("Allprice").innerHTML = 'Стоимость всех работ: '+ all +' грн.' ;
}

