import React from 'react';

import './CollectionItem.scss';

import type { CollectionItemProps } from '../types';

const CollectionItem:React.FC<CollectionItemProps> = (props) => {
    const { id, name, price, imageUrl } = props; 
    return (
        <div className="collection-item">
            <div 
                className="image"
                style={{
                    backgroundImage: `url(${imageUrl})`
                }}
            />
            <div className="collection-footer">
                <span className="name"> { name } </span>
                <span className="price"> { price }</span>
            </div>
            
        </div>
    );
}

export default CollectionItem;