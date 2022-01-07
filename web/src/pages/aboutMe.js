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
      <SEO title={site.title} description={site.description} keywords={site.keywords} />
      <Container>
        <h1 style={{"margin-top": 0}}>About Me</h1>
        <img src="/static/portrait.jpg" alt="Picture shows Lynn Kelders"></img>
        <p style={{"text-align": "justify"}}>Lynn Kelders was born in Luxembourg City in 1997 and grew up in the small Luxembourg town of Bettendorf. In rather quiet surroundings, she first encountered art as a profession in the last years of her school education. Drawing and observing as a child, she was taught pictorial design skills as well as basics in illustration design, typesetting and technical drawing on her way to (among other things) her A-levels in art.
        </p>
        <p style={{"text-align": "justify"}}>
        It quickly became clear through the intensive specialisation during her school years that art should not remain just a hobby. Since the end of 2017, the young artist now lives and works in Berlin. The contrast between the bustling cosmopolitan city and the sleepy, conservative Luxembourg offers a lot of space for ideas and thoughts.
        </p>
        <p style={{"text-align": "justify"}}>
        Lynn's art represents her view of the world: Observations, emotions, characters. People are often depicted - but the focus is not on perfection and realism, the depiction leaves a lot of room for interpretation. Strange poses, macabre themes that meet bright colours and supposedly harmless faces - this combination creates a tension that does not let go of the viewer. A bit of unease is supposed to remain, and it does. Nevertheless, this uneasiness does not necessarily have a negative connotation; it is more reminiscent of reflection. About oneself, about the perception of the self and the environment. Carried by contrasts and bright colours, the works develop a strong character of their own.
        </p>
        <p style={{"text-align": "justify"}}>
        [Trigger Warning: Depression]<br></br>
        Lynn has been living with depression for several years.
        The illness determines her everyday life and has a great influence on her art.
        Her works serve as a projection screen for her own intrusive thoughts and help to displace the constant noise that accompanies her every day. At the beginning of the Corona pandemic, her illness continued to worsen. The world around her seemed to emulate her depression and she slipped into a phase of self-isolation. During this time she became more concerned with how the world around her perceived her illness and how she showed her condition to the outside world. This way of dealing with her depression is the main theme of her works. <br></br>
        </p>
        <p>
        (Text: Julia Szymik)
        </p>
      </Container>
    </Layout>
  );
};

export default AboutMePage;