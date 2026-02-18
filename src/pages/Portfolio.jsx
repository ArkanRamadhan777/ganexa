import { HiClock } from 'react-icons/hi'
import Button from '../components/Button'

const Portfolio = () => {
  return (
    <div className="min-h-screen py-20 px-4 flex items-center justify-center">
      <div className="max-w-3xl mx-auto text-center">
        {/* Coming Soon Icon */}
        <div className="mb-8">
          <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-primary/10 text-primary">
            <HiClock className="w-12 h-12" />
          </div>
        </div>

        {/* Header */}
        <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6 text-primary">
          Coming Soon
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed mb-8">
          Halaman portfolio lagi dalam pengerjaan nih! Kami lagi nyiapin showcase website-website keren yang udah kami buat buat organisasi sekolah.
        </p>

        {/* Info Box */}
        <div className="bg-white dark:bg-[#1a1d29] border border-gray-200 dark:border-gray-800 rounded-2xl p-8 mb-8">
          <p className="text-gray-800 dark:text-gray-300 text-lg mb-4">
            🚀 Sementara ini, kamu bisa langsung konsultasi kebutuhan website organisasi kamu.
          </p>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Kami siap bantu wujudin website impian organisasi kamu!
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
