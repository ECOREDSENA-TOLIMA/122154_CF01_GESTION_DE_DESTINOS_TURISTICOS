<template lang="pug">
  .curso-main-container.introduccion
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    
      .titulo-principal.color-acento-contenido(data-aos="flip-up")
        .titulo-principal__numero
          span
            i.fas.fa-info
        h1 Introducción
      p.mb-5(data-aos="fade-left") Este componente formativo profundiza en los fundamentos del turismo y la gestión del patrimonio, ofreciendo a los aprendices un marco teórico y práctico para comprender la importancia de los recursos turísticos y su correcta gestión. A través del estudio de los diferentes tipos de turismo, los atractivos, los destinos y el funcionamiento del sistema turístico, se busca que los participantes adquieran las competencias necesarias para identificar y analizar los elementos clave del sector. Asimismo, el componente explora la geografía turística, incluyendo rutas, inventarios y cartografía, lo que permite georreferenciar los recursos y planificar rutas de manera eficiente. En la sección de patrimonio, se abordarán tanto los bienes culturales como naturales, fomentando la valoración y protección del territorio y su identidad cultural. Con este enfoque integral, los aprendices estarán preparados para desarrollar estrategias que impulsen la oferta turística del territorio, respondiendo a las tendencias de consumo de los turistas actuales y mejorando la sostenibilidad de los destinos.
      
      figure.mb-5(data-aos="zoom-in")
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/rh9H9OZO0CA?si=egX3_GN18OPweshH" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
  
      
  </template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
