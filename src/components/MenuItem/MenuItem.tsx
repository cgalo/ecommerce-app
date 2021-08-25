import React from 'react';
import { withRouter } from 'react-router-dom';
import { RouteComponentProps } from 'react-router';

import './MenuItem.scss';

import type { MenuItemProps } from '../types';

const MenuItem: React.FC<MenuItemProps & RouteComponentProps> = ({ title, imageUrl, size, history, linkUrl, match }) => {
    return (
        <div
            className={`${size} menu-item`}
            onClick={() => history.push(`${match.url}${linkUrl}`)}
        >
            <div
                className='background-image'
                style={{
                    backgroundImage: `url(${imageUrl})`
                }}
            />
            <div className='content'>
                <h1 className='title'>{title.toUpperCase()}</h1>
                <span className='subtitle'>SHOP NOW</span>
            </div>
        </div>
    );

    // return (
    //     <div 
    //         className={`${props.size} menu-item`}
    //         onClick={() => props.history.push(`${props.match.url}${props.linkUrl}`)}
    //     >
    //         <div 
    //             className="background-image"
    //             style={{
    //                 backgroundImage: `url(${props.imageUrl})`
    //             }} 
            
    //         />
    //         <div className="content">
    //             <h1 className="title">{props.title.toUpperCase()}</h1>
    //             <span className="subtitle">
    //                 {!props.subtitle && 'SHOP NOW'}
    //                 {props.subtitle}
    //                 </span>
    //         </div>
    //     </div>
    // );
}

export default withRouter(MenuItem);