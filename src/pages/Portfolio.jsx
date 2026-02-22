import ProjectCard from '../components/ProjectCard'
import Button from '../components/Button'

const Portfolio = () => {
  const projects = [
    {
      image: 'alpha-project.png',
      title: 'Alpha',
      category: 'Basic',
      liveUrl: 'https://alpha.ganexa.me'
    },
    {
      image: 'beta-project.png',
      title: 'Beta',
      category: 'Standard',
      liveUrl: 'https://beta.ganexa.me'
    },
    {
      image: 'delta-project.png',
      title: 'Delta',
      category: 'Basic',
      liveUrl: 'https://delta.ganexa.me'
    },
    {
      image: 'gamma-project.png',
      title: 'Gamma',
      category: 'Standard',
      liveUrl: 'https://gamma.ganexa.me'
    }
  ]

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6 text-white">
            Portfolio Kami
          </h1>
          <p className="text-lg text-white max-w-2xl mx-auto leading-relaxed mb-8">
            Ini dia beberapa website yang udah kami buat buat organisasi sekolah. Dari paket Basic sampai Standard, semua dikerjain dengan profesional!
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>

        {/* CTA Section */}
        <div className="backdrop-blur-xl bg-white/5 border border-gray-200/50 dark:border-gray-800/50 rounded-2xl p-8 text-center mt-16">
          <p className="text-white text-lg mb-4">
            🚀 Mau organisasi kamu punya website sekeren ini?
          </p>
          <p className="text-white/90 mb-6">
            Konsultasi gratis! Pilih paket BASIC atau STANDARD sesuai kebutuhan kamu.
          </p>
          <Button 
            variant="primary"
            href="https://wa.me/6287760769086?text=Halo%20Ganexa!%20Saya%20mau%20konsultasi%20soal%20website%20organisasi%20🚀"
            newTab
          >
            Konsultasi Sekarang
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Portfolio
