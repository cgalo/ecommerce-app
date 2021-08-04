import React from 'react';

import Directory from '../components/MenuItemList/MenuItemList';

import { getDirectoryItems } from '../services/homepage-service';

import './HomePage.scss';

const HomePage:React.FC<{}> = () => {
    const data = getDirectoryItems;
    return (
        <div className="homepage">
            <div className="menu-item-list">
                <Directory MenuItems={data}/>
            </div>
        </div>
    )
}

export default HomePage;