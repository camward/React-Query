import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import Characters from "./components/Characters";
import "./style.css";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      refetchOnMount: false,
      keepPreviousData: false,
      retry: 1,
      retryDelay: 500,
    },
  },
});

const ProjectTwo = () => {
  return (
    <div className="container">
      <h3>Project Two: Rick and Morty</h3>
      <QueryClientProvider client={queryClient}>
        <Characters />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </div>
  );
};

export default ProjectTwo;
