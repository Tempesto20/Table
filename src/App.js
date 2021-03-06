import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Table from './table/table';
import Loader from './loader/loader';
import DetailItem from './detailItem/detailItem';



function App() {
  const baseUrl = `http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}`

  const [contactData, setContactData] = useState([]);
  const [isLoading, setIsLoading] = useState(true); 
  const [directionSort, setDirectionSort] = useState(true);
  const [rowItem , setRowItem] = useState('');


  const sortData = (field) => {
    
    const copyData = contactData.concat();
    
    let sortData;
    if (directionSort) { 
      sortData = copyData.sort(
      (a,b)=>{return a[field] > b[field] ? 1 : -1}
    )
  }
  sortData = copyData.reverse(
    (a,b)=>{return a[field] > b[field] ? 1 : -1}
  )
    setContactData(sortData)
    setDirectionSort(!directionSort)
    //console.log(directionSort)
  }
  
  useEffect(() => {
    axios(baseUrl)
      .then(
        (res) => {
          setContactData(res.data)
          setIsLoading(false)  
        }
      );
  }, [])

  const detailRow =(row)=>{
    setRowItem(row)
  }

  return (
    <div className="container">
      {isLoading ? <Loader /> : <Table contactData={contactData}
        sortData={sortData}
          directionSort={directionSort} 
          detailRow={detailRow} />}
          <DetailItem detailItemData={rowItem}/>
    </div>
  );
}


export default App;
