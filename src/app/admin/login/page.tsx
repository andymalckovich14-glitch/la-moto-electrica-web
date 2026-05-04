'use client';

import { useActionState } from 'react';
import { login } from './actions';

export default function LoginPage() {
  const [state, formAction, isPending] = useActionState(
    async (prevState: any, formData: FormData) => {
      return await login(formData);
    },
    null
  );

  return (
    <div className="min-h-screen flex items-center justify-center bg-zinc-950 text-zinc-50 font-sans">
      <div className="w-full max-w-md p-8 bg-zinc-900/50 border border-zinc-800 rounded-lg shadow-2xl backdrop-blur-sm">
        <h1 className="text-2xl font-light mb-8 text-center tracking-wider text-zinc-100">
          ADMINISTRACIÓN
        </h1>
        
        <form action={formAction} className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <label htmlFor="password" className="text-sm text-zinc-400">
              Contraseña de Acceso
            </label>
            <input
              type="password"
              id="password"
              name="password"
              required
              className="px-4 py-3 bg-zinc-950/80 border border-zinc-800 rounded focus:outline-none focus:border-zinc-500 transition-colors text-zinc-100 placeholder:text-zinc-700"
              placeholder="••••••••"
            />
          </div>
          
          {state?.error && (
            <p className="text-red-400 text-sm text-center bg-red-950/30 py-2 rounded">{state.error}</p>
          )}

          <button
            type="submit"
            disabled={isPending}
            className="w-full py-3 px-4 bg-zinc-100 text-zinc-950 font-medium rounded hover:bg-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed mt-2"
          >
            {isPending ? 'Entrando...' : 'Entrar'}
          </button>
        </form>
      </div>
    </div>
  );
}
