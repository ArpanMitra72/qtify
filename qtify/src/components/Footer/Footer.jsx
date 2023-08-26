import React from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import styles from "./Footer.module.css";

const Footer = () => {
  const expandIconStyle = {
    color: "#34C94B",
    fontSize: "40px",
  };
  return (
    <div className={styles.mainContainer}>
      <h2 className={styles.centeredContainer}>FAQs</h2>
      <Accordion className={styles.sizeingone}>
        <AccordionSummary
          className={styles.mainHeading}
          expandIcon={<ExpandMoreIcon style={expandIconStyle} />}
        >
          <Typography className={styles.mainText}>
            Is QTify free to use?
          </Typography>
        </AccordionSummary>
        <AccordionDetails className={styles.detailsBody}>
          <Typography className={styles.detailsText}>
            Yes! It is 100% free, and has 0% ads!
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className={styles.sizeingtwo}>
        <AccordionSummary
          className={styles.mainHeading}
          expandIcon={<ExpandMoreIcon style={expandIconStyle} />}
        >
          <Typography className={styles.mainText}>
            Can I download and listen to songs offline?
          </Typography>
        </AccordionSummary>
        <AccordionDetails className={styles.detailsBody}>
          <Typography className={styles.detailsText}>
            Sorry, unfortunately we don't provide the service to download any
            songs.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default Footer;
