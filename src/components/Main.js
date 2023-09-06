import React from 'react'
import mainImage from '../images/main2.jpg'
import {BsWhatsapp} from 'react-icons/bs'


const Main = () => {
    return (
        <>
            <div className='main-container  h-[770px] w-screen object-cover pt-[120px]'>
                <div className='image-container w-full h-full'>
                    <div className="absolute w-full h-[645px] bg-gradient-to-r from-black "></div>
                    <img className='w-screen h-full object-cover' src={mainImage} alt="shivanifilms" />
                    <div className="from text-container absolute left-[50%] top-[-15%] translate-x-[-50%] translate-y-[50%] w-full h-[550px] flex justify-center items-center  text-white ">
                        <div className='bg-[#18E675] min-h-[90px] flex justify-center  items-center min-w-[80%] sm:min-w-[45%] md:min-w-[70%] lg:min-w-[50%] xl:min-w-[40%] py-2 rounded-full z-[2] opacity-50'>
                        </div>
                        <a href="https://api.whatsapp.com/send?phone=9599282669&text=Hello this is the starting message" target='_blank' className='flex justify-center  items-center space-x-3 sm:space-x-6 w-full h-full  absolute  z-10 text-xl sm:text-2xl '>
                        <a href="https://api.whatsapp.com/send?phone=9599282669&text=Hello this is the starting message"  className=''> For Enquiry Call or Chat</a>
                        
                        <BsWhatsapp/>
                        </a>
                    </div>
                
                </div>

            </div>
        </>
    )
}

export default Main


