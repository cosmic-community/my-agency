import type { TeamMember } from '@/types'

interface TeamMemberCardProps {
  member: TeamMember;
}

export default function TeamMemberCard({ member }: TeamMemberCardProps) {
  const headshotUrl = member.metadata?.headshot?.imgix_url
  const role = member.metadata?.role
  const linkedinUrl = member.metadata?.linkedin_url

  return (
    <div className="group text-center">
      <div className="relative w-48 h-48 sm:w-56 sm:h-56 mx-auto mb-5 rounded-2xl overflow-hidden bg-gray-100">
        {headshotUrl ? (
          <img
            src={`${headshotUrl}?w=448&h=448&fit=crop&auto=format,compress`}
            alt={member.title}
            width={224}
            height={224}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-brand-100 to-brand-50">
            <svg className="w-20 h-20 text-brand-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
        )}
        {linkedinUrl && (
          <a
            href={linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute bottom-3 right-3 w-9 h-9 bg-white/90 backdrop-blur-sm rounded-lg flex items-center justify-center text-brand-600 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 hover:bg-white shadow-sm"
            aria-label={`${member.title} LinkedIn`}
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
        )}
      </div>

      <h3 className="text-lg font-semibold text-gray-900 group-hover:text-brand-600 transition-colors">
        {member.title}
      </h3>
      {role && (
        <p className="text-sm text-brand-600 font-medium mt-1">{role}</p>
      )}
      {member.metadata?.bio && (
        <p className="text-sm text-gray-500 mt-2 line-clamp-3 max-w-xs mx-auto">
          {member.metadata.bio}
        </p>
      )}
    </div>
  )
}