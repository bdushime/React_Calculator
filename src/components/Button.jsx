export default function Button(props) {
  return (
    <>
      <div className="Parent">
        <div className="Child" onClick={() => props.onClick(props.label)}>
          {props.label}
        </div>
      </div>
    </>
  );
}
