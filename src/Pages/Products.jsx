import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Products() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const getData = async () => {
    let { data } = await axios.get(
      "https://json-server-mocker-kittu.herokuapp.com/products"
    );
    setData(data);
  };
  useEffect(() => {
    setLoading(true);
    getData();
    setLoading(false);
  }, []);
  if (loading === true) {
    return <h1>Loading...</h1>;
  } else {
    return (
      <div
        style={{ display: "flex", justifyContent: "center", margin: "20px" }}
      >
        <table border="1">
          <thead>
            <tr>
              <th>Product</th>
              <th>Price</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => {
              return (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>Rs {item.price}</td>
                  <td>
                    <Link to={`/products/${item.id}`}>More details</Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
