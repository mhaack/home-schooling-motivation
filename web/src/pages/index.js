import React from "react";
import { graphql } from "gatsby";
import { shuffle } from "lodash";

import Layout from "../components/layout";
import GraphQLErrorList from "../components/graphql-error-list";
import SEO from "../components/seo";
import Deck from "../components/deck";

export const query = graphql`
  query IndexPageQuery {
    site {
      siteMetadata {
        title
      }
    }
    cards: allSanityCard(limit: 6) {
      edges {
        node {
          id
          title
          text
          image {
            alt
            asset {
              fluid {
                ...GatsbySanityImageFluid
              }
            }
          }
        }
      }
    }
  }
`;
const IndexPage = (props) => {
  const { data, errors } = props;

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    );
  }

  const site = (data || {}).site.siteMetadata;
  const cards = (data || {}).cards;
  const cardItems = shuffle(cards.edges);

  return (
    <Layout>
      <SEO title={site.title} />
      <Deck items={cardItems} />
      <div className="flex items-center justify-center h-screen">
        <div>
          <h1 className="font-bold">Home Schooling ist super!</h1>
        </div>
      </div>
    </Layout>
  );
};

export default IndexPage;
