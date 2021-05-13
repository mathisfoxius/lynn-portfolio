import React from "react";
import { graphql } from "gatsby";
import Container from "../components/container";
import GraphQLErrorList from "../components/graphql-error-list";
import ProjectPreviewGrid from "../components/project-preview-grid";
import SEO from "../components/seo";
import Layout from "../containers/layout";

export const query = graphql`
  query AboutMePageQuery {
    site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
      title
      description
      keywords
    }
}
`;

const AboutMePage = props => {
  const { data, errors } = props;

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    );
  }

  const site = (data || {}).site;

  if (!site) {
    throw new Error(
      'Missing "Site settings". Open the studio at http://localhost:3333 and add some content to "Site settings" and restart the development server.'
    );
  }

  return (
    <Layout>
      <SEO title="{site.title}" description={site.description} keywords={site.keywords} />
      <Container>
        <p>LOL</p>
      </Container>
    </Layout>
  );
};

export default AboutMePage;