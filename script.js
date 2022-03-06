var maleName=['Kwasi','Kwadwo','Kwabena','Kwaku','Yaw','Kofi','Kwame']
var femaleName=['Akosua','Adwoa', 'Abenaa','Akua','Yaa','Afua','Ama']
function findName(){
  var year= document.getElementById("year").value
  var yy=parseInt(year.substr(2,4))
  var month= document.getElementById("month").value
  var mm=parseInt(month)
  var day= document.getElementById("day").value
  var dd=parseInt(day)
  var cc=parseInt(year.substr(0,2))
var birthDay=Math.abs(parseInt(((cc/4) -2*cc-1) + ((5*yy/4) ) + ((26*(mm+1)/10))+ dd)%7);
var gender=document.getElementById("gender").value
}
// if(dd <=0 || dd >31 || dd ==""){
//   alert("Invalid date")
// } else if(mm <=0 || mm>12 || mm ==""){
// alert("Invalid Month")}
// else if(year <=0 || year ==""){
// alert("Invalid Year")}
// else if (gender ==="male"){
//   alert("Your Akan Name is:" + maleName[birthDay])
// }else if (gender ==="female"){
//   alert("Your Akan Name is:" +femaleName[birthDay])
// }


// }
// alert("hey you")



