  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCuPnfMAlNzSO2FKXinKGcTHGqbf7EXJY4",
    authDomain: "simple-database-project.firebaseapp.com",
    databaseURL: "https://simple-database-project.firebaseio.com",
    projectId: "simple-database-project",
    storageBucket: "simple-database-project.appspot.com",
    messagingSenderId: "250269273549"
  };
  firebase.initializeApp(config);
  var firestore = firebase.firestore();

  console.log(typeof name);

  saveButton = document.querySelector("#submit_id");
  saveAndAddButton = document.querySelector("#submit_another_id");

  saveAndAddButton.addEventListener("click",function(){
  var nameToSave = name_id.value;
  console.log("logging in to console after getting name as : ",nameToSave); 
  var emailToSave = email_id.value;
  var ageToSave = age_id.value;
  var stateToSave = state_id.value;
  var addressToSave = address_id.value;
  var timeToSave = new Date();
  var photoToSave = fileButton.target.files(0);
  if(validatefunc(nameToSave,emailToSave,ageToSave,stateToSave,addressToSave))
  {
  console.log("I'll be saving "+nameToSave+", "+emailToSave+", "+ageToSave+", "+stateToSave+", "+addressToSave+" to the Firestore");
  var data_entry = "samples/"+nameToSave+"-"+emailToSave;
  const docRef = firestore.doc(data_entry)
  docRef.set({
  name:nameToSave,
  email:emailToSave,
  age:ageToSave,
  state:stateToSave,
  address:addressToSave,
  date:timeToSave,  
  displayPhoto:photoToSave
  }).then(function() {var fr = document.getElementById("frm");
  fr.reset();
  console.log("Contact saved!");
});
}
else
{
}
});



  saveButton.addEventListener("click",function(){
  var nameToSave = name_id.value;
  console.log("logging in to console after getting name as : ",nameToSave); 
  var emailToSave = email_id.value;
  var ageToSave = age_id.value;
  var stateToSave = state_id.value;
  var addressToSave = address_id.value;
  var timeToSave = new Date();
  if(validatefunc(nameToSave,emailToSave,ageToSave,stateToSave,addressToSave))
  {
  console.log("I'll be saving "+nameToSave+", "+emailToSave+", "+ageToSave+", "+stateToSave+", "+addressToSave+" to the Firestore");
  var data_entry = "samples/"+nameToSave+"-"+emailToSave;
  const docRef = firestore.doc(data_entry)
  docRef.set({
  name:nameToSave,
  email:emailToSave,
  age:ageToSave,
  state:stateToSave,
  address:addressToSave,
  date:timeToSave
  }).then(function() {
    location.href = 'second_page.html';
  }).catch(function (error) {
  console.log("Error! :",error);
  });
  }
  else
  {
  }
});

  function validatefunc(name,email,age,state,address){
    if (name.length<10)
    {
      alert('Please enter name with length more than 10!');
        return false;
    }
    else
    if(!(/\w \w/.test(name)))
    {
        alert('Please enter name correctly!');
        return false;
    }
    else
    if(/\d/.test(name))
    {
        alert("Name cannot contain digits");
        return false;
    }

    //checking conditions for email
    var index_of_at = email.indexOf('@');
    if(index_of_at == -1)
    {
        console.log("@ was not found!");
        alert("Please enter a valid email address");
        return false;
    }
    else
    {
            var before_at = email.substring(0,index_of_at);
            var after_at =email.substring(index_of_at+1,email.length);
            var exclaim = console.log(before_at.indexOf('!'));
            var question = console.log(before_at.indexOf('?'));
            var hyphen = console.log(before_at.indexOf('-'));
            if(exclaim>-1 || question>-1 || hyphen>-1)
            { 
                console.log("Failed here-2")
                alert("Please enter a valid email address");
                return false;
            }
            else
            {
              console.log("@ was preswnt in email");
                if((/(\w|\d|.)/).test(before_at))
                {
                   console.log("TEST PASSED AT THIS!!")    
                } 
                else
                {
                console.log("Failed here!");
                alert("Please enter a valid email address");
                return false;
                }
            }
    }

    // checking for valid age
    if((/([^\d])/).test(age))
    {
      console.log("age shall only contain digits");
      alert("age shall only contain digits");
      return false;
    }
    else{
    if(age<0 || age>100){
            console.log("Incorrect Age!");
            alert("Please enter valid integer!");
      }
    if(address.length>0)
    {
      console.log("Age validation passed!");
      }
      else
      {
        console.log("Address is empty");
        alert("Please enter address");
        return false;
      }
    }
    return true; 
  }
