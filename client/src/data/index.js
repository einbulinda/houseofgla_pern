// sidebar imports
import {
  UilEstate,
  UilClipboardAlt,
  UilUser,
  UilPackage,
  UilChart,
  UilSignoutAlt,
} from "@iconscout/react-unicons";
import img from "assets/einImg.jpg";
import * as url from "navigation/CONSTANTS";

// Analytics Cards Imports
import { UilUsdSquare, UilMoneyWithdrawal } from "@iconscout/react-unicons";

// Slider Data
export const SidebarData = [
  {
    icon: UilEstate,
    heading: "Dashboard",
    path: url.ADMIN,
  },
  {
    icon: UilClipboardAlt,
    heading: "Orders",
    path: url.ORDERS,
  },
  {
    icon: UilUser,
    heading: "Customers",
    path: url.CUSTOMERS,
  },
  {
    icon: UilPackage,
    heading: "Products",
    path:url.PRODUCTS
  },
  {
    icon: UilChart,
    heading: "Analytics",
    path:url.ANALYTICS
  },
];

// Analytics Cards Data
export const cardsData = [
  {
    title: "Sales",
    color: {
      backGround: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
      boxShadow: "0px 10px 20px 0px #e0c6f5",
    },
    barValue: 70,
    value: "25,970",
    png: UilUsdSquare,
    series: [
      {
        name: "Sales",
        data: [31, 40, 28, 51, 42, 109, 100],
      },
    ],
  },
  {
    title: "Revenue",
    color: {
      backGround: "linear-gradient(180deg, #FF919D 0%, #FC929D 100%)",
      boxShadow: "0px 10px 20px 0px #FDC0C7",
    },
    barValue: 80,
    value: "14,270",
    png: UilMoneyWithdrawal,
    series: [
      {
        name: "Revenue",
        data: [10, 100, 50, 70, 80, 30, 40],
      },
    ],
  },
  {
    title: "Expenses",
    color: {
      backGround:
        "linear-gradient(rgb(248, 212, 154) -146.42%, rgb(255 202 113) -46.42%)",
      boxShadow: "0px 10px 20px 0px #F9D59B",
    },
    barValue: 60,
    value: "4,270",
    png: UilClipboardAlt,
    series: [
      {
        name: "Expenses",
        data: [10, 25, 15, 30, 12, 15, 20],
      },
    ],
  },
];

export const tableData = [
  {
    name: "Arshia 7Pc Knife Set",
    trackingID: 243987,
    date: "4 April 2022",
    status: "Approved",
  },
  {
    name: "38Pc Cutlery Set",
    trackingID: 277987,
    date: "7 April 2022",
    status: "Approved",
  },
  {
    name: "6 X 6 Feather Duvet",
    trackingID: 240087,
    date: "14 April 2022",
    status: "Pending",
  },
  {
    name: "Silent Vaccum Cleaner",
    trackingID: 2439444,
    date: "1 May 2022",
    status: "Ordered",
  },
  {
    name: "8Ltr Pressure Cooker",
    trackingID: 243911,
    date: "18 May 2022",
    status: "Approved",
  },
];

// Recent Updates
export const UpdatesData = [
  {
    img: img,
    name: "Einstein Bulinda",
    notify: "has ordered 8Pc Granite Cookware.",
    time: "25 seconds ago",
  },
  {
    img: img,
    name: "Collins Isabwa",
    notify: 'has received Gold Line 11" Plate.',
    time: "30 minutes ago",
  },
  {
    img: img,
    name: "Des Khamati",
    notify: "has ordered 38Pc Gold Cutlery Set.",
    time: "2 hours ago",
  },
];
