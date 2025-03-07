import { useEffect, useState } from "react";
import axios from "axios";
import Button from "../../components/button";

const api = "http://localhost:3002/api/v1/chefs";
export default function Chefs() {
  const [chefs, setChefs] = useState([]);
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
          setChefs(res.data.data.chefs);
        })
        .catch((err) => alert(err.message));
    })();
  }, []);
  const ajouterChef = ()=> {
    const nom = prompt('Nom');
    const specialite = prompt('Specialite');
    axios.post(api+'/add', { nom, specialite }, {
        headers: {
            'Authorization': 'Bearer '+token 
        }
    }).then(res=> {
        alert('created!');
        window.location.reload();
    }).catch(err=> alert('an error occured!'));
  }
  const updateHandler = (nom="", speci="")=> {
    const specialite = prompt('Specialite', speci);
    axios.put(api+'/update/'+nom, { specialite }, {
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
        <Button text="Ajouter" onClick={ajouterChef}/>
    <ul>
      {chefs.map((chef) => (
        <li
          key={chef._id}
          className="flex items-center justify-between p-3 hover:bg-gray-50"
        >
            <p className="border-r pr-3">{chef.nom}</p>
            <p className="border-r pr-3">{chef.specialite}</p>
          <div>
            <button
              className="text-white bg-green-700 hover:bg-green-800 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none"
              onClick={()=> updateHandler(chef.nom, chef.specialite)}
            >
              Edit
            </button>
            <button
              onClick={()=> deleteHandler(chef.nom)}
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
