import brandRecognitionIcon from "../assets/images/icon-brand-recognition.svg";
import detailedRecordsIcon from "../assets/images/icon-detailed-records.svg";
import fullyCustomizableIcon from "../assets/images/icon-fully-customizable.svg";
import facebookIcon from "../assets/images/icon-facebook.svg";
import twitterIcon from "../assets/images/icon-twitter.svg";
import pinterestIcon from "../assets/images/icon-pinterest.svg";
import instagramIcon from "../assets/images/icon-instagram.svg";

export const NAV_LINKS = ["Features", "Pricing", "Resources"];

export const FEATURES = [
  {
    icon: brandRecognitionIcon,
    title: "Brand Recognition",
    description:
      "Boost your brand recognition with each click. Generic links don\u2019t mean a thing. Branded links help instil confidence in your content.",
  },
  {
    icon: detailedRecordsIcon,
    title: "Detailed Records",
    description:
      "Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.",
  },
  {
    icon: fullyCustomizableIcon,
    title: "Fully Customizable",
    description:
      "Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.",
  },
];

export const FOOTER_LINK_GROUPS = [
  {
    heading: "Features",
    links: ["Link Shortening", "Branded Links", "Analytics"],
  },
  {
    heading: "Resources",
    links: ["Blog", "Developers", "Support"],
  },
  {
    heading: "Company",
    links: ["About", "Our Team", "Careers", "Contact"],
  },
];

export const SOCIAL_LINKS = [
  { name: "Facebook", icon: facebookIcon, href: "https://facebook.com" },
  { name: "Twitter", icon: twitterIcon, href: "https://twitter.com" },
  { name: "Pinterest", icon: pinterestIcon, href: "https://pinterest.com" },
  { name: "Instagram", icon: instagramIcon, href: "https://instagram.com" },
];
