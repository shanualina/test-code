var express = require('express');
var router = express.Router();
var db = require("../model");
var property = db.property;

//=add
router.post('/add', async (req, res, next) => {
    try {

        const propertys = property.create({
            name: req.body.name,
            description: req.body.description,
            length: req.body.length,
            width: req.body.width
        })
        if (propertys) {
            return res.status(201).send({
                status: 201,
            });
        }
        else {
            return res.status(204).send({
                status: 204,
            });
        }
    } catch (error) {
        res.status(500).send({
            status: 500
        });
    }
});

//list 
router.get('/list', async (req, res) => {
    try {
        const properties = await property.findAll({
            order: [
                ['id', 'DESC']
            ],
        })
        if (properties) {
            return res.send({
                status: 200,
                data: properties
            })
        }
        return res.send({
            status: 404
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            status: 500,
        });
    }
})
//delete 
router.delete('/delete/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const properties = await db.property.destroy({
            where: { id: id }
        })
        if (properties) {
            return res.send({
                status: 200,
                msg:"delete success"
            })
        }
        return res.send({
            status: 404
        })
    } catch (error) {
        res.status(500).send({
            status: 500,
        });
    }
})

module.exports = router;
