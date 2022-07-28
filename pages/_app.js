import '../styles/globals.css'
import { MenuContextProvider } from '../context/menuContext';
import Analytics from '../components/Analytics';

function MyApp({ Component, pageProps, router }) {
  return (
    <>
      <Analytics />
      <MenuContextProvider>
      <Component {...pageProps} key={router.route} />
      </MenuContextProvider>
    </>
  );
}

export default MyApp
