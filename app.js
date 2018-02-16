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
  }).then(function() {var fr = document.getElementById("frm");
  fr.reset();
  console.log("Contact saved!");
});
});

  saveButton.addEventListener("click",function(){
  var nameToSave = name_id.value;
  console.log("logging in to console after getting name as : ",nameToSave); 
  var emailToSave = email_id.value;
  var ageToSave = age_id.value;
  var stateToSave = state_id.value;
  var addressToSave = address_id.value;
  var timeToSave = new Date();
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
  });
