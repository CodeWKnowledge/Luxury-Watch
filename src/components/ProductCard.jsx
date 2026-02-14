import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product }) => {
    const { addToCart } = useCart();

    return (
        <Link to={`/product/${product.id}`} className="group relative block animate-fade-in">
            <div className="relative aspect-[4/5] overflow-hidden bg-brand-charcoal mb-6 border luxury-border transition-colors duration-500 group-hover:border-brand-gold/40">
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Quick Add Overlay */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <button
                        className="w-full bg-brand-gold text-brand-black text-xs font-bold py-3 uppercase tracking-widest transition-transform translate-y-4 group-hover:translate-y-0 active:scale-95"
                        onClick={(e) => {
                            e.preventDefault();
                            addToCart(product);
                        }}
                    >
                        Add to Cart
                    </button>
                </div>
            </div>

            <div className="text-center">
                <h3 className="text-brand-white font-serif text-lg mb-1 group-hover:text-brand-gold transition-colors">{product.name}</h3>
                <p className="text-brand-gold font-sans text-sm tracking-wider mb-3 leading-none">
                    ₦{product.price.toLocaleString()}
                </p>
                <div className="w-8 h-[1px] bg-brand-gold opacity-30 mx-auto transition-all group-hover:w-16"></div>
            </div>
        </Link>
    );
};

export default ProductCard;
