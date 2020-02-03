const express = require("express");
const db = require("../data/db-config.js");
const router = express.Router();

router.get("/", (req, res) => {
  db("cars")
    .then(car => {
      res.status(200).json(car);
    })
    .catch(err => {
      res.status(500).json({ Error: "failed to access data", err });
    });
});

router.get("/:id", (req, res) => {
  db("cars")
    .where("id", req.params.id)
    .then(car => {
      res.status(200).json(car);
    })
    .catch(err => {
      res.status(500).json({ Error: "failed to access data", err });
    });
});

router.post("/", (req, res) => {
  db("cars")
    .insert(req.body)
    .then(car => {
      res.status(200).json(car);
    })
    .catch(err => {
      res.status(500).json({ Error: "failed to access data", err });
    });
});

router.put("/:id", (req, res) => {
  db("cars")
    .where("id", req.params.id)
    .update(req.body)
    .then(car => {
      res.status(200).json(car);
    })
    .catch(err => {
      res.status(500).json({ Error: "failed to access data", err });
    });
});

router.delete("/:id", (req, res) => {
  db("cars")
    .where("id", req.params.id)
    .delete()
    .then(car => {
      res.status(200).json(car);
    })
    .catch(err => {
      res.status(500).json({ Error: "failed to access data", err });
    });
});

function validateId(id, res, next) {}

module.exports = router;
