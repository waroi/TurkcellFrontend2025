import Button from "@/components/Button";

export default function UserButton({ logic, children, onClick }) {
  return (
    <div className="mb-1">
      <Button
        {...(!logic && { variant: "white" })}
        className="py-2 w-100 text-start"
        onClick={onClick}
      >
        <span className={`fw-semibold ${logic ? "" : "text-black"}`}>
          {children}
        </span>
      </Button>
    </div>
  );
}
