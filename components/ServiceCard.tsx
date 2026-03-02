import type { Service } from '@/types'

interface ServiceCardProps {
  service: Service;
  index: number;
}

const defaultIcons = ['🎨', '💻', '📱', '🚀', '📊', '✨']

export default function ServiceCard({ service, index }: ServiceCardProps) {
  const imageUrl = service.metadata?.featured_image?.imgix_url
  const icon = service.metadata?.icon || defaultIcons[index % defaultIcons.length]

  return (
    <div className="group relative bg-white rounded-2xl border border-gray-100 p-8 card-hover">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-600 to-brand-400 rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity" />

      {imageUrl ? (
        <div className="w-14 h-14 rounded-xl overflow-hidden mb-6">
          <img
            src={`${imageUrl}?w=112&h=112&fit=crop&auto=format,compress`}
            alt={service.title}
            width={56}
            height={56}
            className="w-full h-full object-cover"
          />
        </div>
      ) : (
        <div className="w-14 h-14 rounded-xl bg-brand-50 flex items-center justify-center mb-6 text-2xl group-hover:bg-brand-100 transition-colors">
          {icon}
        </div>
      )}

      <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-brand-600 transition-colors">
        {service.title}
      </h3>

      {service.metadata?.short_description && (
        <p className="text-gray-500 leading-relaxed">
          {service.metadata.short_description}
        </p>
      )}
    </div>
  )
}