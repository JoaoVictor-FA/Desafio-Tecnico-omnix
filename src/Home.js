import { useState } from "react";
import { Link } from "react-router-dom";

export default function Home() {
    const [cep, setCep] = useState("");
    const [end, setEnd] = useState(null);

    async function handleClick(){
        const res = await fetch('https://viacep.com.br/ws/' + cep + '/json/');
        const data = await res.json();
        setEnd(data)
    }

    return (
        <div className="w-full flex justify-center items-center" style={{height:"80vh"}}>
            <div className="bg-gray-200 shadow p-5 rounded">
                <input className="rounded p-2" placeholder="Informe seu cep" type="text" onChange={e => setCep(e.target.value)}/>
                <input className="bg-white mx-3 p-2 rounded hover:bg-gray-300" type="button" value="Buscar" onClick={handleClick}/>
                {(end) && 
                    <div className="mt-3 bg-white rounded p-3">
                        <div>Confirme seu endereço:</div> 
                        <div>{end.localidade} - {end.uf}</div>
                        <div>{end.logradouro} - {end.bairro}</div>
                        <Link to="/offers">
                            <input className="bg-gray-200 my-2 p-2 rounded hover:bg-gray-400" type="button" value="Confirmar" onClick={handleClick}/>
                        </Link>
                    </div>
                }
            </div>
        </div>
    );
}
