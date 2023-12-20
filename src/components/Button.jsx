/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

function Button(props) {
  const buttonStyles = css`
    width: 10.699rem;
    height: 3.125rem;
    padding: 0px, 1rem, 0px, 1rem;
    margin: 0.625rem;
    gap: 8px;
    font-size: 1rem;
    border-radius: 0.25rem;
    font-weight: 400;
    color: white;

    ${props.color === 'primary' &&
    css`
      background-color: #074EE8;
    `}

    ${props.color === 'secondary' &&
    css`
      background-color: #07A4E8;
    `}
  `;

  return <button css={buttonStyles}>{props.nameButton}</button>;
}

export default Button;
