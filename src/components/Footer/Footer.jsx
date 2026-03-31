import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
    return (
        <footer className="bg-zinc-950 border-t border-red-900/50 pt-16 pb-10">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-15 gap-12 text-white">
                    {/* Logo & Description */}
                    <div className="md:col-span-5">
                        <div className="flex items-center gap-3 mb-6">

                            <div className="flex items-center gap-1 font-bold text-4xl pb-2 bg-linear-to-r from-blue-800 to-blue-400 bg-clip-text text-transparent ">

                                DigiTools
                            </div>
                        </div>

                        <p className="text-zinc-400 text-lg max-w-md">
                          Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.
                        </p>

                        {/* <div className="mt-8 flex gap-6 text-2xl text-zinc-500">
                            <a href="#" className="hover:text-red-500 transition-colors"><FaTwitter /></a>
                            <a href="#" className="hover:text-red-500 transition-colors"><FaGithub /></a>
                            <a href="#" className="hover:text-red-500 transition-colors"><FaLinkedin /></a>
                            <a href="#" className="hover:text-red-500 transition-colors"><FaDiscord /></a>
                            <a href="#" className="hover:text-red-500 transition-colors"><FaYoutube /></a>
                        </div> */}
                    </div>

                    {/* Quick Links */}
                    <div className="md:col-span-2 text-white">
                        <h3 className=" font-semibold mb-6 text-lg">Product</h3>
                        <ul className="space-y-4 text-zinc-400">
                            <li>
                                <a href="#" className="hover:text-white transition">
                                    Models
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-white transition">
                                    Pricing
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-white transition">
                                    Features
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-white transition">
                                    API
                                </a>
                            </li>
                        </ul>
                    </div>


                    <div className="md:col-span-2 text-white">
                        <h3 className=" font-semibold mb-6 text-lg">Company</h3>
                        <ul className="space-y-4 text-zinc-400">
                            <li>
                                <a href="#" className="hover:text-white transition">
                                    About Us
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-white transition">
                                    Blog
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-white transition">
                                    Careers
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-white transition">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>


                    <div className="md:col-span-3 text-white">
                        <h3 className=" font-semibold mb-6 text-lg">Resources</h3>
                        <ul className="space-y-4 text-zinc-400">
                            <li>
                                <a href="#" className="hover:text-white transition">
                                    Privacy Policy
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-white transition">
                                    Terms of Service
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-white transition">
                                    Cookie Settings
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="md:col-span-3 text-white">
                        <h6 className="text-lg font-semibold text-white pb-7">Social</h6>
                        <div className=" flex flex-row gap-6 ">
                            <a className="">
                                <FaInstagram />
                            </a>
                            <a>
                               <FaFacebookF />
                            </a>
                            <a>
                              <FaXTwitter />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-16 pt-8 border-t border-zinc-800 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-zinc-500">
                    <div>© {new Date().getFullYear()} DigiTools. All rights reserved.</div>

                    <div className="flex gap-6">
                        <ul className="flex gap-6">
                            <li>Privacy Policy</li>
                            <li>Terms of Service</li>
                            <li>Cookies</li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;