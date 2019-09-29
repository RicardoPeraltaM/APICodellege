const Patient = require("./../models/Patient");

async function index(req, res) {
    const pacientes = await Patient.find({});
    if (pacientes) {
        return res.status(200).json({
            ok: true,
            pacientes
        });
    }
}
//req para la peticion, res para la respuesta y next para la accion siguiente
async function find(req, res, next) {
    let query = {};
    query[req.params.key] = req.params.value;
    try {
        const respuesta = await Patient.find(query);
        return respuesta[0];
    } catch (respuesta) {
        return res
            .status(404)
            .json({ error: `No existe usuario con ${respuesta.path}: ${respuesta.value} ` });
    }
}

async function show(req, res) {
    let patient = await find(req, res);
    return res.status(200).json({ patient });
}

async function remove(req, res) {
    let patient = await find(req, res);
    patient.remove().then(patient => res.status(200).send({ message: "REMOVED", patient })).catch(error => res.status(500).send({ error }));
}

// function remove(req, res) {


//     if (req.body.error) return res.status(500).send({ error });
//     if (!req.body.patients) return res.status(404).send({ message: "NOT FOUND" });
//     req.body.patients[0]
//         .remove()
//         .then(patient => res.status(200).send({ message: "REMOVED", patient }))
//         .catch(error => res.status(500).send({ error }));
// }

async function create(req, res) {
    await new Patient(req.body)
        .save()
        .then(patient => res.status(201).json({ patient }))
        .catch(error => res.status(500).json({ error }));
}

// function create(req, res) {
//     new Patient(req.body)
//         .save()
//         .then(patient => res.status(201).send({ patient }))
//         .catch(error => res.status(500).send({ error }));
// }

async function update(req, res) {
    let patient = await req.body.patients[0];;
    patient = Object.assign(patient, req.body);
    console.log(patient);

}

// function update(req, res) {
//     if (req.body.error) return res.status(500).send({ error });
//     if (!req.body.patients) return res.status(404).sent({ message: "NOT FOUND" });
//     let patient = req.body.patients[0];
//     patient = Object.assign(patient, req.body);
//     patient
//         .save()
//         .then(patient => res.status(200).send({ message: "UPDATED", patient }))
//         .catch(error => res.status(500).send({ error }));
// }


module.exports = {
    index,
    show,
    create,
    update,
    remove,
    find
};