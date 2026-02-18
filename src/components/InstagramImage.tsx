'use client';

import { useState } from 'react';

interface InstagramImageProps {
    src: string;
    alt: string;
    fallbackSrc: string;
    className?: string;
}

export default function InstagramImage({ src, alt, fallbackSrc, className }: InstagramImageProps) {
    const [imgSrc, setImgSrc] = useState(src);

    return (
        <img
            src={imgSrc}
            alt={alt}
            className={className}
            onError={() => setImgSrc(fallbackSrc)}
        />
    );
}
