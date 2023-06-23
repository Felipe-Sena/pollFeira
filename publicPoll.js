const firebaseConfig = {

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
  const yes = db.ref("votes/Yes")
  const no = db.ref("votes/No")

  function submit(choice)
{
    switch(choice)
    {
        case 'Y':
            {
                //console.log(yes)
                hideSubmission()
                break;
            }
        case 'N': 
            {
                localStorage.localNo = parseInt(localStorage.localNo) + 1
                hideSubmission()
                break;
            } 
    }
}

function hideSubmission()
{
 thanksMate.style.display = "block"   
}

mainRef.on('child_added', (snapshot) => {
  const newPost = snapshot.val();
  console.log(newPost.Yes)
});