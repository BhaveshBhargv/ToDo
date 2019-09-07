function add(){

let input = document.getElementById('input').value;
let a = document.createTextNode(input);
let li = document.createElement('li');
li.appendChild(a);
let task = document.getElementById('todo');
if (input === '') {
    alert("Write something to add");
  } else {
    document.getElementById("todo").appendChild(li);
  }
  document.getElementById('input').value = "";
}
