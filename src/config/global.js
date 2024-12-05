export default {
  global: {
    componenteFormativo: 'Fundamentos del turismo y gestión del patrimonio',
    descripcionCurso:
      'Este componente formativo explora los fundamentos del turismo y la gestión del patrimonio, abarcando el turismo, la geografía turística y el patrimonio cultural y natural. Se enfoca en el análisis de destinos, atractivos, tipologías de turistas, y tendencias de consumo, brindando herramientas para la adecuada valoración y gestión del territorio turístico.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Turismo',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Tipología de turismo',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Atractivos',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Recursos',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Destinos',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo: 'Sistema turístico',
            hash: 't_1_5',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Geografía turística',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Ruta',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Inventario',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Geografía general',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Espacios geográficos turísticos',
            hash: 't_2_4',
          },
          {
            numero: '2.5',
            titulo: 'Georreferencia',
            hash: 't_2_5',
          },
          {
            numero: '2.6',
            titulo: 'Cartografía',
            hash: 't_2_6',
          },
          {
            numero: '2.7',
            titulo: 'Metodología de inventario',
            hash: 't_2_7',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Patrimonio',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Bienes culturales',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Bienes naturales',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Identidad cultural',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Tipología de turistas',
            hash: 't_3_4',
          },
          {
            numero: '3.5',
            titulo: 'Tendencias de consumo del turista',
            hash: 't_3_5',
          },
          {
            numero: '3.6',
            titulo: 'Oferta turística del territorio',
            hash: 't_3_6',
          },
          {
            numero: '3.7',
            titulo: 'Valoración del territorio',
            hash: 't_3_7',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/CF_01_122154_DU.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/Material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: '1.4 Destinos',
      referencia:
        'Ecosistema de Recursos Educativos SENA. (2022). Caracterización del destino [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=Izujyb3NjdE',
    },
    {
      tema: '2. Geografía turística',
      referencia:
        'Ecosistema de Recursos Educativos SENA. (2022). Geografia turística [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=aQokH-6FxOU',
    },
  ],
  glosario: [
    {
      termino: 'Atractivos turísticos',
      significado:
        'elementos, naturales o culturales, que motivan el desplazamiento de turistas a un destino específico.',
    },
    {
      termino: 'Bienes culturales',
      significado:
        'conjunto de elementos tangibles e intangibles que representan la herencia cultural de una sociedad, como monumentos, tradiciones y festividades.',
    },
    {
      termino: 'Bienes naturales',
      significado:
        'recursos del entorno natural, como montañas, ríos y parques, que son valorados por su belleza y su capacidad para atraer turistas.',
    },
    {
      termino: 'Cartografía',
      significado:
        'ciencia y técnica de elaborar mapas geográficos, esenciales para la planificación y el estudio de destinos turísticos.',
    },
    {
      termino: 'Destino turístico',
      significado:
        'lugar geográfico que los turistas eligen para visitar, que ofrece atractivos, servicios e infraestructuras específicas.',
    },
    {
      termino: 'Geografía turística',
      significado:
        'estudio de los espacios geográficos utilizados para el turismo y la relación entre los turistas y el entorno.',
    },
    {
      termino: 'Inventario turístico',
      significado:
        'registro detallado de los recursos y atractivos disponibles en un destino, con el fin de planificar y gestionar su desarrollo.',
    },
    {
      termino: 'Patrimonio',
      significado:
        'conjunto de bienes, tanto naturales como culturales, que son heredados y preservados por una sociedad para las generaciones futuras.',
    },
    {
      termino: 'Sistema turístico',
      significado:
        'conjunto de elementos interrelacionados que incluyen turistas, empresas, destinos y gobiernos, que interactúan para formar la actividad turística.',
    },
    {
      termino: 'Tipología de turismo',
      significado:
        'clasificación de las diferentes formas de turismo según la motivación del viajero o el tipo de actividad realizada, como turismo cultural, de aventura o de salud.',
    },
  ],
  referencias: [
    {
      referencia:
        'Bhatia, A. (2005). Gestión internacional del turismo. Editorial Síntesis.',
      link: '',
    },
    {
      referencia:
        'Cooper, C., Fletcher, J., Gilbert, D., & Wanhill, S. (2008). Turismo: principios y práctica. Pearson Educación.',
      link: '',
    },
    {
      referencia:
        'Jafari, J. (1987). Tourism models: The sociocultural aspect. Annals of Tourism Research, 14(1), 67-79.',
      link: '',
    },
    {
      referencia:
        'Jafari, J. (1996). La sociología del turismo. En R. J. H. McIntosh (Ed.), Investigaciones en turismo (pp. 45-60). Universidad de Granada.',
      link: '',
    },
    {
      referencia:
        'Mathieson, A., & Wall, G. (1982). Turismo: impactos económicos, físicos y sociales. Ediciones Paraninfo.',
      link: '',
    },
    {
      referencia:
        'Organización Mundial del Turismo. (2020). Informe global sobre COVID-19 y turismo. OMT.',
      link: '',
    },
    {
      referencia: 'Page, S. J. (2014). Gestión del turismo. Pearson Educación.',
      link: '',
    },
    {
      referencia:
        'Smith, M. (2010). Cuestiones en estudios de turismo cultural. Ediciones del Serbal.',
      link: '',
    },
    {
      referencia:
        'Urry, J. (1990). La mirada del turista: ocio y viajes en las sociedades contemporáneas. Ediciones Akal.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Liliana Victoria Morales Gualdrón',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Dora Inés Sánchez Escobar',
          cargo: 'Experta temática',
          centro: 'Centro Comercio y Servicios - Regional Risaralda',
        },
        {
          nombre: 'Viviana Esperanza Herrera Quiñonez',
          cargo: 'Evaluadora instruccional ',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Oscar Ivan Uribe Ortiz',
          cargo: 'Diseñador web',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Jose Yobani Penagos Mora',
          cargo: 'Diseñador web',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Sebastian Trujillo Afanador',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Diego Fernando Velasco Güiza',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Gilberto Junior Rodríguez Rodríguez',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Ernesto Navarro Jaimes',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Norma Constanza Morales Cruz',
          cargo: 'Evaluadora de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Jorge Eduardo Rueda Peña',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Jorge Bustos Gómez',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Javier Mauricio Oviedo ',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
