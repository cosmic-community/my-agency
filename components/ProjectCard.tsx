import Link from 'next/link'
import type { Project } from '@/types'

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const imageUrl = project.metadata?.featured_image?.imgix_url
  const category = project.metadata?.category

  return (
    <Link href={`/projects/${project.slug}`} className="group block">
      <div className="relative overflow-hidden rounded-2xl bg-gray-100 aspect-[4/3] mb-4">
        {imageUrl ? (
          <img
            src={`${imageUrl}?w=800&h=600&fit=crop&auto=format,compress`}
            alt={project.title}
            width={400}
            height={300}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-brand-100 to-brand-50">
            <svg className="w-16 h-16 text-brand-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
          <span className="inline-flex items-center gap-1 text-white text-sm font-medium">
            View Project
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </span>
        </div>
      </div>

      <div>
        {category && (
          <span className="inline-block text-xs font-semibold text-brand-600 uppercase tracking-wider mb-2">
            {category}
          </span>
        )}
        <h3 className="text-lg font-semibold text-gray-900 group-hover:text-brand-600 transition-colors">
          {project.title}
        </h3>
        {project.metadata?.description && (
          <p className="mt-1 text-sm text-gray-500 line-clamp-2">
            {project.metadata.description}
          </p>
        )}
      </div>
    </Link>
  )
}