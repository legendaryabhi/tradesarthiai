import React from 'react';
import { MessageCircle, CheckCircle, ShieldCheck, PlayCircle, ArrowRight } from 'lucide-react';

const Hero = () => {
    const scrollToSection = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    };

  return (
    <section className="section">
      <div className="container hero-container">
        <div className="hero-content">
          <div className="badge">For Small Businesses</div>
          <h1 className="hero-title">
            Your WhatsApp, Now a <span className="text-highlight">Super Salesman.</span>
          </h1>
          <p className="hero-subtitle">
            Meet the AI employee that replies instantly, negotiates deals, and collects payments—while you sleep.
          </p>
          <div className="hero-features">
            <div className="feature-pill"><MessageCircle size={16} /> Speaks Hinglish</div>
            <div className="feature-pill"><CheckCircle size={16} /> Negotiates</div>
            <div className="feature-pill"><ShieldCheck size={16} /> Collects Payment</div>
          </div>
          <div className="hero-cta">
            <button className="btn btn-primary btn-xl" onClick={() => scrollToSection('early-access')}>Get Early Access <ArrowRight size={20} /></button>
            <button className="btn btn-secondary btn-xl" onClick={() => scrollToSection('demo')}><PlayCircle size={20} /> Watch Demo</button>
          </div>
        </div>
        <div className="hero-image-wrapper">
           <div className="phone-mockup">
              <div className="screen">
                 {/* Imagine a chat interface here */}
                 <div className="msg msg-left">Red saree dikhao?</div>
                 <div className="msg msg-right">Sure ma'am! Ye dekhiye latest Banarasi silk collection. Only ₹1200 today.</div>
                 <div className="msg msg-left">Thoda discount?</div>
                 <div className="msg msg-right">Okay, last ₹1100. Deal pakki?</div>
              </div>
           </div>
           <div className="blob"></div>
        </div>
      </div>
      <style jsx>{`
        .section {
            padding-top: var(--spacing-xl);
            overflow: hidden;
        }

        .hero-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: var(--spacing-2xl);
        }
        
        .hero-content {
          text-align: center;
          max-width: 600px;
        }

        .badge {
            display: inline-block;
            background: #e0f2f1;
            color: var(--color-primary-dark);
            padding: 0.5rem 1rem;
            border-radius: var(--radius-full);
            font-size: var(--font-size-sm);
            font-weight: var(--font-weight-bold);
            margin-bottom: var(--spacing-md);
        }

        .hero-title {
          font-family: var(--font-family-heading);
          font-size: var(--font-size-4xl); /* Reduced from previous logic slightly via var change */
          font-weight: var(--font-weight-extrabold);
          margin-bottom: var(--spacing-md);
          line-height: 1.1;
          letter-spacing: -0.02em;
        }

        .text-highlight {
          color: var(--color-primary);
          position: relative;
          z-index: 1;
        }
        
        .text-highlight::after {
            content: '';
            position: absolute;
            bottom: 5px;
            left: 0;
            width: 100%;
            height: 10px;
            background: #b2dfdb; /* Light translucent teal */
            z-index: -1;
            opacity: 0.6;
        }

        .hero-subtitle {
          font-size: var(--font-size-lg);
          color: var(--color-text-light);
          margin-bottom: var(--spacing-lg);
          line-height: 1.6;
        }

        .hero-features {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: var(--spacing-sm);
            margin-bottom: var(--spacing-lg);
        }
        
        .feature-pill {
            background: var(--color-surface);
            padding: 0.5rem 1rem;
            border-radius: var(--radius-md);
            font-size: var(--font-size-sm);
            font-weight: var(--font-weight-medium);
            display: flex;
            align-items: center;
            gap: 6px;
        }

        .hero-cta {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-sm);
          align-items: center;
        }
        
        .btn-xl {
            padding: 1rem 2rem;
            font-size: var(--font-size-lg);
            border-radius: var(--radius-full);
            display: flex;
            gap: 8px;
        }
        
        .btn-text {
            color: var(--color-text);
            display: flex;
            gap: 8px;
            align-items: center;
        }
        
        .btn-text:hover {
            text-decoration: underline;
            color: var(--color-primary);
        }
        
        /* Phone Mockup Styling */
        .hero-image-wrapper {
            position: relative;
            width: 100%;
            max-width: 300px; /* Slightly narrower for realism */
            margin: 0 auto;
        }
        
        .phone-mockup {
            background: #fff;
            border: 12px solid #2d3748; /* Dark bezel */
            border-radius: 40px;
            overflow: hidden; /* Clips content to rounded corners */
            position: relative;
            z-index: 2;
            background: #dcf8c6; /* WhatsApp bg */
            min-height: 550px;
            box-shadow: 
                0 0 0 2px #4a5568, /* Outer metallic rim */
                var(--shadow-xl); /* Deep drop shadow */
        }
        
        /* The Notch */
        .phone-mockup::before {
            content: '';
            position: absolute;
            top: 0;
            left: 50%;
            transform: translateX(-50%);
            width: 100px;
            height: 24px;
            background: #2d3748;
            border-bottom-left-radius: 12px;
            border-bottom-right-radius: 12px;
            z-index: 10;
        }
        
        /* Side placement for buttons (optional but cool) */
        .phone-mockup::after {
            content: '';
            position: absolute;
            top: 100px;
            right: -14px;
            width: 4px;
            height: 40px;
            background: #4a5568;
            border-top-right-radius: 2px;
            border-bottom-right-radius: 2px;
        }
        
        .screen {
            display: flex;
            flex-direction: column;
            gap: 15px;
            padding: 40px 10px 20px 10px; /* Top padding clears notch */
            height: 100%;
        }
        
        .msg {
            padding: 10px 15px;
            border-radius: 15px;
            font-size: 13px; /* Smaller text inside phone */
            max-width: 85%;
            box-shadow: 0 1px 1px rgba(0,0,0,0.1);
            position: relative;
            line-height: 1.4;
        }
        
        .msg-left {
            background: #fff;
            align-self: flex-start;
            border-top-left-radius: 0;
        }
        
        .msg-left::before {
            content: '';
            position: absolute;
            top: 0;
            left: -8px;
            width: 0;
            height: 0;
            border-top: 10px solid #fff;
            border-left: 10px solid transparent;
        }
        
        .msg-right {
            background: #e7ffdb;
            align-self: flex-end;
            border-top-right-radius: 0;
        }
        
        .msg-right::before {
            content: '';
            position: absolute;
            top: 0;
            right: -8px;
            width: 0;
            height: 0;
            border-top: 10px solid #e7ffdb;
            border-right: 10px solid transparent;
        }
        
        .blob {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 140%;
            height: 120%;
            background: radial-gradient(circle, rgba(18, 140, 126, 0.15) 0%, rgba(255,255,255,0) 70%);
            z-index: 1;
        }

        @media (min-width: 768px) {
          .hero-container {
            flex-direction: row;
            text-align: left;
            justify-content: space-between;
          }

          .hero-content {
            text-align: left;
            flex: 1;
            align-items: flex-start;
          }
           
           .hero-features {
               justify-content: flex-start;
           }

          .hero-cta {
            flex-direction: row;
          }

          .hero-image-wrapper {
            flex: 1;
            display: flex;
            justify-content: center;
          }
          
          .hero-title {
             font-size: var(--font-size-5xl);
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
