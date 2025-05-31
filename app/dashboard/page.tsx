import Share from "../components/Share";
import ThumbsDown from "../components/ThumbsDown";
import ThumbsUp from "../components/ThumbsUp";

export default function dashboard() {
  return (
    <div
      className="w-full text-white flex flex-col items-center h-screen bg-gradient-to-br from-zinc-900 to-gray-900
text-center"
    >
      <div className="w-full max-w-3xl">
        <div className="flex justify-between my-4">
          <div className="text-2xl font-bold">Song Voting Queue</div>
          <div>
            <button className="flex p-2 border rounded">
              <Share />
              Share
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div>
            <input
              type="text"
              className="border border-gray-600 p-2 rounded w-full"
              placeholder="Place Youtube Link Here"
            />
          </div>
          <div>
            <button className="text-sm font-semibold w-full p-1 rounded bg-purple-600">
              Add to queue
            </button>
          </div>
        </div>
        <div className="pt-5 flex flex-col gap-1">
          <div className="text-2xl font-bold flex justify-start ">
            Now Playing
          </div>
          <div className="w-full bg-gray-500 h-40 rounded-2xl overflow-hidden mb-2 ">
            <img
              src=""
                          alt=""
                          className=""
            />
          </div>
          <div>
            <button className="text-sm font-semibold w-full p-1 rounded bg-purple-600">
              Play Next
            </button>
          </div>
              </div>
              <div className="mt-2">
                  <div className="text-2xl font-bold flex justify-start">
                      Upcoming Songs
                  </div>
                  <div className="mt-2">
                      <div className="bg-gray-700 flex w-7/10 p-2 rounded-xl">
                          <div className="bg-gray-500 w-2/5 h-32 rounded-xl">
                              <img src="" alt="" />
                          </div>
                          <div className="flex gap-2 p-5 flex-col">
                              <h1>title of song</h1>
                              <div className="flex gap-3 ">
                                <div className="border border-gray-400 flex gap-2 justify-center items-center bg-gray-800 rounded px-3 py-1"><ThumbsUp />5</div>
                                <div className="border border-gray-400 flex gap-2 justify-center items-center bg-gray-800 rounded px-3 py-1"><ThumbsDown />5</div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
      </div>
    </div>
  );
}
