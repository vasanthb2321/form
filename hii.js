document.getElementById('myform').addEventListener("Register",(event))
    event.preventDefault();
    var form={
        Name:document.getElementById(Name).value,
        EmailID:document.getElementById(EmailID).value,
        

    };
    console.log(form);