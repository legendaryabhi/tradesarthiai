import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="container header-container">
        <div className="logo">
          Tradesarthi <span className="text-primary">AI</span>
        </div>
        
        {/* Mobile Menu Button */}
        <button className="mobile-menu-btn" onClick={toggleMenu} aria-label="Toggle menu">
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Navigation */}
        <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
          <ul className="nav-list">
            <li><a href="#how-it-works" onClick={() => setIsMenuOpen(false)}>How It Works</a></li>
            <li><a href="#demo" onClick={() => setIsMenuOpen(false)}>Demo</a></li>
            <li><a href="#features" onClick={() => setIsMenuOpen(false)}>Features</a></li>
            <li><a href="#early-access" onClick={() => setIsMenuOpen(false)}>Early Access</a></li>
          </ul>
               <button className="btn btn-primary btn-sm header-cta" onClick={() => document.getElementById('early-access').scrollIntoView({behavior: 'smooth'})}>Get Started</button>
        </nav>
      </div>

      <style jsx>{`
        .header {
          position: sticky;
          top: 0;
          z-index: 1000;
          background-color: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          box-shadow: var(--shadow-sm);
          height: 70px;
          display: flex;
          align-items: center;
        }

        .header-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo {
          font-family: var(--font-family-heading);
          font-size: var(--font-size-xl);
          font-weight: var(--font-weight-extrabold);
          color: var(--color-text);
          cursor: pointer;
        }

        .text-primary {
          color: var(--color-primary);
        }

        .nav {
          display: none;
        }

        .nav-list {
          display: flex;
          gap: var(--spacing-lg);
          align-items: center;
        }

        .nav-list a {
          font-weight: var(--font-weight-medium);
          color: var(--color-text);
          transition: color 0.2s;
          font-size: var(--font-size-sm);
        }

        .nav-list a:hover {
          color: var(--color-primary);
        }
        
        .header-cta {
            margin-left: var(--spacing-md);
        }

        .mobile-menu-btn {
          display: block;
          color: var(--color-text);
        }

        @media (min-width: 768px) {
          .nav {
            display: flex;
            align-items: center;
          }

          .mobile-menu-btn {
            display: none;
          }
        }
        
        /* Mobile Menu Styles */
         @media (max-width: 767px) {
            .nav-open {
                display: flex;
                flex-direction: column;
                position: absolute;
                top: 70px;
                left: 0;
                width: 100%;
                background: white;
                padding: var(--spacing-lg);
                box-shadow: var(--shadow-md);
                border-top: 1px solid var(--color-border);
            }
            
            .nav-open .nav-list {
                flex-direction: column;
                gap: var(--spacing-md);
                margin-bottom: var(--spacing-md);
            }
            
            .nav-open .header-cta {
                margin: 0;
                width: 100%;
                justify-content: center;
            }
         }

      `}</style>
    </header>
  );
};

export default Header;
