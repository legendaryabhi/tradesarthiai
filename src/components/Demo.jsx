import React from 'react';
import { PlayCircle } from 'lucide-react';

const Demo = () => {
    return (
        <section className="section bg-surface text-center">
            <div className="container">
                <h2 className="section-title">See It In Action</h2>
                <p className="section-subtitle">
                    Watch how Tradesarthi turns a simple WhatsApp chat into a confirmed order.
                </p>
                
                <div className="video-wrapper">
                    <div className="video-placeholder">
                        <div className="play-button"><PlayCircle size={40} strokeWidth={1.5} /></div>
                        <p>Watch Demo Video</p>
                    </div>
                </div>
            </div>
            <style jsx>{`
                .video-wrapper {
                    max-width: 900px;
                    margin: 0 auto;
                    border-radius: var(--radius-xl);
                    overflow: hidden;
                    box-shadow: var(--shadow-xl);
                    border: 4px solid white;
                }
                
                .video-placeholder {
                    aspect-ratio: 16 / 9;
                    background: linear-gradient(135deg, #1f2937, #111827);
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    color: white;
                    cursor: pointer;
                    transition: all 0.3s;
                }
                
                .video-placeholder:hover {
                    background: linear-gradient(135deg, #374151, #1f2937);
                }
                
                .play-button {
                    width: 80px;
                    height: 80px;
                    background: rgba(255,255,255,0.2);
                    backdrop-filter: blur(10px);
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin-bottom: var(--spacing-sm);
                    border: 2px solid rgba(255,255,255,0.5);
                    transition: transform 0.2s;
                }
                
                .video-placeholder:hover .play-button {
                    transform: scale(1.1);
                    background: var(--color-primary);
                    border-color: var(--color-primary);
                }
            `}</style>
        </section>
    );
};

export default Demo;
