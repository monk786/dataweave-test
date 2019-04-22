import React from "react";
import "./ProductOverview.scss";
import Preloader from "../Preloader/Preloader";
import rupeeicon from "../../assets/icons/rupee-indian.svg";


class ProductOverView extends React.Component{

    constructor(props){
        super(props);
        this.valueChecker = this.valueChecker.bind(this);
    }


    valueChecker(value){
        if(value === "NA"){
            return "-";
        }
        else{
            return <CheckedValue value={value}/>;
        }
    }


    render(){
        
        let productOverviewData = this.props.productOverviewData;

        if(productOverviewData.length !== 0){

            let productData = productOverviewData.data;

            return (
                <div className="product__overview-block">
                    <div className="product__overview-wrap">
                        <div className="product__details-general">
                            <div className="product__detail-item">
                                <span className="product__stock-status">{productData.stock}</span>
                            </div>
                            <div className="product__detail-item">
                                <span className="product__name">{productData.bundle_name}</span>
                            </div>
                            <div className="product__detail-item">
                                <span className="product__sku">{productData.sku}</span>
                            </div>
                        </div>  
    
                        <div className="product__details-analysis">
                            <div className="product__img-wrap">
                                <img alt="product-thumbnail" className="product__img fluid" src={productData.thumbnail}/>
                            </div>
                            <div className="product__details-analysis-list">
                                <div className="product__details-analysis-item">
                                    <div className="product__details-analysis-item--wrap">
                                        <span className="product__analysis-label">Your Price</span>
                                        <span className="product__analysis-value">
                                            {productData.your_price !== "NA" ? this.valueChecker(productData.your_price) : "-"}
                                        </span>
                                    </div>
                                </div>
                                <div className="product__details-analysis-item">
                                    <div className="product__details-analysis-item--wrap">
                                        <span className="product__analysis-label">Lowest Price</span>
                                        <span className="product__analysis-value">{this.valueChecker(productData.lowest_price_value)}</span>
                                        <span className="competitor-name">{productData.lowest_price_source}</span>
                                    </div>
                                </div>
                                <div className="product__details-analysis-item">
                                    <div className="product__details-analysis-item--wrap">
                                        <span className="product__analysis-label">Highest Price</span>
                                        <span className="product__analysis-value">{this.valueChecker(productData.highest_price_value)}</span>
                                        <span className="competitor-name">{productData.highest_price_source}</span>
                                    </div>
                                </div>
                            </div>
                        </div>      
                    </div>    
                </div> 
            )
        }
        
        return(
           <Preloader/>   
        )
    }
} 


    function CheckedValue(props){
        return(
            <div>
                <img alt="thumbnail" className="icon icon--rupee icon--left" src={rupeeicon}/>
                {props.value}
            </div>
        )
    }

export default ProductOverView;

