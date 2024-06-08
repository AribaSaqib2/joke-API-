let btn = document.getElementById("btn");
let joke = document.getElementById("joke");
let apiUrl ="https://icanhazdadjoke.com/";

btn.onclick = ()=>{
    fetch(apiUrl,{
        headers :{
            Accept: 'application/json',
            'User-Agent': 'My Library'
        }
    }).then(
        (responce)=>{
            return responce.json();
        }
    ).then(
        (data)=>{
            joke.innerHTML +=`<li> ${data.joke}</li>`
        }
    )
}