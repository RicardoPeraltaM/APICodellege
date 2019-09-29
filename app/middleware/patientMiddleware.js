const express = require("express");

function validateCompleteFields(req, res, next) {
    let fields = req.params;

    if (!fields.key || !fields.value) {
        return res.status(400).json({
            ok: false,
            message: "key and value it´s neccesary"
        });
    }

    if ((fields.key === "" && fields.key === undefined) || (fields.value === "" && fields.value === undefined)) {
        return res.status(400).json({
            ok: false
        });
    }

    next();
}

module.exports = {
    validateCompleteFields
};