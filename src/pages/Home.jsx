import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Truck, Users, ArrowRight, Mail } from 'lucide-react';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';

const Home = () => {
    // Only 4 featured products
    const featuredProducts = products.slice(0, 4);

    return (
        <div className="animate-fade-in pb-12">
            {/* 1️⃣ Hero Section */}
            <section className="relative h-screen flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="/Images/Watch-15.jpg"
                        alt="Luxury Watch Background"
                        className="w-full h-full object-cover scale-105 animate-[pulse_10s_infinite_alternate]"
                    />
                    <div className="absolute inset-0 bg-black/60"></div>
                </div>

                <div className="relative z-10 text-center px-4 max-w-4xl">
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-brand-white mb-6 leading-tight">
                        Timeless Luxury.<br />Delivered Nationwide.
                    </h1>
                    <p className="text-brand-gray text-lg md:text-xl font-light mb-10 tracking-wide uppercase">
                        Premium luxury watches & jewelry
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link
                            to="/shop"
                            className="w-full sm:w-[200px] bg-brand-gold text-brand-black py-4 rounded-[4px] text-xs font-bold uppercase tracking-[0.1em] hover:bg-brand-gold/90 transition-all hover:shadow-[0_0_20px_rgba(198,167,94,0.3)]"
                        >
                            Shop Now
                        </Link>
                        <Link
                            to="/shop"
                            className="w-full sm:w-[200px] border border-brand-gold text-brand-gold py-4 rounded-[4px] text-xs font-bold uppercase tracking-[0.1em] hover:bg-brand-gold hover:text-brand-black transition-all"
                        >
                            View Collection
                        </Link>
                    </div>
                </div>
            </section>

            {/* 2️⃣ Core Values Strip */}
            <section className="bg-brand-charcoal py-20 px-6 border-y luxury-border">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center text-brand-white">
                    <div className="flex flex-col items-center">
                        <Users className="text-brand-gold mb-4" size={32} strokeWidth={1} />
                        <h3 className="text-sm font-bold uppercase tracking-[0.15em] mb-1">10,000+ Happy Customers</h3>
                        <p className="text-xs text-brand-gray uppercase tracking-widest">Trusted Excellence</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <ShieldCheck className="text-brand-gold mb-4" size={32} strokeWidth={1} />
                        <h3 className="text-sm font-bold uppercase tracking-[0.15em] mb-1">100% Authentic Products</h3>
                        <p className="text-xs text-brand-gray uppercase tracking-widest">Original Quality</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <Truck className="text-brand-gold mb-4" size={32} strokeWidth={1} />
                        <h3 className="text-sm font-bold uppercase tracking-[0.15em] mb-1">Fast Nationwide Delivery</h3>
                        <p className="text-xs text-brand-gray uppercase tracking-widest">Reliable Shipping</p>
                    </div>
                </div>
            </section>

            {/* 3️⃣ Featured Products Section (Limited to 4) */}
            <section className="bg-brand-black py-24 px-6 md:px-12">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-serif text-brand-white mb-4 italic">Featured Collection</h2>
                        <div className="w-24 h-[1px] bg-brand-gold mx-auto opacity-30"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                        {featuredProducts.map(product => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                </div>
            </section>

            {/* 4️⃣ NEW: Shop By Category Section */}
            <section className="bg-brand-black py-12 px-6">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                    <Link to="/shop" className="relative h-[500px] overflow-hidden group">
                        <img src="/Images/Watch-11.jpg" alt="Watches" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors"></div>
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                            <h3 className="text-4xl font-serif text-brand-white mb-4 italic">Elegant Watches</h3>
                            <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-gold border-b border-brand-gold/0 group-hover:border-brand-gold transition-all">Explore Watches</span>
                        </div>
                    </Link>
                    <Link to="/shop" className="relative h-[500px] overflow-hidden group">
                        <img src="/Images/Watch-6.jpg" alt="Jewelry" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors"></div>
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                            <h3 className="text-4xl font-serif text-brand-white mb-4 italic">Fine Jewelry</h3>
                            <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-gold border-b border-brand-gold/0 group-hover:border-brand-gold transition-all">Explore Jewelry</span>
                        </div>
                    </Link>
                </div>
            </section>

            {/* 5️⃣ NEW: The Craftsmanship (Image/Text Split) */}
            <section className="bg-brand-charcoal py-24 px-6 md:px-12 overflow-hidden">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="order-2 lg:order-1 space-y-8 max-w-lg">
                        <h2 className="text-4xl md:text-5xl font-serif text-brand-white leading-tight italic">The Apex of Craftsmanship</h2>
                        <div className="w-20 h-1 bg-brand-gold opacity-50"></div>
                        <p className="text-brand-gray leading-relaxed text-lg">
                            Every piece in our collection is a testament to the pursuit of perfection. From the intricate gears of our automatic movements to the flawless clarity of our diamonds, luxury is in every detail.
                        </p>
                        <p className="text-brand-gray/80 leading-relaxed italic">
                            "True luxury is not just about what you wear, but the story of excellence it represents."
                        </p>
                        <Link to="/shop" className="inline-flex items-center space-x-3 text-brand-gold hover:text-brand-white transition-colors group">
                            <span className="text-xs font-bold uppercase tracking-widest">Learn About Our Quality</span>
                            <ArrowRight size={16} className="transition-transform group-hover:translate-x-2" />
                        </Link>
                    </div>
                    <div className="order-1 lg:order-2">
                        <div className="relative p-8 border luxury-border">
                            <img src="/Images/Watch-20.jpg" alt="Craftsmanship" className="w-full aspect-[4/5] object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700 shadow-2xl" />
                            <div className="absolute -bottom-6 -left-6 bg-brand-gold text-brand-black p-8 hidden md:block">
                                <span className="block text-2xl font-serif italic mb-1">Established 2016</span>
                                <span className="text-[10px] uppercase tracking-widest font-bold">Nigeria's Finest Selection</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6️⃣ Secondary CTA Section */}
            <section className="relative py-32 px-6 text-center overflow-hidden">
                <div className="absolute inset-0 bg-brand-black"></div>
                <div className="absolute inset-0 opacity-10">
                    <img src="/Images/Watch-4.jpg" alt="" className="w-full h-full object-cover grayscale" />
                </div>
                <div className="relative z-10 max-w-4xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-serif text-brand-white mb-8 italic">New Arrivals Just Landed</h2>
                    <p className="text-brand-gray mb-12 uppercase tracking-[0.2em] text-sm">Experience the 2026 Winter Collection before anyone else.</p>
                    <Link
                        to="/shop"
                        className="inline-block bg-brand-gold text-brand-black px-12 py-5 text-sm font-bold uppercase tracking-[0.15em] hover:bg-brand-gold/90 transition-all hover:scale-105 shadow-xl luxury-glow"
                    >
                        View New Arrivals
                    </Link>
                </div>
            </section>

            {/* 7️⃣ Minimal CTA Banner (Existing/Refined) */}
            <section className="bg-brand-charcoal py-28 px-6 text-center relative overflow-hidden border-t luxury-border">
                <div className="relative z-10 max-w-2xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-serif text-brand-white mb-10 leading-relaxed italic">
                        "Experience Luxury in Every Detail."
                    </h2>
                    <Link
                        to="/shop"
                        className="inline-block border border-brand-gold text-brand-gold px-12 py-5 text-sm font-bold uppercase tracking-[0.15em] hover:bg-brand-gold hover:text-brand-black transition-all"
                    >
                        Shop All Products
                    </Link>
                </div>
            </section>

            {/* 8️⃣ NEW: Newsletter Section */}
            <section className="bg-black py-24 px-6 border-t luxury-border">
                <div className="max-w-4xl mx-auto text-center space-y-8">
                    <div className="flex justify-center mb-4">
                        <Mail className="text-brand-gold" size={40} strokeWidth={1} />
                    </div>
                    <h2 className="text-4xl font-serif text-brand-white italic">Stay Connected</h2>
                    <p className="text-brand-gray uppercase tracking-widest text-xs">Join our inner circle for exclusive access to new releases & private viewing events.</p>
                    <form className="flex flex-col md:flex-row gap-4 max-w-xl mx-auto pt-6" onSubmit={(e) => e.preventDefault()}>
                        <input
                            type="email"
                            placeholder="Email Address"
                            className="flex-grow bg-brand-charcoal border luxury-border px-6 py-4 text-brand-white outline-none focus:border-brand-gold transition-colors text-sm"
                        />
                        <button className="bg-brand-gold text-brand-black px-10 py-4 text-xs font-bold uppercase tracking-widest hover:bg-brand-gold/90 transition-all">
                            Join Now
                        </button>
                    </form>
                </div>
            </section>
        </div>
    );
};

export default Home;
