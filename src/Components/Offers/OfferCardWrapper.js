import React from "react";
import PropTypes from "prop-types";
import { useQuery } from "@apollo/react-hooks";
import OfferCard from "./OfferCard";
import CircularProgress from "@material-ui/core/CircularProgress";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  loader: {
    color: "#FFF",
    margin: "0 auto",
  },
}));

const OfferCardWrapper = (props) => {
  const classes = useStyles();
  const { Query } = props;

  //Here we get the query as a prop and executes/calls the with help of apollo client and returns us the array of offers and we further send it to the offer card component.

  const { loading, error, data } = useQuery(Query);
  if (loading) {
    return <CircularProgress className={classes.loader} />;
  }
  if (error) {
    return <p> Oops! ... something went wrong</p>;
  }
  return <OfferCard offerData={data} />;
};
OfferCardWrapper.propTypes = {
  Query: PropTypes.any,
};
export default OfferCardWrapper;
