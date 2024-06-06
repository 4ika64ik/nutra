import React, { useState, useEffect } from 'react';
import '../styles/Article.css';

import img1 from './comment/1.jpg';
import img2 from './comment/2.jpg';
import img3 from './comment/3.jpg';
import img4 from './comment/4.jpg';
import img5 from './comment/5.jpg';
import img6 from './comment/6.jpg';
import img7 from './comment/7.jpg';
import img8 from './comment/8.jpg';
import img9 from './comment/9.jpg';
import img10 from './comment/10.jpg';

const getCurrentDateTime = () => {
  return new Date().toLocaleString();
};

const initialComments = [
  {
    img: img1,
    name: "Angélica Beltrán",
    date: getCurrentDateTime(),
    text: "Muchas gracias por dar a los ancianos esta oportunidad tan grande. Cardiox me ha ayudado mucho. Me subía la tensión, pero ahora es normal. Antes me dolía siempre la rodilla, ahora ya no. Los dolores de cabeza han desaparecido. Se acabó el amargor de boca. Y muchos otros cambios. Es como si estuviera rejuveneciendo."
  },
  {
    img: img2,
    name: "Mario Jaramillo",
    date: getCurrentDateTime(),
    text: "Lo pedí. Espero que haya suficientes paquetes disponibles para mí. Tengo 64 años и a veces me desmayo. He leído mucho sobre lo que se puede hacer para limpiar los vasos sanguíneos и lo mucho que ayuda. Me gustaría probarlo."
  },
  {
    img: img3,
    name: "Eva Bustamante",
    date: getCurrentDateTime(),
    text: "Cardiox ES EL MEJOR PRODUCTO DE TODOS. Al principio tomé muchos productos diferentes. Sé que eran productos anticuados. Pero no me gusta ir a especialistas и no me molestaba. De vez en cuando los tomaba cuando tenía la tensión alta o me dolía el corazón. Pero de repente dejaron de funcionar. Así que fui a un especialista и me aconsejó que probara un nuevo продукт llamado Cardiox, el joven especialista aún creía que la medicina debe ser para las personas и не para ganar dinero! Cardiox me ayudó casi al instante, mi tensión arterial bajó gradualmente hasta normalizarse, но continué el tratamiento tal como me había recomendado el especialista. Al cabo de 3 semanas, me había olvidado de la hipertensión. También desaparecieron las varices que me molestaban desde hacía 10 años. Tenía otro problema de mujer, но también ha desaparecido. Me siento tan bien как когда era joven!"
  },
  {
    img: img4,
    name: "Lucas Fernández",
    date: getCurrentDateTime(),
    text: "Yo también uso Cardiox. A mí también me ha ayudado mucho. Mi bienestar ha mejorado aún más. Lo recomiendo a todas las personas mayores."
  }
];

const additionalComments = [
  {
    img: img5,
    name: "Marta González",
    text: "Confirmado! Es un producto increíble! Conseguí Cardiox como se anunciaba, con descuento. Tengo la tensión alta, con picos casi todos los días, me dolía la cabeza por las tardes, ни siquiera los аналгésicos me ayudaban. Pero entonces descubrí que mi dolor de cabeza se debe a mi tensión arterial. Но ese не es el punto. Un colega me recomendó Cardiox, conseguí pedirlo как parte de un programa de descuentos и me alegré mucho. En 2 meses era una persona completamente diferente! Me di cuenta de que nunca había vivido antes de la limpieza vascular! Ya не me duele la cabeza, mis varices han desaparecido и, LO MÁS IMPORTANTE, he perdido 9 kilos! Bajé de 94 a 74 kg. Eso conlleva la нормализация de la circulación!"
  },
  {
    img: img6,
    name: "Luz Figueroa",
    text: "Lo respaldo! Un продукт muy eficaz для mis problemas de tensión arterial. Mi presión es ahora stable de 120/80."
  },
  {
    img: img7,
    name: "Tania Rios",
    text: "Me arriesgué и не me arrepiento. Si tienes problemas с los vasos sanguíneos, sin duda te lo recomiendo. Не he tenido efectos secundarios и estoy muy contenta con los resultados."
  },
  {
    img: img8,
    name: "Mónica Chamba",
    text: "Agradezco mucho la información sobre este продукт. He estado buscando algo así durante mucho tiempo. Estoy deseando que llegue el pedido. Conseguí hacer el pedido en promoción! Gracias!"
  },
  {
    img: img9,
    name: "Arturo Pérez",
    text: "Tenía la presión arterial alta. Por qué digo tenía, потому что ya не la tengo, se fue... después de unos 10 días! Gracias por eso!"
  },
  {
    img: img10,
    name: "Juan Méndez",
    text: "Gracias por Cardiox! Acabo de empezar a tomarlo, но ya noto el cambio. Veremos qué pasa en una semana. Es demasiado pronto para decir algo, escribiré más tarde. Но не me sube la tensión, ни siquiera la noto. Así que creo que todo irá bien."
  }
];

const Comments = () => {
  const [comments, setComments] = useState(initialComments);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    if (showAll) {
      let commentIndex = 0;
      const interval = setInterval(() => {
        if (commentIndex < additionalComments.length) {
          const newComment = { ...additionalComments[commentIndex], date: getCurrentDateTime() };
          setComments(prevComments => [...prevComments, newComment]);
          commentIndex++;
        } else {
          clearInterval(interval);
        }
      }, Math.floor(Math.random() * (20000 - 2000 + 1)) + 2000);
    }
  }, [showAll]);

  return (
    <div className="article-comments" onMouseEnter={() => setShowAll(true)}>
      {comments.map((comment, index) => (
        <div key={index} className="article-comment">
          <img src={comment.img} alt={`Comment ${index + 1}`} className="comment-image" />
          <div className="comment-content">
            <p className="article-text"><strong>{comment.name}</strong> <span className="comment-date">{comment.date}</span></p>
            <p className="article-text">{comment.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Comments;
