export default function DashContainer({ children }) {
  return (
    <div className="m-4 md:m-10 p-4 md:p-10 md:mt-6 md:pt-8 bg-white rounded-2xl dark:bg-secondary-dark-bg overflow-hidden">
      {children}
    </div>
  );
}
