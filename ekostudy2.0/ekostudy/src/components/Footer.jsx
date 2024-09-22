import React from 'react';
import FooterBanner from './FooterBanner';
import Youtube from './Icons/Youtube';
import Facebook from './Icons/Facebook';
import Phone from './Icons/Phone';
import TwitterX from './Icons/TwitterX';
import Email from './Icons/Email';

const Footer = () => {
    return (
        <footer>
            <FooterBanner />
            <div className="bg-[#121c1a] pt-40 xl:pt-64 pb-8 text-white ">
                <div className='px-10 xl:px-24 flex flex-col lg:flex-row items-start gap-10 lg:gap-16 xl:gap-28 mb-20 lg:mb-36 xl:mb-40 text-[15px] md:text-[17px] font-normal lg:font-medium'>
                    <div className="flex flex-col lg:flex-row items-start justify-between gap-10 lg:gap-8 xl:gap-16 w-full">
                        <div className="flex flex-col gap-6 w-full">
                            <img src="/logo.png" alt="EkoStudy logo" className="w-32 md:w-40" />
                            <div className="flex flex-row gap-4">
                                <a href="https://facebook.com" target="_blank"><Facebook /></a>
                                <a href="https://x.com" target="_blank"><TwitterX /></a>
                                <a href="https://youtube.com" target="_blank"><Youtube /></a>
                            </div>
                        </div>
                        <div className="flex flex-col gap-6 w-full">
                            <h3 className="text-[#92B76D] font-bold text-base">OUR OFFICE</h3>
                            <p>EkoStudy, 104101 Ikorodu, <br/> Lagos.</p>
                            <div className='flex flex-col gap-1 mt-2 lg:mt-0'>
                                <a href="tel:+2348096044860" className="flex flex-row items-center">
                                    <Phone />
                                    <span className="ml-2">+234 809 604 4860</span>
                                </a>
                                <a href="mailto:johnayobami77@proton.me" className="flex flex-row items-center">
                                    <Email />
                                    <span className="ml-2">johnayobami77@proton.me</span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row gap-10 lg:gap-16 xl:gap-28 w-full">
                        <div className="flex flex-col gap-6 w-full">
                            <h3 className="text-[#92B76D] font-bold text-base">ABOUT</h3>
                            <ul className="space-y-1">
                                <li><a href="/about">About Us</a></li>
                                <li><a href="/courses">Courses</a></li>
                                <li><a href="/blog">Blog</a></li>
                                <li><a href="/instructor">Become an Instructor</a></li>
                                <li><a href="/events">Events</a></li>
                                <li><a href="/contact">Contact</a></li>
                            </ul>
                        </div>
                        <div className="flex flex-col gap-6 w-full">
                            <h3 className="text-[#92B76D] font-bold text-base">LINKS</h3>
                            <ul className="space-y-1">
                                <li><a href="/partners">Be a Partner</a></li>
                                <li><a href="/admission">Admission</a></li>
                                <li><a href="#">Features</a></li>
                                <li><a href="#">Help Center</a></li>
                                <li><a href="/resources">Resources</a></li>
                                <li><a href="/donate">Donate</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className='mx-10 xl:mx-24 mb-2 h-[1px] border-[#4C5F4E] bg-[#4C5F4E]' />
                <div className='px-10 xl:px-24 mt-4 flex flex-col lg:flex-row gap-2 lg:gap-0 items-start lg:items-center justify-between'>
                    <span>EkoStudy 2024 - <a href="https://github.com/codegallantx" target="_blank" className="text-[#4C5F4E] hover:text-[#FFCA0D] transition-all duration-300 ease-in-out">CodeGallantX</a></span>
                    <span className="flex flex-row gap-2 lg:gap-4">
                        <a href="#" className="hover:text-[#FFCA0D] transition-all duration-300 ease-in-out">Privacy Policy</a>
                        <span className='text-[#FFCA0D] text-lg font-thin'>|</span>
                        <a href="#" className="hover:text-[#FFCA0D] transition-all duration-300 ease-in-out">Our Terms</a>
                    </span>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
