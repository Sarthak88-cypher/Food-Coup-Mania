import React from "react";
import PropTypes from "prop-types";
import { makeStyles, Typography } from "@material-ui/core";
import OfferCardWrapper from "../Offers/OfferCardWrapper";
import { INDIAN_OFFERS } from "../../Queries/GET_INDIAN_OFFERS";
import { ITALIAN_OFFERS } from "../../Queries/GET_ITALIAN_OFFERS";
import { AMERICAN_OFFERS } from "../../Queries/GET_AMERICAN_OFFERS";

const useStyles = makeStyles((theme) => ({
  Msg: {
    fontFamily: "system-ui",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: "22px",
    color: "#FFF",
    letterSpacing: "0.02em",
    margin: "10px 0px",
  },
}));

const YourCuisine = (props) => {
  const classes = useStyles();
  const { userDetails } = props;

  //Here we get the userDeatils filled by the user at the time of login.
  //Then we find the user favourite cuisine query with the help of Query Mapper and then we call OfferCardWrapper component by passing query to it.

  const QueryMapper = {
    Indian: INDIAN_OFFERS,
    Italian: ITALIAN_OFFERS,
    American: AMERICAN_OFFERS,
  };
  const name = userDetails?.[0]?.Username;
  const userFavouriteCuisine = userDetails?.[0]?.yourCuisine;
  const userCuisineQuery = QueryMapper?.[userFavouriteCuisine];

  return (
    <>
      {userCuisineQuery ? (
        <>
          {" "}
          <Typography className={classes.Msg}>
            Hye! {name}, We have some Offers & Discounts for your favourite{" "}
            {userFavouriteCuisine} food.
          </Typography>
          <br />
          <br />
          <OfferCardWrapper Query={userCuisineQuery} />{" "}
        </>
      ) : (
        <Typography className={classes.Msg}>
          Oops! looks like you are signed out. Please Sign in again.
        </Typography>
      )}
    </>
  );
};
YourCuisine.propTypes = {
  userDetails: PropTypes.any,
};
export default YourCuisine;
