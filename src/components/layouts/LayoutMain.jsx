import React, { useEffect, useState } from 'react'
import { Outlet, Link } from 'react-router-dom'
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"
import { FaTiktok } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { IoIosMail } from "react-icons/io"
import { BiSolidPhoneCall } from "react-icons/bi";
import { MdLogin } from "react-icons/md"
import { FaPlus } from "react-icons/fa6";

const links = [
    {
        link: "/",
        text: "INICIO",
        id: 1,
    },
    // {
    //     link: "/buscar",
    //     text: "BUSCAR PROPIEDADES",
    //     id: 2,
    // },
    // {
    //     link: "/ia/inicioia",
    //     text: "IA",
    //     id: 3,
    // },
    // {
    //     link: "/asesores",
    //     text: "ASESORES",
    //     id: 4,
    // },
    // {
    //     link: "/contacto",
    //     text: "CONTACTOS",
    //     id: 5,
    // },
];

const LayoutMain = () => {

    return (
        <>
            <div>
                <header className="bg-white">
                    <div className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
                        <a className="block text-blue-900" href="#">
                            <span className="sr-only">Home</span>
                            <img src="/public/img/logoss.png" alt="" width="50" height="20" />

                        </a>

                        <div className="flex flex-1 items-center justify-end md:justify-between">
                            <nav aria-label="Global" className="hidden md:block">
                                <ul className="flex items-center gap-6 text-sm">
                                    <li>
                                        <a className="text-gray-500 transition hover:text-gray-500/75" href="#"> Planear </a>
                                    </li>

                                    <li>
                                        <a className="text-gray-500 transition hover:text-gray-500/75" href="#"> Hacer </a>
                                    </li>

                                    <li>
                                        <a className="text-gray-500 transition hover:text-gray-500/75" href="#"> Verificar </a>
                                    </li>

                                    <li>
                                        <a className="text-gray-500 transition hover:text-gray-500/75" href="#"> Actuar </a>
                                    </li>

                                    <li>
                                        <a className="text-gray-500 transition hover:text-gray-500/75" href="#"> Parametrización </a>
                                    </li>

                                    <li>
                                        <a className="text-gray-500 transition hover:text-gray-500/75" href="#"> Reportes </a>
                                    </li>
                                </ul>
                            </nav>

                            <div className="flex items-center gap-4">
                                <div className="sm:flex sm:gap-4">
                                    <a
                                        className="block rounded-md bg-blue-800 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-teal-700"
                                        href="#"
                                    >
                                        Login
                                    </a>

                                    <a
                                        className="hidden rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-teal-600 transition hover:text-teal-600/75 sm:block"
                                        href="#"
                                    >
                                        Register
                                    </a>
                                </div>

                                <button
                                    className="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden"
                                >
                                    <span className="sr-only">Toggle menu</span>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="size-5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </header>
            </div>
        </>
    )
}
export default LayoutMain
