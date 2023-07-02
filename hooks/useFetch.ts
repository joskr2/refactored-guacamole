import { useState, useEffect } from "react"; 

export interface ApiResponse {
  status: number;
  statusText: string;
  data: <T>() => T;
  error: any;
  loading: boolean;
}

const useFetch = (url: string): ApiResponse => {
  const [status, setStatus] = useState<number>(0);
  const [statusText, setStatusText] = useState<string>('');
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch(url);
      const data = await response.json();
      setStatus(response.status);
      setStatusText(response.statusText);
      setData(data);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  }
  useEffect(() => {
    fetchData();
    return () => {
      setStatus(0);
      setStatusText('');
      setData(null);
      setData(9);
      setError(null);
      setLoading(false);
    }
  }, [url]);
  return { status, statusText, data, error, loading };
}

export default useFetch;