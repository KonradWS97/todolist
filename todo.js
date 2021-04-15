let przycisk=document.getElementById('dodaj')
let todoli=document.getElementById('lista')
// let check=document.getElementById('done')
let tresclisty=document.getElementById('input')

przycisk.addEventListener('click',function(){
    // if(tresclisty.value="")
    // {
    //     console.log("kurcze napisz cos zanim dodasz")
    // }
    // else{
    console.log("działa!")
    var eliki= document.createElement('p')
    var przyciskCheck=document.createElement('button')
    var przyciskUsuwajacy=document.createElement('button')
    eliki.innerHTML=tresclisty.value
    var wartoscli=tresclisty.value
    // przyciskCheck.innerHTML= "check"
    przyciskUsuwajacy.innerHTML= "   delete"
    // przyciskCheck.innerHTML="  done!"
    todoli.appendChild(eliki).appendChild(przyciskUsuwajacy)
    // todoli.appendChild(przyciskCheck)
    var pole=document.getElementById('input')
    // przyciskCheck.style.display="inline-block"
    przyciskUsuwajacy.style.display="inline-block"
    pole.value=""

        przyciskCheck.addEventListener('click', function(){
            eliki.style.color="white"
            eliki.innerText=wartoscli+"    done!!!"
            todoli.appendChild(przyciskUsuwajacy)
            
        })
        przyciskUsuwajacy.addEventListener('click', function(){
            eliki.innerHTML=""
            przyciskUsuwajacy.style.display="none"
            przyciskCheck.style.display="none"

        } )
    // }
})