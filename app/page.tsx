import Link from 'next/link'
import Hero from '@/components/Hero'
import SectionHeading from '@/components/SectionHeading'
import ProjectCard from '@/components/ProjectCard'
import ServiceCard from '@/components/ServiceCard'
import TeamMemberCard from '@/components/TeamMemberCard'
import TestimonialCard from '@/components/TestimonialCard'
import { getProjects, getServices, getTeamMembers, getTestimonials } from '@/lib/cosmic'

export default async function HomePage() {
  const [projects, services, teamMembers, testimonials] = await Promise.all([
    getProjects(),
    getServices(),
    getTeamMembers(),
    getTestimonials(),
  ])

  const featuredProjects = projects.slice(0, 3)
  const featuredServices = services.slice(0, 6)
  const featuredTeam = teamMembers.slice(0, 4)
  const featuredTestimonials = testimonials.slice(0, 3)

  return (
    <>
      <Hero />

      {/* Projects Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <SectionHeading
            label="Our Work"
            title="Featured Projects"
            description="Explore our latest creative work and see how we bring ideas to life for our clients."
          />

          {featuredProjects.length > 0 ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {featuredProjects.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>
              {projects.length > 3 && (
                <div className="text-center mt-12">
                  <Link
                    href="/projects"
                    className="inline-flex items-center gap-2 px-8 py-3.5 text-sm font-semibold text-brand-600 border-2 border-brand-600 rounded-xl hover:bg-brand-600 hover:text-white transition-all"
                  >
                    View All Projects
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              )}
            </>
          ) : (
            <p className="text-center text-gray-500">Projects coming soon.</p>
          )}
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <SectionHeading
            label="What We Do"
            title="Our Services"
            description="We offer a full range of digital services to help your brand stand out in the modern landscape."
          />

          {featuredServices.length > 0 ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {featuredServices.map((service, index) => (
                  <ServiceCard key={service.id} service={service} index={index} />
                ))}
              </div>
              {services.length > 6 && (
                <div className="text-center mt-12">
                  <Link
                    href="/services"
                    className="inline-flex items-center gap-2 px-8 py-3.5 text-sm font-semibold text-brand-600 border-2 border-brand-600 rounded-xl hover:bg-brand-600 hover:text-white transition-all"
                  >
                    All Services
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              )}
            </>
          ) : (
            <p className="text-center text-gray-500">Services coming soon.</p>
          )}
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <SectionHeading
            label="Our Team"
            title="Meet the People Behind the Magic"
            description="A talented group of designers, developers, and strategists passionate about creating great work."
          />

          {featuredTeam.length > 0 ? (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
                {featuredTeam.map((member) => (
                  <TeamMemberCard key={member.id} member={member} />
                ))}
              </div>
              {teamMembers.length > 4 && (
                <div className="text-center mt-12">
                  <Link
                    href="/team"
                    className="inline-flex items-center gap-2 px-8 py-3.5 text-sm font-semibold text-brand-600 border-2 border-brand-600 rounded-xl hover:bg-brand-600 hover:text-white transition-all"
                  >
                    Meet the Full Team
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              )}
            </>
          ) : (
            <p className="text-center text-gray-500">Team profiles coming soon.</p>
          )}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <SectionHeading
            label="Testimonials"
            title="What Our Clients Say"
            description="Don't just take our word for it — hear from the brands we've helped succeed."
          />

          {featuredTestimonials.length > 0 ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {featuredTestimonials.map((testimonial) => (
                  <TestimonialCard key={testimonial.id} testimonial={testimonial} />
                ))}
              </div>
              {testimonials.length > 3 && (
                <div className="text-center mt-12">
                  <Link
                    href="/testimonials"
                    className="inline-flex items-center gap-2 px-8 py-3.5 text-sm font-semibold text-brand-600 border-2 border-brand-600 rounded-xl hover:bg-brand-600 hover:text-white transition-all"
                  >
                    Read All Testimonials
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              )}
            </>
          ) : (
            <p className="text-center text-gray-500">Testimonials coming soon.</p>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-brand-600 to-brand-800 text-white">
        <div className="container-max text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Ready to start your project?
          </h2>
          <p className="text-lg text-brand-100 max-w-2xl mx-auto mb-10">
            Let&apos;s collaborate and create something extraordinary together. Reach out to discuss your next big idea.
          </p>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-brand-700 bg-white rounded-xl hover:bg-brand-50 transition-colors shadow-lg"
          >
            Explore Our Work
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  )
}