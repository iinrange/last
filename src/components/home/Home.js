import React from 'react'
import { Showcase, Stats, Contact, Cloud, Lenguages } from "../home"
import {Navbar, Footer} from "../../components"

const Home = () => {
    return (
        <div>
            <Navbar />
            <Showcase />
            <Stats />
            <Contact />
            <Cloud />
            <Lenguages />
            <Footer />
        </div>
    )
}

export default Home
