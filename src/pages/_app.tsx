import '@/styles/reset.css'
import '@/styles/globals.css'
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import type { AppProps } from 'next/app'
import { appWithTranslation } from 'next-i18next';
import Cookies from 'js-cookie';


const App = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();
  useEffect(() => {
    const lang = Cookies.get('language') || 'en';
    router.push(router.pathname, router.pathname, { locale: lang });
  }, []);

  return <Component {...pageProps} />
}

export default appWithTranslation(App);
