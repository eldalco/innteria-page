import Script from "next/script"

export default function Analytics() {
    return (
        <>
        <Script 
            strategy="lazyOnload"
            src={`https://www.googletagmanager.com/gtag/js?id=G-B0JF1KK5QN`}
        />
        <Script strategy="lazyOnload">
            {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            
            gtag('config', 'G-B0JF1KK5QN');
            `}
        </Script> 
        </>
    )
}
