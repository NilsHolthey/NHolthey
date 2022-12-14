import { BoxCenter } from '../UI/LandingPageNew/BoxCenter';
import { BoxLeft } from '../UI/LandingPageNew/BoxLeft';
import { BoxRight } from '../UI/LandingPageNew/BoxRight';
import { Wrapper } from '../UI/LandingPageNew/Wrapper';

export default function LandingPageNew() {
  return (
    <Wrapper>
      <BoxLeft></BoxLeft>
      <BoxCenter>
        <img src="GroupDEV.png" alt="" />
      </BoxCenter>
      <BoxRight></BoxRight>
    </Wrapper>
  );
}
