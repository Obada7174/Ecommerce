export default function SearchForm() {
  return (
    <form className="w-1/3 flex justify-between border-[3px] border-primary rounded-lg pl-5">
      <input
        className="flex-grow mr-3 bg-transparent focus:outline-none appearance-none"
        type="search"
        placeholder="Search for products"
      />
      <button className="bg-primary w-1/3 py-3" type="submit">
        Search
      </button>
    </form>
  );
}
