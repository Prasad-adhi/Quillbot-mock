import React from 'react'

export function InfoSection() {
  return (
    <section className="min-h-screen bg-white py-20">
      <div className="container mx-auto px-4">
        <section className="max-w-4xl mx-auto text-center mb-32">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Free Humanize AI Tool</h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Our free AI Humanizer transforms formulaic, robotic drafts into authentic, engaging language with minimal manual edits needed. It humanizes AI-generated text from ChatGPT, Gemini, Claude, DeepSeek, and more, instantly refining text with a robotic or formulaic tone into writing that sounds genuinely human while preserving your original meaning.
          </p>
        </section>

        <section className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-800 text-center mb-12">How It Works</h2>
          <div className="flex justify-between gap-8">
            <div className="flex-1 text-center">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-6">1</div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Paste or type your text</h3>
              <p className="text-gray-600">
                Start by either typing or pasting your text into the input box on the left or upload the document that you would like to humanize.
              </p>
            </div>
            <div className="flex-1 text-center">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-6">2</div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Click "Humanize"</h3>
              <p className="text-gray-600">
                Click the "Humanize" button located near the bottom of the box, and our AI will instantly humanize your text.
              </p>
            </div>
            <div className="flex-1 text-center">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-6">3</div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Adjust your text</h3>
              <p className="text-gray-600">
                Quickly customize the humanized text to match your style. When the text looks just right, easily copy it with the "Copy All" button in the bottom right corner.
              </p>
            </div>
          </div>
        </section>
      </div>
    </section>
  )
}