import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex flex-1 items-center justify-center">
        <section className="max-w-2xl w-full text-center py-24">
          <h1 className="text-4xl font-bold mb-6 text-blue-700">Welcome to the MITRE ATT&CK maturity assessment tool</h1>
          <p className="text-lg text-gray-700 mb-8">
            Assess your organization’s security maturity by selecting the MITRE ATT&CK techniques you are mitigating.
          </p>
          <div className="flex justify-center gap-4">
            <a href="/maturity" className="px-6 py-3 rounded bg-blue-600 text-white font-semibold hover:bg-blue-700 transition">Go to Maturity Page</a>
            <a href="/login" className="px-6 py-3 rounded border border-blue-600 text-blue-600 font-semibold hover:bg-blue-50 transition">Login</a>
          </div>
        </section>
      </main>
    </div>
  );
}
