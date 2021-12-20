import { render, screen } from "@testing-library/react";
import { SignInButton } from ".";

jest.mock("next-auth/react");

describe("SignButton component", () => {
  it("renders correctly when user is not authenticated", () => {
    const useSessionMocked = jest.spyOn(
      require("next-auth/react"),
      "useSession"
    );
    useSessionMocked.mockReturnValueOnce({
      data: null,
      status: "unauthenticated",
    });

    render(<SignInButton />);

    expect(screen.getByText("Sign in with Github")).toBeInTheDocument();
  });

  it("renders correctly when user is authenticated", () => {
    const useSessionMocked = jest.spyOn(
      require("next-auth/react"),
      "useSession"
    );
    useSessionMocked.mockReturnValueOnce({
      data: {
        user: { name: "Diego Masin", email: "diegoifce@gmail.com" },
        expires: "fake-expires",
      },
      status: "authenticated",
    });

    render(<SignInButton />);

    expect(screen.getByText("Diego Masin")).toBeInTheDocument();
  });
});
