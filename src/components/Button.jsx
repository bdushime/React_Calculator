export default function Button(props) {
  return (
    <>
      <div className="Parent">
        <button className="Child" onClick={() => props.onClick(props.label)}>
          <span className="button-label">{props.label}</span> 
        </button>
      </div>
    </>
  );
}
