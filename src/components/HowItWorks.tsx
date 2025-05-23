export function HowItWorks() {
  return (
    <section className="bg-gray-100 py-12 px-4">
      <div className="max-w-6xl mx-auto text-center mb-10">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Why Our Humanizer Works
        </h2>
        <p className="text-gray-600">
          Built with advanced AI and language rules, our tool ensures your text is clear,
          natural, and ready for real-world communication.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {/* Point 1 */}
        <div className="flex flex-col items-center text-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-green-500 mb-3" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="11" stroke="currentColor" strokeWidth="2" fill="none" />
            <path d="M7 12l3 3 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <h3 className="text-xl font-semibold text-gray-800 mb-1">Natural Flow</h3>
          <p className="text-gray-600 text-sm">
            Ensures your writing sounds smooth and conversational.
          </p>
        </div>

        {/* Point 2 */}
        <div className="flex flex-col items-center text-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-yellow-500 mb-3" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="11" stroke="currentColor" strokeWidth="2" fill="none" />
            <path d="M7 12l3 3 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <h3 className="text-xl font-semibold text-gray-800 mb-1">Tone Matching</h3>
          <p className="text-gray-600 text-sm">
            Adjusts text to reflect the tone you want—professional or friendly.
          </p>
        </div>

        {/* Point 3 */}
        <div className="flex flex-col items-center text-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-red-500 mb-3" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="11" stroke="currentColor" strokeWidth="2" fill="none" />
            <path d="M7 12l3 3 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <h3 className="text-xl font-semibold text-gray-800 mb-1">Clarity Boost</h3>
          <p className="text-gray-600 text-sm">
            Removes unnecessary complexity to make ideas clearer.
          </p>
        </div>

        {/* Point 4 */}
        <div className="flex flex-col items-center text-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-blue-500 mb-3" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="11" stroke="currentColor" strokeWidth="2" fill="none" />
            <path d="M7 12l3 3 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <h3 className="text-xl font-semibold text-gray-800 mb-1">Consistency</h3>
          <p className="text-gray-600 text-sm">
            Maintains a consistent writing style across your document.
          </p>
        </div>
      </div>
    </section>
  );
}