import React,{useEffect} from "react";
import Layout from "../components/Layout";
import NavTwo from "../components/NavTwo";
import LeadershipHeaders from "../components/LeadershipHeaders";
import Footer from "../components/Footer";
import SubhashiniDescription from "../components/SubhashiniDescription";
// import FarooqDesc from "../components/FarooqDescription";

const Subhashini = () => {
  // useEffect(() => {
  //   // Define the link elements manually
  //   const linkUS = document.createElement("link");
  //   linkUS.rel = "alternate";
  //   linkUS.hreflang = "en-US";
  //   linkUS.href = "https://www.tryscrum.com/subhashini/";

  //   const linkIN = document.createElement("link");
  //   linkIN.rel = "alternate";
  //   linkIN.hreflang = "en-IN";
  //   linkIN.href = "https://www.tryscrum.com/in/subhashini/";

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
    <Layout pageTitle="tryScrum | Team" metaDesc="Professional Scrum Certification - Online Agile training tryScrum" pageName="home" >
  
      <NavTwo />
      <LeadershipHeaders title="Team" />
      <SubhashiniDescription />
      <Footer />
    </Layout>
  );
};

export default Subhashini;