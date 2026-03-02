import type { Metadata } from 'next'
import SectionHeading from '@/components/SectionHeading'
import TeamMemberCard from '@/components/TeamMemberCard'
import { getTeamMembers } from '@/lib/cosmic'

export const metadata: Metadata = {
  title: 'Team — My Agency',
  description: 'Meet the talented team of designers, developers, and strategists behind My Agency.',
}

export default async function TeamPage() {
  const teamMembers = await getTeamMembers()

  return (
    <>
      <section className="section-padding bg-white">
        <div className="container-max">
          <SectionHeading
            label="Our Team"
            title="The People Behind the Work"
            description="A diverse group of creative professionals united by a passion for exceptional design and innovation."
          />

          {teamMembers.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
              {teamMembers.map((member) => (
                <TeamMemberCard key={member.id} member={member} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gray-100 flex items-center justify-center">
                <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Team profiles coming soon</h3>
              <p className="text-gray-500">We&apos;re updating our team page. Check back soon!</p>
            </div>
          )}
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <SectionHeading
            label="Our Values"
            title="What Drives Us"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: '🎯', title: 'Purpose-Driven', desc: 'Every decision we make is guided by the impact it has on our clients and their audiences.' },
              { icon: '🤝', title: 'Collaborative', desc: 'We believe the best work comes from open communication and genuine partnership.' },
              { icon: '💡', title: 'Innovative', desc: 'We push boundaries and explore new possibilities to deliver forward-thinking solutions.' },
            ].map((value) => (
              <div key={value.title} className="text-center">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-500 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}