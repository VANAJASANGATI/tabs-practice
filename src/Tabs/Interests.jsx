import "./tabs.css";
export default function Interests({ data, setData, errors }) {
  function handleInterests(e) {
    setData((prev) => ({
      ...prev,
      interests: prev.interests.map((interest) =>
        e.target.name === interest.name
          ? { ...interest, isChecked: !interest.isChecked }
          : interest
      ),
    }));
  }
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: 5,
      }}
    >
      <p className="error">{errors.interests}</p>
      {data.interests.map((interest, id) => (
        <div key={id}>
          <input
            id={interest.name}
            type="checkbox"
            name={interest.name}
            onChange={handleInterests}
            checked={interest.isChecked}
          />
          <label htmlFor={interest.name}>{interest.name}</label>
        </div>
      ))}
    </div>
  );
}
