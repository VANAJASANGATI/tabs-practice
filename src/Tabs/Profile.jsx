import { useState } from "react";
export default function Profile({ data, setData }) {
  console.log("data", data);
  function handleData(e) {
    console.log("e", e);
    setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 10,
        justifyContent: "flex-start",
      }}
    >
      <div>
        <label htmlFor="username" style={{ marginRight: 10 }}>
          Name:
        </label>
        <input
          id="username"
          name="name"
          type="text"
          value={data.name}
          onChange={handleData}
        />
      </div>
      <div>
        <label htmlFor="age" style={{ marginRight: 10 }}>
          Age:
        </label>
        <input
          id="age"
          name="age"
          type="number"
          value={data.age}
          onChange={handleData}
        />
      </div>
      <div>
        <label htmlFor="email" style={{ marginRight: 10 }}>
          Email:
        </label>
        <input
          id="email"
          name="email"
          type="email"
          value={data.email}
          onChange={handleData}
        />
      </div>
    </div>
  );
}
