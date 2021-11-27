import React from 'react'
import './StatisticsByCategory.css'
import axios from 'axios';
import {useState, useEffect} from 'react'

function StatisticsByCategory() {
    const [month, setMonth] = useState()
    const [year, setYear] = useState()
    const [listCategory, setListCategory] = useState([])

    // useEffect(() => {
    //     axios.get('http://localhost:5000/admin/thongketheloai')
    //     .then(data => {
    //         if(data.data.length >= 1) {
    //             setListCategory([...data.data])
    //         } else {
    //             alert('Chưa có thống kê nào')
    //         }
    //     })
    //     .catch(err => alert('Có lỗi xảy ra. Hãy thử tải lại trang!'))
    // }, [])
    console.log(month, year);
    const handleCreateStatistic = async () => {
        if (month != null &&
            year != null) {
            await axios.post('http://localhost:5000/admin/thongketheloai/tao', {
                month: month,
                year: year,
            })
            .then (data => {
                console.log(data);
                if (data.data.length >= 0) {
                    setListCategory([...data.data])
                    console.log(listCategory);
                }
            }) 
        } else {
            alert("Thống kê thất bại")
        }
    }

    const SumBorrow = listCategory.reduce((total, item) => {
        return total += item.SoLanMuon;
    }, 0)

    return (
        <div className="thongketheloai">
            <div className="container-statistics-category">
                <div className="container_time-statistics-category">
                    <i class="fas fa-calculator"></i>
                    <label for="">Thời gian thống kê</label>
                    <div className="input">
                            {/* <!-- <input type="number" name="" value=""><br>
                            <input type="number" name="" value=""><br> --> */}

                            <select name="month" className="month_option" onChange={e => setMonth(e.target.value)}>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                                <option value="10">10</option>
                                <option value="11">11</option>
                                <option value="12">12</option>
                            </select>

                            <select name="year" className="year_option"  onChange={e => setYear(e.target.value)}>
                                <option value="2018">2018</option>
                                <option value="2019">2019</option>
                                <option value="2022">2020</option>
                                <option value="2021">2021</option>
                            </select>
                    </div>
                    <button className="button-statistic" onClick={handleCreateStatistic}>Tạo báo cáo</button>
                </div>

                <div className="container_table-statistics-category">
                    <div className="title_table">
                        <h2>BÁO CÁO THỐNG KÊ THEO THỂ LOẠI</h2>
                        <p>Tháng {month} năm {year}</p>
                    </div>

                    <table>
                        <thead>
                            <tr className="table_header">
                                <th>STT</th>
                                <th>Tên thể loại</th>
                                <th>Số lượt mượn</th>
                                <th>Tỉ lệ</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                listCategory.map((item, index) => {
                                    var ratio = Math.round(item.SoLanMuon / SumBorrow * 100);
                                    return (
                                    <tr key={index}>
                                        <td className="table__stt">{index+1}</td>
                                        <td >{item.TenTheLoai}</td>
                                        <td >{item.SoLanMuon}</td>
                                        <td >{ratio}%</td>
                                    </tr>
                                )})
                            }

                            <tr>
                                <td rowspan="2" colspan="3">Tổng lượt mượn:</td>
                                <td>
                                    {SumBorrow}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default StatisticsByCategory
