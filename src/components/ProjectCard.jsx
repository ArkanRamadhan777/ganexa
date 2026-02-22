import Button from './Button'

const ProjectCard = ({ image, title, category, liveUrl }) => {
  return (
    <a 
      href={liveUrl} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="backdrop-blur-xl bg-white/5 rounded-2xl overflow-hidden border border-gray-200/50 dark:border-gray-800/50 card-hover group block"
    >
      <div className="w-full bg-gradient-to-br from-hyperspeed-cyan/10 to-hyperspeed-purple/10 flex items-center justify-center overflow-hidden border-b border-white/5">
        {image ? (
          <img src={image} alt={title} className="w-full h-auto object-contain transition-transform duration-500" />
        ) : (
          <div className="aspect-video flex items-center justify-center text-6xl text-hyperspeed-cyan/40 font-heading font-bold">
            {title.charAt(0)}
          </div>
        )}
      </div>
      <div className="p-6">
        <div className="mb-2">
          <span className="text-xs text-hyperspeed-cyan font-medium uppercase tracking-wider">
            {category}
          </span>
        </div>
        <h3 className="text-xl font-heading font-bold mb-4 text-white group-hover:text-hyperspeed-cyan transition-colors duration-300">
          {title}
        </h3>
        <div className="inline-block px-6 py-3 rounded-full font-semibold border-2 border-hyperspeed-cyan text-hyperspeed-cyan group-hover:bg-gradient-to-r group-hover:from-hyperspeed-cyan group-hover:to-hyperspeed-pink group-hover:text-white group-hover:border-transparent transition-all duration-300 transform group-hover:scale-105">
          Live Preview →
        </div>
      </div>
    </a>
  )
}

export default ProjectCard
