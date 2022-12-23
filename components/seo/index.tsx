import React from "react";
import { Helmet } from "react-helmet-async";

interface Props {
    title: string;
    description: string;
    name: string;
    type: string;
}

export default function SEO(props: Props) {
    const { title, description, name, type } = props;
    return (
        <Helmet>
            <html lang="en" />
            <meta name="application-name" content="Michael Vanhoutte | Resume" />
            <meta name="apple-mobile-web-app-capable" content="yes" />
            <meta name="apple-mobile-web-app-status-bar-style" content="default" />
            <meta name="apple-mobile-web-app-title" content="PWA App" />
            <meta
                name="description"
                content="Resume for the software engineer Michael Vanhoutte"
            />
            <meta name="format-detection" content="telephone=no" />
            <meta name="mobile-web-app-capable" content="yes" />
            <meta name="msapplication-config" content="/images/icons/browserconfig.xml" />
            <meta name="msapplication-TileColor" content="#2B5797" />
            <meta name="msapplication-tap-highlight" content="no" />
            <meta name="theme-color" content="#000000" />

            <link rel="apple-touch-icon" href="/images/icons/apple-touch-icon.png" />
            <link
                rel="apple-touch-icon"
                sizes="152x152"
                href="/images/icons/apple-touch-icon.png"
            />
            <link
                rel="apple-touch-icon"
                sizes="180x180"
                href="/images/icons/apple-touch-icon.png"
            />
            <link
                rel="apple-touch-icon"
                sizes="167x167"
                href="/images/icons/apple-touch-icon.png"
            />

            <link
                rel="icon"
                type="image/png"
                sizes="32x32"
                href="/images/icons/favicon-32x32.png"
            />
            <link
                rel="icon"
                type="image/png"
                sizes="16x16"
                href="/images/icons/favicon-16x16.png"
            />
            <link rel="manifest" href="/manifest.json" />
            <link rel="mask-icon" href="/images/icons/safari-pinned-tab.svg" color="#5bbad5" />
            <link rel="shortcut icon" href="/favicon.ico" />

            {/* Standard metadata tags */}
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta
                name="viewport"
                content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover"
            />
            {/* End standard metadata tags */}
            {/* Facebook tags */}
            <meta property="og:type" content={type} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:site_name" content="Michael Vanhoutte | Resume" />
            <meta property="og:url" content="https://mvanhoutte.cloud" />
            <meta property="og:image" content="https://mvanhoutte.cloud/images/icons/512.png" />
            {/* End Facebook tags */}
            {/* Twitter tags */}
            <meta name="twitter:creator" content={name} />
            <meta name="twitter:card" content={type} />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:url" content="https://mvanhoutte.cloud" />
            <meta name="twitter:card" content="summary" />
            <meta name="twitter:image" content="https://yourdomain.com/images/icons/192.png" />
            {/* End Twitter tags */}
        </Helmet>
    );
}
