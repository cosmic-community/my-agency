import type { Metadata } from 'next'
import SectionHeading from '@/components/SectionHeading'
import ServiceCard from '@/components/ServiceCard'
import { getServices } from '@/lib/cosmic'

export const metadata: Metadata = {
  title: 'Services — My Agency',
  description: 'Discover the full range of creative and digital services we offer to help your brand succeed.',
}

export default async function ServicesPage() {
  const services = await getServices()

  return (
    <>
      <section className="section-padding bg-white">
        <div className="container-max">
          <SectionHeading
            label="What We Do"
            title="Our Services"
            description="We provide end-to-end creative and digital services that help brands connect with their audience and achieve their goals."
          />

          {services.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <ServiceCard key={service.id} service={service} index={index} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gray-100 flex items-center justify-center">
                <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.573-1.066z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">No services yet</h3>
              <p className="text-gray-500">Our services will be listed here soon.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gray-50">
        <div className="container-max text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Need something custom?
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto mb-8">
            Every project is unique. Let&apos;s discuss your specific needs and craft a tailored solution.
          </p>
        </div>
      </section>
    </>
  )
}