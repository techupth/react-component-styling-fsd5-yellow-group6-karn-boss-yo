// Start coding here
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

function Button(props) {
    if (props.type === "primary") {
        return (
            <div
                css={css`
                border-radius: 4px;
                background-color: var(--Primary, #074EE8);
                
                display: flex;
                width: 171.19px;
                height: 50px;
                padding: 0px 16px;
                justify-content: center;
                align-items: center;
                gap: 8px;
                flex-shrink: 0;

                color: var(--Surface, #FFF);
                font-family: Sarabun;
                font-size: 16px;
                font-style: normal;
                font-weight: 400;
                line-height: 18px;
                
                margin: 20px;
                `}
            >
                <p>{props.text}</p>
            </div>
        );
        } else if(props.type === "secondary") {
            return (
                <div
                css={css`
                border-radius: 4px;
                background: #07A4E8;
                
                display: flex;
                width: 171.19px;
                height: 50px;
                padding: 0px 16px;
                justify-content: center;
                align-items: center;
                gap: 8px;
                flex-shrink: 0;

                color: var(--Surface, #FFF);
                font-family: Sarabun;
                font-size: 16px;
                font-style: normal;
                font-weight: 400;
                line-height: 18px;
                
                margin: 20px;
                `}
            >
                <p>{props.text}</p>
            </div>
        );
        }           
    }

export default Button;