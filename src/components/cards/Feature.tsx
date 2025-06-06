import { Paragraph } from "../shared/Paragraph";

interface Props {
    title: string;
    description: string;
    icon: React.ReactNode;
}

export const Feature = ({ title, description, icon }: Props) => {
 return (
    <div
      className="flex flex-col p-5 sm:p-6 lg:p-8 rounded-3xl b bg-box-bg
                     relative overflow-hidden text-center items-center"
    >
      <div className="rounded-xl bg-body p-3 text-heading-1 w-max relative">
        {" "}
        {icon}{" "}
      </div>
      <div className="mt-6 space-y-4 relative">
        <h2 className="text-lg md:text-xl font-semibold text-heading-2">
          {" "}
          {title}
        </h2>
        <Paragraph> {description}</Paragraph>
      </div>
    </div>
  );
}