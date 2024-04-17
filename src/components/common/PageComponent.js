const PageComponent = ({ serverData, movePage }) => {
    return (
      <div className="m-6 flex justify-center">
        {serverData.first ? (
          <></>
        ) : (
          <div
            className="m-2 p-2 w-16 text-center font-bold text-blue-400"
            onClick={() =>
              movePage({ page: serverData.number - 1, size: serverData.size })
            }
          >
            Prev
          </div>
        )}
        {Array.from({ length: serverData.totalPages }, (_, i) => (
          <div
            key={i}
            className={`m-2 p-2 w-12 text-center rounded shadow-md text-white ${
              serverData.number === i ? 'bg-gray-500' : 'bg-blue-400'
            }`}
            onClick={() => movePage({ page: i, size: serverData.size })}
          >
            {i + 1}
          </div>
        ))}
        {serverData.last ? (
          <></>
        ) : (
          <div
            className="m-2 p-2 w-16 text-center font-bold text-blue-400"
            onClick={() =>
              movePage({ page: serverData.number + 1, size: serverData.size })
            }
          >
            Next
          </div>
        )}
      </div>
    );
  };
  
  export default PageComponent;