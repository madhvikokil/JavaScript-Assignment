// Create a "close" button and append it to each list item
/*var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

// Create a new list item when clicking on the "Add" button
function addElement() {
 
  var li = document.createElement("li");
  var inputValue = document.getElementById("giveInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("giveInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  
  }
}*/

function addElement(){
  var todoObj={
    'uname':uname,'todo':todo
    }

    var myString = JSON.stringify(todoObj);
         if(localStorage.getItem('todo')){


    let todo = localStorage.getItem('todo');
    var parsedtodo = JSON.parse(todo);
  }

  else{
var todo = new Array();
todo = localStorage.getItem('todo');
    parsetodo = JSON.parse(todo);
  }
}
  
// session cleared
function logout(){
  sessionStorage.clear();
   window.open("login.html","_self") ; 
}

function profile_edit(){
  window.open("profile.html","_self");
}

function ToDo(uname){
  this.uname = uname;
}

var todos = new Array();




  


