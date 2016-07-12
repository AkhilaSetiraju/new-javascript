var fs = require("fs");

var data = fs.readFileSync('India2011.csv');

var stringData=data.toString();

//console.log(stringData);
var rows= stringData.split('\r\n');

var header=rows[0].split(',');

var cnt_age,cnt_code,cnt_lit,cnt_total;
cnt_area = header.indexOf('Area Name');
cnt_age = header.indexOf('Age');
cnt_lit = header.indexOf('Literate - Persons');
cnt_total = header.indexOf('Total/ Rural/ Urban');

var final_obj={};
var jArray=[];


for (var i = 1; i < rows.length - 1; i++)
 {

 var line=rows[i].split(',');
 if(final_obj[line[cnt_area]]==undefined)
 {
   final_obj[line[cnt_area]]=0;
 }
 if(line[cnt_age] !='0-6' && line[cnt_age] !='All ages' && line[cnt_total]=='Total')
 {
   console.log(parseInt(line[cnt_lit]));
   final_obj[line[cnt_area]]+=parseInt(line[cnt_lit]);
 }

};

console.log(final_obj);

//Write
jArray.push(final_obj);
console.log( jArray);
var file='data.json';
var obj= JSON.stringify(jArray);
fs.writeFileSync(file,obj);
