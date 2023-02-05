import React from "react";

import Layout from "../components/layout";
import Seo from "../components/seo";

export default function About() {
  return (
    <main>
      <Layout pageTitle="About Page">
        <p>This is the ABOUT page</p>
      </Layout>
    </main>
  );
}

export const Head = () => <Seo title="About" />;
