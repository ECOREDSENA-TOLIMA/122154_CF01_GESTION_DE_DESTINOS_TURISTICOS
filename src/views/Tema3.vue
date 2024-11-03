<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Patrimonio
    
    .col.mb-5
      figure
        img(src='@/assets/curso/temas/tema3/img01.png', alt='Imagen decorativa')
    
    p(data-aos="fade-left").mb-5 El patrimonio turístico representa uno de los principales atractivos para los visitantes, ya que incluye los bienes tangibles e intangibles que una sociedad valora y preserva. Este concepto engloba tanto el patrimonio cultural, como monumentos, tradiciones y costumbres, como el patrimonio natural, es decir, los paisajes, reservas y ecosistemas que enriquecen la experiencia turística. Según Jafari (1996), el patrimonio no solo define la identidad de un destino, sino que también juega un papel fundamental en la motivación de los turistas, quienes buscan experiencias auténticas y enriquecedoras.    

    separador
    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.1 Bienes culturales

    p.mb-5(data-aos="fade-left") Los bienes culturales abarcan todos aquellos elementos tangibles e intangibles que representan la identidad, historia y valores de una sociedad. Estos bienes son fundamentales para el turismo cultural, que ofrece una experiencia enriquecedora al permitir que los visitantes conozcan y aprecien tanto los aspectos físicos como las manifestaciones vivas de una cultura. Se pueden clasificar en dos grandes categorías:

    .titulo.mb-5(data-aos="flip-up")
      img(src='@/assets/curso/temas/ico.svg', alt='Imagen decorativa')
      h4.mb-0 Los bienes culturales tangibles

    p.mb-5(data-aos="fade-left") Son aquellos elementos materiales que se pueden ver y tocar. Estos incluyen:

    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col-xl-3.col-lg-8.mb-4.mb-xl-5
        .crd.crd--grayGrad(data-aos="flip-left")
          .bottomCircle.mb-5
            figure
              img(src="@/assets/curso/temas/tema3/img02.svg", alt="alt").img90.m-auto
          h4.text-center Monumentos
          p.text-center.mb-0 Edificaciones históricas, castillos, iglesias, templos, puentes y sitios arqueológicos que tienen relevancia histórica, arquitectónica o artística.
      .col-xl-3.col-lg-8.mb-4.mb-xl-5
        .crd.crd--grayGrad(data-aos="flip-left")
          .bottomCircle.mb-5
            figure
              img(src="@/assets/curso/temas/tema3/img03.svg", alt="alt").img90.m-auto
          h4.text-center Obras de arte
          p.text-center.mb-0 Pinturas, esculturas, murales y otras expresiones artísticas que son reconocidas como patrimonio cultural.
      .col-xl-3.col-lg-8.mb-4.mb-xl-5
        .crd.crd--grayGrad(data-aos="flip-left")
          .bottomCircle.mb-5
            figure
              img(src="@/assets/curso/temas/tema3/img04.svg", alt="alt").img90.m-auto
          h4.text-center Artesanías
          p.text-center.mb-0 Objetos hechos a mano que reflejan las técnicas tradicionales de una comunidad, tales como cerámicas, textiles y joyería.
      .col-xl-3.col-lg-8.mb-4.mb-xl-5
        .crd.crd--grayGrad(data-aos="flip-left")
          .bottomCircle.mb-5
            figure
              img(src="@/assets/curso/temas/tema3/img05.svg", alt="alt").img90.m-auto
          h4.text-center Museos y archivos
          p.text-center.mb-0 Espacios que resguardan y exhiben colecciones de valor cultural e histórico.

    .titulo.mb-5(data-aos="flip-up")
      img(src='@/assets/curso/temas/ico.svg', alt='Imagen decorativa')
      h4.mb-0 Los bienes culturales intangibles

    p.mb-5(data-aos="fade-left") Son aquellos elementos no materiales, que reflejan la cultura viva de una sociedad. Son igualmente valiosos y deben ser preservados. Estos incluyen:

    .row.mb-5(data-aos="flip-up")
      .col-lg-4.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema3/img06.svg' alt='AvatarTop')
          .tarjeta.color5(style= "width: 100%")
            .p-4
              h4.text-center Patrimonio inmaterial
              p.text-center Costumbres, tradiciones, ritos y festivales que han sido transmitidos de generación en generación. Ejemplos incluyen danzas tradicionales, celebraciones religiosas y otros eventos comunitarios.
      .col-lg-4.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema3/img07.svg' alt='AvatarTop')
          .tarjeta.color5(style= "width: 100%")
            .p-4
              h4.text-center Lenguas
              p.text-center Idiomas y dialectos locales que forman parte del patrimonio cultural de un pueblo y que son esenciales para la transmisión del conocimiento y la identidad.
      .col-lg-4.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema3/img08.svg' alt='AvatarTop')
          .tarjeta.color5(style= "width: 100%")
            .p-4
              h4.text-center Saberes y prácticas
              p.text-center Conocimientos ancestrales sobre la naturaleza, medicina tradicional, gastronomía y otras áreas que se mantienen vigentes en comunidades específicas.

    .row.justify-content-center.align-items-center.mb-5(data-aos="flip-up")
      .col-lg-10.col-12
        .row.justify-content-center.align-items-center
          .col-xl-6.col-12.order-lg-2.order-2
            p El turismo cultural, según Smith (2010), juega un papel clave en la conservación de estos bienes tangibles e intangibles, ya que su promoción no solo fomenta el interés de los visitantes, sino que también incentiva la preservación y revalorización de las tradiciones locales. Al atraer la atención hacia estos elementos, el turismo cultural ayuda a proteger y revitalizar las prácticas culturales que podrían estar en riesgo de desaparecer.
            .cajon.cajon.color-secundario.p-4.mb-4
              p.mb-0 <b>Ejemplo</b>: el Coliseo en Roma es un bien cultural tangible que atrae millones de turistas al año, mientras que el Festival de la Guelaguetza en Oaxaca, México, es un bien cultural intangible que preserva las tradiciones indígenas.
          .col-xl-6.col-8.order-lg-1.order-1.mb-lg-3.mb-4
            figure
              img(src='@/assets/curso/temas/tema3/img09.png', alt='Imagen decorativa')

    separador
    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.2 Bienes naturales
    
    p.mb-5(data-aos="fade-left") Los bienes naturales incluyen elementos del entorno físico que tienen un valor estético, ecológico o recreativo. Estos bienes son fundamentales para el desarrollo del turismo sostenible y pueden incluir:

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10.col-12
        .row.justify-content-center.align-items-center
          .col-lg-6.col-12.mb-md-0.order-lg-2.order-2
            LineaTiempoD.color-acento-botones.especial
              p(numero="1" titulo="Parques nacionales") Áreas protegidas que preservan ecosistemas frágiles.
              
              p(numero="2" titulo="Montañas, ríos y playas") Recursos naturales que ofrecen experiencias recreativas.
              
              p(numero="3" titulo="Reservas de la biosfera") Espacios de alta biodiversidad con reconocimiento internacional.
          .col-lg-6.col-8.order-lg-1.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/temas/tema3/img10.svg', alt='Imagen decorativa')

    //- .row.justify-content-center.mb-5(data-aos="flip-up")
    //-   .col-xl-3.col-6.mb-xl-0.mb-4
    //-     figure
    //-       img(src='@/assets/curso/temas/tema3/img10.svg', alt='Imagen decorativa')
    //-   .col-lg-9.col-12
    //-     TabsA.color-acento-botones.mb-5
    //-       .tarjeta.color5.p-4(titulo="Parques nacionales")
    //-         h4 Parques nacionales
    //-         p Áreas protegidas que preservan ecosistemas frágiles.
    //-       .tarjeta.color5.p-4(titulo="Montañas, ríos y playas")
    //-         h4 Montañas, ríos y playas
    //-         p Recursos naturales que ofrecen experiencias recreativas.
    //-       .tarjeta.color5.p-4(titulo="Reservas de la biosfera")
    //-         h4 Reservas de la biosfera
    //-         p Espacios de alta biodiversidad con reconocimiento internacional.

    .row.justify-content-center.align-items-center.mb-5(data-aos="flip-up")
      .col-lg-10.col-12
        .row.justify-content-center.align-items-center
          .col-lg-6.col-12.order-lg-2.order-2
            p El turismo de naturaleza, conocido como ecoturismo, promueve el respeto por estos bienes y la conciencia sobre la conservación. Mathieson y Wall (1982) destacan la importancia de gestionar adecuadamente los bienes naturales para evitar el deterioro de los paisajes debido a la afluencia masiva de turistas.
            .cajon.cajon.color-secundario.p-4.mb-4
              p.mb-0 <b>Ejemplo</b>: el Parque Nacional del Teide en España es un bien natural que atrae a visitantes por sus paisajes volcánicos y su flora única.
          .col-lg-6.col-8.order-lg-1.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/temas/tema3/img11.png', alt='Imagen decorativa')


    separador
    #t_3_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.3 Identidad cultural

    p.mb-5(data-aos="fade-left") La identidad cultural se refiere a los valores, creencias, costumbres, prácticas y símbolos que definen a una comunidad o grupo social y que proporcionan un sentido de pertenencia a sus miembros. Estos elementos son fundamentales para la cohesión social y se reflejan en las formas de vida, tradiciones y expresiones artísticas de cada cultura. En el contexto del turismo, la cultura local es uno de los principales atractivos, ya que los visitantes buscan experiencias auténticas que les permitan sumergirse en costumbres y estilos de vida diferentes.

    .row.justify-content-center.align-items-center.mb-5(data-aos="flip-up")
      .col-lg-4.col-6.order-lg-1.order-1.mb-lg-0.mb-4
        figure
          img(src='@/assets/curso/temas/tema3/img12.png', alt='Imagen decorativa')
      .col-lg-8.col-12.order-lg-2.order-2
        AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta--azul")
          .row(titulo="Turismo y preservación de la identidad cultural")
            .col-lg-12.mb-4.mb-lg-0
              p El turismo puede desempeñar un papel crucial en la conservación de la identidad cultural, ya que genera ingresos y recursos para la preservación de prácticas, monumentos y tradiciones. Sin embargo, si no se gestiona adecuadamente, el turismo también puede representar una amenaza para la autenticidad cultural, provocando la homogenización cultural. Esto ocurre cuando las prácticas culturales se alteran o simplifican para adaptarse a las expectativas de los turistas, perdiendo su valor auténtico.
              p Jafari (1996) subraya la necesidad de equilibrar la exposición cultural con la autenticidad, para evitar que la cultura se mercantilice en exceso. En otras palabras, se debe permitir que los turistas conozcan y aprecien las expresiones culturales, siempre respetando las normas y el contexto social en el que estas se desarrollan. 
          .row(titulo="Ejemplos de identidad cultural y turismo")
            .col-lg-12.mb-4.mb-lg-0
              p Un ejemplo de este equilibrio es la presentación de los rituales y ceremonias maoríes en Nueva Zelanda. Estas prácticas son una manifestación de la identidad cultural maorí que atrae a muchos turistas, quienes buscan conocerlas de manera auténtica. Sin embargo, las autoridades turísticas y las comunidades locales trabajan en conjunto para asegurar que estas prácticas se mantengan fieles a sus raíces, respetando las tradiciones y la dignidad del pueblo Maorí.
              p Otro ejemplo es la preservación de la lengua catalana en España, donde el turismo ha contribuido a revitalizar el interés por las lenguas regionales, mientras que las autoridades locales implementan políticas que fomentan su uso y transmisión en entornos turísticos.
          .row(titulo="Estrategias para proteger la identidad cultural")
            .col-lg-12.mb-4.mb-lg-0
              p Para evitar la pérdida de autenticidad y proteger la identidad cultural frente al turismo, se han desarrollado varias estrategias:
              p <b>Participación comunitaria</b>: involucrar a las comunidades locales en la planificación y gestión turística para asegurar que sus intereses y valores sean respetados.
              p <b>Educación y sensibilización</b>: informar a los turistas sobre la importancia de respetar las culturas locales, sus normas y prácticas.
              p <b>Políticas de turismo sostenible</b>: implementar regulaciones que limiten el impacto del turismo masivo en las culturas locales, promoviendo prácticas responsables y respetuosas.

    separador
    #t_3_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.4 Tipología de turistas

    p.mb-5(data-aos="fade-left") La tipología de turistas se refiere a la clasificación de los viajeros en función de sus motivaciones, intereses, comportamientos y preferencias. Esta categorización es fundamental para que los gestores turísticos adapten la oferta de productos y servicios a las necesidades específicas de los diferentes tipos de turistas. Además, la tipología de turistas permite identificar tendencias y orientar estrategias de <i>marketing</i>, facilitando la segmentación del mercado y la creación de experiencias personalizadas. Algunas de las categorías más comunes incluyen:


    TabsC.color-acento-botones.mb-5(data-aos="flip-up")
      .py-3.py-md-4(titulo="Turistas de ocio")
        .row.justify-content-center.p-4
          .col-lg-7.col-10.order-lg-1.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/temas/tema3/img13.png', alt='Imagen decorativa')
          .col-lg-5.order-lg-1.order-2
            p Viajan para relajarse, disfrutar de actividades recreativas y escapar de la rutina diaria. Suelen preferir destinos que ofrezcan comodidad, entretenimiento y actividades de bajo esfuerzo, como playas, <i>resorts</i>, o cruceros.

      .py-3.py-md-4(titulo="Turistas culturales")
        .row.justify-content-center.p-4
          .col-lg-7.col-10.order-lg-1.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/temas/tema3/img14.png', alt='Imagen decorativa')
          .col-lg-5.order-lg-1.order-2
            p Están interesados en conocer el patrimonio cultural, la historia y las tradiciones de un lugar. Este tipo de turistas visita museos, sitios arqueológicos, monumentos históricos y participa en festividades locales. Buscan una inmersión en la cultura y las costumbres del destino.

      .py-3.py-md-4(titulo="Turistas de aventura")
        .row.justify-content-center.p-4
          .col-lg-7.col-10.order-lg-1.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/temas/tema3/img15.png', alt='Imagen decorativa')
          .col-lg-5.order-lg-1.order-2
            p Su enfoque está en las actividades al aire libre y los deportes extremos, como senderismo, escalada, <i>rafting</i> o surf. Prefieren destinos naturales que ofrezcan retos físicos y contacto con la naturaleza. Los destinos con paisajes exuberantes y oportunidades para la exploración son atractivos para este grupo.

      .py-3.py-md-4(titulo="Turistas de negocios")
        .row.justify-content-center.p-4
          .col-lg-7.col-10.order-lg-1.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/temas/tema3/img16.png', alt='Imagen decorativa')
          .col-lg-5.order-lg-1.order-2
            p Viajan por razones laborales, como reuniones, conferencias o ferias. Aunque el propósito principal de su viaje no es recreativo, a menudo combinan trabajo con ocio, aprovechando para disfrutar de la oferta cultural o gastronómica del destino.

    p.mb-5(data-aos="fade-left") Además de las categorías generales, existen otras clasificaciones más específicas que son útiles para un análisis más detallado: 

    .tarjeta.tarjeta--BG01.p-4.mb-5(data-aos="flip-up")
      SlyderA(tipo="b")
        .row.justify-content-center.p-4
          .col-lg-6.order-lg-1.order-2
            h4 Turistas ecológicos
            p Son viajeros que buscan un turismo sostenible y responsable con el medio ambiente. Se interesan por la conservación de la biodiversidad, la reducción de la huella ecológica y el apoyo a comunidades locales. Los destinos que promueven el turismo sostenible, como parques naturales, son los preferidos por este grupo.
        
          .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/temas/tema3/img17.png', alt='Imagen decorativa')

        .row.justify-content-center.p-4
          .col-lg-6.order-lg-1.order-2
            h4 Turistas gastronómicos
            p Su motivación principal es explorar la gastronomía local. Estos turistas visitan mercados, restaurantes típicos, bodegas y granjas para degustar productos autóctonos y aprender sobre la cocina regional.
        
          .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/temas/tema3/img18.png', alt='Imagen decorativa')

        .row.justify-content-center.p-4
          .col-lg-6.order-lg-1.order-2
            h4 Turistas de salud y bienestar
            p Viajan con el objetivo de mejorar su salud física o mental. Buscan experiencias relacionadas con el bienestar, como spas, retiros de yoga, termalismo o tratamientos médicos especializados.
        
          .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/temas/tema3/img19.png', alt='Imagen decorativa')

        .row.justify-content-center.p-4
          .col-lg-6.order-lg-1.order-2
            h4 Turistas religiosos
            p Motivados por la fe, realizan peregrinaciones o visitas a lugares sagrados. Ejemplos comunes incluyen la visita a sitios como el Vaticano, La Meca, o el Camino de Santiago.
        
          .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/temas/tema3/img20.png', alt='Imagen decorativa')

    p.mb-5(data-aos="fade-left") Identificar la tipología de los turistas es crucial para diseñar productos turísticos específicos y desarrollar estrategias de <i>marketing</i> efectivas. Cooper et al. (2008) señalan que las preferencias y comportamientos de los turistas varían ampliamente según el tipo de viajero, lo que obliga a los destinos a diversificar su oferta para satisfacer estas demandas.

    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col-lg-10.col-12
        .cajon.cajon.color-secundario.p-4.mb-4
          p.mb-0 <b>Ejemplo</b>: Los gestores turísticos deben tener en cuenta las motivaciones de cada tipo de turista al planificar sus infraestructuras y servicios. Por ejemplo, un destino que busca atraer a turistas de aventura debe priorizar la creación de rutas de senderismo seguras y la oferta de guías experimentados, mientras que un destino cultural debe enfocarse en la preservación y promoción de su patrimonio histórico.

    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col-xl-4.col-lg-6.col-sm-10.mb-xl-0.mb-4(data-aos="fade-right")
        .tarjetas-up(@mouseover="mostrarIndicador = false")
          .indicador--hover(v-if="mostrarIndicador")
          img(src='@/assets/curso/temas/tema3/img24.svg' alt="Imagen decorativa")
          .tarjetas-up_card.BG04
            .title.d-flex.align-items-center.justify-content-center.mb-4
              span
                i.fas.fa-caret-up.fa-2x.me-3
                i.fas.fa-caret-down.fa-2x.me-3
              h4.mb-0 Ejemplo turista de aventura
            p.text-center.mb-0 El turista de aventura que viaja a Costa Rica, atraído por actividades como el senderismo en la selva tropical, el <i>rafting</i> en ríos de aguas bravas y el avistamiento de fauna exótica.

      .col-xl-4.col-lg-6.col-sm-10.mb-xl-0.mb-4(data-aos="fade-right")
        .tarjetas-up(@mouseover="mostrarIndicador = false")
          .indicador--hover(v-if="mostrarIndicador")
          img(src='@/assets/curso/temas/tema3/img25.svg' alt="Imagen decorativa")
          .tarjetas-up_card.BG04
            .title.d-flex.align-items-center.justify-content-center.mb-3
              span
                i.fas.fa-caret-up.fa-2x.me-3
                i.fas.fa-caret-down.fa-2x.me-3
              h4.mb-0 Ejemplo turista cultural
            p.text-center.mb-0 El turista cultural en París muestra un interés más marcado en visitar museos, galerías de arte, monumentos icónicos como la Torre Eiffel, y experimentar la rica historia y cultura de la ciudad.

      .col-xl-4.col-lg-6.col-sm-10.mb-xl-0.mb-4(data-aos="fade-right")
        .tarjetas-up(@mouseover="mostrarIndicador = false")
          .indicador--hover(v-if="mostrarIndicador")
          img(src='@/assets/curso/temas/tema3/img26.svg' alt="Imagen decorativa")
          .tarjetas-up_card.BG04
            .title.d-flex.align-items-center.justify-content-center.mb-4
              span
                i.fas.fa-caret-up.fa-2x.me-3
                i.fas.fa-caret-down.fa-2x.me-3
              h4.mb-0 Ejemplo turista gastronómico
            p.text-center.mb-0 Que viaja a Italia con la intención de degustar platos tradicionales como la pasta y el vino, participando en recorridos culinarios por la región de la Toscana.

    separador
    #t_3_5.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.5 Tendencias de consumo del turista

    p.mb-5(data-aos="fade-left") En las últimas décadas, las tendencias de consumo del turista han cambiado significativamente debido a factores como la globalización, el acceso a nuevas tecnologías y la creciente conciencia sobre el impacto del turismo. Estas tendencias no solo reflejan las expectativas cambiantes de los viajeros, sino que también obligan a las empresas y destinos turísticos a adaptarse para seguir siendo competitivos. Las principales tendencias actuales incluyen:

    .titulo.mb-5(data-aos="flip-up")
      img(src='@/assets/curso/temas/ico.svg', alt='Imagen decorativa')
      h4.mb-0 Turismo sostenible

    p.mb-5(data-aos="fade-left") El interés por el turismo sostenible ha aumentado considerablemente. Los turistas están cada vez más preocupados por el impacto de sus viajes en el medio ambiente y las comunidades locales. Buscan minimizar su huella ecológica a través de prácticas como:

    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col-lg-10.col-12
        .cajon.cajon1.p-4
          .row.justify-content-center.align-items-center
            .col-lg-3.col-4.mx-auto.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/temas/tema3/img27.svg', alt='Imagen decorativa')
            .col-lg-9.col-12
              ul.lista-ul
                li 
                  i.fas.fa-angle-right
                  p.mb-0 Viajar a destinos que promuevan la conservación de la naturaleza y la cultura local.
                li 
                  i.fas.fa-angle-right
                  p.mb-0 Participar en actividades respetuosas con el entorno, como el ecoturismo.
                li 
                  i.fas.fa-angle-right
                  p.mb-0 Escoger alojamientos y empresas que adopten prácticas de sostenibilidad, como el uso de energía renovable o la gestión eficiente de los recursos hídricos.

    p.mb-5(data-aos="fade-left") Esta tendencia no solo responde a la preocupación ambiental, sino también a un creciente deseo de vivir experiencias más auténticas y significativas. Las empresas turísticas que ofrecen productos alineados con la sostenibilidad, como <i>eco-lodges</i> o <i>tours</i> con impacto social, están captando una mayor cuota de mercado. Un ejemplo destacado son los <i>tours</i> en la Amazonía que integran la conservación de la biodiversidad con la participación de comunidades locales.

    .titulo.mb-5(data-aos="flip-up")
      img(src='@/assets/curso/temas/ico.svg', alt='Imagen decorativa')
      h4.mb-0 Experiencias personalizadas

    p.mb-5(data-aos="fade-left") Los turistas actuales buscan experiencias personalizadas, que se ajusten a sus intereses individuales. El concepto de "un tamaño único para todos" ha sido reemplazado por la demanda de productos turísticos diseñados a medida. Algunos ejemplos incluyen:

    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col-lg-10.col-12
        .cajon.cajon1.p-4
          .row.justify-content-center.align-items-center
            .col-lg-3.col-4.mx-auto.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/temas/tema3/img28.svg', alt='Imagen decorativa')
            .col-lg-9.col-12
              ul.lista-ul
                li 
                  i.fas.fa-angle-right
                  p.mb-0 <i>Tours</i> privados que permiten a los viajeros diseñar su propio itinerario.
                li 
                  i.fas.fa-angle-right
                  p.mb-0 Experiencias culturales inmersivas, como aprender a cocinar platos locales en casa de un residente o participar en talleres de artesanía tradicional.
                li 
                  i.fas.fa-angle-right
                  p.mb-0 Alojamientos boutique que ofrecen servicios exclusivos, adaptados a los gustos y preferencias de los huéspedes.

    p.mb-5(data-aos="fade-left") Esta tendencia ha llevado a los destinos turísticos a diversificar su oferta y a colaborar con proveedores locales para crear experiencias diferenciadas. Además, las empresas turísticas están utilizando datos y análisis predictivos para personalizar la experiencia de cada cliente, desde las recomendaciones de actividades hasta los servicios adicionales.

    .tarjeta.tarjeta--BG05.p-4.mb-5
      .row.justify-content-center.align-items-center(data-aos="flip-up")
        .col-lg-10.col-12
          .row.justify-content-center.align-items-center
            .col-lg-6.col-12.order-lg-2.order-2
              .cajon.cajon1.color-primario.p-4.mb-4
                p.mb-0 El uso de la tecnología ha transformado radicalmente la forma en que los turistas planifican, reservan y disfrutan de sus viajes. Las plataformas digitales, aplicaciones móviles y herramientas interactivas permiten a los viajeros tener un control total sobre su experiencia. Entre los avances más destacados están:
              ul.lista-ul
                li 
                  i.fas.fa-angle-right
                  p.mb-0 Aplicaciones de reserva en tiempo real, que permiten a los turistas reservar alojamiento, transporte y actividades desde su dispositivo móvil.
                li 
                  i.fas.fa-angle-right
                  p.mb-0 Guías interactivas y <i>tours</i> virtuales que ayudan a los viajeros a explorar destinos antes de llegar.
                li 
                  i.fas.fa-angle-right
                  p.mb-0 Realidad aumentada y realidad virtual, que están siendo utilizadas por algunos destinos para ofrecer experiencias más inmersivas a los visitantes.
            .col-lg-6.col-7.order-lg-1.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/temas/tema3/img29.png', alt='Imagen decorativa')

    p.mb-5(data-aos="fade-left") Esta tendencia también ha impulsado la economía colaborativa, con plataformas como Airbnb y Uber, que permiten a los turistas acceder a servicios de alojamiento y transporte de manera más flexible y personalizada. El turismo digital ha generado una mayor competencia, obligando a las empresas tradicionales a adaptarse e innovar en sus servicios.
    p.mb-5(data-aos="fade-left") Otra tendencia emergente es el consumo responsable, en el que los turistas optan por apoyar empresas y destinos que se alinean con valores éticos y sociales. Los viajeros buscan experiencias que promuevan el bienestar de las comunidades locales y la justicia social. Esto puede manifestarse a través de:

    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col-lg-10.col-12
        .cajon.cajon1.p-4
          .row.justify-content-center.align-items-center
            .col-lg-3.col-4.mx-auto.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/temas/tema3/img30.svg', alt='Imagen decorativa')
            .col-lg-9.col-12
              ul.lista-ul
                li 
                  i.fas.fa-angle-right
                  p.mb-0 La elección de alojamientos y <i>tours</i> que empleen a personas locales y reinviertan en la economía local.
                li 
                  i.fas.fa-angle-right
                  p.mb-0 El consumo de productos locales, como artesanías y alimentos, para apoyar la producción sostenible y las economías comunitarias.
                li 
                  i.fas.fa-angle-right
                  p.mb-0 La participación en proyectos de voluntariado o turismo solidario que contribuyan al desarrollo de las comunidades visitadas.

    p.mb-5(data-aos="fade-left") Page (2014), menciona que las tendencias de consumo del turista están estrechamente vinculadas a factores socioeconómicos, como el nivel de ingresos disponibles, la clase social y el acceso a la información. Los avances tecnológicos han facilitado el acceso a la información turística, lo que permite a los viajeros estar mejor informados y ser más exigentes con las ofertas y servicios que eligen.

    .row.justify-content-center.align-items-center.mb-5(data-aos="flip-up")
      .col-lg-10.col-12
        .row.justify-content-center.align-items-center
          .col-lg-6.col-12.order-lg-2.order-2
            p Además, factores como la inflación, las crisis económicas o la disponibilidad de recursos económicos en las regiones de origen de los turistas pueden influir en sus decisiones de viaje, afectando tanto los destinos como la naturaleza de las actividades que realizan.
            .cajon.cajon.color-secundario.p-4.mb-4
              p.mb-0 Un ejemplo, es el desarrollo de aplicaciones móviles que permiten a los turistas personalizar sus viajes, como la posibilidad de reservar actividades en destino o recibir recomendaciones basadas en sus intereses previos. Además, destinos como Islandia han capitalizado en el turismo sostenible al limitar el número de visitantes en ciertas áreas naturales para preservar el ecosistema local.
          .col-lg-6.col-8.order-lg-1.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/temas/tema3/img31.png', alt='Imagen decorativa')

    separador
    #t_3_6.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.6 Oferta turística del territorio

    p.mb-5(data-aos="fade-left") La oferta turística del territorio engloba el conjunto de bienes, servicios e infraestructuras disponibles para satisfacer las necesidades y expectativas de los turistas. Este concepto no se limita a los atractivos naturales y culturales, sino que también incluye los servicios complementarios que permiten a los visitantes disfrutar de una experiencia integral. Una oferta turística competitiva y bien estructurada contribuye al posicionamiento de un destino en el mercado global. Los principales componentes de la oferta turística son:

    
    .tarjeta.tarjeta--BG01.p-4.mb-5
      .tarjeta.tarjeta--blanca.p-4
        PasosB.color-acento-botones
          .row.justify-content-center.align-items-center.p-4(titulo=" ")
            .col-lg-7.order-lg-1.order-2
              h4 Los atractivos turísticos
              p Son el núcleo de la oferta de un destino, y pueden ser de naturaleza cultural, histórica, o natural. Estos incluyen:
              ul.lista-ul
                li.mb-0 
                  i.lista-ul__vineta
                  p.mb-0 Atractivos naturales, como parques nacionales, playas y montañas.
                li 
                  i.lista-ul__vineta
                  p.mb-0 Atractivos culturales e históricos, como monumentos, museos, y festivales locales.
              p La diversidad y singularidad de los atractivos son claves para atraer diferentes tipos de turistas. Por ejemplo, un destino con una mezcla de turismo cultural y de naturaleza puede atraer tanto a viajeros interesados en la historia como a quienes buscan aventuras al aire libre.
          
            .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/temas/tema3/img33.png', alt='Imagen decorativa')

          .row.justify-content-center.align-items-center.p-4(titulo=" ")
            .col-lg-7.order-lg-1.order-2
              h4 La infraestructura turística
              p Incluye todas las facilidades que permiten a los turistas disfrutar del destino de manera cómoda y segura. Entre los elementos clave se encuentran:
              ul.lista-ul
                li 
                  i.lista-ul__vineta
                  p.mb-0 Alojamiento, desde hoteles y hostales hasta opciones más modernas como Airbnb.
                li 
                  i.lista-ul__vineta
                  p.mb-0 Restauración, con una oferta que abarca desde la comida rápida hasta la alta gastronomía.
                li 
                  i.lista-ul__vineta
                  p.mb-0 Transporte, tanto para llegar al destino (aeropuertos, estaciones de tren) como para desplazarse dentro de él (transporte público, alquiler de coches).
          
            .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/temas/tema3/img32.png', alt='Imagen decorativa')

          .row.justify-content-center.align-items-center.p-4(titulo=" ")
            .col-lg-7.order-lg-1.order-2
              h4 Los servicios turísticos
              p Complementan la experiencia del visitante y pueden incluir:
              ul.lista-ul
                li.mb-0 
                  i.lista-ul__vineta
                  p.mb-0 Guías turísticos, que ofrecen una inmersión más profunda en la cultura e historia local.
                li.mb-0 
                  i.lista-ul__vineta
                  p.mb-0 Excursiones y actividades recreativas, adaptadas a las preferencias de los turistas, como visitas a sitios de interés, deportes de aventura, o <i>tours</i> gastronómicos. 
                li 
                  i.lista-ul__vineta
                  p.mb-0 Centros de información turística, que brindan asistencia y orientación a los viajeros.
              p Estos servicios son esenciales para enriquecer la experiencia del turista y garantizar su satisfacción.
          
            .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/temas/tema3/img34.png', alt='Imagen decorativa')

    p.mb-5(data-aos="fade-left") Según Cooper et al. (2008), la diversificación de la oferta es fundamental para que un destino se mantenga competitivo en un mercado turístico global. Adaptar la oferta a diferentes segmentos de turistas culturales, de aventura, de negocios, entre otros, es esencial para atraer un público más amplio y para fomentar la fidelización de los visitantes.

    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col-lg-10.col-12
        .row.justify-content-center.align-items-center
          .col-lg-6.col-8.order-lg-1.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/temas/tema3/img35.png', alt='Imagen decorativa')
          .col-lg-6.col-12.order-lg-2.order-2
            p Los destinos que innovan en su oferta turística y buscan diferenciarse en el mercado a través de experiencias únicas y auténticas logran un mejor posicionamiento.
            .cajon.cajon.color-secundario.p-4.mb-4
              p.mb-0 <b>Ejemplo</b>: París no solo es conocida por sus monumentos icónicos como la Torre Eiffel, sino también por su gastronomía, moda y una robusta infraestructura turística que incluye una vasta red de hoteles, transporte eficiente y una amplia oferta cultural.

    p.mb-5(data-aos="fade-left") En línea con las tendencias de consumo del turista, los destinos deben adaptar su oferta para incluir experiencias sostenibles, personalizadas y tecnológicamente avanzadas. Por ejemplo, destinos que promueven el turismo sostenible deben integrar prácticas respetuosas con el medio ambiente, como el uso de energías renovables en alojamientos y la promoción de actividades ecológicas.
    p.mb-5(data-aos="fade-left") Asimismo, el uso de la tecnología en la oferta turística, como aplicaciones móviles para reservas, visitas guiadas digitales o sistemas de realidad aumentada, puede mejorar significativamente la experiencia del turista y hacerlo más atractivo para los viajeros más tecnológicos.

    separador
    #t_3_7.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.7 Valoración del territorio

    p.mb-5(data-aos="fade-left") La valoración del territorio, es el proceso de identificar y evaluar los recursos turísticos de una región para maximizar su potencial. Esta valoración implica analizar:

    .row.justify-content-center(data-aos="flip-up")
      .col-lg-10.desktop
        ImagenInfografica.color-acento-botones.mb-5
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/tema3/img36.svg', alt='Imagen decorativa')
          .tarjeta.color3.p-3(x="22%" y="9.6%" numero="+")
            p ¿Cuáles son los elementos más destacados que atraen visitantes?
          .tarjeta.color3.p-3(x="50%" y="9.6%" numero="+")
            p ¿Cuántos turistas puede soportar  el destino sin afectar su sostenibilidad?
          .tarjeta.color3.p-3(x="78%" y="10%" numero="+")
            p ¿Qué tan fácil es para los turistas  llegar al destino?

    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col-md-8.col-10.movil
        figure
          img(src='@/assets/curso/temas/tema3/img37.svg', alt='Imagen decorativa')

    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col-lg-10.col-12
        .row.justify-content-center.align-items-center
          .col-lg-6.col-12.order-lg-2.order-2
            p Bhatia (2005), menciona que una valoración adecuada del territorio es esencial para la planificación y gestión eficiente del turismo, asegurando un equilibrio entre el desarrollo económico y la preservación de los recursos.
            .cajon.cajon.color-secundario.p-4.mb-4
              p.mb-0 <b>Ejemplo</b>: la valoración del Patrimonio de la Humanidad en Machu Picchu, ha llevado a la implementación de medidas de conservación y gestión de visitantes para proteger tanto el sitio como la experiencia del turista.
          .col-lg-6.col-8.order-lg-1.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/temas/tema3/img38.png', alt='Imagen decorativa')
          

</template>

<script>
export default {
  name: 'Tema3',
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
