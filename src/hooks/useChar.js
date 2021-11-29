import { useQuery, gql } from "@apollo/client";

const GET_CHAR = gql`
  query {
    characters {
      results {
        id
        name
        image
      }
    }
  }
`;

export const useChar = () => {
    const { data, loading, error } = useQuery(GET_CHAR);

    return {
        data,
        loading,
        error
    }
}