import Social from "@/components/Social";
import ImageFallback from "@/helpers/ImageFallback";
import { slugSelector } from "@/lib/utils/slugSelector";
import { plainify } from "@/lib/utils/textConverter";
import Link from "next/link";

const CourseCard = ({ data, lang }: { data: any; lang: string }) => {
  const { title, Sprache, period, price, city, content, image, Requirements } =
    data.frontmatter;
  return (
    <div className="rounded bg-theme-light p-8 text-center dark:bg-darkmode-theme-light">
      {image && (
        <ImageFallback
          className="mx-auto mb-6 rounded"
          src={image}
          alt={title}
          width={120}
          height={120}
        />
      )}
      <h4 className="mb-3">
        <Link href={slugSelector(lang, `/authors/${data.slug}`)}>{title}</Link>
      </h4>
      <div className="text-left">
        <p className="mb-4">
          <span className="font-bold">Language</span> : {plainify(Sprache)}
        </p>
        <p className="mb-4">
          {" "}
          <span className="font-bold">Duration</span> : {plainify(period)}
        </p>
        <p className="mb-4">
          {" "}
          <span className="font-bold">Price</span> : {plainify(price)}
        </p>
        <p className="mb-4">
          {" "}
          <span className="font-bold">Location</span> : {plainify(city)}
        </p>
        <p className="mb-4">
          <span className="font-bold">Requirements</span> :{" "}
          {plainify(Requirements)}
        </p>

        <p className="mb-4">{plainify(data.content)}</p>
      </div>
    </div>
  );
};

export default CourseCard;
