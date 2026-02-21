import PricingCard from '../components/PricingCard'
import Button from '../components/Button'

const Pricing = () => {
  const pricingPlans = [
    {
      title: 'BASIC',
      price: 'Rp 200K',
      features: [
        '1 halaman landing modern',
        'Profil organisasi',
        'Program kerja',
        'Galeri kegiatan',
        'Kontak WhatsApp',
        'Responsive (mobile & desktop)',
        'Setup domain & deployment awal'
      ],
      recommended: false,
      description: 'Website sederhana untuk membangun identitas digital organisasi. Estimasi: 1-2 minggu'
    },
    {
      title: 'STANDARD',
      price: 'Rp 500K',
      features: [
        'Multi halaman (Home, Event, Struktur, Galeri, Kontak)',
        'Halaman detail event',
        'Desain modern & profesional',
        'Optimasi SEO dasar',
        '2x revisi',
        'Setup domain & deployment awal',
        'Modern & Responsive'
      ],
      recommended: true,
      description: 'Website organisasi dengan struktur lengkap dan profesional. Estimasi: 2-3 minggu'
    }
    // PRO & ADVANCED packages temporarily hidden
    // {
    //   title: 'PRO',
    //   price: 'Rp 1 Juta',
    //   features: [
    //     'Semua fitur STANDARD',
    //     'Login Admin',
    //     'Dashboard pengelolaan',
    //     'Tambah/Edit/Hapus Event',
    //     'Upload foto kegiatan',
    //     'Database terintegrasi',
    //     'Maksimal 2 akun admin'
    //   ],
    //   recommended: false,
    //   description: 'Website dengan sistem login admin untuk pengelolaan mandiri. Estimasi: 3-4 minggu'
    // },
    // {
    //   title: 'ADVANCED',
    //   price: 'Rp 2 Juta',
    //   features: [
    //     'Website multi halaman lengkap + arsip kegiatan',
    //     'Dashboard Admin untuk kelola konten mandiri',
    //     'CRUD Event, Berita, Galeri, Pengurus',
    //     'Multi Admin (maks 5) dengan Role akses',
    //     'Database & Storage terintegrasi',
    //     'Statistik sederhana & SEO dasar',
    //     'Setup deployment sampai online'
    //   ],
    //   recommended: false,
    //   description: 'Sistem organisasi digital yang rapi, modern, dan siap dipakai mandiri. Estimasi: 4-6 minggu'
    // }
  ]

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6 text-white">
            Paket & Harga
          </h1>
          <p className="text-lg text-white max-w-3xl mx-auto leading-relaxed">
            Pilih paket yang cocok buat kebutuhan organisasi kamu. Semua paket include konsultasi gratis dan support!
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mb-16 max-w-4xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <PricingCard key={index} {...plan} />
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="backdrop-blur-xl bg-white/5 border-2 border-hyperspeed-cyan/40 rounded-2xl p-10 max-w-3xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-heading font-bold mb-4 text-white">
              Masih Bingung Pilih Paket?
            </h3>
            <p className="text-white mb-6">
              Gak masalah! Chat kami dulu buat diskusi kebutuhan organisasi kamu. Kami bantu kasih rekomendasi paket yang pas!
            </p>
            <Button 
              variant="primary"
              href="https://wa.me/6287760769086?text=Halo%20Ganexa!%20Saya%20dari%20organisasi%20sekolah%20mau%20tanya%20paket%20harga"
              newTab
            >
              Chat Kami Sekarang
            </Button>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-16 mb-12">
          <h3 className="text-2xl font-heading font-bold text-center mb-8 text-white">
            Teknologi yang Kami Gunakan
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center max-w-4xl mx-auto">
            <div className="backdrop-blur-xl bg-white/5 border border-gray-200/50 dark:border-gray-800/50 rounded-xl p-4">
              <div className="text-3xl mb-2">⚛️</div>
              <h4 className="font-heading font-bold text-sm text-white">React</h4>
              <p className="text-xs text-white/80">Modern & Fast</p>
            </div>
            <div className="backdrop-blur-xl bg-white/5 border border-gray-200/50 dark:border-gray-800/50 rounded-xl p-4">
              <div className="text-3xl mb-2">🎨</div>
              <h4 className="font-heading font-bold text-sm text-white">Tailwind CSS</h4>
              <p className="text-xs text-white/80">Clean Design</p>
            </div>
            <div className="backdrop-blur-xl bg-white/5 border border-gray-200/50 dark:border-gray-800/50 rounded-xl p-4">
              <div className="text-3xl mb-2">🗄️</div>
              <h4 className="font-heading font-bold text-sm text-white">Supabase</h4>
              <p className="text-xs text-white/80">Database & Auth</p>
            </div>
            <div className="backdrop-blur-xl bg-white/5 border border-gray-200/50 dark:border-gray-800/50 rounded-xl p-4">
              <div className="text-3xl mb-2">💎</div>
              <h4 className="font-heading font-bold text-sm text-white">Flowbite</h4>
              <p className="text-xs text-white/80">UI Components</p>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center mb-16">
          <div className="backdrop-blur-xl bg-white/5 border border-gray-200/50 dark:border-gray-800/50 rounded-xl p-6">
            <div className="text-3xl mb-3">⚡</div>
            <h4 className="font-heading font-bold mb-2 text-white">Proses Cepat</h4>
            <p className="text-sm text-white/80">Pengerjaan 1-3 minggu tergantung paket</p>
          </div>
          <div className="backdrop-blur-xl bg-white/5 border border-gray-200/50 dark:border-gray-800/50 rounded-xl p-6">
            <div className="text-3xl mb-3">🔄</div>
            <h4 className="font-heading font-bold mb-2 text-white">Bisa Upgrade</h4>
            <p className="text-sm text-white/80">Sistem dapat di-upgrade ke paket lebih tinggi</p>
          </div>
          <div className="backdrop-blur-xl bg-white/5 border border-gray-200/50 dark:border-gray-800/50 rounded-xl p-6">
            <div className="text-3xl mb-3">💰</div>
            <h4 className="font-heading font-bold mb-2 text-white">Harga Pelajar</h4>
            <p className="text-sm text-white/80">Harga spesial ramah kantong untuk organisasi sekolah</p>
          </div>
        </div>

        {/* Ketentuan Tambahan */}
        <div className="max-w-4xl mx-auto">
          <div className="backdrop-blur-xl bg-white/5 border border-orange-500/30 rounded-2xl p-8">
            <h3 className="text-xl font-heading font-bold mb-4 text-center text-white">
              📌 Ketentuan Tambahan
            </h3>
            <ul className="space-y-3 text-white/90 text-sm">
              <li className="flex items-start">
                <span className="text-orange-500 mr-3 mt-1">•</span>
                <span>Harga belum termasuk perpanjangan domain tahunan</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-500 mr-3 mt-1">•</span>
                <span>Revisi di luar paket akan dikenakan biaya tambahan sesuai kompleksitas</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-500 mr-3 mt-1">•</span>
                <span>Maintenance & pengembangan lanjutan tersedia sesuai kebutuhan</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-500 mr-3 mt-1">•</span>
                <span>Semua paket include konsultasi gratis dan panduan penggunaan</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Pricing
