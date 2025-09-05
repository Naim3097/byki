import { Shield, Target, Users, Award, CheckCircle, ArrowRight, Globe, Zap, Heart } from "lucide-react";
import Button from "@/components/ui/Button";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-50 to-white py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-2 bg-byki-green/10 rounded-full px-4 py-2 text-byki-green border border-byki-green/20">
                <Heart className="w-4 h-4" />
                <span className="text-sm font-medium">Made for Malaysian Drivers</span>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight text-gray-900">
                About
                <span className="block text-byki-green">
                  BYKI
                </span>
              </h1>
              
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Empowering Malaysian drivers with professional automotive diagnostics and transparent workshop services. Your trusted partner for vehicle care and maintenance.
              </p>
            </div>

            {/* Key Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
                <div className="text-4xl font-bold text-byki-green mb-2">50K+</div>
                <div className="text-gray-600">Active Users</div>
              </div>
              <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
                <div className="text-4xl font-bold text-byki-green mb-2">200+</div>
                <div className="text-gray-600">Partner Workshops</div>
              </div>
              <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
                <div className="text-4xl font-bold text-byki-green mb-2">2019</div>
                <div className="text-gray-600">Founded</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
                  Our Mission
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed">
                  To democratize automotive diagnostics in Malaysia by providing every driver with professional-grade tools and access to transparent, quality workshop services.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-byki-green/10 rounded-lg flex items-center justify-center mt-1">
                    <Shield className="w-5 h-5 text-byki-green" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Professional Diagnostics</h3>
                    <p className="text-gray-600">Making advanced vehicle diagnostics accessible to every Malaysian driver through our mobile platform.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-byki-green/10 rounded-lg flex items-center justify-center mt-1">
                    <Users className="w-5 h-5 text-byki-green" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Transparent Services</h3>
                    <p className="text-gray-600">Connecting drivers with certified workshops that provide fair pricing and quality service guarantees.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-byki-green/10 rounded-lg flex items-center justify-center mt-1">
                    <Globe className="w-5 h-5 text-byki-green" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Local Excellence</h3>
                    <p className="text-gray-600">Built specifically for Malaysian roads, weather conditions, and driving patterns with bilingual support.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-byki-green to-byki-green-dark rounded-3xl p-8 text-white">
                <div className="space-y-6">
                  <Target className="w-16 h-16 text-white/80" />
                  <div>
                    <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                    <p className="text-lg leading-relaxed text-white/90">
                      To become Malaysia's most trusted automotive platform, where every driver has the knowledge and resources to keep their vehicle running safely and efficiently.
                    </p>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      <span>Accessible technology for all</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      <span>Transparent automotive services</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      <span>Empowered vehicle ownership</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
              Our Story
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              How BYKI grew from a simple idea to Malaysia's leading automotive platform
            </p>
          </div>

          <div className="space-y-16">
            {/* 2019 - Foundation */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="inline-flex items-center space-x-2 bg-byki-green/10 rounded-full px-4 py-2">
                  <span className="text-sm font-semibold text-byki-green">2019</span>
                </div>
                <h3 className="text-3xl font-bold text-gray-900">The Beginning</h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Founded by a team of automotive engineers and software developers who experienced firsthand the challenges of vehicle maintenance in Malaysia. Frustrated by expensive diagnostics and unclear repair recommendations, we set out to create a solution.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-byki-green" />
                    <span className="text-gray-700">Team of 5 engineers and developers</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-byki-green" />
                    <span className="text-gray-700">First prototype developed</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-byki-green" />
                    <span className="text-gray-700">Initial market research completed</span>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl p-8 text-center">
                <div className="text-6xl font-bold text-byki-green mb-4">2019</div>
                <p className="text-gray-600">Company Founded</p>
              </div>
            </div>

            {/* 2020-2021 - Development */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 text-center order-2 lg:order-1">
                <div className="text-6xl font-bold text-blue-600 mb-4">2021</div>
                <p className="text-gray-700">Platform Launch</p>
              </div>
              <div className="space-y-6 order-1 lg:order-2">
                <div className="inline-flex items-center space-x-2 bg-blue-100 rounded-full px-4 py-2">
                  <span className="text-sm font-semibold text-blue-600">2020-2021</span>
                </div>
                <h3 className="text-3xl font-bold text-gray-900">Development & Testing</h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Two years of intensive development, testing with Malaysian vehicles, and building partnerships with workshops across the country. We focused on creating a platform that truly understands local automotive needs.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-blue-600" />
                    <span className="text-gray-700">BYKI App launched on iOS and Android</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-blue-600" />
                    <span className="text-gray-700">First 50 workshop partnerships established</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-blue-600" />
                    <span className="text-gray-700">SXAN device development completed</span>
                  </div>
                </div>
              </div>
            </div>

            {/* 2022-2024 - Growth */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="inline-flex items-center space-x-2 bg-purple-100 rounded-full px-4 py-2">
                  <span className="text-sm font-semibold text-purple-600">2022-2024</span>
                </div>
                <h3 className="text-3xl font-bold text-gray-900">Rapid Expansion</h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Explosive growth across Malaysia as drivers discovered the value of professional diagnostics and transparent workshop services. We expanded our network and enhanced our technology based on user feedback.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-purple-600" />
                    <span className="text-gray-700">Reached 50,000+ active users</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-purple-600" />
                    <span className="text-gray-700">Expanded to 200+ workshop partners</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-purple-600" />
                    <span className="text-gray-700">Coverage across all 13 states</span>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8 text-center">
                <div className="text-6xl font-bold text-purple-600 mb-4">50K+</div>
                <p className="text-gray-700">Active Users</p>
              </div>
            </div>

            {/* 2025 - Present */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="bg-gradient-to-br from-byki-green/10 to-byki-green/20 rounded-2xl p-8 text-center order-2 lg:order-1">
                <div className="text-6xl font-bold text-byki-green mb-4">2025</div>
                <p className="text-gray-700">Leading Platform</p>
              </div>
              <div className="space-y-6 order-1 lg:order-2">
                <div className="inline-flex items-center space-x-2 bg-byki-green/10 rounded-full px-4 py-2">
                  <span className="text-sm font-semibold text-byki-green">2025</span>
                </div>
                <h3 className="text-3xl font-bold text-gray-900">Industry Leadership</h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Today, BYKI is Malaysia's most trusted automotive platform, helping drivers save money, time, and stress while maintaining their vehicles with confidence and transparency.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-byki-green" />
                    <span className="text-gray-700">Market leader in automotive diagnostics</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-byki-green" />
                    <span className="text-gray-700">Continuous innovation and improvement</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-byki-green" />
                    <span className="text-gray-700">Expanding services and partnerships</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do at BYKI
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Transparency */}
            <div className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-byki-green transition-all duration-300 hover:shadow-lg text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Transparency</h3>
              <p className="text-gray-600 leading-relaxed">
                We believe every driver deserves clear, honest information about their vehicle and fair pricing for services. No hidden fees, no surprises.
              </p>
            </div>

            {/* Innovation */}
            <div className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-byki-green transition-all duration-300 hover:shadow-lg text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Zap className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Innovation</h3>
              <p className="text-gray-600 leading-relaxed">
                We continuously evolve our technology to make automotive care simpler, more accessible, and more effective for Malaysian drivers.
              </p>
            </div>

            {/* Quality */}
            <div className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-byki-green transition-all duration-300 hover:shadow-lg text-center">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Quality</h3>
              <p className="text-gray-600 leading-relaxed">
                From our diagnostic accuracy to our workshop partnerships, we maintain the highest standards to ensure reliable, professional service.
              </p>
            </div>

            {/* Accessibility */}
            <div className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-byki-green transition-all duration-300 hover:shadow-lg text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Accessibility</h3>
              <p className="text-gray-600 leading-relaxed">
                Professional automotive diagnostics should be available to every driver, regardless of technical knowledge or budget constraints.
              </p>
            </div>

            {/* Local Focus */}
            <div className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-byki-green transition-all duration-300 hover:shadow-lg text-center">
              <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Globe className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Local Focus</h3>
              <p className="text-gray-600 leading-relaxed">
                Built specifically for Malaysia - our climate, road conditions, popular vehicle models, and cultural preferences shape every decision.
              </p>
            </div>

            {/* Customer Care */}
            <div className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-byki-green transition-all duration-300 hover:shadow-lg text-center">
              <div className="w-16 h-16 bg-byki-green/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-byki-green" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Customer Care</h3>
              <p className="text-gray-600 leading-relaxed">
                Every interaction matters. We're committed to providing exceptional support and building lasting relationships with our users.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Join Our Mission CTA */}
      <section className="py-24 bg-byki-green">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
                Join Our Mission
              </h2>
              <p className="text-xl text-white/90 max-w-2xl mx-auto">
                Experience the future of automotive care in Malaysia. Join 50,000+ drivers who trust BYKI for their vehicle needs.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/app">
                <Button 
                  size="lg" 
                  className="bg-white text-byki-green hover:bg-gray-100 shadow-xl transition-all duration-300 text-lg px-8 py-4"
                >
                  <span className="text-byki-green">Download BYKI App</span>
                </Button>
              </Link>
              <Link href="/workshops">
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-byki-green transition-all duration-300 text-lg px-8 py-4"
                >
                  <ArrowRight className="w-6 h-6 mr-3" />
                  <span className="text-white">Find Workshops</span>
                </Button>
              </Link>
            </div>

            <p className="text-sm text-white/80">
              Free app download • 200+ certified workshops • 24/7 support
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
