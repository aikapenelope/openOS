/* eslint-disable @next/next/no-img-element */
import { SignIn } from "@clerk/nextjs";

export const dynamic = "force-dynamic";

export default function SignInPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#ABCDE9] px-4 relative">
      {/* Same background as landing */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <img
          src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/bfd2f4cf-65ed-4b1a-86d1-a1710619267b_1600w.png"
          alt=""
          role="presentation"
          width={1600}
          height={900}
          className="absolute inset-0 w-full h-full object-cover opacity-80 mix-blend-multiply"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#A6CBE8]/20 via-[#BFD9EF]/40 to-[#EAE3D6]/60" />
      </div>

      <div className="w-full max-w-md relative z-10">
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
              card: "rounded-3xl shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] border border-white/60 bg-white/60 backdrop-blur-2xl",
            },
          }}
        />
      </div>
    </div>
  );
}
