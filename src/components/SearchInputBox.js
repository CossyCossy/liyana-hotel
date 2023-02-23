import React from 'react'

const SearchInputBox = (props) => {

    return (
        <div className="items-center flex flex-col ml-5">
            <label className="font-bold text-gray-500 sm:mt-5">{props?.title}</label>

            <div className="bg-white h-16 sm:mt-2 lg:mt-10 items-center justify-center sm: w-[12vw]
                                flex shadow-2xl align-baseline rounded-lg">

                <input
                  
                   onChange={props?.setValue}
                     value={props.value}
                    className=" appearance-none ml-2 w-full bg-transparent h-full text-center
                                text-gray-700 leading outline-none"
                    id="TEXT" type={props?.type} placeholder={props?.placeholder} />

            </div>
        </div>
    )
}

export default SearchInputBox