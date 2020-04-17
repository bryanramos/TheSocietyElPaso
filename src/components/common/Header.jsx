import * as React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeaderWrapper = styled.header`
    background: #fff;
`;

export default class Header extends React.Component {
    render() {
        return (
            <HeaderWrapper className="bounds">
                <Link to="/">The Society El Paso</Link>
            </HeaderWrapper>
        )
    }
}