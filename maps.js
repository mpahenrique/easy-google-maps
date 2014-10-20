var map;
var googleMaps = {
    initialize: function(latitude, longitude){
        var center = new google.maps.LatLng(latitude, longitude);
        var mapOptions = {
            center: center,
            zoom: 1,
            title: "My Local",
            disableDefaultUI: true,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        var divMapElement = document.getElementById("mapa");
        
        map = new google.maps.Map(divMapElement, mapOptions);
        
        new google.maps.Marker({
            position: center,
            map: map
        });
         
    },
    pin: function(latitude, longitude){
        var position = new google.maps.LatLng(latitude, longitude);
        if(latitude == "" || longitude == ""){
            alert("Please, fill the fields correctly!");
            return;
        }
        new google.maps.Marker({
            position: position,
            map: map
        }); 
    }
}