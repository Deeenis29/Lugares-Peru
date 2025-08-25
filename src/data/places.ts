import { Place } from '@/types/place';

export const places: Place[] = [
  {
    id: '1',
    name: {
      es: 'Machu Picchu',
      en: 'Machu Picchu'
    },
    description: {
      es: 'Machu Picchu es una antigua ciudadela inca situada en los Andes peruanos, a 2,430 metros sobre el nivel del mar. Construida en el siglo XV y abandonada durante la conquista española, esta maravilla arquitectónica permaneció oculta hasta su redescubrimiento en 1911. Considerada una de las Nuevas Siete Maravillas del Mundo, Machu Picchu representa la perfecta armonía entre la arquitectura humana y la naturaleza circundante.',
      en: 'Machu Picchu is an ancient Inca citadel located in the Peruvian Andes at 2,430 meters above sea level. Built in the 15th century and abandoned during the Spanish conquest, this architectural wonder remained hidden until its rediscovery in 1911. Recognized as one of the New Seven Wonders of the World, it represents the perfect harmony between human architecture and surrounding nature.'
    },
    shortDescription: {
      es: 'Ciudadela inca del siglo XV, una de las Nuevas Siete Maravillas del Mundo.',
      en: '15th-century Inca citadel, one of the New Seven Wonders of the World.'
    },
    region: 'cusco',
    category: 'arqueologico',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/c/ca/Machu_Picchu%2C_Peru_%282018%29.jpg',
    images: [
      'https://cuscoperu.b-cdn.net/wp-content/uploads/2023/09/Mirador-de-machu-Picchu-vista-panoramica.webp',
      'https://caminoincamachupicchu.org/cmingutd/wp-content/uploads/2021/06/machu-picchu-llama.jpg',
      'https://www.peruforless.com/_next/image?url=https%3A%2F%2Fwww.peruforless.com%2Fimages%2Fmachu-picchu-ruins.jpg&w=3840&q=75',
      'https://andinoperu.b-cdn.net/wp-content/uploads/2024/03/razones-para-visitar-machu-picchu.webp'
    ],
    location: {
      lat: -13.1631,
      lng: -72.5450,
      address: {
        es: 'Aguas Calientes, Cusco, Perú',
        en: 'Hot Waters, Cusco, Peru'
      }
    },
    highlights: {
      es: [
        'Patrimonio de la Humanidad UNESCO',
        'Nueva Maravilla del Mundo',
        'Arquitectura inca perfectamente conservada',
        'Vistas espectaculares de los Andes'
      ],
      en: [
        'UNESCO World Heritage Site',
        'New Wonder of the World',
        'Perfectly preserved Inca architecture',
        'Spectacular views of the Andes'
      ]
    },
    bestTimeToVisit: {
      es: 'Mayo a Septiembre (temporada seca)',
      en: 'May to September (dry season)'
    },
    difficulty: {
      es: ['Facil', 'Moderado', 'Difícil'],
      en: ['Easy', 'Moderade', 'Hard'],
    },
    duration: {
      es: '1-2 días',
      en: '1-2 days'
    },
    price: {
      min: 150,
      max: 800,
      currency: 'USD'
    }
  },
  {
    id: '2',
    name: {
      es: 'Líneas de Nazca',
      en: 'Nazca Lines'
    },
    description: {
      es: 'Las Líneas de Nazca son antiguos geoglifos ubicados en el desierto de Nazca, en el sur del Perú. Estas misteriosas líneas y figuras fueron creadas por la cultura Nazca entre los años 500 a.C. y 500 d.C. Las figuras incluyen animales, plantas y formas geométricas que solo pueden ser apreciadas completamente desde el aire, lo que ha generado numerosas teorías sobre su propósito y método de construcción.',
      en: 'The Nazca Lines are ancient geoglyphs located in the Nazca Desert in southern Peru. These mysterious lines and figures were created by the Nazca culture between 500 BC and 500 AD. The figures include animals, plants, and geometric shapes that can only be fully appreciated from the air, generating numerous theories about their purpose and construction method.'
    },
    shortDescription: {
      es: 'Misteriosos geoglifos precolombinos visibles desde el aire.',
      en: 'Mysterious pre-Columbian geoglyphs visible from the air.'
    },
    region: 'ica',
    category: 'arqueologico',
    imageUrl: 'https://t3.ftcdn.net/jpg/04/53/93/68/360_F_453936876_drvJw37greccONxwLTIvdRlpyHuXQ7s3.jpg',
    images: [
      'https://www.condorxtreme.com/wp-content/uploads/2023/08/optimized_LINEAS_DE_NASCA_6.jpg',
      'https://ichef.bbci.co.uk/ace/ws/640/cpsprodpb/131B7/production/_109736287_p11_bhumanoid_processed.jpg.webp',
      'https://img.travesiasdigital.com/cdn-cgi/image/quality=90,format=auto,onerror=redirect/2019/12/lineas-de-nazca-y-la-carretera-panamericana_fd84c82b-e1575396350200.jpg'
    ],
    location: {
      lat: -14.7390,
      lng: -75.1300,
      address: {
        es: 'Nazca, Ica, Perú',
        en: 'Nazca, Ica, Peru'
      }
    },
    highlights: {
      es: [
        'Patrimonio de la Humanidad UNESCO',
        'Geoglifos de más de 1500 años',
        'Figuras de animales y plantas',
        'Misterio arqueológico sin resolver'
      ],
      en: [
        'UNESCO World Heritage Site',
        'Geoglyphs over 1500 years old',
        'Animal and plant figures',
        'Unsolved archaeological mystery'
      ]
    },
    bestTimeToVisit: {
      es: 'Todo el año (clima desértico)',
      en: 'Year-round (desert climate)'
    },
    difficulty: {
      es: ['Fácil'],
      en: ['Easy']
    },
    duration: {
      es: '1 día',
      en: '1 day'
    },
    price: {
      min: 80,
      max: 200,
      currency: 'USD'
    }
  },
  {
    id: '3',
    name: {
      es: 'Cordillera Huayhuash',
      en: 'Huayhuash Mountain Range'
    },
    description: {
      es: 'La Cordillera Huayhuash es una cadena montañosa ubicada en los Andes centrales del Perú. Conocida por sus impresionantes picos nevados, lagos turquesa y paisajes alpinos, es considerada una de las rutas de trekking más espectaculares del mundo. El circuito completo toma entre 8 a 12 días y ofrece vistas incomparables de montañas que superan los 6,000 metros de altura.',
      en: 'The Huayhuash Mountain Range is a mountain chain located in the central Andes of Peru. Known for its impressive snow-capped peaks, turquoise lakes, and alpine landscapes, it is considered one of the most spectacular trekking routes in the world. The complete circuit takes 8 to 12 days and offers incomparable views of mountains exceeding 6,000 meters in height.'
    },
    shortDescription: {
      es: 'Espectacular cordillera andina ideal para trekking de alta montaña.',
      en: 'Spectacular Andean mountain range ideal for high-altitude trekking.'
    },
    region: 'ancash',
    category: 'natural',
    imageUrl: 'https://huaraztreks.com/wp-content/uploads/2016/05/peru-huayhuash-trek.jpg',
    images: [
      'https://www.peruvianandes.com/wp-content/uploads/2017/06/Cordillera-huayhuash-trek.jpg',
      'https://www.huarazadventures.com/images/trekking-cordillera-huayhuash1.jpg',
      'https://www.huayhuash.com/images/going_down_cutatambo.jpg',
      'https://huaraztreks.com/wp-content/uploads/2016/05/peru-huayhuash-trek.jpg',
      'https://mochileaperu.com/wp-content/uploads/2019/07/5741176684_f1a31b432f_b.jpg'
    ],
    location: {
      lat: -10.2500,
      lng: -76.9000,
      address: {
        es: 'Huayhuash, Ancash, Perú',
        en: 'Huayhuash, Ancash, Peru'
      }
    },
    highlights: {
      es: [
        'Picos nevados sobre 6,000 metros',
        'Lagos turquesa de origen glaciar',
        'Una de las mejores rutas de trekking del mundo',
        'Fauna andina única'
      ],
      en: [
        'Snow-capped peaks over 6,000 meters',
        'Turquoise glacial lakes',
        'One of the world\'s best trekking routes',
        'Unique Andean wildlife'
      ]
    },
    bestTimeToVisit: {
      es: 'Mayo a Septiembre (temporada seca)',
      en: 'May to September (dry season)'
    },
    difficulty: {
      es: ['Difícil'],
      en: ['Hard']
    },
    duration: {
      es: '8-12 días',
      en: '8-12 days'
    },
    price: {
      min: 400,
      max: 1200,
      currency: 'USD'
    }
  }
];

export const getPlaceById = (id: string): Place | undefined => {
  return places.find(place => place.id === id);
};

export const getPlacesByRegion = (region: string): Place[] => {
  return places.filter(place => place.region === region);
};

export const getPlacesByCategory = (category: string): Place[] => {
  return places.filter(place => place.category === category);
};

export const searchPlaces = (query: string, lang: 'es' | 'en' = 'es'): Place[] => {
  const lowercaseQuery = query.toLowerCase();
  return places.filter(place =>
    place.name[lang].toLowerCase().includes(lowercaseQuery) ||
    place.description[lang].toLowerCase().includes(lowercaseQuery) ||
    place.region.toLowerCase().includes(lowercaseQuery)
  );
};