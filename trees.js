//tableau chart
var divElement = document.getElementById('viz1603460908310');
	var vizElement = divElement.getElementsByTagName('object')[0];                    
	if ( divElement.offsetWidth > 800 ) 
		{ vizElement.style.width='1000px';
		vizElement.style.height='827px';} 
	else if ( divElement.offsetWidth > 500 ) 
		{ vizElement.style.width='1000px';
		vizElement.style.height='827px';} 
	else { vizElement.style.width='100%';
		vizElement.style.height='727px';}                     
		var scriptElement = document.createElement('script');   
		scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';
		vizElement.parentNode.insertBefore(scriptElement, vizElement);  




mapboxgl.accessToken = 'pk.eyJ1IjoidG9yYXljYWFhIiwiYSI6ImNrZXhmOTk4YzBqb2Mydm1mZzB3cnUxNWQifQ.tCTNSJ5vcc_-pF57gh7PVw';
        var map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/toraycaaa/ckglzfuyl0hba19pl7zzgf6h2', // stylesheet location
            
        });
//zoom button
map.addControl(new mapboxgl.NavigationControl());

//hover function
map.on('load', function() {
    map.on('mousemove', function(e) {
        let buildinginfo = map.queryRenderedFeatures(e.point, {
            layers: ['New']  
          });
    
        if (buildinginfo.length > 0) {
        document.getElementById('info').innerHTML = '<p>' + buildinginfo[0].properties.status + 
            '<p><em>' + buildinginfo[0].properties.address + '</em></p>';
        } else {
        document.getElementById('info').innerHTML = '<p>Hover over a shaded building for details.</p>';
        }
      });
  });
