import { t } from 'i18next';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, LabelList } from 'recharts';

const Graph = () => {
    const data = [{
        name: "2014",
        uv: 20
    }, {
        name: "2015",
        uv: 60
    }, {
        name: "2016",
        uv: 137
    }, {
        name: "2017",
        uv: 164
    }, {
        name: "2018",
        uv: 230
    }, {
        name: "2019",
        uv: 323
    }, {
        name: "2020",
        uv: 356
    }, {
        name: "2021",
        uv: 469
    }, {
        name: "2022",
        uv: 560
    },
    {
        name: "2023",
        uv: 426
    },
    ]


    return (
        <div className="bg-[#A185DE] w-full flex items-center justify-center " >
            <div className="w-full max-w-[1550px] flex items-center justify-center bg-[url('./assets/icons.png')]   bg-contain  bg-center bg-no-repeat ">
                <div className='w-[340px]  h-64  md:w-[800px] lg:w-[1100px] md:h-[700px] py-4  md:p-[116px] '>
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart
                            data={data}
                            margin={{
                                top: 5,
                                right: 30,
                                left: 20,
                                bottom: 5
                            }}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" stroke="#fff" label={{ value: t("years"), position: 'insideBottomCenter', offset: 0, fill: "#fff", dy: 14 }} />
                            <YAxis stroke="#fff" label={{ value: 'Kits', angle: -90, position: 'insideLeft', fill: "#fff" }} />
                            <Bar dataKey="uv" fill="#fff">
                                <LabelList dataKey="uv" position="top" fill="#fff" />
                            </Bar>
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    )
}

export default Graph;