require(["esri/views/MapView", "esri/WebMap"], (MapView, WebMap) => {
        const webmap = new WebMap({
          portalItem: {
            // autocasts as new PortalItem()
            id: "bf8e7c0dc6024742a55e4ab09fd1db36"
          }
        });
        const view = new MapView({
          map: webmap,
          container: "viewDiv"
        });
      });
