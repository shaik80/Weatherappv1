let getcity = document.getElementById("getcity").value;
let displaycity = document.getElementById("displaycity");
let celsius = document.getElementById("celsius");
let info = document.getElementById("info");
let emoji = document.getElementById("emoji");

class weatherdetails{
    
    showdaytime(){
        let now = new Date();
        let day = now.getDay();
        let dayword = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
        let h = now.getHours();
        let m = now.getMinutes();
        let s = now.getSeconds();
        let session ="AM";
        
        if(h == 0){
            h = 12;
          }
          if(h > 12){
            h = h - 12;
            session = "PM";
          }
        let time = dayword[day]+"  "+h+":"+m+": "+s+" "+session;
        document.getElementById("daytime").innerHTML = time;
    }

    getcelsius(){
        let val =[
          {city:"Bengaluru",celsius:"10",info:"partly Clould",img:"⛅"},
          {city:"Delhi",celsius:"20",info:"Sunny",img:"☀️"},
          {city:"Mumbai",celsius:"30",info:"Rain",img:"🌧️"}
        ];
         console.log(val.city)
        }
}

weather = new weatherdetails();
setInterval(weather.showdaytime,1000)