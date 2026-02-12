import React from 'react';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-brand">
                        <div className="logo">Tradesarthi AI</div>
                        <p>Empowering Indian SMBs with AI.</p>
                    </div>
                    
                    <div className="footer-links">
                        <div className="link-group">
                            <h4>Product</h4>
                            <a href="#features">Features</a>
                            <a href="#how-it-works">How It Works</a>
                            <a href="#pricing">Pricing</a>
                        </div>
                        <div className="link-group">
                            <h4>Company</h4>
                            <a href="#">About Us</a>
                            <a href="#">Contact</a>
                            <a href="#">Privacy Policy</a>
                        </div>
                    </div>
                </div>
                
                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} Tradesarthi AI. Built for Bharat 🇮🇳</p>
                </div>
            </div>
             <style jsx>{`
                .footer {
                    background-color: #111827;
                    color: white;
                    padding: var(--spacing-xl) 0 var(--spacing-lg);
                }
                
                .footer-content {
                    display: flex;
                    flex-direction: column;
                    gap: var(--spacing-lg);
                    margin-bottom: var(--spacing-xl);
                }
                
                .footer-brand .logo {
                    font-size: var(--font-size-xl);
                    font-weight: bold;
                    margin-bottom: var(--spacing-xs);
                    color: white;
                }
                
                .footer-brand p {
                    color: #9ca3af;
                }
                
                .footer-links {
                    display: flex;
                    gap: var(--spacing-2xl);
                    flex-wrap: wrap;
                }
                
                .link-group h4 {
                    color: white;
                    font-size: var(--font-size-base);
                    font-weight: bold;
                    margin-bottom: var(--spacing-md);
                }
                
                .link-group a {
                    display: block;
                    color: #9ca3af;
                    margin-bottom: var(--spacing-sm);
                    transition: color 0.2s;
                }
                
                .link-group a:hover {
                    color: white;
                }
                
                .footer-bottom {
                    border-top: 1px solid #374151;
                    padding-top: var(--spacing-lg);
                    text-align: center;
                    color: #6b7280;
                    font-size: var(--font-size-sm);
                }

                @media (min-width: 768px) {
                    .footer-content {
                        flex-direction: row;
                        justify-content: space-between;
                    }
                }
            `}</style>
        </footer>
    );
};

export default Footer;
