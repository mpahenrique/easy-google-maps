google-maps-sample
==================

Google Maps Sample

Carregando o mapa:

=> Crie um elemento de bloco identificado em seu HTML com largura e alturas > 0.

=> Inclua o Script do Google Maps((<script src="https://maps.googleapis.com/maps/api/js?sensor=true"></script>))

=> Inclua o Script maps.js ((<script src="maps.js"></script>))

=> Quando o documento estiver pronto, inicialize o mapa com a função "googleMaps.initialize", que recebe latitude
e longitude como parâmetros. Criando um marcador e centralizando o mapa naquela posição. Exemplo:

  googleMaps.initialize(25, 25);
  
_______________________________________________________________________________________________________________________

Criando marcadores no mapa:


==> Considerando o mapa já inicializado, chame a função "googleMaps.pin", que recebe latitude e longitude como
parâmetros. Exemplo:

  googleMaps.pin(-10, -20);
  
_______________________________________________________________________________________________________________________
  

