import { auth, signIn, signOut } from "@/auth"

export default async function Home() {
  const session = await auth()

  if (!session) {
    return (
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <h1>Not signed in</h1>
        <form action={async () => {
          "use server"
          await signIn("google")
        }}>
          <button type="submit">Sign in with Google</button>
        </form>
      </div>
    )
  }

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1>Signed in as {session.user?.email}</h1>
      <form action={async () => {
        "use server"
        await signOut()
      }}>
        <button type="submit">Sign out</button>
      </form>
    </div>
  );
}
