export default {
  global: {
    componenteFormativo: 'Contenido digital',
    descripcionCurso:
      'Los fundamentos del diseño gráfico y digital, del lenguaje audiovisual, las tipologías multimedia, la estrategia digital, entre otros, son elementos fundamentales para la comunicación visual de las ideas en entornos digitales. Más allá de un producto final, lo importante es entender el proceso de creación y los detalles que conforman cada composición, los cuales pueden aplicarse a casi cualquier tipo de proyecto.',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
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
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Diseño',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Diseño gráfico',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Diseño digital',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Lenguaje audiovisual',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Guion audiovisual',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Storyboard o guion gráfico',
            hash: 't_3_1',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Dirección de arte',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Estrategia digital',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '5.1',
            titulo: 'Marketing digital',
            hash: 't_5_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.2',
            titulo: 'Plan de medios digitales',
            hash: 't_5_2',
          },
        ],
      },
    ],
    subMenu: [
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
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Alcántara Pilar, J. y Barrio-García, S. (2016). El papel moderador del diseño web y la cultura del país en la respuesta del consumidor online: una aplicación a los destinos turísticos. European Research on Management and Business Economics, 22(2), 78-87.',
      link: '',
    },
    {
      referencia: 'Ambrose - Harris (2007). Fundamentos de la tipografía.',
      link: '',
    },
    {
      referencia:
        'Arrieta León, Ana María (2013). Principios de la composición.',
      link: '',
    },
    {
      referencia:
        'Barba Soler, J.P. Diseño y Desarrollo Web. Análisis de Casos.',
      link: '',
    },
    {
      referencia:
        'Bigné, E., Ruiz, C. y Andreu, L. (2004) Conceptualización del comportamiento del consumidor en los entornos virtuales: un análisis cualitativo. Estudios sobre Consumo, (70), 9-20.',
      link: '',
    },
    {
      referencia:
        'Bustos Rojo, Gabriela (2012) Teorías del diseño gráfico. Red Tercer Milenio.',
      link: '',
    },
    {
      referencia:
        'Eisenstein, Sergei (1999). La Forma del cine. México. Siglo XXI.',
      link: '',
    },
    {
      referencia:
        'Moreno Villa, M. (2003) Filosofía vol. II Antropología, Psicología y Sociología. MAD.',
      link: '',
    },
    {
      referencia:
        'Nielsen, J. (2003) Usability 101: Introduction to usability. Nielsen Norman Group. ',
      link: '',
    },
    {
      referencia:
        'Pereiro, G. (2007) La evolución es creatividad: el pensamiento circular. Kier. ',
      link: '',
    },
    {
      referencia:
        'Shackell, B. (2009) Usability – context, framework, design and evaluation. Interacting with Computers, 21(5-6), 339-346. ',
      link: '',
    },
    {
      referencia:
        'Valero Muñoz, A. (2012) Principios de color y holopintura. Editorial Club Universitario.',
      link: '',
    },
    {
      referencia:
        'Wong, W. (1991) Fundamentos del diseño bi- y tri-dimensional. Editorial Gustavo Gili. ',
      link: '',
    },
  ],
  glosario: [
    {
      termino: 'Asimetría',
      significado:
        'cuando el equilibrio se consigue variando los elementos y ajustando las diversas fuerzas presentes en la composición visual.',
    },
    {
      termino: 'Boceto',
      significado:
        'se refiere a bosquejo o esquema que se realiza en un soporte análogo antes de concretar la producción de algo.',
    },
    {
      termino: 'Composición',
      significado:
        'consiste en disponer los distintos elementos gráficos dentro de un espacio visual, de tal manera que transmitan de forma objetiva un mensaje a los receptores de este.',
    },
    {
      termino: 'Diseño',
      significado:
        'es una manera de organizar las ideas para plasmarlas en una comunicación de tipo visual.',
    },
    {
      termino: 'Encuadre',
      significado:
        'el objetivo capta aquel espacio de la realidad que se quiere tomar y que posteriormente se proyectará.',
    },
    {
      termino: 'Equilibrio',
      significado:
        'cuando al dividir una composición en dos partes iguales no existen las mismas dimensiones en tamaño, color y peso, pero existe un equilibrio entre los elementos. (Interiores cromo, 2018).',
    },
    {
      termino: 'Guion literario',
      significado:
        'narración argumental del filme que contiene los personajes, los decorados, la ambientación, el vestuario, así como los diálogos y el "off".',
    },
    {
      termino: 'Guion técnico',
      significado:
        'especifica lo que se ha de ver y se ha de escuchar durante la proyección del filme y en el mismo orden en que aparecerá en la pantalla.',
    },
    {
      termino: 'Jerarquía',
      significado:
        'la jerarquía es el valor y peso visual que se le da a un elemento en un diseño. No necesariamente es lo que se observa primero, pero sí la importancia que se le da. Se jerarquizan los elementos con base en varios valores, peso, color y disposición en el formato.',
    },
    {
      termino: 'Simetría',
      significado:
        'es la disposición espacial regular y equilibrada de los elementos que forman la composición gráfica. Entrega a los diseñadores gráficos una serie de procedimientos para proyectar controladamente.',
    },
    {
      termino: 'Tipografía, fuente o estilo de letra',
      significado: 'también llamadas tipos o fuentes tipográficas.',
    },
    {
      termino: 'Vectores',
      significado:
        'tipo de gráfico también llamado de objetos, en los que las formas se representan como series de líneas y curvas con atributos asignados de relleno y contorno.',
    },
    {
      termino: 'World Wide Web',
      termHTML: '<i>World Wide Web</i>',
      significado:
        'se conoce a esta red como <i>Internet</i>. Es un sistema informático donde millones de ordenadores que están unidos pudiéndose buscar información, mandar mensajes, entre muchas otras cosas.',
    },
  ],
  complementario: [
    {
      texto:
        'Llasera, Jaime P. (2021) La proporción áurea: Qué es y cómo se aplica en diseño gráfico. Imborrable. https://imborrable.com/blog/proporcion-aurea/',
      tipo: 'Página web',
      link: 'https://imborrable.com/blog/proporcion-aurea/',
    },
    {
      texto:
        'UCA (s.f.). Tema 3: la luz y el color. https://ocw.uca.es/pluginfile.php/225/mod_resource/content/1/Tema_3._La_Luz_y_el_Color.pdf',
      tipo: 'Artículo',
      link:
        'https://ocw.uca.es/pluginfile.php/225/mod_resource/content/1/Tema_3._La_Luz_y_el_Color.pdf',
    },
    {
      texto:
        'CCF Global. (s.f.). Teoría del color. https://edu.gcfglobal.org/es/conceptos-basicos-de-diseno-grafico/teoria-del-color/1/',
      tipo: 'Página web',
      link:
        'https://edu.gcfglobal.org/es/conceptos-basicos-de-diseno-grafico/teoria-del-color/1/',
    },
    {
      texto: 'MDN Web Docs',
      tipo: 'Página web',
      link:
        'https://developer.mozilla.org/es/docs/Learn/CSS/Styling_text/Web_fonts',
    },
    {
      texto:
        'Nielsen Norman Group. (2012). Usability. Nngorup. https://www.nngroup.com/articles/usability-101-introduction-to-usability/',
      tipo: 'Libro digital',
      link:
        'https://www.nngroup.com/articles/usability-101-introduction-to-usability/',
    },
    {
      texto:
        'Leyva Vallejo, K., Alarcón Barrera, L. y Ortegón Cortázar, L. (2016). Exploración del diseño y arquitectura web: aplicación a páginas electrónicas del sector bancario desde la perspectiva del usuario. Revista Escuela de Administración de Negocios, (80), 41-58.',
      tipo: 'Revista Digital',
      link: 'https://bit.ly/3dKuvXH',
    },
    {
      texto:
        'Cronus Digital Consultora. (s.f.). https://cronuts.digital/es/servicios-digitales/diseno-web-desarrollo/wireframing-y-prototipos-usables/ ',
      tipo: 'Página web',
      link:
        'https://cronuts.digital/es/servicios-digitales/diseno-web-desarrollo/wireframing-y-prototipos-usables/ ',
    },
    {
      texto: 'Ryte Wiki. (s.f) Mockup. https://es.ryte.com/wiki/Mockup',
      tipo: 'Página web',
      link: 'https://es.ryte.com/wiki/Mockup',
    },
    {
      texto:
        'Next U. (s.f.) ¿Qué es HTML? https://www.nextu.com/blog/que-es-html/',
      tipo: 'Página web',
      link: 'https://www.nextu.com/blog/que-es-html/',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: ['Yuly Andrea Rey Quiñonez'],
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Camilo Andrés Bolaño Rey',
        cargo: 'Desarrollo Front-End',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
    ],
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
