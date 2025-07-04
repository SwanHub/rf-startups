import Link from "next/link";
import { RoboflowLogo } from "./RoboflowLogo";

const FOOTER_COLUMNS = [
  {
    title: "Product",
    links: [
      { label: "Universe", url: "https://roboflow.com/universe" },
      { label: "Annotate", url: "https://roboflow.com/annotate" },
      { label: "Train", url: "https://roboflow.com/train" },
      { label: "Workflows", url: "https://roboflow.com/workflows/build" },
      { label: "Deploy", url: "https://roboflow.com/deploy" },
      { label: "Cloud Hosting", url: "https://roboflow.com/managed-compute" },
      { label: "Pricing", url: "https://roboflow.com/pricing" },
      { label: "Talk to Sales", url: "https://roboflow.com/sales" },
      { label: "Enterprise", url: "https://roboflow.com/enterprise" },
    ],
  },
  {
    title: "Ecosystem",
    links: [
      { label: "Notebooks", url: "https://github.com/roboflow/notebooks" },
      {
        label: "Autodistill",
        url: "https://github.com/autodistill/autodistill",
      },
      { label: "Supervision", url: "https://github.com/roboflow/supervision" },
      { label: "Inference", url: "https://github.com/roboflow/inference" },
      { label: "Roboflow 100", url: "https://blog.roboflow.com/roboflow-100/" },
      { label: "Open Source", url: "https://roboflow.com/open-source" },
      { label: "Hardware", url: "https://roboflow.com/hardware" },
    ],
  },
  {
    title: "Developers",
    links: [
      { label: "Documentation", url: "https://docs.roboflow.com/" },
      { label: "User Forum", url: "https://discuss.roboflow.com/" },
      { label: "Changelog", url: "https://docs.roboflow.com/changelog" },
      { label: "What is computer vision?", url: "https://roboflow.com/learn" },
      { label: "Weekly Product Webinar", url: "https://lu.ma/roboflow" },
      {
        label: "Convert Annotation Formats",
        url: "https://roboflow.com/formats",
      },
      { label: "Computer Vision Models", url: "https://roboflow.com/models" },
      {
        label: "Model Playground",
        url: "https://playground.roboflow.com/open-prompt",
      },
    ],
  },
  {
    title: "Industries",
    links: [
      {
        label: "Building & Construction",
        url: "https://roboflow.com/industries/building-construction-material",
      },
      {
        label: "Food & Beverage",
        url: "https://roboflow.com/industries/food-beverage",
      },
      { label: "Logistics", url: "https://roboflow.com/industries/logistics" },
      {
        label: "Manufacturing",
        url: "https://roboflow.com/industries/manufacturing",
      },
      {
        label: "Oil and Gas",
        url: "https://roboflow.com/industries/oil-and-gas",
      },
      {
        label: "Safety and Security",
        url: "https://roboflow.com/industries/safety-and-security",
      },
      {
        label: "Transportation",
        url: "https://roboflow.com/industries/transportation",
      },
      {
        label: "Explore All Industries",
        url: "https://roboflow.com/industries",
      },
      {
        label: "Customer Stories",
        url: "https://roboflow.com/customer-stories",
      },
    ],
  },
  {
    title: "Models",
    links: [
      { label: "RF-DETR", url: "https://roboflow.com/model/rf-detr" },
      { label: "YOLO11", url: "https://roboflow.com/model/yolo11" },
      { label: "YOLOv8", url: "https://roboflow.com/model/yolov8" },
      { label: "YOLOv5", url: "https://roboflow.com/model/yolov5" },
      { label: "Florence-2", url: "https://roboflow.com/model/florence-2" },
      { label: "SAM 2", url: "https://roboflow.com/model/segment-anything-2" },
      {
        label: "Multimodal Models",
        url: "https://roboflow.com/model-feature/multimodal-vision",
      },
      { label: "Explore All Models", url: "https://roboflow.com/models" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", url: "https://roboflow.com/about" },
      { label: "Blog", url: "https://blog.roboflow.com/" },
      { label: "Careers", url: "https://roboflow.com/careers" },
      { label: "Press", url: "https://roboflow.com/press" },
      { label: "Contact", url: "https://discuss.roboflow.com/" },
      { label: "Service Status", url: "https://status.roboflow.com/" },
    ],
  },
];

interface FooterColumnProps {
  title: string;
  links: { label: string; url: string }[];
}

const FooterColumn = ({ title, links }: FooterColumnProps) => {
  return (
    <div>
      <h3 className="font-semibold mb-4 text-white">{title}</h3>
      <ul className="space-y-3 text-sm">
        {links.map((link, index) => (
          <li key={index}>
            <Link
              href={link.url}
              className="text-gray-400 hover:text-violet-300 transition-colors"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export const Section_Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <TopAction />
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8">
          {FOOTER_COLUMNS.map((column, index) => (
            <FooterColumn
              key={index}
              title={column.title}
              links={column.links}
            />
          ))}
        </div>
      </div>
    </footer>
  );
};

const TopAction = () => {
  return (
    <div className="border-b border-gray-800 mb-12 pb-8 max-w-screen-xl mx-auto px-6">
      <div className="flex justify-between items-center">
        <RoboflowLogo inverted showTag={false} />

        <div className="flex items-center space-x-3">
          <Link
            href="#"
            className="bg-gray-800 hover:bg-gray-500 p-3 rounded-none transition-colors"
          >
            <svg
              className="w-4 h-4 text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </Link>
          <Link
            href="#"
            className="bg-gray-800 hover:bg-gray-500 p-3 rounded-none transition-colors"
          >
            <svg
              className="w-4 h-4 text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </Link>
          <Link
            href="#"
            className="bg-gray-800 hover:bg-gray-500 p-3 rounded-none transition-colors"
          >
            <svg
              className="w-4 h-4 text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
          </Link>
          <Link
            href="#"
            className="bg-gray-800 hover:bg-gray-500 p-3 rounded-none transition-colors"
          >
            <svg
              className="w-4 h-4 text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};
