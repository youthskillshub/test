import { Link } from 'react-router-dom';
import { ArrowRight, Target, Users, Lightbulb, TrendingUp, Calendar, Heart } from 'lucide-react';

const programs = [
  {
    title: 'Digital Skills Training',
    description: 'Master in-demand digital skills including web development, graphic design, and digital marketing.',
    icon: Lightbulb,
    duration: '12 weeks',
    color: 'bg-primary-100',
  },
  {
    title: 'Entrepreneurship Program',
    description: 'Learn to start and grow your own business with mentorship from successful entrepreneurs.',
    icon: TrendingUp,
    duration: '16 weeks',
    color: 'bg-secondary-100',
  },
  {
    title: 'Leadership Development',
    description: 'Build confidence, communication skills, and leadership abilities to drive community change.',
    icon: Users,
    duration: '8 weeks',
    color: 'bg-primary-100',
  },
];

const upcomingEvents = [
  {
    title: 'Tech Career Fair 2024',
    date: 'March 15, 2024',
    location: 'Nairobi Innovation Hub',
    description: 'Connect with leading tech companies and explore career opportunities.',
  },
  {
    title: 'Entrepreneurship Workshop',
    date: 'March 22, 2024',
    location: 'YouthHub Center',
    description: 'Learn the fundamentals of starting your own business from industry experts.',
  },
  {
    title: 'Community Impact Day',
    date: 'April 5, 2024',
    location: 'Multiple Locations',
    description: 'Join us in giving back to our communities through various service projects.',
  },
];

const impactStats = [
  { number: '150+', label: 'Youth Trained' },
  { number: '85%', label: 'Employment Rate' },
  { number: '45+', label: 'Businesses Started' },
  { number: '12', label: 'Counties Reached' },
];

const testimonials = [
  {
    name: 'Sarah Wanjiku',
    role: 'Digital Skills Graduate',
    quote: 'YouthHub transformed my life. I went from unemployment to landing my dream job in tech!',
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    name: 'James Ochieng',
    role: 'Entrepreneur',
    quote: 'The entrepreneurship program gave me the tools and confidence to start my own business.',
    image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
];

export default function Home() {
  return (
    <div>
      {/* Hero Banner Section */}
      <section className="relative bg-gradient-to-r from-primary-600 to-secondary-700 text-white py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Empowering Kenyan Youth Through Skills & Entrepreneurship
            </h1>
            <p className="text-xl md:text-2xl text-gray-100 mb-8">
              Join our transformative programs and unlock your potential for a brighter future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/programs"
                className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center gap-2"
              >
                Explore Programs <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                to="/donate"
                className="bg-secondary-900 text-white px-8 py-4 rounded-lg font-semibold hover:bg-secondary-800 transition-colors flex items-center justify-center gap-2"
              >
                Support Our Mission <Heart className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Target className="h-16 w-16 text-primary-600 mx-auto mb-6" />
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              We empower Kenyan youth with practical skills, entrepreneurship training, and leadership
              development to create sustainable livelihoods and drive positive change in their communities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-primary-50 p-8 rounded-lg text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Vision</h3>
              <p className="text-gray-700">
                A Kenya where every young person has the skills and opportunities to thrive.
              </p>
            </div>
            <div className="bg-secondary-50 p-8 rounded-lg text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Values</h3>
              <p className="text-gray-700">
                Excellence, innovation, integrity, and sustainable community impact.
              </p>
            </div>
            <div className="bg-primary-50 p-8 rounded-lg text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Approach</h3>
              <p className="text-gray-700">
                Practical training, mentorship, and ongoing support for lasting success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Join Our Programs Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Programs</h2>
            <p className="text-xl text-gray-600">Choose your path to success</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {programs.map((program) => {
              const Icon = program.icon;
              return (
                <div
                  key={program.title}
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
                >
                  <div className={`${program.color} p-8`}>
                    <Icon className="h-12 w-12 text-primary-600 mb-4" />
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{program.title}</h3>
                    <p className="text-sm text-gray-700 font-semibold">{program.duration}</p>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-600 mb-6">{program.description}</p>
                    <Link
                      to="/programs"
                      className="text-primary-600 font-semibold hover:text-primary-700 flex items-center gap-2"
                    >
                      Learn More <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/programs"
              className="inline-block bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
            >
              View All Programs
            </Link>
          </div>
        </div>
      </section>

      {/* Impact Statistics Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-secondary-900 to-primary-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">Our Impact</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {impactStats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-5xl font-bold mb-2">{stat.number}</p>
                <p className="text-lg text-gray-200">{stat.label}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/impact"
              className="inline-block bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              See Our Full Impact
            </Link>
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Calendar className="h-12 w-12 text-primary-600 mx-auto mb-4" />
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Upcoming Events</h2>
            <p className="text-xl text-gray-600">Join us at our next event</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {upcomingEvents.map((event) => (
              <div
                key={event.title}
                className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow"
              >
                <div className="text-primary-600 font-bold text-sm mb-2">{event.date}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{event.title}</h3>
                <p className="text-gray-600 text-sm mb-3">{event.location}</p>
                <p className="text-gray-700 mb-4">{event.description}</p>
                <Link
                  to="/events"
                  className="text-primary-600 font-semibold hover:text-primary-700 flex items-center gap-2"
                >
                  Learn More <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/events"
              className="inline-block bg-secondary-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-secondary-800 transition-colors"
            >
              View All Events
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">Success Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.name}
                className="bg-white rounded-lg shadow-md p-8"
              >
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-bold text-gray-900">{testimonial.name}</h3>
                    <p className="text-sm text-primary-600">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">"{testimonial.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Us / Donate CTA Section */}
      <section className="py-16 md:py-24 bg-primary-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Heart className="h-16 w-16 mx-auto mb-6" />
          <h2 className="text-4xl font-bold mb-6">Support Our Mission</h2>
          <p className="text-xl text-primary-100 mb-8">
            Your contribution helps us empower more youth with the skills and opportunities
            they need to build a better future.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/donate"
              className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Donate Now
            </Link>
            <Link
              to="/contact"
              className="bg-secondary-900 text-white px-8 py-4 rounded-lg font-semibold hover:bg-secondary-800 transition-colors"
            >
              Partner With Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
