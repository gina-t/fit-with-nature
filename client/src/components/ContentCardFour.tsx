export default function ContentCardThree() {
  return (
    <div
      data-speed="auto"
      className="divide-y divide-gray-200 overflow-hidden bg-gray-100 shadow-sm text-blue-900 text-lg">
      <div className="px-4 py-6 sm:px-6 text-center">
        Let's Work Together
      </div>
      <div className="px-4 py-6 sm:p-6">
        Instagram:{' '}
        <a
          href="https://www.instagram.com/fitwithnature/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          @fitwithnature
        </a>
        <br />
        Email:{' '}
        <a
          href="mailto:brtonge@gmail.com"
          className="text-blue-600 hover:underline"
        >
          brtonge@gmail.com
        </a>
        <br />
        Phone:{' '}
        <a href="tel:+61412123456" className="text-blue-600 hover:underline">
          +61 401 303 363
        </a>
        <br />
        Location: Erskineville
        <br />
      </div>
    </div>
  );
}
