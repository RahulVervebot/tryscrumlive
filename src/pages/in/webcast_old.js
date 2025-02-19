import React from "react";
import Layout from "../../components/Layout";
import NavTwo from "../../components/header/NavIn";
import WebcastHeader from "../../components/WebcastHeader";
import Footer from "../../components/footer/InFooter";
import WebcastContent from "../../components/WebcastContent";

const GalleryPage = () => {
  return (
    <Layout pageTitle="tryScrum | Webcast" metaDesc="Professional Scrum Certification - Online Agile training tryScrum" pageName="home" >
  
      <NavTwo />
      <WebcastHeader title="Webcast" />
      <WebcastContent />
      <Footer />
    </Layout>
  );
};

export default GalleryPage;
