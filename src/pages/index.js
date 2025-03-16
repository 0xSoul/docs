import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';

// Simplified homepage with improved flow
export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  
  // Core product tiles for cleaner presentation
  const coreProducts = [
    {
      id: 'apex-dieties',
      title: 'Apex Dieties',
      description: 'Powerful entities in the 0xSoul universe',
      icon: '⚜️',
      link: '/docs/collection/digital-assets/apex-dieties'
    },
    {
      id: 'cublyx',
      title: 'CublyX',
      description: 'Cubic digital assets with unique properties',
      icon: '🧊',
      link: '/docs/collection/digital-assets/cublyx'
    },
    {
      id: 'soul-tokens',
      title: 'Soul Tokens',
      description: 'Digital tokens representing Soul essence',
      icon: '🪙',
      link: '/docs/collection/digital-assets/soul-tokens'
    },
    {
      id: 'holy-shit',
      title: 'Holy Shit',
      description: 'Extraordinary collectibles with special properties',
      icon: '✨',
      link: '/docs/collection/digital-assets/holy-shit'
    }
  ];
  
  return (
    <Layout
      title={siteConfig.title}
      description={siteConfig.tagline}>
      
      {/* Cosmic Background - Keeping the visual elements you like */}
      <div className={styles.cosmicBackground}>
        <div className={styles.stars}></div>
        <div className={styles.twinkling}></div>
        <div className={styles.nebula}></div>
        
        <div className={styles.floatingOrb} style={{top: '15%', left: '10%', animationDelay: '0s'}}></div>
        <div className={styles.floatingOrb} style={{bottom: '10%', right: '15%', animationDelay: '2s'}}></div>
        <div className={styles.floatingOrb} style={{top: '60%', left: '20%', animationDelay: '4s'}}></div>
        
        <div className={styles.floatingRing} style={{top: '30%', right: '25%'}}></div>
        <div className={styles.floatingRing} style={{bottom: '20%', left: '15%', transform: 'rotate(45deg)'}}></div>
      </div>
      
      {/* Simplified Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <div className={styles.logoContainer}>
            <img src="/img/SOUL_Logo_RGB_Mark.png" alt="0xSoul" className={styles.heroLogo} />
          </div>
          <Heading as="h1" className={styles.heroTitle}>
            0xSoul
          </Heading>
          <p className={styles.heroSubtitle}>
            Pioneering the Agentic Economy on LUKSO
          </p>
          <div className={styles.heroActions}>
            <Link className="button button--primary button--lg" to="/docs/collection">
              Explore Collection
            </Link>
          </div>
        </div>
      </section>
      
      {/* Simplified Products Section */}
      <section className={styles.productsSection}>
        <div className={styles.sectionContainer}>
          <Heading as="h2" className={styles.sectionTitle}>
            Digital Assets
          </Heading>
          <p className={styles.sectionDescription}>
            Explore our range of digital assets designed for the decentralized universe.
          </p>
          
          <div className={styles.productsGrid}>
            {coreProducts.map((product) => (
              <div key={product.id} className={styles.productCard}>
                <div className={styles.productIcon}>{product.icon}</div>
                <h3 className={styles.productTitle}>{product.title}</h3>
                <p className={styles.productDescription}>{product.description}</p>
                <Link to={product.link} className={styles.productLink}>
                  <span>Learn more</span>
                  <span className={styles.productLinkArrow}>→</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Simplified Call-to-Action Section */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaContainer}>
          <Heading as="h2" className={styles.ctaTitle}>
            Begin Your Journey
          </Heading>
          <p className={styles.ctaDescription}>
            Embark on a celestial adventure with 0xSoul's digital products and services.
          </p>
          <div className={styles.ctaActions}>
            <Link className="button button--primary button--lg" to="/docs/collection">
              View Collection
            </Link>
            <Link className="button button--secondary button--lg" to="/docs/AI with 🆙">
              Explore AI with UP
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
