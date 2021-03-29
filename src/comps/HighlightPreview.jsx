import React from "react";

export function HighlightPreview({ highlight }) {

    return (
        <div className="highlight-preview" >
            <div className="highlight-preview-img">
                <img className="img-fit" src={highlight.imgUrl} alt="highlight-img" />
                <div className="stick"></div>
            </div>
            <div className="highlight-preview-info">
                <div className="highlight-title">{highlight.title}</div>
                <div className="highlight-description">{highlight.desc}</div>
            </div>
        </div>
    )

}








