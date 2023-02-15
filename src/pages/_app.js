import '@/styles/globals.css'
import { ThemeProvider } from 'next-themes';
export default function App({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider themes={["dark", "light"]} enableSystem={false}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
  
  
}
