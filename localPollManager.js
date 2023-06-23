/*
------------------------------------------------------------------------------------------------------------
    Copyright Jonathan Liu | 2023 | Licenced under the GNU General Public Licence | Read the licence on the LICENCE.txt file
------------------------------------------------------------------------------------------------------------
*/


let yes = document.getElementById("btn0")
let no = document.getElementById("btn1")
let thanksMate = document.getElementById("thanksMate")

if (!localStorage.localYes) {
    localStorage.localYes = 0
}
if (!localStorage.localNo) {
    localStorage.localNo = 0
}

function submit(choice)
{
    switch(choice)
    {
        case 'Y':
            {
                localStorage.localYes = parseInt(localStorage.localYes) + 1
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