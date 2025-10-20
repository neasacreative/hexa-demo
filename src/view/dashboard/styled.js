import styled from 'vue3-styled-components';

const Main = styled.div`
  .ninjadash-main {
    padding: 0 30px 50px;
    
    @media only screen and (max-width: 1199px) {
      padding: 0 20px 50px;
    }
    
    @media only screen and (max-width: 767px) {
      padding: 0 15px 50px;
    }
  }
`;

export { Main };
