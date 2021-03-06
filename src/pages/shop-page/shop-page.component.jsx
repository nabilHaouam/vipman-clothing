import React, { Component } from 'react';
import SHOP_DATA from './shop-page.data';
import CollectionPreview from '../../components/collection-preview/collection-preview.component';
export default class ShopPage extends Component {
  constructor(props){
    super(props);
    this.state = {
        collections : SHOP_DATA
    }
  }
  render() {
    return (
      <div>
        <h1>Collections</h1>
        {this.state.collections.map(({id, ...otherCollectionProps})=>(
            <CollectionPreview key={id} {...otherCollectionProps}/>
        ))}
      </div>
    )
  }
}
