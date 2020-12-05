$(document).ready(function(){

    var card = new Array();
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
    for(var l=0; l<card.length; l++){
        console.log(card[l]);
    }
});
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
    for(var i=0; i<3; i++){
        rum1 = Math.floor(Math.random() * crd.length);
        rum2 = Math.floor(Math.random() * crd.length);
        temp = crd[rum1];
        crd[rum1] = crd[rum2];
        crd[rum2] = temp;
    }
    return crd;
}
