import React from 'react'
import './Setting.css'
import {useState} from 'react'

function Setting() {
    const [ageFrom, setAgeFrom] = useState()
    const [ageTo, setAgeTo] = useState()
    const [duration, setDuration] = useState()
    const [numStyle, setNumStyle] = useState()
    const [publishedYear, setPublishedYear] = useState()
    const [maxNumberBooks, setMaxNumberBooks] = useState()
    const [maxDate, setMaxDate] = useState()

    const handleUpdateSetting = () => {
        if (ageFrom != null &&
            ageTo != null &&
            duration != null &&
            numStyle != null &&
            publishedYear != null &&
            maxNumberBooks != null &&
            maxDate != null) {
            // await axios.post()
            // .then
        } else {
            alert("Còn cài đặt chưa được xác nhận")
        }
    }

    const handleOpenStyleList = () => {
        const OpenStyleList = document.querySelector('.container__category-list-wrapper')

        OpenStyleList.style.display = 'block'
    }

    return (
        <div>
            <div className="caidat">
                <div className="container">
                    <div className="container_child">
                        <div className="child">
                            
                            <div className="child__line">
                                <label className="child__line-lable" for="min-age max-age">Tuổi độc giả</label>
                                <div className="child_line-input-container-2">
                                    <div className="child__input-2">
                                        <span className="child__input-gap">từ</span>
                                        <select name="age-to" className="child__options" onChange={e => setAgeFrom(e.target.value)}>
                                            <option value="18">18</option>
                                            <option value="19">19</option>
                                            <option value="20" onClick={e => setAgeFrom(e.target.value)}>20</option>
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
                                            <option value="32">32</option>
                                            <option value="33">33</option>
                                            <option value="34">34</option>
                                            <option value="35">35</option>
                                            <option value="36">36</option>
                                            <option value="37">37</option>
                                            <option value="38">38</option>
                                            <option value="39">39</option>
                                            <option value="40">40</option>
                                            <option value="41">41</option>
                                            <option value="42">42</option>
                                            <option value="43">43</option>
                                            <option value="44">44</option>
                                            <option value="45">45</option>
                                            <option value="46">46</option>
                                            <option value="47">47</option>
                                            <option value="48">48</option>
                                            <option value="49">49</option>
                                            <option value="50">50</option>
                                            <option value="51">51</option>
                                            <option value="52">52</option>
                                            <option value="53">53</option>
                                            <option value="54">54</option>
                                            <option value="55">55</option>
                                        </select>
                                    </div>
            
                                    <div className="child__input-2 ">
                                        <span className="child__input-gap">đến</span>
                                        <select name="age-from" className="child__options" onChange={e => setAgeTo(e.target.value)}>
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
                                            <option value="32">32</option>
                                            <option value="33">33</option>
                                            <option value="34">34</option>
                                            <option value="35">35</option>
                                            <option value="36">36</option>
                                            <option value="37">37</option>
                                            <option value="38">38</option>
                                            <option value="39">39</option>
                                            <option value="40">40</option>
                                            <option value="41">41</option>
                                            <option value="42">42</option>
                                            <option value="43">43</option>
                                            <option value="44">44</option>
                                            <option value="45">45</option>
                                            <option value="46">46</option>
                                            <option value="47">47</option>
                                            <option value="48">48</option>
                                            <option value="49">49</option>
                                            <option value="50">50</option>
                                            <option value="51">51</option>
                                            <option value="52">52</option>
                                            <option value="53">53</option>
                                            <option value="54">54</option>
                                            <option value="55">55</option>
                                        </select>  
                                    </div>                     
                                </div>
                            </div>

                            <div className="child__line">
                                <label className="child__line-lable" for="min-age max-age">Thời hạn giá trị thẻ</label>
                                <div className="child__input">
                                    <select name="age-to" className="child__options" onChange={e => setDuration(e.target.value)}>
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
                                    <span className="child__input-gap">tháng</span>
                            </div>
                        </div>

                    </div>

                    <div className="container_child">
                        <div className="child">
                            
                            <div className="child__line">
                                <label className="child__line-lable" for="min-age max-age">Số thể loại</label>
                                <div className="child_line-input-container-2">
                                    <div className="child__input-2 child__input-gap-type">
                                        <select name="age-to" className="child__options" onChange={e => setNumStyle(e.target.value)}>
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
                                    </div>
                                    <p className="child__line-link" onClick={handleOpenStyleList}>Danh sách thể loại</p>
                                </div>
                
                            </div>

                            <div className="child__line">
                                <label className="child__line-lable" for="min-age max-age">Khoảng cách nhận xuất bản</label>
                                <div className="child__input">
                                    <select name="age-to" className="child__options" onChange={e => setPublishedYear(e.target.value)}>
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
                                    <span className="child__input-gap">năm</span>
                                </div>
                        </div>

                    </div>

                    <div className="container_child">
                        <div className="child">
                            
                            <div className="child__line">
                                <label className="child__line-lable" for="min-age max-age">Số sách mượn tối đa</label>
                                <div className="child__input">
                                    <select name="age-to" className="child__options" onChange={e => setMaxNumberBooks(e.target.value)}>
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
                                    <span className="child__input-gap">quyển</span>
                                </div>
                    
                            </div>

                            <div className="child__line">
                                <label className="child__line-lable" for="min-age max-age">Số ngày mượn tối đa</label>
                                <div className="child__input">
                                    <select name="age-to" className="child__options" onChange={e => setMaxDate(e.target.value)}>
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
                                    <span className="child__input-gap">ngày</span>
                            </div>
                        </div>

                    </div>

                    <div className="container_button">
                        <button className="button" onClick={handleUpdateSetting}>Cập nhật</button>
                    </div>
                </div>
            </div>
        </div>
        </div>
        </div>
        </div>
    )
}

export default Setting
