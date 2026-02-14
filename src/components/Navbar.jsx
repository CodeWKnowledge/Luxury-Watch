import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingCart, Menu, X } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { cartCount } = useCart();
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 w-full h-20 z-50 transition-all duration-300 flex items-center px-6 md:px-12 ${isScrolled || isMobileMenuOpen || location.pathname !== '/' ? 'bg-brand-black shadow-lg' : 'bg-transparent'
                }`}
        >
            <div className="flex w-full items-center justify-between">
                {/* Left: Logo */}
                <Link to="/" className="text-brand-gold font-serif text-2xl tracking-tighter hover:opacity-90 transition-opacity">
                    AURELIA TIME
                </Link>

                {/* Center: Desktop Links */}
                <div className="hidden md:flex items-center space-x-12">
                    <Link to="/" className="text-brand-white hover:text-brand-gold transition-colors text-sm uppercase tracking-[0.08em]">
                        Home
                    </Link>
                    <Link to="/shop" className="text-brand-white hover:text-brand-gold transition-colors text-sm uppercase tracking-[0.08em]">
                        Shop
                    </Link>
                </div>

                {/* Right: Icons */}
                <div className="flex items-center space-x-6">
                    <button className="text-brand-white hover:text-brand-gold transition-colors">
                        <Search size={20} strokeWidth={1.5} />
                    </button>
                    <Link to="/cart" className="relative text-brand-white hover:text-brand-gold transition-colors">
                        <ShoppingCart size={20} strokeWidth={1.5} />
                        {cartCount > 0 && (
                            <span className="absolute -top-2 -right-2 bg-brand-gold text-brand-black text-[8px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                                {cartCount}
                            </span>
                        )}
                    </Link>
                    {/* Mobile Toggle */}
                    <button
                        className="md:hidden text-brand-white hover:text-brand-gold transition-colors"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="absolute top-20 left-0 w-full bg-brand-black border-t luxury-border py-8 flex flex-col items-center space-y-6 md:hidden animate-fade-in">
                    <Link
                        to="/"
                        className="text-brand-white hover:text-brand-gold transition-colors text-lg uppercase tracking-[0.1em]"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        Home
                    </Link>
                    <Link
                        to="/shop"
                        className="text-brand-white hover:text-brand-gold transition-colors text-lg uppercase tracking-[0.1em]"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        Shop
                    </Link>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
