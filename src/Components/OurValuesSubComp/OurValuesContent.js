import styled from "styled-components";


export const OurValuesTwoColumnSection= styled.div`
		
`;

export const OurValuesContentFlex = styled.div`
	display:flex;
	flex-wrap:wrap;
	border-top:1px solid rgb(33 32 31 / 70%);
	margin-bottom:98px;
	&:nth-child(2n+2);
	@media (max-width:991px){
		border-top:1px solid rgb(33 32 31 / 70%);
		margin-bottom:78px;
	};
	@media (max-width:767px){
		border-left:1px solid rgb(33 32 31 / 70%);
		border-top:0;
		margin-bottom:71px;
		& : nth-child(2n+2);
	};
`;

export const OurValuesContentRight = styled.div`

	width:51.5%;
	padding-top:26px;
	padding-right:13.4%;
	@media (max-width:767px){
		width:100%;
		order:2;
		padding-top:52px;
		padding-left:20px;
		padding-right:12.4%;
	};

`;

export const OurValuesContentLeft = styled.div`

	width:51.5%;
	padding-left:13.4%;
	padding-top:26px;
	@media (max-width:767px){
		width:100%;
		order:2;
		padding-top:52px;
		padding-left:20px;
		padding-right:14.6%;
	};

`;

export const OurValuesHeader = styled.h2`
		@media (max-width:991px){
			font-size:26px;
		};
		@media (max-width:767px){
			font-size:24px;
		};
`;

export const OurValuesParagraph = styled.p`
	font-size:16px;
	margin-bottom:15px;

`;


export const OurValuesImgSection = styled.div`

	width:48.5%;
	@media (max-width:767px){
		width:100%;
		order:1;
	};
`;

