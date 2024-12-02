// dashboard.tsx
"use client";

import { useConvexAuth, useMutation } from "convex/react";
import { GigList } from "./_components/gig-list";
import { StaticGigCard } from "./_components/StaticGigCard";
import { useEffect } from "react";
import { api } from "@/convex/_generated/api";

interface DashboardProps {
    searchParams: {
        search?: string;
        favorites?: string;
        filter?: string;
    };
};

const Dashboard = ({
    searchParams
}: DashboardProps) => {
    const store = useMutation(api.users.store);

    useEffect(() => {
        const storeUser = async () => {
            await store({});
        }
        storeUser();
    }, [store]);

    const staticGigs = [
        {
            title: "Servicio de Diseño Gráfico",
            description: "Creación de logotipos y branding.",
            createdAt: "Hace 2 días",
            imageUrl: "/images/diseno-grafico.jpg"
        },
        {
            title: "Desarrollo Web",
            description: "Construcción de sitios web responsivos.",
            createdAt: "Hace 5 días",
            imageUrl: "/images/desarrollo-web.jpg"
        },
        {
            title: "Consultoría Financiera",
            description: "Asesoramiento en inversiones y ahorros.",
            createdAt: "Hace 1 semana",
            imageUrl: "/images/consultoria-financiera.jpg"
        },
        {
            title: "Marketing Digital",
            description: "Estrategias para aumentar tu presencia online.",
            createdAt: "Hace 3 días",
            imageUrl: "/images/marketing-digital.jpg"
        },
        {
            title: "Fotografía Profesional",
            description: "Sesiones fotográficas para eventos y retratos.",
            createdAt: "Hace 4 días",
            imageUrl: "/images/fotografia-profesional.jpg"
        },
        {
            title: "Clases de Cocina",
            description: "Aprende a cocinar platos deliciosos.",
            createdAt: "Hace 2 semanas",
            imageUrl: "/images/clases-cocina.jpg"
        },
        {
            title: "Entrenamiento Personal",
            description: "Planes personalizados de fitness y nutrición.",
            createdAt: "Hace 1 semana",
            imageUrl: "/images/entrenamiento-personal.jpg"
        },
        {
            title: "Asesoría Legal",
            description: "Consultas legales para particulares y empresas.",
            createdAt: "Hace 5 días",
            imageUrl: "/images/asesoria-legal.jpg"
        },
        {
            title: "Redacción de Contenidos",
            description: "Creación de textos para blogs y páginas web.",
            createdAt: "Hace 6 días",
            imageUrl: "/images/redaccion-contenidos.jpg"
        },
        {
            title: "Diseño de Interiores",
            description: "Transforma tus espacios con un diseño profesional.",
            createdAt: "Hace 1 semana",
            imageUrl: "/images/diseno-interiores.jpg"
        },
        {
            title: "Clases de Yoga",
            description: "Mejora tu bienestar físico y mental con nuestras clases.",
            createdAt: "Hace 3 días",
            imageUrl: "/images/clases-yoga.jpg"
        },
        {
            title: "Mantenimiento de Computadoras",
            description: "Servicios de reparación y mantenimiento técnico.",
            createdAt: "Hace 2 semanas",
            imageUrl: "/images/mantenimiento-computadoras.jpg"
        },
        {
            title: "Producción Musical",
            description: "Creación y producción de música original.",
            createdAt: "Hace 4 días",
            imageUrl: "/images/produccion-musical.jpg"
        },
        {
            title: "Clases de Idiomas",
            description: "Aprende un nuevo idioma con nuestros expertos.",
            createdAt: "Hace 1 semana",
            imageUrl: "/images/clases-idiomas.jpg"
        },
        {
            title: "Cuidado de Mascotas",
            description: "Servicios profesionales para el cuidado de tus mascotas.",
            createdAt: "Hace 5 días",
            imageUrl: "/images/cuidado-mascotas.jpg"
        },
        {
            title: "Decoración de Eventos",
            description: "Planificación y decoración para eventos especiales.",
            createdAt: "Hace 6 días",
            imageUrl: "/images/decoracion-eventos.jpg"
        },
        {
            title: "Transporte Privado",
            description: "Servicios de transporte a medida para tus necesidades.",
            createdAt: "Hace 2 semanas",
            imageUrl: "/images/transporte-privado.jpg"
        },
        {
            title: 'Reparación de Electrodomésticos',
            description: 'Reparación y mantenimiento de electrodomésticos del hogar.',
            createdAt: 'Hace 1 semana',
            imageUrl: '/images/reparacion-electrodomesticos.jpg'
        },
        {
            title: 'Asesoría en Redes Sociales',
            description: 'Gestión y asesoramiento sobre redes sociales.',
            createdAt: 'Hace 3 días',
            imageUrl: '/images/asesoria-redes-sociales.jpg'
        },
        {
            title: "Desarrollo de Aplicaciones Móviles",
            description: "Construcción de apps para Android e iOS.",
            createdAt: "Hace 3 días",
            imageUrl: "/images/desarrollo-movil.jpg"
        },
        {
            title: "Ciberseguridad",
            description: "Protege tus sistemas y datos de ataques digitales.",
            createdAt: "Hace 1 semana",
            imageUrl: "/images/ciberseguridad.jpg"
        },
        {
            title: "Automatización de Procesos",
            description: "Optimiza tareas repetitivas con soluciones automáticas.",
            createdAt: "Hace 2 días",
            imageUrl: "/images/automatizacion.jpg"
        },
        {
            title: "Producción Audiovisual",
            description: "Creación de videos corporativos y publicitarios.",
            createdAt: "Hace 5 días",
            imageUrl: "/images/produccion-audiovisual.jpg"
        },
        {
            title: "Ilustración Personalizada",
            description: "Diseños únicos para tus proyectos creativos.",
            createdAt: "Hace 3 días",
            imageUrl: "/images/ilustracion.jpg"
        },
        {
            title: "Edición de Videos",
            description: "Edición profesional para proyectos audiovisuales.",
            createdAt: "Hace 4 días",
            imageUrl: "/images/edicion-videos.jpg"
        },
        {
            title: "Tutorías Académicas",
            description: "Clases personalizadas para todas las edades.",
            createdAt: "Hace 1 semana",
            imageUrl: "/images/tutorias.jpg"
        },
        {
            title: "Preparación para Exámenes",
            description: "Ayuda especializada para exámenes escolares y profesionales.",
            createdAt: "Hace 6 días",
            imageUrl: "/images/preparacion-examenes.jpg"
        },
        {
            title: "Clases de Fotografía",
            description: "Aprende técnicas para mejorar tus fotografías.",
            createdAt: "Hace 5 días",
            imageUrl: "/images/clases-fotografia.jpg"
        },
        {
            title: "Terapia Física",
            description: "Recuperación y mejora de la movilidad.",
            createdAt: "Hace 4 días",
            imageUrl: "/images/terapia-fisica.jpg"
        },
        {
            title: "Masajes Terapéuticos",
            description: "Relajación y alivio del estrés.",
            createdAt: "Hace 2 semanas",
            imageUrl: "/images/masajes.jpg"
        },
        {
            title: "Terapia Psicológica",
            description: "Apoyo emocional y desarrollo personal.",
            createdAt: "Hace 1 semana",
            imageUrl: "/images/terapia-psicologica.jpg"
        },
        {
            title: "Limpieza Profesional",
            description: "Servicios de limpieza profunda para tu hogar o negocio.",
            createdAt: "Hace 3 días",
            imageUrl: "/images/limpieza.jpg"
        },
        {
            title: "Plomería",
            description: "Reparaciones e instalaciones de sistemas de agua.",
            createdAt: "Hace 5 días",
            imageUrl: "/images/plomeria.jpg"
        },
        {
            title: "Electricidad",
            description: "Reparación e instalación de sistemas eléctricos.",
            createdAt: "Hace 4 días",
            imageUrl: "/images/electricidad.jpg"
        },
        {
            title: "Servicios de Traducción",
            description: "Traducción profesional en múltiples idiomas.",
            createdAt: "Hace 6 días",
            imageUrl: "/images/traduccion.jpg"
        },
        {
            title: "Organización de Espacios",
            description: "Optimización y diseño para ambientes funcionales.",
            createdAt: "Hace 1 semana",
            imageUrl: "/images/organizacion-espacios.jpg"
        },
        {
            title: "Coaching Empresarial",
            description: "Mejora el rendimiento de tu equipo de trabajo.",
            createdAt: "Hace 2 días",
            imageUrl: "/images/coaching.jpg"
        },
        {
            title: "Reparación de Muebles",
            description: "Servicios de restauración y diseño de mobiliario.",
            createdAt: "Hace 5 días",
            imageUrl: "/images/reparacion-muebles.jpg"
        },
        {
            title: "Animación 3D",
            description: "Creación de animaciones y modelos 3D personalizados.",
            createdAt: "Hace 1 semana",
            imageUrl: "/images/animacion-3d.jpg"
        },
        {
            title: "Planificación de Viajes",
            description: "Organización de itinerarios y reservas.",
            createdAt: "Hace 3 días",
            imageUrl: "/images/planificacion-viajes.jpg"
        }
    ];

    return (
        <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 mt-8 pb-10 mx-10">
                {staticGigs.map((gig, index) => (
                    <StaticGigCard
                        key={index}
                        title={gig.title}
                        description={gig.description}
                        createdAt={gig.createdAt}
                        imageUrl={gig.imageUrl} // Pasar la URL de la imagen
                    />
                ))}
            </div>
            <GigList query={searchParams} />
        </div>
    );
};

export default Dashboard;