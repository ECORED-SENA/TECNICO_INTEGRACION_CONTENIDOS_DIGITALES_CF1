<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Lenguaje audiovisual
    p.mb-5 Está compuesto por una serie de elementos considerados propiamente signos (escala de planos, composición, color, etc.) cuyo valor es inmutable y denotativo y otros elementos principalmente connotativos que varían constantemente y que movilizan  el subconsciente, según reseñaba Eisenstein en el libro "La forma del cine".
      br
      br
      |Para Eisenstein (1999), el lenguaje audiovisual está compuesto por un grupo de símbolos y unas claras normas de utilización. También contiene elementos morfológicos, una gramática única y elementos estilísticos determinados. Sus características generales se explican en la siguiente figura.
    .titulo-sexto.color-acento-contenido
      h5.fw-normal 
        b Figura 7 
        | Características del lenguaje audiovisual
    .row.mb-5(data-aos="slide-down")
      .col-md-6.col-lg.mb-5.mb-lg-0(data-aos="slide-down" data-aos-offset="200" )
        .tarjeta-avatar
          img(src='@/assets/curso/img60.svg' alt='AvatarTop')
          .tarjeta.color-primario
            .text-center.p-4
              p 
                b Sistema de comunicación multisensorial, visual y auditivo donde los contenidos icónicos prevalecen sobre los verbales.
      .col-md-6.col-lg.mb-5.mb-lg-0(data-aos="slide-down" data-aos-offset="200" )
        .tarjeta-avatar
          img(src='@/assets/curso/img61.svg' alt='AvatarTop')
          .tarjeta.color-acento-botones 
            .text-center.p-4
              p 
                b Promueve un procesamiento global de la información que proporciona al receptor una experiencia unificada.
      .col-md-6.col-lg.mb-5.mb-lg-0(data-aos="slide-down" data-aos-offset="200" )
        .tarjeta-avatar
          img(src='@/assets/curso/img62.svg' alt='AvatarTop')
          .tarjeta.color-primario
            .text-center.p-4
              p 
                b Es un lenguaje sintético que origina un encadenamiento de sus elementos, que sólo tienen sentido si se consideran en conjunto.
      .col-md-6.col-lg.mb-5.mb-lg-0(data-aos="slide-down" data-aos-offset="200" )
        .tarjeta-avatar
          img(src='@/assets/curso/img63.svg' alt='AvatarTop')
          .tarjeta.color-acento-botones 
            .text-center.p-4
              p 
                b Moviliza la sensibilidad antes que el intelecto, en un mar de afectividad que condicionan los mensajes cognitivos.
    p.mb-5 Igualmente, los teóricos del tema consideran diversos aspectos que componen el lenguaje audiovisual, los cuales se pueden apreciar en el siguiente video.
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/X7QbvXPi8Zs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video: Lenguaje Audiovisual
    p.mb-5 Al tratarse de un tema extenso, técnico y con muchos elementos, es necesario consultar el siguiente documento donde se encuentran todos los elementos que van a permitir la construcción de una producción audiovisual. 
      br
      br
      | Este anexo 
      b “Breve introducción al lenguaje audiovisual” 
      |está editado por la Junta de Castilla y León (España) y detalla de manera suficiente, todos los componentes del lenguaje audiovisual. A partir de la revisión del documento se propondrán actividades prácticas que permitan una mejor comprensión.
    .col-lg-6.mb-5
      a.anexo.mb-4.mb-lg-0(:href="obtenerLink('/downloads/introduccion_lenguaje_audiovisual.pdf')" target="_blank")
        .anexo__icono
          img(src="@/assets/template/icono-link.svg")
        .anexo__texto
          p 
            b Introducción al lenguaje audiovisual.
    .row.mb-5
      .col-lg-6.mb-5: img(src='@/assets/curso/img64.jpg')(data-aos="zoom-in-up" )
      .col-lg-6.mb-5
        p Ahora bien, cuando se habla de géneros en el medio audiovisual, normalmente se refiere a la ficción, al publicitario, el docudrama, el informativo y el de entretenimiento. 
          br
          br
          |El formato es la manera de aplicar el género. Cuando se determina el género se debe también decidir el tipo de formato que más le 
          span.azul--3 
            |convenga al contenido audiovisual; es aquí cuando se elige entre una docuserie, un <i>reality show</i>, un reportaje, o la 
          |tradicional novela, entre otros formatos, que nacen con las nuevas necesidades actuales del consumidor. 
          br
          br
          |La industria audiovisual actual se desarrolla a una velocidad sin igual y, atendiendo a la demanda de la audiencia, crea y se reinventa con nuevos productos híbridos que deben irse incorporando por los nuevos estudios del lenguaje audiovisual, sin embargo  aquí se presenta una breve clasificación de ellos.
    TabsB.color-acento-contenido.mb-5
      .py-4.py-md-5(titulo="Género ficción" :icono="require('@/assets/curso/img65.svg')")
        .row
          .col-md-6.mb-4.mb-md-0
            h4 Género ficción
            p Es una historia inventada que se puede presentar o adaptar a un formato de comedia, miniserie o película, o algún nuevo formato digital como <i>docu game, docu show, psico show</i>, una micronarrativa de instagram.
        
          .col-md-6
            figure
              img(src='@/assets/curso/img70.svg' alt='Imagen')
      .py-4.py-md-5(titulo="Género publicitario" :icono="require('@/assets/curso/img66.svg')")
        .row
          .col-md-6.mb-4.mb-md-0
            h4 Género publicitario
            p La finalidad es persuadir; debe tener una corta duración y permanencia efímera. Se puede representar como comerciales, televentas, videos, noticia publicitaria o <i>publicity</i>, patrocinios en redes sociales, programas de entretenimiento, etc.
        
          .col-md-6
            figure
              img(src='@/assets/curso/img72.svg' alt='Imagen')
      .py-4.py-md-5(titulo="Género docudrama" :icono="require('@/assets/curso/img67.svg')")
        .row
          .col-md-6.mb-4.mb-md-0
            h4 Género docudrama
            p Se ocupa de historias efímeras, no necesariamente fieles a la realidad, primando el espectáculo y convirtiendo al espectador en un <i>voyeur</i>. Algunos de los formatos de este género son el <i>reality show</i>, el <i>talk show</i>, la <i>docuserie</i>, la cámara oculta, los <i>celebrity shows</i>, etc.
        
          .col-md-6
            figure
              img(src='@/assets/curso/img73.svg' alt='Imagen')
      .py-4.py-md-5(titulo="Género informativo " :icono="require('@/assets/curso/img68.svg')")
        .row
          .col-md-6.mb-4.mb-md-0
            h4 Género informativo 
            p Tienen como referencia hechos que han sucedido realmente, podríamos pensar que es también un documental. Entre los formatos de este género podemos encontrar el informativo diario clásico televisivo y de canales digitales.
        
          .col-md-6
            figure
              img(src='@/assets/curso/img71.svg' alt='Imagen')
      .py-4.py-md-5(titulo="Género de entretenimiento" :icono="require('@/assets/curso/img69.svg')")
        .row
          .col-md-6.mb-4.mb-md-0
            h4 Género de entretenimiento
            p Tiene que ver con  la competición, la exhibición o el humor. Se suele adoptar formatos como los concursos de azar como los <i>quiz shows o games shows</i>,  también el humor como <i>sketches</i>, comedia en vivo o <i>stand-up comedy</i>, videos caseros por plataformas como <i>Kwai o TikTok</i>, o  de acontecimientos que se transmiten en directo ya sea por canales tradicionales o digitales.
        
          .col-md-6
            figure
              img(src='@/assets/curso/img74.svg' alt='Imagen')
    p.mb-5 De igual manera, hoy en día existen diversos formatos audiovisuales para <i>Internet</i> entre los que se destaca el video. Sin embargo, hay un sin número de formatos más que posibilitan la entrega de contenidos y que hacen parte de las estrategias digitales. Algunos de los más relevantes se exponen en la siguiente figura.
    .titulo-sexto.color-acento-contenido
      h5.fw-normal 
          b Figura 8 
          | Formatos audiovisuales para <i>Internet</i>
    .row.mb-5(data-aos="slide-down")
      .col-lg-6
        .tarjeta.azul--2.p-4.mb-3
          .row
            .col-lg-2.col-md-3.col-sm-4.col-xs-6.mb-4: img(src='@/assets/curso/img75.svg')
            .col-lg-10.col-md-9.col-sm-8.col-xs-6
              h4 Videos: 
              p.mb-0 Según informe de Cisco, ya son el formato de contenido más consumido de <i>Internet</i> y serán aún más. Hasta 2021, la expectativa es que representan el 82% del tráfico global.
        .tarjeta.azul--2.p-4.mb-3
          .row
            .col-lg-2.col-md-3.col-sm-4.col-xs-6.mb-4: img(src='@/assets/curso/img76.svg')
            .col-lg-10.col-md-9.col-sm-8.col-xs-6
              h4 <i>Webinars:</i> 
              p.mb-0 Son conferencias, charlas o <i>chats</i> realizados <i>online</i> y en directo para un grupo de espectadores virtuales. 
        .tarjeta.azul--2.p-4.mb-3
          .row
            .col-lg-2.col-md-3.col-sm-4.col-xs-6.mb-4: img(src='@/assets/curso/img77.svg')
            .col-lg-10.col-md-9.col-sm-8.col-xs-6
              h4 <i>Gifs</i> animados: 
              p.mb-0 Se utilizan para el humor, pero, a diferencia de los memes, pueden pasar más información valiosa.
        .tarjeta.azul--2.p-4.mb-3
          .row
            .col-lg-2.col-md-3.col-sm-4.col-xs-6.mb-4: img(src='@/assets/curso/img78.svg')
            .col-lg-10.col-md-9.col-sm-8.col-xs-6
              h4 <i>Slides:</i>
              p.mb-0 Útiles para presentación en eventos, en <i>Slideshare</i> o en <i>webinars</i>.
        .tarjeta.azul--2.p-4.mb-3
          .row
            .col-lg-2.col-md-3.col-sm-4.col-xs-6.mb-4: img(src='@/assets/curso/img79.svg')
            .col-lg-10.col-md-9.col-sm-8.col-xs-6
              h4 Películas:
              p.mb-0 Es el formato más utilizado en la historia de la publicidad y del <i>marketing</i>. Obviamente, no estamos hablando de largometrajes, sino de los viejos, queridos y actuales comerciales.

      .col-lg-6
        .tarjeta.azul--2.p-4.mb-3
          .row
            .col-lg-2.col-md-3.col-sm-4.col-xs-6.mb-4: img(src='@/assets/curso/img80.svg')
            .col-lg-10.col-md-9.col-sm-8.col-xs-6
              h4 <i>Blogsposts</i>:
              p.mb-0 Este es el formato más utilizado en las estrategias da producción de contenido que buscan <i>engagement</i>.
        .tarjeta.azul--2.p-4.mb-3
          .row
            .col-lg-2.col-md-3.col-sm-4.col-xs-6.mb-4: img(src='@/assets/curso/img81.svg')
            .col-lg-10.col-md-9.col-sm-8.col-xs-6
              h4 Memes en video:
              p.mb-0 Son formatos más simples y que difícilmente educan al mercado o convencen a alguien a una conversión.
        .tarjeta.azul--2.p-4.mb-3
          .row
            .col-lg-2.col-md-3.col-sm-4.col-xs-6.mb-4: img(src='@/assets/curso/img82.svg')
            .col-lg-10.col-md-9.col-sm-8.col-xs-6
              h4 Aplicaciones: 
              p.mb-0 Herramientas que pretenden facilitar la vida de los usuarios.
        .tarjeta.azul--2.p-4.mb-3
          .row
            .col-lg-2.col-md-3.col-sm-4.col-xs-6.mb-4: img(src='@/assets/curso/img83.svg')
            .col-lg-10.col-md-9.col-sm-8.col-xs-6
              h4 Juegos:
              p.mb-0 Es el formato más dinámico y participativo de la lista.

</template>

<script>
export default {
  name: 'Tema2',
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
