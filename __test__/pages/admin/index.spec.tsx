import { render } from "@testing-library/react";
import Admin from "@/pages/admin";

describe("Homepage", () => {
  it("renders page", () => {
    const { container } = render(<Admin />);
    expect(container).toMatchSnapshot();
  });
});
