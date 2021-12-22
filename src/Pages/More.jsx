import axios from "axios";
import { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";

export default function More() {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const isMounted = useRef(null);
  const getData = async (id) => {
    setIsLoading(true);
    let { data } = await axios.get(
      "https://json-server-mocker-kittu.herokuapp.com/products/" + id
    );
    if (!isMounted.current) {
      return;
    }
    setData(data);
    setIsLoading(false);
  };
  useEffect(() => {
    getData(id);
    if (!isMounted.current) {
      isMounted.current = true;
    }
    return () => {
      isMounted.current = false;
    };
  }, [id]);
  console.log(data);
  if (isLoading) {
    return <div>.....loading</div>;
  }
  return (
    <div>
      <div>{data.name}</div>
      <div>Rs {data.price}</div>
    </div>
  );
}
