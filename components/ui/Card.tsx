export default function Card({ children }: { children: React.ReactNode }) {
    return (
      <div className="bg-white border outline outline-4 outline-white rounded-[12px] shadow-md p-4">
        {children}
      </div>
    );
  }
  