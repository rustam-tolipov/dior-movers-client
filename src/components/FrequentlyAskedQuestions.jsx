import React from "react";

const FrequentlyAskedQuestions = () => {
  return (
    <div className="flex h-fit w-full justify-center bg-red-50">
      <div className="container flex h-fit flex-col items-center gap-16 pb-52 pt-32">
        {/* Title */}
        <div className="flex flex-col items-center justify-center gap-2">
          <p className="text-lg font-medium uppercase text-red-600">
            Got Questions? We’ve Got Answers!
          </p>
          <h1 className="text-4xl font-bold">Frequently Asked Questions</h1>
        </div>
        {/* FAQ */}
        <div className="flex w-10/12 flex-col gap-2 lg:w-8/12">
          <div className="flex flex-col">
            <div className="flex h-16 w-full items-center justify-between rounded-md bg-white px-8 text-lg font-medium text-gray-900 shadow-sm">
              How do I book a moving, cleaning, or handyman service?
              <span className="h-8 w-8">
                <svg
                  fill="none"
                  strokeWidth={1.5}
                  stroke="#f00"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
              </span>
            </div>
            <div className="text-md flex h-16 w-full items-center justify-center gap-4 px-12 font-medium text-gray-900">
              <span className="h-8 w-1 rounded-full bg-gray-600"></span>
              You can easily book our services online or by giving us a call.
              We'll schedule a time that works best for you!
            </div>
          </div>
          <div className="flex h-16 w-full items-center justify-between rounded-md bg-white px-8 text-lg font-medium text-gray-900 shadow-sm">
            Are your movers trained to handle fragile items?
            <span className="h-8 w-8">
              <svg
                // dataSlot="icon"
                fill="none"
                strokeWidth={1.5}
                stroke="#f00"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
            </span>
          </div>
          <div className="flex h-16 w-full items-center justify-between rounded-md bg-white px-8 text-lg font-medium text-gray-900 shadow-sm">
            What cleaning services do you offer?
            <span className="h-8 w-8">
              <svg
                // dataSlot="icon"
                fill="none"
                strokeWidth={1.5}
                stroke="#f00"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
            </span>
          </div>
          <div className="flex h-16 w-full items-center justify-between rounded-md bg-white px-8 text-lg font-medium text-gray-900 shadow-sm">
            Do you bring your own tools and supplies?
            <span className="h-8 w-8">
              <svg
                // dataSlot="icon"
                fill="none"
                strokeWidth={1.5}
                stroke="#f00"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
            </span>
          </div>
          <div className="flex h-16 w-full items-center justify-between rounded-md bg-white px-8 text-lg font-medium text-gray-900 shadow-sm">
            How much do your services cost?
            <span className="h-8 w-8">
              <svg
                // dataSlot="icon"
                fill="none"
                strokeWidth={1.5}
                stroke="#f00"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrequentlyAskedQuestions;
