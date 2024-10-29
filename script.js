// ========= Part two: Expanding Functionality ===========

let csvData = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";
// let csvData = "Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232";
let result = [];
let tempData = "";
let row = [];
let colCount = 0;

for(let i = 0; i < csvData.length; i++) {
    const data = csvData[i];
    if(data === "\n" || data === ",") {
        colCount++;
        if(data === "\n") break;
    }
}
// console.log(colCount)
for(let j = 0; j < csvData.length; j++) {
    const str = csvData[j];
    // console.log(str)
    if(str === ",") {
        row.push(tempData);
        tempData = "";
    } else if(str === "\n") {
        result.push(row);
        tempData = "";
        row = [];
    } else {
        tempData += str;
    }
}
if(tempData) {
    row.push(tempData);
    result.push(row);
}
// console.log(result)

// ======== Part 3: Transforming Data
// let csvData = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";
// let csvData = "Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232";

let dataStructure = [];
let headerRow = result[0].map(header => header.toLowerCase());
// console.log(headerRow);
for(let k = 1; k < result.length; k++) {
    let rowData = result[k];
    let rowObj = {};
     for(let l = 0; l < headerRow.length; l++) {
        rowObj[headerRow[l]] = rowData[l];
     }
     dataStructure.push(rowObj);
}
console.log(dataStructure)

// ======== Part 4: Sorting and Manipulating Data ==========

dataStructure.pop();
// console.log(dataStructure)
dataStructure.splice(1,0,{ id: "48", name: "Barry", occupation: "Runner", age: "25" }) 
// console.log(dataStructure)
dataStructure.push({ id: "7", name: "Bilbo", occupation: "None", age: "111" })
// console.log(dataStructure)
let sum = 0;
for(let person of dataStructure) {
    if(person.age) {
        sum += parseInt(person.age)
    }
}
let averageAge = sum / dataStructure.length;
console.log(averageAge)

// ======= Part 5: Full Circle ========

let csvResData = "";
let headers = Object.keys(dataStructure[0]);
csvResData += headers.join(",") + "\n";
// console.log(csvResData)
for(let m = 0; m < dataStructure.length; m++) {
    let row = headers.map(header => dataStructure[m][header])
    console.log(row)
}