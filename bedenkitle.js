var boy;
var agirlik;
function hesapla(){
    boy=document.querySelector("#boy").value;
    agirlik=document.querySelector("#agirlik").value;
    var hesapladık=(agirlik/(boy*boy))*10000
    if(hesapladık<18){
        alert("zayıfsiniz")
    }
    else if(hesapladık>18 && hesapladık<=24){
        alert("normal agırlıktasiniz :)")
    }
    else if(hesapladık>24 && hesapladık<29){
        alert("kilolu :(")
    }
    else if(hesapladık>29 && hesapladık<35){
        alert("1. derece obezite:(")
    }
    else if(hesapladık>35 && hesapladık<39){
        alert("2. derece obezite:(")
    }
}