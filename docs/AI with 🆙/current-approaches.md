---
id: current-approaches
title: Current Approaches to AI in Blockchain
sidebar_label: Current Approaches
sidebar_position: 2
description: How AI currently interacts with blockchain systems while maintaining security
---

import SimpleDivider from '@site/src/components/SimpleDivider';

# Current Approaches to AI in Blockchain

People commonly enable AI to interact with private keys and crypto addresses using secure, controlled setups that maintain security while allowing automation.

<SimpleDivider withIcon={true} />

## Secure Integration Methods

Currently, several approaches are used to enable AI interaction with blockchain while maintaining security:

<div className="starry-background">

### 1. Separate Key Management & Signing

<div className="feature-grid">
  <div className="feature-card">
    <div className="feature-icon">⚓</div>
    <div className="feature-content">
      <h4>Signing Services</h4>
      <p>AI applications generate trade signals or transaction instructions, but a separate secure key-management system signs transactions externally.</p>
    </div>
  </div>
  <div className="feature-card">
    <div className="feature-icon">✧</div>
    <div className="feature-content">
      <h4>Hardware Security</h4>
      <p>Devices like Ledger or Trezor securely hold private keys. Transactions proposed by AI are reviewed and confirmed without exposing keys to the AI.</p>
    </div>
  </div>
</div>

### 2. Smart Contract-Based Controls

<div className="feature-grid">
  <div className="feature-card">
    <div className="feature-icon">⌘</div>
    <div className="feature-content">
      <h4>Permissioned Contracts</h4>
      <p>The AI can only call functions within pre-written smart contracts, placing strict limits on what the AI can do.</p>
    </div>
  </div>
  <div className="feature-card">
    <div className="feature-icon">⊹</div>
    <div className="feature-content">
      <h4>Built-in Guardrails</h4>
      <p>Smart contracts include rules that constrain actions (e.g., maximum trade size, asset type, permitted trading pairs).</p>
    </div>
  </div>
</div>

### 3. API-Key & Delegated Permissions

<div className="feature-grid">
  <div className="feature-card">
    <div className="feature-icon">✦</div>
    <div className="feature-content">
      <h4>Exchange APIs</h4>
      <p>AI connects via API keys with restricted permissions, allowing trades but disallowing withdrawals or deposits.</p>
    </div>
  </div>
  <div className="feature-card">
    <div className="feature-icon">⎔</div>
    <div className="feature-content">
      <h4>Delegation Protocols</h4>
      <p>Projects like ERC-4337 (Account Abstraction) allow controlled delegation without handing over direct control or private keys.</p>
    </div>
  </div>
</div>

### 4. MPC (Multi-Party Computation) Solutions

<div className="feature-grid">
  <div className="feature-card">
    <div className="feature-icon">☄</div>
    <div className="feature-content">
      <h4>Distributed Key Management</h4>
      <p>Keys are split across multiple trusted parties. AI requests transactions, but multiple parties must collectively approve/sign.</p>
    </div>
  </div>
</div>

### 5. Zero-Knowledge Proof (ZKPs) & Cryptographic Controls

<div className="feature-grid">
  <div className="feature-card">
    <div className="feature-icon">☼</div>
    <div className="feature-content">
      <h4>Zero-Knowledge Systems</h4>
      <p>Systems using ZK proofs allow AI to execute trades that must satisfy cryptographic constraints, preventing unauthorized actions.</p>
    </div>
  </div>
</div>

</div>

<SimpleDivider />

## Typical Workflow Example

<div className="feature-card">
  <div className="feature-icon">⚙</div>
  <div className="feature-content">
    <h4>Standard AI Transaction Flow</h4>
    <ol>
      <li><strong>AI Decision Making:</strong> AI analyzes market conditions and proposes a trade.</li>
      <li><strong>Transaction Generation:</strong> AI generates an unsigned transaction or parameters.</li>
      <li><strong>Approval:</strong> Human or automated system reviews and authorizes the transaction.</li>
      <li><strong>Secure Signing:</strong> Transaction is signed by a separate, secure module or hardware wallet.</li>
      <li><strong>Broadcasting:</strong> Only after signing is the transaction sent to the blockchain.</li>
    </ol>
  </div>
</div>

<SimpleDivider />

## Best Practices Summary

<blockquote>
  <ul>
    <li>Never expose private keys directly to the AI.</li>
    <li>Always implement an intermediate layer (hardware wallets, smart contracts, APIs, or MPC).</li>
    <li>Utilize strict controls, limits, and conditional logic.</li>
    <li>Employ audit trails, transparency, and permissioned access layers.</li>
  </ul>
</blockquote>

<SimpleDivider withIcon={true} />

## Framework Example: Eliza

Frameworks like Eliza demonstrate how these principles are implemented in practice.

<div className="feature-grid">
  <div className="feature-card">
    <div className="feature-icon">⚓</div>
    <div className="feature-content">
      <h4>Plugin Architecture</h4>
      <p>Compartmentalizes blockchain functionalities into plugins, isolating private key operations within specific modules.</p>
    </div>
  </div>
  <div className="feature-card">
    <div className="feature-icon">✧</div>
    <div className="feature-content">
      <h4>Trusted Execution Environments</h4>
      <p>Supports integration with TEEs to execute sensitive operations in a protected environment.</p>
    </div>
  </div>
  <div className="feature-card">
    <div className="feature-icon">⌘</div>
    <div className="feature-content">
      <h4>Hardware Security Support</h4>
      <p>Interfaces with HSMs and hardware wallets to keep private keys isolated from the AI environment.</p>
    </div>
  </div>
  <div className="feature-card">
    <div className="feature-icon">⊹</div>
    <div className="feature-content">
      <h4>MPC Integration</h4>
      <p>Allows implementation of Multi-Party Computation, dividing keys among different parties for enhanced security.</p>
    </div>
  </div>
</div>

<div className="cta-container">
  <a href="/docs/AI with 🆙/universal-profiles" className="cta-button">
    Explore Universal Profiles Solution
  </a>
</div> 