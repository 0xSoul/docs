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
  
  return (
    <Layout
      title={siteConfig.title}
      description={siteConfig.tagline}>
      
      {/* Subtle Animated Background */}
      <div className={styles.backgroundElements}>
        <div className={styles.floatingOrb} style={{top: '15%', left: '10%', animationDelay: '0s'}}></div>
        <div className={styles.floatingOrb} style={{bottom: '10%', right: '15%', animationDelay: '2s'}}></div>
        <div className={styles.floatingRing} style={{top: '30%', right: '25%'}}></div>
      </div>
      
      {/* Hero Section with Search */}
      <section className={styles.heroSectionWrapper}>
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <div className={styles.centeredLogo}>
              <img src="/img/SOUL_Logo_RGB_Mark.png" alt="0xSoul" className={styles.heroLogo} />
            </div>
            <Heading as="h1" className={styles.heroTitle}>
              {siteConfig.title}
            </Heading>
            <p className={styles.heroSubtitle}>{siteConfig.tagline}</p>
            <div className={styles.searchContainer}>
              <input 
                type="text" 
                className={styles.searchInput} 
                placeholder="Search product documentation..." 
                onClick={() => window.location.href = '/docs/intro'}
              />
              <button className={styles.searchButton}>🔍</button>
            </div>
            <div className={styles.buttonContainer}>
              <Link className="button button--primary button--lg" to="/docs/intro">
                Get Started
              </Link>
              <Link className="button button--secondary button--lg" to="/docs/intro">
                Product Guide
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Documentation Categories */}
      <section className={styles.docCategories}>
        <div className={styles.categoriesContainer}>
          {[
            {
              title: 'Product Overview',
              description: 'Understand what our product does and how it can help you',
              icon: '🔭',
              link: '/docs/intro',
              color: 'var(--ifm-color-primary)',
            },
            {
              title: 'Getting Started',
              description: 'Your first steps to using our product effectively',
              icon: '🚀',
              link: '/docs/intro',
              color: 'var(--ifm-color-primary-light)',
            },
            {
              title: 'Core Concepts',
              description: 'Essential concepts and terminology explained',
              icon: '🧠',
              link: '/docs/intro',
              color: 'var(--ifm-color-primary-darker)',
            },
            {
              title: 'Use Cases',
              description: 'Real-world scenarios and applications of our product',
              icon: '📋',
              link: '/docs/intro',
              color: 'var(--ifm-color-primary-darkest)',
            },
            {
              title: 'User Guides',
              description: 'Step-by-step guides for common product features',
              icon: '📝',
              link: '/docs/intro',
              color: 'var(--ifm-color-primary-light)',
            },
            {
              title: 'FAQ & Troubleshooting',
              description: 'Common questions and solutions to typical issues',
              icon: '🔍',
              link: '/docs/intro',
              color: 'var(--ifm-color-primary)',
            },
          ].map((category, idx) => (
            <Link to={category.link} key={idx} className={styles.categoryCard} style={{'--card-color': category.color}}>
              <div className={styles.categoryIcon}>{category.icon}</div>
              <h3 className={styles.categoryTitle}>{category.title}</h3>
              <p className={styles.categoryDescription}>{category.description}</p>
              <div className={styles.categoryArrow}>→</div>
            </Link>
          ))}
        </div>
      </section>
      
      {/* Key Product Benefits */}
      <section className={styles.featuresHighlights}>
        <div className={styles.featuresContainer}>
          <div className={styles.featuresContent}>
            <Heading as="h2" className={styles.featuresTitle}>
              Key Product Benefits
            </Heading>
            <ul className={styles.featuresList}>
              <li>
                <span className={styles.featureIcon}>✨</span>
                <div>
                  <h3>Intuitive Design</h3>
                  <p>Designed for simplicity and ease of use, with a focus on user experience</p>
                </div>
              </li>
              <li>
                <span className={styles.featureIcon}>⚡</span>
                <div>
                  <h3>High Performance</h3>
                  <p>Optimized for speed and efficiency in all operations</p>
                </div>
              </li>
              <li>
                <span className={styles.featureIcon}>🔒</span>
                <div>
                  <h3>Advanced Security</h3>
                  <p>Enterprise-grade security features built into every level</p>
                </div>
              </li>
              <li>
                <span className={styles.featureIcon}>🔄</span>
                <div>
                  <h3>Seamless Integration</h3>
                  <p>Works with your existing tools and infrastructure</p>
                </div>
              </li>
            </ul>
          </div>
          <div className={styles.productImageContainer}>
            <div className={styles.productShowcase}>
              <div className={styles.showcaseHeader}>
                <span className={styles.showcaseDot}></span>
                <span className={styles.showcaseDot}></span>
                <span className={styles.showcaseDot}></span>
                <span className={styles.showcaseTitle}>Product Interface</span>
              </div>
              <div className={styles.showcaseContent}>
                <div className={styles.productPlaceholder}>
                  <div className={styles.productGraphic}>
                    <div className={styles.productIcon}>
                      <img src="/img/SOUL_Logo_RGB_Mark.png" alt="Product Icon" width="60" />
                    </div>
                    <div className={styles.placeholderText}>Product Interface Preview</div>
                    <div className={styles.placeholderSubtext}>Detailed product screenshots coming soon</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Documentation Path */}
      <section className={styles.docPath}>
        <div className={styles.docPathContent}>
          <Heading as="h2" className={styles.docPathTitle}>
            Start Your Product Journey
          </Heading>
          <div className={styles.journeySteps}>
            <div className={styles.journeyStep}>
              <div className={styles.stepNumber}>1</div>
              <h3 className={styles.stepTitle}>Learn</h3>
              <p className={styles.stepDescription}>Understand what our product does and how it can benefit you</p>
              <Link to="/docs/intro" className={styles.stepLink}>Product Overview →</Link>
            </div>
            <div className={styles.journeyConnector}></div>
            <div className={styles.journeyStep}>
              <div className={styles.stepNumber}>2</div>
              <h3 className={styles.stepTitle}>Explore</h3>
              <p className={styles.stepDescription}>Discover key features and capabilities</p>
              <Link to="/docs/intro" className={styles.stepLink}>Feature Guide →</Link>
            </div>
            <div className={styles.journeyConnector}></div>
            <div className={styles.journeyStep}>
              <div className={styles.stepNumber}>3</div>
              <h3 className={styles.stepTitle}>Apply</h3>
              <p className={styles.stepDescription}>Put your knowledge to work with our product</p>
              <Link to="/docs/intro" className={styles.stepLink}>User Guide →</Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA with GitHub */}
      <section className={styles.githubCTA}>
        <div className={styles.githubContent}>
          <div className={styles.orbitAnimation}>
            <div className={styles.planet}></div>
            <div className={styles.orbit}>
              <div className={styles.satellite}></div>
            </div>
          </div>
          <div className={styles.ctaText}>
            <Heading as="h2" className={styles.ctaTitle}>
              Join Our Community
            </Heading>
            <p>Get the most out of our product by joining our community of users and contributors. Access exclusive resources and stay up-to-date with the latest developments.</p>
            <div className={styles.ctaButtons}>
              <Link className="button button--primary button--lg" to="/docs/intro">
                View Documentation
              </Link>
              <a href="https://github.com/facebook/docusaurus" target="_blank" rel="noopener noreferrer" className="button button--secondary button--lg">
                Resources
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
