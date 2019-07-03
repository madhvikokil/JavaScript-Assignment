// Registration 
function register() {
        var fname = document.signup.fname.value;
        var lname = document.signup.lname.value;
        var address = document.signup.address.value;
        var pwd = document.signup.pwd.value;
        var uname = document.signup.uname.value;
        var gender = document.querySelector('input[name="gender"]:checked').value; 
        var todoList = new Array();
        var imageone = sessionStorage.getItem("profileSessionKey");
            

            if(fname=="" ||lname =="" ||address=="" ||uname==""||pwd=="" || gender==""){
              alert("Fields should not be blank");
              document.signup.fname.style.border="2px solid red";
              document.signup.lname.style.border="2px solid red";
              document.signup.uname.style.border="2px solid red";
              document.signup.address.style.border="2px solid red";
              document.signup.pwd.style.border="2px solid red";
              return false;
          }
          var firstnameRegex = '^[a-zA-Z]+$';
          var firstnameResult = fname.match(firstnameRegex);

          if(!firstnameResult){
            alert("First name should contain only alphabets");
            document.signup.fname.style.border="2px solid red";
           
            return false;
          }
          else{
            document.signup.fname.style.border="2px solid green";
            
          }

          var lastnameRegex = '^[a-zA-Z]+$';
          var lastnameResult = lname.match(lastnameRegex);

          if(!lastnameResult){
            alert("Last name should contain only alphabets");
            document.signup.lname.style.border="2px solid red";
            return false;
          }

          else{
            document.signup.lname.style.border="2px solid green";
            
          }


          var addressRegex = '^[a-zA-Z]+$';
          var addressResult = address.match(addressRegex);

          if(!addressResult){
            alert("Address...")
            document.signup.address.style.border="2px solid red";
            return false;
          }

          else{
            document.signup.address.style.border="2px solid green";
            
          }


          var usernameRegex =  '^[a-zA-Z]+$';
          var usernameResult = uname.match(usernameRegex);

          if(!usernameResult){
            alert("enter valid username")
            document.signup.uname.style.border="2px solid red";
            return false;
          }

          else{
            document.signup.uname.style.border="2px solid green";
            
          }



          var passwordRegex = "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})";
          var passwordResult = pwd.match(passwordRegex);

          if(!passwordResult){
            alert("username should contains one lowercase ,uppercase, special symbol and number");
            document.signup.pwd.style.border="2px solid red";
            return false;
          }

          else{
            document.signup.pwd.style.border="2px solid green";
            
          }

       

          console.log('here');
        
          var obj={
            'fname':fname,
            'lname':lname,
            'pwd':pwd,'gender':gender,
            'address':address,
            'uname':uname,
           'todoList':todoList,
            'picture':imageone
          
        }

        
         
          var myJSON = JSON.stringify(obj);
          
         if(localStorage.getItem('users')){

          let users = localStorage.getItem('users');
          var parsedArray = JSON.parse(users);
           
          
          
                    const username = parsedArray.find(function(user)
                    {

                      if(user.uname === uname)
                      {
                      return true;}
                    });

                    if (username) 
                    {
                      alert('user is already present');
                    } 
                    
                    else 
                    {
                    parsedArray.push(obj);
                    var parsedJSON = JSON.stringify(parsedArray);
                    localStorage.setItem('users' ,parsedJSON);
                    window.open("login.html","_self");
                    }
       }
       
        else
         {
          var users = new Array();
          users.push(obj);
          var myJSON = JSON.stringify(users);
           localStorage.setItem('users' ,myJSON);
           window.open("login.html","_self");
        }
         
}


function login(){ 
   window.open("login.html","_self");
  }

  function profile_edit(){
    window.open("profile.html","_self");
  }

  function logout(){
    sessionStorage.clear();
     window.open("login.html","_self") ; 
  }


function changeProfilePicture()
      {
      let image = document.getElementById("profilepic").files[0];

      getimgbase64(image);

        function getimgbase64(image)
        {
        let readImg = new FileReader();
        readImg.readAsDataURL(image)

        readImg.onload = function () {
        let profileUrl = readImg.result;
        sessionStorage.setItem("profileSessionKey",profileUrl);
        document.getElementById("profilepicture").src = sessionStorage.profileSessionKey;
        };

        readImg.onerror = function (error) {
        };
        }
}

// Logout
    function logout(){
      sessionStorage.clear();
       window.open("login.html","_self") ; 
    }
    
// Edit Profile
    function profile_edit(){
      window.open("profile.html","_self");
    }
 
// Add element in the todo List
function addElement(){
  
  
  var unamesecond = sessionStorage.unamesecond;
  var users = JSON.parse(localStorage.getItem("users"));

    //search for existing email id
    for(let index=0;index<users.length;index++)
    {
        if(unamesecond==users[index].uname)   // email id found then break
        {
            users[index].todoList.push(todoText);
            todo_add_data=JSON.stringify(users);
            localStorage.setItem("users",todo_add_data);


          
        }
    }
  }
function getIndex(){
      var userRecordArray = JSON.parse(localStorage.getItem("users"));
      var userid = sessionStorage.unamesecond;

      for( var index=0;index<userRecordArray.length;index++){
        if(userRecordArray[index].uname === userid){
        var userid=index;
          
        }
      }
      return userid;
    }

      function mainData(){
        var userRecordArray = JSON.parse(localStorage.getItem("users"));
        var userid = sessionStorage.unamesecond;
      

        for( var index=0;index<userRecordArray.length;index++){
          if(userRecordArray[index].uname === userid){
          var userid=index;
            
          }
        }
        let get_inner_array=userRecordArray[userid].todoList;
      
        return get_inner_array;
}


function dashboard(){
  window.open("dashboard.html","_self");
}


 