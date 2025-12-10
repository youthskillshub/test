import { Link } from 'react-router-dom';
import { TrendingUp, Heart, Users, Building2, ArrowRight } from 'lucide-react';

const impactStats = [
  { number: '150+', label: 'Youth Trained', icon: Users, color: 'bg-primary-100' },
  { number: '45+', label: 'Businesses Started', icon: Building2, color: 'bg-secondary-100' },
  { number: '85%', label: 'Employment Rate', icon: TrendingUp, color: 'bg-primary-100' },
  { number: '12', label: 'Counties Reached', icon: Heart, color: 'bg-secondary-100' },
];

const successStories = [
  {
    name: 'Margaret Kiprotich',
    title: 'Digital Marketer at Tech Startup',
    story: 'After YouthHub\'s digital skills program, I landed a job at a leading tech company. My life has completely transformed!',
    image: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    name: 'Peter Kipchoge',
    title: 'Founder, EcoFresh Solutions',
    story: 'The entrepreneurship program gave me the confidence and skills to start my sustainable agricultural business. We\'re creating jobs in our community.',
    image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    name: 'Amina Hassan',
    title: 'Community Leader & Entrepreneur',
    story: 'Leadership training changed how I see myself. Now I\'m leading women entrepreneurs in my village and creating lasting change.',
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
];

const impactAreas = [
  {
    title: 'Skills Training',
    description: 'Providing practical digital and entrepreneurship skills through intensive programs.',
    value: '150+ Youth',
  },
  {
    title: 'Job Creation',
    description: 'Connecting graduates with employment opportunities across Kenya.',
    value: '60+ Jobs',
  },
  {
    title: 'Business Support',
    description: 'Mentoring and supporting youth-led business startups.',
    value: '45+ Businesses',
  },
];

export default function Impact() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-secondary-900 to-primary-700 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Impact</h1>
          <p className="text-lg text-gray-100 max-w-2xl">
            Real stories. Real change. Real impact across Kenya.
          </p>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {impactStats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div key={stat.label} className={`${stat.color} p-8 rounded-lg text-center`}>
                  <Icon className="h-12 w-12 text-primary-600 mx-auto mb-4" />
                  <h3 className="text-4xl font-bold text-gray-900 mb-2">{stat.number}</h3>
                  <p className="text-gray-700 font-semibold">{stat.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Impact Areas */}
      <section className="bg-gray-50 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Where We Make a Difference</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {impactAreas.map((area) => (
              <div key={area.title} className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{area.title}</h3>
                <p className="text-gray-600 mb-4">{area.description}</p>
                <p className="text-primary-600 font-bold text-lg">{area.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Success Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {successStories.map((story) => (
              <div key={story.name} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img
                  src={story.image}
                  alt={story.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{story.name}</h3>
                  <p className="text-primary-600 font-semibold mb-3 text-sm">{story.title}</p>
                  <p className="text-gray-600 italic">"{story.story}"</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Timeline */}
      <section className="bg-gradient-to-br from-secondary-50 to-primary-50 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Growth Trajectory</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <p className="text-gray-600 mb-2">2020</p>
              <p className="text-2xl font-bold text-primary-600 mb-2">30</p>
              <p className="text-gray-700">Youth Trained</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md text-center border-2 border-primary-600">
              <p className="text-gray-600 mb-2">2022</p>
              <p className="text-2xl font-bold text-primary-600 mb-2">100+</p>
              <p className="text-gray-700">Youth Trained</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <p className="text-gray-600 mb-2">2024</p>
              <p className="text-2xl font-bold text-primary-600 mb-2">150+</p>
              <p className="text-gray-700">Youth Trained</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary-600 text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Help Us Expand Our Impact</h2>
          <p className="text-lg text-primary-100 mb-8 max-w-2xl mx-auto">
            Your support helps us reach more youth and create life-changing opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/donate"
              className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center gap-2"
            >
              Support Our Work <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              to="/programs"
              className="bg-secondary-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-secondary-800 transition-colors"
            >
              Join a Program
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
