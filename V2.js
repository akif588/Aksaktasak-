const z = 1234
let x = 0
let deneme = 0
sardir()
function sardir() {
    let cevap = prompt("lütfen şifre girin.")
    let sayi = parseInt(cevap)
    if (z === sayi){
        alert("şifre doğru bulamacayı cözdün sırada 2. bulmaca var.!")
    } else{
       alert("Şifre yanlış")
        deneme += 1
         if (deneme == 3){
             bitir()
           function bitir() {
            alert("Deneme hakınız bitmiştir lutfen sayfayı yenileyin!")
            bitir()
          }
        }
       sardir()
   }
}
basla1()
function basla1() {
   let y = prompt("Lütfen şifre girin.")
    if (y == null){
      alert("bulamacayı cözdün sırada 3. bulmaca var.!")
    } else {
        alert("şifre yanlış")
        basla1()
    }
    
}
basla2();
function basla2() {
    prompt("Lütfen şifre girin.");
    x++;
    if (x === 5){
        alert("Bulmacayı çözdün!");
    } else {
        alert("Şifre yanlış");
        basla2();
    }
}
let b = prompt("gitmek istediğniz Url eyer gizli bölmeye gitmek isterseniz lutfen iptal yernine dokunun")
if (b != null){
  window.location.href = b
} else {
    alert("gizli bölme açıldı")
}
