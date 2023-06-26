let taskname=document.getElementById("inp")
let todos=document.getElementsByClassName("todos")
let addtask=document.getElementsByClassName('addnewtask')
let blur1=document.getElementsByClassName("parent1")
// let inp=document.getElementById("inp")
let notodo=document.querySelector(".notodo")
let addtask1=document.querySelector(".addnewtask1")
let lux=document.getElementById("addtaskname")
let tex=document.getElementById("inp2")
let back=document.getElementsByClassName("back")
let par=document.getElementsByClassName("parent22")
let todos22=document.getElementsByClassName("todos22")
let topheading=document.getElementsByClassName("topheading")
let flow=document.getElementById("flow")
let count=0
let con=0
let son
let moon
let mo
let a=document.getElementsByClassName("pops")


function addtasks(){
    count++
    con++
    if(count>0){
      notodo.style.display="none"
    }

    addtask[0].style.display="none"
    blur1[0].style.filter="blur(0px)"
       



 let popup=document.createElement("div")
       todos[0].appendChild(popup)
       popup.classList.add("pops")
    popup.setAttribute("id",`pop${con}`)
   

let head=document.createElement("div")
       popup.appendChild(head)
       head.classList.add("heading")
       head.innerHTML=`${inp.value}`
       
head.addEventListener("click",(event)=>{
      back[0].style.display="block"
      back[0].style.top="120px"
       topheading[0].style.display="block"
        let parentDiv = event.target.parentNode;
        let parentId = parentDiv.id;
            moon=document.getElementById(`${parentId}`)
        
   
   for(let i=0;i<a.length;i++){

    a[i].style.display="none" 
   }
   moon.style.display="block"  
  topheading[0].innerHTML=`${head.innerText}`

  todos[0].style.justifyContent="space-around"

    back[0].addEventListener("click",()=>{
      back[0].style.display="none"
        topheading[0].style.display="none"
        for(let i=0;i<a.length;i++){

          a[i].style.display="block" 
         }
         todos[0].style.justifyContent="space-between"
            }) 

  flow.addEventListener("click",()=>{
    blur1[0].style.display="block"
              par[0].style.display="none" 
              todos[0].appendChild(popup)
              popup.classList.add("pops")
           popup.setAttribute("id",`pop${con}`)  
  })

    })

let sep=document.createElement("hr")
      popup.appendChild(sep)
       sep.classList.add("sept")

let del=document.createElement("div")
      popup.appendChild(del)
       del.classList.add("delet")


del.addEventListener("click",()=>{
        count--
        popup.remove()
           
        })
      
        let innerdiv = document.createElement("div")
        popup.appendChild(innerdiv)
        innerdiv.classList.add("innerdiv")

adding=document.createElement("div")

            popup.appendChild(adding)
            adding.classList.add("adding")
            adding.innerHTML="+"
            adding.setAttribute("id",`imp${con}`)
            
adding.addEventListener("click",(event)=>{
                blur1[0].style.filter="blur(20px)"
                addtask1.style.display="block"
                
                let parentDiv = event.target.parentNode;
                let parentId = parentDiv.id;
                son=document.getElementById(`${parentId}`).children
                mo=son[3]
                
                tex.setAttribute("placeholder","Add New Item")
               })
               

}



lux.addEventListener("click",()=>{
  
    blur1[0].style.filter="blur(0px)"
    addtask1.style.display="none"
  let whattodo=document.createElement("div")
  let whattodotask=document.createElement("p")
  let done=document.createElement("button")

mo.appendChild(whattodo)
whattodo.appendChild(whattodotask)
whattodo.appendChild(done)

whattodo.classList.add("whattodo")
whattodotask.classList.add("whattodotask")
done.classList.add("doneit")

whattodotask.innerHTML=`${tex.value}`
done.innerHTML="Mark Done"


done.addEventListener("click",()=>{
     whattodotask.style.textDecoration ="line-through"
     done.style.display = "none";
     whattodotask.style.marginLeft = "55px"
     whattodotask.style.color="red"
})

})

let b=document.getElementsByClassName("flower")
b[0].addEventListener("click",()=>{
  back[0].style.display="none"
        topheading[0].style.display="none"
        for(let i=0;i<a.length;i++){

          a[i].style.display="block" 
         }
         todos[0].style.justifyContent="space-between"
        
  
})






 function clo(){
    addtask1.style.display="none"
     addtask[0].style.display="none"
     blur1[0].style.filter="blur(0px)"
 }
 
 
 
 function show(){
  back[0].style.display="none"
  topheading[0].style.display="none"
     blur1[0].style.filter="blur(20px)"
     addtask[0].style.display="block"
 }