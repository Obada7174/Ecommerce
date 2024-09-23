export default function BackToTop() {
  return (
    <div
      onClick={() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
      className="flex justify-center py-3 hover:opacity-95 bg-slate-600 uppercase font-bold text-white cursor-pointer"
    >
      Back To Top
    </div>
  );
}
