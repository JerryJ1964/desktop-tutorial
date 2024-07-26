import { auth } from "express-oauth2-jwt-bearer";

const checkJwt = auth({
  audience: process.env.API_IDENTIFIER || "{yourApiIdentifier}", // e.g. https://book-store-api
  issuerBaseURL: process.env.ISSUER_BASE_URL || `https://{yourDomain}/`,
});

export default checkJwt;
