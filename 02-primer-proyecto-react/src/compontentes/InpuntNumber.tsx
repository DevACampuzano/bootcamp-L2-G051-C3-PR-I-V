
interface InpuntNumberProps {
    label: string;
    id: string;
    value: number;
    onChange: (value: number) => void;
}

const InpuntNumber = ({
    label,
    id,
    value,
    onChange,
}:InpuntNumberProps) => {
  return (
    <div className="mb-3 d-flex gap-2 flex-column justify-content-center align-items-center">
      <label htmlFor={id} className="form-label">
        {label}
      </label>
      <input
        type="number"
        className="form-control"
        id={id}
        placeholder="0"
        value={value}
        onChange={(e) => {
            onChange(parseInt(e.target.value));
        }}
      />
    </div>
  );
};

export default InpuntNumber;
