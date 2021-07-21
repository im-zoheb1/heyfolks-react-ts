import { createGlobalStyle } from 'styled-components';

import variables from './variables';
import base from './base';

const GlobalStyles = createGlobalStyle`
${variables}
${base}
`;

export default GlobalStyles;
