import React from 'react'
import { useState, useEffect } from 'react'

const useDetectDimension = () => {
    const [windowWidth, setWindowWidth] = useState(null)
    const [windowHeight, setWindowHeight] = useState(null)

    useEffect(() => {
        if (typeof window !== "undefined" && typeof document !== "undefined") {
                setWindowWidth(document.documentElement.clientWidth)
                setWindowHeight(document.documentElement.clientHeight)
            }

        const handleResize = () => {
            if (typeof window !== "undefined" && typeof document !== "undefined") {
                setWindowWidth(document.documentElement.clientWidth)
                setWindowHeight(document.documentElement.clientHeight)
            }
        }

            if (typeof window !== "undefined") {
                window.addEventListener("resize", handleResize)
            }

            return () => {
                if (typeof window !== "undefined") {
                    window.removeEventListener("resize", handleResize)
                }
            }
    }, [])

    return { width: windowWidth, height : windowHeight }
}

export default useDetectDimension