const handleSubmit =(event)=>{

    event.preventDefault();

    const name = document.getElementById('name')
    
    if(name.value.trim()=== ''){
        const nameError = document.getElementById('nameError') //<span>
        nameError.innerHTML = "Name is required*"
        nameError.style.color = 'red'
        //console.log('Name is required')
        name.style.border = '1px solid red'
    }
    else{
        const nameError = document.getElementById('nameError') //<span>
        nameError.innerHTML = ""
        const nameValue = document.getElementById('nameValue')
        nameValue.innerHTML = name.value
        name.style.border = '1px solid green'
    }
}