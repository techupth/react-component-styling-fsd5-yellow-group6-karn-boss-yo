/**@jsxImportSource @emotion/react */
import { css } from "@emotion/react";

function Button(props) {
  if (props.type === "primary") {
    return (
      <div
        css={css`
          width: 50px;
          color: white;
          background-color: #074ee8;
          border-radius: 4px;
          padding: 0 16px;
          display: inline-flex;
        `}
      >
        {props.text}
      </div>
    );
  } else if (props.type === "secondary") {
    return (
      <div
        css={css`
          width: 50px;
          color: white;
          background-color: #07a4e8;
          border-radius: 4px;
          padding: 0 16px;
          display: inline-flex;
        `}
      >
        {props.text}
      </div>
    );
  }
}

export default Button;
