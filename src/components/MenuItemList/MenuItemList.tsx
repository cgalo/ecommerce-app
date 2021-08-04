import React from 'react';

import MenuItem from '../MenuItem/MenuItem';

import { MenuItemListProps } from '../types';

import './MenuItemList.scss';

const MenuItemList:React.FC<MenuItemListProps> = (props) => {
    return (
        <div className="menu-item-list">
            {props.MenuItems.map((item) => (
                <MenuItem 
                    title={item.title}
                    imageUrl={item.imageUrl}
                    id={item.id}
                    linkUrl={item.linkUrl}
                    size={item.size}
                />
            ))}
        </div>
    );
}

export default MenuItemList;