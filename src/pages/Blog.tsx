import React from 'react';
import { Calendar, Clock, ArrowRight, MapPin, Camera, Code } from 'lucide-react';

export function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: "Coding from Cafes: My Remote Work Setup Across Europe",
      excerpt: "After working from 20+ cafes across 8 European countries, here's what I learned about finding the perfect coding spot and maintaining productivity on the road.",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      category: "Travel & Tech",
      date: "2024-11-15",
      readTime: "8 min read",
      image: "https://images.pexels.com/photos/7376/startup-photos.jpg?auto=compress&cs=tinysrgb&w=800",
      tags: ["Remote Work", "Travel", "Productivity"],
      icon: <MapPin className="h-5 w-5" />
    },
    {
      id: 2,
      title: "The Art of Clean Code: Lessons from a Creative Developer",
      excerpt: "How my background in art influences my approach to writing beautiful, maintainable code. Exploring the intersection of creativity and software development.",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      category: "Development",
      date: "2024-11-10",
      readTime: "6 min read",
      image: "https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["Clean Code", "Best Practices", "Creativity"],
      icon: <Code className="h-5 w-5" />
    },
    {
      id: 3,
      title: "Solo Travel Photography: Capturing Stories Through Code and Camera",
      excerpt: "My journey documenting travels through both photography and building web applications. How visual storytelling influences my approach to UI/UX design.",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      category: "Creative",
      date: "2024-11-05",
      readTime: "5 min read",
      image: "https://images.pexels.com/photos/1252869/pexels-photo-1252869.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["Photography", "UI/UX", "Design"],
      icon: <Camera className="h-5 w-5" />
    },
    {
      id: 4,
      title: "Building My First Full-Stack Application: Lessons Learned",
      excerpt: "From idea to deployment, here's my journey building a travel planning app. The challenges I faced, mistakes I made, and what I'd do differently.",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      category: "Development",
      date: "2024-10-28",
      readTime: "10 min read",
      image: "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["Full-Stack", "React", "Node.js"],
      icon: <Code className="h-5 w-5" />
    },
    {
      id: 5,
      title: "Why Every Developer Should Travel Solo (At Least Once)",
      excerpt: "How solo travel changed my perspective on problem-solving, adaptability, and building resilience - skills that make me a better developer.",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      category: "Personal Growth",
      date: "2024-10-20",
      readTime: "7 min read",
      image: "https://images.pexels.com/photos/1271619/pexels-photo-1271619.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["Travel", "Personal Growth", "Skills"],
      icon: <MapPin className="h-5 w-5" />
    },
    {
      id: 6,
      title: "From Diploma to Dream Job: My CS Learning Journey",
      excerpt: "The resources, projects, and strategies that helped me transition from a computer science student to a confident full-stack developer.",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      category: "Career",
      date: "2024-10-15",
      readTime: "9 min read",
      image: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["Learning", "Career", "Education"],
      icon: <Code className="h-5 w-5" />
    }
  ];

  const categories = ["All", "Development", "Travel & Tech", "Creative", "Personal Growth", "Career"];
  const [selectedCategory, setSelectedCategory] = React.useState("All");
  const [selectedPost, setSelectedPost] = React.useState<number | null>(null);

  const filteredPosts = selectedCategory === "All" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-accent-50 to-warm-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Blog & Stories
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Thoughts on code, travel, creativity, and the beautiful intersections between them. 
              Welcome to my digital journal of adventures and learnings.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center">
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                    selectedCategory === category
                      ? 'bg-primary-600 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {filteredPosts.length > 0 && (
        <section className="pb-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-r from-primary-600 to-accent-600 rounded-2xl overflow-hidden shadow-2xl">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="p-8 lg:p-12 text-white">
                  <div className="flex items-center mb-4">
                    {filteredPosts[0].icon}
                    <span className="ml-2 text-primary-100 font-medium">{filteredPosts[0].category}</span>
                  </div>
                  <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                    {filteredPosts[0].title}
                  </h2>
                  <p className="text-primary-100 mb-6 text-lg leading-relaxed">
                    {filteredPosts[0].excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-primary-100">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span className="mr-4">{new Date(filteredPosts[0].date).toLocaleDateString()}</span>
                      <Clock className="h-4 w-4 mr-2" />
                      <span>{filteredPosts[0].readTime}</span>
                    </div>
                    <button
                      onClick={() => setSelectedPost(filteredPosts[0].id)}
                      className="inline-flex items-center px-6 py-3 bg-white text-primary-600 font-medium rounded-lg hover:bg-primary-50 transition-all duration-200"
                    >
                      Read More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </button>
                  </div>
                </div>
                <div className="h-64 lg:h-auto">
                  <img
                    src={filteredPosts[0].image}
                    alt={filteredPosts[0].title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Blog Posts Grid */}
      <section className="pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.slice(1).map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    {post.icon}
                    <span className={`ml-2 px-2 py-1 text-xs font-medium rounded-full ${
                      post.category === 'Development' ? 'bg-primary-100 text-primary-700' :
                      post.category === 'Travel & Tech' ? 'bg-accent-100 text-accent-700' :
                      post.category === 'Creative' ? 'bg-warm-100 text-warm-700' :
                      post.category === 'Personal Growth' ? 'bg-purple-100 text-purple-700' :
                      'bg-green-100 text-green-700'
                    }`}>
                      {post.category}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-gray-500 text-sm">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span className="mr-3">{new Date(post.date).toLocaleDateString()}</span>
                      <Clock className="h-4 w-4 mr-1" />
                      <span>{post.readTime}</span>
                    </div>
                    <button
                      onClick={() => setSelectedPost(post.id)}
                      className="text-primary-600 hover:text-primary-700 font-medium text-sm flex items-center"
                    >
                      Read
                      <ArrowRight className="ml-1 h-3 w-3" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Stay Updated
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Get notified when I publish new stories about code, travel, and creativity.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
            />
            <button className="px-6 py-3 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-colors">
              Subscribe
            </button>
          </div>
          <p className="text-sm text-gray-500 mt-4">
            No spam, just good stories. Unsubscribe anytime.
          </p>
        </div>
      </section>

      {/* Modal for full post (simplified for demo) */}
      {selectedPost && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl max-w-2xl w-full max-h-[80vh] overflow-y-auto">
            <div className="p-8">
              <div className="flex justify-between items-start mb-6">
                <h2 className="text-2xl font-bold text-gray-900">
                  {blogPosts.find(p => p.id === selectedPost)?.title}
                </h2>
                <button
                  onClick={() => setSelectedPost(null)}
                  className="text-gray-500 hover:text-gray-700 text-2xl"
                >
                  ×
                </button>
              </div>
              <p className="text-gray-600 mb-6">
                This is a demo. In a real implementation, this would show the full blog post content.
              </p>
              <button
                onClick={() => setSelectedPost(null)}
                className="px-6 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}