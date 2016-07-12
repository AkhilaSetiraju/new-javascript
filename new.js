var fs = require("fs");

var data = fs.readFileSync('India2011.csv');
var stringData=data.toString();

//console.log(stringData);
var arrayOne= stringData.split('\r\n');
//console.log(arrayOne);

var header=arrayOne[0].split(',');

var cnt_age;
for(var i=0;i<header.length;i++)
{
 if(header[i]=='Age-group')
 {
   cnt_age=i;
 }
}
var cnt_literate;
for(var i=0;i<header.length;i++)
{
 if(header[i]=='Literate - Persons')
 {
   cnt_literate=i;
 }
}

//console.log(header[cnt]);

var noOfRow=arrayOne.length;
var noOfCol=header.length;

var jArray=[];
var final_obj={};

var i=0,j=0;
for (i = 1; i < noOfRow-1; i++) {

   for (j = 0; j< noOfCol; j++) {

       var myNewLine=arrayOne[i].split(',');

       //jArray.push( '{'+header[j]+':'+myNewLine[j]+'}');
   };
   final_obj[header[cnt_age]]=myNewLine[cnt_age];
   final_obj[header[cnt_literate]]=myNewLine[cnt_literate];

   jArray.push(final_obj);
   final_obj={};
};
//writing !!
console.log( jArray);
var file='data.json';
var obj= JSON.stringify(jArray);
fs.writeFileSync(file,obj);
