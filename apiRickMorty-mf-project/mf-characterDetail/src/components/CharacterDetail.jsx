import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";

const CharacterDetail = () => {
  const [characterDetail, setCharacterDetail] = useState({});

  // const params = useParams();
  // console.log(params)
  const { id } = useParams();

  const getCharacterDetail = async () => {
    const response = await fetch(
      `https://rickandmortyapi.com/api/character/${id}`
    );

    const data = await response.json();
    console.log(data);

    setCharacterDetail(data);
  };

  useEffect(() => {
    getCharacterDetail();
  }, []);

  return (
    <>
      <NavLink
        to="/personajes"
        className={"bg-gray-300 text-gray-700 p-3 rounded-md"}
        style={{ fontSize: "1rem" }}
      >
        Go back
      </NavLink>

      <div
        className="text-center grid grid-cols-2 gap-3 mt-10"
        style={{ fontSize: "2rem" }}
      >
        <div>
          <img
            style={{ maxHeight: "300px", margin: "0 auto" }}
            src={characterDetail.image}
            alt={characterDetail.name}
          />
        </div>
        <div>
          <table className="table-auto border-collapse border border-gray-300">
            <thead>
              <tr>
                <th className="border border-gray-300 p-2 bg-gray-200">
                  Campo
                </th>
                <th className="border border-gray-300 p-2 bg-gray-200">
                  Valor
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th className="border border-gray-300 p-2">Nombre:</th>
                <td className="border border-gray-300 p-2">
                  {characterDetail.name}
                </td>
              </tr>
              <tr>
                <th className="border border-gray-300 p-2">Especie:</th>
                <td className="border border-gray-300 p-2">
                  {characterDetail.species}
                </td>
              </tr>
              <tr>
                <th className="border border-gray-300 p-2">Estado:</th>
                <td className="border border-gray-300 p-2">
                  {characterDetail.status}
                </td>
              </tr>
              <tr>
                <th className="border border-gray-300 p-2">Género:</th>
                <td className="border border-gray-300 p-2">
                  {characterDetail.gender}
                </td>
              </tr>
              <tr>
                <th className="border border-gray-300 p-2">Locación:</th>
                <td className="border border-gray-300 p-2">
                  {characterDetail.location
                    ? characterDetail.location.name
                    : "---"}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default CharacterDetail;
