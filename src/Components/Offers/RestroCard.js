import React from "react";
import PropTypes from "prop-types";
import { makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  cardPopper: {
    width: "350px",
    height: "200px",
    display: "flex",
    padding: "20px",
    boxShadow: "0px 16px 64px rgb(3 23 111 / 10%)",
    borderRadius: "24px",
    flexDirection: "column",
    backgroundColor: "#fff",
    margin: "10px",
  },
  restroTxt: {
    marginBottom: "10px",
    fontSize: "20px",
    fontFamily: "Pacifico",
    fontStyle: "Italic",
    fontWeight: "600",
    color: "#00008B",
  },
  dishTxt: {
    marginBottom: "10px",
    fontSize: "16px",
    fontFamily: "Pacifico",
    fontStyle: "Italic",
    fontWeight: "600",
  },
  dishDescTxt: {
    marginBottom: "10px",
    fontSize: "14px",
    fontFamily: "Pacifico",
    fontStyle: "Italic",
    fontWeight: "600",
  },
  priceTxt: {
    marginBottom: "20px",
    fontSize: "20px",
    fontFamily: "Pacifico",
    fontWeight: "600",
    color: "#00008B",
  },
}));

const RestroCard = (props) => {
  const classes = useStyles();
  const { restroData } = props;
  return (
    <>
      <div className={classes.cardPopper}>
        <Typography className={classes.restroTxt}>
          Restaurant: {restroData?.restroName}
        </Typography>
        <Typography className={classes.dishTxt}>
          Dish: {restroData?.dishName}
        </Typography>
        <Typography className={classes.dishDescTxt}>
          {restroData?.dishDescription}
        </Typography>
        <Typography className={classes.priceTxt}>
          Price: Rs{restroData?.dishPrice}/-
        </Typography>
      </div>
    </>
  );
};
RestroCard.propTypes = {
  restroData: PropTypes.object,
};
export default RestroCard;
