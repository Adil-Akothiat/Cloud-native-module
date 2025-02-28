const { errorHandler } = require("../errorHandler/error");
const techns = require('../data/technologies.json');
const fs = require('fs');
const path = require('path');

// get all technologies
const getTechnologies = (req, res)=> errorHandler(()=> {
    return res.status(200).json({ data: techns })
})(req, res);

const getTechnologie = (req, res)=> errorHandler(()=> {
    const { id } = req.params;
    const search = techns.filter(t=> t.Id === parseInt(id));
    if(search.length == 0) {
        throw new Error('TECHNOLOGIE NOT FOUND!');
    }
    return res.status(200).json({ data: search[0] });
})(req, res);

const createTechnologie = (req, res)=> errorHandler(()=> {
    const tech = req.body;
    const keys = ["Id", "Nom de la technologie", "Domaine", "Date de création"];
    if(JSON.stringify(keys) != JSON.stringify(Object.keys(tech))) {
        throw new Error('All fields are required: '+ keys.join(','));
    }
    const data = techns;
    data.push(tech);
    const filePath = path.join(__dirname, "../data/technologies.json");

    fs.writeFile(filePath, JSON.stringify(data), err=> {
        if(err) {
            throw new Error(err.message);
        }
        return res.status(200).json({ item: tech, saved: true });
    })
})(req, res);

const updateTechnogie = (req, res)=> errorHandler(()=> {
    const tech = req.body;
    const keys = ["Nom de la technologie", "Domaine", "Date de création"];
    if(JSON.stringify(keys) != JSON.stringify(Object.keys(tech))) {
        throw new Error('All fields are required: '+ keys.join(','));
    }
    
    const { id } = req.params;
    if(techns.filter(({ Id })=> Id == id).length == 0) {
        throw new Error("This item doesn't exists");
    }
    const data = techns.map(item=> item.Id == id ? ({...item, ...tech }) : item);
    const filePath = path.join(__dirname, "../data/technologies.json");
    
    fs.writeFile(filePath, JSON.stringify(data), err=> {
        if(err) {
            throw new Error(err.message);
        }
        return res.status(200).json({ item: tech, saved: true });
    })
})(req, res);

const deleteTechnologie = (req, res)=> errorHandler(()=> {
    const { id } = req.params;
    if(techns.filter(({ Id })=> Id == id).length == 0) {
        throw new Error("This item doesn't exists");
    }
    const data = techns.filter(({ Id })=> Id != id);
    const filePath = path.join(__dirname, "../data/technologies.json");
    
    fs.writeFile(filePath, JSON.stringify(data), err=> {
        if(err) {
            throw new Error(err.message);
        }
        return res.status(200).json({ deleted: true });
    })
})(req, res);

module.exports = { getTechnologies, getTechnologie, createTechnologie, updateTechnogie, deleteTechnologie };