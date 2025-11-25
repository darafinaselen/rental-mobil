"use client";

import { useEffect, useState } from "react";

const GoogleTranslate = () => {
  const [isScriptLoaded, setIsScriptLoaded] = useState(false);

  useEffect(() => {
    // Check if script is already present
    if (document.querySelector('script[src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"]')) {
      setIsScriptLoaded(true);
      return;
    }

    // Define the initialization function globally
    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: "id",
          autoDisplay: false,
        },
        "google_translate_element"
      );
    };

    // Create and append the script
    const script = document.createElement("script");
    script.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    script.async = true;
    script.onload = () => setIsScriptLoaded(true);
    document.body.appendChild(script);

    return () => {
      // Cleanup if necessary, though usually not needed for this script
      // delete window.googleTranslateElementInit;
    };
  }, []);

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <div id="google_translate_element" className="shadow-lg rounded-md overflow-hidden bg-white p-1" />
      <style jsx global>{`
        /* Hide the Google Translate top bar */
        .goog-te-banner-frame.skiptranslate {
          display: none !important;
        }
        body {
          top: 0px !important;
        }
        /* Optional: Customize the widget appearance */
        #google_translate_element .goog-te-gadget-simple {
          background-color: #fff;
          border: 1px solid #e2e8f0;
          padding: 4px 8px;
          border-radius: 4px;
          font-size: 14px;
          line-height: 20px;
          display: inline-block;
          cursor: pointer;
        }
        #google_translate_element .goog-te-gadget-simple img {
            display: none;
        }
      `}</style>
    </div>
  );
};

export default GoogleTranslate;
