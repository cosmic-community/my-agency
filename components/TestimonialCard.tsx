import type { Testimonial } from '@/types'
import StarRating from '@/components/StarRating'

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  const clientPhoto = testimonial.metadata?.client_photo?.imgix_url
  const rating = testimonial.metadata?.rating ?? 5
  const clientName = testimonial.metadata?.client_name || testimonial.title
  const company = testimonial.metadata?.company
  const quote = testimonial.metadata?.quote

  return (
    <div className="bg-white rounded-2xl border border-gray-100 p-8 card-hover h-full flex flex-col">
      <StarRating rating={rating} />

      {quote && (
        <blockquote className="mt-5 flex-1">
          <p className="text-gray-600 leading-relaxed italic">
            &ldquo;{quote}&rdquo;
          </p>
        </blockquote>
      )}

      <div className="flex items-center gap-4 mt-6 pt-6 border-t border-gray-100">
        {clientPhoto ? (
          <img
            src={`${clientPhoto}?w=96&h=96&fit=crop&auto=format,compress`}
            alt={clientName}
            width={48}
            height={48}
            className="w-12 h-12 rounded-full object-cover"
          />
        ) : (
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-brand-400 to-brand-600 flex items-center justify-center">
            <span className="text-white font-semibold text-lg">
              {clientName.charAt(0).toUpperCase()}
            </span>
          </div>
        )}
        <div>
          <p className="font-semibold text-gray-900">{clientName}</p>
          {company && (
            <p className="text-sm text-gray-500">{company}</p>
          )}
        </div>
      </div>
    </div>
  )
}