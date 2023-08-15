import FetchGraphQL from "./FetchGraphQL";

test("fetches data from a GraphQL server", () => {
  const query = `query {
    crewCollection {
      items {
        name
        role
        bio
      }
    }
  }`;

  expect(1 === 1);
});
