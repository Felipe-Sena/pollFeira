/*
------------------------------------------------------------------------------------------------------------
    Copyright Felipe Sena | 2023 | Licenced under the GNU General Public Licence | Read the licence on the LICENCE.txt file
------------------------------------------------------------------------------------------------------------
*/

//because i have no clue how to for loop through json i will just use an array
//contact me if you need changes

let passwords = [
    "86066638311550",
    "35483405229660",
    "40167589642652",
    "52323399746026",
    "37542418524888",
    "26930763317515",
    "48655747820552",
    "10499058075512",
    "91601442410156",
    "66103395136859",
    "88141296564513",
    "99859680846627",
    "20709726814032",
    "93315126138129",
    "73918504421307",
    "23062290346489",
    "54043147432152",
    "45049534867795",
    "93112868972099",
    "89846415595119",
    "35695611794887",
    "69989910443772",
    "65550632514530",
    "94731382883971",
    "44633007127957",
    "59823358719187",
    "35135166361637",
    "12345682678453",
    "12455678876643",
    "61408998175639",
    "14761472485093",
]
let Pword 
if(!localStorage.getItem("Pword"))
{
    localStorage.setItem("Pword", passwords)
}
Pword = localStorage.Pword.split(",")
console.log(Pword)

const failFlashTiming = {
    duration: 400,
    iterations: 1,
  };

  const failFlashAnimFrames = [
    { backgroundColor: "#491c00" },
    { backgroundColor: "#5c0000" },
    { backgroundColor: "#491c00" }
  ];

let inputField = document.getElementById("pInput")
document.addEventListener("keydown",(e)=> {

    switch(e.code)
    {
        case "Enter":
        let pw = inputField.value;
        inputField.value = "";//clears it bhut we saved the pw in memory (i said memory instead ov ariable because i am so sophisiticated)
        if(Pword.indexOf(pw) ===-1)
        {
            inputField.animate(failFlashAnimFrames,failFlashTiming)
            return
        }
        Pword.splice(Pword.indexOf(pw),1)
        localStorage.Pword = Pword
        window.location.href='localPoll.html';
    }
})

