geojson = data.features.filter(function(locations_of_interest) {
    return locations_of_interest.properties.added <= '23\/08\/2021 00:00';
});