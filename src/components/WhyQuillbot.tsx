export function WhyQuillbot() {
  return (
    <section className="bg-white text-center mb-12 px-4">
      <header className="mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">
          Why use QuillBot's Humanize AI Tool
        </h1>
        <p className="text-gray-600">
          Our Humanizer was built to effortlessly humanize AI texts, saving you time.
        </p>
      </header>

      <div className="flex flex-col md:flex-row items-center justify-between max-w-5xl mx-auto gap-8">
        {/* Left: Text Content */}
        <div className="md:w-1/2 text-left">
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">
            Make AI text sound natural
          </h2>
          <p className="text-gray-600">
            Our tool helps refine AI-generated content by adding natural flow, personality,
            and clarity—ensuring your writing feels more human and engaging.
          </p>
        </div>

        {/* Right: Image */}
        <div className="md:w-1/2">
          <img
            src="https://assets.quillbot.com/pageq/QBWebapp/humanize-output-light-en.png"
            alt="Illustration of humanized AI text"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>
      </div>


        <div className="flex flex-col md:flex-row items-center justify-between max-w-5xl mx-auto gap-8 mt-12">
            {/* Left: Image */}
            <div className="md:w-1/2">
                <img
                src="https://assets.quillbot.com/pageq/QBWebapp/gc-writing-tools.svg"
                alt="Illustration of refined AI writing"
                className="w-full h-auto rounded-lg shadow-md"
                />
            </div>

            {/* Right: Text Content */}
            <div className="md:w-1/2 text-left">
                <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                Refine and Personalize Effortlessly
                </h2>
                <p className="text-gray-600">
                QuillBot makes it easy to tailor AI-generated text to match your unique tone,
                audience, and message—all with just a few clicks.
                </p>
            </div>
        </div>
    </section>
  )
}