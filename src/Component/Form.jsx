import React,{useState} from 'react'

const Form = () => {
  const[Number,setNumber]=useState(0)

  const increment=()=>{
      setNumber(Number+1)
      console.log(Number);
  }

  const [pickName, setpickName] = useState("")
  const [pickNumber, setpickNumber] = useState("")
  const [pickAddress, setpickAddress] = useState("")
  const [weight, setWeight] = useState("")
  const [item, setItem] = useState("")
  const [mode, setMode] = useState("")
  const [dropName, setdropName] = useState("")
  const [dropAddress, setdropAddress] = useState("")
  const [dropNumber, setdropNumber] = useState("")
  const [location, setlocation] = useState("")
  const [city, setcity] = useState("")
  const [country, setcountry] = useState("")
  const [postalCode, setpostalCode] = useState("")
  const [note, setnote] = useState("")

  


  const [allOrder, setallOrder] = useState([])
  const create=()=>{
    // let order={pickName,pickAddress,pickNumber,weight,item,mode,dropName,dropAddress,dropNumber,location,city,country,postalCode,note }
    setallOrder([...allOrder])
    setpickName("");
    setpickAddress("");
    setpickNumber("");
    setItem("");
    setWeight("");
    setMode("");
    setdropName("");
    setdropAddress("");
    setdropNumber("");
    setlocation("");
    setcity("");
    setcountry("");
    setpostalCode("");
    setnote ("")

  }

  const handleButtonClick = () => {
    increment();
    create();
  };
  const preview =()=>{
    let order={pickName,pickAddress,pickNumber,weight,item,mode,dropName,dropAddress,dropNumber,location,city,country,postalCode,note }
    setallOrder([...allOrder,order])
  }

  return (
    < >
      <div className='flex justify-center bg-green-500'>
     <div className='  class="block max-w-[18rem] rounded-lg bg-white text-left shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 m-2'>
     <h1 className="px-8 p-4 text-4*1 flex item-center justify-center py-4 rounded-md text-pink-500 font-bold font-weight: 700 text-xl font-size: 9.25rem;">{Number}</h1>
     <small className="px-8 p-4 text-4*1 flex item-center justify-center py-4 rounded-md">CREATED ORDER</small>
     </div>
     <div className='  class="block max-w-[18rem] rounded-lg bg-white text-left shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 m-2' >
     <h1 className="px-8 p-4 text-4*1 flex item-center justify-center py-4 rounded-md text-yellow-500 font-bold font-weight: 700 text-xl font-size: 9.25rem;">{Number}</h1>
     <small className="px-8 p-4 text-4*1 flex item-center justify-center py-4 rounded-md">ACCEPTED ORDER</small>
  </div>
      <div className='  class="block max-w-[18rem] rounded-lg bg-white text-left shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 m-2'>
      <h1 className="px-8 p-4 text-4*1 flex item-center justify-center py-4 rounded-md text-orange-500 font-bold font-weight: 700 text-xl font-size: 9.25rem;">0</h1>
     <small className="px-8 p-4 text-4*1 flex item-center justify-center py-4 rounded-md"> COMPLETED ORDER</small>
            

      </div>
      </div>
<section className=" py-1 bg-green-50">
<div className="w-full lg:w-8/12 px-4 mx-auto mt-6">
  <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-green-100 border-0">
    <div className="rounded-t bg-white mb-0 px-6 py-6">
      <div className="text-center flex justify-between">
        <h6 className="text-green-700 text-xl font-bold">
        Create Order
        </h6>
        <button className="bg-orange-500 text-white active:bg-orange-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150" type="button">
         ✖
        </button>
      </div>
    </div>
    <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
      <form>
        <h6 className="text-green-400 text-sm mt-3 mb-6 font-bold uppercase">
          Pick Up Information
        </h6>
        <div className="flex flex-wrap">
          <div className="w-full lg:w-6/12 px-4">
            <div className="relative w-full mb-3">
              <label className="block uppercase text-green-600 text-xs font-bold mb-2" htmlFor="grid-password">
                Pick Up Full-Name
              </label>
              <input type="text" className="border-0 px-3 py-3 placeholder-green-300 text-green-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder="lucky.jesse" onChange={(e)=>setpickName(e.target.value)} value={pickName}/>
            </div>
          </div>
          <div className="w-full lg:w-6/12 px-4">
            <div className="relative w-full mb-3">
              <label className="block uppercase text-green-600 text-xs font-bold mb-2" htmlFor="grid-password">
                Pick Up Address
              </label>
              <input type="text" className="border-0 px-3 py-3 placeholder-green-300 text-green-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder="Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09"onChange={(e)=>setpickAddress(e.target.value)} value={pickAddress}/>
            </div>
          </div>
          <div className="w-full lg:w-6/12 px-4">
            <div className="relative w-full mb-3">
              <label className="block uppercase text-green-600 text-xs font-bold mb-2" htmlFor="grid-password">
                Pick Up Phone Number
              </label>
              <input type="number" className="border-0 px-3 py-3 placeholder-green-300 text-green-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder="number"onChange={(e)=>setpickNumber(e.target.value)} value={pickNumber}/>
            </div>
          </div>
          <div className="w-full lg:w-6/12 px-4">
            <div className="relative w-full mb-3">
              <label className="block uppercase text-green-600 text-xs font-bold mb-2" htmlFor="grid-password">
                Pick Up Item
              </label>
              <input type="text" className="border-0 px-3 py-3 placeholder-green-300 text-green-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder="item"onChange={(e)=>setItem(e.target.value)} value={item}/>
            </div>
          </div>
          <div className="w-full lg:w-6/12 px-4">
            <div className="relative w-full mb-3">
              <label className="block uppercase text-green-600 text-xs font-bold mb-2" htmlFor="grid-password">
                Drop Of Weight In Kg 
              </label>
              <input type="text" className="border-0 px-3 py-3 placeholder-green-300 text-green-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder="10kg"onChange={(e)=>setWeight(e.target.value)} value={weight}/>
            </div>
          </div>
          <div className="w-full lg:w-6/12 px-4">
            <div className="relative w-full mb-3">
              <label className="block uppercase text-green-600 text-xs font-bold mb-2" htmlFor="grid-password">
                Delivery Mode
              </label>
              <input type="text" className="border-0 px-3 py-3 placeholder-green-300 text-green-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder="bicycle,bike,car,truck,"onChange={(e)=>setMode(e.target.value)} value={mode}/>
            </div>
          </div>
        </div>
        <hr className="mt-6 border-b-1 border-green-300"/>
        <h6 className="text-green-400 text-sm mt-3 mb-6 font-bold uppercase">
          Drop Off Information
        </h6>
        <div className="flex flex-wrap">
          <div className="w-full lg:w-12/12 px-4">
            <div className="relative w-full mb-3">
              <label className="block uppercase text-green-600 text-xs font-bold mb-2" htmlFor="grid-password">
              Drop Off Full Name
              </label>
              <input type="text" className="border-0 px-3 py-3 placeholder-green-300 text-green-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder="Bld Mihail Kogalniceanu"onChange={(e)=>setdropName(e.target.value)} value={dropName}/>
            </div>
          </div>
          <div className="w-full lg:w-12/12 px-4">
            <div className="relative w-full mb-3">
              <label className="block uppercase text-green-600 text-xs font-bold mb-2" htmlFor="grid-password">
              Drop Off Address
              </label>
              <input type="text" className="border-0 px-3 py-3 placeholder-green-300 text-green-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder="Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09"onChange={(e)=>setdropAddress(e.target.value)} value={dropAddress}/>
            </div>
          </div>
          <div className="w-full lg:w-12/12 px-4">
            <div className="relative w-full mb-3">
              <label className="block uppercase text-green-600 text-xs font-bold mb-2" htmlFor="grid-password">
              Drop Off Phone Number
              </label>
              <input type="number" className="border-0 px-3 py-3 placeholder-green-300 text-green-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder="number"onChange={(e)=>setdropNumber(e.target.value)} value={dropNumber}/>
            </div>
          </div>
          <div className="w-full lg:w-12/12 px-4">
            <div className="relative w-full mb-3">
              <label className="block uppercase text-green-600 text-xs font-bold mb-2" htmlFor="grid-password">
              Delivery Type
              </label>
              <input type="text" className="border-0 px-3 py-3 placeholder-green-300 text-green-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder="city(within same state or city),  inter-state,  inter-country"onChange={(e)=>setlocation(e.target.value)} value={location}/>
            </div>
          </div>
          <div className="w-full lg:w-4/12 px-4">
            <div className="relative w-full mb-3">
              <label className="block uppercase text-green-600 text-xs font-bold mb-2" htmlFor="grid-password">
                City
              </label>
              <input type="email" className="border-0 px-3 py-3 placeholder-green-300 text-green-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder="New York"onChange={(e)=>setcity(e.target.value)} value={city}/>
            </div>
          </div>
          <div className="w-full lg:w-4/12 px-4">
            <div className="relative w-full mb-3">
              <label className="block uppercase text-green-600 text-xs font-bold mb-2" htmlFor="grid-password">
                Country
              </label>
              <input type="text" className="border-0 px-3 py-3 placeholder-green-300 text-green-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder="United States"onChange={(e)=>setcountry(e.target.value)} value={country}/>
            </div>
          </div>
          <div className="w-full lg:w-4/12 px-4">
            <div className="relative w-full mb-3">
              <label className="block uppercase text-green-600 text-xs font-bold mb-2" htmlFor="grid-password">
                Postal Code
              </label>
              <input type="text" className="border-0 px-3 py-3 placeholder-green-300 text-green-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder="Postal Code"onChange={(e)=>setpostalCode(e.target.value)} value={postalCode}/>
            </div>
          </div>
        </div>

        <hr className="mt-6 border-b-1 border-green-300"/>

        
        <div className="flex flex-wrap">
          <div className="w-full lg:w-12/12 px-4">
            <div className="relative w-full mb-3">
              <label className="block uppercase text-green-600 text-xs font-bold mb-2" htmlFor="grid-password">
              NOTE
              </label>
              <textarea type="text" className="border-0 px-3 py-3 placeholder-green-300 text-green-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" rows="4"onChange={(e)=>setnote(e.target.value)} value={note}> </textarea>
            </div>
          </div>
        </div>
         <button className="bg-orange-500 text-white active:bg-orange-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150" type="button" onClick={handleButtonClick}>
         ADD
        </button>
        <button className="bg-orange-500 text-white active:bg-orange-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150" type="button"onClick={preview} >
         PREVIEW
        </button>
      </form>
    </div>
  </div>
 
</div>
</section>

<div className="container mx-auto mt-4">
<h1 className="text-2xl font-semibold mb-4">LIST OF ORDER</h1>
        <table class="min-w-full table-auto">
            <tbody> <thead>
            <tr className="px-2  text-sm" >
              <th className="px-4 py-2 text-xs">S/N</th>
              <th className="px-4 py-2 text-xs">PICK-UP NAME</th>
              <th className="px-4 py-2 text-xs">PICK-UP ADDRESS</th>
              <th className="px-4 py-2 text-xs">WEIGHT</th>
              <th className="px-4 py-2 text-xs">ITEM</th>
              <th className="px-4 py-2 text-xs">DROP-OFF NAME</th>
              <th className="px-4 py-2 text-xs">DROP-OFF ADDRESS</th>
              <th className="px-4 py-2 text-xs">DROP-OFF NUMBER</th>
              <th className="px-4 py-2 text-xs">LOCATION</th>
              <th className="px-4 py-2 text-xs">CITY</th>
              <th className="px-4 py-2 text-xs">COUNTRY</th>
              <th className="px-4 py-2 text-xs">POSTAL CODE</th>


            </tr>
            </thead>
        {allOrder.map((details,index)=>(
         <tr key={index}>
          <td>{index+1}</td>
          <td>{details.pickName}</td>
          <td>{details.pickAddress}</td>
          <td>{details.pickNumber}</td>
          <td>{details.weight}</td>
          <td>{details.item}</td>
          <td>{details.mode}</td>
          <td>{details.dropName}</td>
          <td>{details.dropAddress}</td>
          <td>{details.dropNumber}</td>
          <td>{details.location}</td>
          <td>{details.city}</td>
          <td>{details.country}</td>
          <td>{details.postalCode}</td>
         </tr>
        ))}
        </tbody>
        </table>
        </div>
    </>
  )
}

export default Form