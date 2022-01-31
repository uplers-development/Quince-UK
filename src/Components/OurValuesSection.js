import styled from "styled-components";
import {OurValuesInfoWrap,OurValuesInfo,OurValuesInfoHeader,OurValuesInfoParagraph} from './OurValuesSubComp/OurValuesInfo';
import {OurValuesTwoColumnSection,OurValuesContentFlex,OurValuesContentRight,OurValuesParagraph,OurValuesContentLeft,OurValuesHeader,OurValuesImgSection} from './OurValuesSubComp/OurValuesContent';

export const OurValuesSection = styled.section`

	padding:140px 0  50px;
	background:#EEEEEC;
	@media (max-width:991px){
		padding:100px 0 50px;
	};
	@media (max-width:767px){
				padding:73px 0 50px;
	};
`;

export const OurValuesContainer = styled.div`
		max-width:1128px;
		padding:0 30px;
		margin:0 auto;
`;

export const OurValuesMain = styled.div`

`;

export const OurValuesMainHeader = styled.h2`
		text-align:center;
		text-transform:uppercase;
		font-family:'Grosa Trial';
		font-weight:400;
		letter-spacing:0.05em;
		@media (max-width:991px){
			font-size:26px;
		};
		@media (max-width:767px){
			font-size:22px;
		};
`;



export const OurValues = () =>{

		return(
				<OurValuesSection>
						<OurValuesContainer>
							<OurValuesMain>
								<OurValuesMainHeader>
									our values
								</OurValuesMainHeader>
								<OurValuesInfoWrap>
									<OurValuesInfo>
										 <img src="images/quality-icons.svg" alt="Quality" />
										 <OurValuesInfoHeader>
										 	Quality
										 </OurValuesInfoHeader>
										 <OurValuesInfoParagraph>
										 	Quality shouldn’t be a luxury. We choose premium materials and designs that stand the test of time. Our products feel nicer and last longer, on purpose.
										 </OurValuesInfoParagraph>
									</OurValuesInfo>
									<OurValuesInfo>
										 <img src="images/sustainability-icons.svg" alt="Quality" />
										 <OurValuesInfoHeader>
										 	Sustainability
										 </OurValuesInfoHeader>
										 <OurValuesInfoParagraph>
										 Sustainability is built into everything we do. Whenever possible, we choose organic materials, environmentally conscientious packaging and ethical business practices. 
										 </OurValuesInfoParagraph>
									</OurValuesInfo>
									<OurValuesInfo>
										 <img src="images/affordability-icons.svg" alt="Quality" />
										 <OurValuesInfoHeader>
										 	Affordability
										 </OurValuesInfoHeader>
										 <OurValuesInfoParagraph>
										 	Everyone should have access to nice things. We keep prices low by using a factory-direct model that cuts out the supply-chain middlemen and reduces costs.
										 </OurValuesInfoParagraph>
									</OurValuesInfo>
								</OurValuesInfoWrap>
							</OurValuesMain>
							<OurValuesTwoColumnSection>
								<OurValuesContentFlex>
									<OurValuesContentRight>
										<OurValuesHeader>
											Fair practices and fair pricing
										</OurValuesHeader>
										<OurValuesParagraph>
											Affordable products shouldn't come at the cost of worker exploitation. We only partner with factories who meet or exceed global guidelines for workplace safety and equitable wages.
										</OurValuesParagraph>
									</OurValuesContentRight>
									<OurValuesImgSection>
										 <img src="images/img-01.jpg" alt=""/>
									</OurValuesImgSection>
								</OurValuesContentFlex>
								<OurValuesContentFlex>
									<OurValuesImgSection>
										 <img src="images/img-02.jpg" alt=""/>
									</OurValuesImgSection>
									<OurValuesContentLeft>
										<OurValuesHeader>
											The difference is clear
										</OurValuesHeader>
										<OurValuesParagraph>
											We value transparency. We’re open and honest about the materials in our products, how they’re manufactured and how they’re priced. Honesty is always our policy.
										</OurValuesParagraph>
									</OurValuesContentLeft>
									
								</OurValuesContentFlex>
							</OurValuesTwoColumnSection>
						</OurValuesContainer>

				</OurValuesSection>
			)

};