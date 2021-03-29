import React from "react";
import { HighlightPreview } from './HighlightPreview'

export function HighlightList() {

    const highlights = [
        {
            title: 'Seared Salmon Fillet',
            desc: 'Our locally sourced salmon served with a refreshing buckwheat summer salad.',
            imgUrl: require("../assets/imgs/menu-items/menu-item0.jpg").default
        },
        {
            title: 'Rosemary Filet Mignon',
            desc: 'Our prime beef served to your taste with a delicious choice of seasonal sides.',
            imgUrl: require("../assets/imgs/menu-items/menu-item1.jpg").default
        },
        {
            title: 'Summer Fruit Chocolate Mousse',
            desc: 'Creamy mousse combined with summer fruits and dark chocolate shavings.',
            imgUrl: require("../assets/imgs/menu-items/menu-item2.jpg").default
        }

    ]

    return (
        <div className="highlights-list">
            {
                highlights.map((highlight, idx) => <HighlightPreview highlight={highlight} key={idx} />)
            }
        </div>
    )
}






