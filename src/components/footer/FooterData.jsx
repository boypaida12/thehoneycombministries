import { Email } from "@mui/icons-material"
import { Room } from "@mui/icons-material"
import { Phone } from "@mui/icons-material"

const footerData = [
    {
        title : "THE HONEYCOMB MINISTRIES",
        paragraph: "A small river named Duden flows by their place and supplies it with the necessary regelialia."
    },
    {
        title: "QUICK LINKS",
        links: [
            {label: "Home", href: "/"},
            {label: "Events", href: "/events"},
            {label: "Contact", href: "/contact-us"},
            {label: "Mentorship", href: "/mentorship"},
        ],
    },
    {
        title: "HAVE QUESTIONS?",
        emailIcon: <Email/>,
        locationIcon: <Room/>,
        phoneIcon: <Phone/>,
        location: "141 Lorem ipsum dolor Road, Accra, Ghana",
        phone: "+233 24 032 7086 || + 233 59 626 9259 || +233 55  706 6190",
        email: "thehoneycombministries@gmail.com",
    }

]

export default footerData