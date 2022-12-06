import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import Card from '../components/card'
import styles from '../styles/Home.module.css'


export default function Home() {/* lo ponemos dentro del useefect para que me muestre la data en consola cuando inicia la pagina */

  const imagen = [
    { img: { src: "https://www.enter.co/wp-content/uploads/2016/02/bulbasaur-1024x768.png", alt: "bulbasaur" } },
    { img: { src: "https://ssb.wiki.gallery/images/thumb/5/52/Ivysaur_SSBU.png/1200px-Ivysaur_SSBU.png", alt: "ivysaur" } },
    { img: { src: "https://seeklogo.com/images/C/charmander-logo-AC289C2CDD-seeklogo.com.png", alt: "charmander" } },
    { img: { src: "https://www.pngplay.com/wp-content/uploads/10/Charmeleon-Pokemon-PNG-HD-Quality.png", alt: "charmilion" } },
    { img: { src: "https://w7.pngwing.com/pngs/62/63/png-transparent-pokemon-sun-and-moon-venusaur-bulbasaur-venusaur-food-dragon-pet.png", alt: "ivysaur" } },
    { img: { src: "https://w7.pngwing.com/pngs/62/63/png-transparent-pokemon-sun-and-moon-venusaur-bulbasaur-venusaur-food-dragon-pet.png", alt: "ivysaur" } },
    { img: { src: "https://w7.pngwing.com/pngs/62/63/png-transparent-pokemon-sun-and-moon-venusaur-bulbasaur-venusaur-food-dragon-pet.png", alt: "ivysaur" } },
    { img: { src: "https://w7.pngwing.com/pngs/62/63/png-transparent-pokemon-sun-and-moon-venusaur-bulbasaur-venusaur-food-dragon-pet.png", alt: "ivysaur" } },
    { img: { src: "https://w7.pngwing.com/pngs/62/63/png-transparent-pokemon-sun-and-moon-venusaur-bulbasaur-venusaur-food-dragon-pet.png", alt: "ivysaur" } },
    { img: { src: "https://w7.pngwing.com/pngs/62/63/png-transparent-pokemon-sun-and-moon-venusaur-bulbasaur-venusaur-food-dragon-pet.png", alt: "ivysaur" } },

  ];
  const [data, setData] = useState([])

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon")
      .then((resp) => resp.json())
      .then((data) => setData(data.results))
  }, [])

  console.log(data)
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>{/* html-headers, informaicon de la pagina, esto se puede personalizar para cada view/page */}
      {/* hacer el maping de todos los pokemones y mandarle por props el nombre y que me devuelva el name de cada */}
      
      <div className='d-flex row col-10'>
        {data.map((pokemon, i) => {
          return (

            <Card name={pokemon?.name} src={imagen[i]?.img?.src} id={i+1}/>
          )
        })}
      </div>

    </div>
  )
}

