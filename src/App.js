import React, { useState, useEffect } from "react";

const getItems = () => {
  const list = localStorage.getItem("list");
  if (list) {
    return JSON.parse(list);
  } else {
    return [];
  }
};

function App() {
  // const qwe = {
  //   name: "kumar brajesh",
  //   age: 25,
  // };
  // localStorage.setItem("objecty", JSON.stringify(qwe));
  // const yu = localStorage.getItem("object");
  // console.log(JSON.parse(yu));

  // sessionStorage.setItem("gh", JSON.stringify(qwe));
  // const hh = sessionStorage.getItem("gh");
  // console.log(JSON.parse(hh))

  const [data, setData] = useState("");
  const [getData, setGetData] = useState(getItems());
  const [index, setIndex] = useState();

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(getData));
  }, [getData]);

  const handleUpdate = (e) => {
    getData[index] = document.getElementById("input").value;
    setGetData([...getData]);
    setData("");
  };

  return (
    <div className="App d-flex justify-content-center">
      <center>
        <h1>Todo App</h1>

        <input
          id="input"
          type="text"
          value={data}
          onChange={(e) => {
            setData(e.target.value);
          }}
        />
        {!(index + 1) ? (
          <button
            onClick={() => {
              setGetData([...getData, data]);

              setData("");
            }}
          >
            Add
          </button>
        ) : (
          <button onClick={handleUpdate}>Update</button>
        )}

        <div>
          {getData.map((cv, ind) => (
            <div key={ind}>
              <span>{cv}</span>
              <button
                onClick={() => {
                  setGetData(getData.filter((cuv, i) => ind !== i));
                }}
              >
                Delete
              </button>
              <button
                onClick={(e) => {
                  setData(e.target.parentElement.firstChild.innerText);
                  setIndex(ind);
                }}
              >
                Edit
              </button>
            </div>
          ))}
        </div>
      </center>
    </div>
  );
}

export default App;
