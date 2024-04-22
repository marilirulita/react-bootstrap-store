'use client';
 
export default function Search({ placeholder }) {
  function handleSearch(term) {
    console.log(term);
  }
 
  return (
      <input
        type="text"
        className="form-control w-100 m-md-0"
        placeholder={placeholder}
        onChange={(e) => {
          handleSearch(e.target.value);
        }}
      />
  );
}
