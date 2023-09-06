import React from 'react'
import artist from '../images/artists.jpg'

const Artists = () => {
    async function SubmitForm(e) {
        e.preventDefault()

        const formData = new FormData(e.target);
        const formDataObject = Object.fromEntries(formData.entries());

        try {
            const response = await fetch('/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formDataObject),
            });

            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.error(error);
        }

    }
{/* <input type="text" name="name" placeholder="Name">
  <input type="email" name="email" placeholder="Email">
  <textarea name="message" placeholder="Message"></textarea>
  <button type="submit">Submit</button> */}
    return (
        <>
            <div className="main-artists h-fit w-screen bg-gradient-to-b from-[#C3292B] to-fuchsia-60 pt-[179px]">
                <div className="inner-main-artist h-full lg:flex lg:pt-8 lg:items-start lg:justify-center">
                    <div className="img lg:w-[40%] lg:h-fit ">
                        <h1 className='text-[3rem] md:text-[5rem] lg:hidden text-white text-center pb-7'>Artists</h1>
                        <img src={artist} className='relative  object-cover p-4 rounded-full' alt="sivanifilms" />
                    </div>
                    <div className="contact w-full lg:h-fit  max-sm:sm:bg-gradient-to-t from-fuchsia-700 to-fuchsia-60">
                        <div className="signup lg:w-[95%] mx-auto w-full  ">
                            <form action="https://getform.io/f/70662cc3-c4e4-4c9c-90d4-de8f49564e90" method='post' onSubmit={(e) => SubmitForm(e)}>
                                <div className="contact-page w-[90%] h-fit flex flex-col mt-10 justify-center items-center sm:items-start  mx-auto rounded-lg shadow-lg shadow-gray-300 before:content-[''] after:content-[''] sm:pl-16 pb-10 bg-white">
                                    <h1 className='text-xl sm:text-3xl text-[#C3292B]  pt-10 font-bold pb-2'>Get in touch</h1>
                                    <label htmlFor="myname" className='text-base sm:text-xl font-medium py-2'>Enter your name</label>
                                    <input type="text" placeholder='enter your name' id='name' className='w-[70%] border border-black p-1 rounded-md text-base capitalize focus:border-2 outline-none' />
                                    <label htmlFor="myemail" className='text-base sm:text-xl font-medium py-2'>Enter your email</label>
                                    <input type="text" placeholder='enter your email' id='email' className='w-[70%] border border-black p-1 rounded-md text-base capitalize focus:border-2 outline-none' />
                                    <label htmlFor="myphone" className='text-base sm:text-xl font-medium py-2'>Enter your phone number</label>
                                    <input type="text" placeholder='Phone number' id='phone' className='w-[70%] border border-black p-1 rounded-md text-base capitalize focus:border-2 outline-none' />
                                    <label htmlFor="employer" className='text-base sm:text-xl font-medium py-2'>Are you an employer or artist?</label>

                                    <div className="options flex gap-4">
                                        <span className='flex justify-center items-center gap-4'>
                                            <input type="radio" value='Artist' name='designation' id='myArtist' className='' />
                                            <label htmlFor="myArtist">Artist</label><br />
                                        </span>
                                        <span className='flex justify-center items-center  gap-4'>
                                            <input type="radio" value='Employer' name='designation' id='myEmployee' className='' />
                                            <label htmlFor="myEmployee">Employer</label>
                                        </span>
                                    </div>

                                    <button type="submit" className='max-sm:self-center my-5 w-[120px] h-[38px] rounded-md px-[5px]  bg-white text-[#C3292B] border-2 border-[#C3292B] hover:scale-110 hover:bg-[#C3292B] hover:text-white duration-200 text-xl font-bold'>Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Artists