import React from 'react'

const Navbar = () => {

    const nav_button_styles = "ml-5 font-semibold text-sm text-gray-400 hover:text-orange-500"

    return (
        <div className="flex flex-row bg-white font-mono">

            <div className="flex flex-row ml-20 p-5 justify-between">
                <div className="font-bold text-orange-400">
                    Liyana Hotel
                </div>

                {/* nav buttons */}
                <div className="flex flex-row justify-between ml-20">
                    <div className={nav_button_styles}>
                        HOME
                    </div>

                    <div className={nav_button_styles}>
                        ROOMS
                    </div>

                    <div className={nav_button_styles}>
                        BLOG
                    </div>

                    <div className={nav_button_styles}>
                        CONTACT US 
                    </div>

                    <button className="text-white text-sm flex-row flex justify-center rounded-sm
                    items-center ml-5 bg-gradient-to-r bg-transparent from-orange-300 to-orange-500">
                        <label className="ml-3 mr-3">BOOK ONLINE</label>
                    </button>
                </div>
            </div>

        </div>
    )
}

export default Navbar