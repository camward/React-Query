import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import Passenger from "./components/Passenger";
import Passengers from "./components/Passengers";
import AddPassenger from "./components/AddPassenger";

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
      <h3>Project One: Instantwebtools.net</h3>
      <QueryClientProvider client={queryClient}>
        <Passengers />
        <Passenger />
        <AddPassenger />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </div>
  );
};

export default ProjectOne;
