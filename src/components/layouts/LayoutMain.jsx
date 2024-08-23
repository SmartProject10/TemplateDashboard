import React, { useEffect, useState } from "react";
import { Outlet, Link, useNavigate, useLocation } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { FaTiktok } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { BiSolidPhoneCall } from "react-icons/bi";
import { MdLogin } from "react-icons/md";
import { FaPlus } from "react-icons/fa6";

import { MainHeader } from "../ui/MainHeader";

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
    const { pathname } = useLocation();

    return (
        <>
            {pathname !== "/login" && pathname !== "/register" && <MainHeader />}

            <Outlet />
        </>
    );
};
export default LayoutMain;
