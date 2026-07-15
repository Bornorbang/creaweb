"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

const API = "/api/admin-backend";

export default function AdminLogin() {
  const [password, setPassword] = useState("");
  const [error,    setError]    = useState("");
  const [loading,  setLoading]  = useState(false);
  const router = useRouter();

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch(`${API}/auth/login`, {
        method:  "POST",
        headers: { "Content-Type": "application/json" },
        body:    JSON.stringify({ password }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Login failed");
      localStorage.setItem("admin_token", data.token);
      router.push("/admin");
    } catch (err) {
      setError(
        err instanceof TypeError
          ? "Could not connect to the admin API. Check that the PHP backend is running and that NEXT_PUBLIC_API_URL is correct."
          : err.message
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F6F1E8] px-4">
      <div className="w-full max-w-sm">
        {/* Logo */}
        <p className="font-serif-display text-[#12372A] text-[1.4rem] tracking-wide text-center mb-2">
          Crea Web Agency
        </p>
        <p className="text-[#7C746A] text-[0.72rem] tracking-[0.14em] uppercase font-sans text-center mb-10">
          Admin Dashboard
        </p>

        <form onSubmit={handleSubmit} className="bg-white border border-[#1C1C1C]/8 p-8 flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <label htmlFor="password" className="text-[0.65rem] tracking-[0.14em] uppercase font-sans text-[#7C746A]">
              Password
            </label>
            <input
              id="password"
              type="password"
              autoComplete="current-password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border border-[#1C1C1C]/15 px-4 py-3 text-[0.9rem] font-sans text-[#1C1C1C] focus:outline-none focus:border-[#12372A] transition-colors"
              placeholder="Enter admin password"
            />
          </div>

          {error && (
            <p className="text-[0.78rem] font-sans text-red-600 bg-red-50 border border-red-200 px-4 py-2">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="text-[0.75rem] font-medium tracking-[0.14em] uppercase font-sans text-[#F6F1E8] bg-[#12372A] py-3 hover:bg-[#B08D57] transition-colors duration-300 disabled:opacity-50"
          >
            {loading ? "Signing in…" : "Sign In"}
          </button>
        </form>

        <p className="text-[#7C746A] text-[0.68rem] font-sans text-center mt-6">
          Default password: <code className="text-[#1C1C1C]">admin123</code>
        </p>
      </div>
    </div>
  );
}
