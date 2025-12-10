import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Code, TrendingUp, Users, Palette, BookOpen, Wrench, ChevronDown, ArrowRight } from 'lucide-react';

const categories = ['All Programs', 'Digital Skills', 'Entrepreneurship', 'Leadership', 'Vocational'];

const programs = [
  {
    id: 1,
    title: 'Web Development Bootcamp',
    category: 'Digital Skills',
    icon: Code,
    duration: '12 weeks',
    schedule: 'Mon-Fri, 9AM-5PM',
    ageGroup: '18-30 years',
    description: 'Learn full-stack web development including HTML, CSS, JavaScript, React, and Node.js. Build real-world projects and launch your tech career.',
    skills: ['HTML/CSS', 'JavaScript', 'React', 'Node.js', 'Git/GitHub', 'API Integration'],
    color: 'bg-primary-100',
  },
  {
    id: 2,
    title: 'Entrepreneurship Accelerator',
    category: 'Entrepreneurship',
    icon: TrendingUp,
    duration: '16 weeks',
    schedule: 'Sat-Sun, 10AM-4PM',
    ageGroup: '20-35 years',
    description: 'Transform your business idea into reality. Learn business planning, financial management, marketing, and pitch presentation skills.',
    skills: ['Business Planning', 'Financial Management', 'Marketing Strategy', 'Pitch Skills', 'Legal Basics', 'Customer Development'],
    color: 'bg-secondary-100',
  },
  {
    id: 3,
    title: 'Digital Marketing Mastery',
    category: 'Digital Skills',
    icon: Palette,
    duration: '8 weeks',
    schedule: 'Wed & Fri, 6PM-9PM',
    ageGroup: '18-35 years',
    description: 'Master social media marketing, content creation, SEO, and digital advertising to boost your career or business.',
    skills: ['Social Media Marketing', 'Content Creation', 'SEO', 'Google Ads', 'Analytics', 'Email Marketing'],
    color: 'bg-primary-100',
  },
  {
    id: 4,
    title: 'Youth Leadership Program',
    category: 'Leadership',
    icon: Users,
    duration: '8 weeks',
    schedule: 'Saturdays, 9AM-2PM',
    ageGroup: '16-25 years',
    description: 'Develop leadership skills, public speaking, team management, and community organizing abilities.',
    skills: ['Public Speaking', 'Team Leadership', 'Conflict Resolution', 'Project Management', 'Community Organizing', 'Mentorship'],
    color: 'bg-primary-100',
  },
  {
    id: 5,
    title: 'Graphic Design & Branding',
    category: 'Digital Skills',
    icon: Palette,
    duration: '10 weeks',
    schedule: 'Tue & Thu, 6PM-9PM',
    ageGroup: '18-30 years',
    description: 'Learn graphic design principles, Adobe Creative Suite, and brand identity development.',
    skills: ['Adobe Photoshop', 'Adobe Illustrator', 'Brand Design', 'Logo Creation', 'Typography', 'Portfolio Building'],
    color: 'bg-primary-100',
  },
  {
    id: 6,
    title: 'Sustainable Agriculture',
    category: 'Vocational',
    icon: Wrench,
    duration: '12 weeks',
    schedule: 'Mon-Wed-Fri, 8AM-12PM',
    ageGroup: '18-40 years',
    description: 'Learn modern agricultural techniques, organic farming, and sustainable practices for profitable farming.',
    skills: ['Organic Farming', 'Irrigation Systems', 'Crop Management', 'Business Planning', 'Market Access', 'Sustainability'],
    color: 'bg-secondary-100',
  },
];

const successStories = [
  {
    name: 'Lucy Njeri',
    program: 'Web Development Bootcamp',
    story: 'After graduating, I landed a job at a top tech company in Nairobi. The hands-on training was invaluable!',
    image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    name: 'David Mutua',
    program: 'Entrepreneurship Accelerator',
    story: 'I started my own digital marketing agency and now employ 5 people. YouthHub gave me the confidence and skills I needed.',
    image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
];

const faqs = [
  {
    question: 'Are the programs free?',
    answer: 'Most of our core programs are offered free or at subsidized rates thanks to our donors and partners. Some specialized programs may have a nominal fee.',
  },
  {
    question: 'What are the eligibility requirements?',
    answer: 'Requirements vary by program, but generally you need to be within the specified age range, have basic literacy skills, and demonstrate commitment to completing the program.',
  },
  {
    question: 'Do I need prior experience?',
    answer: 'Most programs are designed for beginners. We teach from the fundamentals and build up your skills progressively.',
  },
  {
    question: 'Will I get a certificate?',
    answer: 'Yes! All participants who successfully complete a program receive a certificate of completion recognized by our partner organizations.',
  },
  {
    question: 'Is job placement guaranteed?',
    answer: 'While we cannot guarantee placement, we provide job readiness training, connect graduates with employers, and have an 85% employment rate among our graduates.',
  },
];

export default function Programs() {
  const [selectedCategory, setSelectedCategory] = useState('All Programs');
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const filteredPrograms = selectedCategory === 'All Programs'
    ? programs
    : programs.filter(p => p.category === selectedCategory);

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-secondary-900 to-primary-700 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Programs</h1>
          <p className="text-lg text-gray-100 max-w-2xl">
            Choose from our diverse range of skills training and development programs designed to launch your career.
          </p>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-lg font-semibold transition-colors ${
                  selectedCategory === category
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPrograms.map((program) => {
              const Icon = program.icon;
              return (
                <div
                  key={program.id}
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
                >
                  <div className={`${program.color} p-6`}>
                    <Icon className="h-10 w-10 text-primary-600 mb-3" />
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{program.title}</h3>
                    <p className="text-sm text-gray-700 font-semibold">{program.category}</p>
                  </div>

                  <div className="p-6">
                    <p className="text-gray-700 mb-4">{program.description}</p>

                    <div className="space-y-2 mb-4 text-sm">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-600">Duration:</span>
                        <span className="font-semibold text-gray-900">{program.duration}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-600">Schedule:</span>
                        <span className="font-semibold text-gray-900">{program.schedule}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-600">Age Group:</span>
                        <span className="font-semibold text-gray-900">{program.ageGroup}</span>
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-2">Skills You'll Learn:</h4>
                      <div className="flex flex-wrap gap-2">
                        {program.skills.map((skill) => (
                          <span
                            key={skill}
                            className="bg-primary-50 text-primary-700 px-3 py-1 rounded-full text-xs font-semibold"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    <button className="w-full bg-primary-600 text-white py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors">
                      Apply Now
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">Graduate Success Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {successStories.map((story) => (
              <div
                key={story.name}
                className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-lg p-8"
              >
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={story.image}
                    alt={story.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-bold text-gray-900">{story.name}</h3>
                    <p className="text-sm text-primary-600">{story.program}</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">"{story.story}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <BookOpen className="h-12 w-12 text-primary-600 mx-auto mb-4" />
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Get answers to common questions about our programs</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <button
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <h3 className="font-bold text-gray-900">{faq.question}</h3>
                  <ChevronDown
                    className={`h-5 w-5 text-primary-600 transition-transform ${
                      expandedFaq === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {expandedFaq === index && (
                  <div className="px-6 pb-6">
                    <p className="text-gray-700">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-primary-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Your Journey?</h2>
          <p className="text-xl text-primary-100 mb-8">
            Join thousands of youth who have transformed their lives through our programs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center gap-2">
              Apply Now <ArrowRight className="h-5 w-5" />
            </button>
            <Link
              to="/contact"
              className="bg-secondary-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-secondary-800 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
