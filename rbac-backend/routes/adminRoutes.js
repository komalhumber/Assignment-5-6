const router = require("express").Router();
const auth = require("../middleware/auth");
const rbac = require("../middleware/rbac");

const {
  createUser,
  getUsers,
  updateUser,
  changeStatus,
  assignRole
} = require("../controllers/adminController");

router.post("/users", auth, rbac(["Admin"]), createUser);
router.get("/users", auth, rbac(["Admin"]), getUsers);
router.put("/users/:id", auth, rbac(["Admin"]), updateUser);
router.put("/users/:id/status", auth, rbac(["Admin"]), changeStatus);
router.put("/users/:id/role", auth, rbac(["Admin"]), assignRole);

module.exports = router;