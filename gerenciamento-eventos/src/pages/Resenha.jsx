import React, {useState, useEffect} from "react";
import {Link, useNavigate, useParams} from "react-router-dom";
import Capa from "../assets/avengers.jpg";
import {format} from "date-fns";
import axios from "axios";

export const Resenha = () => {

    const [filme, setFilme] = useState({});
    const [titulo, setTitulo] = useState([]);
    const [conteudo, setConteudo] = useState([]);
    const [nota, setNota] = useState(0);
    const IdDoFilme = useParams();

    const navigate = useNavigate();

    useEffect(() => {
        const fetchFilme = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/api/filmes/${IdDoFilme.idDoFilme}`);
                setFilme(response.data);
            } catch (err) {
                console.error(err);
            }
        };

        fetchFilme();
    }, [IdDoFilme]);
    return (
        <>
            {filme.titulo}
        </>
    )
}