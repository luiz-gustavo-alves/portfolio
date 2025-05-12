interface SectionTitleProps {
  title: string;
  description: string;
}

const SectionTitle = ({
  title,
  description,
}: SectionTitleProps) => {
  return (
    <section className="flex flex-col gap-4">
      <h2 className="text-5xl font-bold text-center">
        {title}
      </h2>
      <p className="text-lg text-center text-secondary">
        {description}
      </p>
    </section>
  )
}

export default SectionTitle