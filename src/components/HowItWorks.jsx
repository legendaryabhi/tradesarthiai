import React from 'react';

const HowItWorks = () => {
    return (
        <section className="section">
            <div className="container">
                <h2 className="section-title">Simple Steps to Start Selling</h2>
                <p className="section-subtitle">You don’t need to be technical. If you can use WhatsApp, you can use Tradesarthi.</p>
                
                <div className="steps-wrapper">
                    <div className="step-card">
                        <div className="step-badge">1</div>
                        <h3>Create Your Tradesarthi Account</h3>
                        <p>Sign up in 1 minute and tell us about your shop.</p>
                    </div>
                    
                    <div className="connector"></div>
                    
                    <div className="step-card">
                        <div className="step-badge">2</div>
                        <h3>Connect Your WhatsApp Business</h3>
                        <p>Link your WhatsApp number to Tradesarthi.</p>
                    </div>
                    
                    <div className="connector"></div>
                    
                    <div className="step-card">
  <div className="step-badge">3</div>
  <h3>Let AI Handle the Sales</h3>

  <div className="flow-line">
    <span>Reply </span>
    <span className="dot">•</span>
    <span> Show </span>
    <span className="dot">•</span>
    <span> Negotiate </span>
    <span className="dot">•</span>
    <span> Collect Payment </span>
    <span className="dot">•</span>
    <span> Confirm </span>
  </div>


</div>

                </div>
            </div>
             <style jsx>{`
                .steps-wrapper {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: var(--spacing-lg);
                    margin-top: var(--spacing-lg);
                }
                
                .step-card {
                    text-align: center;
                    background: white;
                    padding: var(--spacing-lg);
                    border-radius: var(--radius-lg);
                    border: 1px solid var(--color-border);
                    width: 100%;
                    max-width: 300px;
                    position: relative;
                }
                
                .step-badge {
                    width: 50px;
                    height: 50px;
                    background: var(--color-primary);
                    color: white;
                    font-weight: bold;
                    font-size: var(--font-size-xl);
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin: 0 auto var(--spacing-md);
                    box-shadow: 0 0 0 5px rgba(18, 140, 126, 0.2); /* Ring effect */
                }
                
                .step-card h3 {
                    font-size: var(--font-size-xl);
                    margin-bottom: var(--spacing-sm);
                    font-weight: var(--font-weight-bold);
                }
                
                .step-card p {
                    color: var(--color-text-light);
                }
                
                .connector {
                    width: 2px;
                    height: 40px;
                    background: var(--color-border);
                }

                
                .dot {
                    color: var(--color-primary);
                    font-size: 1.2rem;
                }

                @media (min-width: 768px) {
                    .steps-wrapper {
                        flex-direction: row;
                        justify-content: center;
                        align-items: flex-start;
                    }
                    
                    .connector {
                        width: 100px;
                        height: 2px;
                        margin-top: 50px; /* Align with center of cards roughly */
                    }
                }
            `}</style>
        </section>
    );
};

export default HowItWorks;
