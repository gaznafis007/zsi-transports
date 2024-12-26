"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { MdCall } from "react-icons/md";
import { FaBars } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { useSelector } from "react-redux";

const Navbar = () => {
  const pathname = usePathname();
  const {data} = useSelector((state) => state.user);

  console.log(data)
  const [open, setOpen] = useState(false)
  const navItems = [
    {
      name: "home",
      href: "/",
    },
    {
      name: "about",
      href: "/about",
    },
    {
      name: "services",
      href: "/services",
    },
    {
      name: "fleet",
      href: "/fleet",
    },
    {
      name: "got a quote",
      href: "/quote",
    },
    {
      name: "rate",
      href: "/rate",
    },
  ];
  return (
    <nav className="bg-slate-900 px-4 py-6 flex flex-col md:flex-row items-center justify-between">
      <div className="w-full md:w-1/2 flex flex-row justify-between items-center">
        <div className="flex flex-col md:flex-row space-x-6 items-center">
          <h1 className="text-bol text-3xl text-yellow-400">ZSI transports</h1>
          <ul className="hidden md:flex flex-row space-x-3">
            {navItems?.map((item) => (
              <li
                key={item?.href}
                className={`${
                  pathname == item?.href ? "text-white" : "text-yellow-400"
                } hover:text-white capitalize`}
              >
                <Link href={item?.href}>{item?.name}</Link>
              </li>
            ))}
            <li
              className={`${
                pathname == "/driverLogin" ? "text-white" : "text-yellow-400"
              } hover:text-white capitalize font-bold`}
            >
              <Link href={"/driverLogin"}>driver login</Link>
            </li>
          </ul>
        </div>
        <div className="md:hidden">
        {
            open ? <RxCross2 onClick={() =>setOpen(!open)} className="text-yellow-400 cursor-pointer" /> :
        <FaBars onClick={() =>setOpen(!open)} className="text-yellow-400 cursor-pointer" />
        }
        {
            open && (
                <ul className="flex md:hidden flex-col z-20 space-y-2 mt-4 shadow-md shadow-slate-400 p-3">
            {navItems?.map((item) => (
              <li
                key={item?.href}
                className={`${
                  pathname == item?.href ? "text-white" : "text-yellow-400"
                } hover:text-white capitalize`}
              >
                <Link href={item?.href}>{item?.name}</Link>
              </li>
            ))}
            <li
              className={`${
                pathname == "/driverLogin" ? "text-white" : "text-yellow-400"
              } hover:text-white capitalize font-bold`}
            >
              <Link href={"/driverLogin"}>driver login</Link>
            </li>
          </ul>
            )
        }
        </div>
      </div>
      <div className="mt-6 md:mt-0 flex flex-col md:flex-row space-y-4  md:space-y-0 md:space-x-4 items-center">
        <div className="w-full md:w-1/2 flex flex-row justify-center md:justify-end items-center space-x-2">
          <button className="border-2 rounded-full border-yellow-400 hover:border-0 hover:bg-yellow-400 text-yellow-400 hover:text-slate-900 p-1 uppercase">
            <MdCall />
          </button>
          <h2 className="text-yellow-400 hover:text-white">1-833 711 4606</h2>
        </div>
        <div className="flex flex-row space-x-3 items-center">
        <button className="border-2 rounded-md border-yellow-400 hover:border-0 hover:bg-yellow-400 text-yellow-400 hover:text-slate-900 px-2 py-1 uppercase">
          book now pay later
        </button>
        {
          data?.user?.name ? <p className="text-yellow-400">{data?.user?.name}</p> : (
            <button className="border-2 rounded-md border-yellow-400 hover:border-0 hover:bg-yellow-400 text-yellow-400 hover:text-slate-900 px-2 py-1 uppercase">
          <Link href={'/signin'}>account login</Link>
        </button>
          )
        }
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
