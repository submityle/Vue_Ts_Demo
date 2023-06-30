const Koa = require("koa");
const koaRouter = require("koa-router");
const static = require("koa-static");
const view = require("koa-view");
const { koaBody } = require("koa-body");
const cors = require("@koa/cors");
const { query } = require("./db");
const logger = require("koa-logger");
const jwt = require("jsonwebtoken");
const app = new Koa();
const router = new koaRouter();
// 添加商品
router.post("/addGoods", async (ctx) => {
  const {} = await ctx.request.body;
  let sql = ``;
  const res = await query(sql);
  if (res) {
    ctx.body = {
      code: 200,
      msg: "cg",
    };
  }
});
// 获取全部商品
router.get("/getGoodsAll", async (ctx) => {
  let sql = "select * FROM flower";
  const res = await query(sql);

  if (res) {
    // console.log(res);
    ctx.body = {
      code: 200,
      data: res,
    };
  }
});
// 登录
router.post("/login", async (ctx) => {
  const { username, password } = ctx.request.body;

  let sql = `select * FROM user WHERE username='${username}'`;
  const res = await query(sql);

  if (res.length) {
    const user = res.filter(
      (item) => item.username === username && item.password === password
    );

    if (user) {
      let token = jwt.sign(
        {
          _id: user[0]._id,
        },
        "secret",
        { expiresIn: 60 * 60 }
      );
      ctx.body = {
        code: 200,
        userInfo: {
          username: user[0].username,
        },
        token: token,
      };
    } else {
      ctx.body = {
        code: 401,
        msg: "用户名或密码错误",
      };
    }
  } else {
    ctx.body = {
      code: 400,
      mag: "用户不存在",
    };
  }
});
// 注册
router.post("/enroll", async (ctx) => {
  const { username, password } = ctx.request.body;
  let sql = `select * FROM user WHERE username='${username}'`;
  const res = await query(sql);

  if (res === []) {
    let sql = `INSERT INTO user (username,password) VALUES ('${username}','${password}')`;
    await query(sql);
    ctx.body = {
      code: 200,
    };
  } else {
    ctx.body = {
      code: 400,
      msg: "用户名已存在",
    };
  }
});
app.use(cors());
app.use(logger());
app.use(view());
// app.use(static());
app.use(koaBody({ multipart: true }));
app.use(router.routes());
app.listen(9000, () => {
  console.log("http://127.0.0.1:9000");
});
//axios.get/post/put/de;l;('url',data)
