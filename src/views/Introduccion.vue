npm run
<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    p.mb-5 El programa de formación tecnológica en Integración de Contenidos Digitales pretende otorgar al aprendiz SENA los conocimientos necesarios para desarrollar estrategias de planeación y producción de contenidos digitales y multimedia que las Mipymes del país requieren en el contexto de la cuarta revolución industrial, tal como se puede apreciar en el siguiente video.
      br
      br
      |Este componente iniciará con la conceptualización del diseño, desde la perspectiva de las composiciones gráficas y digitales, con la que conseguirá crear imágenes. Posteriormente, se le entregará información que le posibilite la elaboración de piezas audiovisuales, para que finalmente pueda integrar ambos productos en estrategias digitales que consigan la operatividad, funcionalidad, visibilidad, o cualquier otro proceso necesario que contribuya a la conversión digital de las empresas del país.
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/UxbAz3Z0KMQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video: Contenido digital
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped>
.introduccion
</style>
