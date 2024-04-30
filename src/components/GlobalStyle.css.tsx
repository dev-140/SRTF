import { createGlobalStyle, css } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  :root {
    font-size: 16px;
  }

  html,
  body {
    padding: 0;
    margin: 0;
    background-color: rgb(204 231 255);
    font-size: 1rem;
    -webkit-font-smoothing: antialiased;
  }

  a {
    color: inherit;
    text-decoration: none;
  }  

  button {
    border: none;
    font-size: 1rem;
    font-weight: 400;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
    appearance: none;    
  }

  .container {
    width: 90%;
    max-width: 1255px;
    margin: auto;
  }

  .flex-center {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .swal-icon--error {
    width: 60px;
    height: 60px;
    margin-bottom: 10px;

    &__line {
      width: 27px;
      height: 4px;
      top: 29px;
    }
  }

  .swal-title {
    color: #333;
  }

  .swal-button {
    background-color: #26a5ff;
    transition: background-color 0.3s;

    &:not([disabled]):active, &:not([disabled]):hover {
      background-color: #0090ff;
    }
  }
  
  @media (max-width: 1150px) {
    h1 {
      font-size: 28px;
    }
  }
  @media (max-width: 600px) {
    h1 {
      font-size: 20px;
    }
    
    .container {
      width: 94%;
    }

    .footer-container {
      display: flex;
      flex-direction: column;
    }

    .form-container {
      flex-direction: column;
      align-items: center !important;
    }
  }
  .output-container div {
    width: 100% !important;
  }

  .output-container h1 {
    text-align: center;
    width: 100% !important;
  }

  .parent-container {
    flex-direction: column;
  }

  .input-main-container {
    width: 100% !important;
    max-width: 100% !important;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px !important;
  }

  .input-main-container h1 {
    text-align: center !important;
  }

  .form-container {
    display: flex;
    justify-content: center;
    gap: 10px;
    align-items: flex-end;
  }

  .hero-main-container {
    background: #fff;
    padding: 10px;
    border-radius: 15px;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px !important;
  }

  .hero-main-container h1 {
    text-align: center !important;
    width: 100%;
  }

  .parent-container > div{
    box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
    border-radius: 15px;
  }
`;

const sizes = {
	"1275": 1275,
	"1150": 1150,
	"1050": 1050,
	"600": 600,
};

export const media = Object.keys(sizes).reduce((acc, label) => {
	acc[label] = (...args: any[]) => css`
		@media (max-width: ${sizes[label] / 16}em) {
			${css.call(undefined, ...args)}
		}
	`;

	return acc;
}, {});

export default GlobalStyle;
