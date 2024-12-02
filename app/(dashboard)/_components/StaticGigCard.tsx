// StaticGigCard.tsx
"use client";

import Link from "next/link";

interface StaticGigCardProps {
    title: string;
    description: string;
    createdAt: string;
    imageUrl: string; // Nueva propiedad para la imagen
}

export const StaticGigCard = ({ title, description, createdAt, imageUrl }: StaticGigCardProps) => {
    return (
        <Link href={`/demo/${title.replace(/\s+/g, '-').toLowerCase()}`}>
            <div className="group border rounded-lg flex flex-col justify-between overflow-hidden p-4">
                <img src={imageUrl} alt={title} className="w-full h-32 object-cover mb-2" /> {/* Imagen añadida */}
                <h3 className="font-bold">{title}</h3>
                <p>{description}</p>
                <span className="text-gray-500">{createdAt}</span>
            </div>
        </Link>
    );
};