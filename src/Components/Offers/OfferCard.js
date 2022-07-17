import React from "react";
import PropTypes from "prop-types";
import {
  makeStyles,
  Typography,
  Chip,
  Popover,
  Button,
} from "@material-ui/core";
import RestroCard from "./RestroCard";

const useStyles = makeStyles((theme) => ({
  cardWrapper: {
    display: "flex",
    justifyContent: "space-around",
    flexWrap: "wrap",
  },
  card: {
    width: "100%",
    display: "flex",
    padding: "20px",
    maxWidth: "300px",
    boxShadow: "0px 16px 64px rgb(3 23 111 / 10%)",
    borderRadius: "24px",
    flexDirection: "column",
    backgroundColor: "#fff",
    margin: "10px",
  },
  foodImg: {
    width: "100%",
    boxShadow: "0px 16px 64px rgb(3 23 111 / 10%)",
    borderRadius: "24px",
    height: "200px",
    margin: "10px 0px",
  },
  offerImg: {
    width: "100%",
    height: "200px",
  },
  successChip: {
    width: "125px",
    background: "#42ba96",
    fontSize: "14px",
    fontWeight: "600",
    color: "#fff",
    margin: "0 auto",
    marginTop: "10px",
    marginBottom: "10px",
  },
  failChip: {
    width: "125px",
    background: "#df4759",
    fontSize: "14px",
    fontWeight: "600",
    color: "#fff",
    margin: "0 auto",
    marginTop: "10px",
    marginBottom: "10px",
  },
  offerContent: {
    fontFamily: "system-ui",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "24px",
    letterSpacing: "0.02em",
    margin: "10px 0px",
  },
  offerTxt: {
    fontFamily: "system-ui",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: "18px",
    letterSpacing: "0.02em",
    margin: "10px 0px",
  },
  Popper: {
    maxWidth: "450px",
    width: "100%",
  },
}));

const OfferCard = (props) => {
  const classes = useStyles();
  const { offerData } = props;

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [clickedCard, setClickedCard] = React.useState(null);

  const handleClick = (event, index) => {
    setClickedCard(index);
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  return (
    <>
      <div className={classes.cardWrapper}>
        {offerData?.offers?.map((item, index) => (
          <div className={classes.card}>
            <div className={classes.foodImg}>
              <img
                src={item?.foodImg}
                className={classes.offerImg}
                alt="offer food"
              />
            </div>
            <Typography variant="h5" className={classes.offerContent}>
              {item?.dish}
            </Typography>
            {item?.discountType === "free" ? (
              <Typography variant="h5" className={classes.offerTxt}>
                GET COMBO DEAL & SAVE MONEY
              </Typography>
            ) : (
              <Typography variant="h5" className={classes.offerTxt}>
                DISCOUNT: {item?.discount}%
              </Typography>
            )}
            {item?.freeDelivery ? (
              <Chip label="Free Delivery" className={classes.successChip} />
            ) : (
              <Chip label="Paid Delivery" className={classes.failChip} />
            )}
            {item?.priceBar ? (
              <Typography className={classes.offerTxt}>
                Above orders worth Rs{item?.priceBar}/-
              </Typography>
            ) : (
              <Typography className={classes.offerTxt}>
                No Minimum Order Value
              </Typography>
            )}
            <Button
              aria-describedby={id}
              variant="contained"
              color="primary"
              onClick={(event) => handleClick(event, index)}
            >
              Offer Details
            </Button>
            <Popover
              id={id}
              open={open}
              className={classes.Popper}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "center",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "center",
              }}
            >
              <RestroCard
                restroData={
                  offerData?.offers?.[clickedCard]?.restaurantsRelatedToOffers
                }
              />
            </Popover>
          </div>
        ))}
      </div>
    </>
  );
};
OfferCard.propTypes = {
  restroData: PropTypes.array,
};
export default OfferCard;
