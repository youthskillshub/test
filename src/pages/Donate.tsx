import { useState } from 'react';
import { Heart, Users, Leaf, ArrowRight } from 'lucide-react';

const donationAmounts = [
  { amount: 1000, label: 'KES 1,000', impact: 'Provides digital skills training for 1 youth' },
  { amount: 2500, label: 'KES 2,500', impact: 'Supports a full program for 1 participant' },
  { amount: 5000, label: 'KES 5,000', impact: 'Mentors 2 youth through entrepreneurship' },
  { amount: 10000, label: 'KES 10,000', impact: 'Launches a complete program cohort' },
];

const otherWaysToSupport = [
  {
    icon: Users,
    title: 'Volunteer',
    description: 'Share your skills and expertise by mentoring or teaching our participants.',
  },
  {
    icon: Leaf,
    title: 'Partner',
    description: 'Collaborate with us to expand our reach and impact across Kenya.',
  },
  {
    icon: Heart,
    title: 'Sponsor',
    description: 'Sponsor a program, event, or an individual youth\'s training journey.',
  },
];

export default function Donate() {
  const [selectedAmount, setSelectedAmount] = useState(2500);
  const [customAmount, setCustomAmount] = useState('');
  const [frequency, setFrequency] = useState<'once' | 'monthly'>('once');
  const [donorInfo, setDonorInfo] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const handleDonorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDonorInfo({
      ...donorInfo,
      [e.target.name]: e.target.value,
    });
  };

  const finalAmount = customAmount ? parseInt(customAmount) : selectedAmount;

  const handleDonate = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Thank you for your generous donation of KES ${finalAmount}! Payment integration would be processed here.`);
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-secondary-900 to-primary-700 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Support Our Mission</h1>
          <p className="text-lg text-gray-100 max-w-2xl">
            Your donation empowers Kenyan youth with skills, opportunities, and hope for a brighter future.
          </p>
        </div>
      </section>

      {/* Impact of Donations */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Your Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {donationAmounts.map((item) => (
              <div
                key={item.amount}
                className="bg-white p-6 rounded-lg shadow-md border-2 border-gray-200 hover:border-primary-600 transition-colors cursor-pointer"
                onClick={() => setSelectedAmount(item.amount)}
              >
                <h3 className="text-2xl font-bold text-primary-600 mb-2">{item.label}</h3>
                <p className="text-gray-600 text-sm">{item.impact}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Donation Form */}
      <section className="bg-gray-50 py-16 md:py-20">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Make Your Donation</h2>

          <form onSubmit={handleDonate} className="bg-white p-8 rounded-lg shadow-md">
            {/* Amount Selection */}
            <div className="mb-6">
              <label className="block text-sm font-semibold text-gray-900 mb-3">
                Select Amount
              </label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-4">
                {donationAmounts.map((item) => (
                  <button
                    key={item.amount}
                    type="button"
                    onClick={() => {
                      setSelectedAmount(item.amount);
                      setCustomAmount('');
                    }}
                    className={`py-2 px-3 rounded-lg font-semibold transition-colors ${
                      selectedAmount === item.amount && !customAmount
                        ? 'bg-primary-600 text-white'
                        : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>

              <label className="block text-sm font-semibold text-gray-900 mb-2">
                Or enter custom amount
              </label>
              <input
                type="number"
                value={customAmount}
                onChange={(e) => setCustomAmount(e.target.value)}
                placeholder="KES"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600"
              />
            </div>

            {/* Frequency */}
            <div className="mb-6">
              <label className="block text-sm font-semibold text-gray-900 mb-3">
                Donation Type
              </label>
              <div className="flex gap-4">
                <label className="flex items-center cursor-pointer">
                  <input
                    type="radio"
                    name="frequency"
                    value="once"
                    checked={frequency === 'once'}
                    onChange={(e) => setFrequency(e.target.value as 'once')}
                    className="mr-2"
                  />
                  <span className="text-gray-900">One-time Donation</span>
                </label>
                <label className="flex items-center cursor-pointer">
                  <input
                    type="radio"
                    name="frequency"
                    value="monthly"
                    checked={frequency === 'monthly'}
                    onChange={(e) => setFrequency(e.target.value as 'monthly')}
                    className="mr-2"
                  />
                  <span className="text-gray-900">Monthly Giving</span>
                </label>
              </div>
            </div>

            {/* Donor Info */}
            <div className="mb-6 space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={donorInfo.name}
                  onChange={handleDonorChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={donorInfo.email}
                  onChange={handleDonorChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Phone (optional)
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={donorInfo.phone}
                  onChange={handleDonorChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600"
                />
              </div>
            </div>

            {/* Summary */}
            <div className="bg-primary-50 p-4 rounded-lg mb-6">
              <p className="text-gray-700 text-sm mb-2">
                <strong>Amount:</strong> KES {finalAmount.toLocaleString()}
              </p>
              <p className="text-gray-700 text-sm">
                <strong>Type:</strong> {frequency === 'once' ? 'One-time' : 'Monthly'} Donation
              </p>
            </div>

            {/* Payment Methods */}
            <div className="mb-6">
              <p className="text-sm text-gray-600 mb-3">
                We accept donations via M-Pesa, PayPal, and Bank Transfer. Click proceed to complete your donation.
              </p>
            </div>

            <button
              type="submit"
              className="w-full bg-primary-600 text-white py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors flex items-center justify-center gap-2"
            >
              Proceed to Payment <ArrowRight className="h-5 w-5" />
            </button>

            {/* Tax Info */}
            <p className="text-center text-xs text-gray-600 mt-4">
              YouthHub is a registered non-profit. Your donation is tax-deductible. Receipt will be sent to your email.
            </p>
          </form>
        </div>
      </section>

      {/* Other Ways to Support */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Other Ways to Support</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {otherWaysToSupport.map((way) => {
              const Icon = way.icon;
              return (
                <div key={way.title} className="bg-white p-8 rounded-lg shadow-md text-center">
                  <Icon className="h-12 w-12 text-primary-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{way.title}</h3>
                  <p className="text-gray-600 mb-4">{way.description}</p>
                  <a href="#" className="text-primary-600 font-semibold hover:text-primary-700">
                    Learn More →
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="bg-secondary-700 text-white py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xl italic mb-4">
            "Your support transformed my life. Thanks to donors like you, I now have a job I love and can contribute to my family's wellbeing."
          </p>
          <p className="text-lg font-semibold">— Sarah, Digital Skills Graduate</p>
        </div>
      </section>
    </div>
  );
}
