import { useNavigate } from 'react-router-dom';

export function Pricing() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">
          Our Pricing Plans
        </h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Free Plan */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Free</h2>
            <p className="text-4xl font-bold mb-6">$0</p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Basic features
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Limited usage
              </li>
            </ul>
            <button 
              onClick={() => navigate('/')}
              className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
              Get Started
            </button>
          </div>

          {/* Pro Plan */}
          <div className="bg-white rounded-lg shadow-lg p-8 border-2 border-blue-500">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Pro</h2>
            <p className="text-4xl font-bold mb-6">$29</p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                All Free features
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Unlimited usage
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Priority support
              </li>
            </ul>
            <button 
              onClick={() => navigate('/payment')}
              className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
            >
              Subscribe Now
            </button>
          </div>

          {/* Enterprise Plan */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Enterprise</h2>
            <p className="text-4xl font-bold mb-6">Custom</p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                All Pro features
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Custom solutions
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Dedicated support
              </li>
            </ul>
            <button 
              onClick={() => navigate('/contact')}
              className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
              Contact Sales
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}