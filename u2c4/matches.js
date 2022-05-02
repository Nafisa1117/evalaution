// write js code here corresponding to matches.html

var container = document.querySelector("tbody")

var arr2 = JSON.parse(localStorage.getItem("schedule")) 

var matchArr = JSON.parse(localStorage.getItem("Matches")) || []

displayData(arr2)

function displayData(data){

    data.forEach(function (elem){

        var tr = document.createElement("tr")

        var th1 = document.createElement("th")
        th1.innerText = elem.matchNum

        var th2 = document.createElement("th")
        th2.innerText = elem.teamA

        var th3 = document.createElement("th")
        th3.innerText = elem.teamB

        var th4 = document.createElement("th")
        th4.innerText = elem.date

        var th5 = document.createElement("th")
        th5.innerText = elem.venue

    

        var th6 = document.createElement("th")
        th6.innerText = "Favourites"
        th6.style.color="blue"
        th6.style.cursor = "pointer";

        th6.addEventListener("click",function(){
            fevrt(elem)
        })
       tr.append(th1,th2,th3,th4,th5,th6)
        container.append(tr)

    })
}

function fevrt(elem){
    matchArr.push(elem)

    localStorage.setItem("favourites",JSON.stringify(matchArr))
}

