import type { AppProps } from "next/app";
import { HelmetProvider } from "react-helmet-async";
import "../styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
    const helmetContext = {};

    return (
        <>
            <HelmetProvider context={helmetContext}>
                <Component {...pageProps} />
            </HelmetProvider>
        </>
    );
}
