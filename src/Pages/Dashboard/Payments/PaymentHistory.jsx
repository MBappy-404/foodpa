import { Helmet } from "react-helmet-async";
import usePayment from "../../../hooks/usePayment";
import { useEffect } from "react";
import { Empty } from "antd";

const PaymentHistory = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [payments] = usePayment();
  return (
    <div>
      <Helmet>
        <title>Foodpa | Payments</title>
      </Helmet>
      <div className="  px-2 md:px-10 min-h-[100vh] lg:px-10">
      {/* <h2 className="text-xl md:text-2xl font-bold pt-5 ml-2 text-gray-500">Recent Payments ({payments?.length})</h2> */}
        <div className="max-w-7xl mx-auto">
          <div className=" px-4 py-5   text-[#333]">
            <div className="max-w-6xl mx-auto">            
              <div className="w-full overflow-x-auto rounded-t-2xl">
                <table className="w-full ">
                  <thead className="">
                    <tr className="text-md border-b font-semibold tracking-wide text-left text-white   bg-[#D58B09] uppercase   ">
                      <th className="px-4   py-5">No</th>
                      <th className="px-4   py-5">Name</th>
                      <th className="px-4   py-5">TrxId</th>
                      <th className="px-4   py-5">
                        Price
                      </th>
                      <th className="px-4    py-5">
                        Status
                      </th>
                      <th className="px-4    py-5">Date</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white">
                   {
                    !payments?.length ? <tr key="skeleton" className="text-gray-700  border-b">
                    <td className="px-4 py-5 text-sm"> {/* Placeholder for serial number */} </td>
                    <td className="px-4 py-5">
                      <div className="flex items-center text-xs">
                        <div>
                          <p className="font-semibold "></p>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-5 text-[10px]"> {/* Placeholder for transaction ID */} </td>
                    <td className="px-4 py-5 text-sm"> <Empty/> </td>
                    <td className="px-4 py-5 text-xs">
                      <span className="px-2 py-1 leading-tight   rounded-sm"> {/* Placeholder for payment status */} </span>
                    </td>
                    <td className="px-2 py-5 text-[9px]"> {/* Placeholder for payment date */} </td>
                  </tr> : <> {payments?.slice().reverse().map((payment, i) => (
                      <tr key={payment._id} className="text-gray-700  border-b">
                        <td className="px-4 py-5 text-sm ">{i + 1}</td>
                        <td className="px-4 py-5 ">
                          <div className="flex items-center text-xs">
                            <div>
                              <p className="font-semibold text-black">
                                {payment.itemsName}
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="px-4 py-5 text-[10px] ">
                          {payment?.trxId}
                        </td>
                        <td className="px-4 py-5 text-sm ">
                          ${payment?.price}
                        </td>
                        <td className="px-4 py-5 text-xs ">
                          <span
                            className={`px-2 py-1  leading-tight   ${payment.trxId ? "bg-green-200" : "bg-red-200 text-gray-600"} rounded-sm `}
                          >
                           
                            {payment.trxId ? "Success" : "Failed"}{" "}
                          </span>
                        </td>
                        <td className="px-2 py-5 text-[9px] ">
                          {payment?.payDate}
                        </td>
                      </tr>
                    ))}</>                  
                   }
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentHistory;
