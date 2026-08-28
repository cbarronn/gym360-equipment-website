// ============================================================
// GYM 360 EQUIPMENT — Constantes del sitio
// ============================================================

export const SITE_CONFIG = {
  name: "GYM 360 Equipment",
  tagline: "Equipamos tu visión. Potenciamos tu gimnasio.",
  description:
    "Comercializamos equipos de fuerza, cardio y entrenamiento funcional de diferentes marcas internacionales. Te acompañamos desde la selección y distribución hasta la instalación, mantenimiento y suministro de refacciones.",
  phone: "+52 (55) 0000-0000", // Configurable
  whatsapp: "5200000000000", // Configurable — número sin espacios ni símbolos
  whatsappDisplay: "+52 (55) 0000-0000",
  email: "contacto@gym360equipment.com.mx", // Configurable
  city: "Ciudad de México",
  coverage: "Cobertura nacional en toda la República Mexicana",
  hours: "Lunes a Viernes 9:00 – 18:00 hrs",
  social: {
    facebook: "https://facebook.com/gym360equipment",
    instagram: "https://instagram.com/gym360equipment",
    youtube: "https://youtube.com/@gym360equipment",
    linkedin: "https://linkedin.com/company/gym360equipment",
  },
};

export const NAV_LINKS = [
  { label: "Inicio", href: "#inicio" },
  { label: "Equipos", href: "#equipos" },
  { label: "Servicios", href: "#servicios" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Contacto", href: "#contacto" },
];

export const CATEGORIES = [
  {
    id: "caminadoras",
    name: "Caminadoras",
    description: "Equipos de cardio profesionales para uso comercial e intensivo.",
    image: "/images/treadmill.jpg",
    icon: "⚡",
  },
  {
    id: "elipticas",
    name: "Elípticas",
    description: "Movimiento natural de bajo impacto, ideal para todo tipo de usuario.",
    image: "/images/elliptical.jpg",
    icon: "🔄",
  },
  {
    id: "bicicletas",
    name: "Bicicletas",
    description: "Bicicletas estáticas y de spinning para entrenamiento cardiovascular.",
    image: "/images/bike.jpg",
    icon: "🚴",
  },
  {
    id: "fuerza",
    name: "Equipos de Fuerza",
    description: "Máquinas de peso selectivo y poleas para entrenamiento muscular.",
    image: "/images/strength.jpg",
    icon: "💪",
  },
  {
    id: "peso-libre",
    name: "Peso Libre",
    description: "Mancuernas, barras, discos y soportes para entrenamiento libre.",
    image: "/images/freeweights.jpg",
    icon: "🏋️",
  },
  {
    id: "funcional",
    name: "Entrenamiento Funcional",
    description: "Racks de crossfit, TRX, kettlebells y equipos de movimiento funcional.",
    image: "/images/gym-commercial.jpg",
    icon: "🎯",
  },
  {
    id: "bancos-racks",
    name: "Bancos y Racks",
    description: "Bancos de pesas, jaulas de potencia y soportes para barra.",
    image: "/images/gym-boutique.jpg",
    icon: "🔩",
  },
  {
    id: "multifuncional",
    name: "Equipos Multifuncionales",
    description: "Estaciones de ejercicio todo en uno para maximizar el espacio.",
    image: "/images/strength.jpg",
    icon: "🏗️",
  },
  {
    id: "escaladoras",
    name: "Escaladoras",
    description: "Steppers y escaladoras de alta intensidad para cardio avanzado.",
    image: "/images/elliptical.jpg",
    icon: "⬆️",
  },
  {
    id: "accesorios",
    name: "Accesorios",
    description: "Cuerdas, bandas, pesas rusas, rodillos y consumibles fitness.",
    image: "/images/freeweights.jpg",
    icon: "🎒",
  },
  {
    id: "pisos",
    name: "Pisos Deportivos",
    description: "Losetas de hule, pisos de vinilo y superficies especializadas.",
    image: "/images/gym-commercial.jpg",
    icon: "🟫",
  },
  {
    id: "home-gym",
    name: "Home Gym",
    description: "Equipamiento compacto y de alto rendimiento para tu espacio en casa.",
    image: "/images/gym-home.jpg",
    icon: "🏠",
  },
];

export const SERVICES = [
  {
    id: "venta",
    title: "Venta de Equipo",
    description:
      "Comercializamos equipos nuevos, seminuevos y reacondicionados de diferentes marcas y modelos para todo tipo de proyecto.",
    icon: "ShoppingCart",
    color: "accent",
  },
  {
    id: "importacion",
    title: "Importación",
    description:
      "Localizamos y gestionamos equipos provenientes de Estados Unidos, China y otros mercados internacionales.",
    icon: "Globe",
    color: "blue",
  },
  {
    id: "instalacion",
    title: "Instalación Profesional",
    description:
      "Realizamos armado, instalación, nivelación, configuración y pruebas de funcionamiento con reporte de entrega.",
    icon: "Wrench",
    color: "orange",
  },
  {
    id: "mantenimiento",
    title: "Mantenimiento",
    description:
      "Ofrecemos mantenimiento preventivo y correctivo para prolongar la vida útil de tus equipos y evitar fallas.",
    icon: "Settings",
    color: "purple",
  },
  {
    id: "refacciones",
    title: "Refacciones",
    description:
      "Apoyamos en la localización y suministro de piezas, bandas, motores, consolas y refacciones para diferentes marcas.",
    icon: "Cog",
    color: "red",
  },
  {
    id: "compra-usado",
    title: "Compra de Equipo Usado",
    description:
      "Evaluamos equipos que gimnasios, hoteles o particulares desean vender o renovar. Sujeto a evaluación técnica.",
    icon: "RefreshCcw",
    color: "green",
  },
];

export const PROJECT_TYPES = [
  {
    id: "comercial",
    name: "Gimnasios Comerciales",
    description: "Equipamiento completo para gimnasios de alta afluencia.",
    image: "/images/gym-commercial.jpg",
  },
  {
    id: "hotel",
    name: "Hoteles y Resorts",
    description: "Soluciones elegantes para el área fitness de tu hotel.",
    image: "/images/gym-hotel.jpg",
  },
  {
    id: "residencial",
    name: "Condominios y Fraccionamientos",
    description: "Equipamiento para áreas comunes residenciales.",
    image: "/images/gym-boutique.jpg",
  },
  {
    id: "corporativo",
    name: "Gimnasios Corporativos",
    description: "Bienestar para los colaboradores de tu empresa.",
    image: "/images/gym-commercial.jpg",
  },
  {
    id: "boutique",
    name: "Estudios Boutique",
    description: "Espacios íntimos de alto nivel con equipo especializado.",
    image: "/images/gym-boutique.jpg",
  },
  {
    id: "educativo",
    name: "Escuelas y Universidades",
    description: "Equipos durables para instalaciones educativas.",
    image: "/images/gym-commercial.jpg",
  },
  {
    id: "deportivo",
    name: "Centros Deportivos",
    description: "Equipamiento para clubs, asociaciones y centros municipales.",
    image: "/images/gym-hotel.jpg",
  },
  {
    id: "home",
    name: "Home Gym",
    description: "Tu gimnasio ideal en casa, diseñado a tu medida.",
    image: "/images/gym-home.jpg",
  },
];

export const PROCESS_STEPS = [
  {
    step: 1,
    title: "Conocemos tu proyecto",
    description:
      "Te escuchamos para entender tus objetivos, espacio disponible y presupuesto.",
    icon: "MessageCircle",
  },
  {
    step: 2,
    title: "Identificamos tus necesidades",
    description:
      "Analizamos el tipo de usuario, uso del espacio y requerimientos técnicos.",
    icon: "Search",
  },
  {
    step: 3,
    title: "Seleccionamos los equipos",
    description:
      "Proponemos opciones de equipos que se adapten a tu proyecto y presupuesto.",
    icon: "ListChecks",
  },
  {
    step: 4,
    title: "Elaboramos una propuesta",
    description:
      "Te entregamos una cotización detallada con todas las opciones disponibles.",
    icon: "FileText",
  },
  {
    step: 5,
    title: "Coordinamos entrega e instalación",
    description:
      "Gestionamos la logística, entrega y montaje profesional de todos los equipos.",
    icon: "Truck",
  },
  {
    step: 6,
    title: "Brindamos soporte continuo",
    description:
      "Te acompañamos con mantenimiento preventivo, correctivo y suministro de refacciones.",
    icon: "HeartHandshake",
  },
];

export const ADVANTAGES = [
  { icon: "Package", title: "Variedad de marcas y modelos", description: "Acceso a un amplio catálogo de equipos de diferentes orígenes y especificaciones." },
  { icon: "Star", title: "Equipos nuevos y seminuevos", description: "Opciones para todos los presupuestos, con garantía de calidad en cada equipo." },
  { icon: "Globe2", title: "Proveedores internacionales", description: "Acceso a equipos de EE.UU., China y otros mercados internacionales." },
  { icon: "UserCheck", title: "Atención personalizada", description: "Un asesor dedicado te guía en cada etapa de tu proyecto." },
  { icon: "Wrench", title: "Instalación profesional", description: "Técnicos certificados realizan el armado, nivelación y puesta en marcha." },
  { icon: "Shield", title: "Servicio de mantenimiento", description: "Planes preventivos y correctivos para mantener tus equipos en óptimas condiciones." },
  { icon: "Cog", title: "Venta de refacciones", description: "Suministramos piezas y consumibles para diferentes marcas y modelos." },
  { icon: "MapPin", title: "Cobertura en México", description: "Atendemos proyectos en toda la República Mexicana con logística coordinada." },
  { icon: "Layers", title: "Proyectos integrales", description: "Del diseño del espacio a la puesta en marcha: un solo proveedor para todo." },
  { icon: "Clock", title: "Soporte post-venta", description: "Seguimiento continuo para asegurar la satisfacción y durabilidad de tu inversión." },
];

export const GALLERY_IMAGES = [
  { src: "/images/hero-gym.jpg", alt: "Gimnasio comercial premium con cardio y fuerza", category: "Instalaciones" },
  { src: "/images/gym-commercial.jpg", alt: "Área de cardio y entrenamiento funcional", category: "Proyectos" },
  { src: "/images/gym-hotel.jpg", alt: "Fitness center de hotel de lujo", category: "Hoteles" },
  { src: "/images/gym-home.jpg", alt: "Home gym de alta gama", category: "Home Gym" },
  { src: "/images/gym-boutique.jpg", alt: "Estudio boutique especializado", category: "Boutique" },
  { src: "/images/installation.jpg", alt: "Instalación profesional de equipos", category: "Servicios" },
  { src: "/images/treadmill.jpg", alt: "Caminadora profesional comercial", category: "Equipos" },
  { src: "/images/strength.jpg", alt: "Máquinas de fuerza y poleas", category: "Equipos" },
  { src: "/images/freeweights.jpg", alt: "Zona de peso libre con mancuernas", category: "Equipos" },
];

export const CONTACT_REASONS = [
  "Equipamiento de gimnasio nuevo",
  "Ampliación o renovación de gimnasio",
  "Compra de equipo individual",
  "Equipo seminuevo o reacondicionado",
  "Importación de equipos",
  "Servicio de instalación",
  "Mantenimiento preventivo",
  "Mantenimiento correctivo",
  "Refacciones o piezas",
  "Compra de equipo usado",
  "Asesoría de proyecto",
  "Otro",
];

export const EQUIPMENT_INTEREST = [
  "Caminadoras",
  "Elípticas",
  "Bicicletas estáticas",
  "Bicicletas de spinning",
  "Escaladoras",
  "Equipos de fuerza",
  "Mancuernas y peso libre",
  "Bancos y racks",
  "Equipos multifuncionales",
  "Entrenamiento funcional",
  "Pisos deportivos",
  "Accesorios y consumibles",
  "Equipo para home gym",
  "Otro / No especificado",
];
