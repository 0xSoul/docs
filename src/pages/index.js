import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';

// Product Documentation-focused home page with playful elements
export default function Home() {
  // This hook gives you access to everything in docusaurus.config.js
  const {siteConfig} = useDocusaurusContext();
  
  // Product data for 0xSoul Apex Deities
  const products = [
    {
      id: 'celestian-expanse',
      title: 'Celestian Expanse',
      description: 'Navigate through the cosmic landscape of decentralized possibilities. Explore vast digital universes with unparalleled freedom and security.',
      icon: '🌌',
      color: 'var(--ifm-color-primary-lightest)',
      position: 'top-left'
    },
    {
      id: 'soul-messenger',
      title: 'Soul Messenger',
      description: 'Connect across the cosmos with encrypted communications that transcend traditional boundaries. Your messages, secured by celestial technology.',
      icon: '✉️',
      color: 'var(--ifm-color-primary-lighter)',
      position: 'top-right'
    },
    {
      id: 'soul-feed',
      title: 'Soul Feed',
      description: 'A celestial stream of curated content and updates from across the digital universe. Stay informed with cosmic precision.',
      icon: '📡',
      color: 'var(--ifm-color-primary)',
      position: 'center'
    },
    {
      id: 'soul',
      title: 'Soul',
      description: 'The ethereal essence of digital identity. Secure, portable, and uniquely yours across the entire digital cosmos.',
      icon: '✨',
      color: 'var(--ifm-color-primary-darker)',
      position: 'bottom-left'
    },
    {
      id: 'artisan-ally',
      title: 'Artisan Ally',
      description: 'Empower your creative force with cosmic tools designed for digital artisans. Craft, create, and claim your space in the universe.',
      icon: '🔮',
      color: 'var(--ifm-color-primary-darkest)',
      position: 'bottom-right'
    }
  ];
  
  return (
    <Layout
      title={siteConfig.title}
      description={siteConfig.tagline}>
      
      {/* Enhanced Cosmic Background */}
      <div className={styles.cosmicBackground}>
        <div className={styles.stars}></div>
        <div className={styles.twinkling}></div>
        <div className={styles.nebula}></div>
        
        <div className={styles.floatingOrb} style={{top: '15%', left: '10%', animationDelay: '0s'}}></div>
        <div className={styles.floatingOrb} style={{bottom: '10%', right: '15%', animationDelay: '2s'}}></div>
        <div className={styles.floatingOrb} style={{top: '60%', left: '20%', animationDelay: '4s'}}></div>
        <div className={styles.floatingOrb} style={{top: '30%', right: '25%', animationDelay: '3s'}}></div>
        
        <div className={styles.floatingRing} style={{top: '30%', right: '25%'}}></div>
        <div className={styles.floatingRing} style={{bottom: '20%', left: '15%', transform: 'rotate(45deg)'}}></div>
      </div>
      
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <div className={styles.logoContainer}>
            <img src="/img/SOUL_Logo_RGB_Mark.png" alt="0xSoul" className={styles.heroLogo} />
          </div>
          <Heading as="h1" className={styles.heroTitle}>
            0xSoul Apex Deities
          </Heading>
          <p className={styles.heroSubtitle}>
            Curating the Celestial Expanse through Digital Innovation
          </p>
          <div className={styles.heroActions}>
            <Link className="button button--primary button--lg" to="/docs/intro">
              Explore Our Universe
            </Link>
          </div>
        </div>
      </section>
      
      {/* Cosmic Products Galaxy */}
      <section className={styles.productsGalaxy}>
        <div className={styles.galaxyCenter}>
          <div className={styles.centerOrb}></div>
          <div className={styles.galaxyRings}>
            <div className={styles.galaxyRing}></div>
            <div className={styles.galaxyRing}></div>
            <div className={styles.galaxyRing}></div>
          </div>
        </div>
        
        {/* Additional cosmic elements for visual enhancement */}
        <div className={styles.floatingOrb} style={{top: '20%', left: '5%', animationDelay: '0s'}}></div>
        <div className={styles.floatingOrb} style={{bottom: '15%', right: '8%', animationDelay: '2s'}}></div>
        <div className={styles.floatingRing} style={{top: '15%', right: '15%', transform: 'rotate(25deg)'}}></div>
        <div className={styles.floatingRing} style={{bottom: '10%', left: '10%', transform: 'rotate(65deg)'}}></div>
        
        <div className={styles.productsContainer}>
          {products.map((product) => (
            <div 
              key={product.id} 
              className={`${styles.productPlanet} ${styles[`planet-${product.position}`]}`}
              style={{'--product-color': product.color}}
            >
              <div className={styles.orbitPath}></div>
              <div className={styles.productCard}>
                <div className={styles.productGlow}></div>
                <div className={styles.productIcon}>{product.icon}</div>
                <h2 className={styles.productTitle}>{product.title}</h2>
                <p className={styles.productDescription}>{product.description}</p>
                <Link to={`/docs/${product.id}`} className={styles.productLink}>
                  <span>Discover</span>
                  <span className={styles.productLinkArrow}>→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      {/* Cosmic Journey */}
      <section className={styles.cosmicJourney}>
        <div className={styles.journeyStarfield}></div>
        <div className={styles.journeyGlow}></div>
        <div className={styles.journeyPath}></div>
        
        <div className={styles.journeyElements}>
          <div className={styles.journeyOrb}></div>
          <div className={styles.journeyOrb}></div>
          
          {/* Animated shooting stars */}
          <div className={styles.shootingStar} style={{top: '20%', left: '10%', animationDelay: '0s'}}></div>
          <div className={styles.shootingStar} style={{top: '40%', right: '20%', animationDelay: '2s'}}></div>
          <div className={styles.shootingStar} style={{top: '70%', left: '30%', animationDelay: '4s'}}></div>
        </div>
        
        <div className={styles.journeyContent}>
          <Heading as="h2" className={styles.journeyTitle}>
            Begin Your Cosmic Journey
          </Heading>
          <p className={styles.journeyDescription}>
            Embark on a celestial adventure with 0xSoul's suite of digital products.
            Our Apex Deities are designed to transform your digital experience.
          </p>
          <div className={styles.journeyActions}>
            <Link className="button button--primary button--lg" to="/docs/getting-started">
              Launch Into Space
            </Link>
            <Link className="button button--secondary button--lg" to="/community">
              Join Our Constellation
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
