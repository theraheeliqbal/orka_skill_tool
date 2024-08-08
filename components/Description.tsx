type DescriptionType = {
  description: string;
};
const Description = ({ description }: DescriptionType) => {
  return <p className="text-white">{description}</p>;
};

export default Description;
