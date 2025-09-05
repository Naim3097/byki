import { Download, Smartphone, QrCode, Star, CheckCircle, Apple, Play, ArrowRight, Shield, Zap } from "lucide-react";
import Button from "@/components/ui/Button";
import Link from "next/link";

export default function DownloadPage() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-50 to-white py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="inline-flex items-center space-x-2 bg-byki-green/10 rounded-full px-4 py-2 text-byki-green border border-byki-green/20">
                  <Download className="w-4 h-4" />
                  <span className="text-sm font-medium">Free Download</span>
                </div>
                
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight text-gray-900">
                  Download
                  <span className="block text-byki-green">
                    BYKI App
                  </span>
                </h1>
                
                <p className="text-xl text-gray-600 max-w-2xl leading-relaxed">
                  Get professional automotive diagnostics in your pocket. Available free on iOS and Android with no subscription required.
                </p>
              </div>

              {/* Download Statistics */}
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white rounded-2xl p-4 border border-gray-200 shadow-sm">
                  <div className="flex items-center space-x-2 mb-2">
                    <Star className="w-5 h-5 text-yellow-400" />
                    <span className="text-2xl font-bold text-byki-green">4.8</span>
                  </div>
                  <div className="text-sm text-gray-600">App Store Rating</div>
                </div>
                <div className="bg-white rounded-2xl p-4 border border-gray-200 shadow-sm">
                  <div className="text-2xl font-bold text-byki-green mb-2">50K+</div>
                  <div className="text-sm text-gray-600">Downloads</div>
                </div>
              </div>

              {/* Quick Features */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-byki-green" />
                  <span>Professional vehicle diagnostics</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-byki-green" />
                  <span>200+ certified workshop network</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-byki-green" />
                  <span>Bilingual support (English & Bahasa Malaysia)</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-byki-green" />
                  <span>Works offline - no internet required</span>
                </div>
              </div>
            </div>

            {/* QR Codes and Download Buttons */}
            <div className="space-y-8">
              {/* Main Download Buttons */}
              <div className="space-y-4">
                <Button 
                  size="lg" 
                  className="w-full bg-white text-byki-green hover:bg-gray-100 shadow-xl transition-all duration-300 text-lg py-4"
                >
                  <Apple className="w-6 h-6 mr-3" />
                  Download for iPhone
                </Button>
                <Button 
                  size="lg" 
                  className="w-full bg-white text-byki-green hover:bg-gray-100 shadow-xl transition-all duration-300 text-lg py-4"
                >
                  <Download className="w-6 h-6 mr-3" />
                  Download for Android
                </Button>
              </div>

              {/* QR Code Section */}
              <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
                <div className="text-center space-y-4">
                  <h3 className="text-lg font-semibold text-gray-900">Scan to Download</h3>
                  <div className="bg-gray-50 rounded-xl p-4 inline-block">
                    <div className="w-32 h-32 bg-gray-100 rounded-lg flex items-center justify-center">
                      <QrCode className="w-16 h-16 text-gray-400" />
                    </div>
                  </div>
                  <p className="text-sm text-gray-600">
                    Scan with your phone camera to download
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* App Features Preview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
              What You Get With BYKI
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need for professional vehicle care and maintenance
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            {/* Phone Mockup */}
            <div className="relative">
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-[3rem] p-4 shadow-2xl">
                <div className="bg-black rounded-[2.5rem] p-6 aspect-[9/19]">
                  <div className="bg-white rounded-2xl h-full p-6 space-y-6">
                    {/* Status Bar */}
                    <div className="flex justify-between items-center">
                      <div className="text-xs font-medium text-gray-900">BYKI</div>
                      <div className="text-xs text-gray-600">9:41 AM</div>
                    </div>

                    {/* Vehicle Status Card */}
                    <div className="bg-gradient-to-r from-byki-green to-byki-green-light rounded-2xl p-4 text-white">
                      <div className="flex items-center justify-between mb-3">
                        <span className="font-semibold">Honda Civic 2020</span>
                        <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                      </div>
                      <div className="text-sm opacity-90">Last scan: 2 hours ago</div>
                    </div>

                    {/* Quick Actions */}
                    <div className="grid grid-cols-2 gap-3">
                      <button className="bg-byki-green text-white rounded-xl py-3 text-sm font-medium">
                        Run Diagnostic
                      </button>
                      <button className="bg-gray-100 text-gray-700 rounded-xl py-3 text-sm font-medium">
                        Find Workshops
                      </button>
                    </div>

                    {/* Recent Activity */}
                    <div className="space-y-3">
                      <h4 className="font-semibold text-gray-900">Recent Activity</h4>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-xl">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <div className="flex-1">
                            <div className="text-sm font-medium text-green-800">Engine Health Check</div>
                            <div className="text-xs text-green-600">All systems normal</div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-xl">
                          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                          <div className="flex-1">
                            <div className="text-sm font-medium text-blue-800">Service Reminder</div>
                            <div className="text-xs text-blue-600">Due in 2 weeks</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Feature List */}
            <div className="space-y-8">
              <div className="space-y-6">
                <h3 className="text-3xl font-bold text-gray-900">
                  Professional Diagnostics Made Simple
                </h3>
                <p className="text-lg text-gray-600">
                  Access the same diagnostic tools used by professional mechanics, right from your smartphone.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-byki-green/10 rounded-xl flex items-center justify-center">
                    <Shield className="w-6 h-6 text-byki-green" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Real-time Vehicle Monitoring</h4>
                    <p className="text-gray-600">Monitor engine performance, emissions, and safety systems with professional accuracy.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-byki-green/10 rounded-xl flex items-center justify-center">
                    <Zap className="w-6 h-6 text-byki-green" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Instant Workshop Booking</h4>
                    <p className="text-gray-600">Connect with 200+ certified workshops across Malaysia with transparent pricing.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-byki-green/10 rounded-xl flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-byki-green" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Maintenance Tracking</h4>
                    <p className="text-gray-600">Smart reminders for oil changes, service intervals, and preventive maintenance.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* System Requirements */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
              System Requirements
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Compatible with most modern smartphones and tablets
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* iOS Requirements */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-gray-900 rounded-2xl flex items-center justify-center">
                  <Apple className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">iOS</h3>
                  <p className="text-gray-600">iPhone & iPad</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between py-3 border-b border-gray-100">
                  <span className="text-gray-700">Minimum iOS Version</span>
                  <span className="font-semibold text-gray-900">iOS 13.0+</span>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-gray-100">
                  <span className="text-gray-700">Compatible Devices</span>
                  <span className="font-semibold text-gray-900">iPhone 6s and newer</span>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-gray-100">
                  <span className="text-gray-700">Storage Required</span>
                  <span className="font-semibold text-gray-900">50 MB</span>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-gray-100">
                  <span className="text-gray-700">Internet Required</span>
                  <span className="font-semibold text-gray-900">Optional (works offline)</span>
                </div>
                <div className="flex items-center justify-between py-3">
                  <span className="text-gray-700">Bluetooth Support</span>
                  <span className="font-semibold text-gray-900">4.0+ (for SXAN device)</span>
                </div>
              </div>

              <div className="mt-8">
                <Button className="w-full" size="lg">
                  <Apple className="w-5 h-5 mr-2" />
                  Download from App Store
                </Button>
              </div>
            </div>

            {/* Android Requirements */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-green-600 rounded-2xl flex items-center justify-center">
                  <Play className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Android</h3>
                  <p className="text-gray-600">Phone & Tablet</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between py-3 border-b border-gray-100">
                  <span className="text-gray-700">Minimum Android Version</span>
                  <span className="font-semibold text-gray-900">Android 7.0+</span>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-gray-100">
                  <span className="text-gray-700">API Level</span>
                  <span className="font-semibold text-gray-900">24+</span>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-gray-100">
                  <span className="text-gray-700">Storage Required</span>
                  <span className="font-semibold text-gray-900">45 MB</span>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-gray-100">
                  <span className="text-gray-700">Internet Required</span>
                  <span className="font-semibold text-gray-900">Optional (works offline)</span>
                </div>
                <div className="flex items-center justify-between py-3">
                  <span className="text-gray-700">Bluetooth Support</span>
                  <span className="font-semibold text-gray-900">4.0+ (for SXAN device)</span>
                </div>
              </div>

              <div className="mt-8">
                <Button className="w-full" size="lg">
                  <Download className="w-5 h-5 mr-2" />
                  Download from Google Play
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* User Reviews */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
              What Users Say
            </h2>
            <div className="flex items-center justify-center space-x-2">
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                ))}
              </div>
              <span className="text-xl font-semibold text-gray-900">4.8/5</span>
              <span className="text-gray-600">(12,847 reviews)</span>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Review 1 */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
              <div className="flex space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-6">
                "Finally, professional diagnostics that I can afford! Saved me RM400 when it detected a simple sensor issue instead of the expensive engine repair the workshop initially suggested."
              </p>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-byki-green rounded-full flex items-center justify-center">
                  <span className="text-white font-semibold text-sm">LT</span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Lim Thong</div>
                  <div className="text-sm text-gray-600">iOS User, Kuala Lumpur</div>
                </div>
              </div>
            </div>

            {/* Review 2 */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
              <div className="flex space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-6">
                "The app works perfectly in both English and Bahasa Malaysia. Easy to use even for someone like me who's not tech-savvy. Highly recommend!"
              </p>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-byki-green rounded-full flex items-center justify-center">
                  <span className="text-white font-semibold text-sm">SA</span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Siti Aminah</div>
                  <div className="text-sm text-gray-600">Android User, Penang</div>
                </div>
              </div>
            </div>

            {/* Review 3 */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
              <div className="flex space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-6">
                "Love how it works offline! Perfect for long drives to kampung where internet is spotty. The workshop network feature is incredibly helpful too."
              </p>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-byki-green rounded-full flex items-center justify-center">
                  <span className="text-white font-semibold text-sm">RK</span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Raj Kumar</div>
                  <div className="text-sm text-gray-600">iOS User, Johor Bahru</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final Download CTA */}
      <section className="py-24 bg-byki-green">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
                Download BYKI Today
              </h2>
              <p className="text-xl text-byki-green-light max-w-2xl mx-auto">
                Join 50,000+ Malaysian drivers who trust BYKI for professional automotive diagnostics and transparent workshop services.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-byki-green hover:bg-gray-100 shadow-xl transition-all duration-300 text-lg px-8 py-4"
              >
                <Apple className="w-6 h-6 mr-3" />
                Download for iPhone
              </Button>
              <Button 
                size="lg" 
                className="bg-white text-byki-green hover:bg-gray-100 shadow-xl transition-all duration-300 text-lg px-8 py-4"
              >
                <Download className="w-6 h-6 mr-3" />
                Download for Android
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 border-t border-white/20">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">Free</div>
                <div className="text-sm text-byki-green-light">No subscription required</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">50 MB</div>
                <div className="text-sm text-byki-green-light">Small download size</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">Offline</div>
                <div className="text-sm text-byki-green-light">Works without internet</div>
              </div>
            </div>

            <p className="text-sm text-byki-green-light">
              Available on iOS 13.0+ and Android 7.0+ • Free download • 24/7 support
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
