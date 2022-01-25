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
	font-family: 'Raleway', sans-serif;
    font-weight: 400;
    scroll-behavior: smooth;
}

body {
	-webkit-font-smoothing: antialiased;
    background-color: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.secondary}
}

h1 {
        font-weight: 700;
        margin: 1.5rem 0;
		font-family: 'Raleway', sans-serif;
        font-size: 2rem;
    }

p {
	font-size: 1rem;
	font-weight: 400;	
	font-family: 'Raleway', sans-serif;
}

a {
        text-decoration: none;
		color: ${({ theme }) => theme.secondary};
    }

h6, h2 {
        font-weight: 700;
		font-family: 'Raleway', sans-serif;
		font-size: 1rem;
    }

h4 {
	font-family: 'Raleway', sans-serif;
}

html {
	min-width: 400px;
	
	@media(max-width: 480px) {
		width: 480px;
	}
}

span {
	font-family: 'Raleway', sans-serif;
}

.react-modal-overlay {
	position: fixed;
	top:5rem;
	bottom:0;
	right:0;
	left:0;
	background-color: rgba(57, 55, 72, 0.25);
	z-index: 2;
	min-height: 200vh;
	height: fit-content;
	border-radius: 2px;
	display: flex;
	justify-content: center;
	align-items: flex-start !important;
	border: 1px solid transparent
}

.react-modal-content {
	width:1240px;
	border: 1px solid transparent
	min-height: 20vh;
	height: fit-content;
	max-height: 80vh;
	position: relative;
	background-color: transparent;
	display: flex;
    align-items: flex-end !important;
    justify-content: center;
	flex-direction: column;
    outline: none;
}

.logoIcon {
	height: 1.87rem;
	width: 1.87rem;
	color: ${({ theme }) => theme.button}
}

.counterIcon {
	cursor: pointer;
	height: 2.2rem;
	width: 2.2rem;
}

.cartIcon {
	padding: 0px 0.25rem;
	cursor: pointer;
	height: 1.4rem;
	width: 2rem;
}

.react-modal-close {
	position:absolute;
	right: 0.6rem;
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
	object-fit: scale-down;
	width: 100%;
	height: 100%;
	}

	&.vertical {
		height: 500px;

			.swiper-button-next, .swiper-button-prev {
				display:none;
			}

			img {
				object-fit: scale-down;
				width: 100%;
				height: 100%;
			}
		}
	&-vertical {
		height: 320px;
		z-index: 0;

		img {
			object-fit: fill;
			height: 100px;
		}

		@media (max-width: 500px) {
            display: none;
        }
	}
}

`;
