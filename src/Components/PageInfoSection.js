import styled from "styled-components";


export const PageInfoSection = styled.section`

	padding:140px 0 147px;
	@media (max-width:991px){
		padding:100px 0 107px;
	}
	@media (max-width:767px){
		padding:71px 0 92px;
	};

`;

export const PageInfoContainer = styled.div`
			max-width:1128px;
			padding:0 30px;
			margin:0 auto;

`;

export const PageInfoInnerContainer = styled.div`
			max-width:844px;
			margin:0 auto;
`;

export const PageInfoParagraph = styled.p`
			text-align:center;
			font-size:24px;
			color:#363940;
			line-height:1.34;
			font-family:ivypresto-headline,serif;
			font-weight:400;
			letter-spacing:0.042em;
			@media (max-width:767px){
				font-size:16px;
				line-height:1.5;
			};

`;

export const PageInfo = () =>{
	return(
	<PageInfoSection>
                <PageInfoContainer>
                    <PageInfoInnerContainer>
                        <PageInfoParagraph>
                          Quince started when we brought our work home. We built careers working for high-end brands, but investing in luxury clothing, jewelry and home goods for ourselves was a rare treat. So, we built our own brand—committed to making exceptionally high-quality essentials at a price within reach. Because everyone deserves to fill their life with the finer things.
                        </PageInfoParagraph>
                    </PageInfoInnerContainer>            
                </PageInfoContainer>
        </PageInfoSection>
    );
}