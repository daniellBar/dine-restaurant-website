import React from 'react'

export function InfoCard({title,text}) {
    return <div className="info-card">
        <div className="title">{title}</div>
        <div className="text">{text}</div>
    </div>
}