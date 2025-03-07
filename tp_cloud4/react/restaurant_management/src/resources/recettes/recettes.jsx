import { useEffect, useState } from "react";
import axios from "axios";
import Button from "../../components/button";

const api = "http://localhost:3003/api/v1/recettes";
export default function Recettes() {
  const [recettes, setRecettes] = useState([]);
  const token = window.localStorage.getItem("token");
  const deleteHandler = (nom)=> {
    axios.delete(api+'/delete/'+nom, {
        headers: {
          Authorization: "Bearer " + token,
        },
    }).then(res=> {
        alert('deleted successfully');
        window.location.reload();
    }).catch(err=> alert('error occured'))
  }
  useEffect(() => {
    (() => {
      axios
        .get(api+"/all", {
          headers: {
            Authorization: "Bearer " + token,
          },
        })
        .then((res) => {
          setRecettes(res.data.data.recettes);
        })
        .catch((err) => alert(err.message));
    })();
  }, []);
  const ajouterHandler = ()=> {
    const libelle = prompt('Libelle');
    axios.post(api+'/add', { libelle }, {
        headers: {
            'Authorization': 'Bearer '+token 
        }
    }).then(res=> {
        alert('created!');
        window.location.reload();
    }).catch(err=> alert('an error occured!'));
  }
  const updateHandler = (nom)=> {
    const libelle = prompt('Libelle', nom);
    axios.put(api+'/update/'+nom, { libelle }, {
        headers: {
            'Authorization': 'Bearer '+token 
        }
    }).then(res=> {
        alert('updated!');
        window.location.reload();
    }).catch(err=> alert('an error occured!'));
  }
  return (
    <div>
        <Button text="Ajouter" onClick={ajouterHandler}/>
    <ul>
      {recettes.map((recette) => (
        <li
          key={recette._id}
          className="flex items-center justify-between p-3 hover:bg-gray-50"
        >
            <p className="border-r pr-3">{recette.libelle}</p>
          <div>
            <button
              className="text-white bg-green-700 hover:bg-green-800 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none"
              onClick={()=> updateHandler(recette.libelle)}
            >
              Edit
            </button>
            <button
              onClick={()=> deleteHandler(recette.libelle)}
              className="text-white bg-red-700 hover:bg-red-800 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none cursor-pointer"
            >
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
    </div>
  );
}
