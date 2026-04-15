const router = require("express").Router();
const jwt = require("jsonwebtoken");

router.post("/login", (req, res) => {
  const { email, password } = req.body;

  if (email === "admin@gmail.com" && password === "1234") {
    const token = jwt.sign({ role: "admin" }, "SECRET");
    return res.json({ token, role: "admin" });
  }

  if (email === "user@gmail.com" && password === "1234") {
    const token = jwt.sign({ role: "user" }, "SECRET");
    return res.json({ token, role: "user" });
  }

  res.status(400).send("Invalid Credentials");
});

module.exports = router;
