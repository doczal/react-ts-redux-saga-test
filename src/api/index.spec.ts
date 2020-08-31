import { createEndpoint } from ".";

describe("createEndpoint", () => {
  test("makes a url", () => {
    expect(
      createEndpoint("http://example.com", "path/to/resource", {
        search: "hello & world",
        limit: 20,
      })
    ).toBe(
      "http://example.com/path/to/resource?search=hello%20%26%20world&limit=20"
    );
  });
});
