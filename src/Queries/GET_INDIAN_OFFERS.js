import { gql } from "apollo-boost";

export const INDIAN_OFFERS = gql`
query getIndianOffers {
    offers(where: {Cuisine: {_eq: "Indian"}}) {
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
