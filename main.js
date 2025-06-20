  // document.getElementById("registration").addEventListener("submit",function(event){
    function register(){
        document.getElementById("registration").addEventListener("submit",function(event){
        event.preventDefault();
  
       var fullname = document.getElementById("fullname").value;
       var email = document.getElementById("email").value;
       var location = document.getElementById("location").value;
       var gender = document.getElementById("gender").value;
       var distance = document.getElementById("distance").value;
       var price = document.getElementById("price").value;
       var phonenumber = document.getElementById("phonenumber").value;
  
       //var message= fullname + "Email"+email+""+location+""+gender+""+distance;
      // alert(message);

      $.post('ifm.php',{
        fullname:fullname,
        email:email,
        location:location,
        gender:gender,
        distance:distance,
        price:price,
        phonenumber:phonenumber

      },function(data, status){
        window.location.replace('payment.php?id='+email+'&amnt='+price);
        //alert(data);
        var msg =data.split(",");
            var message = "<strong>"+status +":</strong> " +msg[0];
          //  document.getElementById("successMessage").textContent = message;
            document.getElementById("successMessage").innerHTML = message;
            document.getElementById("successMessage").style.display = "block";
              document.getElementById("registration").reset();

             // window.location.href = 'payment.php?id='+email;
            setTimeout(function(){
               document.getElementById("successMessage").style.display = "none";
              //var nm = document.getElementById("beba").value;
             
             }, 8000);

             
      
      });
    
       
      /*  if(status != "success"){
            var message = data;
        document.getElementById("successMessage").textContent = message;
        document.getElementById("successMessage).style.display = "block";
          document.getElementById("registration").reset();
  
        }
        else{
  
       var message = "Thank you, " + fullname + "!You have successfully registared for the " + distance + "marathon. We will send you a confirmation email to " + email +".";
       document.getElementById("successMessage").textContent = message;
       document.getElementById("successMessage").style.display = "block";
        document.getElementById("registration").reset();
  
        setTimeout(function(){
          document.getElementById("successMessage").style.display = "none";
        }, 5000);
       }*/
      //  });
       });
      
      }
      
     function payment(){
        window.location.href = 'payment.php';
       }
         