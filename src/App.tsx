import { motion } from "motion/react";
import { 
  Heart, 
  Gift, 
  Users, 
  CreditCard,
  Mail,
  MapPin,
  Instagram, 
  Facebook, 
  Phone, 
  ChevronLeft, 
  Shirt, 
  Wallet 
} from "lucide-react";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-purple-100">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary-purple rounded-full flex items-center justify-center text-white shadow-lg">
              <Heart className="w-6 h-6 fill-current" />
            </div>
            <span className="text-2xl font-bold text-dark-purple">فرحة</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-dark-purple font-semibold">
            <a href="#about" className="hover:text-primary-purple transition-colors">عن المبادرة</a>
            <a href="#how-to-help" className="hover:text-primary-purple transition-colors">كيف تساعد؟</a>
            <a href="#gallery" className="hover:text-primary-purple transition-colors">الصور</a>
            <a href="#contact" className="hover:text-primary-purple transition-colors">اتصل بنا</a>
          </div>
          <a 
            href="#how-to-help" 
            className="bg-primary-purple text-white px-6 py-2 rounded-full font-bold hover:bg-dark-purple transition-all shadow-md hover:shadow-lg"
          >
            تبرع الآن
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-40 overflow-hidden geometric-pattern">
        {/* Overlay for better readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-dark-purple/80 via-dark-purple/60 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-6xl md:text-9xl font-black text-white mb-8 drop-shadow-[0_5px_15px_rgba(0,0,0,0.3)] tracking-tight"
            >
              فرحة العيد 4
            </motion.h1>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="inline-block"
            >
              <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-10 bg-white/10 backdrop-blur-md px-8 py-4 rounded-2xl border border-white/20 shadow-2xl">
                كون سبب في فرحة <span className="text-purple-200">صغير محتاج</span>
              </h2>
            </motion.div>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="max-w-2xl mx-auto text-xl md:text-2xl text-purple-100 mb-14 font-medium leading-relaxed drop-shadow-md"
            >
              "ساهم معنا في إدخال السرور على قلوب الأطفال والعائلات المحتاجة في هذا العيد. تبرعك يصنع فرقاً حقيقياً."
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            >
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)" }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto bg-white text-dark-purple px-12 py-5 rounded-2xl text-2xl font-black shadow-2xl transition-all"
              >
                تبرع الآن
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto bg-transparent text-white border-2 border-white/40 px-12 py-5 rounded-2xl text-2xl font-black backdrop-blur-sm transition-all"
              >
                انضم كمتطوع
              </motion.button>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Wave/Curve */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] translate-y-px">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-[calc(100%+1.3px)] h-[60px] fill-white">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
          </svg>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-block px-4 py-1 bg-purple-100 text-primary-purple rounded-full text-sm font-bold mb-4">
                عن المبادرة
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-dark-purple mb-6">
                نحن هنا لنرسم البسمة
              </h3>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                مبادرة "فرحة العيد" هي حملة تطوعية تهدف لمساعدة العائلات والأطفال الأقل حظاً في مجتمعنا. نحن نؤمن أن العيد لا يكتمل إلا بمشاركة الفرحة مع الجميع.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                نقوم بتوفير الملابس الجديدة، الطرود الغذائية، وهدايا العيد للأطفال، لنضمن أن كل منزل يشعر ببهجة العيد ودفء التكافل الاجتماعي.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://picsum.photos/seed/eid-joy/800/800" 
                  alt="Eid Joy" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-primary-purple text-white p-8 rounded-2xl shadow-xl hidden md:block">
                <p className="text-4xl font-bold mb-1">+500</p>
                <p className="text-sm font-semibold opacity-80">عائلة مستفيدة</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How to Help Section */}
      <section id="how-to-help" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h3 className="text-3xl md:text-4xl font-bold text-dark-purple mb-4">
              كيف يمكنك المساعدة؟
            </h3>
            <p className="text-slate-600 max-w-xl mx-auto">
              هناك طرق عديدة لتكون جزءاً من هذا الخير، اختر ما يناسبك وساهم في التغيير.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "التبرع بالمال",
                desc: "مساهمتك المالية تساعدنا في شراء ملابس جديدة وهدايا للأطفال.",
                icon: <Wallet className="w-10 h-10" />,
                color: "bg-blue-50 text-blue-600"
              },
              {
                title: "التبرع بالملابس",
                desc: "نستقبل الملابس الجديدة والمستعملة بحالة جيدة لتوزيعها على المحتاجين.",
                icon: <Shirt className="w-10 h-10" />,
                color: "bg-emerald-50 text-emerald-600"
              },
              {
                title: "التطوع معنا",
                desc: "انضم لفريقنا الميداني وساعدنا في تنظيم وتوزيع المساعدات.",
                icon: <Users className="w-10 h-10" />,
                color: "bg-purple-50 text-primary-purple"
              }
            ].map((card, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all text-center border border-slate-100"
              >
                <div className={`w-20 h-20 ${card.color} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-inner`}>
                  {card.icon}
                </div>
                <h4 className="text-xl font-bold text-dark-purple mb-4">{card.title}</h4>
                <p className="text-slate-500 leading-relaxed">
                  {card.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold text-dark-purple mb-4">
                صور من الحملة
              </h3>
              <p className="text-slate-600">لحظات من السعادة والعطاء في حملاتنا السابقة.</p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.02 }}
                className={`rounded-2xl overflow-hidden shadow-md bg-slate-100 ${
                  i === 1 || i === 6 ? "col-span-2 row-span-2" : ""
                }`}
              >
                <img 
                  src={`https://picsum.photos/seed/eid-gallery-${i}/600/600`} 
                  alt={`Gallery ${i}`} 
                  className="w-full h-full object-cover aspect-square"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-[#0a051a] text-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary-purple rounded-full blur-[120px]"></div>
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-dark-purple rounded-full blur-[120px]"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
            <div className="max-w-xl">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h3 className="text-4xl md:text-5xl font-black mb-6 bg-gradient-to-l from-white to-purple-300 bg-clip-text text-transparent">
                  تواصل معنا
                </h3>
                <p className="text-xl text-purple-200/80 leading-relaxed">
                  نحن هنا للإجابة على استفساراتكم وتنسيق التبرعات. كل رسالة منكم هي خطوة نحو سعادة طفل.
                </p>
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="hidden md:block"
            >
              <div className="w-24 h-24 border-2 border-white/10 rounded-full flex items-center justify-center animate-pulse">
                <Heart className="w-10 h-10 text-primary-purple fill-primary-purple" />
              </div>
            </motion.div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Social Cards */}
            <a 
              href="https://www.instagram.com/isgs_microsoft_club?fbclid=IwY2xjawQPd31leHRuA2FlbQIxMABicmlkETFkVThUQ3hCemYxSm5QZ1FVc3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHj273TPmVkW-_XyVQhNgUikbJfbrZdsqWB07Mo1FDspe8SwpO9UQqlNuV0uK_aem_NlyHOU1Qf6qNYsduHlhckg" 
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center justify-center p-8 bg-white/5 backdrop-blur-xl rounded-[2.5rem] border border-white/10 hover:bg-white/10 transition-all duration-500 hover:border-primary-purple/50"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Instagram className="w-7 h-7 text-white" />
              </div>
              <span className="text-sm font-medium text-purple-200 mb-1">Instagram</span>
              <span className="text-base font-bold">@isgs_microsoft_club</span>
            </a>

            <a 
              href="https://www.facebook.com/ISGsMicrosoftNET1"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center justify-center p-8 bg-white/5 backdrop-blur-xl rounded-[2.5rem] border border-white/10 hover:bg-white/10 transition-all duration-500 hover:border-primary-purple/50"
            >
              <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Facebook className="w-7 h-7 text-white" />
              </div>
              <span className="text-sm font-medium text-purple-200 mb-1">Facebook</span>
              <span className="text-base font-bold">ISGS Microsoft</span>
            </a>

            <a 
              href="mailto:isgsmicrosoftclub@gmail.com"
              className="group flex flex-col items-center justify-center p-8 bg-white/5 backdrop-blur-xl rounded-[2.5rem] border border-white/10 hover:bg-white/10 transition-all duration-500 hover:border-primary-purple/50"
            >
              <div className="w-14 h-14 bg-slate-700 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Mail className="w-7 h-7 text-white" />
              </div>
              <span className="text-sm font-medium text-purple-200 mb-1">Email</span>
              <span className="text-sm font-bold truncate max-w-full px-2">isgsmicrosoftclub@gmail.com</span>
            </a>

            <a 
              href="tel:29787599"
              className="group flex flex-col items-center justify-center p-8 bg-primary-purple/20 backdrop-blur-xl rounded-[2.5rem] border border-primary-purple/30 hover:bg-primary-purple/30 transition-all duration-500"
            >
              <div className="w-14 h-14 bg-primary-purple rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg shadow-primary-purple/20">
                <Wallet className="w-7 h-7 text-white" />
              </div>
              <span className="text-sm font-medium text-purple-200 mb-1">D17 Donation</span>
              <span className="text-xl font-black tracking-wider" dir="ltr">29787599</span>
            </a>

            {/* Location - Full width on small, 2 columns on large */}
            <div className="sm:col-span-2 lg:col-span-4 flex flex-col md:flex-row items-center gap-6 p-8 bg-white/5 backdrop-blur-xl rounded-[2.5rem] border border-white/10 mt-4">
              <div className="w-16 h-16 bg-emerald-500/20 rounded-2xl flex items-center justify-center shrink-0">
                <MapPin className="w-8 h-8 text-emerald-400" />
              </div>
              <div className="text-center md:text-right">
                <h4 className="text-lg font-bold mb-1">موقعنا</h4>
                <p className="text-purple-200/70 text-base">
                  ISG de Sousse, rue Abdlaaziz il Behi. Bp 763., 4000
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#05020a] py-16 text-center relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col items-center gap-8">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-primary-purple rounded-2xl flex items-center justify-center text-white shadow-xl shadow-primary-purple/20">
                <Heart className="w-7 h-7 fill-current" />
              </div>
              <span className="text-3xl font-black text-white tracking-tighter">فرحة</span>
            </div>
            
            <nav className="flex flex-wrap justify-center gap-x-12 gap-y-4 text-purple-200/60 font-medium">
              <a href="#about" className="hover:text-white transition-colors">عن المبادرة</a>
              <a href="#how-to-help" className="hover:text-white transition-colors">كيف تساعد؟</a>
              <a href="#gallery" className="hover:text-white transition-colors">الصور</a>
              <a href="#contact" className="hover:text-white transition-colors">اتصل بنا</a>
            </nav>

            <div className="w-full max-w-md h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

            <div className="flex flex-col gap-2">
              <p className="text-purple-200/40 text-sm font-medium">
                © 2026 ISGS Microsoft Club - جميع الحقوق محفوظة
              </p>
              <p className="text-xs text-purple-200/20">
                صُنع بكل حب لدعم أطفالنا
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
