<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Guion audiovisual
    p.mb-5 El guion es el texto que define la estructura de una producción audiovisual; es un discurso escrito, que se transforma en imágenes y sonido. Especifica por escrito lo que va a suceder el día de la grabación y lo que el espectador verá y escuchará. De esta manera, registra el orden y los tiempos en los que irán apareciendo en pantalla las narraciones, las imágenes y los recursos gráficos que alimentan lo visto.
    .row.mb-5.justify-content-center
      .col-lg-9
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/img84.jpg')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 El guion se convierte en la guía escrita del producto audiovisual dentro de los procesos de pregrabado, producción y realización que permiten construir la narrativa audiovisual en su totalidad. Los guiones se editan todo el tiempo, se reescriben una y otra vez; de ahí la importancia de hacer un ejercicio riguroso de lectura y escritura previa que defina y organice el contenido audiovisual.
    p.mb-5 Este debe estar acompañado de un guion gráfico o <i>storyboard</i>, en el que se observa la secuencia del producto en grupos de ilustraciones que funcionan como la previsualización de los contenidos que se van a realizar.
      br
      br
      |Aunque existen muchos tipos, cualquier producción audiovisual debería contar al menos con dos tipos de ellos, previos al día de grabación, ya que permite minimizar el desperdicio de presupuesto y tiempo. 
    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta bg--gris3")
      .row(titulo="Guion cinematográfico")
        .col-md-3
          figure
            img(src='@/assets/curso/img93.svg' )
        .col-md-8.mb-4.mb-md-0
          p Dependiendo del ámbito de trabajo también se pueden llamar <i>screenplay, script o teleplay</i>. Este tipo de guion expresa en palabras como será el trabajo audiovisual resultante. Debido a su importancia debe ser muy detallado. Al finalizarlo sirve para negociar lo que se acabará haciendo cuando las diversas partes de la producción tienen ideas diferentes sobre cómo llevar a término el proyecto. 
            br
            br
            |Las siguientes imágenes permiten apreciar la diferencia entre guion cinematográfico y el guión literario.
          .row
            .col-md-6 
              a.boton.color-acento-botones.mb-5.indicador__container.rounded-pill(@click="modal1 = true")
                span.h5.mb-0 Guion cinematográfico
                .indicador--click(v-if="mostrarIndicador")  
            .col-md-6 
              a.boton.color-acento-botones.mb-5.indicador__container.rounded-pill(@click="modal2 = true")
                span.h5.mb-0 Guion literario
                .indicador--click(v-if="mostrarIndicador") 
        ModalA(:abrir-modal.sync="modal1")
          figure
            img(src='@/assets/curso/img118.png' )    
        ModalA(:abrir-modal.sync="modal2")    
          figure
            img(src='@/assets/curso/img119.png' )    
        ModalA(:abrir-modal.sync="modal3")    
          figure
            img(src='@/assets/curso/img120.png' )    
      .row(titulo="Guion literario")
        .col-md-3
          figure
            img(src='@/assets/curso/img94.svg' )
        .col-md-8.mb-4.mb-md-0
          p Describe con palabras todo lo que es esencial para entender cómo será el contenido audiovisual. Este  no está redactado de forma literaria sino que describe de manera clara y precisa la información necesaria. Es un elemento descriptivo y este debe ser  simple y suficiente para imaginar qué y cómo pasará la acción.
            br
            br
            |Están  pensados en términos visuales, desde el punto de vista de las escenas: la acción, el diálogo y de la descripción de los espacios donde se desarrollan. Se elabora en línea  cronológica y es uno de los tipos de guion más relevante.
      .row(titulo="Guion técnico")
        .col-md-3
          figure
            img(src='@/assets/curso/img95.svg' )
        .col-md-8.mb-4.mb-md-0
          p También llamado <i>shooting script</i> es desarrollado específicamente para el formato de video y define lo audiovisual desde el punto de vista de las secuencias. Suele basarse en  el guion literario y es el encargado de traducir en imágenes concretas la historia ya desarrollada.
            br
            br
            |A diferencia del guion literario, este describe lo audiovisual definiéndolo en el lenguaje propio de  la  imagen. Esto es de gran utilidad  a la hora de grabar como cuando se editan las imágenes. 
      .row(titulo="Guion ilustrado")
        .col-md-3
          figure
            img(src='@/assets/curso/img96.svg' )
        .col-md-8.mb-4.mb-md-0
          p El más famosos de los tipos de guion, conocido como <i>storyboard</i>, se diferencia del guion cinematográfico porque, tal y como indica su nombre, es un compilado de imágenes que pueden componer con diferentes técnicas visuales (dibujo, ilustración, <i>collage</i>, etc.) que nos ayudan a describir el futuro de nuestro contenido audiovisual.
            br
            br
            |Es una herramienta muy eficiente para visualizar el video y se trata de un paso casi imprescindible en las obras de animación. También es importante para coordinar el rodaje con el concepto de arte, por el hecho de desarrollar los decorados físicos como para crearlos mediante la composición digital. Así mismo, los efectos especiales suelen requerir de un guion visual previo, ya que la comunicación entre director, operadores de cámara y especialistas es algo compleja, este guion facilita la comunicación entre las partes.
            br
            br
            |Los <i>storyboards</i> más habituales son los del <i>american style</i>. Básicamente consisten en un cómic sencillo, con viñetas uniformes y distribuidas en una parrilla regular que ocupa la mayor parte de la página. A diferencia de los cómics clásicos, los diálogos se acostumbran a poner fuera del recuadro donde está la imagen.
          a.boton.color-acento-botones.mb-5.indicador__container.rounded-pill(@click="modal3 = true")
              span.h5.mb-0 Guion ilustrado
              .indicador--click(v-if="mostrarIndicador") 
      .row(titulo="Escaleta")
        .col-md-3
          figure
            img(src='@/assets/curso/img97.svg' )
        .col-md-8.mb-4.mb-md-0
          p Es una forma de guion mucho más simple que nos aproxima a tener una idea de lo audiovisual.  En una lista de las escenas o situaciones que se tienen que grabar se realiza  una breve descripción. Es útil como borrador del guion literario, ya que la descripción que contiene, ayuda a establecer un primer borrador de la estructura final del video.
            br
            br
            |Es el guion mínimo que se debería utilizar para cualquier producción audiovisual, por pequeña que sea esta. Es importante que se prevea la idea inicial de la escaleta y su desarrollo como un proceso unitario, con una coherencia de principio a fin.   
    #t_3_1.titulo-segundo
      h2 3.1 <i>Storyboard</i> o guion gráfico
    p.mb-5 Es un documento en el que se organiza secuencialmente una serie de ilustraciones o imágenes con el fin de explicar una narrativa audiovisual. Suele usarse como parte de la planificación pues aquí cada escena y plano ya está establecido y por tanto facilita el proceso de producción. Cada imagen o cuadro va acompañado de un texto descriptivo de lo que sucede en esa imagen.
    .col-lg-6.mb-5
      a.anexo.mb-4.mb-lg-0(:href="obtenerLink('/downloads/storyboard.pdf' )" target="_blank")
        .anexo__icono
          img(src="@/assets/template/icono-link.svg")
        .anexo__texto
          p 
            b El <i>Storyboard</i>.  
            | En el siguiente enlace se describe en detalle la información para realizar un <i>storyboard</i>. 
    p.mb-5 El <i>story</i> tiene diversos tipos de formatos que facilitan la comprensión visual de los planos y movimientos de cámara en las escenas, esto según el proyecto, para esto los más utilizados son:
    .titulo-sexto.color-acento-contenido
      h5.fw-normal 
        b Figura 9 
        | Tipos de <i>storyboards</i>

    .tarjeta.tarjeta--gris.p-5
      .row.justify-content-center
        .col-md-8
          BotonesB

</template>

<script>
import BotonesB from '../components/BotonesB.vue'
export default {
  name: 'Tema3',
  components: {
    BotonesB,
  },
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

<style lang="sass" scoped></style>
