import { useTranslations } from 'next-intl';
import AboutMainDetails from './mainDetails';
import AboutSkills from './skills';
import AboutCards from './cards';
import AboutList from './list';
import { AboutKeys } from './utils/keys';
import { GlobalMessageKeys } from '@/i18n/keys';

const AboutPage = () => {
  const t = useTranslations(GlobalMessageKeys.About);
  return (
    <main className="flex flex-col items-center justify-center gap-16 p-4 md:p-8">
      <div className="flex flex-col gap-4">
        <h2 className="text-5xl font-bold text-center">
          {t(`title`)}
        </h2>
        <p className="text-lg text-center text-secondary">
          {t('content')}
        </p>
      </div>

      <div className="flex flex-col gap-12 lg:gap-24 max-w-[1400px] md:flex-row">
        <div className="md:w-1/2 flex flex-col gap-8">
          <AboutMainDetails />
          <AboutList
            title={t(`${AboutKeys.Concepts}.title`)}
            keysAmount={11}
          />
        </div>
        <div className="md:w-1/2 flex flex-col gap-8">
          <AboutSkills />
          <AboutCards />
        </div>
      </div>
    </main>
  )
}

export default AboutPage