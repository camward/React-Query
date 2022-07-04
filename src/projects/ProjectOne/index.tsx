import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";

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
        <div>Content...</div>
      </QueryClientProvider>
    </div>
  );
};

export default ProjectOne;
