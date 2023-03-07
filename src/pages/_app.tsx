import '@/styles/reset.css'
import '@/styles/globals.css'
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { MainContext } from '@/context/MainContext';
import setCssProperties from '@/utils/cssProperties';
import type { AppProps } from 'next/app'
import { appWithTranslation } from 'next-i18next';
import Cookies from 'js-cookie';
import { FontStyles } from '@/utils/fontChange';


const App = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();
  const { locale } = router;

  useEffect(() => {
    const lang = Cookies.get('language');
    router.push(router.pathname, router.pathname, { locale: lang });
    setCssProperties();
  }, []);

  useEffect(() => {
      const body = document.querySelector('body');
      if (body)
          if (locale === "ru" || locale === "lv")
            body.style.fontFamily = FontStyles[locale].fontFamily
          else
              body.style.fontFamily = ''
  }, [locale])

  return (
      <MainContext>
        <Component {...pageProps} />
      </MainContext>
      )
}

export default appWithTranslation(App);
