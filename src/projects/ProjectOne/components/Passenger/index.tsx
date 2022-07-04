import { useState } from "react";
import { useQuery } from "react-query";
import { useFormik } from "formik";

function Passenger() {
  const [id, setID] = useState("");

  const formik = useFormik({
    initialValues: {
      _id: "",
    },
    onSubmit: (values) => {
      console.log(JSON.stringify(values, null, 2));
      setID(values._id);
    },
  });

  const fetchPassenger = async (id: string) => {
    const res = await fetch(
      `https://api.instantwebtools.net/v1/passenger/${id}`
    );
    return res.json();
  };

  const { data, error, isLoading } = useQuery(["passenger", id], () =>
    fetchPassenger(id)
  );

  return (
    <div>
      <h4>Поиск по ID</h4>
      <form onSubmit={formik.handleSubmit}>
        <input id="_id" name="_id" type="text" onChange={formik.handleChange} />
      </form>
      {data && (
        <p>
          {data.name}, {data.trips}
        </p>
      )}
      {error && <p>Ошибка</p>}
      {isLoading && <p>Загрузка...</p>}
    </div>
  );
}

export default Passenger;
