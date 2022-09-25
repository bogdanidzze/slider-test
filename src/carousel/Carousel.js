import {useState, useEffect, Children, cloneElement} from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

import "./Carousel.css" 

const PAGE_WIDTH = 450

export const Carousel = ({ children }) => {
    const [pages,setPages] = useState([]) 
    useEffect(() => {
        setPages(
            Children.map(children, child => {
                return cloneElement(child, {
                    style: {
                        height: '100%',
                        minWidth: `${PAGE_WIDTH}px`,
                        maxWidth: `${PAGE_WIDTH}px`,
                    },
                })
            })
        )
    }, [])

    return (
        <div className="main-container">
        <FaChevronLeft/>
            <div className="window">
                <div className="all-pages-container">
                    {pages}
                </div>
            </div>
        <FaChevronRight/>
        </div>
    )
}