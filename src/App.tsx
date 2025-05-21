import React from 'react'
import { TextEditor } from './components/TextEditor'
import { InfoSection } from './components/InfoSection'
import { WhyQuillbot } from './components/WhyQuillbot'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
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
    </div>
  )
}

export default App