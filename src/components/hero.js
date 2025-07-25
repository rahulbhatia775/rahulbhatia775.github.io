import React from 'react';
import heroimg from '../assets/heroimg.jpeg';
import resumePDF from '../assets/resu.pdf';

function Hero() {
    return (
        <section className="relative overflow-hidden text-white body-font py-32">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-black to-purple-700 bg-[length:200%_200%] animate-gradient-x z-0"></div>

            <div className="relative z-10 container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left mb-16 md:mb-0">
                    <h1 className="sm:text-5xl text-4xl font-bold mb-4 leading-tight">
                        Hi, I'm <span className="text-5xl font-[Lobster]">Rahul Bhatia</span>
                    </h1>
                    <h2 className="text-red-500 text-5xl font-extrabold mb-6">AI/ML and Web Designer</h2>
                    <p className="mb-6 leading-relaxed text-lg max-w-xl text-gray-200">
                        A passionate AI & ML enthusiast. I design intuitive web experiences and build smart solutions.
                    </p>

                    <div className="mb-6">
                        <p className="font-semibold mb-2">Find Me on</p>
                        <div className="flex gap-5 text-2xl">
                            <a href="https://www.instagram.com/rahulbhatia_rb/" className="hover:text-red-500" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-instagram"></i>
                            </a>
                            <a href="https://www.linkedin.com/in/rahul-bhatia-9782802b2/" className="hover:text-red-500" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-linkedin"></i>
                            </a>
                            <a href="https://wa.me/918860888768/" className="hover:text-green-500" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-whatsapp"></i>
                            </a>
                        </div>
                    </div>

                    <div className="flex gap-6">
                        <a
                            href="#contact"
                            className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-6 rounded-xl shadow-lg"
                        >
                            Hire Me
                        </a>
                        <a
                            href="https://drive.google.com/file/d/1rGKqXo5dc5oPqawWKAwa8682C1Udzw0j/view?usp=drive_link"
                            target="_blank"
                            //download="Rahul_Bhatia_Resume.pdf"
                            className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-6 rounded-xl shadow-lg"
                        >
                            Resume
                        </a>
                    </div>
                </div>

                <div className="lg:max-w-[30vw] lg:w-full md:w-1/2 w-5/6">
                    <img
                        className="object-cover object-center rounded border-2 border-solid border-gray-300"
                        alt="hero"
                        src={heroimg}
                    />
                </div>
            </div>
        </section>
    );
}

export default Hero;
