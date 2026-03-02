interface SectionHeadingProps {
  label?: string;
  title: string;
  description?: string;
  centered?: boolean;
}

export default function SectionHeading({ label, title, description, centered = true }: SectionHeadingProps) {
  return (
    <div className={`mb-12 sm:mb-16 ${centered ? 'text-center' : ''}`}>
      {label && (
        <span className="inline-block text-brand-600 text-sm font-semibold uppercase tracking-wider mb-3">
          {label}
        </span>
      )}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight mb-4">
        {title}
      </h2>
      {description && (
        <p className={`text-lg text-gray-500 leading-relaxed ${centered ? 'max-w-2xl mx-auto' : 'max-w-2xl'}`}>
          {description}
        </p>
      )}
    </div>
  )
}