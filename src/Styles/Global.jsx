import { createGlobalStyle } from "styled-components";
import { transparentize } from "polished";

export const GlobalStyle = createGlobalStyle` 

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
    
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}

* {
    box-sizing: border-box;
    font-size: 1rem;
    font-family: 'Roboto', Arial, Helvetica sans-serif;
    font-weight: 400;
    scroll-behavior: smooth;
}

body {
	-webkit-font-smoothing: antialiased;
    background-color: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.secondary}
	
}

h1 {
        padding-left: 2rem;
        font-weight: 700;
        margin: 1.5rem 0;
        font-size: 2rem;
    }

p {
	font-size: 1rem;
	font-weight: 400;	
}

a {
        text-decoration: none;
		color: ${({ theme }) => theme.secondary};
    }

h6, h2 {
        font-weight: 700;
    }

html {
	min-width: 400px;

}

.react-modal-overlay {
	position: absolute;
	top:0;
	bottom:0;
	right:0;
	left:0;
	background-color:transparent;
	z-index: 2;
	min-height: 200vh;
	height: fit-content;

	border-radius: 2px;
	display: flex;
	justify-content: flex-end;
	align-items: flex-start !important;

}

.react-modal-content {
	position: relative;
	top:3.3rem;
	width:16rem;
	min-height: 20vh;
	height: fit-content;
	max-height: 80vh;
	position: relative;
	background-color: ${({ theme }) => theme.header};
	padding: 0.5rem;
	display: flex;
    align-items: center;
    justify-content: center;
	flex-direction: column;

}

.react-modal-close {
	position:absolute;
	right: 1rem;
	top: 0.6rem;
	border: 0;
	background: transparent;
	transition: filter 0.2s;
	cursor: pointer;

	&:hover {
		filter: brightness(0.7);
	}
}

.swiper-container {

	width: 100%;
	height: 100%;
	z-index: 0;

	.swiper-button-next, .swiper-button-prev {
		color: ${({ theme }) => transparentize(0.25, theme.button)};

		&:after {
			font-size: 1.4rem;
		}

		&:hover {
			color: ${({ theme }) => theme.button};
		}
	}

	img {
	object-fit: cover;
	width: 100%;
	height: 100%;
	}

	&.vertical {
		height: 500px;

			.swiper-button-next, .swiper-button-prev {
				display:none;
			}

			img {
				object-fit: cover;
				width: 100%;
				height: 100%;
			}
		}
	&-vertical {
		height: 320px;
		z-index: 0;

		img {
			object-fit: cover;
			height: 100px;
		}

		@media (max-width: 500px) {
            display: none;
        }
	}
}

`;
