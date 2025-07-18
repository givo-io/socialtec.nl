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
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background with trust graph */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{ backgroundImage: `url(${trustGraphHero})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-white/90 via-white/80 to-white/70" />
        
        <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
          <div className="mb-8">
            <img src={socialtecLogo} alt="Socialtec" className="h-16 mx-auto mb-4 logo-black"/>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Trust is the Ultimate<br/>
            <span className="gradient-text">Proof-of-Personhood</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-4xl mx-auto leading-relaxed">
            Socialtec builds the Web3 trust infrastructure for the next social paradigm. We are the first to leverage <strong>real human connections</strong> as a foundation for a Sybil-resistant network, fostering a better society in the process.
          </p>
          
          <button className="bg-givo-gold hover:bg-givo-gold/90 text-gray-900 font-semibold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
            Get in Touch
          </button>
          
          <div className="mt-12 flex items-center justify-center space-x-4 text-gray-600">
            <span className="text-sm">Powered by</span>
            <img src={polkadotLogo} alt="Polkadot" className="h-8"/>
          </div>
        </div>
      </section>

      {/* Value Pioneers Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-6">
            Value Pioneers Since 2019
          </h2>
          <p className="text-xl text-gray-700 text-center mb-16 max-w-4xl mx-auto">
            We are not new to this. Our journey into Web3 began with a win at the world's largest blockchain hackathon and has been driven by passion and our own capital ever since. We are 'skin-in-the-game' builders, dedicated to creating technology that puts human value first.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-xl bg-gray-50 border border-gray-200">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Trophy className="w-8 h-8 text-pink-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">2019</h3>
              <h4 className="text-lg font-semibold text-pink-600 mb-4">Odyssey Hackathon Winner</h4>
              <p className="text-gray-600">Recognized for our vision in the world's largest blockchain and AI hackathon.</p>
            </div>
            
            <div className="text-center p-8 rounded-xl bg-gray-50 border border-gray-200">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <FlaskConical className="w-8 h-8 text-pink-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">2020-2024</h3>
              <h4 className="text-lg font-semibold text-pink-600 mb-4">Self-Funded R&D</h4>
              <p className="text-gray-600">Four years of dedicated, self-funded development and real-world testing of multiple applications.</p>
            </div>
            
            <div className="text-center p-8 rounded-xl bg-gray-50 border border-gray-200">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Rocket className="w-8 h-8 text-pink-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">2025</h3>
              <h4 className="text-lg font-semibold text-pink-600 mb-4">GIVO Launch</h4>
              <p className="text-gray-600">The launch of our flagship product, bringing our vision of a trust-based economy to life.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Foundation Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-6">
            Building on Polkadot: A Decentralized Social Fabric
          </h2>
          <p className="text-xl text-gray-700 text-center mb-16 max-w-4xl mx-auto">
            We believe the future of social applications is decentralized. That's why we build on Polkadot. We specifically leverage <strong>Frequency</strong>, the parachain for decentralized social, to enable a scalable and cost-effective on-chain social graph. This provides the technical backbone for our unique Proof-of-Personhood model.
          </p>
          
          <div className="flex items-center justify-center space-x-8">
            <img src={polkadotLogo} alt="Polkadot" className="h-16 opacity-80 hover:opacity-100 transition-opacity"/>
            <span className="text-4xl text-gray-400">+</span>
            <img src={frequencyLogo} alt="Frequency" className="h-16 opacity-80 hover:opacity-100 transition-opacity"/>
          </div>
        </div>
      </section>

      {/* Novelty Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-6">
            Beyond Algorithms: Human Interaction as Sybil Resistance
          </h2>
          <p className="text-xl text-gray-700 text-center mb-12 max-w-4xl mx-auto">
            In the age of AI, robust Proof-of-Personhood is essential. Our method is rooted in what makes us human: trust. By enabling users to vouch for people they know in real life—a digital form of 'noaberschap'—we create an organic, bottom-up, and fraud-resistant network.
          </p>
          
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              Every connection made is an attestation that strengthens the entire ecosystem.
            </h3>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-pink-600" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">Real Human Connections</h4>
                  <p className="text-gray-600">Users vouch for people they know in real life, creating authentic trust networks.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-pink-600" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">Sybil Resistance</h4>
                  <p className="text-gray-600">Organic, bottom-up fraud resistance through human verification.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Network className="w-6 h-6 text-pink-600" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">Network Effect</h4>
                  <p className="text-gray-600">Each attestation strengthens both individual profiles and the entire network.</p>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center">
              <img 
                src={attestationInfographic} 
                alt="Human Attestation Network Infographic" 
                className="max-w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* GIVO Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-8">
                <img src={givoLogo} alt="GIVO" className="h-16 mb-4"/>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Our Vision in Action
                </h2>
              </div>
              
              <p className="text-xl text-gray-700 mb-8">
                GIVO is the living proof of our technology. It is more than an app; it's an ecosystem that makes community-power visible, measurable, and accessible.
              </p>
              
              <p className="text-lg text-gray-600 mb-8">
                It connects volunteering, mutual aid, and a local exchange economy, all built on our foundational trust layer. This is where our Proof-of-Personhood technology comes to life to generate immediate, real-world social value.
              </p>
              
              <div className="flex items-center space-x-2 text-pink-600">
                <Heart className="w-5 h-5" />
                <span className="font-medium">Making community power visible and accessible</span>
              </div>
            </div>
            
            <div className="flex justify-center">
              <div className="relative">
                <img 
                  src={givoScreen} 
                  alt="GIVO App Screenshot" 
                  className="max-w-sm w-full h-auto rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16">
            Meet the Pioneers
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-xl bg-gray-50 border border-gray-200">
              <img 
                src={bobPhoto} 
                alt="Bob" 
                className="w-32 h-32 rounded-full mx-auto mb-6 object-cover"
              />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Bob</h3>
              <h4 className="text-lg font-semibold text-pink-600 mb-4">Strategy / Chief Media</h4>
              <p className="text-gray-600">Experienced content strategist.</p>
            </div>
            
            <div className="text-center p-8 rounded-xl bg-gray-50 border border-gray-200">
              <img 
                src={michielPhoto} 
                alt="Michiel" 
                className="w-32 h-32 rounded-full mx-auto mb-6 object-cover"
              />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Michiel</h3>
              <h4 className="text-lg font-semibold text-pink-600 mb-4">Strategy / Chief Vision</h4>
              <p className="text-gray-600">Skin-in-the-game idealist and WEB3 believer.</p>
            </div>
            
            <div className="text-center p-8 rounded-xl bg-gray-50 border border-gray-200">
              <img 
                src={armijnPhoto} 
                alt="Armijn" 
                className="w-32 h-32 rounded-full mx-auto mb-6 object-cover"
              />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Armijn</h3>
              <h4 className="text-lg font-semibold text-pink-600 mb-4">Strategy / Chief Outreach & Collaboration</h4>
              <p className="text-gray-600">Social entrepreneur and people connector.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-6">
            Join Us in Building the Internet of Trust
          </h2>
          <p className="text-xl text-gray-700 text-center mb-12 max-w-3xl mx-auto">
            We are seeking strategic partners and investors who share our vision. If you believe in a Web3 future built on authentic human value and want to support an experienced team with a unique technological approach, we want to talk to you. Contact us to receive our whitepaper and schedule a meeting.
          </p>
          
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Your name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="organization" className="block text-sm font-medium text-gray-700 mb-2">
                    Organization/Affiliation
                  </label>
                  <input
                    type="text"
                    id="organization"
                    placeholder="Your organization"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="your.email@example.com"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={6}
                  placeholder="Tell us about your interest in Socialtec..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent resize-none"
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-givo-gold hover:bg-givo-gold/90 text-gray-900 font-semibold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-[1.02] shadow-lg"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <img src={socialtecIcon} alt="Socialtec" className="h-12 mx-auto mb-6 opacity-80"/>
          <p className="text-gray-400">
            © 2025 Socialtec. Building the Web3 trust infrastructure for the next social paradigm.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App

