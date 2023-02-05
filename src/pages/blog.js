import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import Seo from "../components/seo";

export default function Blog({ data }) {
  return (
    <main>
      <Layout pageTitle="My Blog Posts">
        <p>bool blog posts</p>
        <ul>
          {data.allFile.nodes.map((node) => {
            return <li key={node.name}> {node.name}</li>;
          })}
        </ul>
      </Layout>
    </main>
  );
}
export const query = graphql`
  query {
    allFile {
      nodes {
        name
      }
    }
  }
`;

export const Head = () => <Seo title="My Blog Posts" />;
