export type IconKey = "chair" | "table" | "sofa" | "shelf" | "lamp" | "module";

export type Product = {
  slug: string;
  name: string;
  category: string;
  icon: IconKey;
  priceFrom: number;
  shortDescription: string;
  description: string;
  materials: string[];
  finishes: string[];
  defaultDimensions: { width: number; depth: number; height: number };
  leadTimeWeeks: [number, number];
};

export const products: Product[] = [
  {
    slug: "silla-plano",
    name: "Silla Plano",
    category: "Sillas",
    icon: "chair",
    priceFrom: 185000,
    shortDescription: "Estructura de líneas rectas, asiento en listones.",
    description:
      "La Plano nace de un ejercicio de reducción: una silla resuelta con la menor cantidad de líneas posible. La estructura queda a la vista, como un plano estructural sin revestir, y el respaldo de listones se ajusta en inclinación al pedirla.",
    materials: ["Madera de roble maciza", "Madera de guatambú", "Caño de acero pintado"],
    finishes: ["Natural", "Negro mate", "Nogal"],
    defaultDimensions: { width: 46, depth: 52, height: 82 },
    leadTimeWeeks: [4, 6],
  },
  {
    slug: "mesa-traza",
    name: "Mesa Traza",
    category: "Mesas",
    icon: "table",
    priceFrom: 420000,
    shortDescription: "Mesa modular, tapa desmontable, patas en A.",
    description:
      "Pensada como un módulo más del living: la Traza tiene tapa desmontable y patas en A que permiten sumar o quitar extensiones según el espacio. Cada unidad se traza a medida del ambiente antes de fabricarse.",
    materials: ["Fenólico enchapado en roble", "Caño estructural", "Acero inoxidable"],
    finishes: ["Roble claro", "Roble oscuro", "Grafito"],
    defaultDimensions: { width: 160, depth: 90, height: 74 },
    leadTimeWeeks: [5, 8],
  },
  {
    slug: "sofa-bloque",
    name: "Sofá Bloque",
    category: "Living",
    icon: "sofa",
    priceFrom: 780000,
    shortDescription: "Módulos independientes que se combinan entre sí.",
    description:
      "El Bloque se piensa por unidades: cada módulo funciona solo o combinado con otros para armar rincones, chaise longues o sofás corridos. La tapicería se elige por módulo, así que también podés jugar con el color por bloque.",
    materials: ["Espuma de alta densidad", "Estructura de pino", "Tapicería a elección"],
    finishes: ["Lino crudo", "Pana azul nolo", "Pana grafito"],
    defaultDimensions: { width: 90, depth: 90, height: 68 },
    leadTimeWeeks: [6, 10],
  },
  {
    slug: "estante-nivel",
    name: "Estante Nivel",
    category: "Estanterías",
    icon: "shelf",
    priceFrom: 260000,
    shortDescription: "Sistema modular apilable, sin herrajes visibles.",
    description:
      "Un sistema de estantería pensado como una grilla: los módulos se apilan y combinan en vertical u horizontal, con uniones ocultas para mantener la lectura limpia de líneas. Crece con el espacio, no al revés.",
    materials: ["MDF enchapado", "Perfil de acero oculto"],
    finishes: ["Blanco", "Azul nolo", "Roble"],
    defaultDimensions: { width: 80, depth: 32, height: 180 },
    leadTimeWeeks: [4, 7],
  },
  {
    slug: "lampara-eje",
    name: "Lámpara Eje",
    category: "Iluminación",
    icon: "lamp",
    priceFrom: 95000,
    shortDescription: "Pie torneado, difusor cilíndrico regulable en altura.",
    description:
      "La Eje reduce la lámpara de pie a su gesto más simple: una línea vertical con un punto de luz que se desliza en altura. El difusor gira 360° para dirigir la luz sin mover la base.",
    materials: ["Madera torneada", "Caño de acero", "Difusor de lino"],
    finishes: ["Natural", "Negro"],
    defaultDimensions: { width: 30, depth: 30, height: 150 },
    leadTimeWeeks: [3, 5],
  },
  {
    slug: "silla-corte",
    name: "Silla Corte",
    category: "Sillas",
    icon: "chair",
    priceFrom: 165000,
    shortDescription: "Volumen macizo, apta interior y exterior.",
    description:
      "La Corte trabaja con planos macizos en vez de listones: parece tallada de un solo bloque. Su perfil compacto la hace apta tanto para living como para espacios exteriores cubiertos.",
    materials: ["Madera maciza de pino tratado", "Terminación exterior"],
    finishes: ["Natural", "Gris piedra"],
    defaultDimensions: { width: 44, depth: 50, height: 78 },
    leadTimeWeeks: [3, 5],
  },
];

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}

export function formatPrice(value: number) {
  return new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
    maximumFractionDigits: 0,
  }).format(value);
}
