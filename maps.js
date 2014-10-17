var map;
var googleMaps = {
    initialize: function (latitude, longitude) {
        var center = new google.maps.LatLng(latitude, longitude);  
        var mapOptions = {
            center: center,
            zoom: 15,
            title: 'Meu Local',
            disableDefaultUI: true,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        map = new google.maps.Map(document.getElementById("maps"),
            mapOptions);
        new google.maps.Marker({
            position: new google.maps.LatLng(latitude, longitude),
            map: map
        });
    },
    makeMarker: function (latitude, longitude){
            var marker = new google.maps.Marker({
                position: new google.maps.LatLng(latitude, longitude),
                title: 'My Marker',
                icon: '',
                map: map
            });
            google.maps.event.addListener(marker, 'click', function() {
                //anything here
                console.log(this.position.B);
                console.log(this.position.k);
            });
    }
}
