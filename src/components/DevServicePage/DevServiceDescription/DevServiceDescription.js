import React from 'react';

import classes from './DevServiceDescription.module.scss';
import MasonryLayout from '../../UI/MasonryLayout/MasonryLayout';
import InfoPiece from '../../UI/InfoPiece/InfoPiece';

const DevServiceDescription = () => {
    return (
        <section>
            <h2 className={classes.serviceIntro}>Usamos los mejores procesos y tecnologías para crear tu sitio:</h2>
            <MasonryLayout>
                <InfoPiece title='Interfaz Gráfica Intuitiva' masonryLayout={true}>
                    <p>Diseñamos interfaces gráficas que los usuarios no tengan que aprender a usar, así podrán encontrar lo que buscan rápidamente. Esto crea mayor satisfacción hacia tu marca promoviendo así la conversión de clientes compradores.</p>
                </InfoPiece>
                <InfoPiece title='Diseño Responsive' masonryLayout={true}>
                    <p>El diseño web responsive es el enfoque que sugiere que el diseño y el desarrollo deben responder al comportamiento y al entorno del usuario según el tamaño de la pantalla, la plataforma y la orientación del dispositivo.</p>
                    <p>A medida que el usuario cambia de su computadora portátil a su teléfono, el sitio web debe cambiar automáticamente para adaptarse a la resolución, el tamaño de la imagen y las capacidades de scripting.</p>
                </InfoPiece>
                <InfoPiece title='Diseño Mobile-first' masonryLayout={true}>
                    <p>El diseño mobile-first es una estrategia de diseño en la que comenzamos dibujando y creando un prototipo de la pantalla más pequeña primero y abriéndonos camino hasta pantallas más grandes. Esencialmente, se trata de brindar la experiencia de usuario correcta al dispositivo correcto.</p>
                    <p>La razón por la que esto tiene sentido es que con un espacio tan limitado en pantallas pequeñas, los diseñadores deben priorizar los aspectos más importantes de tu sitio web, es decir, el contenido.</p>
                    <p>También debemos tener en cuenta que a partir de Febrero del 2019, los dispositivos móviles representaron el 48 por ciento de las visitas a páginas web en todo el mundo. Esto augura un futuro prometedor para el uso de Internet móvil, ya que se prevé que el tráfico de datos móviles a nivel mundial aumentará casi siete veces entre 2017 y 2022.</p>
                </InfoPiece>
                <InfoPiece title='Construido con React' masonryLayout={true}>
                    <p>Con el principio de que el HTML y JavaScript están obligados a colaborar de lado a lado, React se creó con una mentalidad empresarial al aprovechar la velocidad de carga de la página web más rápida, la facilidad de SEO y la reutilización del código mediante la combinación de las dos tecnologías.</p>
                    <p>Esto promueve que los usuarios no se vayan de la página antes que cargue, ya que ayuda a que el tiempo de carga sea más rápido, generando más ventas hacia tu empresa. </p>
                    <p>Así mismo, la facilidad de crear componentes agiliza el tiempo de desarrollo y mantenimiento del sitio.</p>
                </InfoPiece>
                <InfoPiece title='SEO' masonryLayout={true}>
                    <p>SEO significa optimización de motores de búsqueda. Es el proceso de obtener tráfico de los resultados de búsqueda gratuitos, orgánicos, editoriales o naturales en los motores de búsqueda.</p>
                </InfoPiece>
                <InfoPiece title='Construido con Accesibilidad' masonryLayout={true}>
                    <p>La accesibilidad es un atributo importante para cada sitio web, ya sea grande y complejo, o pequeño y simple. Un sitio web creado con accesibilidad en mente significa que puede ser visitado y utilizado fácilmente por todos, incluidas las personas con discapacidades.</p>
                    <p>Implementamos en tu sitio la Iniciativa de Accesibilidad Web - Aplicaciones de Internet Enriquecidas Accesibles (WAI-ARIA) para que tus usuarios con ceguera y baja visión, sordera y pérdida auditiva, movimiento limitado, especialmente a las personas que dependen de los lectores de pantalla y a las personas que no pueden usar un mouse puedan navegar y entender fácilmente la información que les quieras transmitir.</p>
                    <p>Con un sitio web accesible podrás alcanzar a una audiencia más grande en todo el mundo expandiendo tu marca hacia a las fronteras a donde muchos no han llegado.</p>
                </InfoPiece>
                <InfoPiece title='Diseño Offline-first' masonryLayout={true}>
                    <p>La capacidad fuera de línea es una característica clave de las aplicaciones web progresivas modernas, y es indispensable en circunstancias cuando tenemos una conexión a internet lenta o inexistente, esto le puede ocurrir a tus usuarios en cualquier momento. Sin embargo, cuando aplicamos el diseño offline-first tus usuarios tendrán la capacidad de ver la página nuevamente aún cuando les falle la conexión a internet. </p>
                    <p>Dejarás de tratar la falta de conectividad como un error. Tu sitio web debe ser capaz de manejar las desconexiones y continuar con el negocio de la manera más ingeniosa posible.</p>
                    <p>La calidad en un servicio o producto no es lo que pones en él. Es lo que el cliente obtiene de ello.</p>
                </InfoPiece>
            </MasonryLayout>
        </section>
    );
}

export default DevServiceDescription