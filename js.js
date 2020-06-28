$(document).ready(function () {

    var apiKey =  "f32d5b17f425f318c7f3a1cba88f2ccc";

    //funcion for submit button
    $("#submit").click(function (event) { 
       event.preventDefault();
      
        
        var cityName = $("#inputBox").val();

        var queryUrl = "https://api.openweathermap.org/data/2.5/weather?q=" +
        cityName + "&appid=" + apiKey;
    
        // ajax get request
        $.ajax({
            url: queryUrl,
            method: "GET",
            success:function(data) {
                forcastRe(data)
            console.log(data)
            }
          })
          // function to send city names to search history
          function searchHis() {
              var listDiv = $("#listGroup");
              var a = $("<a>");
              a.text(cityName)
              a.addClass("list-group-item list-group-item-action");
              listDiv.prepend(a);
          }
          searchHis()
          // grabs information about weather
          function forcastRe(data) {
             var cast = $("#forcast");
             var p = $("<p>");
             p.text(data.weather[0].description);
             cast.append(p);
          }
          /* function to save cities to localstorage
          localStorage.setItem("WeatherName",JSON.stringify(data)*/
          
          
         

    })
})