import React from "react";
import Layout from "../components/layout";

const IndexPage = () => {
  return (
    <main>
      <Layout pageTitle="Home Page">
        <p>I am making this with Gatsby</p>
      </Layout>
    </main>
  );
};

export const Head = () => <title>Homepage</title>;

export default IndexPage;
