import ServiceCard from "@/components/ServiceCard";
import { getListPage, getSinglePage } from "@/lib/contentParser";
import { getActiveLanguages, getLanguageObj } from "@/lib/languageParser";
import PageHeader from "@/partials/PageHeader";
import SeoMeta from "@/partials/SeoMeta";
import { Feature } from "@/types";
import path from "path";
import languages from "@/config/language.json";
import { markdownify } from "@/lib/utils/textConverter";

const Servicespage = ({ params }: { params: { lang: string } }) => {
  const lang = params.lang;
  const language = languages.find(
    (language) => language.languageCode === lang,
  )!;
  const servicespage = getListPage(
    path.join(language?.contentDir, "servicespage/_index.md"),
  );

  const { frontmatter } = servicespage;
  const {
    banner,
    features,
  }: {
    banner: {
      title: string;
      image: string;
      content?: string;
    };
    features: Feature[];
  } = frontmatter;

  return (
    <>
      <SeoMeta
        title={banner.title}
        meta_title={""}
        description={""}
        image={banner.image}
      />
      <PageHeader title={banner.title}>
        <h2
          className="mb-4 text-base lg:text-xl bg-clip-text text-black"
          dangerouslySetInnerHTML={markdownify(banner.content ?? "")}
        />
      </PageHeader>
      <section className="section-sm pb-5">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index: number) => (
              <div key={index} className="flex">
                <ServiceCard data={feature} lang={params.lang} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Servicespage;

// // remove dynamicParams
// export const dynamicParams = false;

// // generate static params
// export async function generateStaticParams() {
//   return getActiveLanguages().map((language) => ({
//     lang: language.languageCode,
//   }));
// }
