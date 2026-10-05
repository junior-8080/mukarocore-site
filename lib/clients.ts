export type Client = {
  name: string;
  industry: string;
  link: string;
  logo: string;
  /** Tile colour behind the logo, matched to each client's own artwork (not a site theme token). */
  logoBackground: string;
};

export const clients: Client[] = [
  {
    name: "Dasanda Closet",
    industry: "Clothing & Fashion",
    link: "https://www.dasandacloset.com/",
    logo: "/images/clients/dasanda-closet.webp",
    logoBackground: "#fbf6ef",
  },
  {
    name: "Suturah By Feesah",
    industry: "Clothing & Fashion",
    link: "https://www.suturahbyfeesah.com/",
    logo: "/images/clients/suturah-by-feesah.webp",
    logoBackground: "#000000",
  },
  {
    name: "Greenex Cargo",
    industry: "Logistics & Shipment",
    link: "https://www.greenexcargo.com/",
    logo: "/images/clients/greenex-cargo.webp",
    logoBackground: "#173d12",
  },
  {
    name: "Kokuromoti",
    industry: "E-learning Platform",
    link: "https://www.kokuromoti.com/",
    logo: "/images/clients/kokuromoti.webp",
    logoBackground: "#ffffff",
  },
];
