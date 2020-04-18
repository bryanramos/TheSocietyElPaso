import * as React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../../society_logo.png';

const HeaderWrapper = styled.header`
    background: #fff;
    padding: 15px 0;
    a {
        text-decoration: none;
    }
`;

const Bounds = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 .25rem;
`;

const NavbarBrand = styled.div`
    h1 {
        position: absolute !important;
        overflow: hidden !important;
        clip: rect(1px,1px,1px,1px) !important;
        width: 1px !important;
        height: 1px !important;
        border: 0 !important;
        padding: 0 !important;
        margin: 0 !important;
        font-size: 1.25rem;
    }
    a {
        display: flex;
        flex-direction: column;
    }

`;


export default class Header extends React.Component {
    render() {
        return (
            <HeaderWrapper className="bounds">
                <Bounds>
                    <NavbarBrand>
                        <Link to="/" title="The Society of Wedding Professionals" aria-label="The Society of Wedding Professionals">
                            <h1 role="presentation">{this.props.title}</h1>
                            <img src={logo} className="society-logo"/>
                        </Link>
                    </NavbarBrand>
                </Bounds>
            </HeaderWrapper>
        )
    }
}