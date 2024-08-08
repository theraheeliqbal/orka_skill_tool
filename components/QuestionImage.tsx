// components/ResponsiveImage.js
import Image from "next/image";

type QuestionImageType = {
  imageUrl: string;
  alt?: string;
  onError: any;
};

const QuestionImage = ({ imageUrl, alt = "", onError }: QuestionImageType) => {
  return (
    <div className="w-full rounded-lg overflow-hidden">
      <Image
        src={imageUrl}
        alt={alt}
        layout="responsive"
        width={100}
        height={100}
        onError={onError}
        className=" w-full min-h-[200px] max-h-[300px] block rounded-[10px]"
      />
    </div>
  );
};

export default QuestionImage;
