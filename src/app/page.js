import Image from "next/image";
import BannerPage from "./main/banner/page";
import FeaturedCard from "./main/featured-card/page";
import ExtraSection from "./main/extra-section/page";

export default function Home() {
  return (
    <>
    <BannerPage></BannerPage>
    <FeaturedCard></FeaturedCard>
    <ExtraSection></ExtraSection>
    </>
    
  );
}
