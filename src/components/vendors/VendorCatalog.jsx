import * as React from 'react';
import styled from 'styled-components';

const CatalogView = styled.div`
    margin-bottom: 40px;
`;
const Card = styled.div`
    transition: all 200ms ease;
    box-shadow: rgba(0, 0, 0, 0.11) 0px 0.3px 0.9px, rgba(0, 0, 0, 0.133) 0px 1.6px 3.6px;
    :hover {
        box-shadow: rgba(0,0,0,0.11) 0px 0.3px 0.8px, rgba(0,0,0,0.133) 0px 12px 12px
    }
    background: #fff;
    display: flex;
    background-clip: border-box;
    word-wrap: break-word;
    min-width: 0;
    flex-direction: column;
    animation-name: example;
    animation-duration: 400ms;
`;
const CardImage = styled.div`
    display: block;
    position: relative;
    overflow: hidden;
    padding-top: 250px;
    background-position: center center;
    transition: 500ms padding ease;
    @media (max-width: 550px) {
        padding-top: 300px;
    }
`;
const CardBody = styled.section`
    display: flex;
    flex-direction: column;
    flex: 1 1 auto;
    min-height: 1px;
    padding: 1.25rem;
`;
const CardTag = styled.span`
    font-size: 0.9rem;
    color: var(--society-lighter-gray);
    margin-bottom: 10px;
`;
const CardTitle = styled.h2`
    margin: 0;
    color: var(--society-heading-color);
    a {
        color: inherit;
        text-decoration: none;
    }
`;
const CardDescription = styled.p`
    flex-grow: 1;
    margin: 5px 0 30px 0;
`;
const CardLinks = styled.div`
    margin-bottom: 20px;
    a {
        color: var(--society-lighter-gray);
        margin-right: 24px;
    }
    a svg {
        fill: var(--society-lighter-gray);
    }
    a:hover {
        color: var(--society-text-color-1);
    }
    a:hover svg {
        color: var(--society-text-color-1);
    }
`;
const CardURL = styled.a`
    background: #dda4a3;
    border-radius: 2px;
    font-size: 16px;
    color: #fff;
    padding: 0.875rem 0.75rem;  
    display: inline-block;
    text-decoration: none;
    text-align: center;
    line-height: 1.5;
    text-transform: uppercase;
    transition: all 400ms ease;
    :hover {
        background: #ad8180;
    }
`;


export default class VendorCatalog extends React.Component {
    render() {
        const sorted = this.props.vendors.sort((a, b) => {
            const isReversed = (this.props.sortType === 'ascending') ? 1 : -1;
            return isReversed * a.vendorName.localeCompare(b.vendorName);
        });

        return (
            <CatalogView className="catalog-view">
                {
                    sorted.map((vendor, i) => {
                        if (vendor.vendorCategory === this.props.vendorType || this.props.vendorType === 'show-all') {
                            var imgUrl = vendor.vendorImage;
                            var divStyle = { 
                                backgroundImage: "url(" + imgUrl + ")",
                                backgroundSize: 'cover',
                                backgroundColor: '#f2f2f2'
                            };
                            return (
                                <Card aria-label={vendor.vendorCategory} id={vendor.vendorCategory} key={i} className={vendor.id + " card"}>
                                    <a aria-label={"Visit " + vendor.vendorName + " website"} title={"Visit " + vendor.vendorName + " website"}  href={vendor.vendorURL}>
                                        <CardImage className="card-image" style={divStyle}>
                                        </CardImage>
                                    </a>
                                    <CardBody>
                                        <CardTag>{vendor.vendorType}</CardTag>
                                        <CardTitle>
                                            <a aria-label={vendor.vendorName} title={vendor.vendorName} href={vendor.vendorURL}>{vendor.vendorName}</a>
                                        </CardTitle>
                                        <CardDescription>{vendor.vendorDescription}</CardDescription>
                                        <CardLinks>
                                        {
                                            vendor.vendorEmails.map(function (vendorEmail, i) {
                                                return (
                                                    <a aria-label={"Email " + vendor.vendorName} title={"Email " + vendor.vendorName} href={"mailto:" + vendorEmail.url} key={i}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" data-prefix="far" data-icon="envelope" className="svg-inline--fa fa-envelope fa-w-16" role="img" width="22px" height="22px" viewBox="0 0 512 512"><path fill="currentColor" d="M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm0 48v40.805c-22.422 18.259-58.168 46.651-134.587 106.49-16.841 13.247-50.201 45.072-73.413 44.701-23.208.375-56.579-31.459-73.413-44.701C106.18 199.465 70.425 171.067 48 152.805V112h416zM48 400V214.398c22.914 18.251 55.409 43.862 104.938 82.646 21.857 17.205 60.134 55.186 103.062 54.955 42.717.231 80.509-37.199 103.053-54.947 49.528-38.783 82.032-64.401 104.947-82.653V400H48z"/></svg>
                                                    </a>
                                                );
                                            })
                                        }
                                        {
                                            vendor.vendorPhones.map(function (vendorPhone, i) {
                                                return (
                                                    <a aria-label={"Call " + vendor.vendorName} title={"Call " + vendor.vendorName} href={"tel:" + vendorPhone.phone} key={i}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="phone-alt" className="svg-inline--fa fa-phone-alt fa-w-16" role="img" width="22px" height="22px" viewBox="0 0 512 512"><path fill="currentColor" d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"/></svg>
                                                    </a>
                                                )
                                            })
                                        }
                                        </CardLinks>
                                        <CardURL aria-label={"Visit " + vendor.vendorName + " website"} title={"Visit " + vendor.vendorName + " website"} href={vendor.vendorURL}>Visit Website</CardURL>
                                    </CardBody>
                                </Card>
                            );
                        } 
                    })
                }
            </CatalogView>
        );
    }
}