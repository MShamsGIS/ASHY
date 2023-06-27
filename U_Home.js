let map;
let marker;
let geocoder;
let responseDiv;
let response;
let infoWindow;

function initMap() {
  const directionsService = new google.maps.DirectionsService();
  const directionsRenderer = new google.maps.DirectionsRenderer();
  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 11,
    center: { lat: 30, lng: 31.3 },
  });

  geocoder = new google.maps.Geocoder();

  const inputText1 = document.createElement("input");
  inputText1.type = "text";
  inputText1.id = "direction";
  inputText1.placeholder = "Enter your location";
  const inputText2 = document.createElement("input");
  inputText2.type = "text";
  inputText2.id = "destination";
  inputText2.placeholder = "Enter your destination";

  const submitButton = document.createElement("input");

  submitButton.type = "button";
  submitButton.value = "Get Directions";
  submitButton.classList.add("button", "button-primary");

  const clearButton = document.createElement("input");

  clearButton.type = "button";
  clearButton.value = "Clear";
  clearButton.classList.add("button", "button-secondary");

  directionsRenderer.setMap(map);

  const onChangeHandler = function () {
    calculateAndDisplayRoute(directionsService, directionsRenderer);
  };

  document
    .getElementById("direction")
    .addEventListener("change", onChangeHandler);
  document
    .getElementById("destination")
    .addEventListener("change", onChangeHandler);
}

function calculateAndDisplayRoute(directionsService, directionsRenderer) {
  directionsService
    .route({
      origin: {
        query: document.getElementById("direction").value,
      },
      destination: {
        query: document.getElementById("destination").value,
      },
      travelMode: google.maps.TravelMode.WALKING,
    })
    .then((response) => {
      directionsRenderer.setDirections(response);
      const duration = response.routes[0].legs[0].duration.value;
      const busDirectionsRequest = {
        origin: {
          query: document.getElementById("direction").value,
        },
        destination: {
          query: document.getElementById("destination").value,
        },
        travelMode: google.maps.TravelMode.TRANSIT,
        transitOptions: {
          modes: ["BUS"],
        },
      };
      if (duration > 0) {
        busDirectionsRequest.transitOptions.departureTime = new Date(
          Date.now() + duration * 1000
        );
      }
      directionsService.route(
        busDirectionsRequest,
        function (busResponse, status) {
          if (status === "OK") {
            directionsRenderer.setDirections(busResponse);
          } else {
            window.alert("Directions request failed due to " + status);
          }
        }
      );
    })
    .catch((e) => window.alert("Directions request failed due to " + e));
}

window.initMap = initMap;
