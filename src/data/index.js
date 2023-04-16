import {
  SiSimpleanalytics,
  SiMicrostrategy,
  SiGooglemarketingplatform,
} from "react-icons/si";
import { CgWebsite } from "react-icons/cg";
import { MdOutlineDeveloperMode } from "react-icons/md";
import { GoReport } from "react-icons/go";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import image1 from "../images/1.jpg";
import image2 from "../images/2.jpg";
import image3 from "../images/3.jpg";
import image5 from "../images/5.jpg";
import image6 from "../images/6.jpg";
import image7 from "../images/7.jpg";

export const navigation = [
  { name: "Home", href: "#", id: "home" },
  { name: "About", href: "#", id: "about" },
  { name: "Services", href: "#", id: "services" },
  { name: "Portfolio", href: "#", id: "portfolio" },
  { name: "Team", href: "#", id: "team" },
];

export const aboutMeData = [
  {
    id: 1,
    bio: "Achievement-oriented software developer with 3+ years of professional work experience. Eager to support CreeStal with reaching new prospective buyers by improving the features and working speed of the company web app. Achieved a 27% increase of active users of an e-commerce app in 2021.Supporting the backend team with the maintenance of a client's e-commerce website using HTML, MySQL, CSS, and JavaScript.Running QA testing under the supervision of the QA team and suggesting code fixes for recurring issues.Working in a team of 10 junior and senior developers and taking part in sprint planning.",
  },
  {
    id: 2,
    bio: "A Software Developer with entry-level experience, specializing in user interface design, application development, data security, and continuous improvement. Adept at identifying opportunities to enhance the user experience and develop new features to improve app functionality.",
  },
];

export const counterData = [
  {
    id: "experienceCounter",
    title: "Years of experience",
    measurement: "",
  },
  {
    id: "githubStarsCounter",
    title: "Stars on GitHub",
    measurement: "k+",
  },
  {
    id: "feedbackCounter",
    title: "Positive feedback",
    measurement: "%",
  },
  {
    id: "projectsCounter",
    title: "Projects Completed",
    measurement: "%",
  },
];

export const servicesData = [
  {
    title: "Business Stratagy",
    subtitle:
      "I throw myself down among the tall grass by the stream as I lie close to the earth.",
  },
  {
    title: "Marketing & Reporting",
    subtitle:
      "I throw myself down among the tall grass by the stream as I lie close to the earth.",
  },
  {
    title: "Website Development",
    subtitle:
      "I throw myself down among the tall grass by the stream as I lie close to the earth.",
  },
  {
    // icon: <MdOutlineDeveloperMode color={getCurrentColor} size={60} />,
    title: "Website Development",
    subtitle:
      "I throw myself down among the tall grass by the stream as I lie close to the earth.",
  },
  {
    title: "Website Development",
    subtitle:
      "I throw myself down among the tall grass by the stream as I lie close to the earth.",
  },
  {
    title: "Marketing & Reporting",
    subtitle:
      "I throw myself down among the tall grass by the stream as I lie close to the earth.",
  },
];

export const getIcons = (getCurrentColor) => {
  return [
    <SiMicrostrategy size={60} color={getCurrentColor} />,
    <SiSimpleanalytics size={60} color={getCurrentColor} />,
    <SiGooglemarketingplatform color={getCurrentColor} size={60} />,
    <MdOutlineDeveloperMode color={getCurrentColor} size={60} />,
    <CgWebsite color={getCurrentColor} size={60} />,
    <GoReport size={60} color={getCurrentColor} />,
  ];
};

export const projects = [
  {
    image: image1,
    title: "DEVELOPMENT",
    subtitle: "Getting tickets to the big show",
  },
  {
    image: image3,
    title: "DESIGN",
    subtitle: "Getting tickets to the big show",
  },
  {
    image: image2,
    title: "MARKETING",
    subtitle: "Getting tickets to the big show",
  },
  {
    image: image2,
    title: "ANALYTICS",
    subtitle: "Getting tickets to the big show",
  },
];

export const teamSocialIcons = [
  <FaFacebook size={"25px"} />,
  <FaLinkedin size={"25px"} />,
  <FaTwitter size={"25px"} />,
  <FaInstagram size={"25px"} />,
];
export const teamData = [
  {
    name: "Andres Berlin",
    role: `An avid open-source developer who loves to be creative and inventive. I have 20 years of experience in the field.`,
    image: image5,
    position: "Principal Software Engineer",
  },

  {
    name: "Charles Keith",
    role: `An avid open-source developer who loves to be creative and inventive. I have 20 years of experience in the field.`,
    image: image6,
    position: "UX Designer",
  },
  {
    name: "Rachel Adams",
    role: `An avid open-source developer who loves to be creative and inventive. I have 20 years of experience in the field.`,
    image: image7,
    position: "Product Design Manager",
  },
  {
    name: "Rachel Adams",
    role: `An avid open-source developer who loves to be creative and inventive. I have 20 years of experience in the field.`,
    image: image6,
    position: "Product Design Manager",
  },
];

export const contactControls = [
  {
    id: "name",
    placeholder: "Your Name",
    name: "from_name",
    type: "text",
    inputType: "input",
    className:
      "w-full bg-black text-textColor mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline",
    divClassName: "",
  },
  {
    id: "email",
    placeholder: "Your Email Address",
    type: "text",
    inputType: "input",
    name: "from_email",
    className:
      "w-full bg-black text-textColor mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline",
    divClassName: "mt-8",
  },
  {
    id: "message",
    placeholder: "Your Message",
    type: "text",
    inputType: "textArea",
    name: "message",
    divClassName: "mt-8",
    className:
      "w-full sm:h-[6.5rem] bg-black lg:h-[14.5rem] md:h-[7.5rem]  text-textColor mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline",
  },
];

export const footerIcons = [
  <FaFacebook size={"30px"} />,
  <FaLinkedin size={"30px"} />,
  <FaTwitter size={"30px"} />,
  <FaInstagram size={"30px"} />,
];
