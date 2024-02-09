import React from 'react'
import { BarChart } from '@mui/x-charts/BarChart';

const Dashboard = () => {
    const chartSetting = {
        xAxis: [
            {
                label: '',
            },
        ],
        width: 550,
        height: 400,
    };
    const dataset = [
        {
            london: 59,
            paris: 57,
            newYork: 86,
            seoul: 21,
            month: 'Jan',
        },
        {
            london: 50,
            paris: 52,
            newYork: 78,
            seoul: 28,
            month: 'Fev',
        },
        {
            london: 47,
            paris: 53,
            newYork: 106,
            seoul: 41,
            month: 'Mar',
        },
        {
            london: 54,
            paris: 56,
            newYork: 92,
            seoul: 73,
            month: 'Apr',
        },
        {
            london: 57,
            paris: 69,
            newYork: 92,
            seoul: 99,
            month: 'May',
        },
        {
            london: 60,
            paris: 63,
            newYork: 103,
            seoul: 144,
            month: 'June',
        },
        {
            london: 59,
            paris: 60,
            newYork: 105,
            seoul: 319,
            month: 'July',
        },
        {
            london: 65,
            paris: 60,
            newYork: 106,
            seoul: 249,
            month: 'Aug',
        },
        {
            london: 51,
            paris: 51,
            newYork: 95,
            seoul: 131,
            month: 'Sept',
        },
        {
            london: 60,
            paris: 65,
            newYork: 97,
            seoul: 55,
            month: 'Oct',
        },
        {
            london: 67,
            paris: 64,
            newYork: 76,
            seoul: 48,
            month: 'Nov',
        },
        {
            london: 61,
            paris: 70,
            newYork: 103,
            seoul: 25,
            month: 'Dec',
        },
    ];

    const valueFormatter = (value) => `${value}k`;
    return (
        <div className="bg-[#e7e7e7] w-full flex flex-col p-5">
            <div className="flex flex-col gap-5">
                <h3 className="font-semibold">Company Metrics</h3>
                <div className="flex flex-wrap gap-5">
                    <div className="flex flex-col px-4 py-2 gap-5 border-l-8 shadow-md w-[280px] bg-white border-[#4cbc9c]">
                        <div className="text-[#4cbc9c] font-medium text-lg">$406,411.29</div>
                        <div className="">Total Revenue</div>
                    </div>
                    <div className="flex flex-col px-4 py-2 gap-5 border-l-8 shadow-md w-[280px] bg-white border-[#4cbc9c]">
                        <div className="font-medium text-lg">$620</div>
                        <div className="">Total Jobs</div>
                    </div>
                    <div className="flex flex-col px-4 py-2 gap-5 border-l-8 shadow-md w-[280px] bg-white border-[#4cbc9c]">
                        <div className="font-medium text-lg">655</div>
                        <div className="">Tickets Created</div>
                    </div>
                    <div className="flex flex-col px-4 py-2 gap-5 border-l-8 shadow-md w-[280px] bg-white border-[#4cbc9c]">
                        <div className="font-medium text-lg">755</div>
                        <div className="">Tickets Scheduled</div>
                    </div>
                    <div className="flex flex-col px-4 py-2 gap-5 border-l-8 shadow-md w-[280px] bg-white border-[#4cbc9c]">
                        <div className="text-red-500 font-medium text-lg">$110,448.8</div>
                        <div className="">Outstanding Amount</div>
                    </div>
                    <div className="flex flex-col px-4 py-2 gap-5 border-l-8 shadow-md w-[280px] bg-white border-[#4cbc9c]">
                        <div className="font-medium text-lg">105</div>
                        <div className="">Memberships Sold</div>
                    </div>
                    <div className="flex flex-col px-4 py-2 gap-5 border-l-8 shadow-md w-[280px] bg-white border-[#4cbc9c]">
                        <div className="font-medium text-lg">436</div>
                        <div className="">Jobs Completed</div>
                    </div>
                    <div className="flex flex-col px-4 py-2 gap-5 border-l-8 shadow-md w-[280px] bg-white border-[#4cbc9c]">
                        <div className="font-medium text-lg">65</div>
                        <div className="">Total Canceled</div>
                    </div>
                </div>
                <div className="flex w-full mt-5">
                    <div className="flex flex-col px-8 w-full items-center gap-2">
                        <div className='font-medium'>Revenue by Job Location</div>
                        <div className='bg-white w-full rounded-md'>
                            <BarChart
                                dataset={dataset}
                                yAxis={[{ scaleType: 'band', data: ["Everett", "Seattle", "lynnwood", "Bothell", "Mukilteo", "Edmonds"] }]}
                                series={[{ dataKey: 'seoul', valueFormatter }]}
                                layout="horizontal"
                                {...chartSetting}
                            />
                        </div>
                    </div>
                    <div className="flex flex-col px-8 w-full gap-2">
                        <div className='font-medium'>Revenue by Job Types</div>
                        <div className='bg-white rounded-md w-full'>
                            <BarChart
                                dataset={dataset}
                                yAxis={[{ scaleType: 'band', data: ["Service Plumbing", "Bid Work HVAC", "Service HVAC", "Bid Work Plumbing", "HWT Replacement", "Maintenance", "Material Sale"] }]}
                                series={[{ dataKey: 'seoul', valueFormatter }]}
                                layout="horizontal"
                                {...chartSetting}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard