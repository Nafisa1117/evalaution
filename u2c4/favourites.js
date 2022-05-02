// write js code here corresponding to favourites.html


var container = document.querySelector("tbody")

var arr3 = JSON.parse(localStorage.getItem("favourites")) 



displayData(arr3)

function displayData(data){

    data.forEach(function (elem,index){

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





        var th6 = document.querySelector("th")
        th6.innerText = "Delete"
        th6.style.cursor = "pointer"
        th6.addEventListener("click",function(){
            deleteItem(elem,index);
        })
    

       
        tr.append(th1,th2,th3,th4,th5,th6)
        container.append(tr)
    })



}

function deleteItem(elem,index){
console.log(arr3)
arr3.splice(index,1);
localStorage.setItem("favourites",JSON.stringify(arr3))
window.location.reload();

}