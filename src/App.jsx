import React from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent } from '@/components/ui/card.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Textarea } from '@/components/ui/textarea.jsx'
import { Trophy, FlaskConical, Rocket, Users, Network, Shield, Heart } from 'lucide-react'
import './App.css'

// Import assets
import socialtecLogo from './assets/socialtec-logo.png'
import socialtecIcon from './assets/SocialtecIconVector.png'
import armijnPhoto from './assets/armijn.png'
import michielPhoto from './assets/michiel.png'
import bobPhoto from './assets/Bob.png'
import givoScreen from './assets/Story1.5_Screen2.png'
import givoLogo from './assets/GIVO_Logo_Vector-50.png'
import frequencyLogo from './assets/frequency_logo.jpg'
import polkadotLogo from './assets/Polkadot_Logo.png'
import trustGraphHero from './assets/trust-graph-hero.png'
import attestationInfographic from './assets/attestation-infographic.png'

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center trust-graph-bg">
        <div className="absolute inset-0 overflow-hidden">
          {/* Trust graph visualization background */}
          <div 
            className="absolute inset-0 opacity-20 bg-center bg-no-repeat bg-cover"
            style={{
              backgroundImage: `url(${trustGraphHero})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          />
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
          <div className="mb-8">
            <img src={socialtecLogo} alt="Socialtec" className="h-16 mx-auto mb-4 logo-black"/>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Trust is the Ultimate<br/>
            <span className="gradient-text">Proof-of-Personhood</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-4xl mx-auto leading-relaxed">
            Socialtec builds the Web3 trust infrastructure for the next social paradigm. 
            We are the first to leverage <strong>real human connections</strong> as a foundation 
            for a Sybil-resistant network, fostering a better society in the process.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
            <Button 
              size="lg" 
              className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4 text-lg font-semibold"
            >
              Get in Touch
            </Button>
            
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <span>Powered by</span>
              <img src={polkadotLogo} alt="Polkadot" className="h-6"/>
            </div>
          </div>
        </div>
      </section>

      {/* Track Record Section */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Value Pioneers Since 2019
            </h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto">
              We are not new to this. Our journey into Web3 began with a win at the world's largest 
              blockchain hackathon and has been driven by passion and our own capital ever since. 
              We are 'skin-in-the-game' builders, dedicated to creating technology that puts human value first.
            </p>
          </div>
          
          <div className="relative">
            <div className="grid md:grid-cols-3 gap-8">
              {/* Timeline Item 1 */}
              <Card className="hover-lift">
                <CardContent className="p-8 text-center">
                  <div className="timeline-dot w-16 h-16 rounded-full mx-auto mb-6 flex items-center justify-center">
                    <Trophy className="w-8 h-8 text-white"/>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">2019</h3>
                  <h4 className="text-lg font-semibold text-accent mb-4">Odyssey Hackathon Winner</h4>
                  <p className="text-gray-600">
                    Recognized for our vision in the world's largest blockchain and AI hackathon.
                  </p>
                </CardContent>
              </Card>
              
              {/* Timeline Item 2 */}
              <Card className="hover-lift">
                <CardContent className="p-8 text-center">
                  <div className="timeline-dot w-16 h-16 rounded-full mx-auto mb-6 flex items-center justify-center">
                    <FlaskConical className="w-8 h-8 text-white"/>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">2020-2024</h3>
                  <h4 className="text-lg font-semibold text-accent mb-4">Self-Funded R&D</h4>
                  <p className="text-gray-600">
                    Four years of dedicated, self-funded development and real-world testing of multiple applications.
                  </p>
                </CardContent>
              </Card>
              
              {/* Timeline Item 3 */}
              <Card className="hover-lift">
                <CardContent className="p-8 text-center">
                  <div className="timeline-dot w-16 h-16 rounded-full mx-auto mb-6 flex items-center justify-center">
                    <Rocket className="w-8 h-8 text-white"/>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">2025</h3>
                  <h4 className="text-lg font-semibold text-accent mb-4">GIVO Launch</h4>
                  <p className="text-gray-600">
                    The launch of our flagship product, bringing our vision of a trust-based economy to life.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Foundation Section */}
      <section className="section-padding bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Building on Polkadot: A Decentralized Social Fabric
            </h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto">
              We believe the future of social applications is decentralized. That's why we build on Polkadot. 
              We specifically leverage <strong>Frequency</strong>, the parachain for decentralized social, 
              to enable a scalable and cost-effective on-chain social graph. This provides the technical 
              backbone for our unique Proof-of-Personhood model.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-12">
            <div className="flex items-center gap-8">
              <img src={polkadotLogo} alt="Polkadot" className="h-16 md:h-20"/>
              <div className="text-4xl text-gray-300">+</div>
              <img src={frequencyLogo} alt="Frequency" className="h-16 md:h-20"/>
            </div>
          </div>
        </div>
      </section>

      {/* Novelty Section */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Beyond Algorithms: Human Interaction as Sybil Resistance
            </h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto">
              In the age of AI, robust Proof-of-Personhood is essential. Our method is rooted in what makes us human: trust. 
              By enabling users to vouch for people they know in real life—a digital form of 'noaberschap'—we create an 
              organic, bottom-up, and fraud-resistant network.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Every connection made is an attestation that strengthens the entire ecosystem.
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-white"/>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Real Human Connections</h4>
                    <p className="text-gray-600">Users vouch for people they know in real life, creating authentic trust networks.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-white"/>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Sybil Resistance</h4>
                    <p className="text-gray-600">Organic, bottom-up fraud resistance through human verification.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                    <Network className="w-6 h-6 text-white"/>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Network Effect</h4>
                    <p className="text-gray-600">Each attestation strengthens both individual profiles and the entire network.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              {/* Enhanced Attestation Infographic */}
              <div className="bg-white rounded-lg p-4 shadow-lg">
                <img 
                  src={attestationInfographic} 
                  alt="Human Attestation Network for Proof-of-Personhood" 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GIVO Section */}
      <section className="section-padding bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-6">
                <img src={givoLogo} alt="GIVO" className="h-12 mb-4"/>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Our Vision in Action
                </h2>
              </div>
              
              <p className="text-xl text-gray-700 mb-6">
                GIVO is the living proof of our technology. It is more than an app; it's an ecosystem 
                that makes community-power visible, measurable, and accessible.
              </p>
              
              <p className="text-lg text-gray-600 mb-8">
                It connects volunteering, mutual aid, and a local exchange economy, all built on our 
                foundational trust layer. This is where our Proof-of-Personhood technology comes to 
                life to generate immediate, real-world social value.
              </p>
              
              <div className="flex items-center gap-4">
                <Heart className="w-6 h-6 text-accent"/>
                <span className="text-gray-600">Making community power visible and accessible</span>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative mx-auto w-64 md:w-80">
                <img 
                  src={givoScreen} 
                  alt="GIVO App Interface" 
                  className="w-full rounded-3xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Meet the Pioneers
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Bob */}
            <Card className="hover-lift">
              <CardContent className="p-8 text-center">
                <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-6">
                  <img src={bobPhoto} alt="Bob" className="w-full h-full object-cover"/>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Bob</h3>
                <h4 className="text-lg font-semibold text-accent mb-4">Strategy / Chief Media</h4>
                <p className="text-gray-600">
                  Experienced content strategist.
                </p>
              </CardContent>
            </Card>
            
            {/* Michiel */}
            <Card className="hover-lift">
              <CardContent className="p-8 text-center">
                <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-6">
                  <img src={michielPhoto} alt="Michiel" className="w-full h-full object-cover"/>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Michiel</h3>
                <h4 className="text-lg font-semibold text-accent mb-4">Strategy / Chief Vision</h4>
                <p className="text-gray-600">
                  Skin-in-the-game idealist and WEB3 believer.
                </p>
              </CardContent>
            </Card>
            
            {/* Armijn */}
            <Card className="hover-lift">
              <CardContent className="p-8 text-center">
                <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-6">
                  <img src={armijnPhoto} alt="Armijn" className="w-full h-full object-cover"/>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Armijn</h3>
                <h4 className="text-lg font-semibold text-accent mb-4">Strategy / Chief Outreach & Collaboration</h4>
                <p className="text-gray-600">
                  Social entrepreneur and people connector.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Join Us in Building the Internet of Trust
            </h2>
            <p className="text-xl text-gray-700">
              We are seeking strategic partners and investors who share our vision. If you believe in a Web3 
              future built on authentic human value and want to support an experienced team with a unique 
              technological approach, we want to talk to you. Contact us to receive our whitepaper and schedule a meeting.
            </p>
          </div>
          
          <Card className="max-w-2xl mx-auto">
            <CardContent className="p-8">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                    <Input placeholder="Your name" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Organization/Affiliation</label>
                    <Input placeholder="Your organization" />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <Input type="email" placeholder="your.email@example.com" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <Textarea 
                    placeholder="Tell us about your interest in Socialtec..." 
                    rows={4}
                  />
                </div>
                
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  Submit
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="mb-6">
            <img src={socialtecIcon} alt="Socialtec" className="h-8 mx-auto mb-4 opacity-80"/>
          </div>
          <p className="text-gray-400">
            © 2025 Socialtec. Building the Web3 trust infrastructure for the next social paradigm.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App

