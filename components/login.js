import { useSession, signIn, signOut } from "next-auth/react"

export default function Login() {
  return (
    <main className="flex flex-row items-center justify-center flex-nowrap min-h-screen">
      <section className="w-1/2 p-10 flex items-center justify-center">
        <div className="rounded-xl shadow-xl p-6 py-10 bg-white w-2/3 flex flex-col items-center justify-center">
          <h1 className="text-xl font-semibold mb-2">Welcome Back!</h1>
          <p className="mb-4">Sign into your account to use Edulogy</p>
          <button onClick={() => signIn()} className="inline-flex items-center bg-gray-200 border-0 py-1 px-6 focus:outline-none hover:bg-gray-300 rounded text-base mt-2">
            Sign in with Google
          </button>
        </div>
      </section>
      <video autoPlay loop muted className="w-1/2 min-h-screen object-cover center">
        <source src="/naruto.mp4" type="video/mp4" /> 
      </video>
    </main>
  )
}