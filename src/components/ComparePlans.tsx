import {
  CheckIcon,
  AcademicCapIcon,
  SparklesIcon,
  AdjustmentsHorizontalIcon,
  ArrowTrendingUpIcon,
  ArrowsPointingOutIcon,
  ArrowsPointingInIcon,
  UserIcon,
  PencilIcon,
} from '@heroicons/react/24/solid';
import { useNavigate } from 'react-router-dom';


export function ComparePlans() {
  const navigate = useNavigate();
  return (
    <section className="bg-white py-12 px-4">
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Compare Plans</h2>
        <p className="text-gray-600">
          Choose the plan that fits your needs. Both offer powerful rewriting, but Premium unlocks full creative control.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto items-stretch">
        {/* Free Column */}
        <div className="relative bg-blue-100 p-6 rounded-lg shadow-md flex flex-col justify-between overflow-visible">
            {/* Floating image on the left border */}
            <img
                src="https://assets.quillbot.com/pageq/QBWebapp/flying-quilly.png"
                alt="Decorative icon"
                className="absolute left-[-80px] top-60 w-48 h-48"
            />

            <h3 className="text-2xl font-semibold text-blue-900 mb-4">Free</h3>

            <div className="flex flex-col flex-grow justify-between">
                <ul className="space-y-4 mb-6">
                <li className="flex items-start gap-3">
                    <AdjustmentsHorizontalIcon className="w-6 h-6 text-blue-700" />
                    <div>
                    <h4 className="font-medium text-blue-800">Standard</h4>
                    <p className="text-blue-700 text-sm">Rewrites text with new vocabulary and word order</p>
                    </div>
                </li>
                <li className="flex items-start gap-3">
                    <CheckIcon className="w-6 h-6 text-blue-700" />
                    <div>
                    <h4 className="font-medium text-blue-800">Fluency</h4>
                    <p className="text-blue-700 text-sm">Improves the clarity and readability of text</p>
                    </div>
                </li>
                </ul>
                <div className="text-center">
                <button className="bg-blue-700 text-white px-6 py-2 rounded-lg hover:bg-blue-800 transition">
                    Use Free
                </button>
                <p className="text-sm text-blue-800 mt-2">No credit card required</p>
                </div>
            </div>
            </div>


        {/* Premium Column */}
        <div className="bg-blue-600 p-6 rounded-lg shadow-md text-white flex flex-col justify-between">
          <h3 className="text-2xl font-semibold mb-4">Premium</h3>
          <div className="flex flex-col flex-grow justify-between">
            <ul className="space-y-4 mb-6">
              <li className="flex items-start gap-3">
                <AcademicCapIcon className="w-6 h-6 text-white" />
                <div>
                  <h4 className="font-medium">Formal</h4>
                  <p className="text-sm">Rephrases text in a more sophisticated way</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckIcon className="w-6 h-6 text-white" />
                <div>
                  <h4 className="font-medium">Simple</h4>
                  <p className="text-sm">Presents text in a way that’s easy to understand</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <SparklesIcon className="w-6 h-6 text-white" />
                <div>
                  <h4 className="font-medium">Creative</h4>
                  <p className="text-sm">Rephrases text in an original and innovative way</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <AcademicCapIcon className="w-6 h-6 text-white" />
                <div>
                  <h4 className="font-medium">Academic</h4>
                  <p className="text-sm">Expresses text in a technical and scholarly way</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <ArrowsPointingOutIcon className="w-6 h-6 text-white" />
                <div>
                  <h4 className="font-medium">Expand</h4>
                  <p className="text-sm">Increases the length of text</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <ArrowsPointingInIcon className="w-6 h-6 text-white" />
                <div>
                  <h4 className="font-medium">Shorten</h4>
                  <p className="text-sm">Conveys meaning more concisely</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <UserIcon className="w-6 h-6 text-white" />
                <div>
                  <h4 className="font-medium">Humanize</h4>
                  <p className="text-sm">Rewrites text in a more human, authentic way</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <PencilIcon className="w-6 h-6 text-white" />
                <div>
                  <h4 className="font-medium">Custom</h4>
                  <p className="text-sm">Rewrites text to match your unique description</p>
                </div>
              </li>
            </ul>
            <div className="text-center">
              <button
              onClick={() => navigate('/pricing')} 
              className="bg-white text-blue-700 px-6 py-2 rounded-lg hover:bg-blue-100 transition">
                Upgrade to Premium
              </button>
              <p className="text-sm text-white mt-2">7-day money-back guarantee</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
