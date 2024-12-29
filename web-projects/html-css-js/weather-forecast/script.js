let weather = {
     apikey: "009e682a539a425392b105532241212",
    fetchWeather: function(city) { 
        fetch( "http://api.weatherapi.com/v1/current.json?key=" + this.apikey + "&q=" + city + "&aqi=no" 

        ) 
        .then((response) => { 
            if (!response.ok) { 
                throw new Error("Weather data not available"); 
            } 
            return response.json(); 
        }) 
        .then((data) => this.dataweather(data)) .catch((error) => alert(error.message)); 
    },
    
    dataweather: function(data){
        var {region,country} = data.location;
        var {temp_c,wind_mph,wind_dir,humidity} = data.current;
        var{text,icon,code} = data.current.condition;
        

        document.querySelector(".region").innerText = region + ", " + country;
        document.querySelector(".temp").innerText = temp_c + " °C";
        document.querySelector(".description").innerHTML = text;
        document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
        document.querySelector(".wind").innerText = wind_mph + " mph, " + wind_dir;
        

    },

    search: function(){
        this.fetchWeather(document.querySelector(".search-eng").value);
    }

}

document.querySelector(".searchBtn").addEventListener("click", function() {
    weather.search()
})

document.querySelector(".search-eng").addEventListener("keyup", function(e) {
    if(e.key == "Enter"){
        weather.search()
    }
});



