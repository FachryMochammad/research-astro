import { Button } from "antd";

export const Card = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <div className="bg-white mt-4 rounded-lg border border-gray-200 p-4 w-max">
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p className="text-gray-700">{description}</p>
      <Button type="primary" className="mt-4">
        <a href="/home">Learn More</a>
      </Button>
    </div>
  );
};
