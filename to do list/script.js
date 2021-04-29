let input = document.getElementById("input");
let button = document.getElementById("button");
let ul = document.querySelector("ul");
let deleteBtn = document.getElementsByClassName("strike");
let line = document.getElementsByClassName("check");
let rem = document.getElementById("all");
var lis = document.querySelectorAll('#list li');

additem = () => {
   let check = document.createElement("input");
   let label = document.createElement("label");
   let li = document.createElement("li");
   let btn = document.createElement("button");


   check.setAttribute("class", "check");
   check.type = "checkbox";
   li.appendChild(check);



   label.htmlFor = "check";
   label.setAttribute("class", "line");
   li.appendChild(label);

   label.appendChild(document.createTextNode(" " + input.value + " "));


   btn.innerHTML = "Remove";
   li.append(btn);
   btn.setAttribute("class", "strike");

   btn.setAttribute("id", "strike");
   btn.setAttribute("onmouseover", "removeitem()");
   btn.setAttribute("onclick", "alert('Removing this Item')");
   ul.appendChild(li);
   input.value = "";
}

rem = () => {
   let x = prompt("⚠⚠Are you sure you want to delete whole list? (Yes/No)⚠⚠");
   if (x === "Yes")
      while (ul.firstChild) ul.removeChild(ul.firstChild);

   else
      alert("Ok not removing, you are safe for now. ＼(ﾟｰﾟ＼)")
}

button.addEventListener("click", add = () => {
   if (input.value.length > 0) {
      additem();
   }
})

input.addEventListener("keypress", add = (event) => {
   if (input.value.length > 0 && event.keyCode === 13) {
      additem();
   }
})

removeitem = () => {
   Array.prototype.slice.call(deleteBtn).forEach(function (item) {

      item.addEventListener("click", function (e) {
         e.target.parentNode.remove()
      });

   })
}





