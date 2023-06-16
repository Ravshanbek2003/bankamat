let pincode = 1111;
let userPincode = 0;
let balance = 1000000;
let smsCode = 7676;

let counter = 3;

while(counter > 0) {
    userPincode = parseInt(prompt("Parolni kiriting: "));
    if(userPincode === pincode) {
        counter = 3;
        while(true) {
            let choice = parseInt(prompt("Kerakli amalni tanlang:\n1. Hisobni tekshirish\n2. Pul yechish\n3. Pul kiritish\n4. SMS xabar yuborish\n5. PIN-kodni o'zgartirish\n6. Chiqish"));
            switch(choice) {
                case 1:
                    hisobniTekshirish();
                    break;
                case 2:
                    pulYechish();
                    break;
                case 3:
                    pulKiritish();
                    break;
                case 4:
                    smsYuborish();
                    break;
                case 5:
                    pinKodniOzgartirish();
                    break;
                case 6:
                    alert("Dasturdan chiqildi");
                default:
                    alert("Noto'g'ri amal tanlandi");
            }
        }
    } else {
        counter--;
        if(counter > 0) {
            alert(`Noto'g'ri parol kiritildi. ${counter} ta imkoniyat qoldi`);
        } else {
            alert("Sizning hisobingiz bloklandi");
        }
    }
}

function hisobniTekshirish() {
    alert(`Hisobingizdagi jami mablag': ${balance} so'm`);
}

function pulYechish() {
    let summa = parseInt(prompt("Yechiladigan summani kiriting: "));
    let xizmatXaqi = summa / 100;
    let summaKopAyirma = summa + xizmatXaqi;
    if(summaKopAyirma <= balance) {
        balance -= summaKopAyirma;
        alert(`Sizdan ${summaKopAyirma} som yechildi\nXizmat xaqqi: ${xizmatXaqi} so'm\nQoldiq: ${balance} so'm`);
    } else {
        alert("Hisobingizda yetarli mablag' mavjud emas");
    }
}

function pulKiritish() {
    let summa = parseInt(prompt("Kiritiladigan summani kiriting: "));
    let xizmatXaqi = (summa / 100) * 2;
    let kiritiladiganSumma = summa - xizmatXaqi;
    balance += kiritiladiganSumma;
    alert(`Sizning hisobingizga ${kiritiladiganSumma} so'm kiritildi\nXizmat xaqqi: ${xizmatXaqi} so'm\nQoldiq: ${balance} so'm`);
}

function smsYuborish() {
    let telefonRaqam = parseInt(prompt("SMS xabar yuboriladigan telefon raqamini kiriting: "));
    let smsKod = parseInt(prompt("Yuborilgan SMS kodi kiriting: "));
    if(smsKod === smsCode) {
        alert(`SMS xabar ${telefonRaqam} raqamiga muvaffaqiyatli yuborildi`);
    } else {
        smsKod = parseInt(prompt("Noto'g'ri SMS kod kiritildi. Qaytadan kiriting: "));
        if(smsKod === smsCode) {
            alert(`SMS xabar ${telefonRaqam} raqamiga muvaffaqiyatli yuborildi`);
        } else {
            alert("Noto'g'ri SMS kod kiritildi");
        }
    }
}

function pinKodniOzgartirish() {
    let eskiPinKod = parseInt(prompt("Eski PIN-kodni kiriting: "));
}