import Footer from "@/components/common/Footer";
import { Navbar } from "@/components/common/Navbar";
import ContactUs from "@/components/landing_page/ContactUs";
import FAQ from "@/components/landing_page/FAQ";
import { PromoSection } from "@/components/landing_page/PromoSection";
import WhatWeDo from "@/components/landing_page/WhatWeDo";
import WhatWeOffer from "@/components/landing_page/WhatWeOffer";
import WhoAreWe from "@/components/landing_page/WhoAreWe";

export default function Home() {
  return (
    <main>
      <Navbar />
      <PromoSection />
      <WhoAreWe />
      <WhatWeDo />
      <WhatWeOffer />
      <ContactUs />
      <FAQ />
      <Footer />
    </main>
  );
}
