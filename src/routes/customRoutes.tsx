import React from 'react'
import { Route, Routes } from "react-router-dom"

import Home from '../pages/home'
import OnRamp from '../pages/onRamp'

const customRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />}> </Route>
            <Route path='/onramp' element={<OnRamp />}> </Route>
        </Routes>
    )

}

export default customRoutes