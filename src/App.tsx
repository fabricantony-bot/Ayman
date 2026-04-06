import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import { 
  ArrowRight, 
  Globe, 
  Video, 
  Instagram, 
  Search, 
  Palette, 
  MapPin, 
  MessageSquare, 
  Mail, 
  Smartphone, 
  CheckCircle2, 
  Star,
  TrendingUp,
  Phone,
  Plus,
  Minus,
  Zap,
  Rocket,
  Target,
  BarChart3,
  Menu,
  X
} from "lucide-react";

const WHATSAPP_MESSAGE = encodeURIComponent("مرحبًا، رأيت موقعكم وأرغب في معرفة المزيد عن خدمات إنشاء المواقع وفيديوهات الذكاء الاصطناعي (UGC). هل يمكن إرسال التفاصيل والأسعار؟");

// --- Components ---

const IntroSplash = ({ onComplete }: { onComplete: () => void; key?: string }) => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black"
    >
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        onAnimationComplete={() => {
          setTimeout(onComplete, 2000);
        }}
        className="text-4xl md:text-7xl font-display font-bold text-white tracking-[0.2em]"
      >
        ANFAGLOBAL
      </motion.h1>
    </motion.div>
  );
};

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "About Us", href: "/about" },
    { name: "Contact Us", href: "/contact" }
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-6 left-1/2 -translate-x-1/2 z-40 w-[90%] max-w-5xl px-6 py-4 rounded-full transition-all duration-300 ${
          isScrolled || isMobileMenuOpen ? "glass shadow-lg" : "bg-transparent"
        }`}
      >
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <img 
              src="https://i.postimg.cc/BZxDmKtF/Untitled-design-38.png" 
              alt="AnfaGlobal Logo" 
              className="h-10 w-auto"
              referrerPolicy="no-referrer"
            />
          </Link>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            {navLinks.map((item) => (
              <Link 
                key={item.name} 
                to={item.href} 
                className={`hover:text-accent transition-colors uppercase tracking-wider ${
                  location.pathname === item.href ? "text-accent font-bold" : ""
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <a 
              href={`https://wa.me/33644654541?text=${WHATSAPP_MESSAGE}`} 
              target="_blank" 
              rel="noopener noreferrer"
              className="hidden sm:block bg-black text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-accent transition-all duration-300"
            >
              Free Business Audit
            </a>

            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-black hover:text-accent transition-colors"
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-24 left-1/2 -translate-x-1/2 z-30 w-[90%] max-w-5xl glass rounded-3xl p-8 shadow-2xl md:hidden"
          >
            <div className="flex flex-col gap-6 items-center">
              {navLinks.map((item) => (
                <Link 
                  key={item.name} 
                  to={item.href} 
                  className={`text-xl uppercase tracking-widest font-bold hover:text-accent transition-colors ${
                    location.pathname === item.href ? "text-accent" : "text-black"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <a 
                href={`https://wa.me/33644654541?text=${WHATSAPP_MESSAGE}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full text-center bg-black text-white py-4 rounded-2xl font-bold hover:bg-accent transition-all"
              >
                Free Business Audit
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const PremiumBackground = () => {
  useEffect(() => {
    const container = document.getElementById('premium-bg-container');
    if (!container) return;

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const x = (clientX / window.innerWidth) * 100;
      const y = (clientY / window.innerHeight) * 100;
      
      container.style.setProperty('--mouse-x', `${x}%`);
      container.style.setProperty('--mouse-y', `${y}%`);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div id="premium-bg-container" className="premium-bg-container">
      {/* Animated Blobs */}
      <div className="premium-bg-blob bg-purple-400 w-[500px] h-[500px] -top-[10%] -left-[10%] animate-[float_25s_infinite_ease-in-out]" />
      <div className="premium-bg-blob bg-blue-400 w-[600px] h-[600px] top-[20%] -right-[10%] animate-[float_30s_infinite_ease-in-out_reverse]" />
      <div className="premium-bg-blob bg-emerald-300 w-[450px] h-[450px] -bottom-[10%] left-[20%] animate-[float_22s_infinite_ease-in-out_delay-2000]" />
      
      {/* Interactive Mouse Blob */}
      <div 
        className="absolute w-[400px] h-[400px] rounded-full bg-accent/20 filter blur-[100px] mix-blend-multiply pointer-events-none transition-all duration-500 ease-out"
        style={{
          left: 'var(--mouse-x, 50%)',
          top: 'var(--mouse-y, 50%)',
          transform: 'translate(-50%, -50%)'
        }}
      />

      {/* Overlays */}
      <div className="premium-bg-glass" />
      <div className="premium-bg-noise" />
    </div>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <PremiumBackground />
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-display font-extrabold leading-[1.1] mb-6">
            Turn Your <span className="text-accent">Online Presence</span> Into a Customer Generating Machine
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-lg">
            We help businesses grow through high-converting websites, AI-powered video ads, and performance-driven marketing strategies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href={`https://wa.me/33644654541?text=${WHATSAPP_MESSAGE}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black text-white px-8 py-4 rounded-full font-semibold flex items-center justify-center gap-2 hover:bg-accent transition-all group"
            >
              Get Free Audit <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href={`https://wa.me/33644654541?text=${WHATSAPP_MESSAGE}`}
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-black px-8 py-4 rounded-full font-semibold flex items-center justify-center gap-2 hover:bg-black hover:text-white transition-all"
            >
              Chat on WhatsApp
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative aspect-square md:aspect-auto md:h-[600px] rounded-3xl overflow-hidden bg-gray-100"
        >
          <img 
            src="https://i.postimg.cc/pdYPnRqc/Hero-Banner-Img1-Jim-Fahad-Digital.png" 
            alt="AnfaGlobal Digital Growth"
            className="w-full h-full object-contain"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-linear-to-tr from-accent/20 to-transparent" />
          
          <motion.div 
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-10 right-10 z-10"
          >
            <img 
              src="https://i.postimg.cc/NMzSKnqx/Feature1-Img2-Jim-Fahad-Digital.png" 
              alt="Growth Graphic 1" 
              className="w-32 h-auto drop-shadow-2xl"
              referrerPolicy="no-referrer"
            />
          </motion.div>

          <motion.div 
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-10 left-10 z-10"
          >
            <img 
              src="https://i.postimg.cc/6pKW68hY/Feature1-Img3-Jim-Fahad-Digital.png" 
              alt="Growth Graphic 2" 
              className="w-32 h-auto drop-shadow-2xl"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    { icon: Globe, title: "Website & Online Store", desc: "High-performance websites designed to convert visitors into loyal customers." },
    { icon: Video, title: "AI UGC Video Ads", desc: "Authentic, AI-enhanced user-generated content that stops the scroll." },
    { icon: Instagram, title: "Social Ads Management", desc: "Strategic Facebook & Instagram campaigns that maximize your ad spend." },
    { icon: Search, title: "SEO Optimization", desc: "Rank higher on Google and drive organic traffic that actually converts." },
    { icon: Palette, title: "Logo & Branding", desc: "Modern visual identities that make your business stand out in the market." },
    { icon: MapPin, title: "Google Maps Optimization", desc: "Get found by local customers exactly when they need your services." },
    { icon: Smartphone, title: "Short-Form Content", desc: "Viral-ready Reels and TikToks designed for maximum engagement." },
    { icon: MessageSquare, title: "WhatsApp Automation", desc: "Scale your sales with automated customer interactions and lead nurturing." },
  ];

  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-accent font-bold tracking-widest text-sm uppercase"
          >
            Our Expertise
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mt-4">Services Built for Growth</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-3xl border border-gray-100 hover:shadow-2xl hover:shadow-accent/5 transition-all group"
            >
              <div className="w-14 h-14 rounded-2xl bg-gray-50 flex items-center justify-center mb-6 group-hover:bg-accent group-hover:text-white transition-colors">
                <service.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const HowItWorks = () => {
  const steps = [
    { title: "Free Business Audit", desc: "We analyze your current digital presence and identify growth opportunities." },
    { title: "Strategy & Planning", desc: "We create a custom roadmap tailored to your specific business goals." },
    { title: "Content & Campaigns", desc: "Our creative team builds high-converting ads and optimized websites." },
    { title: "Growth & Optimization", desc: "We continuously monitor and refine results to ensure maximum ROI." },
  ];

  return (
    <section id="about" className="py-24">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/3">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">How We Scale Your Business</h2>
            <p className="text-gray-600">A proven, data-driven process designed to deliver consistent results for modern brands.</p>
          </div>
          
          <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative pl-12">
                <div className="absolute left-0 top-0 w-8 h-8 rounded-full bg-black text-white flex items-center justify-center font-bold text-sm">
                  {index + 1}
                </div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-gray-500 text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Stats = () => {
  const stats = [
    { label: "Successful Projects Delivered", value: "+30" },
    { label: "Average Client Growth", value: "+300%" },
    { label: "Websites & Stores Created", value: "+20" },
    { label: "Client Satisfaction Rate", value: "98%" },
  ];

  return (
    <section className="py-20 border-y border-gray-100">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
          {stats.map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-4xl md:text-6xl font-display font-extrabold mb-2">{stat.value}</div>
              <div className="text-gray-500 text-sm font-medium uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const reviews = [
    { name: "Yassine B.", business: "Luxury Spa Casablanca", text: "AnfaGlobal transformed our online booking system. Our revenue increased by 40% in just three months." },
    { name: "Sara M.", business: "Beauty Salon Marrakech", text: "The AI video ads they created for us went viral locally. We've never had so many new clients walk in." },
    { name: "Amine K.", business: "Motorcycle Store Tangier", text: "Professional, creative, and results-oriented. They handled our branding and Google Maps perfectly." },
  ];

  return (
    <section id="testimonials" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold">Trusted by Local Leaders</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <div key={i} className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100">
              <div className="flex gap-1 mb-6">
                {[1, 2, 3, 4, 5].map((s) => <Star key={s} className="w-4 h-4 fill-accent text-accent" />)}
              </div>
              <p className="text-gray-600 mb-8 italic">"{review.text}"</p>
              <div>
                <div className="font-bold text-lg">{review.name}</div>
                <div className="text-accent text-sm">{review.business}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ProcessSection = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-white">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-accent/5 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-accent/5 blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          {/* Left Side: Image Collage */}
          <div className="w-full lg:w-1/2 relative">
            <div className="relative w-full aspect-square max-w-[500px] mx-auto">
              {/* Main Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                whileHover={{ y: -10 }}
                className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl shadow-black/10"
              >
                <img
                  src="https://i.postimg.cc/x8GZ61b8/Feature1-Img1-Jim-Fahad-Digital.png"
                  alt="Our Process Main"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </motion.div>

              {/* Overlapping Image 1 (Top Right) */}
              <motion.div
                initial={{ opacity: 0, x: 40, y: -40 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                whileHover={{ y: -15, x: 5 }}
                className="absolute -top-10 -right-10 z-20 w-[45%] rounded-3xl overflow-hidden shadow-2xl shadow-black/10 border-4 border-white"
              >
                <img
                  src="https://i.postimg.cc/NMzSKnqx/Feature1-Img2-Jim-Fahad-Digital.png"
                  alt="Process Detail 1"
                  className="w-full h-auto"
                  referrerPolicy="no-referrer"
                />
              </motion.div>

              {/* Overlapping Image 2 (Bottom Left) */}
              <motion.div
                initial={{ opacity: 0, x: -40, y: 40 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                whileHover={{ y: 15, x: -5 }}
                className="absolute -bottom-10 -left-10 z-20 w-[45%] rounded-3xl overflow-hidden shadow-2xl shadow-black/10 border-4 border-white"
              >
                <img
                  src="https://i.postimg.cc/6pKW68hY/Feature1-Img3-Jim-Fahad-Digital.png"
                  alt="Process Detail 2"
                  className="w-full h-auto"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            </div>
          </div>

          {/* Right Side: Text Content */}
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block text-accent font-bold tracking-widest text-sm uppercase mb-4 px-4 py-1.5 bg-accent/5 rounded-full">
                Our Process
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight mb-8">
                From Strategy to Execution, We <span className="text-accent">Grow Your Business</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-xl">
                From planning to execution, we help your business attract more customers, increase conversions, and scale with proven digital marketing strategies.
              </p>
              <div className="flex items-center gap-3 text-gray-500 font-medium">
                <div className="w-8 h-[2px] bg-accent/30" />
                <p className="text-sm italic">We focus on performance, creativity, and measurable results.</p>
              </div>
              
              <Link 
                to="/about"
                className="inline-block mt-10 bg-black text-white px-10 py-4 rounded-full font-bold hover:bg-accent transition-all shadow-xl shadow-black/5"
              >
                Learn More About Us
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ReviewSection = () => {
  return (
    <section className="py-24 bg-[#f9fafb]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          {/* Left Side: Content Area */}
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-display font-bold leading-tight mb-6">
                We Review and Improve Your Business Every Week
              </h2>
              <p className="text-lg text-gray-500 mb-10 leading-relaxed">
                We don't just set it and forget it. Our team continuously monitors your performance, making data-driven adjustments to ensure you're always ahead of the competition.
              </p>

              <div className="space-y-6">
                {[
                  "Weekly performance reviews and strategy discussions",
                  "Campaign optimization based on real data",
                  "Clear communication and progress updates"
                ].map((feature, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-6 h-6 rounded-full bg-yellow-400 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-gray-700 font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Side: Visual Card */}
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="bg-white rounded-[2rem] overflow-hidden shadow-2xl border border-gray-100 relative">
                {/* Header / REC Indicator */}
                <div className="absolute top-4 left-6 z-20 flex items-center gap-3">
                  <div className="flex items-center gap-2 bg-black/50 backdrop-blur-md px-3 py-1 rounded-full">
                    <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                    <span className="text-[10px] font-bold text-white uppercase tracking-wider">REC</span>
                    <span className="text-[10px] text-white/80 font-mono">00:42:15</span>
                  </div>
                </div>

                {/* Main Visual */}
                <div className="aspect-video relative bg-gray-100">
                  <img 
                    src="https://i.postimg.cc/qvqm3LQd/Feature2-Img1-Jim-Fahad-Digital.png" 
                    alt="Weekly Review Meeting" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Floating Bubbles */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-1/4 -right-8 z-30 w-32 md:w-40"
                >
                  <img 
                    src="https://i.postimg.cc/t4cBtxmn/Feature2-Img2-Jim-Fahad-Digital.png" 
                    alt="Chat Bubble 1" 
                    className="w-full h-auto drop-shadow-xl"
                    referrerPolicy="no-referrer"
                  />
                </motion.div>

                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  className="absolute bottom-1/4 -left-8 z-30 w-32 md:w-40"
                >
                  <img 
                    src="https://i.postimg.cc/GpsqMmZG/Feature3-Img3-Jim-Fahad-Digital.png" 
                    alt="Chat Bubble 2" 
                    className="w-full h-auto drop-shadow-xl"
                    referrerPolicy="no-referrer"
                  />
                </motion.div>

                {/* Bottom Message Bar */}
                <div className="p-4 bg-white border-t border-gray-100 flex items-center gap-3">
                  <div className="flex-1 h-10 bg-gray-50 rounded-full px-4 flex items-center text-gray-400 text-sm">
                    Type a message...
                  </div>
                  <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center text-white shadow-lg shadow-accent/20">
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </div>
              </div>
              
              {/* Background Glow */}
              <div className="absolute -z-10 inset-0 bg-accent/10 blur-[100px] rounded-full scale-110" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What services does Anfa Digital offer?",
      answer: "We help businesses grow online through professional website creation, AI UGC video ads, SEO optimization, and Facebook & Instagram advertising management — all focused on generating more customers."
    },
    {
      question: "What is included in the Free Business Audit?",
      answer: "We analyze your current online presence, marketing strategy, and growth opportunities. You’ll receive clear recommendations on how to attract more customers online — completely free and without obligation."
    },
    {
      question: "How long does it take to see results?",
      answer: "Paid advertising campaigns can start generating leads within weeks, while SEO and website optimization typically show stronger results over several months as growth builds consistently."
    },
    {
      question: "Do I need marketing experience to work with you?",
      answer: "Not at all. We handle strategy, setup, and optimization while keeping everything simple and transparent for you."
    },
    {
      question: "Will we communicate regularly?",
      answer: "Yes. We provide ongoing support and regular discussions to review performance, improve campaigns, and plan the next steps for your business growth."
    },
    {
      question: "Can you work with any type of business?",
      answer: "Yes. We work with service businesses, local companies, startups, and growing brands looking to attract more customers online."
    },
    {
      question: "How do I get started?",
      answer: "Simply request your Free Business Audit by filling out the form or contacting us on WhatsApp. We’ll guide you through the next steps."
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-accent font-bold tracking-widest text-sm uppercase"
          >
            Got Questions?
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mt-4">Frequently Asked Questions</h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="border border-gray-100 rounded-3xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 md:p-8 text-left hover:bg-gray-50 transition-colors"
              >
                <span className="text-lg md:text-xl font-bold pr-8">{faq.question}</span>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${openIndex === index ? 'bg-accent text-white rotate-180' : 'bg-gray-100 text-gray-500'}`}>
                  {openIndex === index ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                </div>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-6 md:px-8 pb-8 text-gray-600 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const WhatsAppButton = () => {
  return (
    <motion.a
      href={`https://wa.me/33644654541?text=${WHATSAPP_MESSAGE}`}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      className="fixed bottom-8 right-8 z-40 w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl shadow-green-500/30"
    >
      <Phone className="w-8 h-8" />
    </motion.a>
  );
};

const Footer = () => {
  return (
    <footer id="contact" className="bg-white pt-24 pb-12 border-t border-gray-100">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="mb-6">
              <img 
                src="https://i.postimg.cc/BZxDmKtF/Untitled-design-38.png" 
                alt="AnfaGlobal Logo" 
                className="h-12 w-auto"
                referrerPolicy="no-referrer"
              />
            </div>
            <p className="text-gray-500 text-sm leading-relaxed">
              Empowering modern businesses with futuristic digital marketing solutions. Based in Casablanca, serving the world.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-6">Services</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><a href="#" className="hover:text-accent">Web Development</a></li>
              <li><a href="#" className="hover:text-accent">AI Video Ads</a></li>
              <li><a href="#" className="hover:text-accent">Social Media Ads</a></li>
              <li><a href="#" className="hover:text-accent">SEO Optimization</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6">Contact</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li className="flex items-center gap-2"><Mail className="w-4 h-4" /> support.anfaglobal@proton.me</li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4" /> 
                <a href={`https://wa.me/33644654541?text=${WHATSAPP_MESSAGE}`} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                  +33 6 44 65 45 41
                </a>
              </li>
              <li className="flex items-center gap-2"><MapPin className="w-4 h-4" /> Casablanca, Morocco</li>
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-100 gap-4">
          <p className="text-xs text-gray-400">© {new Date().getFullYear()} AnfaGlobal. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="https://www.instagram.com/anfaglobal.ma/" target="_blank" rel="noopener noreferrer">
              <Instagram className="w-5 h-5 text-gray-400 hover:text-accent cursor-pointer" />
            </a>
            <a href="https://www.tiktok.com/@bashitoken" target="_blank" rel="noopener noreferrer">
              <svg 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className="w-5 h-5 text-gray-400 hover:text-accent cursor-pointer"
              >
                <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const ServicesPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const detailedServices = [
    {
      icon: Globe,
      title: "Conversion-First Websites",
      desc: "We don't just build websites; we build sales machines. Every pixel is optimized for user experience and conversion rate.",
      features: ["Custom UI/UX Design", "Mobile-First Approach", "Speed Optimization", "E-commerce Integration"],
      color: "bg-blue-500"
    },
    {
      icon: Video,
      title: "AI-Powered UGC Ads",
      desc: "Leverage the power of AI to create authentic, high-converting video content that speaks directly to your audience's needs.",
      features: ["AI Script Generation", "UGC Style Production", "Viral Hook Testing", "Multi-Platform Formatting"],
      color: "bg-purple-500"
    },
    {
      icon: Target,
      title: "Precision Social Ads",
      desc: "Stop wasting ad spend. We use advanced targeting and creative testing to find your most profitable customers on FB & IG.",
      features: ["Audience Research", "A/B Creative Testing", "Retargeting Funnels", "Daily ROI Monitoring"],
      color: "bg-pink-500"
    },
    {
      icon: Search,
      title: "Organic Growth (SEO)",
      desc: "Dominate search results and build long-term authority. We focus on keywords that actually drive revenue, not just traffic.",
      features: ["Technical SEO Audit", "Content Strategy", "Backlink Building", "Local SEO Domination"],
      color: "bg-emerald-500"
    },
    {
      icon: Zap,
      title: "WhatsApp Sales Funnels",
      desc: "Turn conversations into conversions. We automate your lead nurturing and sales process directly within WhatsApp.",
      features: ["Chatbot Automation", "Broadcast Campaigns", "CRM Integration", "Instant Lead Response"],
      color: "bg-green-500"
    },
    {
      icon: BarChart3,
      title: "Data & Analytics",
      desc: "Know exactly where every dollar goes. We provide transparent, real-time reporting on your business growth metrics.",
      features: ["Custom Dashboards", "Conversion Tracking", "Competitor Analysis", "Growth Forecasting"],
      color: "bg-orange-500"
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-32 pb-24 bg-[#050505] text-white overflow-hidden relative"
    >
      {/* Animated Background for Services Page */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-accent/10 blur-[150px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-blue-500/10 blur-[150px] animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block text-accent font-bold tracking-widest text-sm uppercase mb-4 px-4 py-1.5 bg-accent/10 rounded-full">
              Our Solutions
            </span>
            <h1 className="text-5xl md:text-7xl font-display font-bold leading-tight mb-8">
              Digital Strategies <br />
              <span className="text-gradient">Engineered for Scale</span>
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed">
              We combine cutting-edge technology with creative excellence to deliver marketing solutions that don't just look good—they perform.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {detailedServices.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative p-8 rounded-[2.5rem] bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-500"
            >
              <div className={`w-16 h-16 rounded-2xl ${service.color} flex items-center justify-center mb-8 shadow-lg shadow-black/20 group-hover:scale-110 transition-transform duration-500`}>
                <service.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold mb-4 group-hover:text-accent transition-colors">{service.title}</h3>
              <p className="text-gray-400 mb-8 leading-relaxed">
                {service.desc}
              </p>
              
              <ul className="space-y-3">
                {service.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-center gap-3 text-sm text-gray-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Hover Glow Effect */}
              <div className={`absolute inset-0 -z-10 bg-gradient-to-br ${service.color}/20 opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-500 rounded-[2.5rem]`} />
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-32 p-12 rounded-[3rem] bg-linear-to-r from-accent to-purple-600 text-center relative overflow-hidden"
        >
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">Ready to dominate your market?</h2>
            <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto">
              Join 100+ businesses that have scaled their revenue with AnfaGlobal's digital growth engine.
            </p>
            <a 
              href={`https://wa.me/33644654541?text=${WHATSAPP_MESSAGE}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-black px-10 py-4 rounded-full font-bold hover:bg-black hover:text-white transition-all shadow-2xl"
            >
              Book Your Free Strategy Call
            </a>
          </div>
          
          {/* Decorative shapes for CTA */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />
        </motion.div>
      </div>
    </motion.div>
  );
};

const AboutPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-32 pb-24 bg-white text-black overflow-hidden relative"
    >
      <div className="container mx-auto px-6 relative z-10">
        {/* Our History Section */}
        <div className="flex flex-col lg:flex-row gap-16 items-center mb-32">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2"
          >
            <span className="inline-block text-accent font-bold tracking-widest text-sm uppercase mb-4 px-4 py-1.5 bg-accent/10 rounded-full">
              Our Journey
            </span>
            <h1 className="text-5xl md:text-6xl font-display font-bold leading-tight mb-8">
              Our History
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              We started with a simple goal — to help businesses grow online with powerful and affordable digital solutions. Our team first met while studying at a digital marketing university, where we developed strong skills in websites, advertising, and content creation.
            </p>
            <p className="text-xl text-gray-600 leading-relaxed">
              Over time, we combined our expertise to work with different brands, delivering strategies that drive real results. Today, we continue to focus on innovation, performance, and helping our clients succeed in the digital world.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 relative"
          >
            <div className="relative rounded-[3rem] overflow-hidden shadow-2xl">
              <img 
                src="https://i.postimg.cc/SxVfDzTG/eviews-2-1024x1024.png" 
                alt="About AnfaGlobal" 
                className="w-full h-auto object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-accent/20 rounded-full blur-3xl -z-10" />
            <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl -z-10" />
          </motion.div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
          {[
            { title: "Proven Digital Strategies", icon: Target, desc: "Strategies that have been tested and proven to work across various industries." },
            { title: "All-in-One Services", icon: Zap, desc: "From design to execution, we handle everything your business needs to grow." },
            { title: "Focused on Your Success", icon: Star, desc: "Your growth is our priority. We work as an extension of your team." }
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="p-10 rounded-[2.5rem] bg-gray-50 border border-gray-100 hover:shadow-xl transition-all duration-500"
            >
              <div className="w-14 h-14 rounded-2xl bg-accent flex items-center justify-center mb-6 shadow-lg shadow-accent/20">
                <feature.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
              <p className="text-gray-500 leading-relaxed">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* How We Work Section */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-black text-white p-12 md:p-20 rounded-[4rem] relative overflow-hidden"
        >
          <div className="max-w-3xl relative z-10">
            <span className="inline-block text-accent font-bold tracking-widest text-sm uppercase mb-6">
              Our Methodology
            </span>
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-8">How We Work?</h2>
            <p className="text-xl text-gray-400 leading-relaxed mb-10">
              Our process is simple, transparent, and focused on results. We take the time to understand your business, create a tailored strategy, and execute it with precision to help you grow faster and achieve your goals.
            </p>
            <div className="flex flex-wrap gap-6">
              <a 
                href={`https://wa.me/33644654541?text=${WHATSAPP_MESSAGE}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-accent text-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-black transition-all"
              >
                Start Your Project
              </a>
            </div>
          </div>
          
          {/* Abstract background elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full translate-x-1/3 -translate-y-1/3 blur-[100px]" />
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full translate-x-1/4 translate-y-1/4 blur-[80px]" />
        </motion.div>
      </div>
    </motion.div>
  );
};

const ContactPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-32 pb-24 bg-[#050505] text-white overflow-hidden relative"
    >
      {/* Background Glows */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[60%] h-[60%] rounded-full bg-accent/10 blur-[150px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[60%] h-[60%] rounded-full bg-blue-500/10 blur-[150px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* About Section in Contact Page */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block text-accent font-bold tracking-widest text-sm uppercase mb-6 px-4 py-1.5 bg-accent/10 rounded-full">
              Get in Touch
            </span>
            <h1 className="text-5xl md:text-7xl font-display font-bold leading-tight mb-8">
              Let's Build Your <br />
              <span className="text-gradient">Digital Future</span>
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed mb-12 max-w-xl">
              AnfaGlobal is more than just a marketing agency. We are your partners in growth, combining technical precision with creative vision to scale your business to new heights.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-accent transition-all duration-300">
                  <Mail className="w-6 h-6 text-accent group-hover:text-white" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-1">Email Us</h4>
                  <p className="text-2xl font-bold">support.anfaglobal@proton.me</p>
                </div>
              </div>

              <a 
                href={`https://wa.me/33644654541?text=${WHATSAPP_MESSAGE}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-6 group"
              >
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-accent transition-all duration-300">
                  <Phone className="w-6 h-6 text-accent group-hover:text-white" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-1">Call Us</h4>
                  <p className="text-2xl font-bold">+33 6 44 65 45 41</p>
                </div>
              </a>

              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-accent transition-all duration-300">
                  <MapPin className="w-6 h-6 text-accent group-hover:text-white" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-1">Location</h4>
                  <p className="text-2xl font-bold">Casablanca, Morocco</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Visual Element / Form Placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-[3rem] overflow-hidden border border-white/10 bg-white/5 p-2">
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1000" 
                alt="Team working" 
                className="w-full h-[600px] object-cover rounded-[2.5rem] opacity-60"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent" />
              
              <div className="absolute bottom-12 left-12 right-12">
                <div className="glass p-8 rounded-3xl border border-white/10">
                  <h3 className="text-2xl font-bold mb-4">Why AnfaGlobal?</h3>
                  <p className="text-gray-300 leading-relaxed">
                    We don't just deliver services; we deliver results. Our data-driven approach ensures that every campaign we run and every website we build is optimized for maximum ROI.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

const HomePage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Hero />
      <Services />
      <ProcessSection />
      <ReviewSection />
      <HowItWorks />
      <Stats />
      <Testimonials />
      <FAQ />
    </motion.div>
  );
};

// --- Main App ---

export default function App() {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <Router>
      <div className="relative">
        <AnimatePresence mode="wait">
          {showSplash && <IntroSplash key="splash" onComplete={() => setShowSplash(false)} />}
        </AnimatePresence>

        {!showSplash && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <Navbar />
            <AnimatePresence mode="wait">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/services" element={<ServicesPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/contact" element={<ContactPage />} />
              </Routes>
            </AnimatePresence>
            <Footer />
            <WhatsAppButton />
          </motion.div>
        )}
      </div>
    </Router>
  );
}
