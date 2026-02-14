import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ShieldCheck, Truck, Lock, CheckCircle2, X } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Checkout = () => {
    const [step, setStep] = useState(1);
    const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
    const { subtotal, clearCart } = useCart();
    const navigate = useNavigate();

    const delivery = 5000;
    const total = subtotal + delivery;

    const handleCompleteOrder = () => {
        // Simulate payment processing
        setIsSuccessModalOpen(true);
        clearCart();
    };

    const closeSuccessModal = () => {
        setIsSuccessModalOpen(false);
        navigate('/');
    };

    return (
        <div className="pt-32 pb-24 px-6 md:px-12 bg-brand-black min-h-screen animate-fade-in relative">
            <div className="max-w-3xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-serif text-brand-white mb-16 text-center italic">Checkout</h1>

                {/* Step Indicator */}
                <div className="flex justify-center items-center space-x-4 mb-16">
                    <div className={`flex items-center space-x-2 ${step >= 1 ? 'text-brand-gold' : 'text-brand-gray'}`}>
                        <span className={`w-8 h-8 rounded-full border flex items-center justify-center text-xs font-bold ${step >= 1 ? 'border-brand-gold bg-brand-gold text-brand-black' : 'border-brand-gray'
                            }`}>1</span>
                        <span className="text-[10px] uppercase tracking-[0.2em]">Shipping</span>
                    </div>
                    <div className="w-12 h-[1px] bg-brand-charcoal"></div>
                    <div className={`flex items-center space-x-2 ${step >= 2 ? 'text-brand-gold' : 'text-brand-gray'}`}>
                        <span className={`w-8 h-8 rounded-full border flex items-center justify-center text-xs font-bold ${step >= 2 ? 'border-brand-gold bg-brand-gold text-brand-black' : 'border-brand-gray'
                            }`}>2</span>
                        <span className="text-[10px] uppercase tracking-[0.2em]">Payment</span>
                    </div>
                </div>

                <div className="bg-brand-charcoal p-8 md:p-12 border luxury-border">
                    {step === 1 ? (
                        <div className="space-y-8 animate-fade-in">
                            <h2 className="text-xl font-serif text-brand-white mb-8 italic">Shipping Details</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-[10px] uppercase tracking-widest text-brand-gray">First Name</label>
                                    <input type="text" className="w-full bg-transparent border-b luxury-border py-2 text-brand-white focus:border-brand-gold outline-none transition-colors" placeholder="e.g. Chidera" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] uppercase tracking-widest text-brand-gray">Last Name</label>
                                    <input type="text" className="w-full bg-transparent border-b luxury-border py-2 text-brand-white focus:border-brand-gold outline-none transition-colors" placeholder="e.g. Okafor" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] uppercase tracking-widest text-brand-gray">Email Address</label>
                                <input type="email" className="w-full bg-transparent border-b luxury-border py-2 text-brand-white focus:border-brand-gold outline-none transition-colors" placeholder="chidera@example.com" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] uppercase tracking-widest text-brand-gray">Shipping Address</label>
                                <input type="text" className="w-full bg-transparent border-b luxury-border py-2 text-brand-white focus:border-brand-gold outline-none transition-colors" placeholder="e.g. 123 Luxury Way, Lagos" />
                            </div>

                            <div className="pt-8">
                                <button
                                    onClick={() => setStep(2)}
                                    className="w-full bg-brand-gold text-brand-black py-5 text-sm font-bold uppercase tracking-[0.2em] hover:bg-brand-gold/90 transition-all active:scale-95"
                                >
                                    Continue to Payment
                                </button>
                            </div>
                        </div>
                    ) : (
                        <div className="space-y-8 animate-fade-in">
                            <div className="flex justify-between items-end border-b luxury-border pb-4 mb-8">
                                <h2 className="text-xl font-serif text-brand-white italic">Payment Method</h2>
                                <span className="text-brand-gold text-sm font-serif italic">Total: ₦{total.toLocaleString()}</span>
                            </div>

                            <div className="space-y-4">
                                <div className="p-6 border border-brand-gold bg-brand-black/50 flex justify-between items-center cursor-pointer">
                                    <span className="text-xs uppercase tracking-widest text-brand-white">Credit / Debit Card</span>
                                    <div className="w-4 h-4 rounded-full border border-brand-gold flex items-center justify-center">
                                        <div className="w-2 h-2 bg-brand-gold rounded-full"></div>
                                    </div>
                                </div>
                                <div className="p-6 border luxury-border flex justify-between items-center cursor-pointer opacity-50">
                                    <span className="text-xs uppercase tracking-widest text-brand-gray">Bank Transfer</span>
                                    <div className="w-4 h-4 rounded-full border luxury-border"></div>
                                </div>
                            </div>

                            <div className="p-6 bg-brand-black/30 border luxury-border flex flex-col items-center justify-center space-y-4">
                                <Lock size={20} className="text-brand-gold" />
                                <p className="text-[10px] uppercase tracking-[0.2em] text-brand-gray text-center">
                                    Your payment is secured with bank-grade encryption.
                                </p>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4 pt-8">
                                <button
                                    onClick={() => setStep(1)}
                                    className="flex-1 border luxury-border text-brand-white py-5 text-sm font-bold uppercase tracking-[0.2em] hover:bg-brand-white hover:text-brand-black transition-all active:scale-95"
                                >
                                    Back to Shipping
                                </button>
                                <button
                                    onClick={handleCompleteOrder}
                                    className="flex-1 bg-brand-gold text-brand-black py-5 text-sm font-bold uppercase tracking-[0.2em] hover:bg-brand-gold/90 transition-all shadow-lg luxury-glow active:scale-95"
                                >
                                    Complete Order
                                </button>
                            </div>
                        </div>
                    )}
                </div>

                {/* Post-form Trust Info */}
                <div className="mt-12 grid grid-cols-2 gap-8">
                    <div className="flex items-center space-x-3 text-brand-gray">
                        <Truck size={18} className="text-brand-gold" />
                        <span className="text-[10px] uppercase tracking-widest">2–3 business days delivery</span>
                    </div>
                    <div className="flex items-center space-x-3 text-brand-gray justify-end">
                        <ShieldCheck size={18} className="text-brand-gold" />
                        <span className="text-[10px] uppercase tracking-widest">100% Authentic Products</span>
                    </div>
                </div>
            </div>

            {/* Success Modal */}
            {isSuccessModalOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 bg-black/90 backdrop-blur-sm animate-fade-in">
                    <div className="bg-brand-charcoal border luxury-border p-12 max-w-md w-full text-center relative">
                        <button
                            onClick={closeSuccessModal}
                            className="absolute top-4 right-4 text-brand-gray hover:text-brand-gold transition-colors"
                        >
                            <X size={24} />
                        </button>
                        <div className="flex justify-center mb-8">
                            <CheckCircle2 size={72} className="text-brand-gold animate-bounce" strokeWidth={1} />
                        </div>
                        <h2 className="text-3xl font-serif text-brand-white mb-4 italic">Purchase Successful</h2>
                        <p className="text-brand-gray text-sm mb-10 leading-relaxed uppercase tracking-widest">
                            Thank you for choosing AURELIA TIME. Your order is being processed and will be delivered shortly.
                        </p>
                        <button
                            onClick={closeSuccessModal}
                            className="w-full bg-brand-gold text-brand-black py-4 text-xs font-bold uppercase tracking-[0.2em] hover:bg-brand-gold/90 transition-all shadow-lg"
                        >
                            Back to Home
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Checkout;
