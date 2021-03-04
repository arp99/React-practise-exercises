import React from "react";

export default function Post(props) {
  return (
    <textarea
      onChange={props.changeHandler}
      value={props.value}
      placeholder="What's Happening?"
      autoFocus
    />
  );
}
