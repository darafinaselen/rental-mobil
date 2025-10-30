import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

/**
 * @param {string} pdfUrl
 * @param {string} imageUrl
 * @param {string} altText
 * @param {string} [className]
 */
const PdfPreview = ({ pdfUrl, imageUrl, altText, className }) => {
  return (
    <Link
      href={pdfUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "block relative w-full overflow-hidden rounded-lg shadow-md group transition-shadow hover:shadow-lg",
        className
      )}
    >
      <Image
        src={imageUrl}
        alt={altText}
        width={595}
        height={842}
        className="w-full h-auto"
      />

      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="48"
          height="48"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
          <polyline points="15 3 21 3 21 9"></polyline>
          <line x1="10" y1="14" x2="21" y2="3"></line>
        </svg>
      </div>
    </Link>
  );
};

export default PdfPreview;
