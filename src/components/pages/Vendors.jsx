import * as React from 'react'; 
import styled from 'styled-components';
import VendorCatalogNavigation from '../vendors/VendorCatalogNavigation';
import VendorCatalog from '../vendors/VendorCatalog';

const Bounds = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 .25rem;
`;

export class Vendors extends React.Component {

    /**
     * vendors: vendors data will be imported as json
     * sortType: should be either ascending or descending
     * showVendorType: toggled via select dropdown in VendorNavigation, default will be: show-all
     */
    constructor() {
        super();
        this.state = {
            vendors: [],
            isLoading: false,
            error: null,
            sortType: 'ascending',
            showVendorType: 'show-all',
        }
    }

    componentDidMount() {
        this.setState({ isLoading: true })
        fetch('/data/vendors.json')
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error("Something went wrong!");
                }
            })
            .then(data => this.setState({ vendors: data, isLoading: false}))
            .catch(error => this.setState({ error, isLoading: false}))
    }

    onChangeSortType(sortingDirection) {
        this.setState({
            sortType: sortingDirection
        });
    }

    onChangeShowVendorType(vendorType) {
        this.setState({
            showVendorType: vendorType
        });
    }

    render() {
        return (
            <div>
                <h1>Vendors</h1>
                <Bounds>
                    <VendorCatalogNavigation 
                        vendors={this.state.vendors}
                        sortType={this.state.sortType}
                        showVendorType={this.state.showVendorType} 
                        changeSortType={this.onChangeSortType.bind(this)}
                        onChangeShowVendorType={this.onChangeShowVendorType.bind(this)}
                    />
                    <VendorCatalog vendors={this.state.vendors} sortType={this.state.sortType} vendorType={this.state.showVendorType} />
                </Bounds>
            </div>

        )
    }
}