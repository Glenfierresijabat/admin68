// import bills from "../../../data/bills";
import { useEffect, useState } from "react";
import Card from "../../Elements/Card";
import axios from "axios";
import { Navigate } from "react-router-dom";
import { CircularProgress } from "@mui/material";

const CardBill = () => {
    const [biils, setBills] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const getData = async () => {
        try {
            setIsLoading(true);
            const refreshToken = localStorage.getItem("refreshToken");

            const response = await axios.get(
                "https://jwt-auth-eight-neon.vercel.app/bills",
                {
                headers: {
                    Authorization: `Bearer ${refreshToken}`,
                },
                }
            );

            setBills(response.data.data)
        } catch (error) {
            if (error.response) {
                if (error.response.status == 401) {
                  localStorage.removeItem("refreshToken");
                  localStorage.removeItem("userName");
                  Navigate("/login");
                } else {
                  console.log(error.response);
                }
              }
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        getData();
    }, []);

    const billCard = biils.map((bill) => (
        <div key={bill.id} className="lg:flex justify-between pt-3 pb-3">
            <div className="flex">
                <div className="bg-special-bg me-3 px-4 rounded-lg flex place-content-center flex-col">
                    <span className="text-xs">{bill.month}</span>
                    <span className="text-2xl font-bold">{bill.date}</span>
                </div>
                <div className="">
                    <img className="h-6" src={`images/${bill.logo.toLowerCase()}`} />
                    <span className="font-bold">{bill.name}</span>
                    <br />
                    <span className="text-xs">Last Charge - {bill.lastCharge}</span>
                </div>
            </div>
            <div className="flex place-content-center flex-col">
                <span className="p-2 border rounded-lg font-bold text-center">
                    ${bill.amount}
                </span>
            </div>
        </div>
    ));

    return (
        <Card
            title="Upcoming Bill"
            desc={
                <div className="h-full flex flex-col justify-around">
                    {isLoading ? (
                        <div className="flex justify-center items-center h-full">
                            <CircularProgress color="inherit" />
                        </div>
                    ) : billCard}
                </div>
            }
        />
    )
}

export default CardBill