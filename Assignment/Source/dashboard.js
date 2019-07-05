function loadData(){
    var todoname = document.getElementById("todoname").value;
    var category = document.getElementById("category").value;
    var duedate = document.getElementById("duedate").value;
    var setremainder = document.getElementById("setremainder").value;
    var addtodonote = document.getElementById("addtodonote").value;
    //var isdone = document.getElementById("isdone").value;
    var public = document.querySelector('input[name="ispublic"]:checked').value; 
    

    document.getElementById("savechanges").style.display="none";


    var unamesecond = sessionStorage.unamesecond;
    var userRecordArray=JSON.parse(localStorage.getItem("users"));

    for( var index=0;index<userRecordArray.length;index++){
      if(userRecordArray[index].uname === unamesecond){
        var userid=index;

      }
    }


    let get_inner_array=userRecordArray[userid].todoList;
    if(get_inner_array.length === 0)
    {
        let s=document.createElement("tr");
        var node = document.createTextNode("no todos");
        s.appendChild(node);
        let data=document.getElementById("output");
        //data.appendChild(s);
    }
    else
    {
    for(let i=0;i<get_inner_array.length;i++)
    {
    
      var li=document.createElement("tr");
      
        
          var s = "<tr><td><input type=checkbox name=deleteclass></td>"+
                      "<td>"+get_inner_array[i].todoname+"</td>"+
                    "<td>"+get_inner_array[i].category+"</td>"+
                    "<td>"+get_inner_array[i].duedate+"</td>"+
                    "<td>"+get_inner_array[i].setremainder+"</td>"+
                    "<td>"+get_inner_array[i].addtodonote+"</td>"+
                    "<td>"+get_inner_array[i].isdone+"</td>"+
                    "<td>"+get_inner_array[i].ispublic+"</td>"+
                    "<td><input type=button class=edit value=edit onclick=editElement("+i+")></td></tr>";
                      li.innerHTML=s;
                     

        document.getElementById("bodytable").appendChild(li);

    }
  }
}

function editElement(itr){
  console.log('index->', itr);
    var userRecordArray = JSON.parse(localStorage.getItem("users"));
    sessionStorage = sessionStorage.unamesecond;
    //var check_boxes = document.getElementsByName("deleteclass");
    var index = getIndex();

    if(userRecordArray[index].todoList[itr].ispublic == "yes")
    {
    document.getElementsByName("ispublic")[0].checked = true;
    }
    else if(userRecordArray[index].todoList[itr].ispublic == "no")
    {
    document.getElementsByName("ispublic")[1].checked = true;
    }


    for(count = 0;count<userRecordArray[index].todoList.length;count++){
    
    //sessionStorage.setItem("index",count);
    document.getElementById("todoname").value = userRecordArray[index].todoList[itr].todoname;
    document.getElementById("category").value = userRecordArray[index].todoList[itr].category;
    document.getElementById("duedate").value = userRecordArray[index].todoList[itr].duedate;
    document.getElementById("setremainder").value = userRecordArray[index].todoList[itr].setremainder;
    document.getElementById("addtodonote").value = userRecordArray[index].todoList[itr].addtodonote;
    //document.getElementById("ispublicr").value = userRecordArray[index].todoList[count].ispublic;
    //document.getElementById("isdone").value = userRecordArray[index].todoList[count].isdone;
    document.getElementById("addchanges").style.display="none";
    document.getElementById("savechanges").style.display="inline-block";
    document.getElementById("deletechanges").style.display="none"; 
    document.getElementById("addchanges").style.display="none";  

   //saveElement();
   localStorage.setItem("newindex",itr);
   return itr;
    }



  
  }

function saveElement(){

  //var itr = editElement();
  var todoname2 = document.getElementById("todoname").value;
  var category2 = document.getElementById("category").value;
  var duedate2 = document.getElementById("duedate").value;
  var setremainder2 = document.getElementById("setremainder").value;
  var ispublic2 = document.querySelector('input[name="ispublic"]:checked').value; 
  var addtodonote2 = document.getElementById("addtodonote").value;
  
  var userRecordArray = JSON.parse(localStorage.getItem("users"));
  var itr = JSON.parse(localStorage.getItem("newindex"));
  //let indexloc=sessionStorage.index;

  var index = getIndex();

  for(var i=0;i<userRecordArray.length;i++){
  userRecordArray[index].todoList[itr].todoname = todoname2;
  userRecordArray[index].todoList[itr].category = category2;
  userRecordArray[index].todoList[itr].duedate = duedate2;
  userRecordArray[index].todoList[itr].setremainder = setremainder2;
  userRecordArray[index].todoList[itr].ispublic = ispublic2;
  userRecordArray[index].todoList[itr].addtodonote = addtodonote2;

  

  if(userRecordArray[index].todoList[itr].ispublic == "yes")
  {
  document.getElementsByName("ispublic")[0].checked = true;
  }
  else if(userRecordArray[index].todoList[itr].ispublic == "no")
  {
  document.getElementsByName("ispublic")[1].checked = true;
  }

  parsedUser = JSON.stringify(userRecordArray);
  localStorage.setItem('users',parsedUser);
  window.location.reload();
  }
}

function deleteElement(){
  
  var userRecordArray = JSON.parse(localStorage.getItem("users"));
  var arraydelete = document.getElementsByName("deleteclass");
  var index = getIndex();
  
  for(var count=(userRecordArray[index].todoList.length-1);count>=0;count--)
  {
      if(arraydelete[count].checked === true)
      { console.log(arraydelete);
          userRecordArray[index].todoList.splice(count,1);
          
      }
       console.log(arraydelete);
       
  }
  localStorage.setItem("users",JSON.stringify(userRecordArray));	
  window.location.reload();

}

function markAsDone(){
  var userRecordArray = JSON.parse(localStorage.getItem("users"));
  sessionStorage = sessionStorage.unamesecond;
  var check_boxes = document.getElementsByName("deleteclass");
  var index = getIndex();

  for(var count=(userRecordArray[index].todoList.length-1);count>=0;count--)
  
  
  if (check_boxes[count].checked === true){
    userRecordArray[index].todoList[count].isdone = "done";
}


localStorage.setItem("users",JSON.stringify(userRecordArray));	
window.location.reload();
}


function search(){
    var userArray = mainData();
    var filteringthearrayarray = new Array();
    console.log("heee");
      if(document.getElementById("categorylist").value ==="personal")
      
      {
        console.log("noooo");
      filteringthearray=userArray.filter(function(category1){
      return(category1.category=== "personal");
      })


      let a=document.getElementById("bodytable");
      let deleteChild=a.lastElementChild;
        while(deleteChild)
        {
        a.removeChild(deleteChild);
        deleteChild=a.lastElementChild;
        } 

  for (var counter = 0; counter<filteringthearray.length;counter++) 
        {
        var list=document.createElement("tr");
        var row= "<tr id=row-"+counter+"><td><input type=checkbox name=deleteTodo id=ch-"+counter+"></input></td><td>"
        + filteringthearray[counter].todoname + "</td><td>"
        + filteringthearray[counter].category + "</td><td>"
        + filteringthearray[counter].duedate+"</td><td>" 
        + filteringthearray[counter].setremainder+"</td><td>" 
        + filteringthearray[counter].addtodonote+"</td><td>"
        +filteringthearray[counter].isdone+"</td><td>"
        +filteringthearray[counter].ispublic+"</td></tr>"

        list.innerHTML=row;
        let tableHead=document.getElementById("bodytable");
        tableHead.appendChild(list);

        }
  }

  else if(document.getElementById("categorylist").value ==="office"){
    console.log("noooo");
    filteringthearray=userArray.filter(function(category1){
  return(category1.category=== "office");
  })


  let a=document.getElementById("bodytable");
  let deleteChild=a.lastElementChild;
    while(deleteChild)
    {
    a.removeChild(deleteChild);
    deleteChild=a.lastElementChild;
    } 

    for (var counter = 0; counter<filteringthearray.length;counter++) 
      {
      var list=document.createElement("tr");
      var row= "<tr id=row-"
      + counter+"><td><input type=checkbox name=deleteTodo id=ch-"+counter+"></input></td><td>"
      + filteringthearray[counter].todoname + "</td><td>" 
      + filteringthearray[counter].category + "</td><td>"
      + filteringthearray[counter].duedate+"</td><td>" 
      + filteringthearray[counter].setremainder+"</td><td>"
      + filteringthearray[counter].addtodonote+"</td><td>"
      + filteringthearray[counter].isdone+"</td></tr>";

      list.innerHTML=row;
      let tableHead=document.getElementById("bodytable");
      tableHead.appendChild(list);

      }
    }

    else if(document.getElementById("categorylist").value ==="home"){
      console.log("noooo");
      filteringthearray=userArray.filter(function(category1){
    return(category1.category=== "home");
    })


    let a=document.getElementById("bodytable");
    let deleteChild=a.lastElementChild;
      while(deleteChild)
      {
      a.removeChild(deleteChild);
      deleteChild=a.lastElementChild;
      } 

    for (var counter = 0; counter<filteringthearray.length;counter++) 
      {
      var list=document.createElement("tr");
      var row= "<tr id=row-"+counter+"><td><input type=checkbox name=deleteTodo id=ch-"
      + counter+"></input></td><td>"+filteringthearray[counter].todoname + "</td><td>" 
      + filteringthearray[counter].category + "</td><td>"
      + filteringthearray[counter].duedate+"</td><td>" 
      + filteringthearray[counter].setremainder+"</td><td>"
      + filteringthearray[counter].addtodonote+"</td><td>"
      +filteringthearray[counter].isdone+"</td><td>"
      +filteringthearray[counter].ispublic+"</td></tr>"

      list.innerHTML=row;
      let tableHead=document.getElementById("bodytable");
      tableHead.appendChild(list);

      }
    }

    else if(document.getElementById("categorylist").value === "done"){
      filteringthearray=userArray.filter(function(category1){
        return(category1.isdone === "done");
      })

      let a=document.getElementById("bodytable");
      let deleteChild=a.lastElementChild;
        while(deleteChild)
        {
        a.removeChild(deleteChild);
        deleteChild=a.lastElementChild;
        } 
  
      for (var counter = 0; counter<filteringthearray.length;counter++) 
        {
        var list=document.createElement("tr");
        var row= "<tr id=row-"+counter+"><td><input type=checkbox name=deleteTodo id=ch-"
        + counter+"></input></td><td>"+filteringthearray[counter].todoname + "</td><td>" 
        + filteringthearray[counter].category + "</td><td>"
        + filteringthearray[counter].duedate+"</td><td>" 
        + filteringthearray[counter].setremainder+"</td><td>" 
        + filteringthearray[counter].addtodonote+"</td><td>"
        + filteringthearray[counter].isdone+"</td><td>"
        +filteringthearray[counter].ispublic+"</td></tr>"

        list.innerHTML=row;
        let tableHead=document.getElementById("bodytable");
        tableHead.appendChild(list);
  
        }
      
    }

    else if(document.getElementById("categorylist").value === "pending"){
      filteringthearray=userArray.filter(function(category1){
        return(category1.isdone === "pending");
      })

      let a=document.getElementById("bodytable");
      let deleteChild=a.lastElementChild;
        while(deleteChild)
        {
        a.removeChild(deleteChild);
        deleteChild=a.lastElementChild;
        } 
        console.log("hello");
      for (var counter = 0; counter<filteringthearray.length;counter++) 
        {
          console.log("bye");
        var list=document.createElement("tr");
        var row= "<tr id=row-"+counter+"><td><input type=checkbox name=deleteTodo id=ch-"
        + counter+"></input></td><td>"+filteringthearray[counter].todoname + "</td><td>" 
        + filteringthearray[counter].category + "</td><td>"
        + filteringthearray[counter].duedate+"</td><td>" 
        + filteringthearray[counter].setremainder+"</td><td>"
        + filteringthearray[counter].addtodonote+"</td><td>"
        + filteringthearray[counter].isdone+"</td><td>"
        + filteringthearray[counter].ispublic+"</td></tr>"

        list.innerHTML=row;
        let tableHead=document.getElementById("bodytable");
        tableHead.appendChild(list);
  
        }
      
    }

   // else if(){}
}

 function searchByName()
{
    var title=document.getElementById("search_name").value;
    var userRecordArray=mainData();
    var filteringthearray = [];
     a=document.getElementById("bodytable");
    var deleteChild=a.lastElementChild;

    if(userRecordArray.length===0)
    {
        let newEle=document.createElement("tr");
        var node=document.createTextNode("no todos");
        newEle.appendChild(node);
        userTable.appendChild(newEle); 
    }

    for(var counter=0;counter<userRecordArray.length;counter++)
    {
        if(userRecordArray[counter].todoname==title)
        {
            filteringthearray.push(userRecordArray[counter]);

        }

    }

    while(deleteChild)
    {
        a.removeChild(deleteChild);
        deleteChild=a.lastElementChild;
    }      
                
    for (var counter = 0; counter<filteringthearray.length;counter++) 
    {
        var list=document.createElement("tr");
        var row= "<tr id=row-"+counter+"><td><input type=checkbox name=deleteTodo id=ch-"
        + counter+"></input></td><td>"+filteringthearray[counter].todoname + "</td><td>" 
        + filteringthearray[counter].category + "</td><td>"
        + filteringthearray[counter].duedate+"</td><td>" 
        + filteringthearray[counter].setremainder+"</td><td>"
        + filteringthearray[counter].addtodonote+"</td><td>"
        + filteringthearray[counter].isdone+"</td><td>"
        + filteringthearray[counter].ispublic+"</td></tr>"

        list.innerHTML=row;
        let tableHead=document.getElementById("bodytable");
        tableHead.appendChild(list);
        
    }


    
}


function filterByDate(){
  
    var startdate = document.getElementById("startdate").value;
    var enddate = document.getElementById("enddate").value;
    
    var newsdate = new Date(startdate);
    var newedate = new Date(enddate);

    var myarray = mainData();
    var filteringthearray = myarray.filter(function(time){
      return (new Date(time.duedate).getTime() >= newsdate.getTime() && 
      new Date(time.duedate).getTime() <= newedate.getTime())
    })
  
  

    let a=document.getElementById("bodytable");
    let deleteChild=a.lastElementChild;
      while(deleteChild)
      {
      a.removeChild(deleteChild);
      deleteChild=a.lastElementChild;
      }
      
      for (var counter = 0; counter<filteringthearray.length;counter++) 
      {
        console.log("bye");
      var list=document.createElement("tr");
      var row= "<tr id=row-"+counter+"><td><input type=checkbox name=deleteTodo id=ch-"
      +counter+"></input></td><td>"+filteringthearray[counter].todoname + "</td><td>" +
      filteringthearray[counter].category + "</td><td>"+ filteringthearray[counter].duedate+"</td><td>" 
      + filteringthearray[counter].setremainder+"</td><td>" + filteringthearray[counter].addtodonote+
      "</td><td>"+filteringthearray[counter].isdone+"</td><td>"+
      filteringthearray[counter].ispublic+"</td></tr>"

      list.innerHTML=row;
      let tableHead=document.getElementById("bodytable");
      tableHead.appendChild(list);

      }
    
  }
  

  function addtodo(){

    var todoname = document.getElementById("todoname").value;
    var category = document.getElementById("category").value;
    var duedate = document.getElementById("duedate").value;
    //document.getElementById('input').setAttribute("min", '2013-12-9');
    var setremainder = document.getElementById("setremainder").value;
    var addtodonote = document.getElementById("addtodonote").value;
   // var isdone = document.getElementById("isdone").checked ? 'done' : 'pending';
    var ispublic = document.querySelector('input[name="ispublic"]:checked').value; 

    document.getElementById("savechanges").style.display="none";
    
    if(todoname=="" || addtodonote=="" ||duedate=="" || setremainder==""){
      alert("Fill the fields");
      return false;
    }
    

    var todoobj={
      'todoname':todoname,'category':category ,'duedate':duedate,
      'setremainder':setremainder,'addtodonote':addtodonote, 'isdone':"pending",
      'ispublic':ispublic
    }

    var unamesecond = sessionStorage.unamesecond;
    var userRecordArray=JSON.parse(localStorage.getItem("users"));

    for( var index=0;index<userRecordArray.length;index++){
      if(userRecordArray[index].uname === sessionStorage.unamesecond){
        console.log(index);
        var itr = index;
        console.log('index', itr);
      }
    }


    var storage = userRecordArray[itr].todoList;
    for(var i=0;i<storage.length;i++){
      
      var tr = "<tr><td>"+storage[i].todoname+"</td>"+
      "<td>"+storage[i].category+"</td>"+
      "<td>"+storage[i].duedate+"</td>"+
      "<td>"+storage[i].setremainder+"</td>"+
      "<td>"+storage[i].addtodonote+"</td>"+
      "<td>"+storage[i].isdone+"</td>"+
      "<td>"+storage[i].ispublic+"</td></tr>"


    }
   window.location.reload();
    var tr = document.createElement("tr");
    var t = document.createTextNode(todoobj);
    tr.append(t);
   


    for(var i=0;i<userRecordArray.length;i++){
      if(unamesecond==userRecordArray[i].uname)   // email id found then break
      {

        userRecordArray[i].todoList.push(todoobj);
          todo_add_data=JSON.stringify(userRecordArray);
          localStorage.setItem("users",todo_add_data);
      }
    
    }
  }

