import React from "react";
import { graphql } from "gatsby";
import Container from "../components/container";
import GraphQLErrorList from "../components/graphql-error-list";
import ProjectPreviewGrid from "../components/project-preview-grid";
import SEO from "../components/seo";
import Layout from "../containers/layout";

export const query = graphql`
  query PrivacyPageQuery {
    site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
      title
      description
      keywords
    }
}
`;

const PrivacyPage = props => {
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
        <h2>Privacy Statement</h2>
        <p>
          I, Lynn Kelders, am committed to protecting the privacy and accuracy of confidential information to the extent possible.
        </p>
        <h2>Concerned about privacy? I am too.</h2>
        <p>
          Although there are many applications and websites that collect information and other statistics about their users,  I DO NOT collect any personal information about you when you visit this web site.
        </p>
        <h2>What happens if the privacy statement changes?</h2>
        <p>
          This Privacy Statement was last revised on 17 May 2021. I may change this Privacy Statement at any time and for any reason. I encourage you to review this Privacy Statement each time you visit the web site.
        </p>
        <h2>What about privacy on other web sites?</h2>
        <p>
            This web site may contain links to other web sites. Some of those web sites may be operated by third parties. I provide the links for your convenience, but I do not review, control, or monitor the privacy practices of web sites operated by others. 
            I am not responsible for the performance of web sites operated by third parties or for your business dealings with them. Therefore, whenever you leave this web site I recommend that you review each web site's privacy practices and make your own conclusions regarding the adequacy of these practices.
        </p>
        <h2>How to contact me</h2>
        <p>
            If you have questions or comments about this Privacy Statement, please write an email to help @ lynnkelders.com
        </p>
      </Container>
    </Layout>
  );
};

export default PrivacyPage;