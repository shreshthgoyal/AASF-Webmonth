const container = document.querySelector(".container");
const input = document.getElementById("input");
const namer=document.getElementById("namer");
const mail=document.getElementById("mailer");
let array = [];
let card;

window.onload = function(){
alert("Please select anyone or both of the checkboxes before searching");}

input.addEventListener("keyup", (e) => {
    const ftar = e.target.value.toLowerCase();
   const filtered = array.filter(
        (value) => {
            if(namer.checked)
            return (
            value.name.toLowerCase().includes(ftar));
            else if(mail.checked)
            return(
                value.email.toLowerCase().includes(ftar)
            );

            else if(namer.checked && mail.checked)
            return (
                value.name.toLowerCase().includes(ftar) || value.email.toLowerCase().includes(ftar)
            );            
        }
        );

        
        const str = filtered.map ((filtered) => {
            
                return `<div class="card"><div class="name">Name</div><div class="name-content">${filtered.name}</div><div class="email">Email</div><div class="email-content">${filtered.email}</div></div>`;
        })
        .join('');
        container.innerHTML=str;
        
        
});


fetch("http://jsonplaceholder.typicode.com/users")
  .then((data) => {
    return data.text();
  })
  .then((result) => {
     array = JSON.parse(result);
    array.forEach(ele => { 
        card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML =`<div class="name">Name</div><div class="name-content">${ele.name}</div><div class="email">Email</div><div class="email-content">${ele.email}</div>`;
    
       container.appendChild(card);
      
    });
    });

    

  
