import { useState } from 'react'
import { images } from '../assets'
import { HotelCard, SearchInputBox } from '../components'
import { sunHotelApis } from '../apis';


const Home = () => {

    /*TODO: FIX REDUX API FOR STATE MANAGEMENT */
    const [data, setData] = useState({
        destination: "",
        numberOfAdults: 0,
        checkInDate: "",
        checkOutDate: "",
        searchResults: []

    })

    /* TODO Implement custom calendar or date picker later release for now use input */
    const DestinationFilter = () => {

        return (
            <div className="bg-white rounded-lg p-5 flex lg:flex-row md:flex-col sm:flex-col xl:flex-row justify-center items-center shadow-2xl">

                <SearchInputBox
                    title="DESTINATION"
                    placeholder="destination..."
                    type="text"
                    value={data?.destination}
                    setValue={(ev) => {
                        setData({ ...data, destination: ev.target.value })
                    }}
                />

                <SearchInputBox
                    title="CHECK IN DATE"
                    placeholder="YYYY-MM-DD"
                    type="text"
                    value={data?.checkInDate}
                    setValue={(ev) => {
                        setData({ ...data, checkInDate: ev.target.value })
                    }}
                />

                <SearchInputBox
                    title="CHECK OUT DATE"
                    placeholder="YYYY-MM-DD"
                    type="text"
                    value={data?.checkOutDate}
                    setValue={(ev) => {
                        setData({ ...data, checkOutDate: ev.target.value })
                    }}
                />

                <SearchInputBox
                    title="NO OF ADULTS"
                    placeholder="number of adults"
                    type="number"
                    value={data?.numberOfAdults}
                    setValue={(ev) => {
                        setData({ ...data, numberOfAdults: ev.target.value })
                    }}
                />


                <button
                    onClick={FindHotels}
                    className="text-white sm:mt-10 text-lg h-12 font-extrabold flex-row flex justify-center rounded-lg shadow-2xl
                items-center ml-10 mr-5 bg-gradient-to-r bg-transparent from-orange-300 to-orange-500">
                    <label className="ml-5 mr-5">SEARCH ONLINE</label>
                </button>

            </div>
        )
    }

    /**SEARCH FOR HOTELS CALL */
    const FindHotels = () => {

        const { 
            destination,
            numberOfAdults,
            checkInDate,
            checkOutDate,
        } = data

        const queryParams = {
            destination: destination,
            numberOfAdults: numberOfAdults,
            checkInDate: checkInDate,
            checkOutDate: checkOutDate,
        }

        try {
            sunHotelApis.STATIC_SEARCH_API(queryParams)
                .then((res) => {
                    console.log(res.searchresult.hotels.hotel)
                    setData({
                        ...data,
                        searchResults: res.searchresult.hotels.hotel
                    })
                })

        } catch (e) {

        }
    }

    const RenderSearchedHotels = () => {
        const { searchResults } = data

        return (
            <div className="mt-0 mb-36">

                {/* list hotels vertically */}
                <div className="flex sm:flex-col lg:flex-row lg:flex-wrap">
                    {searchResults.map((item, index) => {
                        return (
                            <HotelCard key={index} item={item} />
                        )
                    })}
                </div>
            </div>
        )
    }

    return (
        <div className="flex flex-1 font-mono">

            <div >

                {/* background image */}
                <img src={images.bg_image} alt={images.bg_image} className="w-[100vw] h-96" />


                <div className="flex flex-1 flex-col -mt-44">

                    <label className="text-center sm:text-2xl text-5xl sm:font-semibold font-extrabold text-white">EXPERIENCE TOUCHING DREAMS</label>

                    <div className="items-center flex flex-row justify-center mt-16">

                        {/* Filter bar */}
                        <DestinationFilter />
                    </div>

                    {/* render searched hotels */}
                <RenderSearchedHotels />
                </div>

            </div>


        </div>

    )
}

export default Home

