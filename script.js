// Function to initialize the map
function initMap() {
    // Center coordinates (example: India)
    var centerCoordinates = { lat: 20.5937, lng: 78.9629 };

    // Create a map
    var map = new google.maps.Map(document.getElementById('map'), {
        center: centerCoordinates,
        zoom: 5,
        mapTypeId: 'terrain' // Show elevation
    });

    // Add markers for important tourist places in India
    var places = [
        { name: 'Taj Mahal', location: { lat: 27.1751, lng: 78.0421 } },
        { name: 'Jaipur', location: { lat: 26.9124, lng: 75.7873 } },
        { name: 'Varanasi', location: { lat: 25.3176, lng: 82.9739 } },
        { name: 'Kerala Backwaters', location: { lat: 9.4981, lng: 76.3388 } },
        { name: 'Goa', location: { lat: 15.2993, lng: 74.1240 } },
        // Add more places as needed
    ];

    places.forEach(function(place) {
        var marker = new google.maps.Marker({
            position: place.location,
            map: map,
            title: place.name
        });
    });
}

// Load the Google Maps API
function loadMapScript() {
    var script = document.createElement('script');
    script.src = 'https://maps.googleapis.com/maps/api/js?key=YOUR_GOOGLE_MAPS_API_KEY&callback=initMap';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
}

// Call the function to load the map
loadMapScript();
