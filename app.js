// from data.js
var tableData = data;


var tbody =d3.select("tbody");


tableData.forEach((dataReport) => {
   let row = tbody.append("tr");
   Object.entries(dataReport).forEach(([key, value]) => {
     var cell = row.append("td");
     cell.text(value);
   });
 });

 function changeHandler(){
     d3.event.preventDefault();
     console.log(inputText.property("value"));
     var new_tb=tableData.filter(dataReport=>dataReport.datetime===inputvalue);
     displayData(new_tb)
   }


//references to button
var submit=d3.select("#filter-btn");
var inputText=d3.select("#datetime")

// //adding event listeners
// submit.on("change",changeHandler)
// inputText.on("change",changeHandler)


var scores = students.map(student => student.score);
var playersOnTeam = roster.filter(madeCut);
