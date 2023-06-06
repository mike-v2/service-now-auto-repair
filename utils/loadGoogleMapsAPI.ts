import { Loader } from "@googlemaps/js-api-loader";

const loader = new Loader({
  apiKey: process.env.NEXT_PUBLIC_GOOGLE_PLACES_API_KEY as string,
  version: "weekly",
  libraries: ["places"]
});

let googleMapsAPILoaded: typeof google | null = null;

export async function LoadGoogleMapsAPI() {
  if (!googleMapsAPILoaded) {
    googleMapsAPILoaded = await loader.load().then((google) => {
      return google;
    });
  }
  return googleMapsAPILoaded;
}