import type { Metadata } from 'next'
import SectionHeading from '@/components/SectionHeading'
import ProjectCard from '@/components/ProjectCard'
import { getProjects } from '@/lib/cosmic'

export const metadata: Metadata = {
  title: 'Projects — My Agency',
  description: 'Browse our portfolio of creative projects spanning branding, web development, and digital design.'
}

export default async function ProjectsPage() {
  const projects = await getProjects()

  // Changed: Normalize category values to avoid rendering objects from select-dropdown metafields
  const categories = Array.from(
    new Set(
      projects
        .map((project) => {
          const category = project.metadata?.category
          if (typeof category === 'string') return category
          if (category && typeof category === 'object' && 'value' in category) {
            return String(category.value)
          }
          if (category && typeof category === 'object' && 'key' in category) {
            return String(category.key)
          }
          return null
        })
        .filter(Boolean)
    )
  ) as string[]

  return (
    <>
      <section className="section-padding bg-white">
        <div className="container-max">
          <SectionHeading
            label="Portfolio"
            title="Our Projects"
            description="Explore our diverse portfolio of work across different industries and creative disciplines."
          />

          {categories.length > 0 && (
            <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
              <span className="px-4 py-2 text-sm font-medium text-white bg-brand-600 rounded-full">
                All
              </span>
              {categories.map((category) => (
                <span
                  key={category}
                  className="px-4 py-2 text-sm font-medium text-gray-600 bg-gray-100 rounded-full hover:bg-brand-50 hover:text-brand-600 transition-colors cursor-pointer"
                >
                  {category}
                </span>
              ))}
            </div>
          )}

          {projects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gray-100 flex items-center justify-center">
                <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">No projects yet</h3>
              <p className="text-gray-500">Check back soon for our latest work.</p>
            </div>
          )}
        </div>
      </section>
    </>
  )
}