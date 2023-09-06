import React from 'react'
import { AiTwotoneMail } from 'react-icons/ai'
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { BsLinkedin } from 'react-icons/bs';
import { IoMdCall } from 'react-icons/io';
const Footer = () => {
    return (
      <footer className=" bg-[#C3292B] text-white p-4 text-center">
        <p>&copy; 2023 White Paper Media House . All rights reserved.</p>
        <div className='flex justify-center items-center space-x-2'> <IoMdCall/> &nbsp; <p> Ph. : 9599282669, 8929552530.</p></div>
        <div className="mt-4 flex justify-center items-center gap-5">
          <a
            href="https://www.facebook.com/yourcompany"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4"
          >
            <FaFacebook size={24}  />
          </a>
          <a
            href="https://www.instagram.com/yourcompany"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4"
  
          >
            <FaInstagram size={24}  />
          </a>
          <a
            href="mailto:shivanifilms@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4"
  
          >
            <AiTwotoneMail size={24}  />
          </a>
          <a
            href="http://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4"
  
          >
            <BsLinkedin  size={24}  />
          </a>
          
        </div>
      </footer>
    );
  };
  export default Footer;