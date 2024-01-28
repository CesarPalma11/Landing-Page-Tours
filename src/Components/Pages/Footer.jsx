import React from 'react';
import './Footer.css'
import { FaEnvelope } from "react-icons/fa";
import { FaHouseChimney } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { FaPrint } from "react-icons/fa6";
import { AiFillFacebook } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="bg-light text-dark pt-5 pb-4">
        <div className="container text-center text-md-start">
            <div className='row text-center text-md-start'>
            <div className='col-md-3 col-lg-3 col-xl-3 x-auto mt-3'>
                <h5 className='text-uppercase mb-4 font-weight-bold text-primary'>Nosotros</h5>
                <hr className='mb-4'/>
                <p className='text-about-footer'>
                This is a paragraph. You can write your own content here, and fill in the blanks. What's
                 your story and where do you go from here? Tell the world about your business, and make this
                  text.
                </p>
            </div>


            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                <h5 className='text-uppercase mb-4 font-weight-bold text-primary'>Dejanos ayudarte</h5>
                <hr className='mb-4'/>
                <p>
                    <a href='http://localhost:3000/' className='text-dark'>Tu cuenta</a>
                </p>
                <p>
                    <a href='http://localhost:3000/' className='text-dark'>Tus ordenes</a>
                </p>
                <p>
                    <a href='http://localhost:3000/' className='text-dark'>Manejo de cuenta</a>
                </p>
                <p>
                    <a href='http://localhost:3000/' className='text-dark'>Ayuda</a>
                </p>
            </div>



            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                <h5 className='text-uppercase mb-4 font-weight-bold text-primary'>Dejanos ayudarte</h5>
                <hr className='mb-4'/>
                <p>
                    <a href='http://localhost:3000/' className='text-dark'>Tu cuenta</a>
                </p>
                <p>
                    <a href='http://localhost:3000/' className='text-dark'>Tus ordenes</a>
                </p>
                <p>
                    <a href='http://localhost:3000/' className='text-dark'>Manejo de cuenta</a>
                </p>
                <p>
                    <a href='http://localhost:3000/' className='text-dark'>Ayuda</a>
                </p>
            </div>


            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                <h5 className='text-uppercase mb-4 font-weight-bold text-primary'>Contacto</h5>
                <hr className='mb-4'/>
                <p>
                    <span className='fas fa-home me-3'> <FaHouseChimney /> Buenos Aires</span>
                </p>
                <p>
                    <span className='fas fa-envelope me-3'><FaEnvelope /> test@gmail.com</span>
                </p>
                <p>
                    <span className='fas fa-phone me-3'><FaPhone /> +53636363</span>
                </p>
                <p>
                    <span className='fas fa-print me-3'><FaPrint /> Buenos aires</span>
                </p>
                
            </div>

            <hr className='mb-4'/>

            <div className="text-center mb-2">

                <p>
                &copy;{new Date().getFullYear()} Copyright todos los derechos reservados
                </p>
            </div>

            <div className="text-center">

                <ul className="list-unstyled list-inline">

                    <li className='list-inline-item'>
                        <a href='http://localhost:3000/' className='text-dark'><AiFillFacebook /></a>
                    </li>
                    <li className='list-inline-item'>
                        <a href='http://localhost:3000/' className='text-dark'><FaTwitter /></a>
                    </li>
                    <li className='list-inline-item'>
                        <a href='http://localhost:3000/' className='text-dark'><FaInstagram /></a>
                    </li>
                    <li className='list-inline-item'>
                        <a href='http://localhost:3000/' className='text-dark'><FaYoutube /></a>
                    </li>
                </ul>
            </div>
            </div>
        </div>
    </footer>
  );
};

export default Footer;
