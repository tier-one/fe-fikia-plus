export { default } from "next-auth/middleware"

export const config = { matcher: ["/dashboard", "/dashboard/funds", "/dashboard/clients"] }