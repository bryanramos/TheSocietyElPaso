import * as React from 'react';
import styled from 'styled-components';
import * as Constants from '../../Constants';

// styled components
const VendorNavigationWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 10px 0;
    margin-bottom: 20px;
`;
const CatalogResult = styled.p`
    color: var(--society-lighter-gray);
`;
const VendorsDisplayed = styled.span`
    color: var(--society-text-color-1);
    font-weight: bold;
`;
const SortingMenu = styled.div`
    display: flex;
    > div {
        display: flex;
        align-items: center;
    }
`;
const OrderingButtons = styled.div``;
const OrderButton = styled.button`
    background: transparent;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    width: 35px;
    height: 35px;
    font-size: 16px;
    cursor: pointer;
    :hover, :focus {
        background-color: rgba(95,99,104,0.157);
    }
`;
const GridLayoutButtons = styled.div`
`;
const GridLayoutButton = styled.button`
    background: transparent;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 5px;
    height: 35px;
    cursor: pointer;
    :hover, :focus {
        background-color: rgba(95,99,104,0.157);
    }
    span {
        margin-left: 5px;
    }
    @media (max-width: 991px) {
        span {
            display: none;
        }
    }
    @media (max-width: 991px) {
        display: none;
    }
`;
const SelectionDropdown = styled.div`
    margin-left: 24px;
    position: relative;
    @media (max-width: 991px) {
        margin-left: 8px;
    }
    :after {
        content: "+";
        font-size: 13px;
        line-height: 1em;
        width: 30px;
        text-align: left;
        color: inherit;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        right: 0;
        z-index: 55;
    }
    label {
        position: absolute !important;
        overflow: hidden !important;
        -webkit-clip: rect(1px,1px,1px,1px) !important;
        clip: rect(1px,1px,1px,1px) !important;
        width: 1px !important;
        height: 1px !important;
        border: 0 !important;
        padding: 0 !important;
        margin: 0 !important;
    }
    select {
        box-shadow: none;
        -webkit-appearance: none;
    }
    select {
        background-color: #e7e7e8;
        border: none;
        box-shadow: 0 0 1px rgba(0,0,0,0);
        color: #1c1d1f;
        font-size: 16px;
        font-weight: 500;
        font-family: var(--society-font), Arial, Helvetica, sans-serif;
        padding: 10px 20px 10px;
        border-radius: 2px;
        position: relative;
        z-index: 9;
        padding-right: 40px;
        height: auto;
        outline: none;
    }
`;

export default class VendorCatalogNavigation extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            vendors: this.props.vendors,
            activeButtonId: 1
        }
        this.setActiveButton = this.setActiveButton.bind(this);
    }

    componentDidMount() {
        if (this.state.activeButtonId === 1) {
            document.body.classList.add('grid-view');
        }
    }
    setActiveButton(id){
        this.setState({activeButtonId: id});
        if (id === 1) {
            document.body.classList.add('grid-view');
            document.body.classList.remove('list-view');
        } else {
            document.body.classList.add('list-view');
            document.body.classList.remove('grid-view');
        }
    }

    onChangeSortType(sortingType) {
        this.props.changeSortType(sortingType);
    }

    showVendorType = (e) => {
        this.props.onChangeShowVendorType(e.target.value);
    }

    render() {
        return (
            <VendorNavigationWrapper> { /* flexbox */ }
                {this.catalogResultsCount()}
                {this.catalogSortingMenu()}
            </VendorNavigationWrapper>

        );
    }

    /**
     * Shows information about how many vendors are currently being displayed out of the total amount of vendors.
     */
    catalogResultsCount() {
        var totalVendors = 0;
        var totalVendorsDisplayed = 0;
        for (var vendor in this.props.vendors) {
            totalVendors++;
        }
        this.props.vendors.map((vendor, i) => {
            if (vendor.vendorCategory === this.props.showVendorType || this.props.showVendorType === 'show-all') {
                totalVendorsDisplayed++;
            }
        })

        return (
            <CatalogResult>
                <VendorsDisplayed>{totalVendorsDisplayed}</VendorsDisplayed> of {totalVendors} vendors
            </CatalogResult>
        );
    }

    catalogSortingMenu() {
        return (
            <SortingMenu>

                <OrderingButtons>{ /* buttons that allow user to sort in ascending and descending order */ }

                    <OrderButton title={Constants.SortAscendingText} aria-label={Constants.SortAscendingText} onClick={()=>this.onChangeSortType('ascending')}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#333" height="24px" width="24px" ><path d="M0 0h24v24H0V0z" fill="none"/><path d="M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z"/></svg>
                    </OrderButton>

                    <OrderButton title={Constants.SortDescendingText} aria-label={Constants.SortDescendingText} onClick={()=>this.onChangeSortType('descending')}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#333" height="24px" width="24px"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"/></svg>
                    </OrderButton>

                </OrderingButtons>

                <GridLayoutButtons> { /* buttons that allow user to layout vendor catalog cards in a grid view or list view */ }
                    
                    <GridLayoutButton title={Constants.GridViewText} aria-label={Constants.GridViewText} className={this.state.activeButtonId === 1? "button1 active" : "button1"} onClick={() => this.setActiveButton(1)}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="32px" width="32px" viewBox="0 0 24 24" fill="#333"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M4 5v13h17V5H4zm10 2v3.5h-3V7h3zM6 7h3v3.5H6V7zm0 9v-3.5h3V16H6zm5 0v-3.5h3V16h-3zm8 0h-3v-3.5h3V16zm-3-5.5V7h3v3.5h-3z"/></svg>
                        <span>Grid</span>
                    </GridLayoutButton>

                    <GridLayoutButton title={Constants.ListViewText} aria-label={Constants.ListViewText} className={this.state.activeButtonId === 2? "button2 active" : "button2"} onClick={() => this.setActiveButton(2)}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="32px" width="32px" viewBox="0 0 24 24" fill="#333"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M3 5v14h17V5H3zm4 2v2H5V7h2zm-2 6v-2h2v2H5zm0 2h2v2H5v-2zm13 2H9v-2h9v2zm0-4H9v-2h9v2zm0-4H9V7h9v2z"/></svg>
                        <span>List</span>

                    </GridLayoutButton>

                </GridLayoutButtons>

                <SelectionDropdown onChange={this.showVendorType}>
                    <label htmlFor="vendors-type">Open show only specific vendor category menu</label>
                    <select id="vendors-type">
                        <option value="show-all">Show All</option>
                        <option value="bakery">Bakery</option>
                        <option value="bridal-boutiques">Bridal Boutiques</option>
                        <option value="dj">DJ</option>
                        <option value="florists">Florists</option>
                        <option value="hair-makeup">Hair &amp; Makeup</option>
                        <option value="photobooths">Photobooths</option>
                        <option value="photographers">Photographers</option>
                        <option value="planners">Planners</option>
                        <option value="venues">Venues</option>
                        <option value="other-specialty">Other/Specialty</option>
                    </select>
                </SelectionDropdown>

            </SortingMenu>
        );
    }
}