// Add your code here

function submitData(name, email){
    return fetch("http://localhost:3000/users",  {
        method:"POST",
        headers:{
            "content-Type":"application/json",
            "Accept":"application/json"
        },
        body:JSON.stringify({
            name, email
        })
    })
    .then((res)=>{
        return res.json();
    })
    .then((user)=>{
        document.body.innerHTML = user["id"]
    })
    .catch((error)=>{
        return error;
    })
}
