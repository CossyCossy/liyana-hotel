import React from 'react'
import { images } from '../assets';

const HotelCard = (props) => {
    const { item } = props

    return (
        <div className="shadow-2xl ml-8 bg-white flex-col rounded-xl w-[22vw] mt-10">

            {/* image */}
            <div className="w-full h-[22vw] flex items-center justify-center bg-white">
                {item.images.image[0].smallImage !== "" ?
                    <img src={item.images.image[0].smallImage} alt={item?.name} className="w-[20vw] h-[20vw] shadow-2xl" />
                    :
                    <img src={images.bg_image} alt={images.bg_image} className="w-[20vw] h-[20vw] shadow-2xl" />
                }
            </div>

            {/* name and headline */}
            <div className=" ml-5 mr-5 w-[22vw] flex-col flex">

                <label className="text-2xl font-extrabold truncate w-[18vw]">{item?.name}</label>

                <div className="text-xs mt-1 text-gray-500 flex flex-wrap w-[18vw] truncate">
                    {item?.headline}
                </div>

            </div>


            <div className="flex flex-row justify-end mt-10">

            <button
                    className="text-white mr-5 mb-5  text-sm h-12 font-extrabold
                     flex-row flex justify-center rounded-sm shadow-2xl
                items-center bg-orange-200">
                    <label className="ml-3 mr-3 text-xs text-orange-500">View Availability</label>
                </button>

            </div>
        </div>
    )
}

export default HotelCard;
