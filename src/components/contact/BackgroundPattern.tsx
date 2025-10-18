export const BackgroundPattern = () => {
  return (
    <div className="fixed inset-0 opacity-[0.02] pointer-events-none">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, hsl(45, 85%, 65%) 2px, transparent 2px), 
                         radial-gradient(circle at 75% 75%, hsl(25, 60%, 55%) 1px, transparent 1px)`,
          backgroundSize: "60px 60px, 40px 40px",
        }}
      />
    </div>
  );
};
