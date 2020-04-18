import * as React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
    background: #fff;
`;

const Bounds = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 .25rem;
    @media (max-width: 767px) {
        padding: 0 8px;
    }
`;

export default class Footer extends React.Component {
    render() {
        return (
            <FooterWrapper>
                <Bounds>
                    Copyright &copy; 2020 <Link to="/">The Society El Paso</Link>
                    Created by {this.props.author}
                </Bounds>
            </FooterWrapper>
        )
    }
}

