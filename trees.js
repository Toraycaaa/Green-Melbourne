var divElement = document.getElementById('viz1603636061401');                    
    var vizElement = divElement.getElementsByTagName('object')[0];                    
    if ( divElement.offsetWidth > 800 ) 
        { vizElement.style.width='1000px';vizElement.style.height='1327px';} 
    else if ( divElement.offsetWidth > 500 ) 
        { vizElement.style.width='1000px';vizElement.style.height='1327px';} 
    else { vizElement.style.width='100%';vizElement.style.height='727px';}                     
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
            
    // add source and layer for museums
    map.addSource('New', {
            type: 'vector',
            url: 'mapbox://evaaaaazzz.cq03g6y6'
    });
    map.addLayer({
        'id': 'New',
        'type': 'Symbol',
        'source': 'New',
        'layout': {
            // make layer visible by default
            'visibility': 'visible'
        },
        'paint': {
            'circle-radius': 8,
            'circle-color': 'rgba(55,148,179,1)'
        },
        'source-layer': 'New'
    });
    map.addSource('Juvenile', {
        type: 'vector',
        url: 'mapbox://evaaaaazzz.cq03g6y6'
    });
    map.addLayer({
        'id': 'Juvenile',
        'type': 'Symbol',
        'source': 'Juvenile',
        'layout': {
                // make layer visible by default
                'visibility': 'visible'
        },
        'paint': {
                'circle-radius': 8,
                'circle-color': 'rgba(55,148,179,1)'
        },
        'source-layer': 'Juvenile'
    });
    map.addSource('Semi-mature', {
        type: 'vector',
        url: 'mapbox://evaaaaazzz.cq03g6y6'
    });
    map.addLayer({
        'id': 'Semi-mature',
        'type': 'Symbol',
        'source': 'Semi-mature',
        'layout': {
                // make layer visible by default
                'visibility': 'visible'
        },
        'paint': {
                'circle-radius': 8,
                'circle-color': 'rgba(55,148,179,1)'
        },
        'source-layer': 'Semi-mature'
    });
    map.addSource('Mature', {
        type: 'vector',
        url: 'mapbox://evaaaaazzz.cq03g6y6'
    });
    map.addLayer({
        'id': 'Mature',
        'type': 'Symbol',
        'source': 'Mature',
        'layout': {
                // make layer visible by default
                'visibility': 'visible'
        },
        'paint': {
                'circle-radius': 8,
                'circle-color': 'rgba(55,148,179,1)'
        },
        'source-layer': 'Mature'
    });
    map.addSource('Over-mature', {
        type: 'vector',
        url: 'mapbox://evaaaaazzz.cq03g6y6'
    });
    map.addLayer({
        'id': 'Over-mature',
        'type': 'Symbol',
        'source': 'Over-mature',
        'layout': {
                // make layer visible by default
                'visibility': 'visible'
        },
        'paint': {
                'circle-radius': 8,
                'circle-color': 'rgba(55,148,179,1)'
        },
        'source-layer': 'Over-mature'
    });
        
    
  });


// enumerate ids of the layers
var toggleableLayerIds = ['New','Juvenile','Semi-mature','Mature','Over-mature',];

// set up the corresponding toggle button for each layer
for (var i = 0; i < toggleableLayerIds.length; i++) {
        var id = toggleableLayerIds[i];

        var link = document.createElement('a');
        link.href = '#';
        link.className = 'active';
        link.textContent = id;

        link.onclick = function (e) {
            var clickedLayer = this.textContent;
            e.preventDefault();
            e.stopPropagation();

            var visibility = map.getLayoutProperty(clickedLayer, 'visibility');

            // toggle layer visibility by changing the layout object's visibility property
            if (visibility === 'visible') {
                map.setLayoutProperty(clickedLayer, 'visibility', 'none');
                this.className = '';
            } else {
                this.className = 'active';
                map.setLayoutProperty(clickedLayer, 'visibility', 'visible');
            }
        };

        var layers = document.getElementById('menu');
        layers.appendChild(link);
    }
