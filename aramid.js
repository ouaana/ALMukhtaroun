

function imagePre() {
    var mainimg = document.getElementById("image12").files;
    if(mainimg.lenght>0){
        var fileReader= new FileReader();

        fileReader.onload = function (event) {
            document.getElementById("previewimg").setAttribute("src",event.target.result);
            console.log(event );
            
        };
        fileReader.readAsDataURL(mainimg[0]);
    }
}

console.log("working")

const closetab =document.querySelector("#closetab")
const post = document.querySelector(".post")
closetab.addEventListener("click", ()=>{
    document.querySelector(".posting").style.display="none"
})
post.addEventListener("click", ()=>{
    document.querySelector(".posting").style.display="block"
    
})


console.error("Network error");