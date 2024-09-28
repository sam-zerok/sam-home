export default async function Life() {
  const shelf = [
    { title: "1984" },
    { title: "To be added..." },
  ];

  return (
    <div className="max-w-2xl px-8 py-6 lg:py-10">
      <div className="flex flex-col items-start gap-4 mb-6 md:gap-8">
        <div className="flex-1 space-y-4">
          <h1 className="mr-2 font-black text-xl lg:text-xl">books</h1>
        </div>
      </div>
      <div>
        <p className="text-muted-foreground text-base py-4">
          Life goes on too fast. 
        </p>
        <h2 className="text-muted-foreground mt-6 mb-4">
          {" "}
          My shelf
          <ul className="list-disc pl-6">
            {shelf.map((book, index) => (
              <li key={index} className="mb-2">
                <span>{book.title}</span>
              </li>
            ))}
          </ul>
        </h2>
      </div>
    </div>
  );
}
