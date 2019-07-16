function insertDefaultValues() {

  var userRecordArray=JSON.parse(localStorage.getItem("users"));
  var unamesession=sessionStorage.getItem("unamesecond");
  let imagesession = sessionStorage.getItem("profileSessionKey");

  if(sessionStorage.unamesecond == null){
    window.location.href="login.html";
  }

  for(var i=0;i<userRecordArray.length;i++){
    if(userRecordArray[i].uname==unamesession) {
      userid=i;
      break;
    }
  }
  document.getElementById("profilepicture").src=userRecordArray[userid].picture;
  document.getElementById("f_name").value=userRecordArray[userid].fname; 
  document.getElementById("l_name").value=userRecordArray[userid].lname; 
  document.getElementById("add_ress").value=userRecordArray[userid].address; 
 

    if(userRecordArray[userid].gender == "male") {
    document.getElementsByName("gender")[0].checked = true;
    }
    else if(userRecordArray[userid].gender == "female") {
    document.getElementsByName("gender")[1].checked = true;
    }
  }

  
function changeProfilePicture() {

    let image = document.getElementById("profilepic").files[0];

    getimgbase64(image);

      function getimgbase64(image) {
      let readImg = new FileReader();
      readImg.readAsDataURL(image);

      readImg.onload = function () {
      let profileUrl = readImg.result;
      sessionStorage.setItem("profileSessionKey",profileUrl);
      document.getElementById("profilepicture").src = sessionStorage.profileSessionKey;
      };

      readImg.onerror = function (error) {
      };
      }
}

function enableFields(){

    document.getElementById("f_name").disabled=false; 
    document.getElementById("l_name").disabled=false; 
    document.getElementById("add_ress").disabled=false; 
    document.getElementById("profilepic").disabled=false;


    for(let i=0;i<(document.getElementsByName("gender").length);i++)
    {
        document.getElementsByName("gender")[i].disabled = false;
    }
}

function profileChanges(){
  
    var f_name = document.getElementById("f_name").value;
    var l_name = document.getElementById("l_name").value;
    var add_ress = document.getElementById("add_ress").value;
    var gen_der = document.querySelector('input[name="gender"]:checked').value; 
    var imageone = sessionStorage.getItem("profileSessionKey");
    

    var firstnameRegex = '^[a-zA-Z]+$';
        var firstnameResult = f_name.match(firstnameRegex);

        if(!firstnameResult){
          alert("First name should contain only alphabets");
          document.getElementById("f_name").style.border="2px solid red";
          return false;
          }

        else{
            document.getElementById("f_name").style.border="2px solid green";
          }

          var lastnameRegex = '^[a-zA-Z]+$';
          var lastnameResult = l_name.match(lastnameRegex);

        if(!lastnameResult){
            alert("Last name should contain only alphabets");
            document.getElementById("l_name").style.border="2px solid red";
            return false;
          }

        else{
            document.getElementById("l_name").style.border="2px solid green";
          }

          var addressRegex = '^[a-zA-Z]+$';
          var addressResult = add_ress.match(addressRegex);

        if(!addressResult){
            alert("      Address");
            document.getElementById("add_ress").style.border="2px solid red";
            return false;
          }

        else{
            document.getElementById("add_ress").style.border="2px solid green";
          }

        users = localStorage.getItem('users');
        var parsedUser = JSON.parse(users);
        console.log("array: ", parsedUser);
        console.log("type of-> ", typeof parsedUser);
  
  for( index=0;index<parsedUser.length;index++){
          if(parsedUser[index].uname === sessionStorage.unamesecond){
            console.log(index);
            var itr = index;
            console.log('index', itr);
        }

        document.getElementById("f_name").disabled = true;
        document.getElementById("l_name").disabled = true;
        document.getElementById("add_ress").disabled = true;
        document.getElementById("profilepic").disabled = true;

        for(let i=0;i<(document.getElementsByName("gender").length);i++) {
            document.getElementsByName("gender")[i].disabled = true;
        }
      }
        console.log('index', itr);
  
        parsedUser[itr].fname = f_name;
        parsedUser[itr].lname = l_name;
        parsedUser[itr].address = add_ress;
        parsedUser[itr].gender= gen_der;
        parsedUser[itr].picture= imageone;
        parsedUser = JSON.stringify(parsedUser);
        localStorage.setItem('users',parsedUser);
}
