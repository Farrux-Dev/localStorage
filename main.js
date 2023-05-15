

// const ism = "salom"

// localStorage.setItem("name" , ism)
// const getname = localStorage.getItem("name")

// console.log(getname)


// const ismlar = ["farrux" , "javohir"]
// localStorage. setItem("name" , JSON.stringify(ismlar))

// const namearr = JSON.parse(localStorage.getItem("name"))
// console.log(namearr)

// const ismlarku = ["salom " , "qalaysan"]
// localStorage.setItem("nima",JSON.stringify(ismlarku))


$(document).ready(function(){

   
    $(".btn").click(()=>{    
   let get = $(".ism").val()
   let set = $(".ismm").val()
   localStorage.setItem( get, set)


   $("button").click(function(){
    $("p").append("<b>Appended text</b>");
  });
  


     
    }) 

 
    $(".btn").click(()=>{    
        let l = $(".ism").val()
        let s = $(".ismm").val()
        $("th").append(l)
        $("td").append(s) 
         }) 
     
         $(".btn").click(()=>{
            
            let g = $("th").append()
            let t = $("td").append()
            $("th").(l)
            $("td").(s) 
             }) 

 })
 


 

  

