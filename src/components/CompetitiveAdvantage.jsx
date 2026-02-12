import React from 'react';
import { CheckCircle, XCircle } from 'lucide-react';

const CompetitiveAdvantage = () => {
    return (
        <section className="section">
            <div className="container">
                <h2 className="section-title">Why Not Just Use a Chatbot?</h2>
                <p className="section-subtitle">Old chatbots drive customers away. Tradesarthi brings them in.</p>
                
                <div className="comparison-container">
                    {/* Generic Chatbot Card */}
                    <div className="comparison-card generic">
                        <div className="card-header">
                            <h3>Generic Chatbots</h3>
                            <p>The "Old Way"</p>
                        </div>
                        <ul className="comparison-list">
                            <li className="bad"><XCircle size={20} /> Rule-based & Rigid</li>
                            <li className="bad"><XCircle size={20} /> "Press 1 for Sales"</li>
                            <li className="bad"><XCircle size={20} /> Complex Setup</li>
                            <li className="bad"><XCircle size={20} /> Sounds Robotic</li>
                        </ul>
                    </div>

                    {/* Tradesarthi Card */}
                    <div className="comparison-card tradesarthi">
                        <div className="card-badge">RECOMMENDED</div>
                        <div className="card-header">
                            <h3>Tradesarthi AI</h3>
                            <p>The "Smart Way"</p>
                        </div>
                        <ul className="comparison-list">
                            <li className="good"><CheckCircle size={20} /> Understands Intent & Context</li>
                            <li className="good"><CheckCircle size={20} /> Talks Naturally in Hinglish</li>
                            <li className="good"><CheckCircle size={20} /> Zero Setup (Plug & Play)</li>
                            <li className="good"><CheckCircle size={20} /> Negotiates & Closes Deals</li>
                        </ul>
                    </div>
                </div>
            </div>
            <style jsx>{`
                .comparison-container {
                    display: flex;
                    flex-direction: column;
                    gap: var(--spacing-lg);
                    max-width: 900px;
                    margin: 0 auto;
                }

                .comparison-card {
                    padding: var(--spacing-lg);
                    border-radius: var(--radius-xl);
                    flex: 1;
                    box-shadow: var(--shadow-md);
                    position: relative;
                }
                
                .card-header {
                    text-align: center;
                    margin-bottom: var(--spacing-lg);
                    border-bottom: 1px solid rgba(0,0,0,0.05);
                    padding-bottom: var(--spacing-md);
                }

                .comparison-card h3 {
                    font-size: var(--font-size-2xl);
                    font-family: var(--font-family-heading);
                    font-weight: var(--font-weight-bold);
                    margin-bottom: var(--spacing-xs);
                }
                
                .comparison-card p {
                    font-size: var(--font-size-sm);
                    text-transform: uppercase;
                    letter-spacing: 0.1em;
                    font-weight: var(--font-weight-bold);
                }

                .comparison-list {
                    display: flex;
                    flex-direction: column;
                    gap: var(--spacing-sm);
                }
                
                .comparison-list li {
                    font-size: var(--font-size-lg);
                    display: flex;
                    align-items: center;
                    gap: 12px;
                }

                /* Generic Styles */
                .generic {
                    background-color: var(--color-surface);
                    color: var(--color-text-light);
                    border: 1px solid var(--color-border);
                }
                
                .bad {
                    opacity: 0.8;
                }

                /* Tradesarthi Styles */
                .tradesarthi {
                    background-color: #fff;
                    border: 2px solid var(--color-primary);
                    color: var(--color-text);
                    box-shadow: var(--shadow-xl);
                    transform: scale(1.02);
                }
                
                .card-badge {
                    position: absolute;
                    top: -12px;
                    left: 50%;
                    transform: translateX(-50%);
                    background: var(--color-primary);
                    color: white;
                    padding: 4px 12px;
                    border-radius: var(--radius-full);
                    font-size: var(--font-size-xs);
                    font-weight: bold;
                    letter-spacing: 0.05em;
                }
                
                .tradesarthi h3 {
                    color: var(--color-primary-dark);
                }
                
                .good {
                    font-weight: var(--font-weight-medium);
                }

                @media (min-width: 768px) {
                    .comparison-container {
                        flex-direction: row;
                        align-items: center;
                    }
                    
                    .tradesarthi {
                        transform: scale(1.05);
                        z-index: 10;
                    }
                }
            `}</style>
        </section>
    );
};

export default CompetitiveAdvantage;
