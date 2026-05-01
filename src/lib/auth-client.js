import { createAuthClient } from "better-auth/react"

export const authClient = createAuthClient({
  baseURL: "http://localhost:3000" // Use your actual domain in production
})

// Export the helpers from the specific instance above
export const { signIn, signUp, useSession } = authClient;