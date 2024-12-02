import Image from "next/image"

export const EmptyFavorites = () => {
    return (
        <div className="h-full flex flex-col items-center justify-center">
            <Image
                src="/empty-favorites.svg"
                alt="Empty"
                width={340}
                height={340}
            />
            <h2 className="text-2xl font-semibold mt-6">
                !No tienes favoritos!
            </h2>
            <p className="text-muted-foreground text-sm mt-2">
                ¡Guarda tus servicios favoritos para tenerlos siempre a mano!
            </p>
        </div>
    );
};