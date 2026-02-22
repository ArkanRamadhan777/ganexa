import { Link } from 'react-router-dom'
import { HiSparkles, HiDeviceMobile, HiCurrencyDollar, HiAdjustments } from 'react-icons/hi'
import Button from '../components/Button'
import FeatureCard from '../components/FeatureCard'
import ProjectCard from '../components/ProjectCard'

const Home = () => {
  const features = [
    {
      icon: HiSparkles,
      title: 'Design Modern & Profesional',
      description: 'Tampilan website yang kece dan mencerminkan identitas organisasi kamu, bikin kesan pertama langsung wow!'
    },
    {
      icon: HiDeviceMobile,
      title: 'Akses Mudah di HP & Laptop',
      description: 'Semua anggota bisa akses website dengan nyaman dari HP atau laptop, kapan aja dan dimana aja.'
    },
    {
      icon: HiCurrencyDollar,
      title: 'Mulai dari Rp 200K',
      description: 'Harga mulai dari 200 ribu aja! Cocok banget buat organisasi sekolah dengan budget terbatas.'
    },
    {
      icon: HiAdjustments,
      title: 'Fitur Lengkap Organisasi',
      description: 'Dari landing page sederhana sampai website multi halaman profesional. Ada 2 paket sesuai kebutuhan!'
    }
  ]

  const portfolioPreview = [
    {
      image: '/alpha-project.png',
      title: 'Alpha',
      category: 'Basic',
      liveUrl: 'alpha.ganexa.me'
    },
    {
      image: '/beta-project.png',
      title: 'Beta',
      category: 'Standard',
      liveUrl: 'beta.ganexa.me'
    }
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="min-h-[90vh] flex items-center justify-center px-4 relative overflow-hidden">

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-heading font-black mb-6 leading-tight">
            Website Keren Buat <br />
            <span className="text-white">Organisasi Sekolah Kamu</span> 🚀
          </h1>
          <p className="text-lg md:text-xl text-white mb-10 max-w-3xl mx-auto leading-relaxed">
            Bikin website profesional buat OSIS, Paskibra, Pramuka, PMR, Rohis, dan semua organisasi sekolah. Modern, responsive, include setup domain & deployment!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/portfolio">
              <Button variant="primary">Lihat Portfolio</Button>
            </Link>
            <Button 
              variant="outline"
              href="https://wa.me/6287760769086?text=Halo%20Ganexa!%20Organisasi%20kami%20mau%20konsultasi%20website%20🚀"
              newTab
            >
              Konsultasi Sekarang
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Ganexa Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4 text-white">
              Kenapa Organisasi Sekolah Butuh Website?
            </h2>
            <p className="text-white/90 max-w-2xl mx-auto">
              Website bikin organisasi kamu makin profesional, mudah dipercaya, dan gampang buat share info ke anggota!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Preview Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4 text-white">
              Karya Terbaru Kami
            </h2>
            <p className="text-white/90 max-w-2xl mx-auto">
              Liat gimana kami bantu organisasi punya website yang keren dan profesional!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 max-w-4xl mx-auto">
            {portfolioPreview.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>

          <div className="text-center">
            <Link to="/portfolio">
              <Button variant="outline">Lihat Semua Portfolio →</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Closing Section */}
      <section className="py-20 px-4 relative overflow-hidden">
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6 text-white">
            Siap Bikin Organisasi Kamu Makin Profesional?
          </h2>
          <p className="text-lg text-white mb-8">
            Konsultasi gratis! Pilih paket BASIC (Rp 200K) atau STANDARD (Rp 500K) sesuai kebutuhan organisasi kamu. Proses cepat 1-3 minggu!
          </p>
          <Button 
            variant="primary"
            href="https://wa.me/6287760769086?text=Halo%20Ganexa!%20Saya%20dari%20organisasi%20sekolah%20dan%20mau%20bikin%20website%20🚀"
            newTab
          >
            Hubungi Kami Sekarang
          </Button>
        </div>
      </section>
    </div>
  )
}

export default Home
