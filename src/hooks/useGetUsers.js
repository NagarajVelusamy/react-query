import {
    useQuery,
} from 'react-query';
import { getUsers } from "../services/getUsers";

export const useGetUsers = () => {

    const { isLoading, isFetching, error, data, refetch } = useQuery(["getUsers"], getUsers, {
        enabled: false,
        retry: false,
        refetchOnWindowFocus: false
    });

    return {
        isLoading,
        isFetching,
        error,
        data,
        refetch
    }
}