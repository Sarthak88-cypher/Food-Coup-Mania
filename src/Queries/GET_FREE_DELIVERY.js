import { gql } from "apollo-boost";

export const FREE_OFFERS = gql`
  query getAllFreeDeliveryOffers {
    offers(where: { freeDelivery: { _eq: true } }) {
      restroCode
      priceBar
      id
      freeDelivery
      dish
      discountType
      discount
      Cuisine
      restaurantsRelatedToOffers {
        dishDescription
        dishName
        dishPrice
        id
        restroName
      }
      foodImg
    }
  }
`;
