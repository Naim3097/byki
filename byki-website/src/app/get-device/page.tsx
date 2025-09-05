import { CheckCircle, Bluetooth, Shield, Clock, Smartphone, Award, ShoppingCart, ArrowRight, Truck, Star } from "lucide-react";
import Button from "@/components/ui/Button";
import Link from "next/link";

export default function GetDevicePage() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-50 to-white py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="inline-flex items-center space-x-2 bg-byki-green/10 rounded-full px-4 py-2 text-byki-green border border-byki-green/20">
                  <ShoppingCart className="w-4 h-4" />
                  <span className="text-sm font-medium">Order SXAN Device</span>
                </div>
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight text-gray-900">
                  Get Your
                  <span className="block text-byki-green">
                    SXAN Device
                  </span>
                  <span className="block text-byki-green text-3xl mt-2">Only RM59</span>
                </h1>
                <p className="text-xl text-gray-600 max-w-2xl leading-relaxed">
                  Unlock professional-grade diagnostics for your car. Works seamlessly with the BYKI App. Free shipping nationwide.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-byki-green text-white hover:bg-byki-green-dark shadow-xl transition-all duration-300">
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  Order Now - RM59
                </Button>
                <Link href="/device">
                  <Button size="lg" variant="outline" className="border-2 border-byki-green text-byki-green hover:bg-byki-green hover:text-white transition-all duration-300">
                    <ArrowRight className="w-5 h-5 mr-2" />
                    Device Details
                  </Button>
                </Link>
              </div>
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200">
                <div className="text-center">
                  <div className="text-2xl font-bold text-byki-green">RM59</div>
                  <div className="text-sm text-gray-600">One-time purchase</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-byki-green">2 Years</div>
                  <div className="text-sm text-gray-600">Warranty included</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-byki-green">Free</div>
                  <div className="text-sm text-gray-600">Shipping nationwide</div>
                </div>
              </div>
            </div>
            {/* Device Visual */}
            <div className="relative">
              <div className="relative z-10">
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 shadow-2xl">
                  <div className="bg-gradient-to-br from-byki-green to-byki-green-dark rounded-2xl p-6 mb-6">
                    <div className="w-24 h-16 bg-white/20 rounded-lg mx-auto flex items-center justify-center mb-4">
                      <span className="text-white font-bold text-xl">SXAN</span>
                    </div>
                    <div className="text-center text-white space-y-2">
                      <h3 className="text-lg font-semibold">OBD2 Diagnostic Device</h3>
                      <p className="text-byki-green-light">Bluetooth-enabled • Professional accuracy</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-center space-x-4 text-white">
                    <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
                    <Bluetooth className="w-6 h-6 text-blue-400" />
                    <Smartphone className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-3xl blur-3xl transform scale-110"></div>
            </div>
          </div>
        </div>
      </section>
      {/* Key Features */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
              Why Choose SXAN?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional-grade diagnostics, universal compatibility, and seamless BYKI App integration
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-byki-green transition-all duration-300 hover:shadow-lg">
              <div className="w-16 h-16 bg-byki-green/10 rounded-2xl flex items-center justify-center mb-6">
                <Bluetooth className="w-8 h-8 text-byki-green" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Bluetooth 4.0+</h3>
              <p className="text-gray-600 leading-relaxed">Easy wireless connection to your smartphone. No cables, no hassle.</p>
            </div>
            <div className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-byki-green transition-all duration-300 hover:shadow-lg">
              <div className="w-16 h-16 bg-byki-green/10 rounded-2xl flex items-center justify-center mb-6">
                <Shield className="w-8 h-8 text-byki-green" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Universal Compatibility</h3>
              <p className="text-gray-600 leading-relaxed">Works with all 2008+ vehicles (OBD2/EOBD). Petrol, diesel, and hybrid supported.</p>
            </div>
            <div className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-byki-green transition-all duration-300 hover:shadow-lg">
              <div className="w-16 h-16 bg-byki-green/10 rounded-2xl flex items-center justify-center mb-6">
                <Clock className="w-8 h-8 text-byki-green" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">30-Second Setup</h3>
              <p className="text-gray-600 leading-relaxed">Plug in, pair, and start diagnosing in under a minute. No technical skills needed.</p>
            </div>
            <div className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-byki-green transition-all duration-300 hover:shadow-lg">
              <div className="w-16 h-16 bg-byki-green/10 rounded-2xl flex items-center justify-center mb-6">
                <Award className="w-8 h-8 text-byki-green" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">2-Year Warranty</h3>
              <p className="text-gray-600 leading-relaxed">Peace of mind with a full replacement warranty. Quality you can trust.</p>
            </div>
            <div className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-byki-green transition-all duration-300 hover:shadow-lg">
              <div className="w-16 h-16 bg-byki-green/10 rounded-2xl flex items-center justify-center mb-6">
                <Truck className="w-8 h-8 text-byki-green" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Free Shipping</h3>
              <p className="text-gray-600 leading-relaxed">Delivered to your door, anywhere in Malaysia, at no extra cost.</p>
            </div>
            <div className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-byki-green transition-all duration-300 hover:shadow-lg">
              <div className="w-16 h-16 bg-byki-green/10 rounded-2xl flex items-center justify-center mb-6">
                <Star className="w-8 h-8 text-byki-green" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Trusted by 50,000+ Drivers</h3>
              <p className="text-gray-600 leading-relaxed">Join thousands of satisfied Malaysian drivers who trust BYKI and SXAN for their vehicle care.</p>
            </div>
          </div>
        </div>
      </section>
      {/* Order CTA */}
      <section className="py-24 bg-byki-green">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
                Ready to Order?
              </h2>
              <p className="text-xl text-byki-green-light max-w-2xl mx-auto">
                Get your SXAN device for just RM59. Free shipping and 2-year warranty included.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button size="lg" className="bg-white text-byki-green hover:bg-gray-100 shadow-xl transition-all duration-300 text-lg px-8 py-4">
                <ShoppingCart className="w-6 h-6 mr-3" />
                Order Now - RM59
              </Button>
              <Link href="/device">
                <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-byki-green transition-all duration-300 text-lg px-8 py-4">
                  <ArrowRight className="w-6 h-6 mr-3" />
                  Device Details
                </Button>
              </Link>
            </div>
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/20">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">RM59</div>
                <div className="text-sm text-byki-green-light">One-time purchase</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">2 Years</div>
                <div className="text-sm text-byki-green-light">Warranty included</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">Free</div>
                <div className="text-sm text-byki-green-light">Shipping nationwide</div>
              </div>
            </div>
            <p className="text-sm text-byki-green-light">
              30-day money-back guarantee • 24/7 support
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
