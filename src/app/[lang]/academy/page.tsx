import CourseCard from "@/components/CourseCard";
import { getListPage, getSinglePage } from "@/lib/contentParser";
import { getActiveLanguages, getLanguageObj } from "@/lib/languageParser";
import { markdownify } from "@/lib/utils/textConverter";
import PageHeader from "@/partials/PageHeader";
import SeoMeta from "@/partials/SeoMeta";
import { Author } from "@/types";
import path from "path";

const Academy = ({ params }: { params: { lang: string } }) => {
  const language = getLanguageObj(params.lang);
  const authorIndex: Author = getListPage(
    path.join(language.contentDir, "academycourses/_index.md"),
  );
  const courses: Author[] = getSinglePage(
    path.join(language.contentDir, "academycourses"),
  );
  const { title, content, meta_title, description, image } =
    authorIndex.frontmatter;
  return (
    <>
      <SeoMeta
        title={title}
        meta_title={meta_title}
        description={description}
        image={image}
      />
      <PageHeader title={title}>
        <h2
          className="mb-4 text-base lg:text-xl bg-clip-text text-black"
          dangerouslySetInnerHTML={markdownify(content ?? "")}
        />
      </PageHeader>
      <section className="section-sm pb-0">
        <div className="container">
          <div className="row justify-center">
            {courses.map((course: Author, index: number) => (
              <div className="mb-14 md:col-6 lg:col-4" key={index}>
                <CourseCard data={course} lang={params.lang} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Academy;

// remove dynamicParams
export const dynamicParams = false;

// generate static params
export async function generateStaticParams() {
  return getActiveLanguages().map((language) => ({
    lang: language.languageCode,
  }));
}
