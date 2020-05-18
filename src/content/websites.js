import JR_mockup from "../images/JR_mockup_w800.png"
import JR_mob from "../images/JR_portfolio_840x600_q80.jpg"
import JR_tab from "../images/JR_portfolio_1242x600_q80.jpg"
import JR_desk from "../images/JR_portfolio_1683x600_q80.jpg"

import SC_mockup from "../images/SoCakes__macbookAir__homepage__800px.png"
import SC_mob from "../images/SC_portfolio_840x600_q80.jpg"
import SC_tab from "../images/SC_portfolio_1157x600_q80.jpg"
import SC_desk from "../images/SC_portfolio_1748x600_q80.jpg"

export const sophistiCakes = {
  title: "SophistiCakes",
  subtitle: "Cake Designer",
  description: `SophistiCakes is an independent cake business based in Sheffield. The goal was to design a site that showcases the owner's talents and encourage potential customers to get in touch. The website was built using React and Gatsby.`,
  url: "https://socakes.co.uk",
  mockup: SC_mockup,
  image: {
    mobile: SC_mob,
    tablet: SC_tab,
    desktop: SC_desk,
  },
  imageMobile: SC_mob,
  imageTablet: SC_tab,
  imageDesktop: SC_desk,
}

export const jamesRidgway = {
  title: "James Ridgway",
  subtitle: "Custom Ghost Theme",
  description: `James wanted to move his personal site from a custom Rails app to Ghost. My goal was to design and code a modern theme that fitted his existing content and provided the best reading experience for visitors.  The theme was created using the Handlebars templating engine and Sass stylesheets.`,
  url: "https://jamesridgway.co.uk",
  mockup: JR_mockup,
  image: {
    mobile: JR_mob,
    tablet: JR_tab,
    desktop: JR_desk,
  },
  imageMobile: JR_mob,
  imageTablet: JR_tab,
  imageDesktop: JR_desk,
}
