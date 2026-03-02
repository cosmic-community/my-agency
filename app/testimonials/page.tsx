import type { Metadata } from 'next'
import SectionHeading from '@/components/SectionHeading'
import TestimonialCard from '@/components/TestimonialCard'
import { getTestimonials } from '@/lib/cosmic'

export const metadata: Metadata = {
  title: 'Testimonials — My Agency',
  description: 'Read what our clients have to say about working with My Agency.',
}

export default async function TestimonialsPage() {
  const testimonials = await getTestimonials()

  return (
    <>
      <section className="section-padding bg-white">
        <div className="container-max">
          <SectionHeading
            label="Client Feedback"
            title="What Our Clients Say"
            description="We take pride in delivering exceptional results. Here's what our clients have to say about their experience working with us."
          />

          {testimonials.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial) => (
                <TestimonialCard key={testimonial.id} testimonial={testimonial} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gray-100 flex items-center justify-center">
                <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">No testimonials yet</h3>
              <p className="text-gray-500">Client testimonials will appear here soon.</p>
            </div>
          )}
        </div>
      </section>

      {/* Stats Section */}
      {testimonials.length > 0 && (
        <section className="section-padding bg-gradient-to-br from-brand-600 to-brand-800 text-white">
          <div className="container-max">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              {[
                { label: 'Happy Clients', value: `${testimonials.length}+` },
                { label: 'Projects Delivered', value: '50+' },
                { label: 'Years of Experience', value: '8+' },
                { label: 'Average Rating', value: (() => {
                  const ratings = testimonials
                    .map((t) => t.metadata?.rating)
                    .filter((r): r is number => typeof r === 'number')
                  if (ratings.length === 0) return 'N/A'
                  const avg = ratings.reduce((sum, r) => sum + r, 0) / ratings.length
                  return avg.toFixed(1)
                })() },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-3xl sm:text-4xl font-bold mb-2">{stat.value}</div>
                  <div className="text-brand-200 text-sm font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}