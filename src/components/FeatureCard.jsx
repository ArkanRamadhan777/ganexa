const FeatureCard = ({ icon: Icon, title, description }) => {
  return (
    <div className="backdrop-blur-xl bg-white/5 p-6 rounded-2xl border border-gray-200/50 dark:border-gray-800/50 card-hover group">
      <div className="text-hyperspeed-cyan text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
        <Icon />
      </div>
      <h3 className="text-xl font-heading font-bold mb-3 text-white group-hover:text-hyperspeed-cyan transition-colors duration-300">
        {title}
      </h3>
      <p className="text-white/90 leading-relaxed">
        {description}
      </p>
    </div>
  )
}

export default FeatureCard
