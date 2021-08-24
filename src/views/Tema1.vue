<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Diseño
    p.mb-5 El programa de formación tecnológica en Integración de Contenidos Digitales pretende otorgar al aprendiz Sena los conocimientos necesarios para desarrollar estrategias de planeación y producción de contenidos digitales y multimedia que las Mipymes del país requieren en el contexto de la cuarta revolución industrial, tal como se puede apreciar en el siguiente video.
      br
      br
      |Este componente iniciará con la conceptualización del diseño, desde la perspectiva de las composiciones gráficas y digitales, con la que conseguirá crear imágenes. Posteriormente, se le entregará información que le posibilite la elaboración de piezas audiovisuales, para que finalmente pueda integrar ambos productos en estrategias digitales que consigan la operatividad, funcionalidad, visibilidad, o cualquier otro proceso necesario que contribuya a la conversión digital de las empresas del país.
    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col-lg-8
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/img0.jpg')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 El diseño es una manera de organizar las ideas para plasmarlas en una comunicación de tipo visual y puede aplicarse en muchas áreas: diseño gráfico, de interiores, arquitectónico, industrial, de modas, editorial, publicitario, artístico, diseño digital y diseño <i>web</i>, entre otros. 
    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col-lg-6
        .cajon.color-acento-contenido.bg--gris.p-4.mb-4
          p.mb-0 Cómo está relacionado con tantas áreas, el diseño podría definirse como toda acción 
            b creadora que persigue una  finalidad.
    #t_1_1.titulo-segundo
      h2 1.1 Diseño gráfico
    p.mb-5 El desarrollo del diseño gráfico como campo creativo específico, puede entenderse estudiando su trayectoria a lo largo de la historia. 
    .tarjeta.tarjeta--gris.p-4.mb-5
      LineaTiempoC.color-acento-contenido(text-small)(data-aos="zoom-in")
        .row(titulo="Prehistoria" class="text-small").justify-content-center
          .col-md-4
            figure
              img(src='@/assets/curso/img1.jpg', alt='Texto que describa la imagen')
          .col-md-6.mb-4.mb-md-0.mt-4
            p La comunicación gráfica, que ha acompañado al hombre desde hace mucho tiempo, se remonta a la época de las pinturas rupestres. Al comienzo sólo fueron trazos en las cavernas de la prehistoria, con algún tipo de significado religioso. 

        .row(titulo="Antiguo Egipto" class="text-small").justify-content-center
          .col-md-4
            figure
              img(src='@/assets/curso/img2.jpg', alt='Texto que describa la imagen')
          .col-md-6.mb-4.mb-md-0.mt-4
            p Los antiguos egipcios se comunicaban por medio de jeroglíficos que tallaban también en piedra, luego utilizaron otros materiales como el papiro.
        .row(titulo="Edad media" class="text-small").justify-content-center
          .col-md-4
            figure
              img(src='@/assets/curso/img3.jpg', alt='Texto que describa la imagen')
          .col-md-6.mb-4.mb-md-0.mt-4
            p En la edad media las obras escritas alcanzaron mayor poder comunicativo gracias al color, las ilustraciones, además de otros elementos gráficos usados de forma armoniosa y equilibrada en el documento.

        .row(titulo="Siglo XV (año 1440)" class="text-small").justify-content-center
          .col-md-4
            figure
              img(src='@/assets/curso/img4.jpg', alt='Texto que describa la imagen')
          .col-md-6.mb-4.mb-md-0.mt-4
            p Durante la primera mitad del siglo XV (año 1440) aparece la imprenta, invento del alemán Johannes Gutenberg, permitiendo agilizar y masificar la elaboración de documentos al igual que el alcance de su mensaje.

        .row(titulo="Siglo XIX " class="text-small").justify-content-center
          .col-md-4
            figure
              img(src='@/assets/curso/img5.jpg', alt='Texto que describa la imagen')
          .col-md-6.mb-4.mb-md-0.mt-4
            p A finales del siglo XIX, la revolución industrial provocó profundos cambios en el desarrollo tecnológico. Se originó la necesidad de poseer un estilo propio que representa la idiosincrasia de cada región, de esta manera nace el Modernismo.

        .row(titulo="Modernismo 1918-1933" class="text-small").justify-content-center
          .col-md-4
            figure
              img(src='@/assets/curso/img6.jpg', alt='Texto que describa la imagen')
          .col-md-6.mb-4.mb-md-0.mt-4
            p Conocido también como “Art Nouveau”, según Droste (2006), se buscaba fusionar el arte con la vida, utilizando elementos de la naturaleza para darle protagonismo al componente orgánico. En 1919 Walter Gropius creó la escuela Bauhaus, que se convirtió en el motor y el modelo ejemplar de la reforma de formación artística antiacadémica de la república de Weimar (dícese del período de la historia de Alemania comprendido entre 1918 y 1933, tras la derrota del país en la Primera Guerra Mundial).  
              br
              |La Bauhaus combinaba diseño, arte y arquitectura, estudiaba la forma, el color, los materiales, la composición y el espacio influenciados por el constructivismo. Finalmente, la escuela cierra sus puertas en Berlín en 1933 (p.15.                                                                                                              
              br
              br
              |Mientras en Alemania se desarrollaba la Bauhaus, en Francia aparecía el movimiento “Art decó”, que se dio a conocer en la exposición internacional de las artes decorativas e industriales modernas de 1925. 

        .row(titulo="La época del diseño (1940)" class="text-small").justify-content-center
          .col-md-4
            figure
              img(src='@/assets/curso/img7.jpg', alt='Texto que describa la imagen')
          .col-md-6.mb-4.mb-md-0.mt-4
            p La época del diseño en Estados Unidos se inició en los años 40 y estuvo bastante influenciada por las raíces europeas con la llegada de los emigrantes europeos a causa de la Segunda Guerra Mundial y se convierten en una referencia importante para la época actual. A pesar de la relación entre todos estos eventos es muy difícil dar una fecha exacta de la aparición del diseño como se conoce hoy.
    p.mb-5 En la actualidad, el diseño gráfico hace parte de la vida cotidiana y está presente en todas las áreas de la comunicación. Con la aparición de la Internet en los años ochenta, se ha visto acelerada su evolución gracias a los computadores y los nuevos programas informáticos gráficos que cambiaron el papel por la pantalla y ofrecieron a los diseñadores la oportunidad de experimentar con el texto y la imagen, permitiendo el nacimiento de nuevas corrientes y especialidades como la creación y el diseño de páginas <i>web</i>.
      br
      br
      |Pese a todas las transformaciones tecnológicas y sociales, las bases del diseño gráfico continúan siendo las mismas que comenzaron a escribirse hace cien años atrás, aunque enriquecidas a través del tiempo y gracias a la tecnología.      
    h3 Fundamentos del diseño
    .row.mb-5 
      .col-md-6.mt-4
        p Como disciplina, el diseño gráfico busca transmitir un mensaje definido a través de elementos visuales que obedecen a parámetros establecidos, que a su vez se rigen por fundamentos artísticos que tienen por objeto generar sensaciones visuales placenteras que logren la conexión deseada entre quien mira y quien comunica.
          br
          br
          |Con la idea de facilitar la comprensión entre los distintos aspectos que involucran un tema tan extenso como el diseño gráfico, se opta por diferenciar entre los aspectos conceptuales y los prácticos; los conceptuales se tratarán como los fundamentos, ya que permiten una perspectiva más global de los productos diseñados: la composición, el color, y las leyes del diseño. Los aspectos técnicos se definirán como los elementos más adelante.
      .col-md-6: img(src='@/assets/curso/img8.jpg', alt='Texto que describa la imagen')(data-aos="zoom-in-up")
    h3 a. La composición
    p.mb-5 Puede interpretarse como la conceptualización primera que da origen al diseño, entendiendo éste como un producto con un fin determinado.  
      br
      br
      |Se refiere a la organización o disposición de elementos dentro del espacio visual, con el objeto de construir una imagen que transmita una idea de manera sencilla y directa a un público objetivo. La composición define la relación entre el tamaño, texturas, colores, pesos, la escala, cantidades y todos los elementos que se incluyan.
      br
      br
      |A continuación, se expondrán los principios de composición.

    
    
    h3 Principios de la composición
    //todo! PLANTEAR LA INFOGRAFÍA 
    TabsC.color-acento-contenido.mb-5
      .py-3.py-md-4(titulo="Variedad").vineta_fondo
        .row.justify-content-end
          .col-md-8.mb-4.mb-md-0.justify-content-end
            .vineta.p-5.mb-5
              h4 Variedad:
              p Se refiere a los distintos elementos (forma, color, ilustración, fotografía, etc.) que incorpora el diseñador en una composición con el fin de captar el interés mediante el uso de elementos contrastantes.
      .py-3.py-md-4(titulo="Jerarquía").vineta_fondo
        .row.justify-content-end
          .col-md-8.mb-4.mb-md-0.justify-content-end
            .vineta.px-5.py-3
              h4 Jerarquía:
              p tiene que ver con el tamaño (de los elementos y su relación con el resto), el color y la disposición de elementos para  generar una condición de subordinación. Tiene tres subtipos:
              .row.align-items-center
                .col-lg-1: img(src='@/assets/curso/img123.svg' style='width: 46px')
                .col-lg-10
                  p 
                    b Alineación: 
                    | los elementos dispuestos a la derecha o en el margen inferior tienen mayor fuerza visual que los que se ubican a la izquierda y/o en la parte superior ya que dan una sensación más liviana. 
              .row.align-items-center
                .col-lg-1: img(src='@/assets/curso/img124.svg' style='width: 46px')
                .col-lg-10
                  p 
                    b Color: 
                    |  los colores vivos tienen más fuerza y un mayor efecto visual que los colores pastel, pálidos y tenues.

              .row.align-items-center
                .col-lg-1: img(src='@/assets/curso/img125.svg' style='width: 46px')
                .col-lg-10
                  p 
                    b Escala:
                    | existe cuando hay relación matemática (proporción) entre las dimensiones de los distintos elementos, y se puede representar mediante un número o una fórmula.

      .py-3.py-md-4(titulo="Unidad").vineta_fondo
        .row.justify-content-end
          .col-md-8.mb-4.mb-md-0.justify-content-end
            .vineta.p-5.mb-5
              h4 Unidad:
              p el valor de la unidad radica en que cada elemento se organiza, se relaciona y ejerce fuerza y tensión, representando un solo elemento. La unidad se puede dar por continuidad, por repetición, por continuación o por proximidad.
      .py-3.py-md-4(titulo="Contraste").vineta_fondo
        .row.justify-content-end
          .col-md-8.mb-4.mb-md-0.justify-content-end
            .vineta.p-5.mb-5
              h4 Contraste: 
              p es  la distinción entre uno o varios elementos para marcar una diferencia que permita destacar lo que se considera importante. El contraste se puede generar por color, forma, tamaño y tipografía: p.ej. las formas angulares y alargadas amplían el campo de visión y proporcionan un efecto de magnificencia, mientras que las cortas transmiten humildad.
      .py-3.py-md-4(titulo="Ritmo").vineta_fondo
        .row.justify-content-end
          .col-md-8.mb-4.mb-md-0.justify-content-end
            .vineta.p-5
              h4 Ritmo:
              p consiste en la repetición regular de un patrón con el fin de conseguir armonía en la composición. El ritmo se puede dar de forma regular o de forma progresiva
      .py-3.py-md-4(titulo="Equilibrio").vineta_fondo
        .row.justify-content-end
          .col-md-8.mb-4.mb-md-0.justify-content-end
            .vineta.p-5
              h4 Equilibrio:
              p hace referencia a la armonía que hay entre los elementos, de tal forma que nada domine en el plano. Existen dos tipos de equilibrio: simétrico y asimétrico.
              .row.align-items-center
                .col-lg-1: img(src='@/assets/curso/img127.svg' style='width: 46px')
                .col-lg-10
                  p 
                    b Simetría: 
                    | a partir de un eje o un plano se disponen algunos elementos en relación exacta de forma, tamaño y posición de modo que formen partes iguales, pero contrapuestas.
              .row.align-items-center
                .col-lg-1: img(src='@/assets/curso/img128.svg' style='width: 46px')
                .col-lg-10
                  p 
                    b Asimetría: 
                    |  es una composición en la que una parte pesa más que las otras. Suelen ser composiciones llamativas y pueden incluso ofrecer mejores resultados que las simétricas. Existen tres tipos: de reflexión, de rotación y de traslación.

      .py-3.py-md-4(titulo="Proporción áurea").vineta_fondo
        .row.justify-content-end
          .col-md-8.mb-4.mb-md-0.justify-content-end
            .vineta.p-5
              h4 Proporción áurea:
              p también conocida como el número áureo o la divina proporción, corresponde al número 1.618. Este número surge de la Sucesión de Fibonacci, en la que cada número es la suma de los dos anteriores y que se relaciona con la belleza o la naturaleza, y se ha  utilizado en arte y pintura por generaciones. El uso de este principio garantiza una proporción más armoniosa y más agradable al ojo.

    p.mb-5 Cada uno de los principios anteriores tiene su propia relevancia en la composición, y se estudian con el objetivo de que, usados en conjunto, consigan transmitir con éxito el mensaje acordado.
    h3 b. La teoría del color
    p.mb-5 Para hablar de color es necesario primero hablar sobre percepción, puesto que el color en sí no existe. Se trata de un atributo de los objetos que solo es apreciable cuando hay luz, y que se genera como resultado de la diferencia de percepción del ojo a distintas longitudes de onda. Este fenómeno se conoce como “espectro" de la luz blanca.
    .row.mb-5(data-aos="slide-down")
      .col-md-6
        .cajon.color-primario.bg--1-claro.p-4.mb-4
          p El color es el resultado de la descomposición de la luz blanca. Un rayo de luz blanca, solar, al atravesar un prisma se des­compone en varios colores… Llamamos color luz al fenómeno óptico de reflexión de la luz sobre los cuerpos, que al llegar a nuestra retina, nos permite captar ciertos estímulos que luego son interpretados como color por nuestro cerebro. (Hernández Rentería,1976, p. 8)
        p.mb-4 En la retina hay unas células llamadas conos que reaccionan de diferente forma según la longitud de onda de la radiación que les llegue. Esto se debe a que los conos poseen distintas sustancias sensibles a una longitud de onda determinada, aunque, en menor medida, también reaccionan ante longitudes de onda próximas por encima y por debajo.
        .cajon.color-primario.bg--1-claro.p-4.mb-4
          p La percepción del color implica que nos lleguen ondas luminosas a los ojos, donde se convierten en impulsos nerviosos que se envían al cerebro para que sean interpretados y nos produzcan la sensación del color. (UCA, s.f., p.15)
      .col-md-6: img(src='@/assets/curso/img9.jpg', alt='Texto que describa la imagen')
    p.mb-5 Isaac Newton fue quien descubrió que la luz blanca del sol al ser refractada, es decir, al cambiar de dirección pasando oblicuamente de un medio a otro con diferente densidad, se dividía en cada uno de los colores con una frecuencia distinta de luz, dependiendo de una mayor o menor desviación.
      br
      br
      |Para entender mejor este concepto, a continuación se presenta la figura del prisma de cristal.
    .titulo-sexto.color-acento-contenido
      h5.fw-normal 
        b Figura 1 
        |Newton y el espectro de color
    figure.mb-5
      img(src='@/assets/curso/img10.svg', alt='Texto que describa la imagen')
    p.mb-5 Respecto a la teoría del color, se puede hablar de dos tipos: la de la síntesis aditiva y la de la síntesis sustractiva.
    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--gris")
      .row(titulo="Teoría de la síntesis aditiva").justify-content-center
        .col-md-3
          figure
            img(src='@/assets/curso/img11.jpg', alt='Texto que describa la imagen')
        .col-md-8.mb-4.mb-md-0
          p Según Newton, los colores rojo, verde y azul, componen la luz blanca y no pueden producirse mediante la mezcla de ningún otro color, por lo que se consideran como colores primarios o colores RGB, (abreviatura del inglés Red, Green, Blue). A partir de la combinación de dos colores primarios se obtienen colores secundarios o colores aditivos secundarios, que serían el cian, el magenta y el amarillo. Si se combinan los tres colores primarios se obtiene el color blanco, mientras que si se combinan los tres colores secundarios, se obtiene el color negro. La combinación de un color primario y uno secundario da como resultado los colores terciarios. 
            br
            br
            |Esta teoría se aplica en el funcionamiento de los televisores y de los monitores. Mediante la combinación de estos colores se pueden obtener varios espacios de colores, que son un modelo de composición de colores, como RGB, el VGA, el LAB, el CIE XYZ, etc. 

      .row(titulo="Teoría de la síntesis sustractiva").justify-content-center
        .col-md-3
          figure
            img(src='@/assets/curso/img12.jpg', alt='Texto que describa la imagen')
        .col-md-8.mb-4.mb-md-0
          p Según esta teoría, el color del objeto va en función de las longitudes de onda del espectro electromagnético que son absorbidas y las que son reflejadas por él. 
            br
            br
            |Esta teoría necesita tres condiciones: que exista una fuente de luz, una muestra y un detector, que serían los ojos. 
            br
            br
            |Por ejemplo, la cantidad de rojo que se mostrará, dependerá de la cantidad de cian que apliquemos sobre un papel. En este modelo los colores primarios son el cian, magenta y amarillo o colores CMYK (abreviatura del inglés Cyan, Magenta, Yellow, Key). Esta teoría es utilizada en las impresiones a color y en las fotografías a color, las artes plásticas o la pintura decorativa.
    p.mb-5 Este aspecto permite ampliar la comprensión sobre el significado y usos del color. Sin embargo, para su correcta aplicación es necesario el poder entender las propiedades del mismo.   
    .titulo-sexto.color-acento-contenido
      h5.fw-normal 
        b Figura 2  
        | Propiedades del color
    ImagenInfografica.color-primario.mb-5

      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/img13.svg', alt='Texto que describa la imagen')

          figcaption Leyenda de la imagen
      .tarjeta.color-primario.p-3(x="31%" y="40%")
        .h5.mb-2 Tono:
        p es la cualidad propia del color que permite diferenciarlo de otro; es el medio por el que distinguimos ópticamente un color. Cada tono es un color. Existen tonos cálidos y fríos.
      .tarjeta.color-primario.p-3(x="57%" y="20%")
        .h5.mb-2 Brillo o luminosidad:
        p es la intensidad lumínica de un color en función de lo cerca que el color esté del blanco o del negro, para ganar claridad u oscuridad del tono.
      .tarjeta.color-primario.p-3(x="57%" y="40%")
        .h5.mb-2 Saturación:
        p representa la intensidad o palidez de un tono; tiene que ver con la pureza del color respecto del gris. Mientras más gris, menos saturado es.
    p.mb-5 Ahora bien, el uso del color en el diseño está basado en la selección correcta de los mismos  con el objetivo de lograr en el receptor, un efecto determinado. Este proceso contempla varios aspectos que se tratarán a continuación:
    .psicologia-color.d-flex.mb-5
      .cuadros-p.cuadros-p--rojo.p-5.d-flex
        .cuadros-p_titulo.m-auto
          h6.text-white  Rojo
        .cuadros-p_textos.text-white.m-auto
          h6 Rojo
          p el color de todas las pasiones: del amor al odio. El color de los reyes y del comunismo, de las alegrías y del peligro. (Heller, 2008, p. 51). El rojo expresa peligro, pasión, dinamismo, calidez y agresividad; aunque es un color que puede causar fatiga, es utilizado por su gran particularidad de llamar mucho la atención.
      .cuadros-p.cuadros-p--naranja.p-5.d-flex
        .cuadros-p_titulo.m-auto
          h6.text-white  Naranja
        .cuadros-p_textos.text-white.m-auto
          h6 Naranja
          p color de la diversión y del budismo. Exótico y llamativo, pero subestimado. (Heller, 2008, p. 179). Está asociado con la juventud; resulta de mezclar rojo y amarillo, dos colores opuestos que se contraponen en muchos de sus significados y asociaciones. Se trata de un color muy singular que incluso altera la percepción.
      .cuadros-p.cuadros-p--amarillo.p-5.d-flex
        .cuadros-p_titulo.m-auto
          h6  Amarillo
        .cuadros-p_textos.m-auto
          h6 Amarillo
          p el color más contradictorio, pues significa optimismo y celos; diversión, entendimiento y traición. El amarillo del oro y el amarillo del azufre. (Heller, 2008, p. 83). Es el color más brillante y energizante de los colores cálidos: alegre, estimulante, expansivo, es acción, poder, fuerza, voluntad, estímulo y se asocia con la idea de liberación.
      .cuadros-p.cuadros-p--verde.p-5.d-flex
        .cuadros-p_titulo.m-auto
          h6.text-white  Verde
        .cuadros-p_textos.text-white.m-auto
          h6 Verde
          p el color de la fertilidad, la esperanza y de la burguesía. Verde sagrado y verde venenoso. El color intermedio. (Heller, 2008, p. 103). El verde es un color relajante y refrescante que induce a quién lo contempla sensaciones de serenidad y armonía. Está íntimamente relacionado con todo lo natural, simbolizando también la vida, la fertilidad y la buena salud. Es también un color muy variable porque tan solo una pizca de azul convierte el amarillo en verde, en cambio puede contener varios colores como blanco, negro, marrón o rojo, sin dejar de ser nunca verde.
      .cuadros-p.cuadros-p--azul.p-5.d-flex
        .cuadros-p_titulo.m-auto
          h6.text-white  Azul
        .cuadros-p_textos.text-white.m-auto
          h6 Azul 
          p uno de los colores preferidos; el color de la simpatía, la armonía y la fidelidad, pese a ser frío y distante. Del azul real al azul de los tejanos. (Heller, 2008, p. 17). El azul es un color que inspira confianza, se asocia con la fantasía, la estabilidad, la armonía, la paz y la calma, es el color de las buenas cualidades y los buenos sentimientos. También puede tener algunos significados negativos, como la depresión, y puede provocar una sensación de frialdad.
      .cuadros-p.cuadros-p--morado.p-5.d-flex
        .cuadros-p_titulo.m-auto
          h6.text-white Violeta 
        .cuadros-p_textos.text-white.m-auto
          h6 Violeta
          p de la púrpura del poder al color de la teología, la magia, el feminismo y el movimiento gay. (Heller, 2008, p. 191). El púrpura es un color real y se le relaciona con la nobleza, el lujo, la sabiduría y la espiritualidad.
      .cuadros-p.cuadros-p--negro.p-5.d-flex
        .cuadros-p_titulo.m-auto
          h6.text-white  Negro
        .cuadros-p_textos.text-white.m-auto
          h6 Negro
          p el color del poder, de la violencia y de la muerte. El color favorito de los diseñadores y de la juventud. El color de la negación y de la elegancia. ¿Es el negro propiamente un color? (Heller, 2008, p. 125). Simboliza el misterio, el poder, la elegancia, la sofisticación, la muerte, el error, el mal, la negación y el universo. Por el contrario, el color negro también puede evocar emociones como la tristeza y la ira.
      .cuadros-p.cuadros-p--blanco.p-5.d-flex
        .cuadros-p_titulo.m-auto
          h6 Blanco
        .cuadros-p_textos.m-auto
          h6 Blanco
          p representa lo femenino, la inocencia. El color del bien y de los espíritus. El color más importante de los pintores. (Heller, 2008, p. 153). El color blanco también tiene un lado negativo, donde simboliza la esterilidad y el frío. Sin embargo, se debe tener en cuenta que este es el significado en la cultura occidental. En otras partes del mundo el blanco tiene el significado opuesto.
    p.mb-5 Una vez se comprende el uso de cada color, se hace necesario el conocer la base de ellos, la cual se da a través del 
      b círculo cromático
      |, el cual es un esquema gráfico formado por una superficie geométrica circular que sirve para ordenar los colores primarios y secundarios. Los colores que se encuentran enfrentados en él, se llaman colores complementarios y se definen así cuando no contienen ninguna cantidad del color opuesto. Así, el color complementario del azul cian es el rojo; el magenta es el complementario del verde y el amarillo lo es del violeta. La siguiente figura ilustra cómo está formado el círculo cromático.    
    .titulo-sexto.color-acento-contenido
      h5.fw-normal 
        b Figura 3  
        | Círculo cromático
    figure.mb-5
      img(src='@/assets/curso/img14.svg', alt='Texto que describa la imagen')
    p.mb-5 Existen unas fórmulas basadas en el concepto 
      b “armonía del color”
      |, y que se consiguen a través del uso del círculo cromático:
    .titulo-sexto.color-acento-contenido
      h5.fw-normal 
        b Figura 4  
        | Fórmulas básicas de combinación
    


    //TODO! slyder personalizado 

    .tarjeta1.color-verde.bfaf.p-3(data-aos="flip-up").mb-5
      SlyderA.px-5
        .row.m-5.align-items-center
          .col-md-3
            figure
              img(src='@/assets/curso/img129.svg', alt='Imagen de la tarjeta')
          .col-md-9
            h5 Complementarios:
            p son opuestos uno al otro en la rueda. Por ejemplo: azul y naranja, o el clásico rojo y verde.  
              br
              br
              |Para evitar que la paleta te quede muy simple, puedes agregar tonos más claros, oscuros o con poca saturación.
        .row.m-5.align-items-center
          .col-md-3
            figure
              img(src='@/assets/curso/img130.svg', alt='Imagen de la tarjeta')
          .col-md-9
            h5 Tríada:
            p se forma un triángulo en el círculo cromático y se usan los colores que están en cada esquina. 
              br
              br
              |Estas combinaciones tienden a ser bastante impactantes, particularmente con colores primarios y secundarios, así que piénsalo bien antes de elegirlas.
        .row.m-5.align-items-center
          .col-md-3
            figure
              img(src='@/assets/curso/img131.svg', alt='Imagen de la tarjeta')
          .col-md-9
            h5 Análoga: 
            p se eligen los colores que se siguen uno al otro en el círculo cromático, como los rojos y anaranjados, o azules y verdes.
        .row.m-5.align-items-center
          .col-md-3
            figure
              img(src='@/assets/curso/img132.svg', alt='Imagen de la tarjeta')
          .col-md-9
            h5 Complementarios divididos: 
            p se utilizan los colores que están junto al color complementario. Esto te da el mismo nivel de contraste, pero más opciones de tonos y mejores resultados más interesantes.
        .row.m-5.align-items-center
          .col-md-3
            figure
              img(src='@/assets/curso/img133.svg', alt='Imagen de la tarjeta')
          .col-md-9
            h5 Tetraédrica: 
            p forma un rectángulo en el círculo, por lo cual no usa uno, sino dos pares de colores complementarios. Esta fórmula funciona mejor si dejas un color como dominante y los otros tres como auxiliares.
        .row.m-5.align-items-center
          .col-md-3
            figure
              img(src='@/assets/curso/img134.svg', alt='Imagen de la tarjeta')
          .col-md-9
            h5 Monocromática: 
            p se utiliza un solo color. Modificando la saturación y brillo se crean variaciones en el tono y se tiene la garantía de que combinarán.


    .titulo-color.mb-4
      spam.bg--3.text-white.mb-5.p-2
        | Para profundizar en el tema de las combinaciones, se sugiere ver el video.
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/L2Q2_d4TyVk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video: Las reglas para combinar los colores de forma efectiva
    h3 c. Leyes del diseño gráfico
    p.mb-5 Otro aspecto conceptual del diseño son las denominadas leyes o reglas que se aplican al diseño y la composición. Estas leyes resultan de diversos estudios sobre la percepción y psicología humana.
    TabsA.color-acento-contenido.mb-5
      .tarjeta.bg--1-claro.p-4(titulo="Ley de tercios")
        .row
          .col-xl-6
            h5 Ley de tercios
            p Consiste en dividir la imagen con  líneas horizontales y tres verticales equidistantes, en 9 partes y utilizar los puntos de intersección de estas líneas, llamados también puntos fuertes o calientes, para ubicar los objetos que se quieren destacar en la composición. 
              br
              br
              |Según esta ley, los objetos no deben quedar solo en el centro del cuadro, sino que se deben colocar en los puntos fuertes o principales. Esto hará que el peso visual aumente y toda la fotografía o diseño esté más equilibrada.

          .col-xl-6.mb-4
            figure
              img(src='@/assets/curso/img143.jpg', alt='Texto que describa la imagen')
      .tarjeta.bg--1-claro.p-4(titulo="Ley de horizonte")
        .row
          .col-xl-6
            h5 Ley de horizonte
            p Proviene de la ley de tercios. Consiste en dividir la imagen en tres franjas horizontales iguales y definir qué parte de la imagen se desea resaltar, tal como se presenta en la imagen de ejemplo.
          .col-xl-6.mb-4
            figure
              img(src='@/assets/curso/img135.jpg', alt='Texto que describa la imagen')
      .tarjeta.bg--1-claro.p-4(titulo="Leyes de la Gestalt")
        .row
          .col-xl-6
            h5 Leyes de la Gestalt
            p Sostienen la fascinación por la forma y la materia, permitiendo dominar y deducir incluso lo que está por detrás de la forma. 
            P.ms-3 En la Alemania de los años 20, un equipo de psicólogos desarrolló una serie de teorías sobre la percepción visual humana, planteando el principio básico de la organización perceptual: el todo es más que la suma de las partes. Las leyes de la Gestalt son unas reglas que explican el origen de las percepciones a partir de los estímulos. Estas leyes se apoyan en test y resultados estadísticos donde las interpretaciones, si bien no son unívocas, sugieren tendencias fuertes (Pereiro, 2007, p.44)
          .col-xl-6.mb-4
            figure
              img(src='@/assets/curso/img136.jpg', alt='Texto que describa la imagen')
      .tarjeta.bg--1-claro.p-4(titulo="Ley de la figura-fondo")
        .row
          .col-xl-6
            h5 Ley de la figura-fondo
            p Ley de la figura-fondo es la más general. Parte del hecho de que en el proceso perceptivo se tiende a focalizar la atención sobre un objeto o determinado grupo de objetos (figura) destacándose los objetos que los envuelven (fondo). Sin embargo, figura y fondo pueden funcionar respectivamente. En este caso se habla de una relación reversible o ambigua.
          .col-xl-6.mb-4
            figure
              img(src='@/assets/curso/img137.jpg', alt='Texto que describa la imagen')
      .tarjeta.bg--1-claro.p-4(titulo="Ley de la buena forma")
        .row
          .col-xl-6
            h5 Ley de la buena forma
            p También se le conoce como pregnancia, “se basa en la observación ya que en el cerebro existe una tendencia natural a la simplificación, la simetría, el equilibrio, el orden, a organizar la información de la manera más simple y ordenada posible” (Moreno, 2003, p.236).
          .col-xl-6.mb-4
            figure
              img(src='@/assets/curso/img138.jpg', alt='Texto que describa la imagen')
      .tarjeta.bg--1-claro.p-4(titulo="Ley de cierre")
        .row
          .col-xl-6
            h5 Ley de cierre
            p El ser humano tiende a completar las formas de acuerdo con el todo. Cuando un objeto está incompleto o un espacio no está completamente cerrado, el cerebro percibe como completa la figura que aparece realmente incompleta.
          .col-xl-6.mb-4
            figure
              img(src='@/assets/curso/img139.jpg', alt='Texto que describa la imagen')
      .tarjeta.bg--1-claro.p-4(titulo="Ley del contraste")
        .row
          .col-xl-6
            h5 Ley del contraste
            p A partir del principio de que no se percibe una cosa por sí misma sino en comparación con otra, se tiende a buscar un elemento que sobresalga del resto. El contraste se puede dar por color, forma o tamaño, entre otros.
          .col-xl-6.mb-4
            figure
              img(src='@/assets/curso/img140.jpg', alt='Texto que describa la imagen')
      .tarjeta.bg--1-claro.p-4(titulo="Ley de la proximidad")
        .row
          .col-xl-6
            h5 Ley de la proximidad
            p La cercanía juega un papel clave en la percepción cuando se tiende a ver como una unidad los elementos más cercanos o próximos en el espacio. Por ejemplo, el logo de aire acondicionado de la empresa rusa «Aeroprof».
          .col-xl-6.mb-4
            figure
              img(src='@/assets/curso/img141.jpg', alt='Texto que describa la imagen')
      .tarjeta.bg--1-claro.p-4(titulo="Ley de la semejanza")
        .row
          .col-xl-6
            h5 Ley de la semejanza
            p Cuando los elementos se parecen entre sí o son iguales se entienden como un conjunto, hay una tendencia natural a poner en relación los elementos parecidos o iguales. Pueden ser similares en forma, color, dimensión, ubicación, etc. 
          .col-xl-6.mb-4
            figure
              img(src='@/assets/curso/img142.jpg', alt='Texto que describa la imagen')
    .row.mb-5
      .col-lg-6
        h4 Elementos del diseño gráfico
        p Se trata de herramientas visuales que se combinan para crear un diseño determinado, buscando, al igual que los fundamentos, comunicar una idea o significado de la manera más eficaz posible.
          br
          br
          |Wucius Wong, artista chino y autor del libro Fundamentos del diseño bi y tri dimensional, reconoce cuatro grupos de elementos: conceptuales, visuales, de relación y prácticos. Para este apartado se tratarán solamente los elementos visuales, ya que son los que permiten configurar las imágenes necesarias para la producción de contenidos gráficos. 
          br
          br
          |Además de los definidos por Wong, se incluyen cuatro elementos más (línea, objeto, tipografía y espacio), al considerarlos necesarios para el diseño. En la siguiente figura se explica un poco más acerca de cada una de ellas.
      .col-lg-6: img(src='@/assets/curso/img15.svg', alt='Texto que describa la imagen')(data-aos="flip-up")
    .titulo-sexto.color-acento-contenido
      h5.fw-normal 
        b Figura 5  
        | Fórmulas básicas de combinación
    .row.justify-content-center
      .col-lg-10
        PasosA.color-acento-contenido.mb-5(tipo="n")
          .row
            .col-md-3
              figure
                img(src='@/assets/curso/img16.svg', alt='Texto que describa la imagen' style="width: 120px" ).m-auto
            .col-md-9.mb-4.mb-md-0
              h3 Forma
              p Todo lo que se puede ver tiene forma. Una forma es un espacio delimitado y plano, de dos dimensiones: anchura y altura. Según el punto de vista del observador se puede hablar de dos grupos diferentes de formas de la imagen:
              ol.lista-ol--cuadro
                li 
                  .lista-ol--cuadro__vineta
                    span A
                  p 
                    b Geométricas: 
                    | pueden dibujarse con ayuda de una regla o un compás: triángulos, cuadrados, círculos, etc.

                li 
                  .lista-ol--cuadro__vineta
                    span B
                  p 
                    b Orgánicas: 
                    | son formas menos esquemáticas, más libres, que se asemejan a las que se encuentran en la naturaleza.
          .row
            .col-md-9.mb-4.mb-md-0
              h3 Medida
              p Todas las formas tienen un tamaño. Al comparar diferentes elementos se puede percibir tamaño, forma, distancia, peso y ubicación en el espacio. El tamaño es relativo si lo describimos en términos de magnitud y pequeñez, pero así mismo es físicamente mesurable
            .col-md-3
              figure
                img(src='@/assets/curso/img17.svg', alt='Texto que describa la imagen' style="width: 120px" ).m-auto
          .row
            .col-md-3
              figure
                img(src='@/assets/curso/img18.svg', alt='Texto que describa la imagen' style="width: 120px" ).m-auto
            .col-md-9.mb-4.mb-md-0
              h3 Color
              p Generalmente la forma no puede separarse del color, pues el color es sencillamente la reacción de un objeto a los rayos de luz mediante los cuales lo percibimos.
          .row
            .col-md-9.mb-4.mb-md-0
              h3 Textura
              p Es la apariencia externa de la forma que se percibe a través de la vista y genera la ilusión del tacto, según el tratamiento que se le dé a su superficie. Las hay naturales y artificiales y se crean usando patrones o repitiendo imágenes que dan a los objetos planos realismo y tridimensionalidad. 
            .col-md-3
              figure
                img(src='@/assets/curso/img19.svg', alt='Texto que describa la imagen' style="width: 120px" ).m-auto
          .row
            .col-md-3
              figure
                img(src='@/assets/curso/img20.svg', alt='Texto que describa la imagen' style="width: 120px" ).m-auto
            .col-md-9.mb-4.mb-md-0
              h3 La línea 
              p Según Jaime P. Llaseras (s.f.), en su blog,  está formada por una sucesión de puntos y es el elemento visual básico de todo diseño gráfico. La línea, conecta la trayectoria de un punto a otro. Sus cualidades son el grosor, el color, la textura y el estilo.
          .row
            .col-md-9.mb-4.mb-md-0
              h3 El objeto
              p Se trata de una forma que adquiere propiedades tridimensionales, creando la ilusión de profundidad y realzando el volumen a través del uso de la luz, la sombra y la perspectiva. Los objetos se miden por su anchura, altura y profundidad. Al igual que las formas, los objetos también se dividen en geométricos y orgánicos.
            .col-md-3
              figure
                img(src='@/assets/curso/img21.svg', alt='Texto que describa la imagen' style="width: 120px" ).m-auto
          .row
            .col-md-3
              figure
                img(src='@/assets/curso/img22.svg', alt='Texto que describa la imagen' style="width: 120px" ).m-auto
            .col-md-9.mb-4.mb-md-0
              h3 El espacio
              p Es la distancia o área alrededor o entre los elementos de un diseño que determina la esencia visual y el dinamismo de la composición y puede ser dos tipos: 
              ol.lista-ol--cuadro
                li 
                  .lista-ol--cuadro__vineta
                    span A
                  p 
                    b Positivo: 
                    |  incluye las formas de los objetos, o donde recae la atención del diseño.

                li 
                  .lista-ol--cuadro__vineta
                    span B
                  p 
                    b Negativo: 
                    | es la parte del diseño que no está ahí, el resto del espacio que está entre los elementos. El espacio negativo puede llegar a ser igual de crucial para un diseño que el espacio positivo, porque enmarca y contiene la composición.
          .row
            .col-md-9.mb-4.mb-md-0
              h3 La tipografía
              p El uso de letras o palabras es una de las formas más directas de comunicar visualmente y por tanto, es uno de los elementos visuales más usados en diseño gráfico. La tipografía no sólo es importante porque pueda comunicar palabras, sino también porque su estilo y disposición en el diseño contribuye a dar significado a la composición. Un carácter tipográfico está formado por la combinación de formas geométricas y orgánicas, que resultan en una nueva forma.
            .col-md-3
              figure
                img(src='@/assets/curso/img23.svg', alt='Texto que describa la imagen ' style='width: 120px').m-auto
    p.mb-5 Sobre la tipografía se pueden estudiar tres aspectos principales:
    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--gris")
      .row(titulo="Anatomía tipográfica")
        .col-md-9.mb-4.mb-md-0
          p Comprende todas las características de las tipografías que pueden descomponerse y sintetizarse. La anatomía de los caracteres es lo que otorga a la tipografía su propio estilo y aspecto. 
            br
            br
            |Basada en su anatomía, las tipografías se pueden agrupar en: serif, sans serif y script y decorativas. La serifa o remate es un elemento identificador que refuerza la legibilidad de un texto. 
        .col-md-3
          figure
            img(src='@/assets/curso/img28.jpg', alt='Texto que describa la imagen')
            figcaption Nota. Tomado de Hemisferio digital (2017).
      .row(titulo="Psicología de la tipográfica")
        .col-md-9.mb-4.mb-md-0
          p Al igual que en el caso del color, la selección de la tipografía está relacionada con la idea o mensaje que se quiere transmitir, puesto que cada  tipo de letra produce sensaciones y valores perceptibles. 
            br
            br
            b “Está probado que la forma visual y el estilo de cada familia tipográfica provoca una emoción diferente que puede ser usada para transmitir diferentes conceptos” (Hemisferio digital, 2017)
        .col-md-3
          figure
            img(src='@/assets/curso/img29.jpg', alt='Texto que describa la imagen').m-auto
            figcaption Nota. Tomado de Pikotchart (2017).
      .row(titulo="Familia tipográfica y su clasificación")
        .col-md-12.mb-4.mb-md-0
          p Una familia tipográfica agrupa todas las variaciones posibles de un tipo de letra o de una fuente específica: esto es, los diferentes grosores, anchos y cursivas. Entre las familias tipográficas están: la “Universe”,''Times Roman” y la “Garamond”. Muchas familias reciben el nombre de su creador o de la publicación en la que se emplearon por primera vez (Ambrose -Harris, 2007, p. 82).
            br
            br
            |En el siglo XX se realizaron tres clasificaciones de las familias tipográficas. La última, llevada a cabo por la ATypI en 1962 -Association Typographique Internationale- (nombre en francés original; International Typography Association en inglés; y Asociación Internacional de Tipografía en español) fusiona las clasificaciones anteriores, realizadas por François Thibaudeau (1921), Maximilien Vox (1952) y Aldo Novarese en (1957).
            br
            br
            |Esta clasificación diferencia 11 familias correspondientes con 4 grupos:
          ol.lista-ol--cuadro
            li 
              .lista-ol--cuadro__vineta: img(src='@/assets/curso/img24.svg' style='width: 14px').m-auto
              p 
                b Tipografías Roman:  
                | Romanas, Egipcias o Mecanas, Incisas.
            li 
              .lista-ol--cuadro__vineta: img(src='@/assets/curso/img25.svg' style='width: 14px').m-auto
              p 
                b Tipografías Palo Seco:  
                | Humanistas, Geométricas, Grotescas y Neogrotescas.
            li 
              .lista-ol--cuadro__vineta.align-items-center.d-flex: img(src='@/assets/curso/img26.svg' style='width: 14px').m-auto
              p 
                b Tipografías de Escritura (Script):   
                | Caligráficas, Manuales y Góticas.
            li 
              .lista-ol--cuadro__vineta.align-items-center.d-flex: img(src='@/assets/curso/img27.svg' style='width: 16px').m-auto
              p 
                b Tipografías de Fantasía o decorativas:    
                | proponen una reinterpretación fuera de toda norma, de elementos fijos e incorporación de elementos variables de diversa naturaleza.
      .row(titulo="Tipografía digital")
        .col-md-12.mb-4.mb-md-0
          p Gracias a los avances tecnológicos se ha pasado de la fotocomposición a la tipografía digital que se diseña a partir de vectores para ser visualizada en cualquier tipo de pantalla o dispositivo móvil. Los formatos más tradicionales usados en la mayoría de los sistemas operativos están son: “fuente TrueType (.ftt), “Open Type Font” (.otf), Open Type incrustado (.eot) y el Formato de fuente abierta en la <i>web</i> (.woff y .woff2)
            br
            br
            |Las tipografías <i>web</i> son una función del CSS (lenguaje para la composición y estructuración de páginas <i>web</i> HTML o XML) que permite especificar los archivos de tipo de letra que se van a descargar junto con un sitio <i>web</i>, a medida que el usuario acceda a ellos; esto significa que cualquier navegador que admita tipografías <i>web</i> puede disponer de los tipos de letra que el diseñador especifique.
            br
            br
            |Las tipografías <i>web</i> se pueden crear o elegir de los catálogos existentes. Una de las herramientas más populares para la creación de fuentes en la familias tipográficas en la <i>web</i> es MyScriptFont, debido a lo fácil y eficaz que resulta, ya que la mayor parte del trabajo lo realiza la aplicación. Igualmente es posible crear fuentes tipográficas en Adobe Ilustrator.
            br
            br
            |Para la selección de tipografías existentes hay algunos servicios como Google Font, Type Kit de Adobe, Typography y Creative Market. En todos ellos se pueden encontrar tipografías gratuitas o con licencias de pago.

    #t_1_2.titulo-segundo
      h2 1.2 Diseño digital
    p.mb-5 Al ser un área relativamente reciente, las definiciones de este tipo de diseño pueden provenir de diferentes perspectivas, lo que dificulta ofrecer una definición ampliamente consensuada.
    .row.mb-5 
      .col-lg-2.col-md-3.col-sm-4.col-xs-6: img(src='@/assets/curso/img30.svg' style='width:105px').m-auto
      .col-lg-10.col-md-9.col-sm-8.col-xs-6
        ul.lista-ul
          li 
            i.fas.fa-angle-right
            | Puede decirse que, con respecto al diseño gráfico tradicional, el diseño digital nació y se desarrolló para ser usado en la virtualidad de Internet y las aplicaciones digitales. Aun así, esta frase puede dejar por fuera los diseños que se realizan bajo programas informáticos, pero son para el mundo “real”.
    hr
    .row.mb-5 
      .col-lg-2.col-md-3.col-sm-4.col-xs-6: img(src='@/assets/curso/img31.svg' style='width:105px').m-auto
      .col-lg-10.col-md-9.col-sm-8.col-xs-6
        ul.lista-ul
          li 
            i.fas.fa-angle-right
            p También podría entenderse que el diseño digital está más enfocado en los desarrollos para el 
              span.fst-italic marketing digital 
              | y abarca todos los productos que permiten la publicidad digital: 
              span.fst-italic newsletters, banners, 
              |videos, infografías, etc., pero esta definición dejaría por fuera otro tipo de productos que no tienen que ver con la publicidad como la animación, la producción de contenidos digitales, o incluso la fotografía digital (retoque). 
    hr
    .row.mb-5 
      .col-lg-2.col-md-3.col-sm-4.col-xs-6: img(src='@/assets/curso/img32.svg' style='width:105px').m-auto
      .col-lg-10.col-md-9.col-sm-8.col-xs-6
        ul.lista-ul
          li 
            i.fas.fa-angle-right
            p Igualmente se puede designar como diseño digital el enfoque que se encarga de dar solución a problemas reales entre la interacción de las personas y la presencia digital de las empresas (páginas 
              span.fst-italic <i>web</i>
              |).
    p.mb-5 Por tanto, la definición que mejor se ajusta a los contenidos formativos del programa tecnológico “Técnico en integración de contenidos digitales” es la siguiente:
    .row.justify-content-center.mb-5(data-aos="slide-down")
      .col-lg-8
        .cajon.color-primario.bg--1-claro.p-4.mb-4
          p El diseño digital comprende la creación de productos visuales como herramientas principales de los contenidos digitales, ya sea con fines publicitarios, informativos o de entretenimiento; también se encarga de ofrecer soluciones para la mejora de la experiencia de los usuarios en <i>Internet</i>. El diseño digital crea y programa.

    .titulo-color.mb-4
      spam.bg--3.text-white.mb-5.p-2
        | En el siguiente video es posible ampliar la comprensión sobre el concepto de diseño digital.
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/4nRHvBi9afc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video: Introducción al Diseño Digital  
    h3 El diseño web
    p.mb-5 Es un área del diseño digital que se encarga de desarrollar interfaces digitales, sitios y aplicaciones web, utilizando lenguajes específicos como HTML.
    .row.mb-5.justify-content-center(data-aos="slide-down")
      .col-lg-8
        .bloque-texto-c.color-primario.bg--1-claro.p-4
          i.fas.fa-quote-right
          .px-5
            .h5.mb-2 El diseñador 
              span.fst-italic web 
              |tiene la misión de enlazar al usuario con el mundo informativo de manera eficaz y agradable. La hipermedia permite, además de tener acceso a la información, satisfacer los requerimientos y gustos de millones de navegantes. Por lo tanto, es primordial tener un criterio de diseño antes de crear un sitio.
            span (Bustos, p.29)
    p.mb-5 Es común confundir los términos diseño <i>web</i> y desarrollo <i>web</i>, pero ambos tienen propósitos distintos, aunque estén profundamente entrelazados.
    .bg--1-claro.px-4.py-4.rounded.mb-5(data-aos="flip-up")
      .row.align-items-center 
        .col-lg-3: img(src='@/assets/curso/img33.svg')
        .col-lg-9 
          img(src='@/assets/curso/img34.svg' style='width: 38px').mb-3
          p.mb-0 El diseño <i>web</i> cubre las fases del proyecto que se ocupan de la navegación, la usabilidad, la interacción, la arquitectura de la información y de la parte gráfica de la <i>web</i>. Por otra parte, el desarrollo <i>web</i> es la programación necesaria para la construcción del sitio <i>web</i>. Se divide en dos partes que pueden estar o no conectadas, la parte del cliente y la parte del servidor. 
            br
            br
            |En la parte del cliente estaríamos hablando de HTML y CSS, código básico para creación de páginas <i>web</i>, y JavaScript y DOM, para la interacción con el usuario. En la parte del servidor se trabaja con código más complejo, como es PHP, ASP.NET, JSP, etc. Con este código se construye el back-end, la parte de la <i>web</i> que el usuario no ve. Su objetivo es el diseño de bases de datos y asegurar la seguridad de la <i>web</i>. Cuando ambas partes se comunican, se habla de programación cliente-servidor. Esta comunicación permite la interacción del usuario con los contenidos alojados en bases de datos, el registro de nuevo contenido y de cuentas de usuario. 
    p.mb-5 A la hora de diseñar un sitio <i>web</i> se debe tener en cuenta los principios clave para que el usuario al que está dirigido pueda realizar todas las actividades o procesos dispuestos por el diseñador de la <i>web</i> en cuestión. A continuación, se exponen los tres aspectos que se deben tener en cuenta en el diseño <i>web</i> y a los cuales se les conoce como los 
      b principios de diseño <i>web</i>.
    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta bg--gris2")
      .row(titulo="Navegabilidad").px-5
        .col-md-7.mb-4.mb-md-0
          p Es la forma en la que el usuario puede desplazarse por un sitio web, partiendo de la facilidad con puede realizar las acciones que tiene como objetivo la página. 
            br
            br
            |Para ser fácilmente navegable, un sitio web debe proporcionar recursos y estrategias de navegación que faciliten la localización de la información y la orientación para el usuario. Una web navegable debe responder fácilmente a tres preguntas: ¿dónde estoy? ¿dónde he estado? y ¿dónde puedo ir?.

        .col-md-5
          figure
            img(src='@/assets/curso/img36.svg', alt='Texto que describa la imagen')
      .row(titulo="Accesibilidad").px-5
        .col-md-7.mb-4.mb-md-0
          p Se refiere a la capacidad de acceso a la página <i>web</i> y a sus contenidos por la mayor cantidad de personas, independiente de sus conocimientos, capacidades o discapacidades (física, intelectual o técnica), y al margen de los condicionantes técnicos.
            br
            br
            |El principio de accesibilidad es quizá uno de los primeros en enunciarse al crear la <i>web</i>.

        .col-md-5
          figure
            img(src='@/assets/curso/img37.svg', alt='Texto que describa la imagen')
      .row(titulo="Usabilidad").px-5
        .col-md-12.mb-4.mb-md-0
          p Uno de los investigadores más importantes en este campo a nivel mundial, apoya la idea de la usabilidad como signo de calidad en un sitio web y la define como “todos aquellos procedimientos que persiguen mejorar la facilidad de uso para el usuario durante el proceso de navegación'' (Nielsen, 2003). También señala que entre las diversas dimensiones que determinan la usabilidad debe destacarse, por su importancia, la orientación al usuario.
            br
            br
            |Por su parte, Shackel (1991) destaca como aspectos importantes de la usabilidad los siguientes:
          ul.lista-ul--color.color1
            li 
              i.fas.fa-angle-right
              | Eficacia, relacionada con el desempeño en relación con el cumplimiento de las tareas durante la interacción, en términos de celeridad y de errores.
            li 
              i.fas.fa-angle-right
              | Aprendizaje, como el tiempo que requiere un usuario principiante para aprender a utilizar el sistema con un entrenamiento específico.
            li 
              i.fas.fa-angle-right
              | Flexibilidad o adaptación de las tareas a los ambientes diferentes.
            li 
              i.fas.fa-angle-right
              | Actitud relativa a los niveles aceptables de costes humanos en términos de cansancio, molestia, frustración y esfuerzo personal.
          p Según Alcántara, Del Barrio (2016), existen dos facetas relativas al concepto usabilidad: 
            br
            br
            |Una de carácter más funcional relacionada con atributos tales como opciones de navegación visible, navegación consistente, opciones de menú propias, tamaño del sitio web, <i>pop-ups</i> emergentes, información del producto, diseño de estructura, entre otros; y otra más estética, relacionada con el diseño visual y vinculada a las actitudes y emociones.
            br
            br
            |Para  Montaño y Montero (2015) la usabilidad también está referida a los métodos que mejoran la experiencia de uso durante el proceso de diseño o rediseño de un sitio <i>web</i>, por lo cual se convierte en uno de los temas de interés, especialmente al otorgar un valor añadido mediante la gestión de <i>marketing</i>.
          a.boton.color-acento-botones.mb-5.indicador__container(@click="modal1 = true")
            span
              b Reglas de la usabilidad 
            .indicador--click(v-if="mostrarIndicador")
          ModalA(:abrir-modal.sync="modal1")
            figure
              img(src='@/assets/curso/img35.png', alt='Texto que describa la imagen')
    h3 Arquitectura web
    p.mb-5 El diseño y la arquitectura de información de las páginas web son “el resultado de la actividad de clasificar, describir, estructurar y etiquetar los contenidos del sitio”. (Leyva, Alarcón, Barrera & Ortegón, 2017).
      br
      br
      |Antes de proyectar o diseñar una página web, es necesario seguir los lineamientos de la etapa de creación, tal como se observa en la siguiente figura.
    .titulo-sexto.color-acento-contenido
      h5.fw-normal 
        b Figura 6   
        | Lineamientos
    .row.mb-5
      .col-md-6.col-lg.mb-5.mb-lg-0(data-aos="slide-down" data-aos-offset="200" )
        .tarjeta-avatar
          .img1
            img(src='@/assets/curso/img38.svg' alt='AvatarTop')
          .img2
            img(src='@/assets/curso/img41.svg' alt='AvatarTop')
          .tarjeta.color-primario
            .text-white.p-4
              p Es necesario hacer un análisis de la información que contendrá la página. Esto es,  recolectar toda la información posible sobre el contenido; analizar a quién estará dirigida e identificar qué tipo de ideas y valores se quiere valiéndose de herramientas tipográficas, el color y la composición, para que esto se ejecute de una manera simple y precisa. 

      .col-md-6.col-lg.mb-5.mb-lg-0(data-aos="slide-down" data-aos-delay="200" data-aos-offset="400" )
        .tarjeta-avatar
          .img1
            img(src='@/assets/curso/img39.svg' alt='AvatarTop')
          .img2
            img(src='@/assets/curso/img42.svg' alt='AvatarTop')
          .tarjeta.color-secundario
            .p-4
              p Los objetivos fijados deben estar definidos en sí lo que se busca es educar, informar, o simplemente conducir a una acción de compra, donde quizá la marca ya sea conocida y no necesite mas preámbulos
      .col-md-6.col-lg.mb-5.mb-lg-0(data-aos="slide-down" data-aos-delay="400" data-aos-offset="600")
        .tarjeta-avatar
          .img1
            img(src='@/assets/curso/img40.svg' alt='AvatarTop')
          .img2
            img(src='@/assets/curso/img43.svg' alt='AvatarTop')
          .tarjeta.color-acento-botones
            .p-4
              p Para lograr crear una estructura con toda la información y elementos recopilados es necesario conocer también herramientas de diseño como el <i>Wireframe</i> y el <i>Mockup</i>; estos bocetos o maquetas permiten visualizar de manera más clara todos los elementos que se incluirán (texto, imágenes, botones, hipervínculos), incluso las páginas con las que se enlazara el contenido, y hacerse una idea cercana al resultado final.
              .row.justify-content-center.m-auto
                .col-6
                  a.boton.color-acento-contenido.mb-5.indicador__container.rounded-pill(@click="modal2 = true")
                    h4.mb-0 Wireframe
                    .indicador--click(v-if="mostrarIndicador")
                .col-6
                  a.boton.color-acento-contenido.mb-5.indicador__container.rounded-pill(@click="modal3 = true")
                    h4.mb-0 Mockup
                    .indicador--click(v-if="mostrarIndicador")
    ModalA(:abrir-modal.sync="modal2")
      .borde--amarillo.p-5 
        .bg--3.rounded-pill.wfc.px-4.py-2.mb-5
          h4.mb-0.text-white Wireframe
        .row.mb-5
          .col-lg-8
            p Prototipo de página web o de una aplicación que se realiza en una plantilla y que no incluye color, tipografía, imágenes o gráficos. Puede realizarse a mano o en el computador y no contempla la funcionalidad de la web.
              br
              br
              |Antes  de la elaboración del layout (distribución y forma), se crea este esquema básico que permitirá entender cómo quedará el producto final. Así, pueden ser verificados errores o aspectos negativos; el wireframe se modifica las veces necesarias hasta llegar al resultado deseado.
          .col-lg-4: img(src='@/assets/curso/img45.svg')

    ModalA(:abrir-modal.sync="modal3")
      .borde--amarillo.p-5 
        .bg--3.rounded-pill.wfc.px-4.py-2.mb-5
          h4.mb-0.text-white Mockup
        .row.mb-5
          .col-lg-8
            p Un mockup es un bosquejo o prototipo que se utiliza en la fase final del desarrollo de webs y aplicaciones y sirve para exhibir o probar un diseño y para conocer la opinión del cliente, los usuarios o consumidores.
              br
              br
              |Esta maqueta, a diferencia del wireframe, sí integra todos los elementos que contendrá el diseño, acercándose mucho al diseño final. 
              br
              br
              |Un mockup clásico es estático. Sin embargo, las modernas herramientas de maquetación permiten la integración de funciones simples como los enlaces, de modo que, dependiendo de la complejidad, pueden clasificarse como diseños de mediana a alta fidelidad y bordear los prototipos. A diferencia de la clásica maqueta estática, los prototipos son siempre interactivos y contienen la mayoría de las funciones de la página web o aplicación planificada.
          .col-lg-4.align-items-end.d-flex: img(src='@/assets/curso/img46.svg')
    p.mb-5 La arquitectura <i>web</i> incluye también pensar en si el resultado final será un sitio que pueda resolver las necesidades de negocios y servir mejor a las de los clientes. El arquitecto web diseña y coordina el desarrollo de sitios web, ya que estos son una compleja integración de distintos sistemas (bases de datos, servidores, redes, componentes de <i>backup</i> y seguridad, etc.)
      br
      br
      | El desarrollo web requiere de protocolos de comunicación entre dispositivos hardware, conocimientos de lenguajes programación y estructura de bases de datos, el protocolo TCP/IP, el lenguaje HTML y muchos otros.
    .row.mb-5.justify-content-center(data-aos="zoom-in-up")
      .col-lg-9
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/img44.jpg')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 Las piezas esenciales de la arquitectura <i>web</i> son principalmente: servidores, bases de datos, redes, HTML, componentes de <i>backup</i> y seguridad, inteligencia de contenidos <i>web</i>, organización de componentes y organización de las llamadas a las páginas o <i>Interlinking</i>.  
    p.mb-5 El concepto de HTML es la pieza más importante que atañe a los contenidos de este programa. Se trata de una sigla que corresponde a Hyper Text Markup Language, es decir, Lenguaje de Marcas de Hipertexto, que podría ser traducido como Lenguaje de Formato de Documentos para Hipertexto. Es el principal lenguaje de marcación que se utiliza para el desarrollo de páginas web.
      br
      br
      |Una definición bastante descriptiva es la que se encuentra en la web Next U (s.f.), que habla de que el HTML es un lenguaje abstracto que usan las aplicaciones para representar documentos (se les llama documentos a instancias completas, como lo son las páginas web) y que puede ser transmitido fácilmente por algún medio, como Internet. Los navegadores de  Internet. procesan e interpretan documentos descritos en HTML usando un analizador de HTML.
    .affter1.mb-5
      .bloque-texto-c.color-secundario.px-4.py-4.align-items-center
        .contenido-bloque.m-auto.d-flex
          .row.align-items-center
            .col-lg-2.col-md-3.col-sm-4.col-xs-6
              img(src='@/assets/curso/img47.svg' style='width: 150px').m-auto
            .col-lg-10.col-md-9.col-sm-8.col-xs-6
              p.mb-0  El lenguaje HTML está definido por lo que se llama etiquetas, cuyo nombre se delimita usando los símbolos < y >, de la siguiente forma: 
                b &lt;etiqueta&gt;
                |. Dichas etiquetas se utilizan para describir algo que se quiere representar en una página web. 
                b Por ejemplo: &lt;title &gt;"Internet básico, email, descargas y compras en línea &lt;/title/gt; En este ejemplo, la etiqueta "&lt;title&gt;"se usa para indicar que lo que se pondrá a continuación es el título de la página 
                span.fst-italic web 
                |(https://www.nextu.com/blog/que-es-html/9).
    p.mb-5 En los temas tratados en el Componente Formativo 2 se ampliará la información respecto a este tema y otros aspectos que tienen que ver con el desarrollo web desde el punto de vista técnico.
    h3 Experiencia de usuario (UX)
    p.mb-5 Según Bigné, Ruiz & Andreu (2004), la experiencia del usuario se refiere a los factores que ejercen influencia en la exploración, la satisfacción y las intenciones de comportamiento o transacciones electrónicas futuras, tanto personales como externas que pueden afectar la experiencia del usuario en una página web.
      br
      br
      |Aunque guarda relación con la usabilidad, el diseño de la experiencia de usuario abarca más aspectos como lo afirma Nielsen (2003):
    .affter2.mb-5
      .bloque-texto-c.bg--1-claro.px-4.py-4.align-items-center
        .contenido-bloque.m-auto.d-flex
          .row.align-items-center
            .col-lg-2.col-md-3.col-sm-4.col-xs-6
              img(src='@/assets/curso/img48.svg' style='width: 150px').m-auto
            .col-lg-10.col-md-9.col-sm-8.col-xs-6
              p.mb-0 La UX como concepto integrador abarca todos los aspectos de la interacción entre el usuario final y la compañía, sus servicios y productos. En ella sobresale el análisis de la experiencia de interacción no sólo como fenómeno interactivo entre usuario y producto, sino también entre usuario y proveedor. Asimismo, el primer requisito para una UX ejemplar es encontrar las necesidades exactas del cliente. Después vienen la sencillez y la elegancia que generan los productos fáciles de usar. La verdadera experiencia del usuario va mucho más allá de dar a los clientes lo que ellos dicen que quieren o proporcionar una lista de verificación. A fin de alcanzar la UX de alta calidad en la oferta de una empresa, debe haber una fusión sin fisuras de los servicios de múltiples disciplinas, incluyendo la ingeniería, el marketing, el diseño gráfico e industrial y el diseño de interfaz.
    p.mb-5 Para crear una buena experiencia al usuario, el diseñador debe comprenderla y diseñarla de principio a fin, y no solo desde el aspecto estético y funcional, sino también desde la psicología cognitiva y las necesidades del usuario, al igual que desde los requerimientos del negocio. Los pensamientos de los clientes sobre un producto y/o servicio suelen estar influenciados por las experiencias y sensaciones que tuvieron mientras lo usaban. 
      br
      br
      | Una buena experiencia de usuario produce clientes satisfechos que estarán dispuestos a pagar más por productos y servicios de calidad.
    .col-lg-6
      a.anexo.mb-4.mb-lg-0(href="https://www.crehana.com/co/blog/desarrollo-web/reglas-diseno-ux/" target="_blank")
        .anexo__icono
          img(src="@/assets/template/icono-link.svg")
        .anexo__texto
          p 
            b Diseño UX 
            | Para conocer en profundidad las reglas del UX, se puede consultar la información en el artículo al respecto de la web de formación virtual Crehana.com.  
    h3 Diseño de contenidos 
    .row.mb-5
      .col-lg-6
        p.mb-5 Ahora bien, un aspecto a tener en cuenta, y aunque no se desarrollará con profundidad, es el diseño de contenidos. Sarah Winters, fundadora de Content Design of London, lo define como: 
        .cajon.color-primario.bg--1-claro.p-4.mb-4
          p El diseño de contenidos es un planteamiento que comienza con la identificación de la necesidad del usuario para crear un conjunto de textos y elementos visuales que proporcionen una solución del mejor modo posible. El diseño de contenidos piensa más en grande y no se limita solo a la escritura de contenidos útiles y funcionales, sino que identifica la mejor manera de presentarlos para satisfacer las expectativas y necesidades del usuario, ya sea mediante una infografía, un vídeo, un gráfico, un folleto o un artículo.
      .col-lg-6: img(src='@/assets/curso/img49.jpg')
    h3 Software y herramientas de diseño digital
    p.mb-5 Las herramientas de diseño son elementos, formatos, medios o programas de computador que se pueden usar para diseñar. Pueden influir en el proceso de producción, expresión y percepción de las ideas de diseño y, por lo tanto, deben aplicarse con habilidad. 
    .row.mb-5.justify-content-center
      .col-lg-8
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/img50.jpg')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 Las nuevas ideas pueden surgir experimentando con herramientas y métodos actuales facilitados por la tecnología.
    p.mb-5 La velocidad en la que avanza la tecnología hace compleja la permanente actualización de las herramientas para todo lo que se refiere al diseño de contenidos para Internet. 
    .col-lg-6.mb-5
      a.anexo.mb-4.mb-lg-0(href="https://graffica.info/herramientas-para-el-disenador-digital" target="_blank")
        .anexo__icono
          img(src="@/assets/template/icono-link.svg")
        .anexo__texto
          p 
            b Herramientas de diseño
            | Visita la siguiente página y estudia las 10 herramientas fundamentales para el diseñador digital. 
    .row.mb-5
      .col-lg-4.align-items-center.d-flex.mb-0: img(src='@/assets/curso/img51.png')
      .col-lg-8
        p.mb-4 Igualmente, otros softwares usados para el diseño gráfico digital son:
        .row
          .col-lg-4
            .iconos.d-flex.mb-2.align-items-center(data-aos="slide-down" data-aos-delay="100")
              img(src='@/assets/curso/img52.svg' style='width: 85px') 
              h4.mb-0.ms-3 Photoshop
            .iconos.d-flex.mb-2.align-items-center(data-aos="slide-down" data-aos-delay="200")
              img(src='@/assets/curso/img53.png' style='width: 85px') 
              h4.mb-0.ms-3 Illustrator
            .iconos.d-flex.mb-4.align-items-center(data-aos="slide-down" data-aos-delay="300")
              img(src='@/assets/curso/img54.svg' style='width: 85px') 
              h4.mb-0.ms-3 Indesign
          .col-lg-4 
            .iconos.d-flex.mb-2.align-items-center(data-aos="slide-down" data-aos-delay="400")
              img(src='@/assets/curso/img55.svg' style='width: 85px') 
              h4.mb-0.ms-3 Gimp
            .iconos.d-flex.mb-2.align-items-center(data-aos="slide-down" data-aos-delay="500") 
              img(src='@/assets/curso/img56.svg' style='width: 85px')
              h4.mb-0.ms-3 Inkscape
            .iconos.d-flex.mb-2.align-items-center(data-aos="slide-down" data-aos-delay="600")
              img(src='@/assets/curso/img57.svg' style='width: 85px') 
              h4.mb-0.ms-3 Canva
          .col-lg-4 
            .iconos.d-flex.mb-2.align-items-center(data-aos="slide-down" data-aos-delay="700")
              img(src='@/assets/curso/img58.svg' style='width: 85px') 
              h4.mb-0.ms-3 Fotojet
            .iconos.d-flex.mb-2.align-items-center(data-aos="slide-down" data-aos-delay="800") 
              img(src='@/assets/curso/img59.svg' style='width: 85px')
              h4.mb-0.ms-3 Fotor











</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    modal1: false,
    modal2: false,
    modal3: false,
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

<style lang="sass" scoped>
.lista-ol--cuadro__vineta
  background-color: $color-primario

.rounded
  border-radius: 1000px 0px 0px 0px !important
.color1
  li
    i:first-of-type
      color: $color-primario

.tarjeta-avatar
  .img1
    transition: opacity 0.3s
    z-index: 99
    position: absolute
    left: 50%
    top: 0
    transform: translateX(-50%)
    display: block
    width: 150px
    margin: 0 auto
    opacity: 1
  .img2
    position: absolute
    left: 50%
    top: 0
    transform: translateX(-50%)
    width: 150px
    margin: 0 auto
    opacity: 0
    transition: opacity 0.3s
  &:hover
    .img1
      opacity: 0
    .img2
      opacity: 1
.borde--amarillo
  border: 3px solid $color-acento-botones
.wfc
  width: fit-content
.affter1
  .bloque-texto-c:after
    background-color: $color-primario
.affter2
  .bloque-texto-c:after
    background-color: $color-secundario
.vineta
  position: relative
  background-color: #DDFFA7
  border-radius: 20px
  border: 4px solid #7E9EA1
  bottom: 0
  &:after
    content: ""
    position: absolute
    width: 150px
    height: 150px
    z-index: 99
    background-image: url("../assets/curso/img126.svg")
    background-size: auto
    background-position: center
    background-repeat: no-repeat
    bottom: 0
    transform: translateY(78%)
.vineta_fondo
  background-image: url('../assets/curso/img121.svg')
  width: 100%
  background-size: auto
  background-position: bottom
  background-repeat: no-repeat
  min-height: 700px
.tarjeta1
  border-radius: 20px
  position: relative
  &:before
    content: ""
    position: absolute
    height: 100%
    width: 85px
    top: 0
    left: 0
    border-radius: 20px 0px 0px 20px
    background-color: $color-primario
  &:after
    content: ""
    position: absolute
    height: 100%
    width: 85px
    top: 0
    right: 0
    border-radius: 0px 20px 20px 0px
    background-color: $color-primario
.color-verde
  background-color: $color-secundario
</style>
