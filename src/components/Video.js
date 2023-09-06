import React, { useMemo } from 'react'

const urls = [
    {
        url: "https://www.youtube.com/embed/_Qu7KjELBbc",
        key: 1
    },
    {
        url: "https://www.youtube.com/embed/ijiDZTWqzYk",
        key: 2
    },
    {
        url: "https://www.youtube.com/embed/kyG35RSwenQ",
        key: 3
    },
 
    {
        url: "https://www.youtube.com/embed/gV9M7VVBCdE",
        key: 5
    },
    {
        url: "https://www.youtube.com/embed/KJDVa5tIrhE",
        key: 6
    }
]
const Video = () => {
    const videoTab = useMemo(() => urls.map((url, index) => <div key={index} className="video min-h-[320px] min-w-full  md:h-[360px] mx-auto ">
        <iframe
            className="w-full h-full rounded-lg   mx-auto"
            src={url.url}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen>
        </iframe>
    </div>), [])
    return (
        <>
            
            <div className="  aspect-video flex flex-col justify-center w-screen min-h-[2100px] items-center  my-3 px-3 max-md:space-y-5 mx-auto md:grid md:grid-cols-2 md:gap-4 md:items-start md:justify-around md:min-h-[1300px]">

                {videoTab}
             
            </div>
        </>
    )
}

export default Video
