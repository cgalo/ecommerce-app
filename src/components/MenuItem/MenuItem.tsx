import React from 'react';
import { withRouter } from 'react-router-dom';
import { RouteComponentProps } from 'react-router';

import './MenuItem.scss';

import type { MenuItemProps } from '../types';

const MenuItem: React.FC<MenuItemProps & RouteComponentProps> = (props) => {
    return (
        <div style={{
            backgroundImage: `url(${props.imageUrl})`
        }} 
        className={`${props.size} menu-item`}
        >
            <div className="content">
                <h1 className="title">{props.title}</h1>
                <span className="subtitle">
                    {!props.subtitle && 'SHOP NOW'}
                    {props.subtitle}
                    </span>
            </div>
        </div>
    );
}

export default withRouter(MenuItem);