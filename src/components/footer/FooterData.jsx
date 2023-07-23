import { Email } from "@mui/icons-material";
import { Room } from "@mui/icons-material";
import { Phone } from "@mui/icons-material";

const footerData = [
  {
    title: "THE HONEYCOMB MINISTRIES",
    paragraph:
      "A non-denominational end-time revival movement with the core mandate of adherence to the Great Commission by igniting a passionate desire for ministry among Christian youth worldwide.",
  },
  {
    title: "QUICK LINKS",
    links: [
      { label: "Home", href: "/" },
      { label: "Founder", href: "/events" },
      {label: "Gallery", href: "/gallery"},
      { label: "Contact", href: "/contact" },
      {
        label: "Mentorship",
        target: "_blank",
        href: "https://docs.google.com/forms/d/e/1FAIpQLSeD-q_go2QZQ2LigCqMMinJEadCzeWwIob-uu_5sAhwB1HE7g/viewform?vc=0&c=0&w=1&flr=0&usp=mail_form_link",
      },
    ],
  },
  {
    title: "HAVE QUESTIONS?",
    emailIcon: <Email />,
    locationIcon: <Room />,
    phoneIcon: <Phone />,
    location: "141 Lorem ipsum dolor Road, Accra, Ghana",
    phone: "+233 24 032 7086 || + 233 59 626 9259 || +233 55  706 6190",
    email: "thehoneycombministries@gmail.com",
  },
];

export default footerData;
