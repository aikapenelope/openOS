import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#ABCDE9] px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="font-mono text-xl font-bold text-aika-teal">
              {">_"}
            </span>
            <span className="text-xl font-semibold text-slate-900 tracking-tight font-nunito">
              AikaOS
            </span>
          </div>
          <p className="text-sm text-slate-600 font-medium">
            Accede al portal de clientes
          </p>
        </div>
        <SignIn
          appearance={{
            elements: {
              rootBox: "mx-auto",
              card: "rounded-3xl shadow-xl border border-white/60",
            },
          }}
        />
      </div>
    </div>
  );
}
