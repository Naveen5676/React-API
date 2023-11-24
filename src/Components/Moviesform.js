import React, { Fragment } from "react";
import classes from "./Moviesform.module.css";

const Moviesform = () => {
  const datahandler = (event) => {
    event.preventDefault(); // Prevents the default form submission behavior

    const title = event.target.elements.title.value;
    const opentxt = event.target.elements.opeaningtxt.value;
    const rdate = event.target.elements.releasedt.value;

    const newdata = {
      title: title,
      opentxt: opentxt,
      rdate: rdate,
    };

    console.log(newdata);

    event.target.reset();
  };

  return (
    <Fragment>
      <form onSubmit={datahandler} className={classes.form}>
        <label>Title</label>
        <input type="text" name="title"></input>
        <label>Opeaning Text</label>
        <input type="text" name="opeaningtxt"></input>
        <label>Release Date</label>
        <input type="number" name="releasedt"></input>
        <button type="submit">Submit</button>
      </form>
    </Fragment>
  );
};

export default React.memo(Moviesform);
