import React from "react";
import downloadIcon from "../../assets/icons/download.svg";
import sortIcon from "../../assets/icons/sort.svg";
import searchIcon from "../../assets/icons/search.svg";
class SearchAndSort extends React.Component{

    constructor(props){
        super(props);
        this.sortList = this.sortList.bind(this);

    }

    sortList(event){
        
        let sortParams = event.currentTarget.dataset;
        let filterParams = {
            "sort_on":sortParams.sorton,
            "sort_by":sortParams.sortby,
        }
        
        this.props.getFilterData(filterParams)
    }



    render(){
        var searchPlaceholder = "search from "+ this.props.productListData.count+ " Products"
        return(
            <div className="listing-action__block">
                <div className="search__input-wrap">
                    <input type="search" className="search__input" id="search" placeholder={searchPlaceholder}/>
                    <img className="icon" alt="icon" src={searchIcon} />
                </div>
                <div className="listing-actions--sub sort__wrap">
                    <img className="icon" alt="icon" src={sortIcon} />
                    <div className="sort__select-list">
                        <div className="sort__options" data-sorton="available_price" data-sortby="desc" onClick={this.sortList}>
                            Price - High to Low
                        </div>
                        <div className="sort__options" data-sorton="discount"  data-sortby="desc" onClick={this.sortList}>
                            Discount - High to Low
                        </div>
                        <div className="sort__options" data-sorton="price_opportunity_increase_by_percentage" data-sortby="desc" onClick={this.sortList}>
                            Increase% - High to Low
                        </div>
                        <div className="sort__options" data-sorton="not_lowest_decrease_by_percentage"  data-sortby="desc" onClick={this.sortList}>
                            Decrease% - High to Low
                        </div>
                    </div>
                </div>

                <div className="listing-actions--sub download__wrap">
                    <img className="icon" alt="icon" src={downloadIcon} />
                </div>
            </div>    
        )
    }
} 

export default SearchAndSort