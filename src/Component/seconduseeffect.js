import React ,{useState,useEffect} from 'react';

function Big() {
    const[data ,setdata] = useState('');

    useEffect(() => 
    {
        const fetchdata = setTimeout(()=>{
            setdata('Your data will be 2 second delay.');
        },2000);


        return() =>
        {
                clearTimeout(fetchdata);
        }
    },[]);


    return(
        <div>
        <h2>Parent componet</h2>
        <Short data = {data} />
        </div>
    )
    
}


function Short({data}) {
    return(
        <div>
        <h2>Child componet</h2>
        <h2>Parent data:{data}</h2>
        </div>
    )
}

export default Big;