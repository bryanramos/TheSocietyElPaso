import * as React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
    background: #fff;
`;

export default class Footer extends React.Component {
    render() {
        return (
            <FooterWrapper className="bounds">
                Copyright &copy; 2020 <Link to="/">The Society El Paso</Link>
                Created by {this.props.author}
            </FooterWrapper>
        )
    }
}