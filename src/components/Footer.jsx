import React from "react";
import { FaFacebookF } from "react-icons/fa";
import {
  FaInstagram,
  FaXTwitter,
  FaEnvelope,
  FaArrowRight,
} from "react-icons/fa6";

function Footer() {
  return (
    <footer className="bg-black text-white  mt-10 overflow-hidden w-full">

      {/* Main Footer */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16 px-8 md:px-10 pt-9 pb-8">

        {/* About Us */}
        <div>
          <h4 className="text-base font-bold mb-5">
            About US
          </h4>

          <p className="text-sm md:text-[15px] leading-6 text-justify max-w-md">
            We believe books are more than just pages - they are windows into
            new worlds, teachers of wisdom, and companions for life. Our journey
            began with a passion for storytelling and a mission to make reading
            accessible, enjoyable, and inspiring for everyone.
          </p>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="text-base font-bold mb-5">
            NEWS LETTER
          </h4>

          <p className="text-sm mb-5">
            Stay updated with our latest trends
          </p>

          <div className="flex w-full " style={{maxWidth:'270px'}}>

            <input
              type="email"
              placeholder="E Mail"
              className="w-full h-10 px-3 text-sm text-black bg-white outline-none"
            />

            <button
              className="h-10 w-12 bg-yellow-500 hover:bg-yellow-600 flex items-center justify-center transition"
            >
              <FaArrowRight className="text-white text-lg" />
            </button>

          </div>
        </div>

        {/* Follow Us */}
        <div>
          <h4 className="text-base font-bold mb-5">
            FOLLOW US
          </h4>

          <p className="text-sm mb-5">
            Let us be social
          </p>

          <div className="flex items-center gap-5 text-lg">

            <a
              href="#"
              className="hover:text-yellow-500 transition"
            >
              <FaFacebookF />
            </a>

            <a
              href="#"
              className="hover:text-yellow-500 transition"
            >
              <FaInstagram />
            </a>

            <a
              href="#"
              className="hover:text-yellow-500 transition"
            >
              <FaXTwitter />
            </a>

            <a
              href="#"
              className="hover:text-yellow-500 transition"
            >
              <FaEnvelope />
            </a>

          </div>
        </div>

      </div>

      {/* Copyright */}
      <div className="border-t border-gray-800 text-center px-5 py-4">

        <p className="text-xs md:text-sm">
          Copyright © 2026 All rights reserved | This website is made with
          <span className="mx-1">♥</span>
          By Luminar Technolab
        </p>

      </div>

    </footer>
  );
}

export default Footer;