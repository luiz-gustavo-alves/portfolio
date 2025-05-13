import SectionTitle from "@/components/sections/title"
import ContactCard from "./card"
import { useTranslations } from "next-intl";
import { GlobalMessageKeys } from "@/i18n/keys";

const ContactPage = () => {
  const t = useTranslations(GlobalMessageKeys.Contact);
  return (
    <main className="page-container">
      <SectionTitle
        title={t(`title`)}
        description={t(`content`)}
      />

      <ContactCard />
    </main>
  )
}

export default ContactPage