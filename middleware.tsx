export { default } from "next-auth/middleware"

export const config = { 
    matcher: ["/dashboard", "/dashboard/funds", "/dashboard/assets", "/dashboard/clients", "/notifications", "/create-fund", "/dashboard/funds/:id"] }