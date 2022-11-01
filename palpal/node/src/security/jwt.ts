const jwt = require("jsonwebtoken");
const iconv = require("iconv-lite");
require("dotenv").config();

const JWTSECRET =
  process.env.JWT_SECRET === undefined ? "" : process.env.JWT_SECRET;

module.exports = {
  sign: async (email: string) => {
    return {
      token: jwt.sign(
        {
          // payload
          email: email,
          typ: "JWT",
        },
        JWTSECRET,
        {
          // options
          subject: "invest token", // 토큰 제목
          algorithm: "HS256",
          expiresIn: "5m", // 토큰 유효 기간
          issuer: "issuer", // 발행자
        }
      ),
    };
  },
  // verify: async (req, res, next) => {
  //   try {
  //     const token = req?.token;
  //     if (!token) {
  //       return {
  //         code: 401,
  //         message: "No token, authorization denied",
  //         roles: null,
  //       };
  //     }
  //     res = jwt.verify(token, iconv.decode(Buffer.from(JWTSECRET), "EUC-KR"));
  //     return {
  //       message: "토큰이 정상입니다.",
  //       code: 200,
  //       roles: req?.roles,
  //     };
  //   } catch (err) {
  //     if (err.name === "TokenExpiredError") {
  //       // 유효기간 초과
  //       return {
  //         code: 419,
  //         message: "토큰이 만료되었습니다",
  //         roles: null,
  //       };
  //     }

  //     return {
  //       code: 401,
  //       message: "유효하지 않은 토큰입니다.",
  //       roles: null,
  //     };
  //   }
  // },
};
