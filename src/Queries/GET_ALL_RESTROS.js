import { gql } from "apollo-boost";

export const ALL_RESTROS = gql`
query getAllRestros {
    restaurant {
      dishDescription
      dishName
      dishPrice
      id
      restroName
    }
  }
`;
