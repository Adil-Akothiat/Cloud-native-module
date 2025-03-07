import { useEffect, useState } from "react";
import axios from "axios";
import Button from "../../components/button";

const api = "http://localhost:3004/api/v1/restaurants";
export default function Restaurants() {
  const [restaurants, setRestaurants] = useState([]);
  const [recettes, setRecettes] = useState([]);
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
          setRestaurants(res.data.data.restaurants);
        })
        .catch((err) => alert(err.message));
    })();
  }, []);
  useEffect(() => {
    (() => {
      axios
        .get("http://localhost:3002/api/v1/chefs/all", {
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
  useEffect(() => {
    (() => {
      axios
        .get("http://localhost:3003/api/v1/recettes/all", {
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
    if(recettes.length == 0 || chefs.length == 0) {
      alert("Vous n'avez pas de recette ou du chef! Créez le!");
      return;
    }
    const nom = prompt('Nom');
    let chefId = prompt(`Choisir un chef de cette liste: (1-${chefs.length})\n${chefs.map((c,i)=> `${i+1}- ${c.nom}`).join('\n')}`);
    if(!chefs.map((_,i)=> `${i+1}`).includes(chefId)) {
      alert('votre choix est incorrect!');
      return;
    }
    chefId = chefs[parseInt(chefId)-1]._id;
    let recetteId = prompt(`Choisir une recette de cette liste: (1-${recettes.length})\n${recettes.map((r,i)=> `${i+1}- ${r.libelle}`).join('\n')}`);
    if(!recettes.map((_,i)=> `${i+1}`).includes(recetteId)) {
      alert('votre choix est incorrect!');
      return;
    }
    recetteId = recettes[parseInt(recetteId)-1]._id;
    axios.post(api+'/add', { nom, chefId, recetteId }, {
        headers: {
            'Authorization': 'Bearer '+token 
        }
    }).then(res=> {
        alert('created!');
        window.location.reload();
    }).catch(err=> alert('an error occured!'));
  }
  const updateHandler = (n, chid, recid)=> {
    const nom = prompt('Nom', n);
    let chefId = prompt(`Choisir un chef de cette liste: (1-${chefs.length})\n${chefs.map((c,i)=> `${i+1}- ${c.nom}`).join('\n')}`);
    if(!chefs.map((_,i)=> `${i+1}`).includes(chefId)) {
      alert('votre choix est incorrect!');
      return;
    }
    chefId = chefs[parseInt(chefId)-1]._id;
    let recetteId = prompt(`Choisir une recette de cette liste: (1-${recettes.length})\n${recettes.map((r,i)=> `${i+1}- ${r.libelle}`).join('\n')}`);
    if(!recettes.map((_,i)=> `${i+1}`).includes(recetteId)) {
      alert('votre choix est incorrect!');
      return;
    }
    recetteId = recettes[parseInt(recetteId)-1]._id;
    axios.put(api+'/update/'+nom, { nom, chefId, recetteId }, {
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
      {restaurants.map((restaurant) => (
        <li
          key={restaurant._id}
          className="flex items-center justify-between p-3 hover:bg-gray-50"
        >
            <p className="border-r pr-3">{restaurant.nom}</p>
          <div className="flex items-center gap-x-5">
            <button
              className="text-white bg-green-700 hover:bg-green-800 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none"
              onClick={()=> updateHandler(restaurant.nom, restaurant.chefId, restaurant.recetteId)}
            >
              Edit
            </button>
            <button
              onClick={()=> deleteHandler(restaurant.nom)}
              className="text-white bg-red-700 hover:bg-red-800 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none cursor-pointer"
            >
              Delete
            </button>
            <button  onClick={()=> window.alert(JSON.stringify(recettes.filter(r=> r._id == restaurant.recetteId)))} className="bg-blue-600 text-white p-2 rounded cursor-pointer">recettes</button>
            <button onClick={()=> window.alert(JSON.stringify(chefs.filter(c=> c._id == restaurant.chefId)))} className="bg-green-600 text-white p-2 rounded cursor-pointer">chefs</button>
          </div>
        </li>
      ))}
    </ul>
    </div>
  );
}
