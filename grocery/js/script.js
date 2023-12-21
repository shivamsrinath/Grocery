let light = document.getElementById("light")
let dark = document.getElementById("dark")
let head = document.getElementById("head")
let logo = document.getElementById("spanlogo")
const menubtn = document.getElementById('menubtn')
const nav2 = document.getElementById('nav2')
const first = document.getElementById('first')
const last = document.getElementById('last')
const middle_one = document.getElementById('middle_one')
const middle_second = document.getElementById('middle_second')
const poster = document.getElementById('poster')
const popularproduct = document.getElementById('popular-product') 
const category = document.getElementById('category')
const bundleproduct = document.getElementById('bundleproduct ')
const client = document.getElementById('client')
const foot = document.getElementById('foot')


dark.addEventListener('click', function (){
    document.body.style.background = "black"
    document.body.style.color = " white"
    head.style.background = "black"
    logo.style.color = "white"
    dark.style.display = "none"
    light.style.display = "flex"
    nav2.style.background ="black"
    nav2.style.color ="white"
    first.style.border = ".2rem soild white"
    last.style.border = ".2rem soild white"
    middle_one.style.border = ".2rem soild white"
    middle_second.style.border = ".2rem soild white"
})

light.addEventListener('click', function(){
    document.body.style.background = "white"
    document.body.style.color = "black"
    head.style.background = "white"
    logo.style.color = "black"
    dark.style.display = "flex"
    light.style.display = "none"
    nav2.style.background ="white"
    nav2.style.color ="black"
})




menubtn.addEventListener('click', ()=>{
    if(first.style.width != "0rem"){
        first.style.width = "0rem"
        middle_one.style.transform = "rotate(45deg)"
        middle_one.style.transition = "1s"
        middle_second.style.transform = "rotate(135deg)"
        middle_second.style.transition = "1s"
        first.style.transition = "1s"
        last.style.transition = "1s"
        nav2.style.top = "0vh"
        nav2.style.position = "fixed"
        nav2.style.transition = "1s"
        last.style.width = "0rem"
   
        


    }else if(  first.style.width = "0rem"){
        first.style.width = "2rem"
        middle_one.style.transform = "rotate(0deg)"
        middle_second.style.transform = "rotate(180deg)"
        nav2.style.top = "-100vh"
        last.style.width = "2rem"
    
    }
})