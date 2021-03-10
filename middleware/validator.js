import {check ,validationResult} from 'express-validator'

export const registerRoules =() =>[
    check(`name`, `this field is required!`).notEmpty(),
    check(`email`, `this should be valid email!`).isEmail(),
    check(`email` ,  `this field is required!`).notEmpty(),
    check(`password`,`this field should be at least 4 char`).isLength({
        min:4,
    })
];

export const validator = (req,res,next) => {
    const errors = validationResult(req)
    errors.isEmpty() ? next() : res.status(400).json({errors:errors.array()})
}