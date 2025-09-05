import { Calendar, User, ArrowRight, BookOpen, TrendingUp, Wrench, Zap, ThermometerSun, Car } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function BlogPage() {
  const featuredPost = {
    id: 1,
    title: "Complete Guide to OBD2 Diagnostics in Malaysia",
    excerpt: "Everything you need to know about vehicle diagnostics, fault codes, and choosing the right diagnostic tools for Malaysian driving conditions.",
    category: "Diagnostics",
    readTime: "8 min read",
    date: "August 10, 2025",
    author: "BYKI Team",
    image: "/images/app-screenshots/diagnostic-report.jpg",
    featured: true
  };

  const blogPosts = [
    {
      id: 2,
      title: "Top 10 Car Maintenance Tips for Malaysian Climate",
      excerpt: "Essential maintenance practices to keep your car running smoothly in Malaysia's hot and humid weather conditions.",
      category: "Maintenance",
      readTime: "6 min read",
      date: "August 8, 2025",
      author: "Workshop Partners",
      image: "/images/app-screenshots/live-parameter-1.jpg"
    },
    {
      id: 3,
      title: "Understanding Your Car's Warning Lights",
      excerpt: "Decode common dashboard warning lights and learn when it's safe to drive vs when you need immediate attention.",
      category: "Education",
      readTime: "5 min read",
      date: "August 5, 2025",
      author: "BYKI Team",
      image: "/images/app-screenshots/fault-code-detection.jpg"
    },
    {
      id: 4,
      title: "How to Choose a Reliable Workshop in Malaysia",
      excerpt: "Red flags to avoid and green flags to look for when selecting a workshop for your vehicle repairs and maintenance.",
      category: "Workshops",
      readTime: "7 min read",
      date: "August 2, 2025",
      author: "Industry Expert",
      image: "/images/app-screenshots/workshop-referral.jpg"
    },
    {
      id: 5,
      title: "Proton vs Perodua: Maintenance Cost Comparison",
      excerpt: "Honest analysis of maintenance costs, parts availability, and workshop network for Malaysia's national car brands.",
      category: "Analysis",
      readTime: "10 min read",
      date: "July 30, 2025",
      author: "BYKI Research",
      image: "/images/app-screenshots/app-analysis-summary.jpg"
    },
    {
      id: 6,
      title: "Electric Vehicle Adoption in Malaysia 2025",
      excerpt: "Current state of EV infrastructure, government incentives, and what it means for traditional automotive diagnostics.",
      category: "Industry",
      readTime: "9 min read",
      date: "July 28, 2025",
      author: "Industry Analyst",
      image: "/images/app-screenshots/live-parameter-2.jpg"
    },
    {
      id: 7,
      title: "DIY Car Care: What You Can Do vs Workshop Services",
      excerpt: "Clear boundaries between safe DIY maintenance and tasks that require professional workshop expertise.",
      category: "DIY",
      readTime: "6 min read",
      date: "July 25, 2025",
      author: "Maintenance Expert",
      image: "/images/app-screenshots/live-parameter-3.jpg"
    }
  ];

  const categories = [
    { name: "All Posts", count: 12, active: true },
    { name: "Diagnostics", count: 4 },
    { name: "Maintenance", count: 3 },
    { name: "Workshops", count: 2 },
    { name: "Industry", count: 2 },
    { name: "Education", count: 1 }
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-50 to-white py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-2 bg-byki-green/10 rounded-full px-4 py-2 text-byki-green border border-byki-green/20">
                <BookOpen className="w-4 h-4" />
                <span className="text-sm font-medium">Knowledge Hub</span>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight text-gray-900">
                BYKI
                <span className="block text-byki-green">
                  Blog
                </span>
              </h1>
              
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Expert insights on vehicle diagnostics, maintenance tips for Malaysian climate, and honest workshop advice from automotive professionals.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-6">
              <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm">
                <div className="flex items-center space-x-2 text-gray-900">
                  <TrendingUp className="w-5 h-5 text-byki-green" />
                  <span className="font-semibold">12 Articles</span>
                </div>
              </div>
              <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm">
                <div className="flex items-center space-x-2 text-gray-900">
                  <User className="w-5 h-5 text-byki-green" />
                  <span className="font-semibold">Expert Authors</span>
                </div>
              </div>
              <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm">
                <div className="flex items-center space-x-2 text-gray-900">
                  <Calendar className="w-5 h-5 text-byki-green" />
                  <span className="font-semibold">Weekly Updates</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.name}
                className={`px-6 py-3 rounded-full font-medium transition-colors ${
                  category.active
                    ? 'bg-byki-green text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-16">
            <div className="inline-flex items-center space-x-2 bg-byki-green-light/10 rounded-full px-4 py-2">
              <Zap className="w-4 h-4 text-byki-green" />
              <span className="text-sm font-medium text-byki-green">Featured Article</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
              Latest Insights
            </h2>
          </div>

          <div className="bg-gradient-to-br from-byki-green-light/5 to-green-50 rounded-3xl p-8 lg:p-12 border border-green-100">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <span className="bg-byki-green text-white px-3 py-1 rounded-full text-sm font-medium">
                    {featuredPost.category}
                  </span>
                  <span className="text-gray-500">{featuredPost.readTime}</span>
                </div>
                
                <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                  {featuredPost.title}
                </h3>
                
                <p className="text-lg text-gray-600 leading-relaxed">
                  {featuredPost.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-byki-green-light/20 rounded-full flex items-center justify-center">
                      <User className="w-5 h-5 text-byki-green" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">{featuredPost.author}</div>
                      <div className="text-sm text-gray-500">{featuredPost.date}</div>
                    </div>
                  </div>
                  
                  <button className="inline-flex items-center space-x-2 bg-byki-green text-white px-6 py-3 rounded-xl font-semibold hover:bg-byki-green-dark transition-colors">
                    <span>Read Article</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
              
              <div className="relative">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-byki-green rounded-2xl flex items-center justify-center shadow-lg">
                  <BookOpen className="w-12 h-12 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
              Recent Articles
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Practical automotive knowledge for Malaysian drivers
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow group">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 backdrop-blur-sm text-gray-900 px-3 py-1 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6 space-y-4">
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>{post.date}</span>
                    <span>{post.readTime}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 line-clamp-2 group-hover:text-byki-green transition-colors">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                        <User className="w-4 h-4 text-gray-600" />
                      </div>
                      <span className="text-sm text-gray-700">{post.author}</span>
                    </div>
                    
                    <button className="text-byki-green font-semibold text-sm hover:text-byki-green-dark transition-colors">
                      Read More
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center mt-16">
            <button className="bg-byki-green text-white px-8 py-4 rounded-xl font-semibold hover:bg-byki-green-dark transition-colors">
              Load More Articles
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-white">
                <Wrench className="w-4 h-4" />
                <span className="text-sm font-medium">Weekly Updates</span>
              </div>
              
              <h2 className="text-4xl lg:text-5xl font-bold text-white">
                Stay Updated
              </h2>
              
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Get weekly automotive tips, diagnostic insights, and maintenance advice delivered to your inbox.
              </p>
            </div>

            <div className="max-w-md mx-auto">
              <div className="flex space-x-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-4 rounded-xl border border-gray-600 bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-byki-green focus:border-transparent"
                />
                <button className="bg-byki-green text-white px-8 py-4 rounded-xl font-semibold hover:bg-byki-green-dark transition-colors">
                  Subscribe
                </button>
              </div>
              <p className="text-sm text-gray-400 mt-3">
                No spam, unsubscribe anytime. Read our{" "}
                <Link href="/privacy" className="text-byki-green hover:underline">
                  Privacy Policy
                </Link>
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mt-16">
              <div className="text-center space-y-3">
                <div className="w-12 h-12 bg-byki-green/20 rounded-xl flex items-center justify-center mx-auto">
                  <ThermometerSun className="w-6 h-6 text-byki-green" />
                </div>
                <h3 className="text-lg font-semibold text-white">Climate-Specific Tips</h3>
                <p className="text-gray-400 text-sm">Maintenance advice tailored for Malaysia's hot, humid weather</p>
              </div>
              
              <div className="text-center space-y-3">
                <div className="w-12 h-12 bg-byki-green/20 rounded-xl flex items-center justify-center mx-auto">
                  <Car className="w-6 h-6 text-byki-green" />
                </div>
                <h3 className="text-lg font-semibold text-white">Local Market Focus</h3>
                <p className="text-gray-400 text-sm">Content focused on popular Malaysian car brands and models</p>
              </div>
              
              <div className="text-center space-y-3">
                <div className="w-12 h-12 bg-byki-green/20 rounded-xl flex items-center justify-center mx-auto">
                  <Wrench className="w-6 h-6 text-byki-green" />
                </div>
                <h3 className="text-lg font-semibold text-white">Expert Insights</h3>
                <p className="text-gray-400 text-sm">Written by certified mechanics and automotive professionals</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
