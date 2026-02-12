import React from 'react';
import { 
    MessageCircle, CheckCircle, ShieldCheck, PlayCircle, ArrowRight,
    ArrowLeft, Phone, Video, MoreVertical, Smile, Paperclip, Camera, Mic, Send
} from 'lucide-react';

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
              {/* WhatsApp Header Mockup */}
              <div className="chat-header">
                  <div className="header-left">
                      <ArrowLeft size={20} />
                      <div className="profile-pic">
                          <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Rahul" alt="Rahul" />
                      </div>
                      <div className="user-info">
                          <span className="user-name">Rahul</span>
                          <span className="user-status">online</span>
                      </div>
                  </div>
                  <div className="header-icons">
                      <Video size={18} />
                      <Phone size={18} />
                      <MoreVertical size={18} />
                  </div>
              </div>

              <div className="screen">
                 <div className="msg msg-left">Red saree dikhao?</div>
                 <div className="msg msg-right">Sure ma'am! Ye dekhiye latest Banarasi silk collection. Only ₹1200 today.</div>
                 <div className="msg msg-left">Thoda discount?</div>
                 <div className="msg msg-right">Okay, last ₹1100. Deal pakki?</div>
              </div>

              {/* WhatsApp Input Mockup */}
              <div className="chat-input-bar">
                  <div className="input-field">
                      <Smile size={20} color="#8696a0" />
                      <span className="placeholder">Message</span>
                      <div className="input-right-icons">
                          <Paperclip size={20} color="#8696a0" className="rotate-45" />
                          <Camera size={20} color="#8696a0" />
                      </div>
                  </div>
                  <div className="voice-btn">
                      <Mic size={20} color="#fff" />
                  </div>
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
          font-size: var(--font-size-4xl);
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
            background: #b2dfdb;
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
        
        /* Phone Mockup Styling */
        .hero-image-wrapper {
            position: relative;
            width: 100%;
            max-width: 300px;
            margin: 0 auto;
        }
        
        .phone-mockup {
            background: #fff;
            border: 12px solid #2d3748;
            border-radius: 40px;
            overflow: hidden;
            position: relative;
            z-index: 2;
            background: #efe7de; /* Real WhatsApp background color */
            background-image: url('https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png'); /* WhatsApp pattern */
            min-height: 550px;
            box-shadow: 
                0 0 0 2px #4a5568,
                var(--shadow-xl);
            display: flex;
            flex-direction: column;
        }
        
        .chat-header {
            background: #075e54;
            color: white;
            padding: 35px 12px 10px 12px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            z-index: 10;
        }

        .header-left {
            display: flex;
            align-items: center;
            gap: 4px;
        }

        .profile-pic {
            width: 32px;
            height: 32px;
            background: #ccc;
            border-radius: 50%;
            overflow: hidden;
            border: 1px solid rgba(255,255,255,0.2);
        }
        
        .profile-pic img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        .user-info {
            display: flex;
            flex-direction: column;
            margin-left: 4px;
        }

        .user-name {
            font-size: 14px;
            font-weight: 600;
            line-height: 1.2;
        }

        .user-status {
            font-size: 10px;
            opacity: 0.8;
        }

        .header-icons {
            display: flex;
            gap: 12px;
            opacity: 0.9;
        }
        
        /* Notch adjustment */
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
            z-index: 11;
        }
        
        .screen {
            flex: 1;
            display: flex;
            flex-direction: column;
            gap: 12px;
            padding: 15px 10px;
            overflow: hidden;
        }
        
        .msg {
            padding: 8px 12px;
            border-radius: 8px;
            font-size: 12px;
            max-width: 80%;
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
            background: #dcf8c6;
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
            border-top: 10px solid #dcf8c6;
            border-right: 10px solid transparent;
        }

        .chat-input-bar {
            padding: 8px;
            display: flex;
            align-items: center;
            gap: 6px;
            background: transparent;
        }

        .input-field {
            flex: 1;
            background: white;
            border-radius: 24px;
            padding: 8px 12px;
            display: flex;
            align-items: center;
            gap: 8px;
            box-shadow: 0 1px 1px rgba(0,0,0,0.1);
        }

        .placeholder {
            flex: 1;
            color: #8696a0;
            font-size: 14px;
        }

        .input-right-icons {
            display: flex;
            gap: 12px;
        }

        .rotate-45 {
            transform: rotate(45deg);
        }

        .voice-btn {
            width: 40px;
            height: 40px;
            background: #00a884;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: 0 1px 1px rgba(0,0,0,0.1);
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
