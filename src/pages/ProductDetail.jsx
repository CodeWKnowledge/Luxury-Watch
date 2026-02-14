import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import { Check, Truck, MessageCircle, ChevronRight, Minus, Plus } from 'lucide-react';

const ProductDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { addToCart } = useCart();

    const product = products.find(p => p.id === parseInt(id)) || products[0];
    const [selectedImage, setSelectedImage] = useState(product.image);
    const [quantity, setQuantity] = useState(1);

    const handleAddToCart = () => {
        addToCart(product, quantity);
    };

    const handleBuyNow = () => {
        addToCart(product, quantity);
        navigate('/cart');
    };

    const updateQty = (delta) => {
        setQuantity(prev => Math.max(1, prev + delta));
    };

    return (
        <div className="pt-32 pb-24 px-6 md:px-12 bg-brand-black min-h-screen animate-fade-in">
            <div className="max-w-7xl mx-auto">
                {/* Breadcrumbs */}
                <div className="flex items-center space-x-2 text-[10px] uppercase tracking-[0.2em] text-brand-gray mb-12">
                    <Link to="/" className="hover:text-brand-gold transition-colors">Home</Link>
                    <ChevronRight size={12} />
                    <Link to="/shop" className="hover:text-brand-gold transition-colors">Shop</Link>
                    <ChevronRight size={12} />
                    <span className="text-brand-white">{product.name}</span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
                    {/* Left: Images */}
                    <div className="space-y-6">
                        <div className="aspect-[4/5] bg-brand-charcoal border luxury-border overflow-hidden">
                            <img
                                src={selectedImage}
                                alt={product.name}
                                className="w-full h-full object-cover transition-transform duration-700 hover:scale-110 cursor-zoom-in"
                            />
                        </div>
                        {/* Thumbnails (Simulated) */}
                        <div className="grid grid-cols-4 gap-4">
                            {[product.image, '/Images/Watch-2.jpg', '/Images/Watch-3.jpg', '/Images/Watch-4.jpg'].map((img, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setSelectedImage(img)}
                                    className={`aspect-square bg-brand-charcoal border transition-all ${selectedImage === img ? 'border-brand-gold p-1' : 'luxury-border opacity-50 hover:opacity-100'
                                        }`}
                                >
                                    <img src={img} alt="" className="w-full h-full object-cover" />
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Right: Product Info */}
                    <div className="flex flex-col">
                        <h1 className="text-4xl md:text-5xl font-serif text-brand-white mb-4">{product.name}</h1>
                        <p className="text-2xl text-brand-gold mb-8 italic">₦{product.price.toLocaleString()}</p>

                        <p className="text-brand-gray leading-relaxed mb-10 max-w-lg">
                            {product.description}
                        </p>

                        {/* Quantity Selector */}
                        <div className="mb-10 flex items-center space-x-6">
                            <span className="text-[10px] uppercase tracking-[0.2em] text-brand-gray">Quantity</span>
                            <div className="flex items-center border luxury-border bg-brand-charcoal/30">
                                <button
                                    onClick={() => updateQty(-1)}
                                    className="p-3 text-brand-gray hover:text-brand-white transition-colors"
                                >
                                    <Minus size={16} />
                                </button>
                                <span className="w-12 text-center text-sm font-medium text-brand-white">{quantity}</span>
                                <button
                                    onClick={() => updateQty(1)}
                                    className="p-3 text-brand-gray hover:text-brand-white transition-colors"
                                >
                                    <Plus size={16} />
                                </button>
                            </div>
                        </div>

                        {/* Specifications */}
                        <div className="mb-10 p-8 bg-brand-charcoal border luxury-border">
                            <h3 className="text-xs uppercase tracking-[0.2em] text-brand-white mb-6 border-b luxury-border pb-4">Specifications</h3>
                            <div className="space-y-4">
                                {[
                                    { label: "Brand", value: product.brand },
                                    { label: "Model", value: product.model },
                                    { label: "Material", value: product.material },
                                    { label: "Movement", value: product.movement },
                                    { label: "Water Resistance", value: product.waterResistance },
                                ].map((spec, i) => (
                                    <div key={i} className="flex justify-between text-xs tracking-widest">
                                        <span className="text-brand-gray uppercase">{spec.label}</span>
                                        <span className="text-brand-white font-medium">{spec.value}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Trust Badges */}
                        <div className="space-y-3 mb-12">
                            <div className="flex items-center space-x-3 text-brand-white">
                                <Check size={18} className="text-brand-gold" />
                                <span className="text-xs uppercase tracking-widest font-medium">Trusted by 10,000+ Customers</span>
                            </div>
                            <div className="flex items-center space-x-3 text-brand-white">
                                <Truck size={18} className="text-brand-gold" />
                                <span className="text-xs uppercase tracking-widest font-medium">Fast Nationwide Delivery</span>
                            </div>
                        </div>

                        {/* Actions */}
                        <div className="space-y-4">
                            <div className="flex flex-col sm:flex-row gap-4">
                                <button
                                    onClick={handleAddToCart}
                                    className="flex-1 bg-brand-gold text-brand-black py-5 text-sm font-bold uppercase tracking-[0.2em] hover:bg-brand-gold/90 transition-all active:scale-95"
                                >
                                    Add to Cart
                                </button>
                                <button
                                    onClick={handleBuyNow}
                                    className="flex-1 border border-brand-gold text-brand-gold py-5 text-sm font-bold uppercase tracking-[0.2em] hover:bg-brand-gold hover:text-brand-black transition-all active:scale-95"
                                >
                                    Buy Now
                                </button>
                            </div>
                            <button className="w-full flex items-center justify-center space-x-3 border luxury-border text-brand-white py-4 text-[10px] uppercase tracking-[0.2em] hover:bg-brand-white hover:text-brand-black transition-colors">
                                <MessageCircle size={14} />
                                <span>WhatsApp Inquiry</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Sticky Mobile Add to Cart */}
            <div className="md:hidden fixed bottom-6 left-6 right-6 z-40">
                <button
                    onClick={handleAddToCart}
                    className="w-full bg-brand-gold text-brand-black py-5 shadow-2xl rounded-sm font-bold uppercase tracking-[0.2em] luxury-glow opacity-95 transition-transform active:scale-95"
                >
                    Add to Cart • ₦{(product.price * quantity).toLocaleString()}
                </button>
            </div>
        </div>
    );
};

export default ProductDetail;
