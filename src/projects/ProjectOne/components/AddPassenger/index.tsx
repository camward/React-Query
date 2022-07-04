import axios from "axios";
import { useMutation } from "react-query";
import { useFormik } from "formik";
import "./style.css";

function AddPassenger() {
  const formik = useFormik({
    initialValues: {
      name: "",
      trips: 0,
      airline: 1,
    },
    onSubmit: (values) => {
      console.log(JSON.stringify(values, null, 2));

      mutation.mutate({
        name: values.name,
        trips: values.trips,
        airline: values.airline,
      } as any);
    },
  });

  const mutation = useMutation((item) =>
    axios.post("https://api.instantwebtools.net/v1/passenger/", item)
  );

  if (mutation.isSuccess) console.log(mutation.data.data);
  if (mutation.isError) console.log(mutation.error);

  return (
    <div>
      <h4>Добавить запись</h4>
      <form onSubmit={formik.handleSubmit}>
        <div className="field">
          <label htmlFor="name">Name</label>
          <input id="name" type="text" onChange={formik.handleChange} />
        </div>
        <div className="field">
          <label htmlFor="trips">Trips</label>
          <input id="trips" type="number" onChange={formik.handleChange} />
        </div>
        <div className="field">
          <label htmlFor="airline">Airline</label>
          <input id="airline" type="number" onChange={formik.handleChange} />
        </div>
        <div className="field">
          <button type="submit">Добавить</button>
        </div>
      </form>

      {mutation.isLoading && <p>Загрузка...</p>}
      {mutation.isSuccess && (
        <p>Добавлена новая запись с ID: {mutation.data.data._id}</p>
      )}
      {mutation.isError && <p>Ошибка</p>}
    </div>
  );
}
export default AddPassenger;
