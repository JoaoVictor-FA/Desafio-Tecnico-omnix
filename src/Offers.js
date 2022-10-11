import { Link } from "react-router-dom";
import Card from "./components/Card";

export default function Offers() {

    return (
        <div className="w-full flex justify-center items-center" style={{height:"80vh"}}>
            <div className="lg:flex justify-around w-full md:block md:w-9/12">
                <Card plano="alpha" valor="5"/>
                <Card plano="delta" valor="10"/>
                <Card plano="gamma" valor="15"/>
            </div>
            <div className="fixed rounded p-2 bg-blue-300 right-10 bottom-32">
                <Link to="/">Ops, errei meu cep!</Link>
            </div>
        </div>
    );
}
