import React from "react";
import PropTypes from "prop-types";
import {
  makeStyles, MenuItem,FormControl,Select
} from "@material-ui/core";
import { ALL_OFFERS } from "../../Queries/GET_ALL_OFFERS";
import { INDIAN_OFFERS } from "../../Queries/GET_INDIAN_OFFERS";
import { ITALIAN_OFFERS } from "../../Queries/GET_ITALIAN_OFFERS";
import { AMERICAN_OFFERS } from "../../Queries/GET_AMERICAN_OFFERS";
import { FREE_OFFERS } from "../../Queries/GET_FREE_DELIVERY";
import { PAID_OFFERS } from "../../Queries/GET_PAID_DELIVERY";
import OfferCardWrapper from "../Offers/OfferCardWrapper";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    display: "flex",
    flexDirection: "column",
  },
  formControlSelect: {
    boxShadow: "0px 16px 64px rgb(3 23 111 / 10%)",
    margin: "0 auto",
    width: '300px'
  },
  menu: {
    color: 'black',
    fontSize: '20px',
    fontWeight: '600'
  },
  select: {
    background: '#FFF',
    color: 'black',
    fontSize: '20px',
    fontWeight: '600'
  }
}));

const OfferFilter = () => {
  const classes = useStyles();
  const [cuisineSelected, setCuisineSelected] = React.useState("All");
  const handleSelectChange = (event) => {
    setCuisineSelected(event.target.value);
  };

  // This is queryMapper which basically holds all the key pair values for the required queries.
  const QueryMapper = {
    All: ALL_OFFERS,
    Indian: INDIAN_OFFERS,
    Italian: ITALIAN_OFFERS,
    American: AMERICAN_OFFERS,
    FreeDelivery: FREE_OFFERS,
    PaidDelivery: PAID_OFFERS
  };
  return (
    <div className={classes.wrapper}>
      <FormControl variant="outlined" className={classes.formControlSelect}>
        <Select
          className={classes.select}
          value={cuisineSelected}
          onChange={handleSelectChange}
        >
          <MenuItem value={"All"} className={classes.menu}>
            All
          </MenuItem>
          <MenuItem value={"Indian"} className={classes.menu}>
            Indian
          </MenuItem>
          <MenuItem value={"Italian"} className={classes.menu}>
            Italian
          </MenuItem>
          <MenuItem value={"American"} className={classes.menu}>
            American
          </MenuItem>
          <MenuItem value={"FreeDelivery"} className={classes.menu}>
            Free Delivery
          </MenuItem>
          <MenuItem value={"PaidDelivery"} className={classes.menu}>
            Paid Delivery
          </MenuItem>
        </Select>
      </FormControl>
      <br />
      <br />
      <OfferCardWrapper Query={QueryMapper?.[cuisineSelected]} />
    </div>
  );
};
OfferFilter.propTypes = {
};
export default OfferFilter;
