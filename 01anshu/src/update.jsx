import { useParams } from "react-router-dom";
import { useRef , useEffect , useState} from "react";

const update = () => {

    let {id}  = useParams();

    let [user,setUser] = useState({})

    let uname = useRef();
    let mobile = useref();
    let dob = useRef();

    async function userData() {
        let res = await getData()
        let output = res.filter((item)=>{
          return item .user_id == id 
        })
        await  setUser(output[0])
    }

    async function update(){
      
    }

    useEffect(function(){userData()},[])
  return (
    <div>
      <div className="container">
        <div className="box">
          <h2 className="d-inline-block">update data</h2>
          <a href="/">back</a>
          <div className="control">
            <label htmlFor="">User Name</label>
          <input type="text" ref={uname} defaultValue={user.username} />
          </div>
          <div className="control">
          <label htmlFor="">Date of Birth</label>
          <input type="text " ref={dob} defaultValue="" />
        </div>
        <div className="control">
            <label htmlFor="">Mobile No</label>
          <input type="text" ref={Mobile} defaultValue="" />
          </div>
        </div>
        <button type="button" onClick={update}>update</button>
      </div>
    </div>
  )
}

export default update
