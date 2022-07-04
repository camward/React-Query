import React, { useState } from "react";
import { useQuery } from "react-query";
import "./style.css";

function Passengers() {
  const [page, setPage] = useState(0);

  const fetchPassengers = async (page: number) => {
    const res = await fetch(
      `https://api.instantwebtools.net/v1/passenger?page=${page}&size=10`
    );
    return res.json();
  };

  const { isLoading, error, data, isSuccess } = useQuery(
    ["passengers", page],
    () => fetchPassengers(page),
    { keepPreviousData: false }
  );

  return (
    <div>
      <div className="navigate">
        <button onClick={() => setPage((old) => Math.max(0, old - 1))}>
          Назад
        </button>
        <div className="page">{page + 1}</div>
        <button onClick={() => setPage((old) => old + 1)}>Вперед</button>
      </div>
      <ul className="list">
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
    </div>
  );
}

export default Passengers;
