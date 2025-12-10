import { useState } from 'react';
import { Calendar, MapPin, Clock, User, ArrowRight } from 'lucide-react';

const tabs = ['Upcoming Events', 'Blog Posts', 'Past Events'];

const upcomingEvents = [
  {
    id: 1,
    title: 'Tech Career Fair 2024',
    date: 'March 15, 2024',
    time: '9:00 AM - 5:00 PM',
    location: 'Nairobi Innovation Hub',
    description: 'Connect with leading tech companies in Kenya. Meet recruiters, learn about job opportunities, and network with industry professionals. Bring your CV and portfolio!',
    image: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=800',
    spots: '200 spots available',
  },
  {
    id: 2,
    title: 'Entrepreneurship Workshop',
    date: 'March 22, 2024',
    time: '10:00 AM - 4:00 PM',
    location: 'YouthHub Center, Nairobi',
    description: 'Learn the fundamentals of starting your own business from successful entrepreneurs. Topics include business planning, funding, and marketing strategies.',
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
    spots: '50 spots available',
  },
  {
    id: 3,
    title: 'Digital Marketing Masterclass',
    date: 'April 5, 2024',
    time: '2:00 PM - 6:00 PM',
    location: 'Online via Zoom',
    description: 'Master social media marketing and digital advertising in this intensive 4-hour workshop. Learn strategies used by top brands to grow their online presence.',
    image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800',
    spots: 'Unlimited',
  },
  {
    id: 4,
    title: 'Community Impact Day',
    date: 'April 12, 2024',
    time: '8:00 AM - 2:00 PM',
    location: 'Multiple Locations',
    description: 'Join us in giving back to our communities through various service projects. Help us make a difference in the lives of others while building teamwork skills.',
    image: 'https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=800',
    spots: '100+ volunteers needed',
  },
  {
    id: 5,
    title: 'Youth Leadership Summit',
    date: 'April 28, 2024',
    time: '9:00 AM - 5:00 PM',
    location: 'Kenyatta International Convention Centre',
    description: 'A full-day summit bringing together young leaders from across Kenya. Featuring keynote speakers, panel discussions, and networking opportunities.',
    image: 'https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&cs=tinysrgb&w=800',
    spots: '300 spots available',
  },
  {
    id: 6,
    title: 'Pitch Competition 2024',
    date: 'May 10, 2024',
    time: '1:00 PM - 6:00 PM',
    location: 'Innovation Hub Nairobi',
    description: 'Present your business idea to a panel of investors and industry experts. Win seed funding and mentorship for your startup. Applications open now!',
    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
    spots: '20 finalists',
  },
];

const blogPosts = [
  {
    id: 1,
    title: '5 Essential Skills Every Young Entrepreneur Needs',
    excerpt: 'Discover the key skills that separate successful entrepreneurs from the rest. Learn how to develop these competencies and apply them to your business journey.',
    image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800',
    author: 'John Kamau',
    date: 'February 28, 2024',
    category: 'Entrepreneurship',
  },
  {
    id: 2,
    title: 'How to Land Your First Tech Job in Kenya',
    excerpt: 'A comprehensive guide to breaking into the Kenyan tech industry. From building your portfolio to acing technical interviews, we cover everything you need to know.',
    image: 'https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=800',
    author: 'Grace Mwangi',
    date: 'February 25, 2024',
    category: 'Career',
  },
  {
    id: 3,
    title: 'Success Story: From Unemployed to Tech Lead',
    excerpt: 'Meet Sarah, who went from unemployment to leading a tech team in just 18 months. Read about her journey and the lessons she learned along the way.',
    image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=800',
    author: 'Amina Hassan',
    date: 'February 20, 2024',
    category: 'Success Stories',
  },
  {
    id: 4,
    title: 'The Future of Digital Skills in Kenya',
    excerpt: 'Explore emerging trends in the digital economy and what skills will be most valuable in the coming years. Stay ahead of the curve with these insights.',
    image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800',
    author: 'Peter Omondi',
    date: 'February 15, 2024',
    category: 'Industry Insights',
  },
  {
    id: 5,
    title: 'Building a Personal Brand on Social Media',
    excerpt: 'Learn how to leverage social media to build your professional brand and attract opportunities. Practical tips and strategies for standing out online.',
    image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800',
    author: 'John Kamau',
    date: 'February 10, 2024',
    category: 'Digital Marketing',
  },
  {
    id: 6,
    title: 'Why Leadership Skills Matter for Every Career',
    excerpt: 'Leadership is not just for managers. Discover why developing leadership skills early can accelerate your career growth and open new opportunities.',
    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
    author: 'Grace Mwangi',
    date: 'February 5, 2024',
    category: 'Leadership',
  },
];

const pastEvents = [
  {
    id: 1,
    title: 'Web Development Bootcamp Graduation 2023',
    date: 'December 15, 2023',
    image: 'https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg?auto=compress&cs=tinysrgb&w=600',
    participants: '45 graduates',
  },
  {
    id: 2,
    title: 'Innovation Challenge Finals',
    date: 'November 20, 2023',
    image: 'https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=600',
    participants: '20 finalists',
  },
  {
    id: 3,
    title: 'Annual Youth Summit 2023',
    date: 'October 10, 2023',
    image: 'https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&cs=tinysrgb&w=600',
    participants: '250+ attendees',
  },
  {
    id: 4,
    title: 'Digital Skills Workshop Series',
    date: 'September 2023',
    image: 'https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=600',
    participants: '80+ participants',
  },
  {
    id: 5,
    title: 'Community Service Day',
    date: 'August 15, 2023',
    image: 'https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=600',
    participants: '100+ volunteers',
  },
  {
    id: 6,
    title: 'Tech Career Fair 2023',
    date: 'July 20, 2023',
    image: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=600',
    participants: '200+ attendees',
  },
];

export default function Events() {
  const [activeTab, setActiveTab] = useState('Upcoming Events');

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-secondary-900 to-primary-700 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Events & Blog</h1>
          <p className="text-lg text-gray-100 max-w-2xl">
            Stay updated with our latest events, workshops, and blog posts from the YouthHub community.
          </p>
        </div>
      </section>

      {/* Tabs */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2 rounded-lg font-semibold transition-colors ${
                  activeTab === tab
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      {activeTab === 'Upcoming Events' && (
        <section className="py-16 md:py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {upcomingEvents.map((event) => (
                <div
                  key={event.id}
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
                >
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{event.title}</h3>

                    <div className="space-y-2 mb-4">
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Calendar className="h-4 w-4 text-primary-600" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Clock className="h-4 w-4 text-primary-600" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <MapPin className="h-4 w-4 text-primary-600" />
                        <span>{event.location}</span>
                      </div>
                    </div>

                    <p className="text-gray-700 mb-4 text-sm">{event.description}</p>

                    <div className="mb-4">
                      <span className="text-xs font-semibold text-primary-600 bg-primary-50 px-3 py-1 rounded-full">
                        {event.spots}
                      </span>
                    </div>

                    <button className="w-full bg-primary-600 text-white py-2 rounded-lg font-semibold hover:bg-primary-700 transition-colors">
                      Register Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Blog Posts */}
      {activeTab === 'Blog Posts' && (
        <section className="py-16 md:py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <article
                  key={post.id}
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
                >
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <div className="mb-3">
                      <span className="text-xs font-semibold text-secondary-600 bg-secondary-50 px-3 py-1 rounded-full">
                        {post.category}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-3">{post.title}</h3>
                    <p className="text-gray-700 mb-4 text-sm">{post.excerpt}</p>

                    <div className="flex items-center justify-between mb-4 text-sm text-gray-600">
                      <div className="flex items-center gap-2">
                        <User className="h-4 w-4" />
                        <span>{post.author}</span>
                      </div>
                      <span>{post.date}</span>
                    </div>

                    <button className="text-primary-600 font-semibold hover:text-primary-700 flex items-center gap-2">
                      Read More <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Past Events Gallery */}
      {activeTab === 'Past Events' && (
        <section className="py-16 md:py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Event Archive</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Browse through our past events and see the impact we've made together
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {pastEvents.map((event) => (
                <div
                  key={event.id}
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
                >
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{event.title}</h3>
                    <div className="flex items-center justify-between text-sm text-gray-600">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-primary-600" />
                        <span>{event.date}</span>
                      </div>
                      <span className="font-semibold">{event.participants}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Newsletter CTA */}
      <section className="py-16 md:py-20 bg-primary-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Stay Updated</h2>
          <p className="text-xl text-primary-100 mb-8">
            Subscribe to our newsletter to receive updates about upcoming events, new blog posts, and program announcements.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button
              type="submit"
              className="bg-secondary-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-secondary-800 transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
