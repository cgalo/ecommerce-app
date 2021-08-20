import React from 'react';

import MenuItemList from '../components/MenuItemList/MenuItemList';

import { getDirectoryItems } from '../services/homepage-service';

import './HomePage.scss';

const HomePage:React.FC<{}> = () => {
    const { MenuItems } = getDirectoryItems;
    return (
        <div className="homepage">
            <div className="menu-item-list">
                <MenuItemList MenuItems={MenuItems} />
            </div>
        </div>
    )
}

export default HomePage;