import Head from "next/head";

const HeadComponent = ({titulo, descripcion}) => {
    return (
        <Head>
            <title>{titulo}</title>
            <meta name="description" content={descripcion}/>
            <meta
                name="keywords"
                content="Innteria, Desarrollo de software empresas, software Colombia, Desarrollo de páginas web, plataformas web, creación de landing page, Servicio de analítica de datos, inteligencia artificial, Programación de páginas"
            />            
            <meta name="author" content="Innteria"/>
            <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
            <link rel="manifest" href="/site.webmanifest"/>
            <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5"/>
            <meta name="msapplication-TileColor" content="#da532c"/>
            <meta name="theme-color" content="#ffffff"/>
            <meta property="og:locale" content="es_ES" />
            <meta property="og:type" content="article" />
            <meta property="og:title" content="Innteria - Empresa de desarrollo de software" />
            <meta property="og:description" content="Innteria es una empresa que acompaña, desarrolla e implementa todo el proceso de transformación digital de las empresas." />
            <meta property="og:image" content="http://localhost:3000/img/Innteria_logo.webp" />
            <meta property="og:url" content="https://innteria.tech/" />
            <meta property="og:site_name" content="Innteria Desarrollo de Software" />
            <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        </Head>
    )
}
export default HeadComponent;