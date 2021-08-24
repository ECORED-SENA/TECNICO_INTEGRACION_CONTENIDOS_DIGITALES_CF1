<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span 5
      h1 Estrategia digital
    .row.mb-5
      .col-lg-6
        p.mb-5 En la actualidad, hablar de estrategia digital es hablar de tecnología. A través de esta el mundo empresarial ha encontrado cómo optimizar los procesos productivos, creando nuevos productos o reimaginando los procesos actuales. Aquí se fija la dirección que una organización tomará, creando ventajas competitivas con la tecnología, así como las tácticas que utilizará para lograr estos cambios. Generalmente se habla de cambios de paradigma en los modelos de negocio puesto que la tecnología hace posible que las empresas innovadoras creen servicios que antes no eran posibles.
          br
          br
          |A medida que la tecnología digital avanza más y las empresas continúan en el camino de la transformación digital, la estrategia digital y la estrategia de negocios se fusionan como la misma cosa.
      .col-lg-6: img(src='@/assets/curso/img100.jpg')(data-aos="zoom-in-up")
    .tarjeta.color-secundario.p-5.mb-5
      .row.align-items-center
        .col-lg-2: img(src='@/assets/curso/img101.svg')
        .col-lg-10
          p Debemos recordar que la estrategia digital es tanto un concepto como una cosa, es decir, una estrategia digital debería eventualmente conducir a la creación de un plan concreto y una hoja de ruta. Si bien puede seguir cambiando durante el proceso que ha decidido seguir, también debe haber un compromiso claro con lo que significa  digitalizar la  empresa.
    #t_5_1.titulo-segundo
      h2 5.1 <i>Marketing</i> digital
    p.mb-5 Se ha convertido en una herramienta eficaz y un facilitador de procesos para el comercio nacional e internacional. Junto a nuevas y diversas técnicas se pueden idear modelos de negocios y estrategias orientadas a detectar nuevas oportunidades en los mercados globales, para lo cual se exige que las empresas desarrollen formas  de comunicación  que se integren a un plan de marketing. De esta manera, las empresas logran segmentar tanto sus mercados, que llegan a conocer los medios sociales que se utilizan en cada país. Los profesionales del marketing digital consideran que, si un producto o servicio no se encuentra en Internet, simplemente no existe.
    .row.mb-5.justify-content-center
      .col-lg-8
          .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5
            .bloque-texto-g__img(
              :style="{'background-image': `url(${require('@/assets/curso/img102.jpg')})`}"
            )
            .bloque-texto-g__texto.p-4
              p.mb-0 Las redes sociales como <i>Tiktok, Kwait, Facebook, Twitter, LinkedIn, Instagram</i>, son una nueva forma de llegar al cliente, muchas veces las personas piensan que estos son los principales medios para poder comercializar un producto o servicio, sin embargo, también es necesario contar con un Sitio <i>Web</i> y el apoyo de <i>E-mail Marketing</i>.
    p.mb-5 Hoy en día, el <i>marketing</i> digital ha aprovechado las plataformas <i>online</i> para el desarrollo de campañas publicitarias, donde la segmentación e interactividad son el atractivo principal, pues pueden incidir en su <i>target</i> directamente y así poder hacerle tomar determinadas decisiones. Es tanto el auge que ha alcanzado este nuevo modelo publicitario que según estudios de la empresa Multipla, el 86 % del contenido en el ciberespacio pertenece a publicidad.
    .row.justify-content-center.mb-5
      .col-lg-6
        .cajon.color-primario.bg--1-claro.p-5.mb-4
          h5.mb-0 Este contenido que se visualiza en los distintos canales digitales es el resultado de toda una estrategia estructurada de una marca. 
    #t_5_2.titulo-segundo
      h2 5.2 Plan de medios digitales
    .row.mb-5
      .col-lg-6: img(src='@/assets/curso/img103.jpg')(data-aos="zoom-in-up")
      .col-lg-6
        p El Plan Estratégico de Marketing Digital, es un documento en el cual se estudia el proyecto a profundidad, se analiza qué está pasando en la actualidad, la competencia y modelos de negocio similares y los objetivos que queremos alcanzar, con todo ello, se realiza un plan de acción para que, a través de los distintos canales y estrategias de marketing digitales (redes sociales, buscadores, email...), se consigan los objetivos propuestos.
          br
          br
          |Antes de comenzar con las estrategias de cada uno de los canales digitales que se van a utilizar para promocionar un proyecto, se debe hacer estudio a profundidad del contexto actual, la situación externa de la economía y del sector, como de la situación al interior de la empresa de nuestro cliente, contando con la mayor información posible para poder hacer un análisis completo y tomar las mejores decisiones dentro de la estrategia digital. A continuación, se explica brevemente cada uno de los tipos de análisis que se deben realizar y tener en cuenta en un plan de medios.
    .titulo-sexto.color-acento-contenido
      h5.fw-normal 
        b Figura 10 
        | Análisis de un plan de medios
    .row.mb-5.justify-content-center
      .col-lg-10
        figure.mb-5
          img(src='@/assets/curso/img104.svg')(data-aos="zoom-in-up")
    p.mb-5 Luego de haber analizado la situación, se debe pensar en la estrategia con la que se va a llevar a cabo el proyecto a un nuevo posicionamiento en el mercado digital, utilizando todas las herramientas que brinda Internet.
    SlyderB.mb-5(:datos="datosSlyder")
    p.mb-5 Posteriormente, se preparan tres escenarios distintos (conservador, agresivo y optimizado) con distintos grados de consecución de objetivos asociados a distintos niveles de inversión. Las estrategias de marketing digital señaladas en el Plan Estratégico, se dividirán en tres grupos en función de su prioridad para conseguir los objetivos deseados. (Estrategias básicas, intermedias y avanzadas). 
      br
      br
      |En la siguiente figura se repasa brevemente en qué consiste cada uno de los escenarios de acuerdo con Cuantrix (s.f.)
    .titulo-sexto.color-acento-contenido
      h5.fw-normal 
        b Figura 11 
        | Escenarios
    .row.mb-5.justify-content-center
      .col-lg-10: img(src='@/assets/curso/img117.svg')(data-aos="zoom-in-up")

</template>

<script>
export default {
  name: 'Tema5',
  data: () => ({
    datosSlyder: [
      {
        titulo: 'Objetivos del negocio',
        texto:
          'Se fijan los objetivos que se desean alcanzar para posteriormente elaborar el Plan Estratégico de Marketing en base a estos objetivos.',
        imagen: require('@/assets/curso/img105.svg'),
      },
      {
        titulo: 'Estrategias en Redes Sociales',
        texto:
          'Se analizan las redes sociales más efectivas para el producto o servicio, así como el lenguaje y estilo de comunicación que se usará en la interacción con los seguidores, así como las formas de atender sus peticiones.',
        imagen: require('@/assets/curso/img106.svg'),
      },
      {
        titulo: 'Estrategia SEO',
        texto:
          'Un estudio sobre  palabras clave en las que nos interesa posicionar la página web en Google y los contenidos que serán necesarios crear el sitio web, para mantener un posicionamiento óptimo y conseguir visitas que lleguen a la conversión. Además se analizarán otros factores importantes que también jugarán un papel importante en el posicionamiento orgánico.',
        imagen: require('@/assets/curso/img107.svg'),
      },
      {
        titulo: 'Estrategias en publicidad digital',
        texto:
          'Un análisis sobre medios publicitarios  digitales en el que se paga por cada visita obtenida en la web, con todas las posibilidades que estas plataformas brindan, como la microsegmentación de los anuncios o la posibilidad de pausar y reanudar en cualquier momento las campañas de publicidad.',
        imagen: require('@/assets/curso/img108.svg'),
      },
      {
        titulo: 'Estrategias en Email Marketing',
        texto:
          'Se trata de estrategias que buscan la forma más efectiva de usar el email como medio paraa la  captación de clientes y de conversión de ventas.',
        imagen: require('@/assets/curso/img109.svg'),
      },
      {
        titulo: 'Estrategia Web',
        texto:
          'Un análisis sobre los elementos  fundamentales que debe tener la página web, el cómo conseguir los objetivos marcados, con especial atención a la accesibilidad de la misma, la identidad, la navegación sencilla e intuitiva, el tipo de  contenido y la usabilidad de la misma.',
        imagen: require('@/assets/curso/img110.svg'),
      },
      {
        titulo: 'Estrategias de Inbound Marketing',
        texto:
          'Atraer a potenciales clientes mediante contenidos digitales de calidad que ellos están consumiendo de manera voluntaria y a partir de aquí seguir “seduciendo” al lector para convertirlo de extraño a visitante regular de la web, de visitante de la web a “lead” (potencial cliente que nos ha dejado sus datos de contacto) de “lead” a cliente y de cliente a promotor o prescriptor de nuestra empresa a través de comentarios o acciones virtuales.',
        imagen: require('@/assets/curso/img111.svg'),
      },
      {
        titulo: 'Estrategias de influencers',
        texto:
          'La participación de  personas que son influyentes en el mundo digital, como por ejemplo bloggers, youtubers especializados, son una forma de conseguir visibilidad. Se realiza un  análisis de personas  del  campo deseado  que permita crear estrategias de colaboración.',
        imagen: require('@/assets/curso/img112.svg'),
      },
      {
        titulo: 'Seguimiento de la reputación online',
        texto:
          'Se hace referencia a todo lo que pasa en el entorno global de Internet acerca de  una marca, las acciones necesarias  para conseguir mantener en el tiempo una reputación positiva en la red, dar respuesta de manera rápida y eficaz a posibles problemas o crisis de reputación y supervisar  todas las interacciones alrededor de  una marca para ser consciente de los problemas a los que se puede enfrentar. Es un análisis de cómo gestionar la reputación on line y manejar situaciones de crisis.',
        imagen: require('@/assets/curso/img113.svg'),
      },
      {
        titulo: 'Calendario de creación de contenidos',
        texto:
          'Es una hoja de ruta que nos  permite conocer en cada momento y a lo largo del tiempo qué contenidos se deben crear y con qué finalidad.',
        imagen: require('@/assets/curso/img114.svg'),
      },
      {
        titulo:
          'Métodos de pago recomendados (en el caso de que se trate de un e-commerce)',
        texto:
          'Dentro del mundo del emprendimiento en muchas ocasiones se deja para el final los métodos de pago, siendo estos hoy en día quizá una de las fórmulas más eficaces para rentabilizar ganancias.  Existen diversas formas para ofrecer el pago de productos o servicios a través de la página web, en función del público objetivo y las características especiales de cada negocio, será más recomendable optar por unas u otras. Es por ello que se deberá realizar un análisis sobre la forma más conveniente de recibir  pago de manera óptima y segura para ambas partes de la negociación.',
        imagen: require('@/assets/curso/img115.svg'),
      },
      {
        titulo: 'Analítica y medición de resultados',
        texto:
          'Realizando un listado de las herramientas de analítica  para conocer la interacción de los usuarios con la aplicación y la página web, conoceremos el modo de ir mejorando aspectos de la misma.',
        imagen: require('@/assets/curso/img105.svg'),
      },
    ],
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass" scoped></style>
