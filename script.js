

document.getElementById("form1").addEventListener("submit",async function(e){
    e.preventDefault();
    var data = {
        
        name : document.getElementById("firstname").value,
        email : document.getElementById("email").value,
        password:document.getElementById("password").value,
        phone : document.getElementById("number").value,
        state : document.getElementById("state").value,
        city : document.getElementById("City").value,
        country : document.getElementById("Country").value,
        pincode : document.getElementById("Pincode").value,
        Education : document.getElementById("Education").value
    }
    
    try {
        var sentData = await fetch("https://61974899af46280017e7e4ed.mockapi.io/surveyform",{
            method : "POST",
            body : JSON.stringify(data),
            headers : {
                "content-type" : "application/json"
            }
        })
        
    } catch (error) {
        console.log(error);
        
    }
});


document.getElementById("Editbutton").addEventListener("click",async function(e){

    e.preventDefault();
    
    try {
        var editData = await fetch('https://61974899af46280017e7e4ed.mockapi.io/surveyform/15')
        var obj = await data.json();
        console.log(obj);
    } catch (error) {
        console.log(error)
    }

})


document.getElementById("Deletebutton").addEventListener("click",async function(e){
    e.preventDefault();

    alert(" I Have Your Confirmation  For Deleting your details" );

    try {
        var dataDelete = await fetch("https://61974899af46280017e7e4ed.mockapi.io/surveyform/8",{
            method : "DELETE"
        })
    } catch (error) {
        console.log(error);
    }

})
    

