import languages from "@/config/language.json";
import { getListPage } from "@/lib/contentParser";
import { getActiveLanguages } from "@/lib/languageParser";
import { markdownify } from "@/lib/utils/textConverter";

import SeoMeta from "@/partials/SeoMeta";
import Testimonials from "@/partials/Testimonials";
import { Button } from "@/types";
import path from "path";

// remove dynamicParams
export const dynamicParams = false;

// generate static params
export async function generateStaticParams() {
  return getActiveLanguages().map((language) => ({
    lang: language.languageCode,
  }));
}

const Home = ({ params }: { params: { lang: string } }) => {
  const lang = params.lang;
  const language = languages.find(
    (language) => language.languageCode === lang,
  )!;
  const homepage = getListPage(
    path.join(language?.contentDir, "homepage/_index.md"),
  );
  const testimonial = getListPage(
    path.join(language.contentDir, "sections/testimonial.md"),
  );

  const { frontmatter } = homepage;
  const {
    banner,
  }: {
    banner: {
      title: string;
      image: string;
      video: string;
      content?: string;
      button?: Button;
    };
  } = frontmatter;

  return (
    <>
      <SeoMeta />

      <section className="relative w-full h-screen">
        {banner.video && (
          <div className="absolute inset-0 overflow-hidden">
            <video
              className="w-full h-full object-cover"
              src={banner.video}
              autoPlay
              loop
              muted
              playsInline
            />
          </div>
        )}
        <div className="relative z-10 flex items-center justify-end w-full h-full">
          <div className="text-left p-8 md:w-6/12">
            <h1
              className="mb-4 text-3xl lg:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-cyan-500 to-cyan-900"
              dangerouslySetInnerHTML={markdownify(banner.title)}
            />
            <h2
              className="mb-4 text-3xl lg:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-cyan-500 to-cyan-900"
              dangerouslySetInnerHTML={markdownify(banner.content ?? "")}
            />
          </div>
        </div>
      </section>

      <Testimonials data={testimonial} />
      {/* <CallToAction data={callToAction} /> */}
    </>
  );
};

export default Home;
