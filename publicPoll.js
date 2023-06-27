if(localStorage.hasVoted && !localStorage.admin)
{
    hideSubmission() //ideally let's make this either redirect to a "you have already voted" page or make a popup but a popup may be
    //insecure but then again that insecurity is only caused by someone altering local storage requires code knowledge anyways
    //we're going to hae to REMOVE FROM PROD this localstorage.admin thing
}

// FIREBASE CONFIG REMOVED

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
    localStorage.hasVoted = 1 //value doesn't matter dw
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
