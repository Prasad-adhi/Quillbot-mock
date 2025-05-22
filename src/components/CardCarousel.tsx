import { useState } from 'react';

const colors = [
  'bg-red-100',
  'bg-green-100',
  'bg-purple-100',
  'bg-yellow-100',
  'bg-pink-100',
  'bg-indigo-100',
  'bg-orange-100',
];

const cards = [
  {
    id: 1,
    image: 'https://assets.quillbot.com/pageq/QBWebapp/pphr-widget.png',
    title: 'Clarity',
    text: 'Make your writing easier to understand.',
    color: colors[0],
  },
  {
    id: 2,
    image: 'https://assets.quillbot.com/pageq/QBWebapp/aidr-widget.png',
    title: 'Tone',
    text: 'Adjust your tone to suit your audience.',
    color: colors[1],
  },
  {
    id: 3,
    image: '/images/card3.png',
    title: 'Creativity',
    text: 'Enhance originality in AI-generated content.',
    color: colors[2],
  },
  {
    id: 4,
    image: '/images/card4.png',
    title: 'Humanize',
    text: 'Make writing feel authentic and human.',
    color: colors[3],
  },
  {
    id: 5,
    image: '/images/card5.png',
    title: 'Expand',
    text: 'Add detail and depth to your content.',
    color: colors[4],
  },
  {
    id: 6,
    image: '/images/card6.png',
    title: 'Shorten',
    text: 'Summarize or reduce verbosity.',
    color: colors[5],
  },
  {
    id: 7,
    image: '/images/card7.png',
    title: 'Custom',
    text: 'Rewrite with your own instructions.',
    color: colors[6],
  },
];

export function CardCarousel() {
  const [startIndex, setStartIndex] = useState(0);
  const cardsPerView = 3;

  const next = () => {
    if (startIndex + 1 <= cards.length - cardsPerView) {
      setStartIndex(startIndex + 1);
    }
  };

  const back = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  const getVisiblePageIndex = () => {
    return Math.floor(startIndex / 1);
  };

  return (
    <section className="bg-white py-12 px-4">
      <div className="max-w-6xl mx-auto text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Explore Our Capabilities</h2>
        <p className="text-gray-600">Scroll through our rewriting modes to see how you can shape AI output your way.</p>
      </div>

      <div className="relative max-w-6xl mx-auto overflow-hidden">
        <div 
          className="flex transition-transform duration-500 ease-in-out" 
          style={{ transform: `translateX(-${(startIndex * (100 / cardsPerView))}%)` }}
        >
          {cards.map((card) => (
            <div key={card.id} className="min-w-[33.3333%] px-4 box-border">
              <div className={`${card.color} p-6 rounded-lg shadow text-left h-full flex flex-col items-start`}>
                <img src={card.image} alt={card.title} className="w-full h-40 object-cover rounded mb-4" />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{card.title}</h3>
                <p className="text-gray-600 text-sm">{card.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Controls */}
      <div className="flex justify-between items-center max-w-6xl mx-auto mt-6 px-4">
        <button
          onClick={back}
          disabled={startIndex === 0}
          className="px-4 py-2 bg-blue-600 text-white rounded disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Back
        </button>

        {/* Page Indicators */}
        <div className="flex gap-2">
          {Array.from({ length: 5 }).map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full ${index === getVisiblePageIndex() ? 'bg-blue-600' : 'bg-gray-300'}`}
            ></div>
          ))}
        </div>

        <button
          onClick={next}
          disabled={startIndex >= cards.length - cardsPerView}
          className="px-4 py-2 bg-blue-600 text-white rounded disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Next
        </button>
      </div>
    </section>
  );
}