import { useEffect, useRef } from "react";

const ProgressBar = () => {
    const progressBarRef = useRef(null)

    useEffect(() => {
        setTimeout(() => {
            if (progressBarRef.current) {
                progressBarRef.current.style.width = "100%"
            }
        }, 300)
    }, [])

    return (
        <div className="progress-container">
            <div className="progress-bar" ref={progressBarRef}></div>
        </div>
    )
}
export default ProgressBar