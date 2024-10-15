import Home from "../components/Home/Home";
// import { Helmet } from "react-helmet-async";
// import { useFetchMetaTags } from "../Hooks/useFetchMetaTags";
import "./globals.css"

export default function HomePage() {
//   const { metaTags } = useFetchMetaTags("Home");
// console.log("metaTags",metaTags)
  return (
    <main>

      {/* //// header meta tag */}
      {/* <Helmet>
        <title>{metaTags?.title}</title>
        <meta name="description" content={metaTags?.description} />
        <link rel="canonical" href="https://www.wisbato.com" />
      </Helmet> */}
      {/* //// header meta tag */}
      <Home />
    </main>
  );
}
