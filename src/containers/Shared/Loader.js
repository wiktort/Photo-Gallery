import styled, { keyframes } from 'styled-components';
import loading from '../../assets/loading.svg';

const StyledWrapper = styled.div`
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const rotate = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
`;

const StyledLoader = styled.div`
    height: 100px;
    width: 100px;
    animation: ${rotate} 2s linear infinite;
        img{
            height: 100%;
            width: auto;
        }
`;

function Loader(){

    return(
        <StyledWrapper key="global-loader">
            <StyledLoader>
                <img src={loading} alt="Loading icon" />
            </StyledLoader>
            <h2>It is loading</h2>
        </StyledWrapper>
    );
};

export default Loader;