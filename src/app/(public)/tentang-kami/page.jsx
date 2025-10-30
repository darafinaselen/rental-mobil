import TentangSection from "@/components/tentang-kami/TentangSection";
import VisiMisiSection from "@/components/tentang-kami/VisiMisiSection";
import GallerySection from "@/components/tentang-kami/GallerySection";
import HeroSection from "@/components/homepage/HeroSection";
import PdfPreview from "@/components/shared/PdfPreview";
import WhatsAppCtaSection from "@/components/shared/WhatsAppCtaSection";
import SectionHeading from "@/components/SectionHeading";

export const metadata = {
  title: "Tentang Kami - Penyedia Rental Mobil Terpercaya di Lombok",
  description:
    "Kenali lebih dekat penyedia rental mobil Anda di Lombok. Kami berkomitmen memberikan layanan terbaik dengan armada berkualitas dan harga yang kompetitif.",
};

export default function TentangKami() {
  return (
    <>
      <main>
        <HeroSection
          imageOnRight={false}
          imageSrc="/Hero-3-1.png"
          title={
            <>
              <span className="text-black">Mengenal Kami </span>
              <span className="text-primary">Lebih Dekat</span>
            </>
          }
          subtitle="Pelajari lebih lanjut tentang sejarah, visi, dan nilai-nilai yang membentuk kami."
        />
        <TentangSection />
        <VisiMisiSection />
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
        <div className="mx-auto w-full max-w-md md:max-w-3xl lg:max-w-6xl px-4 md:px-6 lg:px-8 pb-12">
          <WhatsAppCtaSection
            waUrlBase="https://wa.me/6285353818685"
            imageSrc="/imageforctasection.png"
            imageAlt={`Gallery`}
            className="shadow-md rounded-2xl"
          />
        </div>
      </main>
    </>
  );
}
