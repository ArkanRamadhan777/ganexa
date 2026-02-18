import { Link } from 'react-router-dom'
import { HiSparkles, HiDeviceMobile, HiCurrencyDollar, HiAdjustments } from 'react-icons/hi'
import Button from '../components/Button'
import FeatureCard from '../components/FeatureCard'
// import ProjectCard from '../components/ProjectCard' // Hidden for now

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
      description: 'Dari landing page sederhana sampai sistem admin lengkap dengan database. Ada 4 paket sesuai kebutuhan!'
    }
  ]

  /* Hidden for now
  const portfolioPreview = [
    {
      title: 'OSIS SMAN 1',
      category: 'Organisasi Siswa',
      liveUrl: '#'
    },
    {
      title: 'Paskibra SMK Maju',
      category: 'Ekstrakulikuler',
      liveUrl: '#'
    }
  ]
  */

  return (
    <div>
      {/* Hero Section */}
      <section className="min-h-[90vh] flex items-center justify-center px-4 relative overflow-hidden">
        {/* Animated Gradient Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-cyan-600/20 animate-gradient-shift"></div>
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
            <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
            <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
          </div>
        </div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-heading font-black mb-6 leading-tight text-gray-900 dark:text-white">
            Website Keren Buat <br />
            <span className="text-primary">Organisasi Sekolah Kamu</span> 🚀
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
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
      <section className="py-20 px-4 bg-gray-50 dark:bg-[#1a1d29]/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4 text-primary">
              Kenapa Organisasi Sekolah Butuh Website?
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
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

      {/* Portfolio Preview Section - Hidden for now
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4 text-primary">
              Karya Terbaru Kami
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
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
      */}

      {/* CTA Closing Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-primary/10 to-blue-500/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgxMjgsMTI4LDEyOCwwLjA1KSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30"></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6 text-primary">
            Siap Bikin Organisasi Kamu Makin Profesional?
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            Konsultasi gratis! Pilih dari 4 paket (BASIC, STANDARD, PRO, ADVANCED) sesuai kebutuhan organisasi kamu. Proses cepat 1-8 minggu tergantung paket.
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
