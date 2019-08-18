import React from 'react';


class ProductCard extends React.Component {
    render() {
        return <div className="sunglassesCard">
            <div className="sunglassesContain">
                <img className="sunglasses"
                    src={this.props.sunglasses.image}
                    alt="sunglasses"
                />
            </div>
            <h1>{this.props.sunglasses.info}</h1>
        </div>
    }
}

export default ProductCard