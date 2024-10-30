<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Turismo

    p.mb-5(data-aos="fade-left") El turismo, como fenómeno social y económico, tiene sus raíces en la antigüedad. Desde tiempos remotos, los seres humanos han viajado por diversas razones, ya sea por comercio, religión o exploración. Sin embargo, el turismo tal como lo conocemos hoy comenzó a tomar forma en el siglo XVIII y XIX, durante la Revolución Industrial, cuando se produjeron cambios significativos en la sociedad, la economía y la tecnología. La aparición de nuevos medios de transporte, como el tren y el barco de vapor, facilitó el desplazamiento de personas a lugares lejanos, lo que llevó a un aumento en la movilidad y, por ende, al desarrollo del turismo.

    .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="flip-up")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img01.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Uno de los hitos clave en la historia del turismo moderno es el establecimiento de las primeras agencias de viajes, como Thomas Cook, que en 1841 organizó el primer viaje organizado para un grupo de personas en tren desde Leicester a Loughborough. Este evento marcó el comienzo de los viajes organizados, permitiendo a las personas acceder a experiencias turísticas de manera más estructurada y cómoda. Thomas Cook no solo promovió el turismo de ocio, sino que también ayudó a popularizar el turismo cultural y educativo.
          br
          br
          | 

    p.mb-5(data-aos="fade-left") A lo largo del siglo XX, el turismo continuó evolucionando, especialmente después de la Segunda Guerra Mundial. El auge de la clase media en países como Estados Unidos y Europa, combinado con el aumento de la disponibilidad de tiempo libre y la mejora de las infraestructuras de transporte, contribuyó al crecimiento del turismo internacional. La llegada de los aviones comerciales y el desarrollo de aeropuertos facilitó los viajes aéreos, lo que permitió a millones de personas explorar destinos lejanos. Durante esta época, se consolidaron las principales tendencias en el turismo, como el turismo de masas y el turismo de playa, que se volvieron muy populares.

    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col-lg-10.col-12
        .cajon.cajon.color-secundario.p-4.mb-4
          p.mb-0 En las últimas décadas, el turismo ha seguido transformándose debido a la globalización, el desarrollo tecnológico y los cambios en los hábitos de consumo. La expansión de internet ha permitido a los turistas planificar y reservar viajes de manera más fácil y accesible, lo que ha generado un auge en el turismo independiente. Además, el interés por experiencias más auténticas y sostenibles ha llevado a un cambio hacia el ecoturismo, el turismo responsable y el turismo cultural.
        .row.justify-content-center.align-items-center
          .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/temas/tema1/img02.png', alt='Imagen decorativa')
          .col-lg-6.col-12.order-lg-2.order-2
            p Hoy en día, el turismo se considera uno de los sectores económicos más importantes a nivel mundial, generando empleo y contribuyendo al desarrollo económico en muchas regiones. Según la Organización Mundial del Turismo (OMT), el turismo representa aproximadamente el 10 % del PIB global y es una fuente vital de ingresos para muchos países. Sin embargo, este crecimiento también plantea desafíos, como la sostenibilidad y la gestión de recursos, lo que ha llevado a un enfoque creciente en la necesidad de un turismo responsable y sostenible que respete tanto a las comunidades locales como al medio ambiente.

    p(data-aos="fade-left") En resumen, el turismo ha recorrido un largo camino desde sus inicios hasta convertirse en una actividad globalizada y diversificada. Su evolución ha estado marcada por cambios sociales, económicos y tecnológicos, y continúa enfrentando retos y oportunidades en un mundo en constante transformación.

    separador
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.1 Tipología de turismo

    p.mb-5(data-aos="fade-left") La tipología de turismo se refiere a las diversas formas en que se puede clasificar esta actividad, basándose en factores como la motivación del viajero, el tipo de actividad realizada y el contexto del destino. Según Mathieson y Wall (1982), las clasificaciones más comunes incluyen varias categorías que reflejan los diferentes intereses y necesidades de los turistas.

    .tarjeta.tarjeta--BG01.p-4.mb-5(data-aos="flip-up")
      SlyderA(tipo="b")
        .row.justify-content-center.p-4
          .col-lg-6.order-lg-2.order-2
            h4 El turismo de ocio
            p Es quizás la forma más tradicional y abarca actividades recreativas y de descanso, donde el principal objetivo es el disfrute personal. Este tipo de turismo se enfoca en la relajación y el entretenimiento, siendo común en playas, <i>resorts</i> y destinos de naturaleza.
        
          .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/temas/tema1/img03.png', alt='Imagen decorativa')

        .row.justify-content-center.p-4
          .col-lg-6.order-lg-2.order-2
            h4 El turismo de aventura
            p Se centra en experiencias emocionantes y activas, como el senderismo, la escalada o el rafting. Este tipo de turismo atrae a quienes buscan experiencias desafiantes y la conexión con la naturaleza.
        
          .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/temas/tema1/img04.png', alt='Imagen decorativa')

        .row.justify-content-center.p-4
          .col-lg-6.order-lg-2.order-2
            h4 El turismo cultural
            p Se enfoca en la exploración de la cultura, la historia y las tradiciones de un destino. Los viajeros que participan en esta forma de turismo están motivados por el deseo de aprender y experimentar la cultura local a través de actividades como visitas a museos, festivales y sitios históricos.
        
          .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/temas/tema1/img05.png', alt='Imagen decorativa')

        .row.justify-content-center.p-4
          .col-lg-6.order-lg-2.order-2
            h4 El turismo de salud
            p En cambio, busca mejorar el bienestar físico y mental. Esto incluye viajes a spas, balnearios y centros de medicina alternativa, donde los turistas buscan tratamientos que promuevan su salud y bienestar.
        
          .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/temas/tema1/img06.png', alt='Imagen decorativa')

    p.mb-5(data-aos="fade-left") Otras tipologías, como el turismo rural, el turismo gastronómico, y el turismo religioso, también reflejan cómo las motivaciones y preferencias individuales pueden influir en la elección de un destino.

    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col-lg-10.col-12
        .cajon.cajon1.color-primario.p-4.mb-4
          p.mb-0 Cada una de estas tipologías responde a diferentes intereses y necesidades de los turistas, lo que influye en la oferta y gestión de los destinos turísticos. Comprender estas clasificaciones es fundamental para la planificación y desarrollo de estrategias adecuadas que maximicen la satisfacción del visitante y el impacto positivo en la comunidad local.

    separador
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.2 Atractivos

    p.mb-5(data-aos="fade-left") Los atractivos turísticos son elementos esenciales que capturan la atención del visitante y lo motivan a desplazarse hacia un destino. Estos atractivos pueden clasificarse en dos categorías principales: naturales y culturales.

    TabsC.color-acento-botones.mb-5(data-aos="flip-up")
      .py-3.py-md-4(titulo="Los atractivos naturales")
        .row.justify-content-center.p-4
          .col-lg-7.col-10.order-lg-1.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/temas/tema1/img07.png', alt='Imagen decorativa')
          .col-lg-5.order-lg-2.order-2
            p Incluyen paisajes impresionantes, parques nacionales, montañas, playas, ríos y lagos, entre otros. Estos lugares ofrecen oportunidades para actividades al aire libre como senderismo, avistamiento de aves y deportes acuáticos. La belleza escénica y la biodiversidad atraen a turistas que buscan desconectar y experimentar la naturaleza. Ejemplos incluyen el Parque Nacional Torres del Paine en Chile y las Cataratas del Iguazú en Argentina y Brasil.

      .py-3.py-md-4(titulo="Los atractivos culturales")
        .row.justify-content-center.p-4
          .col-lg-7.col-10.order-lg-1.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/temas/tema1/img08.png', alt='Imagen decorativa')
          .col-lg-5.order-lg-2.order-2
            p Abarcan monumentos históricos, sitios arqueológicos, museos, festivales, ferias y eventos locales. Estos elementos permiten a los turistas sumergirse en la cultura, la historia y las tradiciones de una región. Según Jafari (1987), los atractivos culturales permiten a los viajeros aprender y conectarse con las comunidades locales. Ejemplos incluyen Machu Picchu en Perú, la Alhambra en España y el Coliseo en Italia, lugares emblemáticos que han atraído a millones de visitantes a lo largo de los años.

    .row.justify-content-center.align-items-center.mb-5(data-aos="flip-up")
      .col-lg-10.col-12
        .row.justify-content-center.align-items-center
          .col-lg-6.col-12.order-lg-2.order-2
            p La identificación y promoción de estos atractivos es crucial para la estrategia de <i>marketing</i> de cualquier destino turístico. Una gestión adecuada de los atractivos puede generar un aumento significativo en la demanda turística. Esto implica no solo reconocer qué elementos son atractivos, sino también trabajar en su conservación, accesibilidad y presentación. La creación de paquetes turísticos, eventos y campañas publicitarias que resalten estos atractivos puede contribuir al crecimiento sostenible del turismo en la región.
            p La importancia de los atractivos turísticos se extiende más allá de la mera atracción de visitantes. También desempeñan un papel vital en el desarrollo económico local, ya que fomentan la creación de empleo, el crecimiento de la infraestructura y la mejora de la calidad de vida en las comunidades que dependen del turismo. Además, al promover el respeto y la valoración del patrimonio cultural y natural, se puede contribuir a la sostenibilidad y protección de estos recursos para las futuras generaciones.
          .col-lg-6.col-8.order-lg-1.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/temas/tema1/img09.png', alt='Imagen decorativa')

    separador
    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.3 Recursos

    p.mb-5(data-aos="fade-left") Los recursos turísticos se definen como aquellos elementos que pueden ser utilizados para el desarrollo de la actividad turística. Estos recursos son fundamentales para la oferta turística de un destino y pueden clasificarse en dos categorías principales: recursos naturales y recursos culturales.

    .row.justify-content-center.align-items-center(data-aos="flip-up")
      .col-12.mb-5
        AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta--verde")
          .row.justify-content-center(titulo="Los recursos naturales")
            .col-lg-6.order-lg-1.order-2
              p Incluyen elementos como playas, montañas, ríos, lagos y parques nacionales. Estos atractivos ofrecen oportunidades para actividades recreativas al aire libre, como senderismo, deportes acuáticos, avistamiento de fauna y flora, entre otros. La diversidad de recursos naturales en un destino puede influir significativamente en el tipo de turismo que se puede desarrollar. Por ejemplo, regiones con abundantes playas y climas cálidos pueden atraer al turismo de sol y playa, mientras que áreas montañosas pueden ser más populares para el turismo de aventura y ecoturismo.
            .col-lg-6.col-10.order-lg-1.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/temas/tema1/img22.png', alt='Imagen decorativa')
          .row.justify-content-center(titulo="Los recursos culturales")
            .col-lg-6.order-lg-2.order-2
              p Abarcan tradiciones, festividades, gastronomía, artesanías y la historia de una comunidad. Estos elementos permiten a los turistas conocer y experimentar la identidad cultural del lugar que visitan. La preservación y promoción de estos recursos culturales son esenciales para atraer a visitantes interesados en el turismo cultural y patrimonial. Eventos como ferias locales, festivales de música y danzas, y la celebración de tradiciones ancestrales son ejemplos de cómo los recursos culturales pueden ser explotados para atraer a turistas y generar una experiencia auténtica.
            .col-lg-6.col-10.order-lg-1.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/temas/tema1/img23.png', alt='Imagen decorativa')

    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col-lg-10.col-12
        .bloque-texto-e.color-primario.p-4
          .bloque-texto-e__texto.text-center
            i.fas.fa-quote-left
            p.text-regular Según Cooper et al. (2008), una gestión adecuada de los recursos turísticos es esencial para garantizar la sostenibilidad del turismo en un destino. Esto implica no solo la explotación responsable de estos recursos, sino también la implementación de políticas que promuevan un equilibrio entre el desarrollo económico y la conservación del entorno. La planificación del uso de los recursos debe considerar la capacidad de carga del destino, es decir, el número máximo de visitantes que puede recibir sin perjudicar la calidad de la experiencia turística ni dañar el entorno natural o cultural.
            i.fas.fa-quote-right

    p.mb-5(data-aos="fade-left") Además, el desarrollo de estrategias de turismo sostenible es crucial para asegurar que las comunidades locales se beneficien del turismo. Esto incluye la capacitación de la población local, la creación de empleos relacionados con la conservación y la promoción de prácticas que minimicen el impacto ambiental. La colaboración entre el sector público, privado y la comunidad local es fundamental para implementar estrategias efectivas que garanticen la conservación de los recursos turísticos y fomenten un desarrollo equilibrado.

    separador
    #t_1_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.4 Destinos

    .row.justify-content-center.align-items-center.mb-5(data-aos="flip-up")
      .col-lg-7.col-12.order-lg-2.order-2.mb-lg-0
        p Los destinos turísticos son lugares específicos que los turistas eligen visitar, y pueden abarcar desde ciudades y regiones hasta países enteros. Su atractivo depende de múltiples factores que incluyen la infraestructura, la oferta de servicios, la accesibilidad, y la calidad de la experiencia que proporcionan. En la actualidad, los destinos turísticos deben ser capaces de ofrecer un conjunto integral de experiencias que satisfagan las diversas necesidades y expectativas de los viajeros.
        .bloque-texto-e.color-primario.p-4
          .bloque-texto-e__texto.text-center
            i.fas.fa-quote-left
            p.text-regular Según Urry (1990), la experiencia del destino va más allá de los lugares físicos, ya que involucra la cultura local, las interacciones sociales y las experiencias sensoriales que los turistas viven durante su estancia. Esto significa que los destinos deben esforzarse por crear un entorno que no solo resalte sus atractivos naturales y culturales, sino que también fomente la conexión entre los visitantes y la comunidad local.
            i.fas.fa-quote-right
      .col-lg-5.col-8.order-lg-1.order-1.mb-lg-0.mb-4
        figure
          img(src='@/assets/curso/temas/tema1/img10.png', alt='Imagen decorativa')

    p.mb-5(data-aos="fade-left") La gestión efectiva de un destino turístico implica una serie de acciones estratégicas. En primer lugar, es esencial promover los atractivos que caracterizan al destino, ya sean estos históricos, naturales o culturales. Esto puede incluir la elaboración de campañas de <i>marketing</i> que destaquen los eventos locales, las tradiciones y los recursos naturales disponibles. Sin embargo, la promoción de los atractivos es solo una parte del proceso.

    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col-lg-10.col-12          
        .cajon.cajon.color-secundario.p-4.mb-4
          .row.justify-content-center.align-items-center
            .col-lg-10.order-lg-2.order-2
              p Además, los destinos deben centrarse en la creación de una experiencia holística para el visitante. Esto incluye:
              ul.lista-ul
                li.mb-0 
                  i.fas.fa-angle-right
                  p.mb-0 La mejora de la infraestructura turística, como hoteles, restaurantes y medios de transporte
                li 
                  i.fas.fa-angle-right
                  p.mb-0 La capacitación del personal que interactúa con los turistas.
            .col-lg-2.col-4.order-lg-1.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/temas/tema1/img11.svg', alt='Imagen decorativa')

    p.mb-3(data-aos="fade-left") La calidad de servicio es un aspecto crucial que puede influir en la percepción del destino por parte del viajero. Por ejemplo, un buen servicio en un restaurante local puede dejar una impresión duradera y positiva, mientras que una mala experiencia puede disuadir a los turistas de regresar. 
    p.mb-5(data-aos="fade-left") Por otro lado, la sostenibilidad es un componente vital en la gestión de destinos turísticos. La sobrecarga de turistas puede causar daños significativos al medio ambiente y a la cultura local. Por lo tanto, es importante que los destinos implementen prácticas de turismo sostenible, como limitar el número de visitantes en ciertos lugares, promover el turismo responsable y asegurar que la comunidad local se beneficie económicamente de la actividad turística. 

    separador
    #t_1_5.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.5 Sistema turístico

    p.mb-5(data-aos="fade-left") El sistema turístico se refiere a la interrelación entre los diferentes componentes del turismo, que incluyen: 

    .row.mb-5(data-aos="flip-up")
      .col-md-6.col-lg.tarjeta--tabla.p-4
        .row.justify-content-center.mb-3
          .col-4
            img(src='@/assets/curso/temas/tema1/img12.svg' alt='AvatarTop')
        h4.text-center Turistas
        p.text-center Personas que viajan con el propósito de ocio, negocio o cualquier otra motivación.
      .col-md-6.col-lg.tarjeta--tabla1.p-4
        .row.justify-content-center.mb-3
          .col-4
            img(src='@/assets/curso/temas/tema1/img13.svg' alt='AvatarTop')
        h4.text-center Empresas
        p.text-center Entidades que ofrecen servicios y productos turísticos, como hoteles, agencias de viajes, y operadores de turismo.
      .col-md-6.col-lg.tarjeta--tabla.p-4
        .row.justify-content-center.mb-3
          .col-4
            img(src='@/assets/curso/temas/tema1/img14.svg' alt='AvatarTop')
        h4.text-center Gobiernos
        p.text-center Autoridades que establecen políticas y regulaciones que rigen el sector turístico.
      .col-md-6.col-lg.tarjeta--tabla1.p-4
        .row.justify-content-center.mb-3
          .col-4
            img(src='@/assets/curso/temas/tema1/img15.svg' alt='AvatarTop')
        h4.text-center Comunidades locales
        p.text-center Habitantes de los destinos turísticos que se ven afectados por la actividad turística.

    p.mb-5(data-aos="fade-left") Según Bhatia (2005), este sistema es dinámico y se ve influenciado por diversos factores externos como: 

    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col-xl-4.col-lg-8.mb-4.mb-xl-5
        .crd.crd--grayGrad(data-aos="flip-left")
          .bottomCircle.mb-5
            figure
              img(src="@/assets/curso/temas/tema1/img16.png", alt="alt").img90.m-auto
          h4.text-center Economía
          p.text-center.mb-0 Las condiciones económicas globales y locales afectan el poder adquisitivo de los turistas y, por lo tanto, su disposición a viajar.
      .col-xl-4.col-lg-8.mb-4.mb-xl-5
        .crd.crd--grayGrad(data-aos="flip-left")
          .bottomCircle.mb-5
            figure
              img(src="@/assets/curso/temas/tema1/img17.png", alt="alt").img90.m-auto
          h4.text-center Tecnología
          p.text-center.mb-0 Avances tecnológicos influyen en cómo se planifican, reservan y experimentan los viajes. Por ejemplo, el uso de aplicaciones móviles para reservas y guías de viaje.
      .col-xl-4.col-lg-8.mb-4.mb-xl-5
        .crd.crd--grayGrad(data-aos="flip-left")
          .bottomCircle.mb-5
            figure
              img(src="@/assets/curso/temas/tema1/img18.png", alt="alt").img90.m-auto
          h4.text-center Cultura
          p.text-center.mb-0 Las tendencias culturales pueden modificar las preferencias de los turistas y su comportamiento.

    p.mb-5(data-aos="fade-left") Una comprensión adecuada de cómo funciona el sistema turístico permite a los gestores identificar oportunidades y desafíos, facilitando la implementación de políticas y estrategias que beneficien a todos los actores involucrados. Algunas de las ventajas de esta comprensión son:

    .row.justify-content-center.ali.mb-4(data-aos="flip-up")
      .tarjeta--container.row.mb-5
        .col-xl.col-md-6.tarjeta.color-primario.p-5
          .row.justify-content-center.mb-3
            .col-lg-6.col-md-4.col-5
              figure
                img(src='@/assets/curso/temas/tema1/img19.png', alt='Imagen decorativa')
            
          h4.text-center Identificación de oportunidades
          p.text-center Reconocer tendencias emergentes y nichos de mercado que pueden ser explotados.

        .col-xl.col-md-6.tarjeta.color-secundario.p-5
          .row.justify-content-center.mb-3
            .col-lg-6.col-md-4.col-5
              figure
                img(src='@/assets/curso/temas/tema1/img20.png', alt='Imagen decorativa')
            
          h4.text-center Desarrollo de estrategias efectivas
          p.text-center Diseñar campañas de <i>marketing</i> y productos turísticos adaptados a las necesidades de los turistas.

        .col-xl.col-md-6.tarjeta.color-acento-contenido.p-5
          .row.justify-content-center.mb-3
            .col-lg-6.col-md-4.col-5
              figure
                img(src='@/assets/curso/temas/tema1/img21.png', alt='Imagen decorativa')
            
          h4.text-center Fomento de la sostenibilidad
          p.text-center Implementar prácticas que minimicen el impacto ambiental y promuevan la conservación cultural.

    p.mb-5(data-aos="fade-left") La cooperación entre los distintos sectores es clave para el desarrollo sostenible y exitoso del turismo en cualquier destino. Esto implica:

    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col-lg-10.col-12          
        .cajon.cajon.p-3.mb-4
          .row.justify-content-center
            .col-11
              ul.lista-ul
                li
                  i.fas.fa-angle-right
                  p.mb-0 <b>Colaboración público-privada</b>: trabajar juntos para desarrollar infraestructuras adecuadas y servicios de calidad.
                li
                  i.fas.fa-angle-right
                  p.mb-0 <b>Involucramiento de la comunidad local</b>: incluir a los habitantes en el proceso de toma de decisiones para que se beneficien del turismo.
                li
                  i.fas.fa-angle-right
                  p.mb-0 <b>Formación y capacitación</b>: ofrecer formación a las empresas y comunidades locales para mejorar la calidad de los servicios turísticos.
        
      
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
