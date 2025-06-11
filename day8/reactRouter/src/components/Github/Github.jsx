import { useLoaderData } from "react-router-dom";

const Github = () => {
  const data = useLoaderData();

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-rose-100 flex flex-col justify-center items-center px-4 py-16">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-lg p-8 text-gray-800">
        <div className="flex flex-col items-center">
          <img
            src={data.avatar_url}
            alt={`${data.login} avatar`}
            className="w-40 h-40 rounded-full shadow-lg mb-6"
          />
          <h2 className="text-3xl font-bold mb-2">{data.name || data.login}</h2>
          {data.bio && (
            <p className="text-center text-gray-600 mb-4 italic px-4">
              {data.bio}
            </p>
          )}

          <div className="flex space-x-6 text-gray-600 mb-6">
            {data.location && (
              <div className="flex items-center space-x-1">
                <svg
                  className="w-5 h-5 text-orange-600"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.05 10a5 5 0 1110 0c0 2.5-5 8-5 8s-5-5.5-5-8zM10 11a1 1 0 100-2 1 1 0 000 2z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>{data.location}</span>
              </div>
            )}

            <div className="flex items-center space-x-1">
              <svg
                className="w-5 h-5 text-orange-600"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 12c2.28 0 4-1.72 4-4s-1.72-4-4-4-4 1.72-4 4 1.72 4 4 4zM12 14c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
              </svg>
              <span>{data.public_repos} Public Repos</span>
            </div>
          </div>

          <a
            href={data.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-orange-600 hover:bg-orange-700 text-white font-semibold px-6 py-3 rounded-lg transition"
          >
            Visit GitHub Profile
          </a>
        </div>
      </div>
    </div>
  );
};

export default Github;

export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/ad-manisha");
  return response.json();
};
