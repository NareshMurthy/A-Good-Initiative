import Dashboard from "../components/Dashboard/Dashboard";
import Footer from "../components/Common/Footer/Footer";
import Head from "next/head";
import "bootstrap/dist/css/bootstrap.css";

const Index = () => (
  <div>
    <Head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>Addition - Achalabharathi</title>
    </Head>
    <div>
      <Dashboard></Dashboard>
    </div>
    <div>
      <Footer></Footer>
    </div>
    <style jsx global>{`
      @import url("https://fonts.googleapis.com/css?family=Nunito&display=swap");
      * {
        font-family: "Nunito", sans-serif;
        font-size: 3vmin;
        margin: 0;
        padding: 0;
      }
    `}</style>
  </div>
);

export default Index;
