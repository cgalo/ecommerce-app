import React from 'react';

import './CollectionPreview.scss';

interface CollectionPreviewProps {
    title: string;
    items : Array<any>;
}

const CollectionPreview:React.FC<CollectionPreviewProps> = (props) => {
    const { title, items} = props;
    return (
        <div className="collection-preview">
            <h1 className="title"> { title } </h1>
            <div className="preview">
                {items
                .filter((item, idx) => idx < 4)
                .map((item) => (
                   <div key={item.id}> { item.name }</div>
                ))}
            </div>
        </div>
    );
}

export default CollectionPreview;