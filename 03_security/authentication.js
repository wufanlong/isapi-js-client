/*
qop=Undefined
Digest=MD5(MD5(A1):<nonce>:MD5(A2))
qop="auth:"
Digest=MD5(MD5(A1):<nonce>:<nc>:<cnonce>:<qop>:MD5(A2))
qop="auth-int:"
Digest=MD5(MD5(A1):<nonce>:<nc>:<cnonce>:<qop>:MD5(A2))
*/

const UNDEFINED = 'Undefined';
const AUTH = 'auth:';
const AUTH_INT = 'auth-int:';

const authentication = {
    UNDEFINED,
    AUTH,
    AUTH_INT
};

export default authentication;