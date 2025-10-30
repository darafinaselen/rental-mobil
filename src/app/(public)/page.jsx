export const dynamic = "force-dynamic";

import HeroSection from "@/components/homepage/HeroSection";
import WhyUsSection from "@/components/homepage/WhyUsSection";
import ServicesSection from "@/components/homepage/ServicesSection";
import FleetSection from "@/components/homepage/FleetSection";
import GallerySection from "@/components/homepage/GallerySection";
import FaqSectionWrapper from "@/components/homepage/FaqSectionWrapper";
import WhatsAppCtaSection from "@/components/shared/WhatsAppCtaSection";
import PaketTourSection from "@/components/sewa-mobil-layanan/PaketTourSection";
import TourTeaserSection from "@/components/homepage/TourTeaserSection";
import PartnersSection from "@/components/homepage/PartnersSection";
import VideoSection from "@/components/homepage/VideoSection";
import PdfPreview from "@/components/shared/PdfPreview";
import SectionHeading from "@/components/SectionHeading";

export const metadata = {
  title: "Reborn Lombok Trans - Rental Mobil Terpercaya di Lombok",
  description:
    "Cari sewa mobil di Lombok? Kami menyediakan armada terbaru untuk rental mobil lepas kunci atau dengan sopir. Harga terjangkau, pelayanan terbaik. Hubungi kami!",
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <VideoSection />
      <WhyUsSection />
      <ServicesSection />
      <FleetSection />
      <TourTeaserSection />
      <PaketTourSection />
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <SectionHeading
            title="Izin Perusahaan"
            description="Reborn Lombok Trans sudah berizin."
            align="center"
            size="md"
            underline
            underlineColor="bg-amber-500"
            underlineWidth="lg"
            underlineOffset="md"
            underlineClassName="h-[3px] w-24 md:w-32 lg:w-40"
            className="mb-8 md:mb-12"
            titleClassName="text-primary"
          />

          <PdfPreview
            pdfUrl="/NIB RebronlombokMandiri.pdf"
            imageUrl="/NIB RebronlombokMandiri.png"
            altText="Preview Profil Perusahaan Reborn Lombok Trans"
            className="max-w-md mx-auto"
          />
        </div>
      </section>
      <GallerySection />
      <PartnersSection />
      <FaqSectionWrapper />
      <div className="mx-auto w-full max-w-md md:max-w-3xl lg:max-w-6xl px-4 md:px-6 lg:px-8 pb-12">
        <WhatsAppCtaSection
          waUrlBase="https://wa.me/6285353818685"
          imageSrc="/imageforctasection.png"
          imageAlt={`Gallery`}
          className="shadow-md rounded-2xl"
        />
      </div>
    </>
  );
}
