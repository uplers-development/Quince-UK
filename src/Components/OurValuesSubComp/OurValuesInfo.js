import styled from "styled-components";


export const OurValuesInfoWrap = styled.div`
	display:flex;
	flex-wrap:wrap;
	margin-bottom:100px;
	margin-top:60px;
	@media (max-width:991px){
		margin-bottom:60px;
		margin-top:60px;
	};
	@media (max-width:767px){
		margin-top:0;
		margin-bottom:0;
	};
`;

export const OurValuesInfo = styled.div`
	width:33.333%;
	border-right:1px solid rgba(33,32,31,0.2);
	text-align:center;
	padding:0 30px;
	margin-bottom:28px;
	padding-top:14px;
	&:nth-child(3n+3){
		border:0;
	};
	@media (max-width:767px){
			width:100%;
			border-right:0;
			border-bottom:1px solid rgba(33,32,31,0.2);
			text-align:center;
			padding:0 30px;
			margin-bottom:22px;
			padding-top:14px;
			max-width:270px;
			margin-left:auto;
			margin-right:auto;
			padding-bottom:22px;
	};

`;

export const OurValuesInfoHeader = styled.h3`
	font-family:'Grosa Trial';
	font-weight:400;
	font-size:12px;
	letter-spacing:0.06em;
	text-transform:uppercase;
	margin:15px 0 10px;
	color:#000000 !important;
	@media (max-width:767px){
		margin:7px 0 15px;
	};

`;
export const OurValuesInfoParagraph = styled.p`
	font-size:13px;
	margin-bottom:15px !important;
	color:#000000;

`;
