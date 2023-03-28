import useTranslation from "next-translate/useTranslation";
import i18nConfig from '../../i18n';
import enFlag from "../../public/images/country-en.png";
import nlFlag from "../../public/images/country-nl.png";
import Image from "next/image";
import Link from "next/link";

const { locales } = i18nConfig

const getFlag = (lang: string) => {
  switch (lang) {
    case 'en':
      return enFlag
    case 'nl':
      return nlFlag
    default:
      return enFlag
  }
};

export default function LanguageSelector() {
  const { t, lang } = useTranslation()

  return (
    <>
      {locales.map((lng) => {
        if (lng === lang) return null

        return (
          <Link href={`/${lng}`} locale={lng} className="text-xs flex items-center gap-2" key={lng}>
            <Image src={getFlag(lng)} width="16" height="16" alt={lng}/>
            {t(`layout:language-name-${lng}`)}
          </Link>
        )
      })}
    </>
  )
}
