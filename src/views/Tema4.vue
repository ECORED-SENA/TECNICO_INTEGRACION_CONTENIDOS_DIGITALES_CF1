<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span 4
      h1 Dirección de arte
    .row.mb-5
      .col-lg-6
        p La dirección de arte está profundamente vinculada al sector del <i>marketing</i> y la publicidad, hace parte del diseño y tiene una enorme responsabilidad al llenar de significado a la imagen y por ende, a los productos audiovisuales.
          br
          br
          span.azul--3 
            | El director de arte es un comunicador que usa la estética como herramienta clave en el desarrollo de las ideas y de la cual parte para luego converger las distintas disciplinas en un concepto visual: 
          |transmitir a través de la imagen, no de las palabras. De esta manera, se crea un concepto que está en todo lo que se ve, logrando efectividad y minimizando los elementos distractores, que de manera conjunta se analizan con otros profesionales como el redactor publicitario, el guionista, entre otros.

      .col-lg-6: img(src='@/assets/curso/img98.jpg')
    .row.mb-5.justify-content-center
      .col-lg-8
          .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5
            .bloque-texto-g__img(
              :style="{'background-image': `url(${require('@/assets/curso/img99.jpg')})`}"
            )
            .bloque-texto-g__texto.p-4
              p.mb-0 El director de arte posee conocimientos en creatividad, redacción, narración, psicología del color, iluminación, fotografía, tipografía e ilustración, escenografía y vestuario, todo basado en los fundamentos del arte y su historia . 
    p.mb-5 El director de arte se consideraba como un realizador de ideas, sin embargo su trabajo en la actualidad se centra en aportar un concepto estético a las mismas.
      br
      br
      |Para lograr comunicar lo que se quiere, 
      b el director de arte debe tener en cuenta los distintos elementos que pertenecen y componen la escena, 
      | fijándose en los grandes y pequeños detalles que serán registrados por la cámara al momento de la grabación. Aquí el director de arte construye una estética determinada al servicio de un propósito.
    p.mb-5 El siguiente video aporta la información necesaria para entender los componentes de la dirección de arte.
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/wa9IzedlgFU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video: ¿Qué es la dirección de arte?



</template>

<script>
export default {
  name: 'Tema4',
  data: () => ({
    // variables de vue
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
