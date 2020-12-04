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

    for(var k=0; k<card.length; k++){
        console.log("card_"+K+":"+card[K]);
    }

});

function ch_pattarn(num){
    switch (num) {
        case 0 : num="D"; break;
        case 1 : num="H"; break;
        case 2 : num="Q"; break;
        case 3 : num="S"; break;
    }
    return num;
}
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
