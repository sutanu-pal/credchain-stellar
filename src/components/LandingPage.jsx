import React from 'react';
import { CheckCircle, Shield, Wallet, FileCheck, ArrowRight, Sparkles, Lock, Zap, Mail, Github, Twitter, Globe } from 'lucide-react';

const LandingPage = ({ setCurrentPage }) => {
  return (
    <div className="min-h-screen bg-slate-950 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-cyan-500/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-blue-600/10 rounded-full blur-3xl"></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.05)_1px,transparent_1px)] bg-[size:64px_64px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 py-12 sm:py-20 relative z-10">
        {/* Hero Section */}
        <div className="text-center mb-32">
          {/* Logo Section */}
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="relative">
              <div className="absolute inset-0 bg-blue-500/30 rounded-xl blur-xl"></div>
              <div className="relative bg-gradient-to-br from-blue-600 to-cyan-600 p-3 rounded-xl">
                <Shield className="w-8 h-8 text-white" strokeWidth={2.5} />
              </div>
            </div>
            <h2 className="text-4xl font-bold text-white">CredChain</h2>
          </div>

          {/* Small Badge */}
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/30 rounded-full px-5 py-2 mb-8 backdrop-blur-sm hover:bg-blue-500/15 transition-colors">
            <Sparkles className="w-4 h-4 text-blue-400" />
            <span className="text-sm text-blue-300 font-medium">Built on Stellar Blockchain</span>
          </div>

          {/* Main Title */}
          <h1 className="text-6xl sm:text-7xl md:text-8xl font-bold mb-6 leading-tight">
            <span className="text-blue-400">On-Chain Credential</span>
            <br />
            <span className="text-white">Verification</span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl text-slate-300 mb-16 max-w-3xl mx-auto leading-relaxed">
            Issue. Own. Verify credentials instantly with blockchain-level security and transparency.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex gap-6 justify-center flex-wrap items-center">
            <button 
              onClick={() => setCurrentPage('issuer')}
              className="group relative bg-blue-600 hover:bg-blue-500 text-white px-10 py-5 rounded-xl font-semibold text-lg flex items-center gap-3 transition-all duration-300 shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:scale-105"
            >
              <FileCheck className="w-5 h-5" />
              <span>Issue Credential</span>
            </button>
            
            <button 
              onClick={() => setCurrentPage('verify')}
              className="group relative bg-slate-800/80 hover:bg-slate-700/80 backdrop-blur-sm text-white px-10 py-5 rounded-xl font-semibold text-lg flex items-center gap-3 transition-all duration-300 border border-slate-600 hover:border-slate-500 hover:scale-105"
            >
              <Shield className="w-5 h-5" />
              <span>Verify Credential</span>
            </button>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-24">
          {/* Card 1 */}
          <div className="group relative bg-gradient-to-b from-slate-800/60 to-slate-900/60 backdrop-blur-sm rounded-2xl p-8 border border-slate-700 hover:border-blue-500/50 transition-all duration-500 hover:shadow-xl hover:shadow-blue-500/20 hover:-translate-y-1">
            <div className="absolute inset-0 bg-gradient-to-b from-blue-500/0 to-blue-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative">
              <div className="w-14 h-14 rounded-xl bg-blue-500/15 flex items-center justify-center mb-6 group-hover:bg-blue-500/25 transition-colors border border-blue-500/30 group-hover:scale-110 duration-300">
                <FileCheck className="w-7 h-7 text-blue-400" strokeWidth={2} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Issue Credentials
              </h3>
              <p className="text-slate-300 leading-relaxed text-sm">
                Create and issue verifiable credentials directly on the Stellar blockchain with immutable proof.
              </p>
            </div>
          </div>
          
          {/* Card 2 */}
          <div className="group relative bg-gradient-to-b from-slate-800/60 to-slate-900/60 backdrop-blur-sm rounded-2xl p-8 border border-slate-700 hover:border-blue-500/50 transition-all duration-500 hover:shadow-xl hover:shadow-blue-500/20 hover:-translate-y-1">
            <div className="absolute inset-0 bg-gradient-to-b from-blue-500/0 to-blue-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative">
              <div className="w-14 h-14 rounded-xl bg-blue-500/15 flex items-center justify-center mb-6 group-hover:bg-blue-500/25 transition-colors border border-blue-500/30 group-hover:scale-110 duration-300">
                <Wallet className="w-7 h-7 text-blue-400" strokeWidth={2} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Store in Wallet
              </h3>
              <p className="text-slate-300 leading-relaxed text-sm">
                Credentials are stored securely in your Stellar wallet, giving you complete ownership and control.
              </p>
            </div>
          </div>
          
          {/* Card 3 */}
          <div className="group relative bg-gradient-to-b from-slate-800/60 to-slate-900/60 backdrop-blur-sm rounded-2xl p-8 border border-slate-700 hover:border-blue-500/50 transition-all duration-500 hover:shadow-xl hover:shadow-blue-500/20 hover:-translate-y-1">
            <div className="absolute inset-0 bg-gradient-to-b from-blue-500/0 to-blue-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative">
              <div className="w-14 h-14 rounded-xl bg-blue-500/15 flex items-center justify-center mb-6 group-hover:bg-blue-500/25 transition-colors border border-blue-500/30 group-hover:scale-110 duration-300">
                <CheckCircle className="w-7 h-7 text-blue-400" strokeWidth={2} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Verify Instantly
              </h3>
              <p className="text-slate-300 leading-relaxed text-sm">
                Anyone can verify credentials in seconds using just a Stellar wallet address. No intermediaries needed.
              </p>
            </div>
          </div>
        </div>

        {/* Trust Badges Section */}
        <div className="flex items-center justify-center gap-16 flex-wrap py-12 mb-24 border-y border-slate-800/50">
          <div className="flex items-center gap-3 text-slate-400 hover:text-blue-400 transition-colors cursor-default">
            <div className="w-10 h-10 rounded-lg bg-slate-800/50 flex items-center justify-center border border-slate-700">
              <Lock className="w-5 h-5" />
            </div>
            <span className="text-sm font-semibold">Secure & Immutable</span>
          </div>
          <div className="flex items-center gap-3 text-slate-400 hover:text-blue-400 transition-colors cursor-default">
            <div className="w-10 h-10 rounded-lg bg-slate-800/50 flex items-center justify-center border border-slate-700">
              <Zap className="w-5 h-5" />
            </div>
            <span className="text-sm font-semibold">Lightning Fast</span>
          </div>
          <div className="flex items-center gap-3 text-slate-400 hover:text-blue-400 transition-colors cursor-default">
            <div className="w-10 h-10 rounded-lg bg-slate-800/50 flex items-center justify-center border border-slate-700">
              <Shield className="w-5 h-5" />
            </div>
            <span className="text-sm font-semibold">Decentralized</span>
          </div>
        </div>

        {/* Contact & Info Section */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* About Section */}
          <div className="bg-gradient-to-br from-slate-800/40 to-slate-900/40 backdrop-blur-sm rounded-2xl p-8 border border-slate-700">
            <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <Globe className="w-6 h-6 text-blue-400" />
              About CredChain
            </h3>
            <p className="text-slate-300 leading-relaxed mb-6">
              CredChain leverages the power of Stellar blockchain to provide a decentralized, transparent, and secure platform for credential issuance and verification. Built with cutting-edge technology, we ensure your credentials are tamper-proof and instantly verifiable.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-lg bg-slate-800 hover:bg-blue-600 flex items-center justify-center border border-slate-600 hover:border-blue-500 transition-all duration-300 group">
                <Twitter className="w-5 h-5 text-slate-400 group-hover:text-white" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-slate-800 hover:bg-blue-600 flex items-center justify-center border border-slate-600 hover:border-blue-500 transition-all duration-300 group">
                <Github className="w-5 h-5 text-slate-400 group-hover:text-white" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-slate-800 hover:bg-blue-600 flex items-center justify-center border border-slate-600 hover:border-blue-500 transition-all duration-300 group">
                <Globe className="w-5 h-5 text-slate-400 group-hover:text-white" />
              </a>
            </div>
          </div>

          {/* Contact Section */}
          <div className="bg-gradient-to-br from-slate-800/40 to-slate-900/40 backdrop-blur-sm rounded-2xl p-8 border border-slate-700">
            <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <Mail className="w-6 h-6 text-blue-400" />
              Get in Touch
            </h3>
            <p className="text-slate-300 leading-relaxed mb-6">
              Have questions or need assistance? Our team is here to help you navigate the world of decentralized credentials.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-slate-300 hover:text-blue-400 transition-colors">
                <Mail className="w-5 h-5" />
                <span>support@credchain.io</span>
              </div>
              <div className="flex items-center gap-3 text-slate-300">
                <Globe className="w-5 h-5" />
                <span>Built on Stellar Network</span>
              </div>
              <div className="flex items-center gap-3 text-slate-300">
                <Shield className="w-5 h-5" />
                <span>Enterprise-grade Security</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center py-8 border-t border-slate-800/50">
          <p className="text-slate-500 text-sm">
            © 2024 CredChain. Powered by Stellar Blockchain. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;