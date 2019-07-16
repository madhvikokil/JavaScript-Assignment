function validation(){

  var unamesecond = document.login.unamesecond.value;
  var pwdsecond = document.login.pwdsecond.value;

  users = localStorage.getItem('users');
  parsedArray = JSON.parse(users);

  var validUser = parsedArray.find(function(user2){
    if(user2.uname === unamesecond && user2.pwd === pwdsecond){
      return true;}
    });

    if(validUser){

      if(sessionStorage){
        // Store the session id by uname
        sessionStorage.setItem('unamesecond' ,unamesecond);
          
        // Retrieve data
        window.open("dashboard.html","_self");
        }
        else{
          alert("Sorry, your browser do not support session storage.");
          }
      }
    
        else{
          alert("Invalid User");
          window.location.reload();
      }
}