require([
        "esri/Map",
        "esri/views/MapView",
        "esri/layers/ImageryLayer",
        "esri/layers/support/RasterFunction"
      ], (Map, MapView, ImageryLayer, RasterFunction) => {

        const imagePopupTemplate = {
          // autocasts as new PopupTemplate()
          title: "Data from {SensorName} satellite",
          content: `
            Rendered RGB values: <b>{Raster.ServicePixelValue} </b>
            <br>Original values (Coastal, B, G, R, NIR, SWIR1, SWIR2, Panchromatic, Cirrus, TIRS1, TIRS2): <b>{Raster.ItemPixelValue} </b>
            `
        };

        const serviceRFT = new RasterFunction({
          functionName: "NDVI Colorized",
          variableName: "Raster"
        });

        const layer = new ImageryLayer({
          url: "https://landsat2.arcgis.com/arcgis/rest/services/Landsat8_Views/ImageServer",
          renderingRule: serviceRFT,
          popupTemplate: imagePopupTemplate
        });

        const map = new Map({
          basemap: "hybrid",
          layers: [layer]
        });

        const view = new MapView({
          container: "viewDiv",
          map: map,
          center: [-90.19973698105836, 38.625784113754406],
          zoom: 14,
          popup: {
            actions: []
          }
        });
      });
