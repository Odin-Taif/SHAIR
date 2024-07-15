import ImageFallback from "@/helpers/ImageFallback";
import { markdownify } from "@/lib/utils/textConverter";

const ServiceCard = ({ data, lang }: { data: any; lang: string }) => {
  const { title, content, image } = data;
  return (
    <div className="service-card flex flex-col items-center justify-between h-full rounded bg-theme-light p-8 text-center dark:bg-darkmode-theme-light">
      {image && (
        <ImageFallback
          className="mx-auto mb-6 rounded"
          src={image}
          alt={title}
          width={120}
          height={120}
        />
      )}
      <h4 className="mb-3">{title}</h4>
      <p
        className="mb-8 text-lg flex-grow"
        dangerouslySetInnerHTML={markdownify(content)}
      />
    </div>
  );
};

export default ServiceCard;
