const router = require("express").Router();
let Employee = require("../models/Employee");

router.route("/add").post((req, res) => {
  const name = req.body.name;
  const empid = Number(req.body.empid);
  const designation = req.body.designation;
  const emptype = req.body.emptype;
  const experience = req.body.experience;

  const newEmployee = new Employee({
    name,
    empid,
    designation,
    emptype,
    experience,
  });

  newEmployee
    .save()
    .then(() => {
      res.json("Entry Added");
    })
    .catch((err) => {
      console.log(err);
    });
});

router.route("/display").get(async (req, res) => {
  await Employee.find()
    .then((employee) => {
      res.json(employee);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.route("/edit/:id").get(async (req, res) => {
  let empId = req.params.id;
  await Employee.findById(empId)
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      console.log(err.message);
      res
        .status(500)
        .send({ status: "Error with fetching data", error: err.message });
    });
});

router.route("/get/:id").get(async (req, res) => {
  let empId = req.params.id;
  await Employee.findById(empId)
    .then((data) => {
      res.status(200).send({ user: data });
      res.json(data);
    })
    .catch((err) => {
      console.log(err.message);
      res
        .status(500)
        .send({ status: "Error with fetching data", error: err.message });
    });
});

router.route("/update/:id").put(async (req, res) => {
  let empId = req.params.id;

  await Employee.findByIdAndUpdate(empId, {
    $set: req.body,
  })
    .then(() => {
      res.status(200).send({ status: "Entry Updated" });
    })
    .catch((err) => {
      console.log(err.message);
      res
        .status(500)
        .send({ status: "Error with updating data", error: err.message });
    });
});

router.route("/delete/:id").delete(async (req, res) => {
  let empId = req.params.id;

  await Employee.findByIdAndDelete(empId)
    .then(() => {
      res.status(200).send({ status: "Entry Deleted" });
    })
    .catch((err) => {
      console.log(err.message);
      res
        .status(500)
        .send({ status: "Error with deleting data", error: err.message });
    });
});

module.exports = router;
