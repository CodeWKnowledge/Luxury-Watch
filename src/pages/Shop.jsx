import React, { useState, useRef, useEffect } from 'react';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';
import { ChevronDown, Filter, SlidersHorizontal } from 'lucide-react';

const Shop = () => {
    const [category, setCategory] = useState('All');
    const [sort, setSort] = useState('Newest');
    const [activeDropdown, setActiveDropdown] = useState(null); // 'category', 'sort', or null

    // Refs for clicking outside
    const dropdownRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setActiveDropdown(null);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const toggleDropdown = (name) => {
        setActiveDropdown(activeDropdown === name ? null : name);
    };

    const handleSelectCategory = (cat) => {
        setCategory(cat);
        setActiveDropdown(null);
    };

    const handleSelectSort = (s) => {
        setSort(s);
        setActiveDropdown(null);
    };

    const filteredProducts = products.filter(p =>
        category === 'All' || p.category === category
    );

    // Sorting logic (can be expanded)
    const sortedProducts = [...filteredProducts].sort((a, b) => {
        if (sort === 'Price Low to High') return a.price - b.price;
        if (sort === 'Price High to Low') return b.price - a.price;
        return 0; // Default: 'Newest' (no specific date in mock data yet)
    });

    return (
        <div className="pt-32 pb-24 px-4 md:px-12 bg-brand-black min-h-screen animate-fade-in">
            <div className="max-w-7xl mx-auto">
                {/* Top Section */}
                <div className="text-center mb-12 md:mb-16">
                    <h1 className="text-4xl md:text-6xl font-serif text-brand-white mb-6 italic">Shop Collection</h1>
                    <div className="w-20 h-[1px] bg-brand-gold mx-auto opacity-30"></div>
                </div>

                {/* Filter Bar */}
                <div className="mb-12 py-4 md:py-6 border-y luxury-border" ref={dropdownRef}>
                    <div className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-0">
                        {/* Filters Group */}
                        <div className="flex items-center justify-center md:justify-start gap-8 md:gap-12 w-full md:w-auto">
                            {/* Category Filter */}
                            <div className="relative">
                                <button
                                    onClick={() => toggleDropdown('category')}
                                    className={`flex items-center gap-2 text-[10px] md:text-xs uppercase tracking-[0.2em] transition-colors py-2 ${activeDropdown === 'category' ? 'text-brand-gold' : 'text-brand-white hover:text-brand-gold'
                                        }`}
                                >
                                    <Filter size={12} className="hidden sm:block" />
                                    <span>Category: <span className="text-brand-gold">{category}</span></span>
                                    <ChevronDown size={14} className={`transition-transform duration-300 ${activeDropdown === 'category' ? 'rotate-180' : ''}`} />
                                </button>

                                {activeDropdown === 'category' && (
                                    <div className="absolute top-full left-1/2 -translate-x-1/2 md:left-0 md:translate-x-0 mt-2 w-48 bg-brand-charcoal border luxury-border z-30 p-4 space-y-4 animate-fade-in shadow-2xl">
                                        {['All', 'Watches', 'Jewelry'].map(cat => (
                                            <button
                                                key={cat}
                                                onClick={() => handleSelectCategory(cat)}
                                                className={`block w-full text-left text-[10px] uppercase tracking-widest transition-colors ${category === cat ? 'text-brand-gold' : 'text-brand-gray hover:text-brand-white'
                                                    }`}
                                            >
                                                {cat}
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </div>

                            {/* Sort Filter */}
                            <div className="relative">
                                <button
                                    onClick={() => toggleDropdown('sort')}
                                    className={`flex items-center gap-2 text-[10px] md:text-xs uppercase tracking-[0.2em] transition-colors py-2 ${activeDropdown === 'sort' ? 'text-brand-gold' : 'text-brand-white hover:text-brand-gold'
                                        }`}
                                >
                                    <SlidersHorizontal size={12} className="hidden sm:block" />
                                    <span>Sort: <span className="text-brand-gold">{sort}</span></span>
                                    <ChevronDown size={14} className={`transition-transform duration-300 ${activeDropdown === 'sort' ? 'rotate-180' : ''}`} />
                                </button>

                                {activeDropdown === 'sort' && (
                                    <div className="absolute top-full right-1/2 translate-x-1/2 md:right-auto md:left-0 md:translate-x-0 mt-2 w-56 bg-brand-charcoal border luxury-border z-30 p-4 space-y-4 animate-fade-in shadow-2xl">
                                        {['Newest', 'Price Low to High', 'Price High to Low'].map(s => (
                                            <button
                                                key={s}
                                                onClick={() => handleSelectSort(s)}
                                                className={`block w-full text-left text-[10px] uppercase tracking-widest transition-colors ${sort === s ? 'text-brand-gold' : 'text-brand-gray hover:text-brand-white'
                                                    }`}
                                            >
                                                {s}
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Results Count */}
                        <div className="text-[10px] uppercase tracking-[0.2em] text-brand-gray/60 italic border-t md:border-t-0 pt-4 md:pt-0 w-full md:w-auto text-center md:text-right">
                            Showing {filteredProducts.length} Results
                        </div>
                    </div>
                </div>

                {/* Product Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12 md:gap-12">
                    {sortedProducts.map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Shop;
