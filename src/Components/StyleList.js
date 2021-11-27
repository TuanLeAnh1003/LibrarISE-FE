import React from 'react'
import './StyleList.css'

function StyleList() {
    const handleExitStyleList = () => {
        const OpenStyleList = document.querySelector('.container__category-list-wrapper')

        OpenStyleList.style.display = 'none'
        console.log(1);
    }

    return (
        <div className="container__category-list-wrapper" onClick={handleExitStyleList}>
                <div className="container__category-list" onClick={e => e.stopPropagation()}>
                    <table className="category-list__table">
                        <thead>
                            <tr className="table__header">
                                <th>STT</th>
                                <th>Tên thể loại</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>A</td>
                            </tr>

                            <tr>
                                <td>2</td>
                                <td>B</td>
                            </tr>

                            <tr>
                                <td>3</td>
                                <td>C</td>
                            </tr>

                            <tr>
                                <td>4</td>
                                <td>D</td>
                            </tr>

                            <tr>
                                <td>5</td>
                                <td>E</td>
                            </tr>

                            <tr>
                                <td>6</td>
                                <td>F</td>
                            </tr>

                            <tr>
                                <td>7</td>
                                <td>G</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
        </div>
    )
}

export default StyleList
