var config = {
    apiKey: "AIzaSyCuPnfMAlNzSO2FKXinKGcTHGqbf7EXJY4",
    authDomain: "simple-database-project.firebaseapp.com",
    databaseURL: "https://simple-database-project.firebaseio.com",
    projectId: "simple-database-project",
    storageBucket: "simple-database-project.appspot.com",
    messagingSenderId: "250269273549"
  };
  /*firebase.initializeApp(config);*/
      var firestore = firebase.firestore();
      var table = 
     console.log("CALLED!!")
    console.log("CALLED IN");
    const collectionRef2 = firestore.collection("samples/");
    console.log(collectionRef2);
    var coll_docs = firestore.collection("samples");
    /*var query = coll_docs.get().then(function(querySnapshot) {
      querySnapshot.forEach(function(doc) {
        console.log(doc.id + "--" + doc.data());
        console.log(doc.data().address);
          var row = table.insertRow(0);
          var cell1 = row.insertCell(0);
          var cell2 = row.insertCell(1);
      });
    }).catch(function(error) {
      console.log("Error!! " + error);
    });*/
    console.log("1");