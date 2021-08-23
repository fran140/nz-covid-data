let filteredLocations = myLocationCollection.features.filter(function (feature) {
    return Feature.properties.Added <= "23\/08\/2021 00:00";
  });
