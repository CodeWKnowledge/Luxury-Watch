import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-black text-brand-white py-16 px-6 md:px-12 border-t luxury-border">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center">
                <div className="mb-8 md:mb-0">
                    <Link to="/" className="text-brand-gold font-serif text-2xl mb-2 block">
                        AURELIA TIME
                    </Link>
                    <p className="text-brand-gray text-sm tracking-wide">
                        Premium Watches & Jewelry – Nigeria
                    </p>
                </div>

                <div className="flex flex-wrap gap-x-12 gap-y-6 text-sm uppercase tracking-[0.08em]">
                    <Link to="/shop" className="text-brand-white hover:text-brand-gold transition-colors">
                        Shop
                    </Link>
                    <a href="#" className="text-brand-white hover:text-brand-gold transition-colors">
                        Contact
                    </a>
                    <a href="#" className="flex items-center space-x-2 text-brand-white hover:text-brand-gold transition-colors">
                        <Instagram size={18} />
                        <span>Instagram</span>
                    </a>
                </div>
            </div>

            <div className="mt-16 text-center text-brand-gray text-xs tracking-widest border-t luxury-border pt-8 opactiy-50">
                &copy; {new Date().getFullYear()} AURELIA TIME. ALL RIGHTS RESERVED.
            </div>
        </footer>
    );
};

export default Footer;
