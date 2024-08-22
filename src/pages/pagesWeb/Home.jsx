import React, { Fragment, useState } from 'react'
import { FaLocationDot } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { MdExpandCircleDown } from "react-icons/md";

function Arrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "gray" }}
            onClick={onClick}
        />
    )
}

const options = [
    { value: 'all', label: 'Todos los inmuebles' },
    { value: 'house', label: 'Casas' },
    { value: 'department', label: 'Departamentos' },
    { value: 'office', label: 'Oficinas' },
    { value: 'lot', label: 'Terrenos' },
    { value: 'rental', label: 'Locales' },
    { value: 'rental', label: 'Condominio' },
    { value: 'rental', label: 'Hotel' },
    { value: 'rental', label: 'Oportunidades' },
    { value: 'rental', label: 'Proyectos' },
    { value: 'rental', label: 'Aires' },
    { value: 'rental', label: 'Edificios' }
];

const Home = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(options[0]);

    const toggleDropdown = () => setIsOpen(!isOpen);

    const selectOption = (option) => {
        setSelectedOption(option);
        setIsOpen(false);
    };
    const [inputValue, setInputValue] = useState('');
    const [inputValue1] = useState('');
    const [inputValue2] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const products = [
        {
            id: 1,
            locate: 'Lima, Lima, Miraflores',
            href: '/item',
            imageSrc: '/public/img/dep3.jpeg',
            imageAlt: "Front of men's Basic Tee in black.",
            price: 'S/. 360,000.00 ',
            ruc: 'En construcción',
            society: '2 trimestre 2024',
            type: 'HOTEL EN VENTA',
            area: '5,642.00 m²',
        },
        {
            id: 2,
            locate: 'Lima, Lima, Miraflores',
            href: '/item',
            imageSrc: '/public/img/dep6.webp',
            imageAlt: "Front of men's Basic Tee in black.",
            price: 'S/. 360,000.00 ',
            ruc: 'En construcción',
            society: 'Junio 2025',
            type: 'HOTEL EN VENTA',
            area: '5,642.00 m²',
        },
        {
            id: 3,
            locate: 'Lima, Lima, Miraflores',
            href: '/item',
            imageSrc: '/public/img/dep1.jpeg',
            imageAlt: "Front of men's Basic Tee in black.",
            price: 'S/. 360,000.00 ',
            ruc: 'En construcción',
            society: 'Junio 2025',
            type: 'HOTEL EN VENTA',
            area: '5,642.00 m²',
        },

    ]


    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        nextArrow: <Arrow />,
        prevArrow: <Arrow />,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (

        <main className='bg-gray-100'>
            <div className="relative w-full h-160 overflow-hidden bg-cover bg-center">

            </div>
        </main>
    )
}

export default Home