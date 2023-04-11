import { AppProps } from 'next/app';
import "./output.css";
import AppProvider from '@/components/AppProvider/AppProvider';
import { Inter } from 'next/font/google';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--inter-font',
});

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${inter.style.fontFamily};
        }
      `}</style>
      <QueryClientProvider client={queryClient}>
        <AppProvider>
          <Component {...pageProps} />
        </AppProvider>
      </QueryClientProvider>
    </>
  );
};

export default App;
