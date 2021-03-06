var score = 0;
var pick = new Array();

$(document).ready(function(){

    var card = new Array();
    var pick_cardnum = new Array();
    var card_pattarn = 4;
    var card_number = 13;

    for(var i=0; i<card_pattarn; i++){
        for(var j=1; j<(card_number+1); j++){
            var pt = ch_pattarn(i);
            var nm = ch_number(j);
            card.push(pt+nm);
        }
    }
    card = mix_card(card);

    var pickcard_count = 20;
    var pik_card = new Array();
    for(var l=0; l<pickcard_count/2; l++){

        var rum = Math.floor(Math.random() * card.length);

        while($.inArray(rum, pick_cardnum) != -1){
            rum = Math.floor(Math.random() * card.length);
        }
        pick_cardnum.push(rum);

        pik_card.push(card[rum]);
        pik_card.push(card[rum]);

    }
     pik_card = mix_card(pik_card);

    var output = "";
    for(var r=0; r<pik_card.length; r++){
        output += "<div class='card' data-card='"+pik_card[r]+"'>";
        output += "<img class='front' src=\"../img/"+pik_card[r]+".png\"/>";
        output += "<img class='back' src=\"../img/ZBACK.png\"/>";
        output += "</div>";
    }

    $('.col').append(output);

    setTimeout(cardback_show,3000);
    /*
    * 카드 눌러서 뒤집기
    */
    $('.card').click(function(){
       var type = $(this).attr('data-card-state');
        if(type == 'back'){
              $(this).children('.front').attr('class','front in');
            $(this).children('.back').attr('class','back out');
            $(this).attr('data-card-state','front');
            cardpush($(this).attr('data-card'));
        }else if(type == 'front'){
            $(this).children('.front').attr('class','front out');
            $(this).children('.back').attr('class','back in');
            $(this).attr('data-card-state','back');
        }

    });
});

/*
* 카드 뒤집기
*/
function cardback_show(){
    $('.card').children('.front').attr('class','front out');
    $('.card').children('.back').attr('class','back in');
    $('.card').attr('data-card-state','back');
}
function card_back(){
    $('[data-card='+pick[0]+']').children('.front').attr('class','front out');
            $('[data-card='+pick[0]+']').children('.back').attr('class','back in');
            $('[data-card='+pick[0]+']').attr('data-card-state','back');

            $('[data-card='+pick[1]+']').children('.front').attr('class','front out');
            $('[data-card='+pick[1]+']').children('.back').attr('class','back in');
            $('[data-card='+pick[1]+']').attr('data-card-state','back');
              pick = [];
}
/*
* 카드 추가
*/
function cardpush(card){

    if(pick.length < 2){
     pick.push(card);
    }
    console.log("pick:" + pick);
    console.log("picklen:" + pick.length);
    console.log("첫번째값:" + pick[0]);
    if(pick[1]){
        console.log("두번째값:" + pick[1]);
        if(pick[0]==pick[1]){
            score++;
            pick = [];
        }else{
            setTimeout(card_back,500);


        }
    }

    console.log("score:" + score);
    $('.score').val(score);
}
/*
* 다이아, 하트, 클로버, 스페이스 4가지 패턴 문자로 변환
*/
function ch_pattarn(num){
    switch (num) {
        case 0 : num="D"; break;
        case 1 : num="H"; break;
        case 2 : num="Q"; break;
        case 3 : num="S"; break;
    }
    return num;
}
/*
* 카드의 숫자인 부분은 그대로 리턴, 문자인부분은 문자로 변환
*/
function ch_number(num){
    switch (num) {
        case 1 : num = "A"; break;
        case 11 : num = "J"; break;
        case 12 : num = "Q"; break;
        case 13 : num = "K"; break;
        default : break;
    }
    return num;
}
/*
* 카드를 섞어줌
*/
function mix_card(crd){
    var rum1;
    var rum2;
    var temp;
    for(var i=0; i<100; i++){
        rum1 = Math.floor(Math.random() * crd.length);
        rum2 = Math.floor(Math.random() * crd.length);
        temp = crd[rum1];
        crd[rum1] = crd[rum2];
        crd[rum2] = temp;
    }
    return crd;
}
