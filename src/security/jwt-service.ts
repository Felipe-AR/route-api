import { decode, sign, verify,JwtPayload } from "jsonwebtoken"

const SECRET = Bun.env.JWT_SECRET as string
const EXPIRATION = Bun.env.JWT_EXPIRATION_TIME as string

export class JwtService {
  encode(payload: string | Object): string {
    return sign(payload, SECRET, { expiresIn: EXPIRATION })
  }

  decode(token: string): JwtPayload | string {
    const payload = decode(token)
    if (!payload) throw new Error('Invalid token')
    return payload
  }

  verify(token: string): JwtPayload | string {
    return verify(token, SECRET)
  }
}
