// app/projects/[slug]/page.tsx
import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getProjectBySlug, getProjects } from '@/lib/cosmic'
import type { SelectDropdownOption } from '@/types'

interface ProjectPageProps {
  params: Promise<{ slug: string }>
}

// Changed: Add explicit type guard to safely read select-dropdown metadata values
const isSelectDropdownOption = (value: unknown): value is SelectDropdownOption => {
  return typeof value === 'object' && value !== null && ('value' in value || 'key' in value)
}

// Changed: Normalize category label with proper type safety
const getCategoryLabel = (category: unknown): string | undefined => {
  if (typeof category === 'string') return category
  if (isSelectDropdownOption(category)) {
    const label = category.value ?? category.key
    return label ? String(label) : undefined
  }
  return undefined
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params
  const project = await getProjectBySlug(slug)

  if (!project) {
    return { title: 'Project Not Found — My Agency' }
  }

  return {
    title: `${project.title} — My Agency`,
    description: project.metadata?.description || `View the ${project.title} project by My Agency.`
  }
}

export async function generateStaticParams() {
  const projects = await getProjects()
  return projects.map((project) => ({
    slug: project.slug
  }))
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params
  const project = await getProjectBySlug(slug)

  if (!project) {
    notFound()
  }

  const imageUrl = project.metadata?.featured_image?.imgix_url
  // Changed: Normalize category value to avoid rendering objects
  const category = getCategoryLabel(project.metadata?.category)
  const projectUrl = project.metadata?.project_url
  const description = project.metadata?.description

  return (
    <>
      {/* Hero */}
      <section className="relative bg-gray-950 overflow-hidden">
        {imageUrl && (
          <div className="absolute inset-0">
            <img
              src={`${imageUrl}?w=1920&h=800&fit=crop&auto=format,compress`}
              alt={project.title}
              className="w-full h-full object-cover opacity-40"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/70 to-gray-950/40" />
          </div>
        )}
        <div className="relative container-max px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
            </svg>
            Back to Projects
          </Link>

          {category && (
            <span className="inline-block text-brand-400 text-sm font-semibold uppercase tracking-wider mb-4">
              {category}
            </span>
          )}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-6">
            {project.title}
          </h1>
          {description && (
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl leading-relaxed">
              {description}
            </p>
          )}

          {projectUrl && (
            <a
              href={projectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-8 px-6 py-3 text-sm font-semibold text-white bg-brand-600 rounded-xl hover:bg-brand-500 transition-colors"
            >
              Visit Project
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          )}
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-white">
        <div className="container-max max-w-4xl">
          {imageUrl && (
            <div className="rounded-2xl overflow-hidden mb-12">
              <img
                src={`${imageUrl}?w=1600&h=900&fit=crop&auto=format,compress`}
                alt={project.title}
                width={800}
                height={450}
                className="w-full h-auto"
              />
            </div>
          )}

          {project.content && (
            <div
              className="prose prose-lg prose-gray max-w-none prose-headings:font-bold prose-a:text-brand-600"
              dangerouslySetInnerHTML={{ __html: project.content }}
            />
          )}
        </div>
      </section>
    </>
  )
}