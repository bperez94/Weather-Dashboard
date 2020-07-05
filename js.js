$(document).ready(function () {

    var apiKey =  "f32d5b17f425f318c7f3a1cba88f2ccc";

    //funcion for submit button
    $("#submit").click(function (event) { 
       event.preventDefault();
      
        
        var cityName = $("#inputBox").val();

        var queryUrl = "https://api.openweathermap.org/data/2.5/weather?q=" +
        cityName + "&appid=" + apiKey;
    
        // ajax get request(single day)
        $.ajax({
            url: queryUrl,
            method: "GET",
            success:function(data) {
                forcastRe(data)
            console.log(data);
            }
          })
        // uv index api 
        var queryUrl2 = "http://api.openweathermap.org/data/2.5/uvi?" + 
        "appid=" + apiKey + cityName;
        console.log(queryUrl2);  
          // function to send city names to search history
          function searchHis() {
              var listDiv = $("#listGroup");
              var a = $("<a>");
              a.text(cityName)
              a.addClass("list-group-item list-group-item-action");
              listDiv.prepend(a);
            /*function to save cities to localstorage
                localStorage.setItem("cities",JSON.stringify(cityName));
                var cityStorage = localStorage.getItem("cities");
                saves data but need it to populate city names searched */
          
          }
          searchHis()
          // grabs information about weather
          function forcastRe(data) {
            // section for sky
             var cast = $("#forcast");
             var p = $("<p>");
             p.text(data.wind.speed);
             cast.append(p);
            // section for humidity
            var hum = $("#humidity");
            var P1 = $("<p1>");
            P1.text(data.main.humidity);
            hum.append(P1);
            // section for tempurature
            var temp = $("#temp");
            var p2 = $("<p2>");
            p2.text(data.main.temp);
            temp.append(p2);
            // section for weather icon
            var icon = $("#icon");
            var p3 = $("<p3>");
            p3.text(data.weather[0].icon);
            icon.append(p3);
          }
         
          
         

    })
})