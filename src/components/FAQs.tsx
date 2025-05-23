import { useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/solid';

interface FAQ {
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    question: 'What is QuillBot’s Humanize feature?',
    answer: 'It rewrites AI-generated text to sound more natural and human-like.',
  },
  {
    question: 'Can I use this for academic writing?',
    answer: 'Yes, the tool includes modes like Formal and Academic for scholarly tone.',
  },
  {
    question: 'Is there a word limit?',
    answer: 'The free version has a limit, while premium allows more flexibility.',
  },
];

const companyLogos = [
  "https://assets.quillbot.com/pageq/QBWebapp/featured-in-desktop.png"
];

export function FeaturedAndFAQ(): JSX.Element {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-12 px-4">
      {/* Featured In */}
      <div className="text-center mb-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Featured in</h2>
        <div className="flex flex-wrap justify-center gap-8 items-center">
          {companyLogos.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Logo ${index}`}
              className="h-10 grayscale hover:grayscale-0 transition"
            />
          ))}
        </div>
      </div>

      {/* FAQ Section */}
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border rounded-lg">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center p-4 text-left text-gray-800 font-medium hover:bg-gray-50"
              >
                {faq.question}
                <ChevronDownIcon
                  className={`w-5 h-5 transform transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-4 pb-4 text-gray-600 text-sm">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
