import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import Passenger from "./components/Passenger";
import Passengers from "./components/Passengers";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

const ProjectOne = () => {
  return (
    <div>
      <h3>Project One</h3>
      <QueryClientProvider client={queryClient}>
        <Passengers />
        <Passenger />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </div>
  );
};

export default ProjectOne;
