import { Button } from "./index";
import { ComponentMeta } from "@storybook/react";

export const ButtonDefault = () => {
  return (
    <>
      <div className="flex gap-4 p-4 bg-slate-500">
        <Button type="primary" block>
          primary block
        </Button>
      </div>
      <div className="flex">
        <div className="flex flex-col flex-grow gap-4 p-4">
          <div>default</div>
          <Button type="primary">primary</Button>
          <Button type="dashed">dashed</Button>
          <Button type="link">link</Button>
          <Button type="text">text</Button>
          <Button type="default">default</Button>
          <div className="p-4 bg-slate-500">
            <Button block type="ghost">
              ghost
            </Button>
          </div>
        </div>
        <div className="flex flex-col flex-grow gap-4 p-4">
          <div>disabled</div>
          <Button disabled type="primary">
            primary
          </Button>
          <Button disabled type="dashed">
            dashed
          </Button>
          <Button disabled type="link">
            link
          </Button>
          <Button disabled type="text">
            text
          </Button>
          <Button disabled type="default">
            default
          </Button>
          <div className="p-4 bg-slate-500">
            <Button disabled block type="ghost">
              ghost
            </Button>
          </div>
        </div>
        <div className="flex flex-col flex-grow gap-4 p-4">
          <div>danger</div>
          <Button danger type="primary">
            primary
          </Button>
          <Button danger type="dashed">
            dashed
          </Button>
          <Button danger type="link">
            link
          </Button>
          <Button danger type="text">
            text
          </Button>
          <Button danger type="default">
            default
          </Button>
          <div className="p-4 bg-slate-500">
            <Button danger block type="ghost">
              ghost
            </Button>
          </div>
        </div>
        <div className="flex flex-col flex-grow gap-4 p-4">
          <div>danger disabled</div>
          <Button danger disabled type="primary">
            primary
          </Button>
          <Button danger disabled type="dashed">
            dashed
          </Button>
          <Button danger disabled type="link">
            link
          </Button>
          <Button danger disabled type="text">
            text
          </Button>
          <Button danger disabled type="default">
            default
          </Button>
          <div className="p-4 bg-slate-500">
            <Button danger disabled block type="ghost">
              ghost
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default { title: "Button", component: Button } as ComponentMeta<typeof Button>;
