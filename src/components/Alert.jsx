// Start coding here
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import frown from "./Icon/frown.png";
import alertTriangle from "./Icon/alertTriangle.png";
import alertCircle from "./Icon/alertCircle.png";
import checkCircle from "./Icon/checkCircle.png";

function Alert(props) {
    if (props.status === "error") {
        return (
            <div
                css={css`
                border-radius: 10px;
                background: #F9C8C8;

                width: 650px;
                height: 76px;
                flex-shrink: 0;

                display: flex;
                text-align: left;
                align-items: center;
                padding-left: 20px;
                margin: 15px;
                
                color: #444;
                font-family: Kanit;
                font-size: 20px;
                font-style: normal;
                font-weight: 700;
                line-height: normal;
                `}
            >
                <img src={frown} alt="frownIcon" /> <p
                    css={css`
                    padding-left: 15px;
                    `}
                >{props.text}</p>
            </div>  
        );
    } else if (props.status === "warning") {
        return (
            <div
                css={css`
                border-radius: 10px;
                background: #F9D9C8;

                width: 650px;
                height: 76px;
                flex-shrink: 0;

                display: flex;
                text-align: left;
                align-items: center;
                padding-left: 20px;
                margin: 15px;

                color: #444;
                font-family: Kanit;
                font-size: 20px;
                font-style: normal;
                font-weight: 700;
                line-height: normal;
                `}
            >
                <img src={alertTriangle} alt="alertTriangleIcon" /> <p
                    css={css`
                    padding-left: 15px;
                    `}
                >{props.text}</p>
            </div>
        );
    } else if (props.status === "info") {
        return (
            <div
                css={css`
                border-radius: 10px;
                background: #F9EBC8;

                width: 650px;
                height: 76px;
                flex-shrink: 0;

                display: flex;
                text-align: left;
                align-items: center;
                padding-left: 20px;
                margin: 15px;

                color: #444;
                font-family: Kanit;
                font-size: 20px;
                font-style: normal;
                font-weight: 700;
                line-height: normal;
                `}
            >
                <img src={alertCircle} alt="alertCircleIcon" /> <p
                    css={css`
                    padding-left: 15px;
                    `}
                >{props.text}</p>
            </div>
        );
    } else if (props.status === "success") {
        return (
            <div
                css={css`
                border-radius: 10px;
                background: #CEF7CD;

                width: 650px;
                height: 76px;
                flex-shrink: 0;

                display: flex;
                text-align: left;
                align-items: center;
                padding-left: 20px;
                margin: 15px;

                color: #444;
                font-family: Kanit;
                font-size: 20px;
                font-style: normal;
                font-weight: 700;
                line-height: normal;
                `}
            >
                <img src={checkCircle} alt="checkCircleIcon" /> <p
                    css={css`
                    padding-left: 15px;
                    `}
                >{props.text}</p>
            </div>
        );
    }
}

export default Alert;