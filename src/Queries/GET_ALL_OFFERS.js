import { gql } from "apollo-boost";

export const ALL_OFFERS = gql`
  query getAllOffers {
    offers {
      discount
      discountType
      dish
      freeDelivery
      id
      priceBar
      restroCode
      Cuisine
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
