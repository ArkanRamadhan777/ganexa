import ProjectCard from '../components/ProjectCard'

const Portfolio = () => {
  const projects = [
    {
      title: 'OSIS SMAN 1 Jakarta',
      category: 'Organisasi Siswa',
      liveUrl: 'https://example.com',
      image: null
    },
    {
      title: 'Paskibra SMK Maju Jaya',
      category: 'Ekstrakulikuler',
      liveUrl: 'https://example.com',
      image: null
    },
    {
      title: 'Rohis Al-Hikmah',
      category: 'Kerohanian Islam',
      liveUrl: 'https://example.com',
      image: null
    },
    {
      title: 'PMR SMAN 5 Bandung',
      category: 'Palang Merah Remaja',
      liveUrl: 'https://example.com',
      image: null
    },
    {
      title: 'Pramuka Penegak 07',
      category: 'Kepramukaan',
      liveUrl: 'https://example.com',
      image: null
    },
    {
      title: 'MPK SMK Teknologi',
      category: 'Majelis Perwakilan Kelas',
      liveUrl: 'https://example.com',
      image: null
    }
  ]

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6 text-primary">
            Portfolio Organisasi Sekolah
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Liat langsung website yang udah kami buat buat OSIS, Paskibra, Pramuka, PMR, Rohis, dan organisasi sekolah lainnya. Semuanya keren dan profesional!
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>

        {/* Bottom Note */}
        <div className="text-center mt-16">
          <div className="bg-white dark:bg-[#1a1d29] border border-gray-200 dark:border-gray-800 rounded-2xl p-8 max-w-3xl mx-auto">
            <p className="text-gray-800 dark:text-gray-300 text-lg mb-4">
              ✨ Semua website bisa disesuaikan dengan identitas dan kebutuhan organisasi kamu.
            </p>
            <p className="text-gray-600 dark:text-gray-400">
              Mau tambah fitur khusus? Atau punya request tertentu? Semua bisa diatur! Chat kami sekarang.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Portfolio
