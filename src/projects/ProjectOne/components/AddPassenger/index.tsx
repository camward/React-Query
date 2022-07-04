import axios from "axios";
import { useMutation } from "react-query";
import { useFormik } from "formik";

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
        <p>
          <label>
            Name
            <input id="name" type="text" onChange={formik.handleChange} />
          </label>
        </p>
        <p>
          <label>
            Trips
            <input id="trips" type="number" onChange={formik.handleChange} />
          </label>
        </p>
        <p>
          <label>
            Airline
            <input id="airline" type="number" onChange={formik.handleChange} />
          </label>
        </p>

        <button type="submit">Добавить</button>
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
