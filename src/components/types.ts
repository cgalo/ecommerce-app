/**
 * Shared interfaces for components
*/

export interface MenuItemProps{
    title:string;
    imageUrl: string;
    id: number;
    linkUrl: string;
    size?: string;
    subtitle?: string;
}

export interface MenuItemListProps {
    MenuItems: MenuItemProps[]
}

export interface CollectionItemProps{
    id: number;
    name: string;
    price: number;
    imageUrl: string;
}