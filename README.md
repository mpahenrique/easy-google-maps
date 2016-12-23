# Easy Google Maps

Google maps made simple.
With this library you'll can use simple methods that allows to create quickly google maps. You can also create custom methods to specific actions.

Using Easy Google Maps you can:
  - Create one or more custom maps
  - Create markers
  - Create custom methods

### Dependencies

Easy Google Maps uses Google Maps v3 script:

* [google-maps-v3] - Google Maps JavaScript Library

### Starting

###### Using like a module

```js
var egm = new require('./path/to/easy-google-maps');
```
###### Using like a library
* In your html
```html
<script type="text/javascript" src="/path/to/easy-google-maps.js"></script>
```
* In your JavaScript
```js
var easyGoogleMaps = new EasyGoogleMaps();
```

### Customization
###### Using like a module

```js
var easyGoogleMaps = require('./path/to/easy-google-maps');
    easyGoogleMaps.prototype.customMethod = function () {
         // your custom method here
    }
var egm = new easyGoogleMaps();
```

###### Using like a library
* In your html
```html
<script type="text/javascript" src="/path/to/easy-google-maps.js"></script>
```
* In your JavaScript
```js
EasyGoogleMaps..prototype.customMethod = function () {
     // your custom method here
}
var easyGoogleMaps = new EasyGoogleMaps();
```

### Creating a map
* In your html
```html
<div id="map"></div>    
```
* In your JavaScript
```js
var sampleMap = egm.createMap('map', 59.8937803, 10.6446934, { zoom: 14 }); // id, latitude, longitude, options (optional)
```

### Creating a marker (pin)
* In your JavaScript
```js
egm.pin(sampleMap, 59.8937803, 10.6446934, { title: 'Hello World' }); // map, latitude, longitude, options  (optional)
```


   [google-maps-v3]: <https://developers.google.com/maps/documentation/javascript/libraries>