import bodyParser from "body-parser";
import { Router } from "express";
export default {
  endpoint: {
    path: "/external-login/apple",
    router: () => {
      const router = Router();
      router.use(bodyParser.urlencoded({ extended: true }));
      return router;
    },
  },
};
