import React from 'react'

export default function LinkLogo(
    {
        to,
        logoPath,
        tital,
        alt = "missing...",
        height = 40,
        target = 'blank',
    }) {
    return (
        <a href={to} target={target} className='linkLogo'>
            <img src={logoPath} alt={alt} height={height} />
            <div className="tital text-decoration-none ">{tital}</div>
        </a>
    )
}
