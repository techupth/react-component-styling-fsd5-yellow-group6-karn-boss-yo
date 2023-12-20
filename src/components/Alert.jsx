// Start coding here

/**@jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import image from "../assets/check-circle.svg";
import image2 from "../assets/alert-circle.svg";
import image3 from "../assets/alert-triangle.svg";
import image4 from "../assets/frown.svg";

function Alert(props) {
  if (props.severity === "error") {
    return (
      <div
        css={css`
          width: 300px;
          color: black;
          background-color: #f9c8c8;
          border-radius: 4px;
          padding: 20px, 16px;
          text-align: left;
        `}
      >
        <img src={image4} alt="check-circle" />
        {props.text}
      </div>
    );
  } else if (props.severity === "warning") {
    return (
      <div
        css={css`
          width: 300px;
          color: black;
          background-color: #f9d9c8;
          border-radius: 4px;
          padding: 0px, 16px;
          text-align: left;
        `}
      >
        <img src={image3} alt="check-circle" />
        {props.text}
      </div>
    );
  } else if (props.severity === "info") {
    return (
      <div
        css={css`
          width: 300px;
          color: black;
          background-color: #f9ebc8;
          border-radius: 4px;
          padding: 0px, 16px;
          text-align: left;
        `}
      >
        <img src={image2} alt="check-circle" />
        {props.text}
      </div>
    );
  } else if (props.severity === "success") {
    return (
      <div
        css={css`
          width: 300px;
          color: black;
          background-color: #cef7cd;
          border-radius: 4px;
          padding: 0px, 16px;
          text-align: left;
        `}
      >
        <span>
          <img src={image} alt="check-circle" />
        </span>

        {props.text}
      </div>
    );
  }
}

export default Alert;
