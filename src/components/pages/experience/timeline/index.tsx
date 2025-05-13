import { GlobalMessageKeys } from '@/i18n/keys';
import { useTranslations } from 'next-intl';
import ExperienceTimelineItem from './item';

interface ExperienceTimelineProps {
  experienceAmount: number,
}

const EXPERIENCE_CONTENT_AMOUNT = [
  7, 7, 7, 3,
]

const ExperienceTimeline = ({
  experienceAmount,
}: ExperienceTimelineProps) => {
  const t = useTranslations(GlobalMessageKeys.Experience);
  return (
    <div className="flex flex-col gap-8">
      {Array.from({ length: experienceAmount }).map((_, index) => (
        <div key={index}>
          <ExperienceTimelineItem
            parentIndex={index + 1}
            date={t(`Experience_${index + 1}.date`)}
            icon={t(`Experience_${index + 1}.icon`)}
            title={t(`Experience_${index + 1}.title`)}
            subtitle={t(`Experience_${index + 1}.subtitle`)}
            contentAmount={EXPERIENCE_CONTENT_AMOUNT[index]}
            htmlContent={t.raw(`Experience_${index + 1}.html_content`)}
            contentOrder={index % 2 === 0 ? 'right' : 'left'}
          />
        </div>
      ))}
    </div>
  )
}

export default ExperienceTimeline