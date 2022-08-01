function Home() {
  let rows = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <div className='container px-28'>
      <h1 className='text-center text-5xl my-5'>Sudoku Solver</h1>
      <table className='table-auto  mx-auto'>
        <tbody>
          {rows.map((row) => {
            return (
              <tr className=''>
                {rows.map((column) => {
                  return (
                    <td className='px-1 py-2 border-2 border-blue'>
                      <input
                        id='cell'
                        type='text'
                        maxLength={'1'}
                        // value={column}
                        className='w-10 px-2'
                      />
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Home;
