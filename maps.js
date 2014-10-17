var map;
var mapa = {
    inicializa: function (par, lat, long) {
        if(par === false){
            var center = new google.maps.LatLng(lat, long);  
        }
        else {
            var center = new google.maps.LatLng(myLocal[0], myLocal[1]);   
        }
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
            position: new google.maps.LatLng(myLocal[0], myLocal[1]),
            map: map
        });
    },
    criaMarcador: function (nome, cidade, estado, telefone, latitude, longitude, lgt){
        var nome;
        var cidade;
        var estado;
        var telefone;
        var latitude;
        var longitude;
        var lgt = lojas.length;
        for( var i = 0; i < lgt; i++){
            nome = lojas[i].title;
            cidade = lojas[i].postmeta[2].meta_value;
            estado = lojas[i].postmeta[3].meta_value;
            latitude = lojas[i].postmeta[6].meta_value;
            longitude = lojas[i].postmeta[7].meta_value;
            telefone = lojas[i].postmeta[8].meta_value;
            var marker = new google.maps.Marker({
                position: new google.maps.LatLng(latitude, longitude),
                title: nome,
                icon: 'http://ls2.com.br/iconeAPLICATIVO.png',
                map: map
            });
            marker.set("id", "marker" + i);
            google.maps.event.addListener(marker, 'click', function() {
                console.log(this.position.B);
                console.log(this.position.k);
            });
        }
    },
    centralizaEMarca: function(latitude, longitude){
        mapa.inicializa(false, latitude, longitude);
        mapa.criaMarcador();
        var marker = new google.maps.Marker({
                        position: new google.maps.LatLng(latitude, longitude),
                        title: 'Localização Oferecida',
                        map: map
                    });
    }
}



