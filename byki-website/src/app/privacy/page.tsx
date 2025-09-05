import { Shield, Lock, Eye, Database, Users, FileText, CheckCircle, AlertTriangle } from "lucide-react";
import Link from "next/link";

export default function PrivacyPage() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-50 to-white py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-2 bg-byki-green/10 rounded-full px-4 py-2 text-byki-green border border-byki-green/20">
                <Shield className="w-4 h-4" />
                <span className="text-sm font-medium">Your Privacy Matters</span>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight text-gray-900">
                Privacy
                <span className="block text-byki-green">
                  Policy
                </span>
              </h1>
              
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                How BYKI protects your personal data, vehicle information, and diagnostic results. Transparent, secure, and compliant with Malaysian privacy laws.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm max-w-md mx-auto">
              <div className="text-gray-900 text-center space-y-2">
                <div className="text-lg font-semibold">Last Updated</div>
                <div className="text-byki-green">August 14, 2025</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Principles */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
              Our Privacy Principles
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We believe in transparency, security, and giving you control over your data
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto">
                <Lock className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900">Data Security</h3>
              <p className="text-gray-600">Your vehicle data is encrypted and stored securely following industry standards.</p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto">
                <Eye className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900">Transparency</h3>
              <p className="text-gray-600">We clearly explain what data we collect and how it's used in your BYKI experience.</p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto">
                <Users className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900">User Control</h3>
              <p className="text-gray-600">You decide what data to share and can delete your information anytime.</p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto">
                <Shield className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900">Compliance</h3>
              <p className="text-gray-600">We comply with Malaysian privacy laws and international data protection standards.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            
            {/* Information We Collect */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
              <div className="flex items-center space-x-3 mb-6">
                <Database className="w-6 h-6 text-byki-green" />
                <h3 className="text-2xl font-bold text-gray-900">Information We Collect</h3>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Vehicle Diagnostic Data</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-5 h-5 text-byki-green mt-0.5" />
                      <span>OBD2 fault codes and diagnostic results from your vehicle</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-5 h-5 text-byki-green mt-0.5" />
                      <span>Engine performance data when using SXAN device</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-5 h-5 text-byki-green mt-0.5" />
                      <span>Vehicle make, model, year, and VIN (when provided)</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Account Information</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-5 h-5 text-byki-green mt-0.5" />
                      <span>Email address and phone number (for account creation)</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-5 h-5 text-byki-green mt-0.5" />
                      <span>Location data (only when booking workshop services)</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-5 h-5 text-byki-green mt-0.5" />
                      <span>Workshop booking history and preferences</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">App Usage Data</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-5 h-5 text-byki-green mt-0.5" />
                      <span>App features used and diagnostic scan frequency</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-5 h-5 text-byki-green mt-0.5" />
                      <span>Device information (phone model, OS version)</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-5 h-5 text-byki-green mt-0.5" />
                      <span>Crash reports and error logs (to improve app performance)</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* How We Use Your Data */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
              <div className="flex items-center space-x-3 mb-6">
                <FileText className="w-6 h-6 text-byki-green" />
                <h3 className="text-2xl font-bold text-gray-900">How We Use Your Data</h3>
              </div>
              
              <div className="space-y-4 text-gray-600">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-byki-green rounded-full mt-2"></div>
                  <div>
                    <strong className="text-gray-900">Provide Diagnostic Services:</strong> Analyze your vehicle data to provide accurate diagnostic results and maintenance recommendations.
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-byki-green rounded-full mt-2"></div>
                  <div>
                    <strong className="text-gray-900">Workshop Matching:</strong> Connect you with certified workshops based on your location and vehicle needs.
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-byki-green rounded-full mt-2"></div>
                  <div>
                    <strong className="text-gray-900">App Improvement:</strong> Analyze usage patterns to enhance app features and diagnostic accuracy.
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-byki-green rounded-full mt-2"></div>
                  <div>
                    <strong className="text-gray-900">Customer Support:</strong> Assist you with technical issues and provide personalized help.
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-byki-green rounded-full mt-2"></div>
                  <div>
                    <strong className="text-gray-900">Safety Alerts:</strong> Notify you of critical vehicle issues that require immediate attention.
                  </div>
                </div>
              </div>
            </div>

            {/* Data Sharing */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
              <div className="flex items-center space-x-3 mb-6">
                <Users className="w-6 h-6 text-byki-green" />
                <h3 className="text-2xl font-bold text-gray-900">Data Sharing</h3>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">What We Share</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-5 h-5 text-byki-green mt-0.5" />
                      <span>Basic vehicle information with workshops (only when you book a service)</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-5 h-5 text-byki-green mt-0.5" />
                      <span>Anonymous diagnostic trends with automotive researchers (no personal data)</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-red-50 border border-red-200 rounded-xl p-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <AlertTriangle className="w-5 h-5 text-red-600" />
                    <h4 className="font-semibold text-red-900">What We Never Share</h4>
                  </div>
                  <ul className="space-y-1 text-red-800 text-sm">
                    <li>• Your personal contact information</li>
                    <li>• Individual vehicle diagnostic data</li>
                    <li>• Location data without your permission</li>
                    <li>• Data with insurance companies or government agencies</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Your Rights */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
              <div className="flex items-center space-x-3 mb-6">
                <Shield className="w-6 h-6 text-byki-green" />
                <h3 className="text-2xl font-bold text-gray-900">Your Privacy Rights</h3>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">You Can:</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-5 h-5 text-byki-green mt-0.5" />
                      <span>Access all your data stored in BYKI</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-5 h-5 text-byki-green mt-0.5" />
                      <span>Request data correction or deletion</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-5 h-5 text-byki-green mt-0.5" />
                      <span>Opt out of data collection anytime</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-5 h-5 text-byki-green mt-0.5" />
                      <span>Export your vehicle diagnostic history</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Contact Us:</h4>
                  <div className="space-y-3 text-gray-600">
                    <div>
                      <strong>Privacy Officer:</strong><br />
                      privacy@byki.my
                    </div>
                    <div>
                      <strong>Data Protection:</strong><br />
                      1-300-88-BYKI
                    </div>
                    <div>
                      <strong>Response Time:</strong><br />
                      Within 30 days as required by law
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact */}
            <div className="bg-gradient-to-br from-byki-green to-byki-green-dark rounded-3xl p-12 text-center text-white relative overflow-hidden">
              <div className="relative z-10">
                <div className="space-y-6">
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="text-3xl lg:text-4xl font-bold text-white">
                      Questions About Privacy?
                    </h3>
                    <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
                      Our dedicated privacy team is here to help with any questions or concerns about your data protection and privacy rights.
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                    <Link href="/support">
                      <button className="bg-white text-byki-green px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors shadow-lg">
                        <span className="text-byki-green">Contact Privacy Team</span>
                      </button>
                    </Link>
                    <Link href="/support">
                      <button className="bg-white/10 backdrop-blur-sm text-white border border-white/30 px-8 py-4 rounded-xl font-semibold hover:bg-white/20 transition-colors">
                        <span className="text-white">View Support Center</span>
                      </button>
                    </Link>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 text-sm">
                    <div className="space-y-2">
                      <div className="text-white/90 font-medium">Email Response</div>
                      <div className="text-white">Within 24 hours</div>
                    </div>
                    <div className="space-y-2">
                      <div className="text-white/90 font-medium">Data Requests</div>
                      <div className="text-white">Within 30 days</div>
                    </div>
                    <div className="space-y-2">
                      <div className="text-white/90 font-medium">24/7 Support</div>
                      <div className="text-white">1-300-88-BYKI</div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Background decoration */}
              <div className="absolute top-8 right-8 w-32 h-32 border border-white/20 rounded-full"></div>
              <div className="absolute bottom-8 left-8 w-24 h-24 border border-white/10 rounded-full"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
