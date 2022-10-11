export default function Card(props) {
    return (
        <div className="bg-gray-200 shadow p-8 rounded flex flex-col items-center">
            <div className="font-bold text-3xl">
                Plano {props.plano} 
            </div>
            <div className="text-8xl font-bold m-3">
                R${props.valor} 
            </div>
            <input className="bg-white mt-5 p-2 rounded hover:bg-gray-400" type="button" value="Ver orferta"/>
        </div>
    );
  }