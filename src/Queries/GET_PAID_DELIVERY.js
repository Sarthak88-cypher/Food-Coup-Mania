import { gql } from "apollo-boost";

export const PAID_OFFERS = gql`
  query getAllPaidDeliveryOffers {
    offers(where: { freeDelivery: { _eq: false } }) {
      discount
      discountType
      dish
      freeDelivery
      id
      priceBar
      restroCode
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
