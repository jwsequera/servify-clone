import Image from "next/image"

export const EmptySearch = () => {
    return (
        <div className="h-full flex flex-col items-center justify-center">
            <Image
                src="/empty-search.svg"
                alt="Empty"
                width={340}
                height={340}
            />
            <h2 className="text-2xl font-semibold mt-6">
                No se encontraron resultados
            </h2>
            <p className="text-muted-foreground text-sm mt-2">
                Prueba con otros términos de búsqueda
            </p>
        </div>
    );
};