import React from 'react';
import { Link } from 'react-router-dom';
import { Minus, Plus, X, ArrowLeft, ShieldCheck } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Cart = () => {
    const { cartItems, removeFromCart, updateQuantity, subtotal } = useCart();

    const delivery = 5000;
    const total = subtotal + delivery;

    if (cartItems.length === 0) {
        return (
            <div className="pt-48 pb-24 px-6 text-center animate-fade-in bg-brand-black min-h-screen">
                <h1 className="text-4xl font-serif text-brand-white mb-8">Your Cart is Empty</h1>
                <Link to="/shop" className="text-brand-gold uppercase tracking-widest text-sm hover:underline">
                    Return to Shop
                </Link>
            </div>
        );
    }

    return (
        <div className="pt-32 pb-24 px-6 md:px-12 bg-brand-black min-h-screen animate-fade-in">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-serif text-brand-white mb-16 italic">Shopping Cart</h1>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
                    {/* Product List */}
                    <div className="lg:col-span-2 space-y-8">
                        {cartItems.map((item) => (
                            <div key={item.id} className="flex gap-6 py-8 border-b luxury-border items-center">
                                <Link to={`/product/${item.id}`} className="w-24 h-32 md:w-32 md:h-40 bg-brand-charcoal overflow-hidden border luxury-border shrink-0 hover:opacity-90">
                                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                                </Link>

                                <div className="flex-grow">
                                    <div className="flex justify-between items-start mb-2">
                                        <Link to={`/product/${item.id}`}>
                                            <h3 className="text-lg md:text-xl font-serif text-brand-white hover:text-brand-gold transition-colors">{item.name}</h3>
                                        </Link>
                                        <button
                                            onClick={() => removeFromCart(item.id)}
                                            className="text-brand-gray hover:text-brand-gold transition-colors"
                                        >
                                            <X size={20} />
                                        </button>
                                    </div>
                                    <p className="text-brand-gold text-sm mb-6 italic">₦{item.price.toLocaleString()}</p>

                                    <div className="flex items-center space-x-6">
                                        <div className="flex items-center border luxury-border bg-brand-charcoal/30">
                                            <button
                                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                className="p-2 text-brand-gray hover:text-brand-white transition-colors"
                                            >
                                                <Minus size={14} />
                                            </button>
                                            <span className="w-8 text-center text-xs text-brand-white">{item.quantity}</span>
                                            <button
                                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                className="p-2 text-brand-gray hover:text-brand-white transition-colors"
                                            >
                                                <Plus size={14} />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}

                        <Link to="/shop" className="inline-flex items-center space-x-2 text-brand-gray hover:text-brand-gold transition-colors text-xs uppercase tracking-widest py-4">
                            <ArrowLeft size={14} />
                            <span>Continue Shopping</span>
                        </Link>
                    </div>

                    {/* Summary */}
                    <div className="lg:col-span-1">
                        <div className="bg-brand-charcoal p-8 border luxury-border sticky top-32">
                            <h2 className="text-lg font-serif text-brand-white mb-8 border-b luxury-border pb-4 italic">Summary</h2>

                            <div className="space-y-6 mb-10">
                                <div className="flex justify-between text-xs uppercase tracking-widest text-brand-gray">
                                    <span>Subtotal</span>
                                    <span className="text-brand-white">₦{subtotal.toLocaleString()}</span>
                                </div>
                                <div className="flex justify-between text-xs uppercase tracking-widest text-brand-gray">
                                    <span>Delivery</span>
                                    <span className="text-brand-white">₦{delivery.toLocaleString()}</span>
                                </div>
                                <div className="flex justify-between text-lg font-serif text-brand-white pt-6 border-t luxury-border">
                                    <span>Total</span>
                                    <span className="text-brand-gold">₦{total.toLocaleString()}</span>
                                </div>
                            </div>

                            <Link
                                to="/checkout"
                                className="block w-full bg-brand-gold text-brand-black text-center py-5 text-sm font-bold uppercase tracking-[0.2em] hover:bg-brand-gold/90 transition-all mb-6 active:scale-95"
                            >
                                Checkout
                            </Link>

                            <div className="flex items-center justify-center space-x-2 text-[10px] uppercase tracking-widest text-brand-gray italic">
                                <ShieldCheck size={14} className="text-brand-gold" />
                                <span>Secure Checkout Guaranteed</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
