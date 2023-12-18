import styled from "styled-components";

export const Wrapper = styled.div`
	margin: 0;
	padding: 0;
`;

export const Header = styled.div`
	padding: 6px;
	position: relative;
	display: flex;
	flex-direction: column;
	background-color: #000;
	margin-bottom: 13px;
`;

export const Filter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
	gap: 15px;
`;

export const Title = styled.h1`
	color: #fff;
	margin: 0 auto;
	font-family: Roboto;
	font-weight: 700;
	font-style: italic;
	font-size: 55px;
`;

export const Input = styled.input`
	width: 300px;
	height: 40px;
	border-radius: 10px;
	outline: none;
	transition: 0.2s;
	font-family: Roboto;
	font-size: 15px;

	&:focus {
		border: 3px solid #812;
	}

	&::placeholder {
		font-family: Roboto;
	}
`;

export const FileWrapper = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: center;
	background: #eee;
	padding: 5px;
	border-radius: 7px;

	label {
		font-weight: 700;
	}
`

export const InputFile = styled.input`
	&::file-selector-button {
	font-family: Roboto;
  padding: 0.2em 0.4em;
	color: #000;
  border-radius: 0.2em;
  transition: 1s;
	}

	&-file-list-name {
		color: #fff;
	}
`

export const Button = styled.button`
	width: 80px;
	font-family: Roboto;
`;

export const VinylList = styled.ul`
	margin: 0 auto;
	margin-bottom: 20px;
	width: 80%;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-wrap: wrap;
	gap: 14px;
`;

export const Vinyl = styled.li`
	padding: 10px;
	width: 330px;
	height: 481px;
	background-color: rgba(1,1,1,0.5);
	border-radius: 20px;
	list-style-type: none;
	display: flex;
	text-align: center;
	flex-direction: column;
`;

export const Cover = styled.img`
	border-radius: 15px;
`;

export const Album = styled.p`
	font-family: Roboto;
	font-weight: ${({ weight }) => (weight ? weight : 400)};
	font-size: ${({ isLongText }) => (isLongText ? '16px' : "26px")};
	margin-top: ${({ margin }) => (margin ? margin : "8px")};
	color: #fff;
`

export const Text = styled.p`
	font-family: Roboto;
	font-weight: ${({ weight }) => (weight ? weight : 400)};
	font-size: ${({ size }) => (size ? size : "18px")};
	margin-top: ${({ margin }) => (margin ? margin : "6px")};
	color: #fff;
`;

export const InputAmount = styled.input`
	width: 100px;
	height: 40px;
	margin: 0 auto;
	text-align: center;
	border-radius: 10px;
	font-family: Roboto;
	font-size: 15px;
`;