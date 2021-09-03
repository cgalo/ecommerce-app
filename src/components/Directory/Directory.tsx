import React from 'react';

import MenuItem from '../MenuItem/MenuItem';

import { sections } from '../../services/directory-service';

import './Directory.scss';



const Directory:React.FC<{}> = () => {
    return (
        <div className="directory-menu">
            {sections.map((item) => (
                <MenuItem 
                    key={item.id}
                    imageUrl={item.imageUrl}
                    size={item.size}
                    title={item.title}
                    linkUrl={item.linkUrl}
                    id={item.id}
                />
            ))}
        </div>
    );
}

export default Directory;