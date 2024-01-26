import './styles.scss';
import TableContainer from '../TableContainer';

const UploadedData = ({ excelData }) => {
    
    const tableContent = excelData.slice(1);

  return (
    <div className='uploaded'>
        <h2 className='uploaded__heading'>Uploads</h2>
        {excelData && (
          <div className='uploaded__content'>
            <table className='uploaded__content__table'>
                <thead>
                    <tr className='uploaded__content__table__table-heading'>
                        <th>SI No.</th>
                        <th>Links</th>
                        <th>Prefix</th>
                        <th>Add Tags</th>
                        <th>Selected Tags</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        tableContent.map((data, index) => {
                            return(
                                <TableContainer key={index} containerName={`container ${index}`} data={data}/>                            
                            )
                        })
                    }
                </tbody>
            </table>
          </div>
      )}

      </div>
  )
}

export default UploadedData
