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
            console.log(data)
            }
          })
    
      
    
    })
})