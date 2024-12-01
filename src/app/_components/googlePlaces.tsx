'use client'

import React, { useEffect, useRef, useState } from "react"
// import { LatLong } from '@/types';
import { useJsApiLoader } from "@react-google-maps/api";
import { Library } from "@googlemaps/js-api-loader";

// function GooglePlaces(latlong: LatLong) {
export default function GooglePlaces( {onAddressData}: {onAddressData: any}){ 

    const [map, setMap] = useState<google.maps.Map | null>(null)
    const [autocomplete, setAutoComplete] = useState<google.maps.places.Autocomplete | null>(null)
    const [selectedAddress, setSelectedAddress] = useState<string | null>(null)

    const libs: Library[] = [ "core", "maps", "marker", "places"]; 
    
    const { isLoaded } = useJsApiLoader({ 
        // googleMapsApiKey: process.env.NEXT_PUBLIC_MAPS_API_KEY as string,
        googleMapsApiKey: 'AIzaSyBnISpieT1CDeMnpkw-WBJbF7rDQHGP-Uo', 
        libraries: libs
    })

    const mapRef = useRef<HTMLDivElement>(null)
    const placeAutoCompleteRef = useRef<HTMLInputElement>(null)

    useEffect(() => {
        if(isLoaded) {
            // const mapOptions = {
            //     center: {
            //         lat: latlong.coordinates[0],
            //         lng: latlong.coordinates[1]
            //     },
            //     zoom: 17,
            //     mapId: 'Anypoint-map-001'
            // }
            // // Setup Map
            // const gMap = new google.maps.Map(mapRef.current as HTMLDivElement, mapOptions)
            // setMap(gMap)

            // Setup Autocomplete
            const gAutoComplete = new google.maps.places.Autocomplete(placeAutoCompleteRef.current as HTMLInputElement, {
                fields: ['formatted_address', 'geometry', 'name']
            })
            setAutoComplete(gAutoComplete)
        }
    }, [isLoaded])

    useEffect(()=> {
        if(autocomplete) {
            autocomplete.addListener('place_changed', () => {
                const place = autocomplete.getPlace();
                console.log('place >> ', place)
                setSelectedAddress(place.formatted_address as string)

            })
        }
    })

    const handleSendAddress = () => {
        console.log('selectedAddress >> ', selectedAddress)
        onAddressData(selectedAddress);
    }
    

    return (
        <div className="flex flex-col space-y-2">
            <p className="text-black text-sm text-slate-700 font-bold underline underline-offset-2"> Enter Your Address </p>
            <input
                className="text-black mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none" 
                ref={placeAutoCompleteRef} 
                />
                <button className="bg-blue-500 hover:bg-blue-400 text-white items-center justify-between font-bold font-mono py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
                onClick={handleSendAddress}>
                    Confirm Address
                </button>
                <br />

                <span className='absolute px-4 w-full inset-x-4 border-b border-gray-300 backdrop-blur-2xl dark:bg-white lg:static lg:border lg:bg-gray-200 lg:p-4 shadow-lg rounded'>
                    <p className='text-sm text-black font-bold underline underline-offset-2'>
                        Your Selected Address 
                    </p><br />
                    <p className="text-black text-sm">
                        {selectedAddress ? selectedAddress : null}
                    </p>                        
                </span>

            {/* {isLoaded ? 
                <div style={{height: '250px' }} ref={mapRef}>
                </div>
            : <p> Loading ... </p>} */}
        </div>
    )
}