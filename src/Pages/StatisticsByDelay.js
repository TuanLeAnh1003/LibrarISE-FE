import React from 'react'
import './StatisticsByDelay.css'
import {useState} from 'react'

function StatisticsByDelay() {
    const [date, setDate] = useState()
    const [month, setMonth] = useState()
    const [year, setYear] = useState()

    const handleStatisticDelay = () => {
        // await axios.post()
        // .then
    }

    return (
        <div>
            <div className="thongketrehan">
                <div className="container-statistics-delay">
                    <div className="container_time-statistics-category">
                        <i className="fas fa-calculator"></i>
                        <label for="">Thời gian thống kê</label>
                            <div className="input">
                                <select name="day" className="day_option" onChange={e => setDate(e.target.value)}>
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
                                    <option value="13">13</option>
                                    <option value="14">14</option>
                                    <option value="15">15</option>
                                    <option value="16">16</option>
                                    <option value="17">17</option>
                                    <option value="18">18</option>
                                    <option value="19">19</option>
                                    <option value="20">20</option>
                                    <option value="21">21</option>
                                    <option value="22">22</option>
                                    <option value="23">23</option>
                                    <option value="24">24</option>
                                    <option value="25">25</option>
                                    <option value="26">26</option>
                                    <option value="27">27</option>
                                    <option value="28">28</option>
                                    <option value="29">29</option>
                                    <option value="30">30</option>
                                    <option value="31">31</option>
                                </select>

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

                                <select name="year" className="year_option" onChange={e => setYear(e.target.value)}>
                                    <option value="2018">2018</option>
                                    <option value="2019">2019</option>
                                    <option value="2020">2020</option>
                                    <option value="2021">2021</option>
                                </select>
                            </div>
                        <button className="button-statistic-delay" onClick={handleStatisticDelay}>Tạo báo cáo</button>
                    </div>

                    <div className="container_table-statistics-delay">
                        <div className="title_table">
                            <h2>BÁO CÁO THỐNG KÊ SÁCH TRẢ TRỄ</h2>
                            <p>Ngày {date} tháng {month} năm {year}</p>
                        </div>

                        <table>
                            <thead>
                                <tr className="table_header">
                                    <th>STT</th>
                                    <th>Tên sách</th>
                                    <th>Ngày mượn</th>
                                    <th>Số ngày trả trễ</th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Lập trình cơ bản</td>
                                    <td>01.01.2021</td>
                                    <td>3</td>
                                </tr>

                                <tr>
                                    <td>2</td>
                                    <td>Thuật toán</td>
                                    <td>01.02.2021</td>
                                    <td>4</td>
                                </tr>

                                <tr>
                                    <td>3</td>
                                    <td>CNPM</td>
                                    <td>01.03.2021</td>
                                    <td>4</td>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StatisticsByDelay
