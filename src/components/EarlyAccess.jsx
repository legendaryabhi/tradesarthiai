import React, { useState } from 'react';
import { PartyPopper, Send } from 'lucide-react';

const EarlyAccess = () => {
    const [formData, setFormData] = useState({
        name: '',
        shopName: '',
        whatsapp: '',
        city: '',
        category: 'Clothing'
    });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Early Access Request:", formData);
        setSubmitted(true);
    };

    return (
        <section className="section bg-gradient">
            <div className="container">
                <div className="form-card">
                    <div className="form-header">
                        <h2 className="section-title">Join the Future</h2>
                        <p className="section-subtitle" style={{marginBottom: '0'}}>
                            Be among the first 1,000 merchants to use Tradesarthi AI.
                        </p>
                    </div>

                    {!submitted ? (
                        <form className="early-access-form" onSubmit={handleSubmit}>
                            <div className="form-grid">
                                <div className="input-group">
                                    <label>Your Name</label>
                                    <input 
                                        type="text" 
                                        name="name" 
                                        placeholder="e.g. Rahul Sharma" 
                                        required 
                                        value={formData.name}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="input-group">
                                    <label>Shop Name</label>
                                    <input 
                                        type="text" 
                                        name="shopName" 
                                        placeholder="e.g. Sharma Garments" 
                                        required 
                                        value={formData.shopName}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="input-group">
                                    <label>WhatsApp Number</label>
                                    <input 
                                        type="tel" 
                                        name="whatsapp" 
                                        placeholder="+91 98765 43210" 
                                        required 
                                        value={formData.whatsapp}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="input-group">
                                    <label>City</label>
                                    <input 
                                        type="text" 
                                        name="city" 
                                        placeholder="e.g. Jaipur" 
                                        required 
                                        value={formData.city}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                            
                            <div className="input-group full-width">
                                <label>Category</label>
                                <select name="category" value={formData.category} onChange={handleChange}>
                                    <option value="Clothing">Clothing / Fashion</option>
                                    <option value="Kirana">Kirana / Grocery</option>
                                    <option value="Electronics">Electronics / Mobile</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>

                            <button type="submit" className="btn btn-primary btn-xl full-width">
                                Get Early Access <Send size={20} />
                            </button>
                            <p className="privacy-text">We respect your privacy. No spam.</p>
                        </form>
                    ) : (
                        <div className="success-message">
                            <div className="success-icon"><PartyPopper size={64} className="text-primary" /></div>
                            <h3>Welcome Aboard!</h3>
                            <p>We have added you to the priority list. Watch your WhatsApp for an invite soon.</p>
                        </div>
                    )}
                </div>
            </div>
            <style jsx>{`
                .section.bg-gradient {
                    background: linear-gradient(135deg, #e0f2f1 0%, #ffffff 100%);
                }

                .form-card {
                    max-width: 700px;
                    margin: 0 auto;
                    background: white;
                    padding: var(--spacing-xl);
                    border-radius: var(--radius-xl);
                    box-shadow: var(--shadow-xl);
                    border: 1px solid var(--color-border);
                }
                
                .form-header {
                    text-align: center;
                    margin-bottom: var(--spacing-lg);
                }

                .form-grid {
                    display: grid;
                    grid-template-columns: 1fr;
                    gap: var(--spacing-md);
                    margin-bottom: var(--spacing-md);
                }

                .input-group {
                    display: flex;
                    flex-direction: column;
                    gap: 6px;
                }
                
                .input-group label {
                    font-size: var(--font-size-sm);
                    font-weight: var(--font-weight-bold);
                    color: var(--color-text-light);
                }

                .input-group input, 
                .input-group select {
                    padding: 0.875rem;
                    border: 2px solid var(--color-surface);
                    border-radius: var(--radius-lg);
                    font-size: var(--font-size-base);
                    background: var(--color-surface);
                    transition: border-color 0.2s;
                }

                .input-group input:focus, 
                .input-group select:focus {
                    outline: none;
                    border-color: var(--color-primary);
                    background: white;
                }

                .full-width {
                    width: 100%;
                }
                
                .btn-xl {
                    margin-top: var(--spacing-md);
                    width: 100%;
                    justify-content: center;
                    gap: 8px;
                }
                
                .privacy-text {
                    text-align: center;
                    font-size: var(--font-size-xs);
                    color: var(--color-text-light);
                    margin-top: var(--spacing-sm);
                }

                .success-message {
                    text-align: center;
                    padding: var(--spacing-lg);
                }
                
                .success-icon {
                    margin-bottom: var(--spacing-md);
                    display: flex;
                    justify-content: center;
                }
                
                .text-primary { color: var(--color-primary); } /* Utility */
                
                .success-message h3 {
                    font-size: var(--font-size-2xl);
                    font-weight: var(--font-weight-bold);
                    color: var(--color-primary);
                    margin-bottom: var(--spacing-sm);
                }

                @media (min-width: 768px) {
                    .form-grid {
                        grid-template-columns: 1fr 1fr;
                    }
                }
            `}</style>
        </section>
    );
};

export default EarlyAccess;
