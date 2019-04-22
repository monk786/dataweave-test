import React from 'react';
import ProductsListing from '../ProductsListing/ProductsListing';
import ProductOverView from '../ProductOverView/ProductOverView';
import "./ProductSection.scss"
import Preloader from '../Preloader/Preloader';

class ProductSection extends React.Component{
    constructor(props){
        super(props);
        this.getProductOverviewData = this.getProductOverviewData.bind(this);
        this.state={
            productOverviewData : [],
            currentCardBundleID:1
            
        }
    }

    componentDidMount(){
        
        this.getProductOverviewData(this.props.initialCardBundleId);
       
    }

    componentDidUpdate(prevProps){

        let prevCardBundleId =  prevProps.initialCardBundleId;
        let currentCardBundleId = this.props.initialCardBundleId;

        if(prevCardBundleId !== currentCardBundleId){
            this.getProductOverviewData(currentCardBundleId);
        }
    }

    getProductOverviewData(bundle_id){

        let url ;
        if(bundle_id){
            url = "https://app.dataweave.com/v6/app/retailer/bundle_overview/?&api_key=38430b87ac715c5858b7de91fb90b3f7&base_view=all_products&bundle_id="+bundle_id+"";
        
            fetch(url)
            .then(response => response.json())
            .then(response => {
                this.setState({
                    productOverviewData : response,
                    currentCardBundleID : bundle_id,
                })
            })
        }
    
    }

    render(){
        let productListData = this.props.productListData;
        let productOverviewData = this.state.productOverviewData;
        let currentCardBundleID = this.state.currentCardBundleID;

        return( 
            <div className="product__section">

                {(productListData !== undefined) ? 
                        <React.Fragment>
                            <ProductsListing noData={this.props.noData} currentCardBundleID={currentCardBundleID} getFilterData={this.props.getFilterData} productListData={productListData} passCurrentBundleId={this.getProductOverviewData}/>
                           {!this.props.noData ? <ProductOverView  productOverviewData={productOverviewData}/> : null};
                        </React.Fragment>
                        
                        : <Preloader/>}
            
            </div>
        )
    }
}

export default ProductSection;