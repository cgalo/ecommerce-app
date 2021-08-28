import React from 'react';

import CollectionPreview from '../../components/CollectionPreview/CollectionPreview';

import { SHOP_DATA } from '../../services/shopPage-service';

const ShopPage:React.FC<{}> = (props) => {
    return (
        <div className="shop-page">
            {SHOP_DATA.map(({title, items}) => (
                <CollectionPreview title={title} items={items} />
            ))}
        </div>
    );
}

export default ShopPage;