import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-gray-950 via-brand-950 to-gray-900">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-brand-400/10 rounded-full blur-3xl" />
      </div>

      <div className="relative container-max px-4 sm:px-6 lg:px-8 py-24 sm:py-32 lg:py-40">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-500/10 border border-brand-500/20 mb-8">
            <div className="w-2 h-2 rounded-full bg-brand-400 animate-pulse" />
            <span className="text-brand-300 text-sm font-medium">Creative Agency</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-tight tracking-tight mb-6">
            We craft digital{' '}
            <span className="bg-gradient-to-r from-brand-400 to-brand-300 bg-clip-text text-transparent">
              experiences
            </span>{' '}
            that inspire
          </h1>

          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            From concept to launch, we design and develop stunning digital products 
            that captivate audiences and drive results for ambitious brands.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/projects"
              className="w-full sm:w-auto px-8 py-4 text-base font-semibold text-white bg-brand-600 rounded-xl hover:bg-brand-500 transition-all shadow-lg shadow-brand-600/25 hover:shadow-brand-500/30"
            >
              View Our Work
            </Link>
            <Link
              href="/services"
              className="w-full sm:w-auto px-8 py-4 text-base font-semibold text-gray-300 border border-gray-700 rounded-xl hover:bg-white/5 hover:border-gray-600 transition-all"
            >
              Our Services
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
    </section>
  )
}