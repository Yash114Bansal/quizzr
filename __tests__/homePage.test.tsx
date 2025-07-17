import { fireEvent, render, screen } from "@testing-library/react";
import Home from "@/app/page";
import { AppRouterContextProviderMock } from "@/utils/app-router-mock-provider";

jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
}));

describe("Home Page - Rendering", () => {
  it("should have home page text", () => {
    render(<Home />);
    expect(screen.getByText("quizzr")).toBeInTheDocument();
  });

  it("should have home page buttons", () => {
    render(<Home />);
    expect(screen.getByRole("button", { name: "Play" })).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "Create quizzr" }),
    ).toBeInTheDocument();
  });

  it("should click on play button and navigate to player page", async () => {
    const push = jest.fn();

    render(
      <AppRouterContextProviderMock router={{ push }}>
        <Home />
      </AppRouterContextProviderMock>,
    );

    fireEvent.click(screen.getByRole("button", { name: "Play" }));

    expect(push).toHaveBeenCalledWith("/player", expect.anything());
  });

  it("should click on create quizzr button and navigate to admin page", async () => {
    const push = jest.fn();

    render(
      <AppRouterContextProviderMock router={{ push }}>
        <Home />
      </AppRouterContextProviderMock>,
    );

    fireEvent.click(screen.getByRole("button", { name: "Create quizzr" }));

    expect(push).toHaveBeenCalledWith("/admin", expect.anything());
  });
});
