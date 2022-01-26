function ButClick(){
    
    var nameD = document.getElementById("nameD").value;
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var city = document.getElementById("city").value;
    var mailIndex = document.getElementById("mailIndex").value;
    var phoneNumber = document.getElementById("phoneNumber").value;

 

    var numHome = document.getElementById("numHome").value;
    var numApartment = document.getElementById("numApartment").value;
    var street = document.getElementById("street").value;

   whatsAppHref = "https://api.whatsapp.com/send?phone=79280608063&text=Страна : Россия "+" %0AИмя: " +nameD+" %0AФамилия: "+firstName+" %0AОтчество: "+lastName+" %0AНаселённый пункт: "+city+ "%0AУлица:" +street+ "%0AДом: "+numHome+"%0AКвартира: "+numApartment+"%0AПочтовый индекс: "+mailIndex+" %0AНомер телефона: "+phoneNumber;

    
    
    if ((nameD && firstName && lastName && city && mailIndex && phoneNumber && numHome && street && numApartment) == ""){
        document.getElementById('comtext').innerHTML = "Заполните все поля!"; 
    }
    else{ 
        window.location.assign(whatsAppHref); 
    }
    
}
function GetHrefComments(){
    window.location.assign("https://www.instagram.com/stories/highlights/18165329167126444/");
}
function GetHrefInstagram(){
    window.location.assign("https://www.instagram.com/jilbab.sestram/");
}
function GetWhatsApp(){
    var n = document.getElementById("SelectMyLove").options.selectedIndex;
    var txt = document.getElementById("SelectMyLove").options[n].text;
    whatsAppHref = "https://api.whatsapp.com/send?phone=79280608063&text=Ассаламу Алейкум ! Хочу оформить заказ на \""+txt+"\"";

    window.location.assign(whatsAppHref); 
}
function GetTelegram(){

    var telegramHref = "https://t.me/jilbabsestram";
    window.location.assign(telegramHref); 
}