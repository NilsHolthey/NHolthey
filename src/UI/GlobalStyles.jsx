import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
	*,
	*::before,
	*::after {
		box-sizing: border-box;
		/* outline:1px solid green ; */
		
		
	}
	:root {
		--primary-color:  #dcdcdc;
		--secondary-color: navy;
		--primary-light: #8abdff;
  		--primary: #6d5dfc;
  		--primary-background: #dcdcdc6d;
  		--primary-dark: #5b0eeb;
  
  		--white: #FFFFFF;
  		--greyLight-1: #f8f8f8;
  		--greyLight-2: #c8d0e7;
  		--greyLight-3: #bec8e4;
  		--greyDark: #9baacf;
		
	}
	html{

		scroll-behavior: smooth;
		
	}
	body  {
		overflow-x:hidden;
		
		background:var(--primary-background);
		scroll-behavior: smooth;
		
		a {
      		text-decoration: none;
      		&:visited {
       		 color: inherit;
      }
	}
		
		
		margin: 0;
		padding:0;
		font-family: 'Inter', sans-serif;
	}
`;

export default GlobalStyle;
