/*
------------------------------------------------------------------------------------------------------------
    Copyright Felipe Sena | 2023 | Licenced under the GNU General Public Licence | Read the licence on the LICENCE.txt file
------------------------------------------------------------------------------------------------------------
*/

//because i have no clue how to for loop through json i will just use an array
//contact me if you need changes

let passwords = ["86066638311550","35483405229660","40167589642652"]
for(let i=0;i<passwords.length;i++)
{
    let pwName = "p" + i.toString()
    let pwA = pwName + "a"
    if(!localStorage.getItem(pwName))
    {
        localStorage.setItem(pwName,passwords[i])
        localStorage.setItem(pwA, "true")
    }
}

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
        switch(pw)
        {
            case localStorage.p0:
                {
                   
                    if(localStorage.p0a == "true")
                    {
                        localStorage.p0a = "false";
                        window.location.href='localPoll.html';
                    }
                    else
                    {
                        inputField.animate(failFlashAnimFrames,failFlashTiming)
                    }
                    break;
                } 
                case localStorage.p1:
                {
                    
                    if(localStorage.p1a == "true")
                    {
                        
                        localStorage.p1a = "false";
                        window.location.href='localPoll.html';
                    }
                    else
                    {
                        inputField.animate(failFlashAnimFrames,failFlashTiming)
                    }
                    break;
                } 
                case localStorage.p2:
                {
                    
                    if(localStorage.p2a == "true")
                    {
                        
                        localStorage.p2a = "false";
                        window.location.href='localPoll.html';
                    }
                    else
                    {
                        inputField.animate(failFlashAnimFrames,failFlashTiming)
                    }
                    break;
                }
                default:
                    {
                        
                        inputField.animate(failFlashAnimFrames,failFlashTiming)
                        break;
                    }
        }
    }
})

