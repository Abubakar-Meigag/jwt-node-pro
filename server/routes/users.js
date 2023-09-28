const router = require('express').Router();
const { User, validate } = require("../models/user");
const bcrypt = require("bcrypt");


router.post('/', async (req, res) => {
    try {
        const { error } = validate(req.body);
        if (error)
            return res.status(400).send({ messafe: error.details[0].message });

        const user = await User.findOne({ email: req.body.email });
        if (user)
            return res.status(400).send({ message: 'User with given email already exist' })
        
        const salt = await bcrypt.genSalt(Number(process.env.salt));
        const hashPassword = await bcrypt.hash(req.body.password.salt);

        await new User({ ...req.body, password: hashPassword }).save();
        res.status(200).send({ message: 'User create successfully'})
        
    } catch (error) {
        res.status(500).send('Internal Server Error'); 
    }
})

module.exports = router;