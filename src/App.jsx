import { useState } from 'react'

import { Footer } from "./components/Footer"
import { Navbar } from "./components/Navbar"
import { Routes } from "./components/Routes"

const App = () => {
    const [darkTheme, setDarkTheme] = useState(false)

    return (
        <div className={darkTheme ? 'dark' : ''}>
            <div className='bg-gray-100 dark:bg-black dark:text-gray-200 min-h-screen'>
                <Navbar darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
                <Routes />
                <Footer />
            </div>
        </div>
    )
}

export default App