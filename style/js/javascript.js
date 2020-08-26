function increment(id,prix,subtot)
{
let inp=document.getElementById(id)
let val=inp.value
val++
inp.value=val
let sub=document.getElementById(subtot)
sub.innerHTML=`${val*prix}`


}
function decrement(id,prix,subtot,items) {
    let x=document.getElementById(id)
    let y=x.value
    if (y>1) {
        y--
        x.value=y
    let z=document.getElementById(subtot)
    z.innerHTML=`${prix*y}`
    }
    //else{
    //     let w=document.getElementById(items)
    //     w.parentNode.removeChild(w)
        
    //     }
}
function deleteitem(itms,id,sp) {
    let o=document.getElementById(itms)
      
        let x=document.getElementById(id)
        
        let y=x.textContent
        let z=document.getElementById(sp)
        let w=z.textContent
        z.innerHTML=`${parseInt(w)-parseInt(y)}`
        
       
        o.parentNode.removeChild(o)

}
function likeheart(x){
    let y=document.getElementById(x)
    if(y.style.color=='black'){
    y.style.color='red'
    y.style.fontSize='50px'    
}
    else{
        y.style.color='black'
        y.style.fontSize='14px'
    }
}
function totprices(id1,id2,id3,sp) {
    let y=document.getElementById(sp)
    x=y.textContent
    parseInt(x)
    let p1=document.getElementById(id1)
    let val1=p1.textContent
    let p2=document.getElementById(id2)
    let val2=p2.textContent
    let p3=document.getElementById(id3)
    let val3=p3.textContent
   y.textContent=`${parseInt(val1)+parseInt(val2)+parseInt(val3)}`
}
