<template lang="pug">
.btns
  img(src='@/assets/curso/info-fondo.svg', alt='Texto que describa la imagen')
  .btns__item(
    v-for="(boton, index) in botones"
    :style="getStyles(boton, index)"
    @mouseover="hover = index"
    @mouseleave="hover = null"
  )
    .indicador--hover(v-if="index === 0 && indicador")
    .btns__text.p-5(v-if="index === hover")  
      h3.mb-3 {{boton.titulo}}
      p {{boton.texto}}

</template>

<script>
export default {
  name: 'BotonesB',
  data: () => ({
    indicador: true,
    hover: null,
    size: '14%',
    botones: [
      {
        img: require('@/assets/curso/img85.svg'),
        img_h: require('@/assets/curso/img86.svg'),
        pos_x: '1.7%',
        pos_y: '50.5%',
        titulo: 'Storyboard animado',
        texto:
          'Pueden ser bocetos individuales con el fin de crear sensación de tiempo y movimiento. Si se le añade música y diálogo, las animaciones pueden dar un sentido de flujo visual y del tiempo mucho mayor.',
      },
      {
        img: require('@/assets/curso/img87.svg'),
        img_h: require('@/assets/curso/img88.svg'),
        pos_x: '25.5%',
        pos_y: '2%',
        titulo: 'Storyboard digimatics',
        texto:
          'Sustituyen los bocetos con imágenes digitales unidas entre sí con el fin de crear sensación de tiempo y movimiento. Es parecido al storyboard animado y se utiliza en la publicidad para visualizar anuncios. Con ellos se pueden realizar películas de prueba.',
      },
      {
        img: require('@/assets/curso/img89.svg'),
        img_h: require('@/assets/curso/img90.svg'),
        pos_x: '59.7%',
        pos_y: '2%',
        titulo: 'Storyboard de miniaturas',
        texto:
          'Suele ser pequeño y reunido en una sola hoja de papel. Se dibuja mucho más rápido que el resto de variedades de storyboard y utiliza garabatos en el panel de acciones, así como bocetos antes de crear los detalles.',
      },
      {
        img: require('@/assets/curso/img91.svg'),
        img_h: require('@/assets/curso/img92.svg'),
        pos_x: '84.7%',
        pos_y: '50.5%',
        titulo: 'Storyboard tradicional',
        texto:
          'Son dibujos a lápiz o boli creados por un artista bajo la supervisión del productor o director. Seguirá las pautas indicadas por el cineasta, el cliente o productor, aunque es habitual que sea el director quien cree su propio storyboard al gusto.',
      },
    ],
  }),
  watch: {
    selected() {
      this.indicador = false
    },
    hover() {
      this.indicador = false
    },
  },
  methods: {
    getStyles(boton, index) {
      const image = this.hover === index ? boton.img_h : boton.img
      return {
        'background-image': `url(${image})`,
        top: boton.pos_y,
        left: boton.pos_x,
        width: this.size,
        'padding-top': this.size,
      }
    },
  },
}
</script>

<style lang="sass" scoped>
.btns
  position: relative
  &__item
    position: absolute
    background-size: cover
    border-radius: 50%
    cursor: pointer
    transition: background-image 0.2s ease-in-out
  &__text
    border-radius: 20px
    position: absolute
    bottom: 100%
    left: 50%
    background-color: #E5EBEC
    max-width: 500px
    font-weight: bold
    text-align: center
    z-index: 100
    line-height: 1.2em
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.3)
    transform: translate(-50%)
    p
      line-height: 1.2em
</style>
