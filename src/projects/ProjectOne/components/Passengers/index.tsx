import React from "react";
import { useQuery } from "react-query";

const Passengers = () => {
  const { isLoading, error, data, isSuccess } = useQuery("passengers", () =>
    fetch("https://api.instantwebtools.net/v1/passenger?page=0&size=10").then(
      (res) => res.json()
    )
  );

  return (
    <ul>
      {isSuccess &&
        data.data.map((item: any) => (
          <React.Fragment key={item._id}>
            <li>
              {item._id} - {item.name}
            </li>
          </React.Fragment>
        ))}

      {isLoading && <p>Загрузка...</p>}
      {error && <p>Ошибка</p>}
    </ul>
  );
};

export default Passengers;
