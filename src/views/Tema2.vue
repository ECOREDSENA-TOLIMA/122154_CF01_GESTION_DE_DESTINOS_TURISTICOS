<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Geografía turística

    .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="flip-up")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/img18.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La geografía turística estudia la relación entre el espacio geográfico y las actividades turísticas. Implica analizar el uso del territorio, los atractivos naturales y culturales, así como la infraestructura y servicios que sostienen la actividad turística. Este enfoque es esencial para gestionar el impacto del turismo en las áreas geográficas, tanto en términos de sostenibilidad como de desarrollo socioeconómico.
          br
          br
          | Mathieson y Wall (1982) sostienen que el turismo transforma profundamente los territorios, modificando paisajes y afectando a las comunidades locales. La geografía turística proporciona una visión integral para manejar estos cambios y asegurar que el desarrollo sea equitativo y sostenible.
    
    separador
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.1 Ruta
    
    p.mb-5(data-aos="fade-left") Las rutas turísticas son itinerarios planificados que conectan varios destinos, permitiendo a los visitantes disfrutar de diferentes experiencias dentro de una misma región. Estas rutas pueden ser temáticas o basadas en tipos específicos de turismo. Las rutas tienen varios beneficios:

    
    .row.justify-content-center.align-items-center.mb-5(data-aos="flip-up")
      .col-lg-8.col-12.order-lg-2.order-2
        AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta--azul")
          .row.mb-5(titulo="Diversificación de la oferta")
            .col-lg-12.mb-4.mb-md-0
              p Permiten a los turistas disfrutar de múltiples atractivos, como en las rutas gastronómicas (ej., Ruta del Vino en España) o rutas históricas (ej., Ruta Maya en México).
          .row.mb-5(titulo="Optimización de flujos turísticos")
            .col-lg-12.mb-4.mb-md-0
              p Las rutas bien diseñadas ayudan a distribuir mejor los turistas, evitando la saturación en un solo lugar.
          .row.mb-5(titulo="Desarrollo regional")
            .col-lg-12.mb-4.mb-md-0
              p Conectan áreas menos conocidas con destinos populares, promoviendo el crecimiento económico en regiones rurales.
              
      .col-lg-4.col-7.order-lg-1.order-1.mb-lg-0.mb-4
        figure
          img(src='@/assets/curso/temas/tema2/img01.png', alt='Imagen decorativa')

    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col-lg-10.col-12
        .cajon.cajon1.color-primario.p-4.mb-4
          p.mb-0 <b>Ejemplo</b>: la ruta del Camino de Santiago en España no solo es un recorrido religioso, sino también una vía que ofrece a los turistas la oportunidad de explorar múltiples destinos, paisajes y culturas locales.

    separador
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.2 Inventario

    p.mb-5(data-aos="fade-left") El inventario turístico es un proceso sistemático de identificación y catalogación de los recursos y atractivos de una región. Este inventario abarca:

    .row.mb-5(data-aos="flip-up")
      .col-lg-4.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema2/img02.svg' alt='AvatarTop')
          .tarjeta.color5(style= "width: 100%")
            .p-4
              h4.text-center Recursos naturales
              p.text-center Montañas, playas, parques nacionales. 
      .col-lg-4.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema2/img03.svg' alt='AvatarTop')
          .tarjeta.color5(style= "width: 100%")
            .p-4
              h4.text-center Patrimonio cultural
              p.text-center Monumentos, festivales, tradiciones.
      .col-lg-4.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema2/img04.svg' alt='AvatarTop')
          .tarjeta.color5(style= "width: 100%")
            .p-4
              h4.text-center Infraestructura
              p.text-center Hoteles, restaurantes, transporte.
    
    .row.justify-content-center.align-items-center.mb-5(data-aos="flip-up")
      .col-lg-10.col-12
        .row.justify-content-center.align-items-center
          .col-lg-6.col-12.order-lg-2.order-2
            p Un inventario bien realizado es esencial para la planificación estratégica y la promoción de los destinos turísticos. Según Cooper et al. (2008), los inventarios turísticos ayudan a las autoridades a priorizar inversiones y mejorar la oferta turística, garantizando un desarrollo equilibrado y sostenible.
            .cajon.cajon.color-secundario.p-4.mb-4
              p.mb-0 <b>Ejemplo</b>: el Inventario Nacional de Bienes Culturales de Chile es una herramienta clave para la gestión de sitios patrimoniales y su incorporación en la oferta turística.
          .col-lg-6.col-8.order-lg-1.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/temas/tema2/img05.png', alt='Imagen decorativa')
    
    separador
    #t_2_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.3 Geografía general
    
    p.mb-5(data-aos="fade-left") La geografía general abarca los aspectos físicos y humanos del entorno que influyen en el turismo. Incluye:

    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col-xl-4.col-lg-6.col-sm-10.mb-xl-0.mb-4(data-aos="fade-right")
        .tarjetas-up(@mouseover="mostrarIndicador = false")
          .indicador--hover(v-if="mostrarIndicador")
          img(src='@/assets/curso/temas/tema2/img06.svg' alt="Imagen decorativa")
          .tarjetas-up_card.BG04
            .title.d-flex.align-items-center.justify-content-center.mb-4
              span
                i.fas.fa-caret-up.fa-2x.me-3
                i.fas.fa-caret-down.fa-2x.me-3
              h4.mb-0 Relieve
            p.text-center.mb-0 Montañas, llanuras, ríos, que pueden ser atractivos turísticos naturales.

      .col-xl-4.col-lg-6.col-sm-10.mb-xl-0.mb-4(data-aos="fade-right")
        .tarjetas-up(@mouseover="mostrarIndicador = false")
          .indicador--hover(v-if="mostrarIndicador")
          img(src='@/assets/curso/temas/tema2/img07.svg' alt="Imagen decorativa")
          .tarjetas-up_card.BG04
            .title.d-flex.align-items-center.justify-content-center.mb-3
              span
                i.fas.fa-caret-up.fa-2x.me-3
                i.fas.fa-caret-down.fa-2x.me-3
              h4.mb-0 Clima
            p.text-center.mb-0 Condiciones climáticas que determinan la estacionalidad del turismo.

      .col-xl-4.col-lg-6.col-sm-10.mb-xl-0.mb-4(data-aos="fade-right")
        .tarjetas-up(@mouseover="mostrarIndicador = false")
          .indicador--hover(v-if="mostrarIndicador")
          img(src='@/assets/curso/temas/tema2/img08.svg' alt="Imagen decorativa")
          .tarjetas-up_card.BG04
            .title.d-flex.align-items-center.justify-content-center.mb-4
              span
                i.fas.fa-caret-up.fa-2x.me-3
                i.fas.fa-caret-down.fa-2x.me-3
              h4.mb-0 Población
            p.text-center.mb-0 Distribución y características culturales de las comunidades locales.

    .row.justify-content-center.align-items-center.mb-5(data-aos="flip-up")
      .col-lg-10.col-12
        .row.justify-content-center.align-items-center
          .col-lg-6.col-12.order-lg-2.order-2
            p Un conocimiento profundo de la geografía general permite a los gestores turísticos planificar mejor las actividades y anticipar posibles retos, como el impacto del clima en la afluencia de turistas.
            .cajon.cajon.color-secundario.p-4.mb-4
              p.mb-0 <b>Ejemplo</b>: las islas del Caribe dependen del clima cálido y tropical para atraer turistas, pero también deben prepararse para temporadas de huracanes que pueden afectar su infraestructura turística.
          .col-lg-6.col-8.order-lg-1.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/temas/tema2/img09.png', alt='Imagen decorativa')

    separador
    #t_2_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.4 Espacios geográficos turísticos

    p.mb-5(data-aos="fade-left") Los espacios geográficos turísticos son áreas específicas destinadas al turismo y configuradas por las interacciones entre el territorio y las actividades turísticas. Estos espacios pueden variar desde:

    .tarjeta--container.row.mb-5(data-aos="flip-up")
      .col-lg.tarjeta.color-primario.p-5
        .row.justify-content-center.mb-4
          .col-lg-6.col-md-4.col-5
            figure
              img(src='@/assets/curso/temas/tema2/img10.svg', alt='Imagen decorativa')
          
        h4.text-center Parques nacionales
        p Zonas protegidas por su valor ecológico.

      .col-lg.tarjeta.color-secundario.p-5
        .row.justify-content-center.mb-4
          .col-lg-6.col-md-4.col-5
            figure
              img(src='@/assets/curso/temas/tema2/img11.svg', alt='Imagen decorativa')
          
        h4.text-center Ciudades históricas
        p Lugares con patrimonio cultural significativo.

      .col-lg.tarjeta.color-acento-contenido.p-5
        .row.justify-content-center.mb-4
          .col-lg-6.col-md-4.col-5
            figure
              img(src='@/assets/curso/temas/tema2/img12.svg', alt='Imagen decorativa')
          
        h4.text-center <i>Resorts</i>
        p Espacios diseñados exclusivamente para el turismo.

    p.mb-5(data-aos="fade-left") Estos espacios suelen requerir una gestión específica para mantener su atractivo y garantizar que el turismo no impacte negativamente en el entorno ni en las comunidades locales. Según Smith (2010), la creación de espacios turísticos debe ir acompañada de políticas de conservación y sostenibilidad para asegurar su viabilidad a largo plazo.

    separador
    #t_2_5.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.5 Georreferencia

    p.mb-5(data-aos="fade-left") La georreferencia en turismo implica la utilización de coordenadas geográficas para localizar con precisión atractivos, servicios e infraestructuras turísticas. Esta herramienta es esencial para:

    .row.justify-content-center(data-aos="flip-up")
      .col-lg-10.desktop
        ImagenInfografica.color-acento-botones.mb-5
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/tema2/img13.svg', alt='Imagen decorativa')
          .tarjeta.color3.p-3(x="15.8%" y="23.6%" numero="+")
            p Mejora la accesibilidad de los destinos.
          .tarjeta.color3.p-3(x="51.8%" y="8.8%" numero="+")
            p Facilita la gestión territorial del turismo.
          .tarjeta.color3.p-3(x="85.2%" y="24.7%" numero="+")
            p Permite una distribución equilibrada de los turistas.

    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col-md-8.col-12.movil
        figure
          img(src='@/assets/curso/temas/tema2/img14.svg', alt='Imagen decorativa')

    .row.justify-content-center.align-items-center.mb-5(data-aos="flip-up")
      .col-lg-10.col-12
        .row.justify-content-center.align-items-center
          .col-lg-6.col-12.order-lg-2.order-2
            p Las tecnologías como los sistemas GPS y los mapas digitales han transformado la forma en que los destinos y rutas son localizados y promocionados, proporcionando mayor comodidad y eficiencia tanto para los turistas como para los gestores.
            .cajon.cajon.color-secundario.p-4.mb-4
              p.mb-0 <b>Ejemplo</b>: Google Maps utiliza georreferencias para ofrecer rutas precisas, lo que facilita la planificación y la navegación de los turistas en nuevos destinos.
          .col-lg-6.col-8.order-lg-1.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/temas/tema2/img15.png', alt='Imagen decorativa')

    separador
    #t_2_6.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.6 Cartografía
    
    p.mb-5(data-aos="fade-left") La cartografía turística es el proceso de crear mapas específicos que muestren las rutas, atractivos y recursos de un destino. Estos mapas pueden ser temáticos o detallados, proporcionando información clave sobre:

    .row.justify-content-center.align-items-center.mb-5(data-aos="flip-up")
      .col-lg-8.col-12
        .row.justify-content-center.align-items-center
          .col-lg-4.col-6.order-lg-1.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/temas/tema2/img16.png', alt='Imagen decorativa')
          .col-lg-8.md-10.col-12.order-lg-2.order-2
            .cajon.cajon1.p-4.mb-4
              ul.lista-ul
                li.mb-0 
                  i.fas.fa-angle-right
                  p.mb-0 <b>Rutas de acceso</b>: carreteras, senderos y opciones de transporte.
                li.mb-0 
                  i.fas.fa-angle-right
                  p.mb-0 <b>Distribución de servicios</b>: hoteles, restaurantes, estaciones de servicio. 
                li 
                  i.fas.fa-angle-right
                  p.mb-0 <b>Atractivos turísticos</b>: lugares de interés, monumentos, áreas recreativas.

    p.mb-5(data-aos="fade-left") Los mapas turísticos son fundamentales tanto para los visitantes como para los gestores de destinos. Page (2014) subraya que una buena cartografía no solo facilita la navegación del turista, sino que también ayuda en la promoción del destino al destacar sus características únicas.

    .row.justify-content-center(data-aos="flip-up")
      .col-lg-10.col-12
        .cajon.cajon.color-secundario.p-4.mb-4
          p.mb-0 <b>Ejemplo</b>: los mapas del Parque Nacional Yellowstone en EE.UU. permiten a los turistas planificar sus visitas, identificando los principales senderos, áreas de acampada y puntos de interés geológico.
              
    separador
    #t_2_7.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.7 Metodología de inventario
    
    p.mb-5(data-aos="fade-left") La metodología de inventario turístico es un proceso estructurado que guía la recolección y organización de información sobre los recursos turísticos de un territorio. Este proceso implica:

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10.col-12
        .row.justify-content-center.align-items-center
          .col-lg-6.col-12.mb-5.mb-md-0.order-lg-2.order-2
            LineaTiempoD.color-acento-botones.especial
              p(numero="1" titulo="Identificación") Detectar todos los recursos naturales, culturales y de infraestructura disponible.
              
              p(numero="2" titulo="Clasificación") Organizar los recursos según su tipo y potencial turístico.
              
              p(numero="3" titulo="Evaluación") Analizar la calidad y sostenibilidad de los recursos.
              
              p(numero="4" titulo="Registro") Documentar la información en un formato accesible para planificadores turísticos.
          .col-lg-6.col-8.order-lg-1.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/temas/tema2/img17.png', alt='Imagen decorativa')

    p.mb-5(data-aos="fade-left") Esta metodología es esencial para una planificación eficiente del turismo, ya que permite a los gestores tomar decisiones informadas sobre la promoción y desarrollo de los destinos.

    .row.justify-content-center(data-aos="flip-up")
      .col-lg-10.col-12
        .cajon.cajon.color-secundario.p-4.mb-4
          p.mb-0 <b>Ejemplo</b>: el Manual de Inventario de Recursos Turísticos de la OMT, ofrece directrices claras para la creación de inventarios en cualquier tipo de destino, facilitando su integración en la planificación del turismo.

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

<style lang="sass"></style>
