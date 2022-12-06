import { useRouter } from "next/router"
import { useEffect, useState } from "react"

const Id = () => {
    const   router = useRouter()
    /* hacer un useeffect que haga un fetch a el id del pokemon(router.query.id) */

    const [data, setData] = useState([])

  useEffect(() => {
    router?.query?.id && 
    fetch(`https://pokeapi.co/api/v2/pokemon-form/${router.query.id}`)
      .then((resp) => resp.json())
      .then((data) => console.log(data))
  }, [router])

    return (<div>
        <p>Hola soy el pokemon N:{router.query.id}</p>
    </div>)
}

export default Id