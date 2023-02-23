import axios from "axios";
import { images } from "../assets";
import { XMLParser, XMLBuilder } from 'fast-xml-parser';

/**MAKE STATIC API CALL */
const STATIC_SEARCH_API = async (queryParams) => {
     const apiUrl = `http://xml.sunhotels.net/15/PostGet/StaticXMLAPI.asmx/SearchV2?userName=LiyanaHotelsTEST&password=awe9LVJRwt&language=en&currencies=EUR&checkInDate=${queryParams?.checkInDate}&checkOutDate=${queryParams?.checkOutDate}&numberOfRooms=1&destination=&destinationID=695&hotelIDs=&resortIDs=&accommodationTypes=&numberOfAdults=${queryParams?.numberOfAdults}&numberOfChildren=0&childrenAges=&infant=0&sortBy=&sortOrder=&exactDestinationMatch=&blockSuperdeal=&showTransfer=&mealIds=&showCoordinates=&showReviews=&referencePointLatitude=&referencePointLongitude=&maxDistanceFromReferencePoint=&minStarRating=&maxStarRating=&featureIds=&minPrice=&maxPrice=&themeIds=&excludeSharedRooms=&excludeSharedFacilities=&prioritizedHotelIds=&totalRoomsInBatch=&paymentMethodId=&CustomerCountry=gb&B2C=`
    const headers = {
        "Content-Type": "application/xml; charset=utf-8",
        "Access-Control-Allow-Origin": true
    };
    const request = axios.get(images.search_xml, {
        headers,
    })
        .then((response) => {

            const parser = new XMLParser();
            let search_Array = parser.parse(response.data);

            return search_Array

        })
        .catch((err) => {
            console.log(err);
            throw err;
        })

    return request
}

const sunHotelApis = {
    STATIC_SEARCH_API
}

export default sunHotelApis

