import { Button, Result } from "antd";
import { Link } from "react-router-dom";



const ErrorPage = () => {
     return (
          <div>
               <Result
                    status="403"
                    title="403"
                    subTitle="Sorry, you are not authorized to access this page."
                    extra={<Button style={{backgroundColor:'#FFA200', color:'white', outline: 'none'}} ><Link to='/' >Back Home</Link></Button>}/>
          </div>
     );
};

export default ErrorPage;