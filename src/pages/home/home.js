import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getProductsAction, clearProductsAndParams, getProductsCountAction } from '../../redux/actions/products.actions'
import { HomeStyled } from './home.style';
import ProductCard from '../../components/product-card/product-card';
import SelectFilter from '../../components/select-filter/select-filter';
import Pagination from 'rc-pagination';
import 'rc-pagination/assets/index.css';
import { getDepartmentsAction } from '../../redux/actions/department.action';
import { getPromotionsAction } from '../../redux/actions/promotion.action';

export class Home extends Component {
    state = {
        limit: 10,
        offset: 0,
        department: null,
        promo: null,
        name: null,
        totalCount: 0,
        current: 1,
    }
    onChangePage = (page) => {
        this.setState({ current: page, offset: (page - 1) * this.state.limit }, () => {
            const params = this.getParams();
            this.props.getProductsCountAction(params);
        });
    }
    onTextChange(name) {
        this.setState({
            limit: 10,
            offset: 0,
            name: name,
            current: 1
        }, () => {
            const params = this.getParams();
            this.props.getProductsCountAction(params);
        });
    }
    receiveSelectedValue(e) {
        if (e.name === 'Promo') {
            this.setState({current: 1, limit: 10, offset: 0, promo: e.id}, () => {
                const params = this.getParams();
                this.props.getProductsCountAction(params);
            })
        } else {
            this.setState({current: 1, limit: 10, offset: 0, department: e.id}, () => {
                const params = this.getParams();
                this.props.getProductsCountAction(params);
            })
        }
        
    }

    render() {
        return (
            <HomeStyled>
                <div className="row">
                    <div className="col-md-12">
                        <div className="search-section d-flex justify-content-around">
                            <input type="text" placeholder="Search ..." onChange={(e) => { this.onTextChange(e.target.value) }} />
                            <h5>Total Results {this.state.totalCount}</h5>
                            <Pagination onChange={this.onChangePage} current={this.state.current} total={this.state.totalCount} pageSize={this.state.limit} />
                        </div>
                    </div>
                    <div className="col-md-2 filter text-center">
                        <SelectFilter data={this.props.departments?.departments} 
                        sendSelectedValue={(e) => this.receiveSelectedValue(e)}
                         name={"Department"}></SelectFilter>
                        <SelectFilter  data={this.props.promo?.promotions}
                         sendSelectedValue={(e) => this.receiveSelectedValue(e)}
                         name={"Promo"}></SelectFilter>
                    </div>
                    <div className="col-md-10 products">
                        <div className="row">
                            {
                                this.props.products.products && this.props.products.products.length ?
                                    this.props.products.products.map((v, i) => {
                                        return (<div className="col-md-6" key={i}><ProductCard product={v}></ProductCard></div>)
                                    }) : <></>
                            }

                        </div>
                    </div>
                </div>
            </HomeStyled>
        )
    }
    componentDidMount() {
        const params = this.getParams();
        this.props.getProductsCountAction(params);
        this.props.getDepartments();
        this.props.getPromotions();
    }
    componentWillReceiveProps(nextProps) {
        if (!this.props.count && (nextProps?.count?.count || nextProps?.count?.count == 0) ) {
            this.setState({ totalCount: nextProps.count.count })
            const params = this.getParams();
            this.props.getProductsAction(params);
        }
    }
    getParams() {
        return {
            limit: this.state.limit,
            offset: this.state.offset,
            department: this.state.department,
            promo: this.state.promo,
            name: this.state.name
        }
    }
}


function mapDispatchToProps(dispatch) {
    return {
        getProductsCountAction: (params) => dispatch(getProductsCountAction(params)),
        getProductsAction: (params) => dispatch(getProductsAction(params)),
        getDepartments: () => dispatch(getDepartmentsAction()),
        getPromotions: () => dispatch(getPromotionsAction()),
        clearAll: () => dispatch(clearProductsAndParams()),
    }
}
function mapStateToProps(state) {
    console.log(state);

    return { products: state.products.products, count: state.products.count, departments: state.departments.departments, promo: state.promotions.promotions }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home)
