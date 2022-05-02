// write js code here corresponding to index.html
// You should add submit event on the form

document.querySelector("#masaiForm").addEventListener("submit",addMatches)

var arr =JSON.parse(localStorage.getItem("schedule")) || []

function addMatches(){
    event.preventDefault();
    var data = {
        matchNum : masaiForm.matchNum.value,
        teamA :masaiForm.teamA.value,
        teamB : masaiForm.teamB.value,
        date : masaiForm.date.value,
        venue : masaiForm.venue.value,

    }
    arr.push(data)
    console.log(arr)
    localStorage.setItem("schedule",JSON.stringify(arr))
}
