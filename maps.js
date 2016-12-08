'use strict';

class GoogleMapsSample{}

GoogleMapsSample.prototype.createMap = function (elmId, latitude, longitude, options){

    if(!elmId || typeof latitude == 'undefined' || typeof longitude == 'undefined') { 
        throw new Error('Missing required arguments.'); 
        return;
    }

    var mapOptions = {
        center: new google.maps.LatLng(latitude, longitude),
        zoom: 8,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    mapOptions.extend(options);
   
    return new google.maps.Map(document.getElementById(elmId), mapOptions);
}

GoogleMapsSample.prototype.pin = function (map, latitude, longitude, options){

    if(!map || !latitude || !longitude) { 
        throw new Error('Missing required arguments.'); 
        return;
    }

    var position = new google.maps.LatLng(latitude, longitude)
    ,   markerOptions = {
        position: position,
        map: this.map
    };
    markerOptions.extend(options);

    return new google.maps.Marker(markerOptions);
}

/*
    GoogleMapsSample.prototype.customMethod = function(map){
        // your custom method here
    }
*/

Object.prototype.extend = function(obj){
    if(typeof obj !== 'object') return this;
    for (var attrname in obj) { this[attrname] = obj[attrname]; }
    return this;
}

if(this.module && this.module.exports){
    module.exports = new GoogleMapsSample();
} else {
    window.googleMapsSample = new GoogleMapsSample();
}