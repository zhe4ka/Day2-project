document.getElementById("gridItem").addEventListener("click", addRow)
document.getElementById("gridItem").addEventListener("click", addColumn)


function addRow(){
    x=document.getElementById("grid-container").createElement("div").setAttribute("id","grid-item");
    x.append("grid-container");
}