const firebaseConfig = {

    // GHUB secret?
    apiKey: "AIzaSyCBSAoSHq0PTORSpGHANTvAhWEuSJXr4cM",

    authDomain: "pollfeirapub.firebaseapp.com",

    databaseURL: "https://pollfeirapub-default-rtdb.firebaseio.com",

    projectId: "pollfeirapub",

    storageBucket: "pollfeirapub.appspot.com",

    messagingSenderId: "254381617251",

    appId: "1:254381617251:web:b0529533e2aa1a3754c856",

    measurementId: "G-JW6EE1M0DY"

  };

  firebase.initializeApp(firebaseConfig);
  const db = firebase.database();
  const mainRef = db.ref("votes")
  let Yes
  let No

  // Used for initialization, WON'T SYNC REAL TIME

  mainRef.get().then((snapshot) => {
    if (snapshot.exists()) {
        Yes = snapshot.val().Yes.Value;
        No = snapshot.val().No.Value;
    } else {
        console.log("Oops!");
    }
  }).catch((error) => {
    console.error(error);
  });


  function submit(choice)
{
    switch(choice)
    {
        case 'Y':
            {
                
                Yes++
                db.ref("votes/Yes").set(
                    {
                        Type:"Yes",
                        Value:Yes
                    }
                )
                hideSubmission()
                break;
            }
        case 'N': 
            {
                No++
                db.ref("votes/No").set(
                    {
                        Type:"No",
                        Value:No
                    }
                )
                hideSubmission()
                break;
            } 
    }
}

// Used for synchronization
mainRef.on('child_changed', (snapshot) => {
    const newPost = snapshot.val();
    if(newPost.Type == "lYes" || newPost.Type == "lNo")
    {
        return;
    }
    let valu = newPost.Value;

   // console.log(valu);
    eval(newPost.Type + "=" + valu);
});

function hideSubmission()
{
 thanksMate.style.display = "block"   
}

/*
mainRef.on('child_added', (snapshot) => {
    const newPost = snapshot.val();
    if(newPost.Type == "lYes" || newPost.Type == "lNo")
    {
        return;
    }
    let valu = newPost.Value;
    eval(newPost.Type + "=" + valu); //this is so fire trucking weird
}); //errors + laggy
*/
