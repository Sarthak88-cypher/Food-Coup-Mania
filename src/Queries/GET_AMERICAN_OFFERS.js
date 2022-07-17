import { gql } from "apollo-boost";

export const AMERICAN_OFFERS = gql`
query getAmericanOffers {
    offers(where: {Cuisine: {_eq: "American"}}) {
      Cuisine
      discount
      discountType
      dish
      freeDelivery
      id
      priceBar
      restroCode
      foodImg
      restaurantsRelatedToOffers {
        dishDescription
        dishName
        dishPrice
        restroName
        id
      }
    }
  }
`;
