import React from "react";
import rupeeicon from "../../assets/icons/rupee-indian.svg";
class ProductCard
 extends React.Component{
    

    render(){
        let cardData = this.props.cardData;
        // console.log("loadIndex",this.props.loadIndex);
        if(cardData){

            let inStock = cardData.stock === "in stock" ? true : false;
            let isValid = cardData.is_valid;
            // console.log(isValid);
            return(
                <div className={`product__card ${this.props.currentCard ? "product__card--current" : ""}`} onClick={this.props.onClick}>
                    <div className="product__card-wrap">
                        <div className="product__card-wrap--inner">
                            <div className="product__card-details">

                                {inStock && isValid 
                                    ?  
                                        <div className="product__details-row">
                                            <span className="prouct__price"><img alt="icon" className="icon icon--rupee" src={rupeeicon}/>{cardData.available_price}</span>
                                        </div>
                                    
                                    : null
                                }
                               
    
                                <div className="product__details-row">
                                    <span className="product__name">{cardData.bundle_name}</span>
                                </div>
    
                                <div className="product__details-row">
                                    <span className="product__sku">{cardData.sku}</span>
                                </div>

                                {inStock ? 
                                 <React.Fragment>
                                    <div className="product__details-row">
                                        <span className="product__opporunity-increase">
                                            Increase upto <span className="increase__value">{cardData.price_opportunity_increase_by}({cardData.price_opportunity_increase_by_percentage}%)</span>
                                        </span>
                                    </div>
        
                                    <div className="product__details-row">
                                        <span className="product__opporunity--timeline">Opportunity exists from last <span>{cardData.price_opportunity_days}</span> day(s)</span>
                                    </div>
                                </React.Fragment>
                                : 

                                <div className="product__details-row">
                                    <span className="">Out of Stock from <span>{cardData.out_of_stock_days}</span> day(s)</span>
                                </div> 
                            }
                                
                            </div>
                            <div className="product__card-img-wrap">
                                <img   src={cardData.thumbnail} alt=""/>
                            </div>
                        </div>
                    </div>
                </div>    
            )
        }

        else{
            return null
        }
        
    }
} 

export default ProductCard
