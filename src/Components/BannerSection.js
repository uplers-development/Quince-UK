import styled from "styled-components";


export const BannerSection = styled.section`

	text-align:center;
	height:736px;
	display:flex;
	flex-wrap:wrap;
	align-items:center;
	justify-content:center;
	background-size:cover;
	background-position:center center;
	position:relative;
	z-index:1;
	background-color:rgb(0 0 0 / 20%);
	background-blend-mode:multiply;
	background-image: url(${process.env.PUBLIC_URL+ "/images/banner-img.jpg"});
	@media (max-width:991px){
		height:566px;
	};
	@media (max-width:767px){
		height:525px;
	};


`;

export const BannerContent = styled.div`
			max-width:654px;
			margin:0 auto;
			@media (max-width:767px){
				padding:0 30px;
				max-width:356px;
			};

`;

export const BannerHeader = styled.h1`
			font-family:ivypresto-headline,
			serif;
			font-weight:400;
			font-style:normal;
			font-size:56px;
			margin-bottom:20px;
			color:#21201F;
			line-height:1.2;
			color:#fff;
			margin-top:30px;
			@media (max-width:991px){
				font-size:46px;
			};
			@media (max-width:767px){
				font-size:30px;
				margin-top:10px;
			};
`;

export const BannerParagraph = styled.p`
			font-style:normal;
			font-size:16px;
			margin-bottom:20px;
			font-weight:400;
			line-height:1.5;
			color:inherit;
			color:#21201F;
			color:#fff;
`;

export const Banner = () =>{
	return(
		<BannerSection>
          <BannerContent>
              <BannerHeader>
                  We believe quality products can elevate your life
              </BannerHeader>
              <BannerParagraph>
                  Especially when they’re sustainably made and affordably priced.
              </BannerParagraph>
          </BannerContent>

        </BannerSection>
		);
}