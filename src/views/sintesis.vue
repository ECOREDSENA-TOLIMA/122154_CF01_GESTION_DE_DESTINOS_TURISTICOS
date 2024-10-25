<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    p.mb-5(data-aos="fade-right") A continuación, se describe un enfoque general del componente formativo Fundamentos del turismo y gestión del patrimonio, el cual aborda los conceptos esenciales del turismo, la importancia del patrimonio cultural y natural, y su interrelación con la actividad turística. Este componente analiza las diferentes tipologías de turistas, las tendencias de consumo, y cómo estos factores influyen en la oferta turística de un territorio. Además, profundiza en la valoración y gestión adecuada de los bienes culturales y naturales, con el fin de garantizar el desarrollo sostenible de los destinos turísticos, preservando la identidad cultural y el entorno natural.

    .row.justify-content-center
      .col-lg-10.mb-5(data-aos="fade-right")
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt=" En la síntesis del componente formativo Fundamentos del turismo y gestión del patrimonio, se abordan los conceptos clave del turismo, la relevancia del patrimonio cultural y natural, y su relación directa con la actividad turística.")
      .col-auto(data-aos="fade-left")
        a.anexo.mb-4(:href="obtenerLink('/downloads/sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
