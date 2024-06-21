let TbodyTr = document.querySelectorAll("tbody tr");
let TheadBtn = document.querySelectorAll("thead tr button");
let TbodyBtn = document.querySelectorAll("tbody tr button");
let modal = document.querySelector(".modal");
let btn = document.querySelectorAll(".modal button ");
let icon=document.querySelector(" .modal i");
TheadBtn.forEach((item, index1) => {
        item.addEventListener("click", () => {
            // console.log(item)
            // console.log(item.innerHTML)
            let b= item.innerHTML
            TbodyTr.forEach((element) => {
                if(b=="i/e"){
                    if(element.children[index1 + 2].children[0].innerHTML=="d/e")
                    {element.children[index1 + 2].children[0].innerHTML = b
                        element.children[index1 + 2].children[0].classList.add("element1")
                    }
                    else{
                    element.children[index1 + 2].children[0].innerHTML =  element.children[index1 + 2].children[0].innerHTML;
                    }
                }
               else{
                if(element.children[index1 -1].children[0].innerHTML=="d/e")
                {
                    element.children[index1 -1].children[0].innerHTML = b;
                    element.children[index1 -1].children[0].classList.add("element2")
                }
              
                else{
                element.children[index1 -1].children[0].innerHTML =  element.children[index1 -1].children[0].innerHTML
               }
               
            } 
        })
    })
    })
let a;
TbodyBtn.forEach((element1) => {
    element1.addEventListener("click", () => {
            a=element1;
            if(a.innerHTML !="d/e"){
                modal.style.display="none"
                alert("artiq qiymet daxil etmisiniz")
            }
            else{
               modal.style.display="block"
            }   
 })
})
btn.forEach((element2) => {
    element2.addEventListener("click", () => {
        TheadBtn.forEach(element3=>{
            if(a.innerHTML=="d/e"){
                a.innerHTML = element2.innerHTML;
                a.classList.add(element2.className);
                modal.style.display="none"
            }  
            if(a.innerHTML==element2.innerHTML){
                a.innerHTML!=element3.innerHTML;
            }  
        })
         
        
    })
})
icon.addEventListener("click",()=>{
    modal.style.display="none";
})