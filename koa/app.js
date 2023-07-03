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
// 删除商品
router.delete("/deleteGoods", async (ctx) => {
  const { _id } = await ctx.request.body;
  let sql = `DELETE FROM flower WHERE _id=${_id}`;
  const res = await query(sql);
  if (res) {
    ctx.body = {
      code: 200,
      msg: "成功",
    };
  }
});
// 修改商品信息
router.post("/editGoods", async (ctx) => {
  const { _id, name, image_url, desc, status, price } = await ctx.request.body;
  let sql = `UPDATE flower name=${name}, image_url=${image_url}, desc=${desc}, status=${status}, price=${price} WHERE _id=${_id}`;
  const res = await query(sql);
  if (res) {
    ctx.body = {
      code: 200,
      msg: "成功",
    };
  }
});
// 添加商品
router.post("/addGoods", async (ctx) => {
  const { name, image_url, desc, status, price } = await ctx.request.body;
  let sql = `INSERT INTO flower(name, image_url, desc, status, price) VALUES (${name}, ${image_url}, ${desc}, ${status}, ${price})`;
  const res = await query(sql);
  if (res) {
    ctx.body = {
      code: 200,
      msg: "成功",
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
// 获取商品分类
router.get("/getTabSort", async (ctx) => {
  let sql = "select * FROM tabsort ";
  const res = await query(sql);

  if (res) {
    // console.log(res);
    ctx.body = {
      code: 200,
      data: res,
    };
  }
});
// 获取分类商品
router.get("/getTabData", async (ctx) => {
  let sql = "select * FROM tabdata ORDER BY _tid";
  const res = await query(sql);

  if (res) {
    // console.log(res);
    ctx.body = {
      code: 200,
      data: res,
    };
  }
});
// 获取购物车列表
router.get("/getCartList", async (ctx) => {
  const BearerToken = ctx.header.authorization;
  const token = BearerToken.split(" ")[0];
  const uid = jwt.verify(token, "secret");
  let sql = `SELECT * FROM cart JOIN flower ON cart._pid=flower._id WHERE cart._uid=${uid} `;
  const res = await query(sql);
  if (res) {
    // console.log(res);
    ctx.body = {
      code: 200,
      data: res,
    };
  }
});
// 购物车添加
router.post("/addCartList", async (ctx) => {
  const { _pid, _uid } = ctx.request.body;
  let select_sql = `SELECT * FROM cart  WHERE _pid=${_pid} `;
  const select_res = await query(select_sql);
  if (!select_res) {
    let sql = `INSERT INTO cart (_pid,_uid,num) VALUES (${_pid},${_uid},1)`;
    const res = await query(sql);
    if (res) {
      // console.log(res);
      ctx.body = {
        code: 200,
        data: res,
      };
    }
  } else {
    let add_sql = ``;
    const res = await query(sql);
    if (res) {
      ctx.body = {
        code: 200,
        data: res,
      };
    }
  }
});
// 购物车数量更改
router.post("/editCartNum", async (ctx) => {});
// 删除购物车
router.post("/deleteCart", async (ctx) => {});
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
