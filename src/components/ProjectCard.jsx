import Button from './Button'

const ProjectCard = ({ image, title, category, liveUrl }) => {
  return (
    <div className="bg-white dark:bg-[#1a1d29] rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 card-hover group">
      <div className="aspect-video bg-gradient-to-br from-primary/20 to-blue-500/20 flex items-center justify-center overflow-hidden">
        {image ? (
          <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
        ) : (
          <div className="text-6xl text-primary/40 font-heading font-bold">
            {title.charAt(0)}
          </div>
        )}
      </div>
      <div className="p-6">
        <div className="mb-2">
          <span className="text-xs text-primary font-medium uppercase tracking-wider">
            {category}
          </span>
        </div>
        <h3 className="text-xl font-heading font-bold mb-4 text-gray-900 dark:text-white group-hover:text-primary transition-colors duration-300">
          {title}
        </h3>
        <Button variant="outline" href={liveUrl} newTab>
          Live Preview →
        </Button>
      </div>
    </div>
  )
}

export default ProjectCard
