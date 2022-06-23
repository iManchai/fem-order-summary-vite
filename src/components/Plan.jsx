import React from "react";
import music from '/images/icon-music.svg'

function Plan() {
    return (
    <div className="flex justify-between items-center p-4 my-4 bg-neutrals-200 rounded-xl">
        <div className="flex gap-4 text-sm">
            <img src={music} alt="" />
            <div className="flex flex-col justify-center">
                <h2 className="text-neutrals-400 text-sm font-black">Annual Plan</h2>
                <p className="text-neutrals-300 text-sm">$59.99/year</p>
            </div>
        </div> 
        <a className="text-sm text-primary-200 font-bold underline duration-200 ease-in-out 
        hover:no-underline hover:text-primary-300" href="">Change</a>
    </div>
    )
}

export default Plan