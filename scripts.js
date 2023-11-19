
//değişkenler
let input = document.getElementById("input")
let buton = document.getElementById("buton")
let buton1 = document.getElementById("buton1")
let p = document.getElementById("p")
//localstorage a kaydet
buton.addEventListener("click",function(){
    localStorage.setItem("input",input.value)
    p.textContent = input.value
})
//sayfa yenilendiği zaman değer kaybolmasın
window.addEventListener("load",function(){
    let deger = localStorage.getItem("input")
    input.value = deger
    p.textContent = deger
})
//kopyalama işlemi
function copyTextToClipboard() {
      let textToCopy = input.value;
      navigator.clipboard.writeText(textToCopy)
    }

    document.getElementById('buton1').addEventListener('click', copyTextToClipboard);
