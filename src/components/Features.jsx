import React from 'react';
import { MessageSquare, Bot, Camera, HandCoins, Moon, Wallet } from 'lucide-react';

const Features = () => {
    const features = [
        { 
            title: "Speaks Hinglish", 
            desc: "Understands 'Bhaiya thoda kam karo' perfectly. No stiff English bots.",
            icon: <MessageSquare size={32} />
        },
        { 
            title: "Automated Sales", 
            desc: "From 'Hi' to payment link, the AI handles the entire chat.",
            icon: <Bot size={32} />
        },
        { 
            title: "Catalog Auto-Sync", 
            desc: "Send a photo of your register or shelf. AI updates inventory.",
            icon: <Camera size={32} />
        },
        { 
            title: "Smart Negotiation", 
            desc: "You set the min price. AI bargains to get you the best deal.",
            icon: <HandCoins size={32} />
        },
        { 
            title: "24/7 Availability", 
            desc: "Never miss a late-night customer. Your shop is always open.",
            icon: <Moon size={32} />
        },
        { 
            title: "Zero Commission", 
            desc: "Keep 100% of your profits. We don't take a cut per order.",
            icon: <Wallet size={32} />
        }
    ];

    return (
        <section className="section bg-surface">
             <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Everything You Need to Scale</h2>
                    <p className="section-subtitle">Powerful tools built specifically for Indian SMBs.</p>
                </div>
                <div className="features-grid">
                    {features.map((feature, index) => (
                        <div key={index} className="feature-card">
                            <div className="feature-icon">{feature.icon}</div>
                            <h3 className="feature-title">{feature.title}</h3>
                            <p className="feature-desc">{feature.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
            <style jsx>{`
                .features-grid {
                    display: grid;
                    grid-template-columns: 1fr;
                    gap: var(--spacing-md);
                }

                .feature-card {
                    background: white;
                    padding: var(--spacing-lg);
                    border-radius: var(--radius-lg);
                    border: 1px solid var(--color-border);
                    box-shadow: var(--shadow-sm);
                    transition: all 0.2s ease-in-out;
                }
                
                .feature-card:hover {
                    border-color: var(--color-primary);
                    transform: translateY(-3px);
                    box-shadow: var(--shadow-md);
                }

                .feature-icon {
                    color: var(--color-primary);
                    margin-bottom: var(--spacing-sm);
                }

                .feature-title {
                    font-family: var(--font-family-heading);
                    font-size: var(--font-size-lg);
                    font-weight: var(--font-weight-bold);
                    margin-bottom: var(--spacing-xs);
                    color: var(--color-text);
                }

                .feature-desc {
                    color: var(--color-text-light);
                    font-size: var(--font-size-base);
                    line-height: 1.5;
                }

                @media (min-width: 768px) {
                    .features-grid {
                        grid-template-columns: repeat(3, 1fr);
                        gap: var(--spacing-lg);
                    }
                }
            `}</style>
        </section>
    );
};

export default Features;
