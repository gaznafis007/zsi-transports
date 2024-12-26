import React from "react";
import Button from "../Button/Button";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-yellow-400 px-8 md:px-24 py-4 md:py-16">
      <div className="flex flex-col md:flex-row space-x-2 md:justify-center">
        <div className="w-full md:w-1/4">
          <h1 className="text-4xl font-semibold">ZSI Transport</h1>
          <p className="my-4 text-thin">
            Spanning from the bustling energy of New York to over 300 cities
            worldwide, RPC Limo is your trusted partner in sophisticated travel
            logistics. We pledge to provide a smooth transition from the outset
            of your journey to its conclusion, ensuring every leg of your trip
            is executed with precision and elegance.
          </p>
          <Button>Book Now Pay Later</Button>
        </div>
        <div className="w-full md:w-1/4 md:text-center">
          <h3 className="text-2xl mt-6 md:mt-0">Quick Links</h3>
          <ul className="space-y-2 mt-4">
            <li className="hover:text-white">Our Fleet</li>
            <li className="hover:text-white">Our Gallery</li>
            <li className="hover:text-white">Contact Us</li>
            <li className="hover:text-white">Privacy Policy</li>
            <li className="hover:text-white">Book A Ride</li>
          </ul>
        </div>
        <div className="w-full md:w-1/4 md:text-center">
          <h3 className="text-2xl mt-6 md:mt-0 capitalize">our services</h3>
          <ul className="space-y-2 mt-4">
            <li className="hover:text-white">Corporate Travel</li>
            <li className="hover:text-white">Airport Transfer</li>
            <li className="hover:text-white">Wedding Transfer</li>
            <li className="hover:text-white">Charter Service</li>
            <li className="hover:text-white">Cruise Port Transfer</li>
          </ul>
        </div>
        <div className="w-full md:w-1/4">
          <p>
            If you are a rider or want to use our platform to ride please
            download RPC LIMO app.
          </p>
          <p>
            If you are a driver or want to drive with us please download RPC
            DRIVER app.
          </p>
        </div>
      </div>
      <h2 className="mt-8 text-center text-thin">Copyright © RPC Limo 2025 - Developed by Gazi Nafis Md ABdulla</h2>
    </footer>
  );
};

export default Footer;
