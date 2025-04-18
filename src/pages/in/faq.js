import React,{useEffect} from "react";
import Layout from "../../components/Layout";
import NavTwo from "../../components/header/NavIn";
import PageHeader from "../../components/PageHeader";
import Footer from "../../components/footer/InFooter";
import Faq from "../../components/Faq";

const FaqPage = () => {
  // useEffect(() => {
  //   // Define the link elements manually
  //   const linkUS = document.createElement("link");
  //   linkUS.rel = "alternate";
  //   linkUS.hreflang = "en-US";
  //   linkUS.href = "https://www.tryscrum.com/faq/";

  //   const linkIN = document.createElement("link");
  //   linkIN.rel = "alternate";
  //   linkIN.hreflang = "en-IN";
  //   linkIN.href = "https://www.tryscrum.com/in/faq/";

  //   // Append to head
  //   document.head.appendChild(linkUS);
  //   document.head.appendChild(linkIN);

  //   // Cleanup function to remove the elements when the component unmounts
  //   return () => {
  //     document.head.removeChild(linkUS);
  //     document.head.removeChild(linkIN);
  //   };
  // }, []);
  return (
    <Layout pageTitle="tryScrum | FAQ" metaDesc="Professional Scrum Certification - Online Agile training tryScrum" pageName="home" >
  
      <NavTwo />
      <PageHeader title="FAQ" />
      <Faq />
      <Footer />
    </Layout>
  );
};

export default FaqPage;
