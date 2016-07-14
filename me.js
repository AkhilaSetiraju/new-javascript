var fs= require('fs');
var data= fs.readFileSync('India2011.csv');

var count_area,count_age, count_lit, count_total;
var obj={};
var obj2={};
var jArray=[];
var jArray1=[];
 var i=0,j=0;
 var stringData=data.toString();
 var arrayOne= stringData.split('\r\n');
 var header= arrayOne[0].split(',');
 count_area = header.indexOf('Area Name');
 count_age = header.indexOf('Age-group');
 count_lit = header.indexOf('Literate - Persons');
 count_total = header.indexOf('Total/ Rural/ Urban');

 for (i = 1; i < arrayOne.length-1; i++) {
   
      var line=arrayOne[i].split(',');
      if((line[count_age] != '0-6') && (line[count_age] != 'All ages') && (line[count_total] == 'Total'))
      {
        obj[header[count_area]]=line[count_area];
        obj[header[count_age]]=line[count_age];
        obj[header[count_lit]]+=parseInt(line[count_lit]);
        jArray.push(obj);

      }
      }
console.log(jArray);
