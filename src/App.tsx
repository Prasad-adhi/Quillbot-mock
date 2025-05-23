import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { TextEditor } from './components/TextEditor'
import { InfoSection } from './components/InfoSection'
import { WhyQuillbot } from './components/WhyQuillbot'
import { HowItWorks } from './components/HowItWorks'
import { ComparePlans } from './components/ComparePlans'
import { CardCarousel } from './components/CardCarousel'
import { Navbar } from './components/Navbar'
import { Pricing } from './pages/Pricing'
import { Payment } from './pages/Payment'
import { Contact } from './pages/Contact'
import { CreditProvider } from './context/CreditContext'
import { DashboardUpload } from './pages/Dashboard'
import {FeaturedAndFAQ} from './components/FAQs'

function App() {
  return (
    <CreditProvider>
      <Router>
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
          <Navbar />
          <Routes>
            <Route path="/" element={
              <>
                <section className="h-screen flex flex-col">
                  <div className="container mx-auto px-4 py-8 flex-1 flex flex-col">
                    <header className="text-center mb-12">
                      <h1 className="text-4xl font-bold text-gray-800 mb-2">AI Text Processor</h1>
                      <p className="text-gray-600">Transform your text into a more human-like version</p>
                    </header>
                    
                    <div className="flex-1 flex items-center">
                      <TextEditor />
                    </div>
                  </div>
                </section>
                <InfoSection />
                <WhyQuillbot />
                <HowItWorks />
                <ComparePlans />
                <CardCarousel />
                <FeaturedAndFAQ />
              </>
            } />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/dashboard" element={<DashboardUpload />} />
          </Routes>
        </div>
      </Router>
    </CreditProvider>
  )
}

export default App