import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Head from "next/head";

function Layout({children}) {
  return (
    <div>
      <Head>
        <title>Connect for similar feelings</title>
        <meta
          name="description"
          content="The SheSharp 2021 Hackathon is to create a supportive shout-out generator"
        />
        <meta name="twitter:card" content="summary_large_image"/>
        <meta name="twitter:site" content="@troopl_"/>
        <meta name="twitter:creator" content="twitter_creator"/>
        <meta name="twitter:title" content="The SheSharp 2021 Hackathon"/>
        <meta
          name="twitter:description"
          content=""
        />
        <meta name="twitter:image" content="/seo-image.png"/>
        <link rel="icon" href="/favicon.ico"/>

        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
        <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;500&display=swap" rel="stylesheet"/>
      </Head>
      <div className="flex flex-col justify-between w-full bg-white">
        <div className="w-full bg-none bg-no-repeat bg-right-top lg:bg-world ">
          <div className="fixed w-full z-50">
            <NavBar/>
          </div>
          <div className="mt-24 text-gray-600">{children}</div>
        </div>
        <Footer/>
      </div>
    </div>
  );
}

export default Layout;