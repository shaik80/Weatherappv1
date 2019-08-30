let now = new Date();
let day = now.getDay();
let dayword = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
let h = now.getHours();
let m = now.getMinutes();
let session ="AM";

showdaytime();
function showdaytime(){
    if(h == 0){
        h = 12;
      }
      if(h > 12){
        h = h - 12;
        session = "PM";
      }
    let time= dayword[day]+"  "+h+":"+m+" "+session;
    
    console.log(time);
}
