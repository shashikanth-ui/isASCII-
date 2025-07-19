let uniText = document.querySelector(".unicode");
let asciiText = document.querySelector(".ascii");
let inputText = document.querySelector(".textfield");
let check = document.querySelector(".submit");
let asci = "";
let unicode = "";

check.addEventListener("click",()=>{
    if (inputText.value.length > 0){
        let a = inputText.value;
        for(let i=0; i<a.length; i++){
            if(a.charCodeAt(i)>127){
                unicode+=a[i];
            }else{
                asci+= a[i];
            }
        }
        asciiText.innerText = `ASCII : ${asci}`;
        uniText.innerText = `UNICODE : ${unicode}`;
    }
})