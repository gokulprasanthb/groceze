import React from "react";
import findUs from "../assets/location.svg";
import phone from "../assets/phone.svg";
import mail from "../assets/mail.svg";
import logo from "../assets/grocezeLogo.png";
import facebook from "../assets/fb.svg";
import twitter from "../assets/twitter.svg";
import instagram from "../assets/insta.svg";
import { FaTwitter } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";




const Footer = () => {
  const year = new Date();

  return (
    <footer className="bg-slate-100 py-10 mt-32">
      <div className="flex flex-row pt-10 pl-40 ">
        <div className="w-1/3">
          <a href="/"><img src={logo} alt="Logo" className="h-24 w-56 mb-8" /></a>
          <p>Groceze will make your shopping easy. We are doing the reliable grocery delivery service at</p>
          <p className="pt-1">Chennai | Coimbatore | Tiruppur | Erode</p>

        </div>

        <div className="w-1/3 pl-16">
          <h3 className="text-xl font-semibold">Navigate Links</h3>
          <div className="flex flex-row space-x-8 pt-8">
            <div className="flex flex-col space-y-4 font-medium">
              <a className="hover:no-underline hover:text-gray-400 duration-300" href="/">Home</a>
              <a className="hover:no-underline hover:text-gray-400 duration-300" href="/">New arrivals</a>
              <a className="hover:no-underline hover:text-gray-400 duration-300" href="/">Popular stores</a>
              <a className="hover:no-underline hover:text-gray-400 duration-300" href="/">Contact us</a>
              <a className="hover:no-underline hover:text-gray-400 duration-300" href="/">About us</a>
            </div>
            <div className="flex flex-col space-y-4 font-medium">
              <a className="hover:no-underline hover:text-gray-400 duration-300" href="/">Shipping & Returns</a>
              <a className="hover:no-underline hover:text-gray-400 duration-300" href="/">Help & FAQ</a>
              <a className="hover:no-underline hover:text-gray-400 duration-300" href="/">Terms & Conditions</a>
              <a className="hover:no-underline hover:text-gray-400 duration-300" href="/">Privacy Policy</a>
              <a className="hover:no-underline hover:text-gray-400 duration-300" href="/">Login</a>
            </div>
          </div>
        </div>

        <div className="w-1/3 pl-16">
        <h3 className="text-xl font-semibold pb-4">Stay Connected</h3>
          <input
            type="email"
            placeholder="Email Address"
            className="rounded-full outline-0 pl-4 h-8 w-60"
          />
          <div className="flex flex-row space-x-10 pt-5">
            <a href="https://www.facebook.com/">
              <FaFacebookF className="w-7 h-7 hover:text-gray-400 duration-300"/>
              {/* <img src={facebook} alt="facebook" className="h-8 w-8" /> */}
            </a>
            <a href="https://twitter.com/?lang=en">
              <FaTwitter className="w-7 h-7 hover:text-gray-400 duration-300"/>
              {/* <img src={twitter} alt="twitter" className="h-8 w-8" /> */}
            </a>
            <a href="https://www.instagram.com/">
              <FaSquareInstagram className="w-7 h-7 hover:text-gray-400 duration-300"/>
              {/* <img src={instagram} alt="instagram" className="h-8 w-8" /> */}
            </a>
          </div>
        </div>
      </div>

      <div className="flex flex-row pt-16 pl-40 pb-10 space-x-80">
        <div className="flex items-center">
          <img src={findUs} alt="Find us" className="h-8 w-8 inline-block" />
          <div className="inline-block pl-3">
            <p>Lorem, ipsum dolor.</p>
          </div>
        </div>
        <div className="flex items-center">
          <img src={phone} alt="Find us" className="h-8 w-8 inline-block" />
          <div className="inline-block pl-3">
            <p>9876543210</p>
          </div>
        </div>
        <div className="flex items-center">
          <img src={mail} alt="Find us" className="h-8 w-8 inline-block" />
          <div className="inline-block pl-3">
            <p>groceze@gmail.com</p>
          </div>
        </div>
      </div>
      <p className="flex justify-center pt-5">Copyright &copy; {year.getFullYear()} | Groceze - All rights reserved</p>
    </footer>

  )
}

export default Footer