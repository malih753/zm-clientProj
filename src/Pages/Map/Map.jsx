import React, { useEffect, useState } from "react";
import {
  GoogleMap,
  InfoWindow,
  Marker,
  useJsApiLoader,
} from "@react-google-maps/api";
import MapCard from "../../Common/MapCard/MapCard";
import axios from "axios"; // For Geocoding API requests

const containerStyle = {
  width: "400px",
  // height: "400px",
};

export default function MyMap({ data = [] }) {
  // Replace with your actual Google Maps API Key, no dynamic API key changes!
  const googleMapsApiKey = "AIzaSyB1YOHxlCsdGsNn9wAQLZKzTI5R-hS8z04"; // Replace with actual key

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey, // Use a consistent API key here
  });

  const [map, setMap] = useState(null);
  const [locations, setLocations] = useState([]);
  const [isInfoWindowOpen, setIsInfoWindowOpen] = useState({});
  const [error, setError] = useState(null);

  // Function to geocode a location (city name to lat/lng)
  const geocodeLocation = async (location) => {
    try {
      if (!location || location.trim() === "") {
        throw new Error("Invalid location");
      }

      const response = await axios.get(
        `https://maps.googleapis.com/maps/api/geocode/json`,
        {
          params: {
            address: location,
            key: googleMapsApiKey,
          },
        }
      );

      const { results, error_message } = response.data;

      if (error_message) {
        throw new Error(error_message);
      }

      if (results && results.length > 0) {
        const { lat, lng } = results[0].geometry.location;
        return { lat, lng };
      } else {
        throw new Error("No results found for this location");
      }
    } catch (error) {
      console.error("Error geocoding location:", error.message || error);
      setError("Unable to fetch location coordinates: " + error.message);
      return null;
    }
  };

  useEffect(() => {
    const fetchCoordinates = async () => {
      const geocodedLocations = await Promise.all(
        data.map(async (location) => {
          const coords = await geocodeLocation(location.venueCity);
          return coords; // Will return null if geocoding fails
        })
      );
      // Filter out any null or undefined locations from the array
      setLocations(geocodedLocations.filter(Boolean));
    };

    if (data.length > 0) {
      fetchCoordinates();
    }
  }, [data]);

  const handleMarkerClick = (index) => {
    setIsInfoWindowOpen((prevState) => ({
      ...prevState,
      [index]: true,
    }));
  };

  const handleInfoWindowClose = (index) => {
    setIsInfoWindowOpen((prevState) => ({
      ...prevState,
      [index]: false,
    }));
  };

  console.log("locations", locations);

  return isLoaded && locations.length > 0 ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={locations[0]} // Default center to the first valid location
      zoom={10}
      onLoad={(map) => setMap(map)}
      onUnmount={() => setMap(null)}
    >
      {locations.map((position, index) => (
        <Marker
          key={index}
          position={position} // Ensure this is an object with lat and lng
        />
      ))}

      {/* Show InfoWindows by default for all locations */}
      {locations.map((position, index) => (
        <InfoWindow
          key={index}
          position={position} // Ensure this is an object with lat and lng
          onCloseClick={() => {}}
        >
          <MapCard image={data[index].venueSnapShot[index]} title={data[index].venueName} location={data[index].venueAddress}/>
        </InfoWindow>
      ))}
    </GoogleMap>
  ) : (
    <div>Loading Map...</div>
  );
}
