import React from 'react';
import Banner from './Banner';
import Card from "./Card";
import "./Home.css";

function Home() {
    return (
        <div className="home">
            <Banner />
            <div className="home__section">
            <Card
                src="https://a0.muscache.com/im/pictures/15159c9c-9cf1-400e-b809-4e13f286fa38.jpg?im_w=720"
                title="Alojamientos únicos"
                description="Carpas, casas en los árboles... Estos espacios son mucho más que un lugar para dormir." />
                <Card
                src="https://a0.muscache.com/im/pictures/4a2f688e-0b33-4feb-932f-494b9a37348c.jpg?im_w=720"
                title="Experiencias en línea"
                description="Disfrutá desde la comodidad de tu casa de actividades únicas a cargo de anfitriones excepcionales."/>
                <Card 
                src="https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=720"
                title="Alojamientos Enteros"
                description="Lugares privados, cómodos y amplios para disfrutar con amigos o familiares."/>
            </div>
            <div className="home__section">
                <Card
                src="https://a0.muscache.com/im/pictures/c5526310-1d0e-4cd2-8590-0509a7c9d8d8.jpg?im_w=1200"
                title="¡Exclusivo apartamento en el centro de la ciudad!"
                description="Elegante apartamento de diseño para 3 huéspedes con increíbles vistas de Buenos Aires. En pleno Puerto Madero."
                price="$20/night"/>
                <Card
                src="https://a0.muscache.com/im/pictures/27714019/e4f4112b_original.jpg?im_w=1440"
                title="💛 Love Palermo Apartment Full Amenities"
                description="Lovely Apartment Studio con Balcón, amoblado, diseño y calidad, en moderno Edificio Boutique de Palermo Soho!"
                price="$25/night"/>
                <Card 
                src="https://a0.muscache.com/im/pictures/14710862/325589f0_original.jpg?im_w=1200"
                title="The Best Place To Live BuenosAires!"
                description="Nuevo y adorable departamento, con un dormitorio, y una vista única y balcón!! Esta ubicado en uno de los mejores barrios de la ciudad, Palermo!"
                price="$13/night"/>
            </div>
        </div>
    )
}

export default Home;
