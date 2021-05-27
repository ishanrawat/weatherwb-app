




const weatherForm=document.querySelector('form')
const search = document.querySelector('input')
const messageOne=document.querySelector('#error')
// messageOne.textContent='hello'
weatherForm.addEventListener('submit',(e)=>{
    e.preventDefault()

    const location=search.value;
    fetch('/weather?address='+location).then((response)=>{
    response.json().then((data)=>{
        if(data.error){
            messageOne.textContent='error wrong location'
        }
        else{
            messageOne.textContent=data.forecast
        
            console.log(data)
            }
             
    
    })

})
})