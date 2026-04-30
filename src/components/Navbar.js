"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCogs, FaBars, FaTimes } from 'react-icons/fa';
import ThemeToggle from './ThemeToggle';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header className={`${styles.navbar} ${scrolled ? styles.navbarScrolled : ''}`}>
      <div className={`container ${styles.navContainer}`}>
        <Link href="/" className={styles.logo}>
          <FaCogs size={30} className={styles.logoAccent} />
          <span className={styles.logoText}>
            Precision <span className={styles.logoAccent}>Industry</span>
          </span>
        </Link>
        
        {/* Desktop Nav */}
        <nav className={styles.navLinks}>
          <Link 
            href="/" 
            className={`${styles.link} ${pathname === '/' ? styles.linkActive : ''}`}
          >
            Home
          </Link>
          <Link 
            href="/fabrication" 
            className={`${styles.link} ${pathname === '/fabrication' ? styles.linkActive : ''}`}
          >
            Fabrication
          </Link>
          <Link 
            href="/contact" 
            className={`${styles.link} ${pathname === '/contact' ? styles.linkActive : ''}`}
          >
            Contact
          </Link>
          <ThemeToggle />
          <Link href="/contact" className="btn-primary">
            Get a Quote
          </Link>
        </nav>

        {/* Mobile Hamburger */}
        <div className={styles.mobileControls}>
          <ThemeToggle />
          <button 
            className={styles.hamburger}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle mobile menu"
          >
            {mobileOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            className={styles.mobileMenu}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <Link 
              href="/" 
              className={`${styles.mobileLink} ${pathname === '/' ? styles.mobileLinkActive : ''}`}
            >
              Home
            </Link>
            <Link 
              href="/fabrication" 
              className={`${styles.mobileLink} ${pathname === '/fabrication' ? styles.mobileLinkActive : ''}`}
            >
              Fabrication
            </Link>
            <Link 
              href="/contact" 
              className={`${styles.mobileLink} ${pathname === '/contact' ? styles.mobileLinkActive : ''}`}
            >
              Contact
            </Link>
            <Link href="/contact" className="btn-primary" style={{ marginTop: '1rem', textAlign: 'center' }}>
              Get a Quote
            </Link>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
