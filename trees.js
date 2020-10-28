var divElement = document.getElementById('viz1603907031602');                    var vizElement = divElement.getElementsByTagName('object')[0];                    if ( divElement.offsetWidth > 800 ) { vizElement.style.width='1100px';vizElement.style.height='1527px';} else if ( divElement.offsetWidth > 500 ) { vizElement.style.width='1100px';vizElement.style.height='1527px';} else { vizElement.style.width='100%';vizElement.style.height='727px';}                     var scriptElement = document.createElement('script');                    scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';                    vizElement.parentNode.insertBefore(scriptElement, vizElement); 



mapboxgl.accessToken = 'pk.eyJ1IjoiZXZhYWFhYXp6eiIsImEiOiJja2V4ZmtzdW8wMW5sMnBxdDQ2eThnYnZnIn0.1JHxDGUTHNqS5KROvKanHw';
        var map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/evaaaaazzz/ckgs65jsw0wm019lyhptqj1t0', // stylesheet location
            
        });
//zoom button
map.addControl(new mapboxgl.NavigationControl());

//hover function
map.on('load', function() {
            
    // add source and layer for museums
    map.addSource('Trees', {
            type: 'vector',
            url: 'mapbox://evaaaaazzz.ad4ib1uc'
    });
    map.addLayer({
        'id': 'New',
        'type': 'Symbol',
        'source': 'Trees',
        'layout': {
            // make layer visible by default
            'visibility': 'none'
        },

    });

    map.addLayer({
        'id': 'Juvenile',
        'type': 'Symbol',
        'source': 'Trees',
        'layout': {
                // make layer visible by default
                'visibility': 'none'
        },

    });

    map.addLayer({
        'id': 'Semi-mature',
        'type': 'Symbol',
        'source': 'Trees',
        'layout': {
                // make layer visible by default
                'visibility': 'none'
        },

    });

    map.addLayer({
        'id': 'Mature',
        'type': 'Symbol',
        'source': 'Trees',
        'layout': {
                // make layer visible by default
                'visibility': 'none'
        },
       
    });
    map.addLayer({
        'id': 'Over-mature',
        'type': 'Symbol',
        'source': 'Trees',
        'layout': {
                // make layer visible by default
                'visibility': 'none'
        },

    });
    map.addLayer({
        'id': 'Location-Park',
        'type': 'Symbol',
        'source': 'Trees',
        'layout': {
                // make layer visible by default
                'visibility': 'none'
        },

    });
    map.addLayer({
        'id': 'Location-Street',
        'type': 'Symbol',
        'source': 'Trees',
        'layout': {
            // make layer visible by default
            'visibility': 'none'
        },
    });
        map.addLayer({
        'id': '2010-2020',
        'type': 'Symbol',
        'source': 'Trees',
        'layout': {
            // make layer visible by default
            'visibility': 'none'
        },
    });

    map.addLayer({
        'id': '2000-2010',
        'type': 'Symbol',
        'source': 'Trees',
        'layout': {
            // make layer visible by default
            'visibility': 'none'
        },
    });

    map.addLayer({
        'id': 'Before 2000',
        'type': 'Symbol',
        'source': 'Trees',
        'layout': {
            // make layer visible by default
            'visibility': 'none'
        },
    });
    map.addLayer({
        'id': 'Duplex-Clay Silt then Clay',
        'type': 'Symbol',
        'source': 'Soil',
        'layout': {
            // make layer visible by default
            'visibility': 'none'
        },
    });
    map.addLayer({
        'id': 'Medium to Heavy Textured Clay with Sand',
        'type': 'Symbol',
        'source': 'Soil',
        'layout': {
            // make layer visible by default
            'visibility': 'none'
        },
    });
    map.addLayer({
        'id': 'Deep Stratified Sand Silt Clay Gravel',
        'type': 'Symbol',
        'source': 'Soil',
        'layout': {
            // make layer visible by default
            'visibility': 'none'
        },
    });
    map.addLayer({
        'id': 'Silt',
        'type': 'Symbol',
        'source': 'Soil',
        'layout': {
            // make layer visible by default
            'visibility': 'none'
        },
    });
    map.addLayer({
        'id': 'Shallow Heavy Textured Clay',
        'type': 'Symbol',
        'source': 'Soil',
        'layout': {
            // make layer visible by default
            'visibility': 'none'
        },
    });
    map.addLayer({
        'id': 'Sandy Loam',
        'type': 'Symbol',
        'source': 'Soil',
        'layout': {
            // make layer visible by default
            'visibility': 'none'
        },
    });




    // Create a popup, but don't add it to the map yet.
    var popup = new mapboxgl.Popup({
        closeButton: false,
        closeOnClick: false
    });
    var Layers = ['New', 'Juvenile','Semi-mature','Mature','Over-mature'];
    for (var i = 0; i < Layers.length; i++) {
        map.on('mouseenter', Layers[i], function (e) {
        // Change the cursor style as a UI indicator.
        map.getCanvas().style.cursor = 'pointer';

        var coordinates = e.features[0].geometry.coordinates.slice();
        var description = 'Genus: ' + e.features[0].properties.Genus + 
                        '<br>Family: ' + e.features[0].properties.Family+ 
                        '<br>Date Planted: ' + e.features[0].properties.DatePlanted + 
                        '<br>Useful Life Expectency: ' + e.features[0].properties.UsefulLifeExpectency + '<br>';

        // Ensure that if the map is zoomed out such that multiple
        // copies of the feature are visible, the popup appears
        // over the copy being pointed to.
        while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
            coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
        }

        // Populate the popup and set its coordinates
        // based on the feature found.
        popup.setLngLat(coordinates).setHTML(description).addTo(map);
        });

        map.on('mouseleave', Layers[i], function () {
            map.getCanvas().style.cursor = '';
            popup.remove();
        });
    
    }
});


// enumerate ids of the layers
var age_description = ['New','Juvenile','Semi-mature','Mature','Over-mature',];
// set up the corresponding toggle button for each layer
for (var i = 0; i < age_description.length; i++) {
    var id = age_description[i];

    var link = document.createElement('a');
    // link.classList.add("active");
    link.classList.add("item","active_map");
    link.textContent = id;
    link.dataValue = id

    link.onclick = function (e) {
        var clickedLayer = this.textContent;
        e.preventDefault();
        e.stopPropagation();

        var visibility = map.getLayoutProperty(clickedLayer, 'visibility');
        console.log('可见吗？' + visibility)

        // toggle layer visibility by changing the layout object's visibility property
        if (visibility === 'visible') {
                map.setLayoutProperty(clickedLayer, 'visibility', 'none');
                this.setAttribute("class","item");
                console.log('bukejian')
            } else {
                this.setAttribute("class","active_map");
                this.classList.add("item")
                map.setLayoutProperty(clickedLayer, 'visibility', 'visible');
                console.log('kejian')
            }
    };

    var layers = document.getElementById('age');
    layers.appendChild(link);
}


// enumerate ids of the layers
var locate = ['Location-Street','Location-Park'];
// set up the corresponding toggle button for each layer
for (var i = 0; i < locate.length; i++) {
    var id = locate[i];

    var link = document.createElement('b');
    // link.classList.add("active");
    link.classList.add("item","active_map");
    link.textContent = id;
    link.dataValue = id

    link.onclick = function (e) {
        var clickedLayer = this.textContent;
        e.preventDefault();
        e.stopPropagation();

        var visibility = map.getLayoutProperty(clickedLayer, 'visibility');
        console.log('可见吗？' + visibility)

        // toggle layer visibility by changing the layout object's visibility property
        if (visibility === 'visible') {
                map.setLayoutProperty(clickedLayer, 'visibility', 'none');
                this.setAttribute("class","item");
                console.log('bukejian')
            } else {
                this.setAttribute("class","active_map");
                this.classList.add("item")
                map.setLayoutProperty(clickedLayer, 'visibility', 'visible');
                console.log('kejian')
            }
    };

    var layers = document.getElementById('location');
    layers.appendChild(link);
}

// enumerate ids of the layers
var soil = ['Duplex-Clay Silt then Clay', 'Medium to Heavy Textured Clay with Sand', 'Deep Stratified Sand Silt Clay Gravel',
            'Silt', 'Shallow Heavy Textured Clay','Sandy Loam'];
// set up the corresponding toggle button for each layer
for (var i = 0; i < soil.length; i++) {
    var id = soil[i];

    var link = document.createElement('c');
    // link.classList.add("active");
    link.classList.add("item","active_map");
    link.textContent = id;
    link.dataValue = id

    link.onclick = function (e) {
        var clickedLayer = this.textContent;
        e.preventDefault();
        e.stopPropagation();

        var visibility = map.getLayoutProperty(clickedLayer, 'visibility');
        console.log('可见吗？' + visibility)

        // toggle layer visibility by changing the layout object's visibility property
        if (visibility === 'visible') {
                map.setLayoutProperty(clickedLayer, 'visibility', 'none');
                this.setAttribute("class","item");
                console.log('bukejian')
            } else {
                this.setAttribute("class","active_map");
                this.classList.add("item")
                map.setLayoutProperty(clickedLayer, 'visibility', 'visible');
                console.log('kejian')
            }
    };

    var layers = document.getElementById('soil_type');
    layers.appendChild(link);
}

// enumerate ids of the layers
var year = ['Before 2020', '2000-2010', '2010-2020'];
// set up the corresponding toggle button for each layer
for (var i = 0; i < year.length; i++) {
    var id = year[i];

    var link = document.createElement('c');
    // link.classList.add("active");
    link.classList.add("item","active_map");
    link.textContent = id;
    link.dataValue = id

    link.onclick = function (e) {
        var clickedLayer = this.textContent;
        e.preventDefault();
        e.stopPropagation();

        var visibility = map.getLayoutProperty(clickedLayer, 'visibility');
        console.log('可见吗？' + visibility)

        // toggle layer visibility by changing the layout object's visibility property
        if (visibility === 'visible') {
                map.setLayoutProperty(clickedLayer, 'visibility', 'none');
                this.setAttribute("class","item");
                console.log('bukejian')
            } else {
                this.setAttribute("class","active_map");
                this.classList.add("item")
                map.setLayoutProperty(clickedLayer, 'visibility', 'visible');
                console.log('kejian')
            }
    };

    var layers = document.getElementById('year');
    layers.appendChild(link);
}

