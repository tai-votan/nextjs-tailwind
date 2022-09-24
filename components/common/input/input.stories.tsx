import { Input } from "./index";
import { ComponentMeta } from "@storybook/react";

export const ButtonDefault = () => {
  return (
    <>
      <div className="flex gap-4 p-4 bg-slate-500">
        <Input />
      </div>
    </>
  );
};

export default { title: "Input", component: Input } as ComponentMeta<typeof Input>;
