const firebaseConfig = {

    //create a shared server NOW!!
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
  let Yes = 0
  let No = 0
  let lYes = 0
  let lNo = 0
  

mainRef.on('child_changed', (snapshot) => {
    const newPost = snapshot.val();
    let valu = newPost.Value;

   // console.log(valu);
    eval(newPost.Type + "=" + valu);
    drawPie()
});


mainRef.on('child_added', (snapshot) => {
    const newPost = snapshot.val();
    let valu = newPost.Value;
    eval(newPost.Type + "=" + valu); //this is so fire trucking weird
    drawPie()
});

const canvas = document.getElementById('myCanvas');
const pieHolder = document.getElementById("pieHolder")
const ctx = canvas.getContext('2d');
let centerX = canvas.width / 4
let altCenterX = canvas.width - centerX
const centerY = canvas.height / 2;
const radius = 70;



const dictionaryBullShi = 
{
    0:"SIM",
    1:"NÃO",

}

function drawPie()
{
    //main circles init
    let startingPoint = 0;
    let newStartingPoint = 0;
    for(let i=0;i<2;i++)
    {
        let choice = centerX
        let text = "PÚBLICO"
        if(i==1)
        {
            choice = altCenterX
            text = "LOCAL"
        }
        ctx.beginPath();
        ctx.arc(choice, centerY, radius, 0, 2 * Math.PI, false);
        ctx.fillStyle = 'gray';
        ctx.fill();
        ctx.lineWidth = 5;
        ctx.strokeStyle = '#003300';
        ctx.stroke();
        //local vs public
ctx.save() //this is because we don't have built in text rotation (get to it js developer)
ctx.translate(choice,centerY+radius*2)
ctx.fillStyle = "white"
ctx.font = radius / 2 + "px Arial";
ctx.fillText(text,0,0);
ctx.restore()
    }
   
    
   
    //end of cricle init
    let numeratorArr = [Yes,No,lYes,lNo]

for(let i=0;i<numeratorArr.length;i++) //draw percentages
{
    let choice = altCenterX
    ctx.fillStyle = '#72c84d';
    let numerator = numeratorArr[i]
    let denominator = (lYes+lNo)
    if(i < 2)
    {
        denominator = (Yes+No)
        choice = centerX
    }
    
    if(i%2!=0)
    {
        ctx.fillStyle = '#db6262'
    }
    ctx.beginPath()
    ctx.moveTo(choice,centerY)
    newStartingPoint = startingPoint + Math.PI * 2 * (numerator / denominator)
    ctx.arc(choice, centerY, radius, startingPoint,  newStartingPoint, false);
    ctx.fill();
    ctx.save() //this is because we don't have built in text rotation (get to it js developer)
    ctx.translate(choice,centerY)
    ctx.rotate(newStartingPoint)
    ctx.fillStyle = "white"
    ctx.font = radius / 6 + "px Arial";
    let text = Math.round((numerator/denominator)*100).toString() + "% " + dictionaryBullShi[i%2]
    ctx.fillText(text,0,0);
    startingPoint = newStartingPoint
    ctx.restore()
}



}
/*
ctx.beginPath()
ctx.arc(canvas.width-centerX, centerY, radius, 0, 2 * Math.PI, false);
ctx.fillStyle = 'gray';
ctx.fill();
ctx.lineWidth = 5;
ctx.strokeStyle = '#003300';
ctx.stroke();

*/


  