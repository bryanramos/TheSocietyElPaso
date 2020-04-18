import * as React from 'react';
import styled from 'styled-components';

const CatalogView = styled.div``;
const Card = styled.div`
    box-shadow: rgba(0, 0, 0, 0.11) 0px 0.3px 0.9px, rgba(0, 0, 0, 0.133) 0px 1.6px 3.6px;
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
    padding-top: 200px;
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
const CardTag = styled.span``;
const CardTitle = styled.h4``;
const CardDescription = styled.p``;
const CardLinks = styled.div``;

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
                                    <CardImage className="card-image" style={divStyle}></CardImage>
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
                                        </CardLinks>
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