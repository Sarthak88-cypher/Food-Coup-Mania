import { gql } from "apollo-boost";

export const ITALIAN_OFFERS = gql`
query getItalianOffers {
    offers(where: {Cuisine: {_eq: "Italian"}}) {
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
        id
        restroName
      }
    }
  }
`;
