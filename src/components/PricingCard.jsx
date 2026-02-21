import Button from './Button'

const PricingCard = ({ title, price, features, description, recommended = false }) => {
  return (
    <div className={`backdrop-blur-xl bg-white/5 p-8 rounded-2xl border transition-all duration-300 card-hover ${
      recommended 
        ? 'border-2 border-hyperspeed-cyan shadow-2xl lg:scale-105' 
        : 'border border-hyperspeed-cyan/30 dark:border-hyperspeed-purple/30'
    }`}>
      {recommended && (
        <div className="mb-4 text-center">
          <span className="inline-block bg-gradient-to-r from-hyperspeed-cyan to-hyperspeed-pink text-white px-4 py-1 rounded-full text-xs font-black tracking-wider">
            RECOMMENDED
          </span>
        </div>
      )}
      
      <h3 className={`text-2xl font-heading font-bold mb-2 text-center text-white ${recommended ? 'text-3xl' : ''}`}>
        {title}
      </h3>
      
      {price && (
        <div className="text-center mb-4">
          <span className="text-3xl font-bold text-white">{price}</span>
        </div>
      )}
      
      {description && (
        <p className="text-sm text-white/80 text-center mb-6 min-h-[40px]">
          {description}
        </p>
      )}
      
      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <span className="text-hyperspeed-cyan mr-3 text-lg flex-shrink-0">✓</span>
            <span className="text-white text-sm">{feature}</span>
          </li>
        ))}
      </ul>
      
      <Button 
        variant={recommended ? 'primary' : 'outline'}
        className="w-full"
        href={`https://wa.me/6287760769086?text=Halo%20Ganexa!%20Saya%20tertarik%20dengan%20paket%20${title}%20${price || ''}`}
        newTab
      >
        Pilih Paket
      </Button>
    </div>
  )
}

export default PricingCard
