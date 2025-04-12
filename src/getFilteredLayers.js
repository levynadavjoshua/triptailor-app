import matchLayerToUser from './matchLayerToUser';

function getFilteredLayers(profile, geojson) {
  if (!geojson || !geojson.features) return null;

  const filteredFeatures = geojson.features.filter(feature => {
    const layer = feature.properties;
    return matchLayerToUser(profile, layer);
  });

  return {
    ...geojson,
    features: filteredFeatures,
  };
}

export default getFilteredLayers;
