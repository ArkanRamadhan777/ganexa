const FeatureCard = ({ icon: Icon, title, description }) => {
  return (
    <div className="bg-white dark:bg-[#1a1d29] p-6 rounded-2xl border border-gray-200 dark:border-gray-800 card-hover group">
      <div className="text-primary text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
        <Icon />
      </div>
      <h3 className="text-xl font-heading font-bold mb-3 text-gray-900 dark:text-white group-hover:text-primary transition-colors duration-300">
        {title}
      </h3>
      <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
        {description}
      </p>
    </div>
  )
}

export default FeatureCard
