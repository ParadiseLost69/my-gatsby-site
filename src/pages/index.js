import React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";
import Seo from "../components/seo";

const IndexPage = () => {
  return (
    <main>
      <Layout pageTitle="Home Page">
        <p>I am making this with Gatsby</p>
        <StaticImage
          alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
          src="https://images.pexels.com/photos/7034219/pexels-photo-7034219.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        />
      </Layout>
    </main>
  );
};

export const Head = () => <Seo title="Home" />;

export default IndexPage;
