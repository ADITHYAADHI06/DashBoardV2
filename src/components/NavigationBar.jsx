import React, { useState } from 'react'
import Logo from "../assets/Logo.png"
import rightArrow from "../assets/icons/rightArrow.svg"

import {
    ArrowLeftRightIcon,
    BarChart3Icon,
    Clock4Icon,
    LayoutDashboard,
    HelpCircleIcon,
} from "lucide-react";

const NavigationBar = () => {

    const [ActiveNav, setActiveNav] = useState(0)

    let navigations = [{
        name: "DashBoard",
        Icon: <LayoutDashboard />
    },
    {
        name: "Activity",
        Icon: <Clock4Icon />
    },
    {
        name: "Transactions",
        Icon: <ArrowLeftRightIcon />
    },
    {
        name: "Analytics",
        Icon: <BarChart3Icon />
    },
    {
        name: "Help Center",
        Icon: <HelpCircleIcon />
    }]
    return (
        <div className='px-10 py-12 border w-1/5 h-screen relative'>
            <div className='logo flex gap-4'>
                <img src={Logo} alt="logo" />
                <h1 className='text-xl'>Money Tracker</h1>
            </div>

            <div className='absolute -right-3 top-14 bg-orange-500 rounded-full w-6 h-6 flex justify-center align-middle '>
                <img className='text-white w-2' src={rightArrow} alt='arrow' />
            </div>

            <div className='flex flex-col py-10 gap-5'>
                {
                    navigations.map((c, i) => {
                        return <span onClick={() => { setActiveNav(i); }} className={ActiveNav === i ? "bg-orange-500 text-white text-xl py-3 pl-3 rounded-md" : 'text-xl py-3 px-2 hover:bg-orange-50'} > {c.name}</span>
                    })
                }
            </div>
        </div >
    )
}

export default NavigationBar