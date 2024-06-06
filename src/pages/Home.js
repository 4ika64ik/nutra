// src/pages/Home.js
import React from 'react';
import '../styles/Article.css';
import img1 from './img/1.jpg';
import img2 from './img/steps.jpg';
import img3 from './img/tromb.mp4';
import img4 from './img/salo.jpg'; 
import img5 from './img/varikoz.jpg';
import img6 from './img/3.jpg';
import img7 from './img/content-33.jpg';
import img8 from './img/content-32.png';
import img9 from './img/4.jpg';
import video_2 from './img/nontromb.mp4'
import Comments from './Comments';
import OrderForm from './OrderForm';
function Home() {
    return (
        <div className="article-container">
          <h1 className="article-title">La hipertensión, los vasos sanguíneos sucios y un corazón enfermo provocan una problemas. ¿Cómo evitarlo?</h1>
          <h2 className="article-subtitle">El reputado peruano especialista en el campo de la cardiología habló sobre un método sencillo.</h2>
          <p className="article-text">Marta Núñez</p>
          <p className="article-text">26 MAYO 2024</p>
          <img src={img1} alt="Image description" className="article-image" />
          <p className="article-text">
            José Luis Pérez-Albela es un experto en cardiología y profesor peruano. Es conocido por tratar a la gente sin utilizar productos químicos. Al mismo tiempo, cualquiera que caiga en sus manos se recuperará. Entre los pacientes del profesor hay personajes famosos de Perú, y también acuden a él pacientes de otros países de la América.
          </p>
          <p className="article-text">
            El profesor José Luis Pérez-Albela rara vez concede entrevistas, ya que intenta dedicar más tiempo al tratamiento de sus pacientes. Sin embargo, el corresponsal de nuestro canal tuvo suerte, el experto de renombre accedió a responder a algunas preguntas para los pacientes que no podían concertar una cita en la clínica.
          </p>
          <blockquote className="article-quote">¡La suciedad en los vasos sanguíneos es su sucio asesino!</blockquote>
          <p className="article-text">
            Todo el mundo sabe que la presión arterial, los derrames cerebrovasculares y los infartos son consecuencia de la "obstrucción" de los vasos sanguíneos por el colesterol. Sin embargo, pocas personas se dan cuenta de que esto es sólo la punta del iceberg. Los vasos sanguíneos "sucios" son los culpables de 9 de cada 10 enfermedades crónicas supuestamente incurables.
          </p>
          <p className="article-text">
            La hipertensión es una enfermedad que afecta a uno de cada tres adultos en Perú, aunque la mayoría de la población desconoce el problema y, por tanto, no toma ninguna medida. Entre las personas que son conscientes de su enfermedad, la mayoría recibe un tratamiento inadecuado: toman la medicación de forma irregular o en dosis demasiado bajas, etc. Por desgracia, un control inadecuado a largo plazo de la tensión arterial tiene efectos perjudiciales sobre el sistema cardiovascular y los riñones, causando numerosas complicaciones potencialmente mortales.
          </p>
          <p className="article-text"><strong>Profesor José Luis Pérez-Albela:</strong></p>
          <blockquote className="article-quote">
            ¡Le daré algunos datos que espero le hagan reflexionar!
          </blockquote>
          <p className="article-text">
            La causa más común de muerte en el planeta son las enfermedades cardíacas y vasculares. El colesterol es la principal causa de éstas a medida que envejecemos. Resulta que el colesterol es la sustancia más peligrosa de NUESTRO PLANETA. Mata a la gente con más frecuencia que el alcohol, la nicotina y las drogas juntas.
          </p>
          <p className="article-text">
            En el 94% de los casos, si una persona no llega a los 80 años, el colesterol es la causa. El colesterol destruye la salud. Si no se acumulara en los vasos sanguíneos, una persona podría vivir fácilmente hasta los 100 años.
          </p>
          <p className="article-text">
            ¿Qué aspecto tiene el colesterol y qué es? No les daré una descripción detallada de esta sustancia, como figura en los manuales de medicina.
          </p>
          <img src={img2} alt="Placas de colesterol" className="article-image" />
          <p className="article-text">
            A los 50 años, se acumulan hasta 5 kg de placas de colesterol en los vasos sanguíneos de una persona. Los depósitos de colesterol estrechan el lumen de los vasos sanguíneos entre 4 y 5 veces.
          </p>
          <p className="article-text">
            Esta sustancia, al estar en la sangre, se deposita en las paredes de los vasos sanguíneos. Al principio, no hay una gran placa (entre las edades de 20-25 años), a continuación, la capa de colesterol crece rápidamente (25-40 años), debido a que más y más partículas se adhieren a la capa pegajosa. COMO RESULTADO, A LOS 40 AÑOS, EL COLESTEROL REDUCE CASI A LA MITAD EL PASO DE LOS VASOS SANGUÍNEOS. En respuesta, el corazón no tiene más remedio que aumentar la presión arterial. La persona experimenta problemas relacionados con la edad y un aumento de la tensión arterial. ¡Pero ni siquiera esto es tan peligroso!
          </p>
          <p className="article-text">
            Y lo que es aún más peligroso, el colesterol obstruye por completo los pequeños vasos sanguíneos que recorren todos los tejidos. Como consecuencia del deterioro de la circulación sanguínea en los órganos internos, se desarrollan procesos patológicos. Esto conduce al desarrollo de enfermedades crónicas. Problemas con el estómago, luego con el bazo y, con el tiempo, el hígado y el páncreas se estrechan. En estos casos se empieza a perder la salud. El colesterol suele desencadenar este proceso.
          </p>
          <video src={img3} autoPlay loop muted className="article-video"></video>

          <p className="article-text">
            Colesterol. Hasta 3,5 kg de colesterol peligroso pueden acumularse en las paredes de los vasos sanguíneos de una persona a la edad de 50-60 años. En realidad depende del estado de los vasos sanguíneos del cuerpo. Si los vasos sanguíneos de las piernas están obstruidos, aparecen varices y las piernas están constantemente hinchadas. Si en el hígado se desarrolla ictericia y cirrosis, si en las articulaciones aparecen artritis y artrosis, o empieza a doler la columna vertebral. Si se obstruyen los vasos sanguíneos de los ojos, se pierde gradualmente la vista.
          </p>
          <img src={img5} alt="Varices" className="article-image" />
          <p className="article-text">
            La contaminación de los vasos sanguíneos no puede evitarse. Se acumula en los vasos sanguíneos de todos. La suciedad se acumula en los vasos sanguíneos de todo el mundo y afecta a su rápido envejecimiento.
          </p>
          <p className="article-text">
            EL COLESTEROL DESENCADENA UNA REACCIÓN EN CADENA DE ENVEJECIMIENTO EN EL ORGANISMO. Y los vasos sanguíneos contaminados acortan la vida de una persona. En lugar de 100 años (un recurso programado en nuestros cuerpos), la gente suele vivir sólo 70 años. Especialmente los que desarrollan hipertensión entre los 40 y los 50 años. Por cierto, es una de las enfermedades más comunes y evidentes de esta edad.
          </p>
          <p className="article-text">
            Además del colesterol, en los vasos sanguíneos se acumulan otras 2 sustancias peligrosas que hay que eliminar.
          </p>
          <blockquote className="article-quote"><strong>Profesor José Luis Pérez-Albela:</strong></blockquote>
          <img src={img6} alt="Doc" className="article-image" />
          <blockquote className="article-quote">
            ¡El colesterol es parte del problema, hay otras dos sustancias que se acumulan en los vasos sanguíneos!
          </blockquote>
          <p className="article-text"><strong>Masa trombótica</strong></p>
          <p className="article-text">
            Si el colesterol parece grasa, la masa trombótica (coágulos de sangre) parece queso. Los trombos se desarrollan en las paredes internas de los vasos sanguíneos. El riesgo de formación de trombos es aún mayor que con el colesterol. EN CUALQUIER MOMENTO, EL COÁGULO PUEDE DESPRENDERSE DE LA PARED Y DESPLAZARSE HASTA EL CORAZÓN O EL CEREBRO, PROVOCANDO UN INFARTO DE MIOCARDIO O UN ICTUS. Ambos son peligrosos y se asocian a una probabilidad muy alta de muerte o discapacidad.
          </p>
          <p className="article-text">
            Cuanto mayor es la persona, mayor es el riesgo. Por eso las personas mayores mueren con tanta frecuencia de ictus o infarto de miocardio.
          </p>
          <p className="article-text"><strong>Cristales de calcio</strong></p>
          <p className="article-text">
            Esto incluye sales de metales pesados, mercurio y diversas sustancias químicas acumuladas a lo largo de la vida. Por ejemplo, si una persona ha vivido en un entorno peligroso, se acumula mucho en el cuerpo. El calcio se acumula en el cuerpo de todos. Ya se ha demostrado que estas sustancias provocan cáncer. Es decir, ayudan a las células a dividirse incorrectamente, lo que es la causa del cáncer.
          </p>
          <p className="article-text">
            En casi el 98% de las muertes por cáncer, se encuentran altos niveles de depósitos cristalinos en la sangre. Todos sabemos que el mercurio es dañino. Y los altos niveles de cristales de calcio hacen que la propia sangre no sea saludable.
          </p>
          <img src={img7} alt="Cristales de calcio" className="article-image" />
          <p className="article-text">
            A partir de los 50 años, la embolia vascular se desarrolla en todo el cuerpo humano. Cuanto más sucios estén los vasos sanguíneos, mayor será la probabilidad de padecer enfermedades crónicas y más rápido envejecerás y peor te sentirás.
          </p>
          <blockquote className="article-quote"><strong>Profesor José Luis Pérez-Albela:</strong></blockquote>
          <blockquote className="article-quote">
            Le diré lo siguiente, si nunca se ha sometido a una limpieza de los vasos sanguíneos y tiene más de 50 años, significa que sus vasos sanguíneos están definitivamente contaminados.
          </blockquote>
          <p className="article-text"><strong>Síntomas de vasos sanguíneos contaminados:</strong></p>
          <img src={img8} alt="Varices" className="article-image" />
          <ul className="article-list">
            <li>Hinchazón por la mañana</li>
            <li>Tinnitus</li>
            <li>"Manchas" en la visión</li>
            <li>Dolor en las articulaciones</li>
            <li>Mareos</li>
            <li>Insomnio nocturno y somnolencia diurna</li>
            <li>Sensación constante de cansancio</li>
            <li>Discapacidad visual</li>
            <li>Deterioro de la memoria</li>
            <li>Varices</li>
            <li>Dificultad para respirar</li>
            <li>Problemas gastrointestinales comunes</li>
            <li>Problemas de sobrepeso</li>
          </ul>
          <blockquote className="article-quote"><strong>Profesor José Luis Pérez-Albela:</strong></blockquote>
          <img src={img9} alt="Varices" className="article-image" />
          <blockquote className="article-quote">
            ¿Quiere decir que limpiar los vasos sanguíneos puede prolongar la vida de las personas mayores y estabilizar la presión arterial?
          </blockquote>
          <blockquote className="article-quote"><strong>Profesor José Luis Pérez-Albela:</strong></blockquote>
          <blockquote className="article-quote">
            Ya lo sé. En la clínica, prescribimos la limpieza vascular a todos los pacientes después de los 50 años (algunos después de los 40). Y después de la limpieza comprobamos qué está pasando y cómo. APROXIMADAMENTE LA TENSIÓN ARTERIAL DE 9 DE CADA 10 PERSONAS VUELVE A LA NORMALIDAD INMEDIATAMENTE DESPUÉS DE LA LIMPIEZA Y NO ES NECESARIO NINGÚN TRATAMIENTO.
          </blockquote>
          <p className="article-text">
            En otras palabras, muchas personas que actualmente toman pastillas estabilizadoras de la tensión arterial de forma activa y diaria pueden no hacerlo. Basta con limpiar los vasos sanguíneos. Aunque la hipertensión no desaparezca por completo (que también ocurre), ¡usted seguirá estando muchas veces más sano!
          </p>
          <p className="article-text">
            Por desgracia, esta sencilla forma de normalizar la tensión arterial es ocultada activamente por médicos corruptos y empresas farmacéuticas que se benefician de tratamientos largos y caros. Cuanto más tiempo está enferma una persona, más gasta en medicación. Esto les resulta rentable. La limpieza de los vasos sanguíneos es sencilla, barata y recupera a la persona rápidamente.
          </p>
          <h2 className="article-subtitle">Método de limpieza vascular para ancianos e hipertensos</h2>
          <blockquote className="article-quote"><strong>Profesor José Luis Pérez-Albela:</strong></blockquote>
          <blockquote className="article-quote">
            Hoy en día sólo hay un producto en Perú que lo hace bien. Se llama Cardiox . Este producto fue creado en 2023 por el Instituto del corazón y vasos sanguíneos. El producto contiene:
          </blockquote>
          <ul className="article-list">
            <li>Remolacha: Mejora el metabolismo, sustancias, normaliza el trabajo de los riñones y el hígado. Además, la betaína limpia y diluye la sangre</li>
            <li>El magnesio: Еs un regulador del tono vascular, la presión arterial y la circulación periférica</li>
            <li>Ajo: Сontiene compuestos de azufre, como la alicina, que pueden ayudar a aumentar el flujo sanguíneo y relajar los vasos sanguíneos</li>
          </ul>
          <p className="article-text">
            El componente más importante del complejo Cardiox son las llamadas "moléculas activas de oxígeno", capaces de "comerse" la suciedad acumulada en los vasos sanguíneos. Disuelven el colesterol, los coágulos de sangre y los cristales de calcio.
          </p>
          <video src={video_2} autoPlay loop muted className="article-video"></video>
          <p className="article-text">
            Las "moléculas de oxígeno activo" fueron descubiertas en 2007 por científicos japoneses. Dos científicos japoneses ganaron el Premio Nobel por sus investigaciones en este campo. Hoy en día, las "moléculas de oxígeno activo" se utilizan activamente en la medicina mundial.
          </p>
          <img src="img6.jpg" alt="Molecules of Oxygen" className="article-image" />
          <p className="article-text">
            Los japoneses solían limpiar los vasos sanguíneos con hierbas, pero ahora utilizan productos especiales de "oxígeno activo". Y hoy vemos el resultado: Japón ostenta el récord de mayor esperanza de vida. No es raro que los japoneses vivan hasta los 100 años. Los propios japoneses empezaron a prestar más atención a la limpieza vascular a partir de los 40-50 años, cuando se estableció el Programa Nacional de Mejora de la Salud y la Longevidad. En esta ley, la limpieza vascular se estipula en una cláusula aparte.
          </p>
          <h2 className="article-subtitle">¿Cuánto tiempo hay que tomar Cardiox para limpiar los vasos sanguíneos?</h2>
          <p className="article-text">
            La duración media del curso es de 2-4 semanas. Cuando haya terminado de tomar el producto, debe fijarse en cómo se siente.
          </p>
          <p className="article-text">
            Voy a describir lo que Cardiox hará por su cuerpo y su salud durante la limpieza y durante varios meses después.
          </p>
          <h3 className="article-subtitle">Limpia y mejora el estado de los vasos sanguíneos</h3>
          <p className="article-text">
            Gracias a sus principios activos, Cardiox disuelve los depósitos de colesterol, los coágulos y el calcio. Además, gracias a la remolacha, el tóner aumenta el tono de los vasos sanguíneos y restaura su elasticidad. Tras un mes de uso, estos estudios demuestran que los vasos sanguíneos están tan limpios como los de los jóvenes de entre 25 y 30 años. Se produce una regeneración capilar. Como resultado, la tensión arterial deja de aumentar, desaparece la debilidad, mejora el sueño y las heridas cicatrizan más rápidamente. Además, aumenta la vitalidad. Tendrá mucha energía, querrá hacer las tareas domésticas o trabajar en el jardín.
          </p>
          <h3 className="article-subtitle">Regenera los órganos internos y las articulaciones</h3>
          <p className="article-text">
            Tras la limpieza vascular, los órganos internos comienzan a regenerarse. Por suerte, la naturaleza nos ha dotado de la capacidad de regenerar las células. Gracias a ello, muchas enfermedades desaparecen. Por ejemplo, el páncreas o el bazo pueden dejar de doler. Muy a menudo, las úlceras gástricas o duodenales desaparecen tras la purificación de los vasos sanguíneos. Además, las articulaciones pueden curarse. Los quistes en el cuello, la espalda y las articulaciones desaparecen, el cartílago se restaura. Las rodillas y los dedos ya no duelen cuando cambia el tiempo. Se recupera la libertad de movimientos.
          </p>
          <h3 className="article-subtitle">El exceso de peso desaparece</h3>
          <p className="article-text">
            El sobrepeso empeora el estado de una persona con hipertensión. Cuanto mayor es el exceso de peso, mayor es la tensión en los vasos sanguíneos, el corazón y las articulaciones. A menudo, la causa del aumento de peso es la obstrucción de los vasos sanguíneos, porque la glucosa no puede salir de los tejidos. La eliminación de impurezas conduce automáticamente a la pérdida de peso. Además, Cardiox contiene El magnesio, que acelera la descomposición de las grasas. Por término medio, una persona pierde de 8 a 12 kg de peso extra en un mes después de la limpieza.
          </p>
          <h3 className="article-subtitle">Mejora la memoria y la visión</h3>
          <p className="article-text">
            Cardiox contiene Ajo, que puede restablecer la microcirculación en el fondo del ojo, de modo que la visión de la persona se recupera gradualmente. Muchas personas pueden volver a ver de lejos. Se produce una restauración completa de los vasos sanguíneos de los ojos. Las personas con vasos sanguíneos limpios no corren peligro de ceguera. Todos los oftalmólogos lo saben.
          </p>
          <p className="article-text">
            Y lo que es más importante, ahora puede vivir sin pastillas. Olvídese de ir a la farmacia a por medicamentos para la tensión arterial como si fuera una pesadilla. Lo dejará atrás, porque su tensión arterial se estabilizará y ya no le molestará.
          </p>
          <h2 className="article-subtitle">¿Por qué Cardiox ha desaparecido de la mayoría de las farmacias?</h2>
          <p className="article-text">
            Desafortunadamente, sí. Desde principios de este año, Cardiox ya no está disponible en farmacias. El conflicto se originó por la codicia de las cadenas de farmacias, que exigían 3 veces más por cada empaque. Con un gran margen sobre el precio del fabricante (el coste de Cardiox en algunas farmacias de Ciudad de Perú era inalcanzable), los farmacéuticos querían imponer un sobreprecio al fabricante.
          </p>
          <p className="article-text">
            Los representantes de las farmacias se justificaron alegando que este sobreprecio les permite sobrevivir. Además, tras limpiar los vasos sanguíneos con este producto, la gente ya no necesita la medicación que antes tomaba a todas horas. La gente deja de necesitar disminuir la tensión y no compra analgésicos. El consumo de medicamentos para el asma y la diabetes disminuye considerablemente. Y esto causa pérdidas a las farmacias. Así que exigieron el precio más alto para Cardiox. Como consecuencia, el fabricante de Cardiox ha roto los contactos con todas las farmacias y ha pasado a distribuir exclusivamente por internet. En principio, es lo correcto. Juzgue usted mismo: no hay que pagar alquiler de un punto de venta, no hay sobornos a las farmacias. Por eso Cardiox está ahora disponible como parte de una oferta especial.
          </p>
          <h2 className="article-subtitle">Programa de descuentos "Vasos límpios"</h2>
          <p className="article-text">
            Nuestro instituto, junto con el Centro Nacional de Investigación Médica en Cirugía Cardiovascular y el fabricante Cardiox, ha puesto en marcha un programa de descuentos en el marco del proyecto de telemedicina (Medicina por Internet).
          </p>
          <h2 className="article-subtitle">¿Qué se necesita para participar en el programa?</h2>
          <p className="article-text">
            Para pedir Cardiox, debe cumplir las siguientes condiciones:
          </p>
          <ul className="article-list">
            <li>Tiene que vivir en nuestro país. No enviamos Cardiox fuera del país.</li>
            <li>Cardiox solo está disponible para uso personal. ¡Realmente les pido a los revendedores que dejen el producto a la gente que lo necesita! ¡Ganar dinero con las personas mayores es inhumano!</li>
            <li>Puede dejar su solicitud en este sitio web rellenando el formulario especial que figura a continuación. Debe proporcionar un número de teléfono para que nuestro asesor pueda contactarlo</li>
          </ul>
          <p className="article-text">
            ¡Aproveche esta oportunidad antes que otros! Como he mencionado antes, por desgracia no tenemos suficiente para todos los hipertensos y ancianos de Perú. Así que decidimos compartir el producto con aquellos que dejen una solicitud. Si desea mejorar su salud y deshacerse de la hipertensión mediante la limpieza profunda de los vasos sanguíneos, debe pedir el producto tan pronto como sea posible, mientras esté disponible.
          </p>
          <blockquote className="article-quote"><strong>¡Atención! ¡Cardiox se termina rápidamente!</strong></blockquote>
          <p className="article-text">¡El número de paquetes disponibles está disminuyendo rápidamente!</p>
          <p className="article-text"><strong>Actualmente queda disponible: 12 uds.</strong></p>
          <h2 className="article-subtitle">ADIVINA EN QUÉ PUERTA ESTÁ EL 50% DE DESCUENTO</h2>
          <OrderForm></OrderForm>
          <h2 className="article-subtitle">COMENTARIOS</h2>
          <Comments></Comments>
        </div>
      );
    
}

export default Home;
