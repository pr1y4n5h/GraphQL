import { useQuery, gql } from "@apollo/client";

const GET_INFO = gql`
  query GetInfo($id: ID!){
    character(id: $id) {
      name
      id
      image
      episode {
        name
        episode
      }
    }
  }
`;

export const useInfo = (charId) => {
  const { data, loading, error } = useQuery(GET_INFO, {
      variables: {
          charId
      }
  });

  return {
    data,
    loading,
    error,
  };
};
