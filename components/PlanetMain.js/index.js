import styled from 'styled-components';
import PlanetInformationToggleMobile from './PlanetInformationToggleMobile';
import PlanetImage from './PlanetImage';
import PlanetInformation from './PlanetInformation';
import PlanetInformationToggle from './PlanetInformationToggle';
import PlanetDetails from './PlanetDetails';
import { PlanetMainContext } from '../../context/PlanetMainContext';

const PlanetMain = ({planetData,pageAccentColor})=>{
    const {name,planetImages,planetSize, overview,structure, geology, rotation, revolution, radius, temperature }=planetData;

    const {currentToggle,currentPlanetInformation,informationToggle}=PlanetMainContext(overview,structure, geology);
    
    return (
        <PlanetMainContainer>
            <PlanetInformationToggleMobile currentToggle={currentToggle} informationToggle={informationToggle} pageAccentColor={pageAccentColor}></PlanetInformationToggleMobile>
            <ContentContainer>
                <GridWrap1>
                    <PlanetImage size={planetSize} images={planetImages} currentToggle={currentToggle}></PlanetImage>
                    <PlanetInformationToggle currentToggle={currentToggle} informationToggle={informationToggle} pageAccentColor={pageAccentColor}></PlanetInformationToggle>
                    <PlanetInformation planetName={name} currentPlanetInformation={currentPlanetInformation}></PlanetInformation>
                </GridWrap1>
                <GridWrap2>
                    <PlanetDetails rotation={rotation} revolution={revolution} radius={radius} temperature={temperature}></PlanetDetails>
                </GridWrap2>
            </ContentContainer>
        </PlanetMainContainer>
    );
};

const PlanetMainContainer = styled.main`
    height:100%;
    display:flex;
    flex-direction:column;
    flex:1;
`;
const ContentContainer = styled.div`
    padding-left:1.5rem;
    padding-right:1.5rem;
    padding-bottom:2.938rem;
    @media (min-width: 768px) {
        padding-left:2.5rem;
        padding-right:2.5rem;
        padding-bottom:2.25rem;
    }
    @media (min-width: 992px) {
        padding-left:3.75rem;
        padding-right:3.75rem;
        padding-bottom:3.5rem;
    }
    @media (min-width: 1200px) {
        padding-left:10.313rem;
        padding-right:10.313rem;
        padding-bottom:3.5rem;
    }
`;
const GridWrap1 = styled.div`
    flex:1;
    @media (min-width: 768px) {
        margin-bottom:1.688rem;
        display: grid;
        grid-template-columns: 50% 50%;
        grid-template-rows: 28.75rem auto;
        grid-template-areas: 
            "planetImage planetImage"
            "planetInformation planetToggle";
    }
    @media (min-width: 992px) {
        margin-bottom:5.438rem;
        display: grid;
        grid-template-columns: auto 21.875rem;
        grid-template-rows: auto;
        grid-template-areas: 
            "planetImage planetInformation"
            "planetImage planetToggle";
    }
`;
const GridWrap2 = styled.div`
    display:flex;
    justify-content:center;
`;

export default PlanetMain;