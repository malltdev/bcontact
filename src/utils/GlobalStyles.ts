import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
  #BContact{
 padding:20px;
  width: auto;
  white-space: nowrap;
  z-index:-1;

  }
  .align-right{
    right:20px;
   &>div{
    justify-content: flex-end;
    
   }
  }
  .align-left{
    left:20px;
    &>div{
    justify-content: flex-start;
   }
  }
`;

export default GlobalStyles;
