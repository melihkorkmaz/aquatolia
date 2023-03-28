'use client';
import useTranslation from 'next-translate/useTranslation'
import Link from "next/link";
import LanguageSelector from './LanguageSelector';

export default function TopBar() {
  const { t } = useTranslation('layout');

  return (
    <div className="w-full bg-white h-10 border-b border-qgray-border quomodo-shop-top-bar">
      <div className="container-x mx-auto h-full">
        <div className="flex justify-between items-center h-full">
          <div className="topbar-nav">
            <ul className="flex space-x-6">
              <li>
                <Link href="/?lang=en" as="/en">
                  <span className="text-xs leading-6 text-qblack font-500">
                    {t('topbar.account')}
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/deneme/subfolder" as="/en/deneme/subfolder">
                  <span className="text-xs leading-6 text-qblack font-500">
                    {t('topbar.track-order')}
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/faq">
                  <span className="text-xs leading-6 text-qblack font-500">
                    {t('topbar.support')}
                  </span>
                </Link>
              </li>
            </ul>
          </div>
          <LanguageSelector />
        </div>
      </div>
    </div>
  );
}
