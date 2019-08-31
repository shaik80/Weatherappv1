class Globalclass{
  
} 
class Weatherdetails{
    
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
      let getcity = document.getElementById("getcity").value;
      t displaycity = document.getElementById("displaycity");
      let celsius = document.getElementById("celsius");
      let info = document.getElementById("info");
      let emoji = document.getElementById("emoji");  

        let val =[
            {city:"Bengaluru,Karnataka",celsius:"21",info:"partly Clould",img:"⛅"},
            {city:"Hydrabad,Andhra Pradesh",celsius:"22",info:"partly Clould",img:"⛅"},
            {city:"Chennai,Tamil Nadu",celsius:"32",info:"Sunny",img:"☀️"},
            {city:"Mumbai,Maharashtra",celsius:"27",info:"Rain",img:"🌧️"}
          ];
          val.filter(v => (v.city.includes(getcity)))
             .map(v=> {
                    displaycity.innerHTML = v.city,
                    celsius.innerHTML = v.celsius,
                    info.innerHTML = v.info,
                    emoji.innerHTML = v.img
                      })
                      document.getElementById("C").classList.add("active");
                      document.getElementById("F").classList.remove("active");
      }


      convert(degree) {
        let x;
        let celsius = document.getElementById("celsius");
        let C = document.getElementById('C');
        let F = document.getElementById('F');
        if (degree == 'C') {
          x = (celsius.innerHTML -32)  * 5 / 9;
          celsius.innerHTML = Math.round(x);
          C.classList.add("active");
          F.classList.remove("active");
          console.log(x);
        } 
        else {
          x = (celsius.innerHTML * 9 / 5) + 32;
          celsius.innerHTML = Math.round(x);
          F.classList.add("active");
          C.classList.remove("active");
          console.log(x);
        }
      }
      


      
}

weather = new Weatherdetails();
setInterval(weather.showdaytime,1000)
