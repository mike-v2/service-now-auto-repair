import { GoogleMap, useLoadScript, MarkerF } from '@react-google-maps/api';
import { useEffect, useMemo, useState } from 'react';
import { Loader } from '@googlemaps/js-api-loader';
import { LoadGoogleMapsAPI } from './utils/loadGoogleMapsAPI';


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
    <div>
      <GoogleMap
        options={mapOptions}
        zoom={20}
        center={mapCenter}
        mapTypeId={google.maps.MapTypeId.ROADMAP}
        mapContainerStyle={{ width: '800px', height: '800px' }}
        onLoad={() => console.log('Map Component Loaded...')}
      >
        <MarkerF position={mapCenter} onLoad={() => console.log('Marker Loaded')} />
      </GoogleMap>
    </div>
  )
}