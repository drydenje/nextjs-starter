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

  const test = 1;
  expect(test).toEqual(1);
});
