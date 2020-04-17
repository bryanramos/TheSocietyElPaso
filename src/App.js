import React from 'react';
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';
import styled from 'styled-components';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import * as Constants from './Constants';
import {
    Home,
    AboutUs,
    Vendors,
    NotFound
} from './components/pages';

// styled components 
const PageWrapper = styled.div`
    background: #eee;
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 100%;
`;

const MainContent = styled.div`
    flex: 1 0 auto;
`;

export default function App() {
    return (
        <Router>
            <span style={{display: "none"}}>{Constants.Version}</span>
            <PageWrapper>
                <Header title={Constants.AppTitle} />
                <MainContent>
                    <Switch>
                        <Route exact={true} path={Constants.Homepage} component={Home} />
                        <Route exact={true} path={Constants.AboutUs} component={AboutUs} />
                        <Route exact={true} path={Constants.Vendors} component={Vendors} />
                        <Route component={NotFound} />
                    </Switch>
                </MainContent>
                <Footer title={Constants.AppTitle} />
            </PageWrapper>
        </Router>
    );
}

