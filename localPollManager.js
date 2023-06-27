/*
------------------------------------------------------------------------------------------------------------
    Copyright Jonathan Liu | 2023 | Licenced under the GNU General Public Licence | Read the licence on the LICENCE.txt file
------------------------------------------------------------------------------------------------------------
*/


let yesb = document.getElementById("btn0")
let nob = document.getElementById("btn1")
let thanksMate = document.getElementById("thanksMate")
let lYes = 0
let lNo = 0


// FIREBASE CONFIG REMOVED

  firebase.initializeApp(firebaseConfig);
  const db = firebase.database();
  const mainRef = db.ref("votes")
  
  mainRef.get().then((snapshot) => {
    if (snapshot.exists()) {
        Yes = snapshot.val().lYes.Value;
        No = snapshot.val().lNo.Value;
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
                lYes++
                db.ref("votes/lYes").set(
                    {
                        Type:"lYes",
                        Value:lYes
                    }
                )
                hideSubmission()
                break;
            }
        case 'N': 
            {
                lNo++
                db.ref("votes/lNo").set(
                    {
                        Type:"lNo",
                        Value:lNo
                    }
                )
                hideSubmission()
                break;
            } 
    }
}

mainRef.on('child_changed', (snapshot) => {
    const newPost = snapshot.val();
    if(newPost.Type == "Yes" || newPost.Type == "No")
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

mainRef.on('child_added', (snapshot) => {
    const newPost = snapshot.val();
    if(newPost.Type == "Yes" || newPost.Type == "No")
    {
        return;
    }
    let valu = newPost.Value;
    eval(newPost.Type + "=" + valu); //this is so fire trucking weird
});
