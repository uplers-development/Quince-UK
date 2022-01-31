import styled from "styled-components"; 
import {Banner} from './Components/BannerSection';
import {OurValues} from './Components/OurValuesSection';
import {PageInfo} from './Components/PageInfoSection';


const Wrapper = styled.section``;


function App() {
  return (
      <Wrapper>
          <Banner/>
          <PageInfo/>
          <OurValues/>
      </Wrapper>    
  );
}

export default App;
