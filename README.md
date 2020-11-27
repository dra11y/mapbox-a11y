Mapbox GL A11y Plugin
---

A more sophisticated accessibility control for [mapbox-gl-js](https://github.com/mapbox/mapbox-gl-js).

### TODO: Demo

### TODO: Usage

```js
// Should be run after the map has been initialized


map.on('load', () => {
  map.addControl(new MapboxAccessibility({

    // A string value representing a property key in the data. This
    // will be used as the text in voiceover.
    accessibleLabelProperty: 'name',

    // The layers within the style that
    // 1. Contain the `accessibleLabelProperty` value as a key
    // 2. Should be used for voiceover.
    layers: [
      'poi-label',
      'transit-label'
    ]
  }));
});
```

`MapboxA11y` will locate features that belong to layers cooresponding to the `layers` option array and add button elements to the map. To hide these visually but still allow them to be picked up by a screen reader, add the following CSS to your page:

```css
.mapboxgl-a11y-cursor {
  background: transparent;
  margin: 0;
  padding: 0;
  appearance: none;
  border-radius: 0;
  border: none;
  position: fixed;
}

.mapboxgl-a11y-cursor:focus {
  border: 2px solid black;
}
```

### Developing

    npm install & npm start

Visit http://localhost:5000/examples/ to load the demo. You also need to store an access token in localstorage. Open developer tools, locate the console tab and insert:

    localStorage.setItem('accessToken', {your token});

### Tests


    MAPBOX_ACCESS_TOKEN={your token} npm run test
