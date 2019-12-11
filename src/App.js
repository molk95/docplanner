import React from "react";
import ReactDOM from "react-dom";
import NavManu from "./components/NavManu";
import Descriptions from "./components/Descriptions";
import ServiceCard from "./components/ServiceCard";
import MainDescription from "./components/MainDescription";
import FeatureCard from "./components/FeatureCard";
import Partners from "./components/Partners";
import OfficesDescription from "./components/OfficesDescription";
import Offices from "./components/Offices";
import OfficesAm from "./components/OfficesAm";
import Footer from "./components/Footer";
import "./index.css";
import "./App.css";

const item = [
  { title: "About us" },
  { title: "Career" },
  {
    title: "Department",
    drop: [
      "Marketing & PR",
      "Customer Success & Sales",
      "IT, Product, Design & UX",
      "Finance & Administration",
      "HR & more"
    ]
  }
];
const Mdescription = [
  { title: "The world's biggest healthcare platform" },
  {
    paragraph:
      " We work from 6 offices all over the world, bringing Docplanner Group to life in almost 20 countries."
  }
];

const DoctorsAndPatientsProps = [
  {
    category: "For doctors",
    title: "Find a doctor, book a visit and solve any health-related doubt",
    background: "service-card-patients",
    image: "https://www.docplanner.com/img/screen-marketplace@2x.png",
    alt: "doctorImg",
    showOptions: [
      "CHOOSE COUNTRY",
      "Argentina",
      "Australia",
      "Brazil",
      "Chile",
      "Colombia",
      "Czech",
      "France",
      "Italy",
      "Mexico",
      "Peru",
      "Poland",
      "Portugal",
      "Spain",
      "Turkey",
      "UK"
    ]
  },
  {
    category: "For patients",
    title: "Save time managing visits and cut no-shows by half",
    background: "service-card-doctors",
    image: "https://www.docplanner.com/img/screen-saas@2x.png",
    alt: "patientImg"
  }
];

const OfficePropsEu = [
  { image: "https://www.docplanner.com/images/warsaw.png", city: "Warsaw" },
  {
    image: "https://www.docplanner.com/images/barcelona.png",
    city: "Barcelona"
  },
  { image: "https://www.docplanner.com/images/istanbul.png", city: "Istanbul" },
  { image: "https://www.docplanner.com/images/rome.png", city: "Rome" },
  {
    image: "https://www.docplanner.com/images/mexico-city.png",
    city: "Mexico"
  },
  { image: "https://www.docplanner.com/images/curitiba.png", city: "Curitiba" }
];

const Main = () => (
  <div>
    <NavManu menu={item} />
    <Descriptions />
    <ServiceCard service={DoctorsAndPatientsProps} />
    <Partners />
    <MainDescription Maindesc={Mdescription} />
    <OfficesDescription />
    <Offices CityOffice={OfficePropsEu} />
    <Footer />
  </div>
);

ReactDOM.render(<Main />, document.getElementById("root"));
