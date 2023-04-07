import React, { useState } from 'react'

const Card = () => {

  const [userdeta, setUserdeta] = useState({
     title: "",
     name: "",
     details: ""
  });

  const [records, setRecords] = useState([]);

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(name, value);

    setUserdeta({...userdeta, [name]: value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if(!userdeta.name == 0 && !userdeta.details == 0 && !userdeta.title == 0){
      console.log("fsdfsd");
      const newRecords = {...userdeta, id:new Date().getTime().toString()}
      console.log(records);
      
      setRecords([...records, newRecords])
      setUserdeta({title:"", name:"", details:""});
    } else {

    }
  } 
  
  return (
    <>
      <div className='card-form-main'>
        <form >
          <div className="form-group mt-3">
            <label htmlFor="title">Title</label>
            <input type="text" className="form-control" id="title" aria-describedby="emailHelp" placeholder="Title" 
            name='title'
             value={userdeta.title}
             onChange={handleInput}/> 
          </div>
          <div className="form-group mt-3">
            <label htmlFor="name">Name</label>
            <input type="text" className="form-control" id="name" placeholder="Name" 
            name='name'
             value={userdeta.name}
             onChange={handleInput} />
          </div>
          <div className="form-group mt-3">
            <label htmlFor="details">Details</label>
            <textarea className="form-control" rows="4" cols="" 
            name='details'
             value={userdeta.details}
             onChange={handleInput} ></textarea>
          </div>
          <div className='text-center'>
            <button type="submit" className="btn btn-primary mt-4" onClick={handleSubmit}>Submit</button>
          </div>
        </form>
      </div>
      <div className="container cardmain">


      {records.map((item) => (
        <div className="card" key={item.id}>
            <div className="box">
              <div className="content">
                <h2>{item.title}</h2>
                <h3>{item.name}</h3>
                <p>{item.details}</p>
              </div>
            </div>
        </div>
          ))}
			</div> 
    </>
  )
}

export default Card