import { render, screen } from "@testing-library/react"
import Greet from "./greet"

describe("Greet", () => {
    test("is hello in there", () => {
      render(<Greet name="Nasir" />);
      const textElem = screen.getByText("Hello Nasir");
      expect(textElem).toBeInTheDocument();
    });
})