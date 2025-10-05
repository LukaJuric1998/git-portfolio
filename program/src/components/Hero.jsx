export default function Hero() {
  return (
    <section className="bg-gray-300 py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-3xl mx-auto text-center">
        <h3 className="text-lg font-semibold text-indigo-600 uppercase tracking-wide">
          Complete this training program
        </h3>

        <ol className="mt-6 text-left list-decimal list-inside space-y-2 text-gray-700">
          <li>
            <b>Follow the damn train</b>
          </li>
          <li>
            <b>Git gud, healthy, strong</b>
          </li>
          <li>
            <b>Become a pro gamer</b>
          </li>
          <li>
            <b>Profit</b>
          </li>
        </ol>

        <h1 className="mt-12 text-3xl md:text-4xl font-bold text-gray-900">
          The Rules
        </h1>
        <p className="mt-4 text-gray-600">
          To complete this program you <b className="font-semibold">must</b>{" "}
          follow these 3 simple rules:
        </p>

        <ul className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          <li className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
            <p className="text-xl font-bold text-indigo-700 cursor-pointer">
              Rest
            </p>
            <p className="text-gray-600">Take proper recovery time</p>
          </li>
          <li className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
            <p className="text-xl font-bold text-indigo-700 cursor-pointer">
              Sleep
            </p>
            <p className="text-gray-600">Quality sleep every night</p>
          </li>
          <li className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
            <p className="text-xl font-bold text-indigo-700 cursor-pointer">
              Weights
            </p>
            <p className="text-gray-600">Train with consistency</p>
          </li>
        </ul>

        <p className="mt-6 text-gray-600">
          The first and second set should be at{" "}
          <span className="font-medium text-gray-800">75% effort</span> of your
          workout.
        </p>

        <h3 className="mt-12 text-2xl font-semibold text-gray-900">
          Training Plan
        </h3>
        <p className="mt-4 text-gray-600">This something something idfc</p>
        <i className="block mt-2 text-indigo-600">Push → Pull → on GitHub</i>
        <p className="mt-4 text-gray-700 font-medium">
          Repeat for <span className="text-indigo-700">30 days</span>
        </p>
      </div>
    </section>
  );
}
