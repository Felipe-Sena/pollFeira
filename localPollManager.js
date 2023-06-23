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
