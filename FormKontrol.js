function GirisKontrol() {
    if (document.Giris.kullaniciAdi.value == "ilkrrkck" && document.Giris.sifre.value == "123456") {
        alert("HOŞGELDİNİZ");
        window.open("Hakkımda.html");
    }
    else {
        alert("Kullanıcı Adı veya Şifre uyuşmuyor. Tekrar deneyiniz!")
    }

};

function iletisimKontrol(form) {
    var isim = form.isim.value;
    var soyisim = form.soyisim.value;
    var email = form.email.value;
    var mesaj = form.mesaj.value;
    var atpos = email.indexOf("@");
    var dotpos = email.lastIndexOf(".");

    if (isim.length == 0) {
        document.getElementById("isimKontrol").innerHTML = "Adı kısmı boş olamaz";
        return false;
    }
    else {
        document.getElementById("isimKontrol").innerHTML = "Geçerli";
    }
    if (soyisim.length == 0) {
        document.getElementById("soyisimKontrol").innerHTML = "Soyadınız kısmı boş olamaz";
        return false;
    }
    else {
        document.getElementById("soyisimKontrol").innerHTML = "geçerli";
    }
    if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= email.length) {
        document.getElementById("emailKontrol").innerHTML = "Lütfen Uygun email adresi giriniz";
        return false;
    }
    else {
        document.getElementById("emailKontrol").innerHTML = "email geçerli";
    }
    if (mesaj.length < 10 || mesaj.length > 100) {
        document.getElementById("mesajkontrol").innerHTML = "En az 10 karakter gerekli";
        return false;
    }
    else {
        document.getElementById("mesajkontrol").innerHTML = "geçerli";

    alert("yorum gönderildi");
    return true;
  }
};
