import React from 'react';
import { MoonStar, Users, Grid2X2 } from 'lucide-react';

const Problem = () => {
    return (
        <section className="section bg-surface">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Why You Are Losing Sales</h2>
                    <p className="section-subtitle">
                        Managing customers manually is impossible. Here is what's costing you money every day.
                    </p>
                </div>
                
                <div className="problems-grid">
                    <div className="problem-card">
                        <div className="icon"><MoonStar size={40} /></div>
                        <h3>Customers Late at Night</h3>
                        <p>They message at 11 PM. You are asleep. By 8 AM, they have already bought from Amazon.</p>
                    </div>
                    <div className="problem-card">
                        <div className="icon"><Users size={40} /></div>
                        <h3>Staff is Expensive</h3>
                        <p>Hiring a sales person costs ₹15,000/month. They take leaves, and they can't work 24/7.</p>
                    </div>
                    <div className="problem-card">
                        <div className="icon"><Grid2X2 size={40} /></div>
                        <h3>Apps are Complicated</h3>
                        <p>Nobody wants to download your app or navigate a slow website. They just want to chat.</p>
                    </div>
                </div>
            </div>
            <style jsx>{`
                .problems-grid {
                    display: grid;
                    grid-template-columns: 1fr;
                    gap: var(--spacing-lg);
                }

                .problem-card {
                    background: white;
                    padding: var(--spacing-lg);
                    border-radius: var(--radius-xl);
                    box-shadow: var(--shadow-sm); /* Subtle shadow initially */
                    transition: all 0.3s ease;
                    border: 1px solid transparent;
                    text-align: center;
                }
                
                .problem-card:hover {
                    transform: translateY(-5px);
                    box-shadow: var(--shadow-lg);
                    border-color: var(--color-primary); /* Highlight on hover */
                }

                .icon {
                    margin: 0 auto;
                    margin-bottom: var(--spacing-md);
                    background: var(--color-surface);
                    width: 80px;
                    height: 80px;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: var(--color-primary);
                }

                .problem-card h3 {
                    font-family: var(--font-family-heading);
                    font-size: var(--font-size-xl);
                    font-weight: var(--font-weight-bold);
                    margin-bottom: var(--spacing-sm);
                    color: var(--color-text);
                }

                .problem-card p {
                    color: var(--color-text-light);
                    line-height: 1.6;
                }

                @media (min-width: 768px) {
                    .problems-grid {
                        grid-template-columns: repeat(3, 1fr);
                    }
                }
            `}</style>
        </section>
    );
};

export default Problem;
