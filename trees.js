var divElement = document.getElementById('viz1604117988869');                    var vizElement = divElement.getElementsByTagName('object')[0];                    if ( divElement.offsetWidth > 800 ) { vizElement.style.width='1100px';vizElement.style.height='1527px';} else if ( divElement.offsetWidth > 500 ) { vizElement.style.width='1100px';vizElement.style.height='1527px';} else { vizElement.style.width='100%';vizElement.style.height='727px';}                     var scriptElement = document.createElement('script');                    scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';                    vizElement.parentNode.insertBefore(scriptElement, vizElement)



mapboxgl.accessToken = 'pk.eyJ1IjoiZXZhYWFhYXp6eiIsImEiOiJja2V4ZmtzdW8wMW5sMnBxdDQ2eThnYnZnIn0.1JHxDGUTHNqS5KROvKanHw';
        var map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/evaaaaazzz/ckgs65jsw0wm019lyhptqj1t0', // stylesheet location
            center: [144.949888, -37.810745],
            zoom: 11,
            attributionControl: false
        });
//zoom button
map.addControl(new mapboxgl.NavigationControl());

//hover function
map.on('load', function() {

    // Create a popup, but don't add it to the map yet.
    var popup = new mapboxgl.Popup({
        className: "mypopup",
        closeButton: true,
        closeOnClick: true
    });

    var Layers = ['New', 'Juvenile','Semi-mature','Mature','Over-mature'];
    for (var i = 0; i < Layers.length; i++) {
        map.on('mouseenter', Layers[i], function (e) {
        // Change the cursor style as a UI indicator.
        map.getCanvas().style.cursor = 'pointer';

        var coordinates = e.features[0].geometry.coordinates.slice();

        var description = '<br>' + 'Name: ' + e.features[0].properties.CommonName+ 
                            '<br>Family: ' + e.features[0].properties.Family+ 
                            '<br>Date Planted: ' + e.features[0].properties.DatePlanted + 
                            '<br>Useful Life Expectancy: ' + e.features[0].properties.UsefulLifeExpectency + '<br>';

        // Ensure that if the map is zoomed out such that multiple
        // copies of the feature are visible, the popup appears
        // over the copy being pointed to.
        while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
            coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
        }

        // Populate the popup and set its coordinates
        // based on the feature found.
        popup.setLngLat(coordinates).setHTML('<h3' + description + '<a href="http://en.wikipedia.org/wiki/'+ e.features[0].properties.CommonName+ '">' 
                                                + "Click here for more" + '</a></h3>').addTo(map);
        });



        // // Center the map on the coordinates of any clicked symbol from the 'symbols' layer.
        // map.on('click', Layers[i], function (e) {
        // map.flyTo({
        // center: e.features[0].geometry.coordinates
        // });
        // });
         
        // // Change the cursor to a pointer when the it enters a feature in the 'symbols' layer.
        // map.on('mouseenter', Layers[i], function () {
        //     map.getCanvas().style.cursor = 'pointer';
        // });
         
        // // Change it back to a pointer when it leaves.
        // map.on('mouseleave', Layers[i], function () {
        //     map.getCanvas().style.cursor = '';
        // });

    
    }
});




