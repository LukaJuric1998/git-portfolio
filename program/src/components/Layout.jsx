export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-gray-900">
      {/* Header */}
      <header className="bg-indigo-600 text-white py-6 shadow">
        <div className="max-w-5xl mx-auto px-6">
          <h1 className="text-3xl font-bold">The Program</h1>
          <p className="mt-2 text-indigo-200">
            <strong>The 30 Simple Workouts Program</strong>
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 max-w-5xl mx-auto w-full px-6 py-10">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-6">
        <div className="max-w-5xl mx-auto px-6 text-sm">
          <p>
            Built by{" "}
            <a
              href="https://github.com/LukaJuric1998"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-400 hover:underline"
            >
              Luka Jurić
            </a>
          </p>
          <p className="mt-1">
            Styled with{" "}
            <a
              href="https://tailwindcss.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-400 hover:underline"
            >
              Tailwind CSS
            </a>
          </p>
        </div>
      </footer>
    </div>
  );

  //https://www,YOUR_USERNAME.netlify.app

  return (
    <>
      {header}
      {children}
      {footer}
    </>
  );
}
