import { GoogleMap, MarkerF } from '@react-google-maps/api';
import { useEffect, useMemo, useState } from 'react';
import { LoadGoogleMapsAPI } from '../utils/loadGoogleMapsAPI';


const placeID = "ChIJm-qmpFWulVQRcuV5L0tJ_sY"; // "ChIJkYbgmm6zlVQRzBHMxuWNU98";
const coords = {lat: 45.78064920283155, long: -122.58918227301481}

export default function Map() {
  const [googleMapsLoaded, setGoogleMapsLoaded] = useState(false);
  const libraries = useMemo(() => ['places'], []);

  const mapCenter = useMemo(
    () => ({ lat: coords.lat, lng: coords.long }),
    []
  );

  const mapOptions = useMemo<google.maps.MapOptions>(
    () => ({
      disableDefaultUI: true,
      clickableIcons: true,
      scrollwheel: true,
      streetViewControl: true,
      fullscreenControl: true,
      mapTypeControl: true,
      zoomControl: true,
    }),
    []
  );

  useEffect(() => {
    LoadGoogleMapsAPI().then(() => {
      setGoogleMapsLoaded(true);
    });
  }, []);

  if (!googleMapsLoaded) return <p>...Loading</p>;

  return (
    <>
      <GoogleMap
        options={mapOptions}
        zoom={15}
        center={mapCenter}
        mapTypeId={google.maps.MapTypeId.ROADMAP}
        onLoad={() => console.log('Map Component Loaded...')}
        mapContainerClassName="w-100 h-100"
      >
        <MarkerF position={mapCenter} onLoad={() => console.log('Marker Loaded')} />
      </GoogleMap>
    </>
  )
}