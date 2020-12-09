manader = new Array(12);

manader[0] = "Januari";
manader[1] = "Februari";
manader[2] = "Mars";
manader[3] = "April";
manader[4] = "Maj";
manader[5] = "Juni";
manader[6] = "Juli";
manader[7] = "Augusti";
manader[8] = "September";
manader[9] = "Oktober";
manader[10] = "November";
manader[11] = "December";


dagar = new Array(7);

dagar[1] = "Måndag";
dagar[2] = "Tisdag";
dagar[3] = "Onsdag";
dagar[4] = "Torsdag";
dagar[5] = "Fredag";
dagar[6] = "Lördag";
dagar[0] = "Söndag";


datum = new Date()

dagen = datum.getDay()
dag = datum.getDate()
manad = datum.getMonth()//1
år = datum.getYear()
if(år<1000){år=år+1900} // .getyear() är årets år - 1900 för det blev problem med 2000 talet

console.log(år);

 
document.writeln(dagar[dagen] + " den " + dag + " " + manader[manad] + " " + år) //4
//-->