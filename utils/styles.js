import { injectGlobal } from 'styled-components';

injectGlobal`
  html {
    box-sizing: border-box;
  }
  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }
`;

const defaultStyles = {
  position: 'fixed',
  top: '0',
  left: '0',
  bottom: '0',
  right: '0',
  overflow: 'auto',
  display: 'grid',
  backgroundColor: '#98c5e9',
  fontFamily: 'Arial'
};

export default defaultStyles;
