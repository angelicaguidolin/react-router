import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
//PAGINE
import HomePage from './pages/HomePage'
import AboutUs from './pages/AboutUs'
import PostBlog from './pages/PostBlog'
import DefaultLayout from './layout/DefaultLayout'
export default function App(){
      return(
        <>
        <BrowserRouter>
          <Routes>
            <Route element={<DefaultLayout />}>
              <Route path="/" element={<HomePage />} />
              <Route path="/about-us" element={<AboutUs />} />
              <Route path="/post-blog" element={<PostBlog />} />
            </Route>
            </Routes>
        </BrowserRouter>
        </>
      )
     
}
