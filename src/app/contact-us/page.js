"use client";

import { useState } from "react";
import SectionHeader from "@/components/SectionHeader";
import ContentPair from "@/components/ContentPair";
import ContactForm from "@/components/ContactForm";
import { Divider } from "@mui/material";
import { GoogleMap, LoadScript, Marker, InfoWindow } from "@react-google-maps/api";


const googleMapsApiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

const contactInfo = [
    {
        name: "Early Childhood Center",
        address: "1400 Wyncrest Dr, Ballwin, MO 63011",
        coords: { lat: 38.598652, lng: -90.491623 },
        phoneNumber: "636-220-9747",
    },
    {
        name: "ADS North",
        address: "8945 Dunn Rd. Hazelwood, MO 63042",
        coords: { lat: 38.777608, lng: -90.346286 }, // Corrected coordinates for variety
        phoneNumber: "314-222-8882",
    },
    {
        name: "ADS West",
        address: "519 Weidman Rd, Ballwin, MO 63011",
        coords: { lat: 38.603279, lng: -90.494324 }, // Corrected coordinates for variety
        phoneNumber: "636-394-8986",
    },
];

export default function ContactUs() {
    const [selectedLocation, setSelectedLocation] = useState(null);

    const center = contactInfo.length > 0 ? contactInfo[0].coords : { lat: 0, lng: 0 };

    const handleMarkerClick = (location) => {
        setSelectedLocation(location);
    };

    return (
        <div className="w-full md:px-[100px] md:pb-[100px] gap-[100px]">
            <div className="py-[70px]">
                <SectionHeader title="CONTACT US" />
            </div>
            <ContentPair imgSrc="/exampleBanner.png" imageLeft={false}>
                <div className="text-white flex flex-col justify-center items-center gap-[25px] py-[50px]">
                    <h3 className="text-[#5C5ADB]">Contact Info</h3>
                    {contactInfo.map((location, index) => (
                        <div key={index} className="flex flex-col justify-center items-center">
                            <p>{location.name.toUpperCase()}</p>
                            <small className="text-gray-400">{location.address}</small>
                            <small className="text-gray-400">{location.phoneNumber}</small>
                        </div>
                    ))}
                    <Divider sx={{ width: '100%', height: "2px", backgroundColor: 'white' }} />
                    <p className="text-[#5C5ADB]">7:30 am - 4:00 pm</p>
                </div>
            </ContentPair>
            <div className="flex flex-col md:flex-row justify-center w-full h-[800px]">
                {/* Contact Form (First on small screens, second on larger screens) */}
                <div className="h-full w-full order-2 md:order-2">
                    <ContactForm />
                </div>

                {/* Map View (Second on small screens, first on larger screens) */}
                <div className="h-full w-full flex justify-center items-center order-1 md:order-1">
                    <LoadScript googleMapsApiKey={googleMapsApiKey}>
                        <GoogleMap
                            mapContainerStyle={{
                                width: "75%",
                                height: "75%"
                            }}
                            center={center}
                            zoom={10}
                        >
                            {contactInfo.map((location, index) => (
                                <Marker
                                    key={index}
                                    position={location.coords}
                                    onClick={() => handleMarkerClick(location)}
                                    title={location.name}
                                />
                            ))}
                            {selectedLocation && (
                                <InfoWindow
                                    position={selectedLocation.coords}
                                    onCloseClick={() => setSelectedLocation(null)}
                                >
                                    <div className="flex flex-col">
                                        <p className="font-semibold">{selectedLocation.name}</p>
                                        <small>{selectedLocation.address}</small>
                                        <small>{selectedLocation.phoneNumber}</small>
                                        <a
                                            href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
                                                `${selectedLocation.coords.lat},${selectedLocation.coords.lng}`
                                            )}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            Get Directions
                                        </a>
                                    </div>
                                </InfoWindow>
                            )}
                        </GoogleMap>
                    </LoadScript>
               </div>
            </div>
        </div>
    );
};
