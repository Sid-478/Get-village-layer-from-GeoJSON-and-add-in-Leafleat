       let disDistrict = [];
      // let distdist = [];
      function GetDistinctDistrict() {
        let allvillagesfeatures = villagedata.features;
        let select = document.getElementById("idDistrict");

        allvillagesfeatures.forEach(function (e) {
          // Here e = allvillagefeatures each and every value.
          let disName = e.properties["DISTRICT"];
          let check_dist = disDistrict.includes(disName);
          if (check_dist == false) {
            disDistrict.push(disName);
            let option = document.createElement("option");
            option.text = disName;
            option.value = disName;
            select.appendChild(option);
          }
        });
        // console.log(disDistrict);
      }

      let filterFeatures = [];
      function LoadDistrict() {
        let select1 = window.document.getElementById("idDistrict");
        let selected_text = select1.options[select1.selectedIndex].text;

        let allvillagesfeatures = villagedata.features;
        filterFeatures = [];
        allvillagesfeatures.forEach(function (e) {
          let disName = e.properties["DISTRICT"];
          if (disName == selected_text) {
            //if the district name is equal selected option push district name in array..
            filterFeatures.push(e);
          }
        });

        let newGeoJSON = {
          //created a new GeoJson which features are districts.
          type: "FeatureCollection",
          features: filterFeatures,
        };

        map.removeLayer(gLayer); // Clear the past geojson (villagedata) data. To focus on only district.
        gLayer = L.geoJSON(newGeoJSON).addTo(map); // Add District geojson as newGeoJSON.
        map.fitBounds(gLayer.getBounds());
      }

      let unique_subdist = [];
      function getSubDist() {
        let select1 = window.document.getElementById("idDistrict");
        let selected_text = select1.options[select1.selectedIndex].text;

        let select = window.document.getElementById("idSubdistrict");
        let allvillagesfeatures = villagedata.features;
        allvillagesfeatures.forEach(function (e) {
          let District = e.properties["DISTRICT"];
          let subDist = e.properties["SUB_DIST"];
          if (District == selected_text) {
            let check_subdist = unique_subdist.includes(subDist);
            if (check_subdist == false) {
              unique_subdist.push(subDist);
              let option = window.document.createElement("option");
              option.text = subDist;
              select.appendChild(option);
            }
          }
        });
        // console.log(unique_subdist);
      }

      let filterFeatures1 = [];

      function LoadSubDistrict() {
        let select1 = window.document.getElementById("idSubdistrict");
        let selected_text = select1.options[select1.selectedIndex].text;

        let allvillagesfeatures = villagedata.features;
        filterFeatures1 = [];
        allvillagesfeatures.forEach(function (e) {
          let disName = e.properties["SUB_DIST"];
          if (disName == selected_text) {
            //if the district name is equal selected option push district name in array..
            filterFeatures1.push(e);
          }
        });

        console.log(filterFeatures1);

        let newGeoJSON = {
          //created a new GeoJson which features are districts.
          type: "FeatureCollection",
          features: filterFeatures1,
        };

        map.removeLayer(gLayer); // Clear the past geojson (villagedata) data. To focus on only district.
        gLayer = L.geoJSON(newGeoJSON).addTo(map); // Add District geojson as newGeoJSON.
        map.fitBounds(gLayer.getBounds());
      }

      let unique_village = [];
      function getVillage() {
        let select1 = window.document.getElementById("idSubdistrict");
        let selected_text = select1.options[select1.selectedIndex].text;

        let select = window.document.getElementById("idVillage");
        let allvillagesfeatures = villagedata.features;

        allvillagesfeatures.forEach(function (e) {
          let village = e.properties["NAME"];
          let subDist = e.properties["SUB_DIST"];
          if (subDist == selected_text) {
            let check_village = unique_village.includes(village);
            if (check_village == false) {
              unique_village.push(village);
              let option = window.document.createElement("option");
              option.text = village;
              select.appendChild(option);
            }
          }
        });
        // console.log(unique_village);
      }

      let filterFeatures2 = [];

      function LoadVillage() {
        let select1 = window.document.getElementById("idVillage");
        let selected_text = select1.options[select1.selectedIndex].text;

        let allvillagesfeatures = villagedata.features;
        filterFeatures2 = [];
        allvillagesfeatures.forEach(function (e) {
          let villageName = e.properties["NAME"];
          if (villageName == selected_text) {
            //if the district name is equal selected option push district name in array..
            filterFeatures2.push(e);
          }
        });

        // console.log(filterFeatures2);

        let newGeoJSON = {
          //created a new GeoJson which features are districts.
          type: "FeatureCollection",
          features: filterFeatures2,
        };

        map.removeLayer(gLayer); // Clear the past geojson (villagedata) data. To focus on only district.
        gLayer = L.geoJSON(newGeoJSON).addTo(map); // Add District geojson as newGeoJSON.
        map.fitBounds(gLayer.getBounds());
      }