import '@/styles/reset.css'
import '@/styles/globals.css'
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { MainContext } from '@/context/MainContext';
import setCssProperties from '@/utils/cssProperties';
import type { AppProps } from 'next/app'
import { appWithTranslation } from 'next-i18next';
import Cookies from 'js-cookie';


const App = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();
  useEffect(() => {
    const lang = Cookies.get('language');
    router.push(router.pathname, router.pathname, { locale: lang });
    setCssProperties();
  }, []);

  return (
      <MainContext>
        <Component {...pageProps} />
      </MainContext>
      )
}

export default appWithTranslation(App);
