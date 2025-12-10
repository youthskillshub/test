import { Link } from 'react-router-dom';
import { Heart, Target, Users, Award, ArrowRight } from 'lucide-react';

const team = [
  {
    name: 'Dr. Grace Mwangi',
    role: 'Executive Director',
    bio: 'Former education consultant with 15 years of experience in youth development and skills training.',
    image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    name: 'John Kamau',
    role: 'Programs Director',
    bio: 'Tech entrepreneur turned educator, passionate about digital literacy and entrepreneurship.',
    image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    name: 'Amina Hassan',
    role: 'Community Outreach Lead',
    bio: 'Community organizer with deep roots in grassroots youth empowerment initiatives.',
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    name: 'Peter Omondi',
    role: 'Skills Training Coordinator',
    bio: 'Certified trainer specializing in vocational skills and hands-on learning methodologies.',
    image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
];

const partners = [
  'Kenya Ministry of Education',
  'Tech Hub Africa',
  'Global Youth Foundation',
  'Innovation Lab Kenya',
  'Green Future Initiative',
  'Skills Development Network',
];

const milestones = [
  {
    year: '2018',
    title: 'Foundation',
    description: 'YouthHub was founded with a vision to empower Kenyan youth through skills training.',
  },
  {
    year: '2019',
    title: 'First Programs',
    description: 'Launched our first digital skills and entrepreneurship programs with 30 participants.',
  },
  {
    year: '2020',
    title: 'Expansion',
    description: 'Expanded to 5 counties and introduced leadership development programs.',
  },
  {
    year: '2021',
    title: 'Impact Milestone',
    description: 'Reached 100+ youth trained with 80% employment rate among graduates.',
  },
  {
    year: '2022',
    title: 'Recognition',
    description: 'Awarded Best Youth Empowerment Organization by Kenya NGO Board.',
  },
  {
    year: '2023',
    title: 'National Reach',
    description: 'Programs now active in 12 counties across Kenya with 150+ youth trained.',
  },
];

export default function About() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-secondary-900 to-primary-700 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
          <p className="text-lg text-gray-100 max-w-2xl">
            Building a brighter future for Kenyan youth, one skill at a time.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  YouthHub was born from a simple yet powerful idea: every young person deserves access
                  to quality skills training and opportunities to build a sustainable livelihood.
                </p>
                <p>
                  Founded in 2018 by a group of educators and entrepreneurs, we saw the gap between
                  traditional education and the skills needed in today's job market. We set out to bridge
                  that gap through practical, hands-on training programs.
                </p>
                <p>
                  Today, we've grown from a small pilot program to a nationally recognized organization
                  serving youth across 12 counties in Kenya. Our success is measured not just in numbers,
                  but in the transformed lives and thriving businesses of our graduates.
                </p>
                <p>
                  We believe in the potential of every young person and work tirelessly to create pathways
                  to success through education, mentorship, and community support.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/1438072/pexels-photo-1438072.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Youth in training"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <Target className="h-12 w-12 text-primary-600 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-700">
                To empower Kenyan youth with practical skills, entrepreneurship training, and leadership
                development that create sustainable livelihoods and drive positive community change.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <Heart className="h-12 w-12 text-secondary-600 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-700">
                A Kenya where every young person has the skills, confidence, and opportunities they need
                to thrive and contribute meaningfully to society.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <Award className="h-12 w-12 text-primary-600 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Values</h3>
              <ul className="text-gray-700 space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-primary-600 font-bold">•</span>
                  <span>Excellence in education</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-600 font-bold">•</span>
                  <span>Innovation and creativity</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-600 font-bold">•</span>
                  <span>Integrity and transparency</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-600 font-bold">•</span>
                  <span>Sustainable impact</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Users className="h-12 w-12 text-primary-600 mx-auto mb-4" />
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Team</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Meet the dedicated professionals driving our mission forward
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member) => (
              <div key={member.name} className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-primary-600 font-semibold mb-3 text-sm">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline/Milestones */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-primary-50 to-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">Our Journey</h2>
          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div
                key={milestone.year}
                className={`flex flex-col md:flex-row gap-8 items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div className="md:w-1/3 text-center md:text-left">
                  <div className="inline-block bg-primary-600 text-white px-6 py-3 rounded-lg font-bold text-2xl">
                    {milestone.year}
                  </div>
                </div>
                <div className="md:w-2/3 bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{milestone.title}</h3>
                  <p className="text-gray-700">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-4">Our Partners</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            We collaborate with leading organizations to expand our reach and impact
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {partners.map((partner) => (
              <div
                key={partner}
                className="bg-gray-50 p-6 rounded-lg flex items-center justify-center text-center hover:shadow-md transition-shadow"
              >
                <p className="text-gray-700 font-semibold text-sm">{partner}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 md:py-20 bg-primary-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Join Our Mission</h2>
          <p className="text-xl text-primary-100 mb-8">
            Whether as a volunteer, partner, or supporter, there are many ways to get involved
            and make a difference in the lives of Kenyan youth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center gap-2"
            >
              Get Involved <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              to="/programs"
              className="bg-secondary-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-secondary-800 transition-colors"
            >
              Explore Programs
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
