import React, {Component} from 'react';
import styled from 'styled-components';
import { BlurhashCanvas } from "react-blurhash";


class Content extends Component{

    render(){
        const { urls, alt_description: alt, blur_hash, width, height } = this.props.data;
        return(
            <div>
                <StyledCanvas hash={blur_hash} width={width} height={height} punch={1} />
                <img onLoadedData={console.log} src={urls?.small} alt={alt} />
            </div>
        );
    }
}

export default Content;

const StyledCanvas = styled(BlurhashCanvas)`
    max-width: 400px;
    height: auto;
`;